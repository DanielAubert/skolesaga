/**
 * Engelsk VG1 - Narrative versjoner Del 4 (Kapittel 8.1-10.4)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Section 8: The United Kingdom (8.1-8.4)
 * Section 9: The United States (9.1-9.4)
 * Section 10: Other English-speaking Countries (10.1-10.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 8.1 NARRATIVE: British History Overview
// ============================================================================

export const CHAPTER_ENGELSK_VG1_8_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-8-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '8.1',
  title: 'British History Overview',
  subtitle: 'Narrative Version',
  description: 'Journey through centuries of British history - from Roman legions to modern Britain.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden ut fra historiske sammenhenger',
  ],
  linkedChapterId: 'engelsk-vg1-8-1',
  content: [
    {
      id: 'engelsk-vg1-8-1-n-intro',
      type: 'text',
      content: `## An Island That Changed the World

Picture yourself standing on the white cliffs of Dover, looking out across the English Channel. The wind whips at your coat as seagulls wheel overhead, and across twenty-one miles of grey water lies France - close enough that on clear days you can see its coastline. For thousands of years, people have stood in this very spot - Roman soldiers nervously awaiting orders to cross, Norman invaders planning their conquest, medieval traders counting ships, and anxious watchers scanning the horizon for Nazi bombers during World War II. This small, often rainy island has shaped the modern world in ways few other places have.

British history is not just about kings and queens, though there are plenty of those - from the legendary King Arthur to the scandalous Henry VIII with his six wives, from the warrior queen Elizabeth I who defeated the Spanish Armada to the current King Charles III. But British history is also about ordinary people: the peasants who revolted in 1381, the workers who built the first factories, the suffragettes who fought for women's right to vote, and the immigrants from across the former empire who transformed British cities into multicultural metropolises.

This is a story about how a rainy island off the coast of Europe became the center of the largest empire in human history, controlling a quarter of the world's land and people. It is about revolutions - not just political ones, but revolutions in thought, science, industry, and government that still affect your daily life. The scientific method, parliamentary democracy, the industrial economy, the English language itself - all were shaped by what happened on this island.

Why does British history matter to you, sitting in Norway in the 21st century? Because when you watch Netflix, you are using streaming technology built on ideas about computing that emerged from British universities. When you discuss democracy, you are using concepts refined in the British Parliament over centuries. When you speak English - as you are learning to do - you are using a language that carries the marks of every invasion and every era Britain has experienced: Celtic words, Latin from the Romans, Germanic roots from the Anglo-Saxons, French vocabulary from the Normans, and borrowings from every corner of the former empire.

Understanding British history helps you understand why the world is organized the way it is - why some countries are rich and others poor, why English is spoken on every continent, why parliamentary democracy spread across the globe, and why debates about colonialism and its legacy remain so heated today.

Let us travel through time together, from ancient Britons painting themselves blue with woad for battle, through medieval castles and Tudor courts, past smoking factory chimneys and trenches filled with mud, to the smartphone-wielding Londoners of today walking past Roman walls and Norman towers on their way to work in glass skyscrapers.`,
    },
    {
      id: 'engelsk-vg1-8-1-n-section1',
      type: 'text',
      content: `## From Romans to Normans: Foundations of a Nation

In 43 AD, Roman legions landed on British shores under Emperor Claudius. Imagine being a Celtic farmer, tending your small plot of land, when you first see these disciplined soldiers marching past in perfect formation - their armor glinting, their standards held high, their sandaled feet moving in perfect unison on roads they would soon build across your homeland. The Celts who inhabited Britain were not primitive - they had sophisticated metalwork, traded with the continent, and had their own religious practices led by the mysterious Druids. But they could not match Roman military organization.

The Romans brought transformative changes during their nearly 400-year occupation. They built roads so straight and well-engineered that some are still in use today. They constructed cities like Londinium (London), Aquae Sulis (Bath), and Eboracum (York), complete with forums, bathhouses, and central heating systems called hypocausts. They introduced written records, a monetary economy, and Latin - which would influence English vocabulary for centuries. Words like "street" (strata), "wall" (vallum), and "wine" (vinum) came from the Romans.

But the Romans never quite conquered the whole island. The fierce Pictish tribes of Scotland resisted so effectively that Emperor Hadrian ordered a massive wall built across the narrowest part of Britain - Hadrian's Wall, 73 miles long, which still stands in ruins today as the most impressive Roman monument in Britain. Beyond that wall, the Romans never established permanent control.

When Rome itself began to crumble under barbarian attacks in the early 400s, the legions were recalled to defend the homeland. By 410 AD, Britain was on its own. What followed was centuries of invasion, chaos, and transformation. New peoples arrived from across the North Sea: the Angles, Saxons, and Jutes from what is now Germany and Denmark. These Germanic tribes were not a unified force but separate groups who fought each other as much as they fought the remaining Romano-British population.

These Anglo-Saxons gave us the very word "English" (from the Angles) and the foundations of our modern language. Listen to the most common words in English - "the," "is," "you," "house," "water," "mother" - and you are hearing Anglo-Saxon. They also brought new gods: Tiw (god of war), Woden (the all-father), Thor (god of thunder), and Freya (goddess of love) - whose names survive in our days of the week: Tuesday (Tiw's day), Wednesday (Woden's day), Thursday (Thor's day), and Friday (Freya's day).

The Anglo-Saxons gradually converted to Christianity after 597 AD, when Pope Gregory sent missionaries led by Augustine. This brought Latin learning back to Britain, monasteries that preserved ancient knowledge, and a connection to the wider Christian world. Anglo-Saxon England produced remarkable art like the Lindisfarne Gospels and literature like the epic poem Beowulf.

But the Anglo-Saxons were not the last invaders. In 1066, William, Duke of Normandy, sailed from France with perhaps 7,000 men and changed everything. The Battle of Hastings on October 14, 1066, lasted just one day, but its effects lasted centuries. King Harold II of England, who had already defeated a Norwegian invasion at Stamford Bridge just three weeks earlier, was killed - according to legend, by an arrow through his eye. William became king, and England would never be the same.

The Norman Conquest created a new ruling class. French-speaking nobles replaced English ones. French became the language of the court, law, and culture, while English remained the language of the common people - the peasants and servants. This linguistic divide lasted for centuries and explains why modern English has so many synonym pairs: the animal in the field has an English name (cow, pig, sheep, deer), but the meat on the noble's table has a French name (beef, pork, mutton, venison). The farmer used one word; the lord who ate the results used another.

The Normans built massive stone castles to control their new territory - the Tower of London, Windsor Castle, and hundreds of others that still dot the British landscape. They introduced feudalism, a rigid social hierarchy where everyone from the king down to the lowliest serf had defined obligations to those above and below them. And they created the Domesday Book in 1086 - essentially the first national census, recording every manor, farm, pig, and penny in England so that William knew exactly what he owned and what taxes he could collect.

The effects of 1066 are still visible today in English law (influenced by Norman legal practices), in the English language (perhaps 30% of English words have French origins), in the castles and cathedrals that tourists visit, and even in surnames we carry - names like Warren, Percy, and Sinclair came with the Normans.`,
    },
    {
      id: 'engelsk-vg1-8-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on early British history:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-1-n-quiz1-q0',
            task: 'Why does English have pairs like "cow/beef" and "pig/pork"?',
            options: [
              { id: 'a', text: 'Because English borrowed randomly from Latin', isCorrect: false },
              { id: 'b', text: 'Because Anglo-Saxon farmers used one word while Norman French nobles used another', isCorrect: true },
              { id: 'c', text: 'Because the Romans introduced the animal words', isCorrect: false },
              { id: 'd', text: 'Because medieval poets invented fancy alternatives', isCorrect: false },
            ],
            solution: 'After 1066, Norman French became the language of the ruling class while English remained the language of common people. Farmers used English words for animals (cow, pig, sheep), but by the time the meat reached noble tables, it had French names (beef, pork, mutton).',
          },
          {
            id: 'engelsk-vg1-8-1-n-quiz1-q1',
            task: 'What did the Romans build across northern Britain to keep out the Picts?',
            options: [
              { id: 'a', text: 'The Tower of London', isCorrect: false },
              { id: 'b', text: 'Windsor Castle', isCorrect: false },
              { id: 'c', text: 'Hadrian\'s Wall, stretching 73 miles', isCorrect: true },
              { id: 'd', text: 'A series of wooden forts along the Thames', isCorrect: false },
            ],
            solution: 'Emperor Hadrian ordered a massive wall built across the narrowest part of Britain to keep out the fierce Pictish tribes of Scotland. The wall stretched 73 miles and still stands in ruins today.',
          },
          {
            id: 'engelsk-vg1-8-1-n-quiz1-q2',
            task: 'Where do the names of English weekdays like Tuesday and Thursday come from?',
            options: [
              { id: 'a', text: 'Roman emperors', isCorrect: false },
              { id: 'b', text: 'Celtic druids', isCorrect: false },
              { id: 'c', text: 'Norman French lords', isCorrect: false },
              { id: 'd', text: 'Anglo-Saxon gods like Tiw and Thor', isCorrect: true },
            ],
            solution: 'The Anglo-Saxons named days after their gods: Tiw (Tuesday), Woden (Wednesday), Thor (Thursday), and Freya (Friday). These names survive in modern English over a thousand years later.',
          },
          {
            id: 'engelsk-vg1-8-1-n-quiz1-q3',
            task: 'What major event happened in 1066?',
            options: [
              { id: 'a', text: 'The Romans left Britain', isCorrect: false },
              { id: 'b', text: 'William of Normandy conquered England at the Battle of Hastings', isCorrect: true },
              { id: 'c', text: 'The Anglo-Saxons arrived from Germany', isCorrect: false },
              { id: 'd', text: 'Christianity was introduced to Britain', isCorrect: false },
            ],
            solution: 'In 1066, William, Duke of Normandy, defeated King Harold II at the Battle of Hastings and became king of England. This Norman Conquest created a French-speaking ruling class and permanently changed the English language and society.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-1-n-section2',
      type: 'text',
      content: `## Magna Carta and the Birth of Rights

Picture a meadow called Runnymede, by the River Thames, in June 1215. On one side stands King John - unpopular, defeated in wars against France, and desperate for money. On the other side stands a group of rebellious barons, armed and angry, demanding that the king recognize limits to his power. They force him to put his seal on a document that will echo through the centuries: Magna Carta, the "Great Charter."

Reading the original Magna Carta today might disappoint you. Much of it deals with specific medieval grievances: fishing rights in the Thames, how much widows can inherit, the regulation of wine merchants. But buried within these 63 clauses was a revolutionary idea that would change the world: even the king is subject to the law.

"No free man shall be seized or imprisoned, or stripped of his rights or possessions, or outlawed or exiled, or deprived of his standing in any way, nor will we proceed with force against him, or send others to do so, except by the lawful judgment of his equals or by the law of the land." This single clause laid the foundation for habeas corpus - your fundamental right not to be imprisoned without trial, to know what you are accused of, and to be judged fairly. When American colonists demanded their rights, when the framers of the US Constitution sought to protect liberty, when the United Nations drafted the Universal Declaration of Human Rights - all looked back to this document signed in an English meadow over 800 years ago.

King John himself had no intention of honoring Magna Carta, and within months, civil war had broken out. But the principle had been established. Future kings would reissue and confirm the charter dozens of times. The idea that power has limits, that even rulers must follow rules, had taken root in English political culture.

The medieval period also saw Parliament emerge from these same principles. The word itself comes from the French "parler" - to speak. Originally, Parliament was simply a meeting where the king discussed matters with his most powerful subjects - nobles and high churchmen. But the king needed money, especially for wars, and the only way to get it was to ask. Gradually, representatives of towns and counties were summoned too - the House of Commons - because they controlled the wealth the king needed.

By the 1300s, the principle of "no taxation without representation" was established. The king could not levy new taxes without Parliament's consent. Parliament began proposing laws as well as approving taxes. It was not democracy as we understand it - only property-owning men had any representation, and the king still held enormous power - but the idea that rulers need consent from the governed was taking root. This seed would eventually flower into modern parliamentary democracy.

Then came the Reformation, which tore apart the religious unity of Western Europe. In England, it came not from theological conviction but from a king's desperation for an heir. Henry VIII needed a son to secure his dynasty, but his wife Catherine of Aragon had given him only a daughter, Mary. Henry wanted an annulment so he could marry Anne Boleyn, but Pope Clement VII refused - partly for religious reasons, partly because Catherine's nephew was the Holy Roman Emperor whose armies had recently sacked Rome.

In 1534, Henry VIII did something unprecedented: he declared himself Supreme Head of the Church of England, breaking with Rome entirely. The monasteries were dissolved, their vast wealth seized by the crown. Religious art was destroyed, saints' shrines smashed, centuries of tradition overturned. England became Protestant - though exactly what kind of Protestant remained contested for centuries.

The religious question would shape British politics for the next 200 years. Catholic or Protestant? This seemingly theological question would determine who could be king, who could hold office, who could attend university, and often whether you lived or died. Henry's daughter Mary I earned the nickname "Bloody Mary" by burning nearly 300 Protestants. Her sister Elizabeth I executed Catholics who denied her legitimacy. The Gunpowder Plot of 1605 - Guy Fawkes' attempt to blow up Parliament - was a Catholic conspiracy. The English Civil War had religious dimensions. Not until the 19th century would full Catholic emancipation come, and the monarch is still required to be Protestant today.`,
    },
    {
      id: 'engelsk-vg1-8-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on Magna Carta and the Reformation:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-1-n-quiz2-q0',
            task: 'What was revolutionary about Magna Carta?',
            options: [
              { id: 'a', text: 'It established democracy with universal voting', isCorrect: false },
              { id: 'b', text: 'It established that even the king is subject to the law', isCorrect: true },
              { id: 'c', text: 'It freed all the serfs and peasants', isCorrect: false },
              { id: 'd', text: 'It created the Church of England', isCorrect: false },
            ],
            solution: 'While Magna Carta was primarily about feudal rights, its key innovation was limiting royal power. The idea that the monarch must follow the law laid the groundwork for constitutional government and influenced human rights documents worldwide.',
          },
          {
            id: 'engelsk-vg1-8-1-n-quiz2-q1',
            task: 'What principle did the development of Parliament establish?',
            options: [
              { id: 'a', text: 'That the king could rule alone without consulting anyone', isCorrect: false },
              { id: 'b', text: 'That only nobles could make laws', isCorrect: false },
              { id: 'c', text: 'No taxation without representation', isCorrect: true },
              { id: 'd', text: 'That the Church controlled all finances', isCorrect: false },
            ],
            solution: 'By the 1300s, the king could not levy new taxes without Parliament\'s consent. This principle of "no taxation without representation" would later inspire the American Revolution and remains a cornerstone of democratic government.',
          },
          {
            id: 'engelsk-vg1-8-1-n-quiz2-q2',
            task: 'Why did Henry VIII break with the Catholic Church in 1534?',
            options: [
              { id: 'a', text: 'He was a devout Protestant who disagreed with Catholic theology', isCorrect: false },
              { id: 'b', text: 'He wanted an annulment to remarry and get a male heir', isCorrect: true },
              { id: 'c', text: 'Parliament forced him to create a new church', isCorrect: false },
              { id: 'd', text: 'The Pope declared war on England', isCorrect: false },
            ],
            solution: 'Henry VIII broke with Rome not from theological conviction but from desperation for a male heir. When the Pope refused to annul his marriage to Catherine of Aragon, Henry declared himself Supreme Head of the Church of England.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-1-n-section3',
      type: 'text',
      content: `## Civil War, Revolution, and the Rise of Parliament

The 1600s brought Britain's greatest internal conflict - a civil war that would pit father against son, brother against brother, and ultimately result in something almost unthinkable: the public execution of a king.

King Charles I, who came to the throne in 1625, believed in the "divine right of kings" - the idea that God had appointed him to rule and he answered to no earthly power. He attempted to rule without Parliament for eleven years, raising money through creative (and legally dubious) means. When he finally had to summon Parliament in 1640 to fund a war against Scottish rebels, the long-simmering tensions exploded.

Parliament, led by men like John Pym and later Oliver Cromwell, demanded that royal power be constrained. Charles saw this as rebellion against God's anointed ruler. In 1642, the king raised his standard at Nottingham, and England descended into civil war.

The English Civil War was brutal in ways that shocked contemporaries. This was not a foreign invasion but a conflict that divided families. Parliamentarian "Roundheads" (named for their short haircuts) fought Royalist "Cavaliers" (a term originally used as an insult, meaning reckless horsemen). Great cities like Bristol, York, and Leicester were besieged. The countryside was ravaged by passing armies who seized food and livestock. Perhaps 200,000 people died - about 4% of the English population, a higher proportion than died in World War I.

At first, the war went back and forth, but Parliament's alliance with Scotland and the creation of the New Model Army - a professional fighting force organized by Oliver Cromwell - eventually prevailed. King Charles was captured, tried for treason, and on January 30, 1649, something unprecedented in European history occurred: a king was publicly executed by his own people, beheaded on a scaffold outside the Banqueting House in London.

The shock waves spread across Europe. Monarchs everywhere trembled. If the English could execute their anointed king, no ruler was safe. For eleven years, from 1649 to 1660, Britain was a republic - the "Commonwealth" under Oliver Cromwell, who became Lord Protector with powers that looked remarkably like those of the king he had helped kill.

When Cromwell died in 1658, his son Richard proved incapable of ruling, and in 1660, Charles II was invited back from exile to restore the monarchy. The "Restoration" brought back the king, but kings would never have the same power again. Charles II was careful to work with Parliament, having no desire to share his father's fate.

His brother James II, who became king in 1685, was not so careful. James was openly Catholic in a Protestant nation and seemed determined to restore Catholic power. When his wife gave birth to a son - raising the specter of a Catholic dynasty - Parliament had had enough. In the "Glorious Revolution" of 1688, they invited William of Orange (a Dutch Protestant married to James's Protestant daughter Mary) to invade. James fled to France, and William and Mary became joint rulers.

The Glorious Revolution was "glorious" because it was largely bloodless in England (Ireland was another matter). But its real significance was constitutional. The Bill of Rights of 1689 established that Parliament was supreme: the king could not suspend laws, raise taxes, or maintain an army without parliamentary consent. Freedom of speech in Parliament was guaranteed. Cruel and unusual punishments were prohibited. The king ruled by consent of Parliament, not by divine right.

In 1707, the Act of Union merged the Kingdoms of England and Scotland into the Kingdom of Great Britain. Scotland kept its own legal system (based on Roman law, unlike English common law), its own established church (the Presbyterian Church of Scotland), and its own educational system. But it joined a united Parliament at Westminster and a united crown. This union, sometimes uneasy, has lasted over 300 years. The Scottish independence referendum of 2014 voted 55% to 45% to remain in the United Kingdom - but the question has not gone away, especially after Brexit, which Scotland opposed.

By 1707, Britain had established something remarkable: a constitutional monarchy where real power lay with an elected Parliament, protected individual rights were codified in law, and political change could happen peacefully through established procedures. It was not democracy - most people still could not vote - but it was a foundation on which democracy could be built. These ideas would spread worldwide, inspiring revolutions in America and France and shaping political systems across the globe.`,
    },
    {
      id: 'engelsk-vg1-8-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on the English Civil War and revolution:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-1-n-quiz3-q0',
            task: 'What was unprecedented about the English Civil War\'s outcome?',
            options: [
              { id: 'a', text: 'Parliament was permanently dissolved', isCorrect: false },
              { id: 'b', text: 'A king was executed by his own people and the monarchy temporarily abolished', isCorrect: true },
              { id: 'c', text: 'England was invaded by France', isCorrect: false },
              { id: 'd', text: 'The Church of England was abolished', isCorrect: false },
            ],
            solution: 'The execution of Charles I in 1649 shocked Europe. It demonstrated that royal power was not absolute and kings could be held accountable. Though the monarchy returned in 1660, it never regained its former power.',
          },
          {
            id: 'engelsk-vg1-8-1-n-quiz3-q1',
            task: 'What did the Glorious Revolution of 1688 establish?',
            options: [
              { id: 'a', text: 'That kings ruled by divine right', isCorrect: false },
              { id: 'b', text: 'That England would become a republic permanently', isCorrect: false },
              { id: 'c', text: 'That Parliament was supreme and the king ruled by consent', isCorrect: true },
              { id: 'd', text: 'That Catholicism would be the state religion', isCorrect: false },
            ],
            solution: 'The Bill of Rights of 1689 established parliamentary supremacy: the king could not suspend laws, raise taxes, or maintain an army without parliamentary consent. The king ruled by consent, not by divine right.',
          },
          {
            id: 'engelsk-vg1-8-1-n-quiz3-q2',
            task: 'What did the 1707 Act of Union create?',
            options: [
              { id: 'a', text: 'The United Kingdom of Great Britain by merging England and Scotland', isCorrect: true },
              { id: 'b', text: 'A union between England and France', isCorrect: false },
              { id: 'c', text: 'The Church of England', isCorrect: false },
              { id: 'd', text: 'The American colonies', isCorrect: false },
            ],
            solution: 'The Act of Union merged the Kingdoms of England and Scotland into the Kingdom of Great Britain. Scotland kept its own legal system, church, and education, but joined a united Parliament at Westminster.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-1-n-section4',
      type: 'text',
      content: `## The Industrial Revolution: Britain Transforms the World

Between 1760 and 1840, something happened in Britain that changed human history as profoundly as the invention of agriculture or the discovery of fire. For thousands of years, most humans had lived as farmers, their lives shaped by the seasons, their labor powered by muscle - human and animal. Then, almost overnight in historical terms, machines began doing the work of human hands, and the world was transformed forever.

It started with textiles - specifically, with cotton. Britain's growing empire provided raw cotton from the American South and India, and there was insatiable demand for cotton cloth. But spinning thread and weaving fabric by hand was slow. A series of inventions changed that: John Kay's flying shuttle (1733), James Hargreaves' spinning jenny (1764), Richard Arkwright's water frame (1769), and Edmund Cartwright's power loom (1785). Each machine could do the work of dozens of human hands.

But machines needed power. The first factories clustered around rivers, using water wheels to drive their machinery. Then came steam. Thomas Newcomen's early steam engines pumped water out of coal mines. James Watt's improved engine, patented in 1769, was more efficient and could power machinery anywhere. Suddenly, you did not need a river - you just needed coal.

And Britain had plenty of coal - more accessible coal than any other country in Europe. The country also had iron ore, navigable rivers, and a growing network of canals. But resources alone do not explain why the Industrial Revolution happened in Britain first. The country had something else: a culture of innovation, protected property rights, a banking system that could finance ventures, and entrepreneurs willing to take risks.

Men like Josiah Wedgwood (pottery), Matthew Boulton (manufacturing), and Abraham Darby (iron smelting) became wealthy by applying new methods to production. They reinvested their profits, expanding operations and developing new techniques. A class of industrial capitalists emerged who would transform not just the economy but society itself.

Railways became the symbol of the new age. The first public railway, the Stockton and Darlington, opened in 1825. The Liverpool and Manchester Railway followed in 1830, carrying both passengers and freight at speeds that seemed almost magical - thirty miles per hour! Within decades, a network of railways crisscrossed Britain, then spread across the world. The railway required iron and steel, coal and engineering - all the industries of the Industrial Revolution feeding each other.

Britain became the "workshop of the world." By 1850, it produced more than half of the world's iron and cotton cloth. Its manufactured goods were exported to every continent. Free trade ideology meant that raw materials flowed in and finished products flowed out. The city of Manchester, which had been a small town of 25,000 in 1770, grew to over 300,000 by 1850 - and conditions there were terrible.

Because progress had a very dark side. Children as young as five worked in coal mines, crawling through tunnels too small for adults, pulling carts of coal with chains attached to leather belts around their waists. In textile factories, children tended dangerous machinery for twelve or fourteen hours a day. Workers lived in crowded slums without clean water or sanitation. Industrial cities like Manchester were shrouded in coal smoke, the rivers running black with pollution. Life expectancy in industrial areas actually dropped below what it had been in rural villages.

The contrast between wealthy factory owners building grand mansions and starving workers crammed into cellars was stark and visible to all. Writers like Charles Dickens documented these conditions. Political thinkers began to ask hard questions about capitalism and class. Karl Marx, who spent years researching in the British Museum, wrote Das Kapital as an analysis and critique of industrial capitalism based largely on British evidence.

This inequality sparked new political movements. Trade unions organized workers to demand better conditions, though they were illegal until 1824 and faced fierce opposition from employers. The Chartist movement demanded political reform, including universal male suffrage. Socialists proposed alternatives to capitalism. Reformers pushed for factory acts limiting child labor and working hours.

Change came slowly. The Factory Act of 1833 banned children under nine from textile factories and limited hours for older children. The Mines Act of 1842 banned women and children from underground work. The Ten Hours Act of 1847 limited the working day. Public health reforms improved sanitation. Education became compulsory. Piece by piece, the worst abuses were addressed, though working-class life remained hard.

The Industrial Revolution spread from Britain to Belgium, Germany, France, and eventually the United States, Japan, and the world. Today, when we debate automation replacing jobs, inequality between owners and workers, or climate change caused by burning fossil fuels, we are still grappling with issues the Industrial Revolution created. That transformation, which began in the cotton mills and coal mines of 18th-century Britain, is still unfolding.`,
    },
    {
      id: 'engelsk-vg1-8-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on the Industrial Revolution:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-1-n-quiz4-q0',
            task: 'Why did the Industrial Revolution begin in Britain?',
            options: [
              { id: 'a', text: 'Britain had the largest population in Europe', isCorrect: false },
              { id: 'b', text: 'Britain had coal, a culture of innovation, and investment capital', isCorrect: true },
              { id: 'c', text: 'The British government forced industrialization', isCorrect: false },
              { id: 'd', text: 'Britain was isolated from European wars', isCorrect: false },
            ],
            solution: 'Britain had the necessary resources (coal), institutions (banks, property rights), and cultural factors (entrepreneurship, scientific thinking) that enabled industrialization. No single factor explains it - it was a combination of geography, economy, and culture.',
          },
          {
            id: 'engelsk-vg1-8-1-n-quiz4-q1',
            task: 'What was the dark side of the Industrial Revolution?',
            options: [
              { id: 'a', text: 'Too many people moved to the countryside', isCorrect: false },
              { id: 'b', text: 'There were not enough factories to employ everyone', isCorrect: false },
              { id: 'c', text: 'Child labor, terrible working conditions, and pollution devastated workers\' lives', isCorrect: true },
              { id: 'd', text: 'Foreign nations refused to trade with Britain', isCorrect: false },
            ],
            solution: 'Children as young as five worked in mines and factories. Workers lived in crowded slums without clean water. Life expectancy actually dropped in industrial areas. The stark inequality between factory owners and starving workers inspired political movements and thinkers like Karl Marx.',
          },
          {
            id: 'engelsk-vg1-8-1-n-quiz4-q2',
            task: 'What new political movements emerged as a response to industrial inequality?',
            options: [
              { id: 'a', text: 'Monarchist movements demanding more royal power', isCorrect: false },
              { id: 'b', text: 'Trade unions, Chartism, and socialism', isCorrect: true },
              { id: 'c', text: 'Religious movements opposing all technology', isCorrect: false },
              { id: 'd', text: 'Colonial independence movements', isCorrect: false },
            ],
            solution: 'Trade unions organized workers to demand better conditions. The Chartist movement demanded political reform including universal male suffrage. Socialists proposed alternatives to capitalism. Reformers pushed for factory acts limiting child labor.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-1-n-section5',
      type: 'text',
      content: `## World Wars and the End of Empire

The twentieth century brought Britain's greatest challenges - two world wars that would drain the nation's wealth, kill millions of its young men, and ultimately end its position as a global superpower. Yet these same catastrophes would also forge a new kind of British society.

When World War I erupted in August 1914, young men across Britain volunteered enthusiastically, expecting a short, glorious adventure. "It'll be over by Christmas," people said. It was not. For four years, soldiers on the Western Front lived and died in muddy trenches that stretched from the Swiss border to the English Channel. New weapons - machine guns, poison gas, tanks, aircraft - created carnage on an unprecedented scale.

The Battle of the Somme in 1916 exemplifies the horror. On the first day alone, July 1, 1916, the British Army suffered nearly 60,000 casualties - 20,000 of them dead. Young men who had enlisted together from the same towns, the same factories, the same football clubs - the "Pals Battalions" - died together. Over 700,000 British soldiers died in the war, with millions more wounded, many carrying physical and psychological scars for the rest of their lives. An entire generation was traumatized.

The war transformed British society. Women had entered the workforce in huge numbers, doing jobs previously reserved for men - driving buses, working in munitions factories, serving as nurses near the front. In 1918, women over 30 gained the right to vote (full equal suffrage came in 1928). The old aristocratic order, which had dominated British society for centuries, never recovered from the slaughter of its sons in the trenches. Class barriers, while still present, began to weaken.

The interwar years brought economic depression, political turmoil, and the rise of fascism in Europe. Britain tried appeasement - allowing Hitler to take Austria and part of Czechoslovakia in hopes of avoiding another war. It did not work. On September 3, 1939, Britain declared war on Germany following the invasion of Poland.

The early years of World War II were desperate. France fell in six weeks. The British army was evacuated from Dunkirk beaches by a fleet of civilian boats. By summer 1940, Britain stood alone against Nazi-controlled Europe. The Luftwaffe bombed London and other cities in the "Blitz" - killing over 40,000 civilians, destroying homes, churches, and entire neighborhoods. In the rubble, Londoners sheltered in Underground stations, emerged to go to work, and carried on.

Prime Minister Winston Churchill captured the nation's mood in his famous speeches: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender." And: "I have nothing to offer but blood, toil, tears and sweat." Britain held out until Hitler's invasion of the Soviet Union in 1941 and Japan's attack on Pearl Harbor brought the Americans into the war.

Victory in 1945 came at enormous cost. Over 450,000 Britons had died. The country was bankrupt, having spent its wealth and borrowed massively from the United States. Cities lay in ruins. And the Empire, already under pressure, could no longer be maintained by an exhausted, impoverished nation.

India - the "jewel in the crown" - gained independence in 1947, though the partition into India and Pakistan killed over a million people and displaced millions more. African colonies followed through the 1950s and 1960s: Ghana (1957), Nigeria (1960), Kenya (1963), and others. Caribbean islands became independent. By the 1960s, the sun had finally set on the British Empire.

What replaced it? Paradoxically, the end of empire changed Britain itself. Immigration from former colonies - the Caribbean "Windrush generation" from 1948, South Asians fleeing partition violence, Africans and others - transformed British cities into multicultural places. London today has more foreign-born residents than native-born ones.

The war also created the welfare state. The 1942 Beveridge Report imagined a nation where government would fight the "five giants" of Want, Disease, Ignorance, Squalor, and Idleness. The Labour government of 1945-1951 created the National Health Service (NHS) - providing healthcare free at the point of use for all - along with expanded education, social housing, and social security. The NHS remains Britain's most beloved institution.

Britain joined the European project, entering what became the European Union in 1973. This brought economic integration and freedom of movement with European neighbors. But on June 23, 2016, in a referendum that shocked the world, Britain voted 52% to 48% to leave the EU. "Brexit" was implemented in January 2020, ending 47 years of European membership and leaving Britain's future relationship with the continent uncertain.

Today, Britain struggles to define its role in the world. No longer an empire, outside Europe, but still a significant economic and military power. A permanent member of the UN Security Council, a nuclear-armed state, a cultural force through the English language. The debates continue: about identity, about immigration, about the legacy of empire, about Scotland's place in the Union, about what it means to be British in the 21st century.

Understanding this history - the glory and the shame, the victories and the defeats, the traditions and the transformations - helps us understand the Britain we encounter in news, culture, and the English language itself.`,
    },
    {
      id: 'engelsk-vg1-8-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on World Wars and modern Britain:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-1-n-quiz5-q0',
            task: 'What major change happened to Britain after World War II?',
            options: [
              { id: 'a', text: 'Britain expanded its empire into Asia', isCorrect: false },
              { id: 'b', text: 'Britain became isolated from world affairs', isCorrect: false },
              { id: 'c', text: 'The British Empire dissolved and Britain became multicultural', isCorrect: true },
              { id: 'd', text: 'Britain adopted a new constitution', isCorrect: false },
            ],
            solution: 'After WWII, Britain was bankrupt and could not maintain its empire. Decolonization followed, with India gaining independence in 1947 and African colonies in the 1950s-60s. Immigration from former colonies transformed Britain into a multicultural society.',
          },
          {
            id: 'engelsk-vg1-8-1-n-quiz5-q1',
            task: 'What was created by the Labour government of 1945-1951 that remains Britain\'s most beloved institution?',
            options: [
              { id: 'a', text: 'The BBC', isCorrect: false },
              { id: 'b', text: 'The National Health Service (NHS)', isCorrect: true },
              { id: 'c', text: 'The House of Lords', isCorrect: false },
              { id: 'd', text: 'The Commonwealth of Nations', isCorrect: false },
            ],
            solution: 'The NHS was created to provide healthcare free at the point of use for all citizens. It was part of the welfare state inspired by the 1942 Beveridge Report, which aimed to fight the "five giants" of Want, Disease, Ignorance, Squalor, and Idleness.',
          },
          {
            id: 'engelsk-vg1-8-1-n-quiz5-q2',
            task: 'What did Britain vote for in the 2016 referendum?',
            options: [
              { id: 'a', text: 'Scottish independence', isCorrect: false },
              { id: 'b', text: 'Abolishing the monarchy', isCorrect: false },
              { id: 'c', text: 'Joining NATO', isCorrect: false },
              { id: 'd', text: 'Leaving the European Union (Brexit)', isCorrect: true },
            ],
            solution: 'Britain voted 52% to 48% to leave the EU. Brexit was implemented in January 2020, ending 47 years of European membership and leaving Britain\'s future relationship with the continent uncertain.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-1-n-summary',
      type: 'text',
      content: `## Summary: British History Overview

You have now journeyed through over two thousand years of British history, from Roman legions marching through Celtic lands to the smartphone-wielding Londoners of today. Let us review the key points and consider why this history matters for understanding our world.

**Invasions and Foundations (43 AD - 1066)**
The Romans brought roads, cities, and Latin during their 400-year occupation, but never conquered Scotland. The Anglo-Saxons (from 410 AD) gave us the English language and converted to Christianity. The Norman Conquest of 1066 created a French-speaking ruling class and introduced feudalism. These layers of invasion are still visible in English vocabulary: we have Anglo-Saxon words for everyday things (house, water, mother) and French words for refined concepts (cuisine, justice, government).

**Rights and Parliament (1215 - 1707)**
Magna Carta (1215) established the revolutionary principle that even kings must follow the law, laying the foundation for habeas corpus and constitutional government. Parliament emerged from the king's need for money, gradually gaining the power to make laws and control taxation. The English Civil War (1642-1651) resulted in the unprecedented execution of King Charles I, and the Glorious Revolution (1688) established parliamentary supremacy through the Bill of Rights. The Act of Union (1707) merged England and Scotland into Great Britain.

**Industrial Revolution (1760 - 1840)**
Britain became the first industrial nation, transforming human society more profoundly than any event since the invention of agriculture. Steam engines, factories, and railways created unprecedented wealth but also terrible working conditions, child labor, and urban squalor. The political movements born in this era - trade unions, socialism, reform campaigns - shaped modern democracy. We still live with the Industrial Revolution's consequences: urbanization, fossil fuel dependence, debates about automation and inequality.

**Empire and Its End (1815 - 1960s)**
The British Empire grew to cover a quarter of the Earth's land surface, the largest empire in human history. It spread the English language, parliamentary systems, and common law worldwide, but also slavery, exploitation, and artificial borders that still cause conflict today. World War I killed over 700,000 British soldiers and shattered the old social order. World War II left Britain victorious but bankrupt. Decolonization followed rapidly: India (1947), African colonies (1950s-60s), Caribbean nations. The empire ended, but its legacy shapes our world.

**Modern Britain (1945 - Present)**
Post-war Britain built the welfare state, including the beloved NHS. Immigration from former colonies transformed Britain into a multicultural society. Britain joined and then left the European Union (Brexit, 2020). Today, the nation grapples with questions of identity, the legacy of empire, Scottish independence sentiment, and its place in a world it once dominated but no longer controls.

**Why This Matters for You**
Understanding British history helps you understand why English has become the global language of business, science, and the internet - it spread with the empire and American power. It explains why parliamentary democracy exists in countries from India to Jamaica. It illuminates current debates about colonialism, reparations, and whose history gets told. And it enriches your understanding of English itself, a language carrying the marks of every invasion and era - Roman, Anglo-Saxon, Norman, imperial, and global.

When you speak English, you participate in this history. When you understand where the language came from, you understand it more deeply.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 8.2 NARRATIVE: The British Empire and Its Legacy
// ============================================================================

export const CHAPTER_ENGELSK_VG1_8_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-8-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '8.2',
  title: 'The British Empire and Its Legacy',
  subtitle: 'Narrative Version',
  description: 'Explore the rise and fall of history\'s largest empire and its lasting impact on our world.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden ut fra historiske sammenhenger',
  ],
  linkedChapterId: 'engelsk-vg1-8-2',
  content: [
    {
      id: 'engelsk-vg1-8-2-n-intro',
      type: 'text',
      content: `## The Sun Never Sets

Look at a map of the world from 1920, and you will see vast swaths of pink - the traditional color for British territories. From Canada to Australia, from India to South Africa, from Nigeria to Hong Kong, the British Empire covered about a quarter of the Earth's land surface and ruled over 400 million people. It was the largest empire in human history, surpassing even the Mongol Empire of Genghis Khan or the Roman Empire at its height.

The phrase "the empire on which the sun never sets" was not mere boasting - it was literally true. At any moment of any day, somewhere in the British Empire, the sun was shining. When it set in London, it rose in Singapore. When it was midnight in India, it was noon in Jamaica. This global reach gave Britain access to resources, markets, and labor across every continent.

How did a small, rainy island off the northwest coast of Europe achieve this unprecedented dominance? And what does it mean today - for you, for the world, and for the billions of people whose ancestors lived, worked, fought, and died under British rule?

These are not comfortable questions, and they have no easy answers. The British Empire built railways that still carry passengers across India, established legal systems based on the rule of law, and spread the English language that you are now learning. It also transported over 3 million enslaved Africans across the Atlantic, extracted wealth from colonies that remains in British museums and country houses today, drew arbitrary borders that still cause conflict, and pursued policies that led to famines killing millions.

Understanding this complexity - neither celebrating imperial achievements nor simply condemning colonial crimes, but seeing both together - is essential for understanding our world. When you drink tea (brought from China and India), eat sugar (from Caribbean plantations worked by enslaved Africans), play cricket or soccer (spread by British colonial officers), or use English as a global language (learned under empire and reinforced by American power), you are living with the Empire's legacy. The very concepts of nationhood, borders, and international law that structure our world were shaped by the imperial era.

Let us explore how the British Empire began, how it worked, how it ended, and what remains. This is not just history - it is the context for understanding why the world is organized the way it is today.`,
    },
    {
      id: 'engelsk-vg1-8-2-n-section1',
      type: 'text',
      content: `## The First Empire: Americas and Caribbean

The British Empire did not begin with grand plans for world domination. It began with pirates, merchants, adventurers, and religious refugees - people seeking profit, plunder, or a place to practice their faith without persecution. England was a latecomer to European colonization, watching enviously as Spain grew rich from gold and silver in the Americas.

The first attempts at colonization failed. The Roanoke Colony in present-day North Carolina vanished mysteriously in the 1580s - the "Lost Colony" whose fate remains unknown. But in 1607, Jamestown in Virginia became the first permanent English settlement in America. The early years were desperate; colonists starved, fought with Native Americans, and died of disease. Only the discovery that tobacco could be grown profitably saved the colony.

More colonies followed along the Atlantic coast. The Pilgrims landed at Plymouth in 1620, seeking religious freedom to practice their strict Protestantism. Massachusetts Bay Colony, Pennsylvania (founded by Quakers), Maryland (founded by Catholics) - each had different origins, but all followed a similar pattern: European settlers displacing indigenous peoples, establishing English law and customs, and developing economic ties with the mother country.

But the most profitable colonies were in the Caribbean. Sugar was the oil of the 17th century - incredibly valuable because Europeans had developed an insatiable appetite for sweetness, and incredibly labor-intensive because sugar cane must be harvested and processed quickly. Barbados, Jamaica, and other Caribbean islands became sugar factories, and the source of their labor was one of history's greatest crimes.

The Atlantic slave trade was the engine of Caribbean wealth. Between 1640 and 1807, British ships transported over 3 million Africans across the Atlantic in chains. Families were torn apart on the African coast - husbands from wives, parents from children - by African and European slave traders who raided villages or purchased captives from African kingdoms. People were branded like cattle, packed into ships so tightly they could barely move, and transported across an ocean voyage lasting two to three months, during which perhaps 15% died from disease, suicide, or violence.

Those who survived faced brutal plantation conditions. They worked from dawn to dusk under the Caribbean sun, cutting cane with machetes, feeding it into crushing mills that could take off a limb in seconds, and boiling the juice in scalding vats. Average life expectancy for an enslaved person on a sugar plantation was about seven years after arrival. The plantations were death camps that required constant imports of new enslaved people to maintain production.

The wealth generated was enormous and still visible today. The elegant Georgian townhouses of Bristol, Liverpool, and Glasgow were built by merchants who traded enslaved people and sugar. Lloyd's of London, the world's leading insurance market, began by insuring slave ships. Banks like Barclays have roots in the slave economy. Britain's industrial revolution was partly financed by profits from slavery. The grand country estates of the English aristocracy were often purchased or maintained with Caribbean sugar money.

When Britain abolished the slave trade in 1807 and slavery itself in 1833, it was celebrated as a moral triumph. What is less celebrated is what happened next: the British government paid compensation - not to the formerly enslaved people, but to the slave owners, for their "property loss." The sum was £20 million (about £17 billion in today's money), representing 40% of the annual government budget. The descendants of enslaved people received nothing. The debt incurred to pay slave owners was so large that British taxpayers were still paying it off until 2015.

The first British Empire effectively ended in 1783 when the American colonies won their independence. Britain had tried to tax the colonists without giving them representation in Parliament, and they had rebelled. With French help, they won. Britain lost its most populous and economically dynamic colonies. But a second empire was already emerging - even larger, even more global - in India, Africa, and the Pacific.`,
    },
    {
      id: 'engelsk-vg1-8-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on the early British Empire:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-2-n-quiz1-q0',
            task: 'What was the economic foundation of the early British Caribbean colonies?',
            options: [
          { id: 'a', text: 'Gold and silver mining', isCorrect: false },
          { id: 'b', text: 'Sugar plantations worked by enslaved Africans', isCorrect: true },
          { id: 'c', text: 'Fishing and whaling industries', isCorrect: false },
          { id: 'd', text: 'Tobacco farming by European settlers', isCorrect: false },
        ],
            solution: 'Caribbean sugar plantations were enormously profitable but required intensive labor. The British relied on the Atlantic slave trade, transporting over 3 million Africans to work in brutal conditions. This system generated massive wealth for Britain.',
          },
          {
            id: 'engelsk-vg1-8-2-n-quiz1-q1',
            task: 'What happened to the compensation money when Britain abolished slavery in 1833?',
            options: [
              { id: 'a', text: 'It was paid to the formerly enslaved people', isCorrect: false },
              { id: 'b', text: 'It was donated to African nations', isCorrect: false },
              { id: 'c', text: 'It was paid to the slave owners for their "property loss"', isCorrect: true },
              { id: 'd', text: 'It was used to build schools in the Caribbean', isCorrect: false },
            ],
            solution: 'When Britain abolished slavery in 1833, the government paid £20 million in compensation - not to the formerly enslaved people, but to the slave owners. The debt was so large that British taxpayers were still paying it off until 2015.',
          },
          {
            id: 'engelsk-vg1-8-2-n-quiz1-q2',
            task: 'What ended the first British Empire in 1783?',
            options: [
              { id: 'a', text: 'A French invasion of Britain', isCorrect: false },
              { id: 'b', text: 'The abolition of slavery', isCorrect: false },
              { id: 'c', text: 'A devastating plague', isCorrect: false },
              { id: 'd', text: 'The American colonies won their independence', isCorrect: true },
            ],
            solution: 'Britain tried to tax the American colonists without giving them representation in Parliament, and they rebelled. With French help, the Americans won independence in 1783, ending Britain\'s most populous colonies.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-2-n-section2',
      type: 'text',
      content: `## The Jewel in the Crown: India

India was the heart of the second British Empire - "the jewel in the crown," as it was called. The subcontinent had a population larger than all of Britain's other colonies combined, incredible natural resources, an ancient civilization, and strategic importance linking the Middle East to East Asia. But British rule in India began not with government conquest but with a corporation seeking profit: the East India Company.

Founded in 1600, the East India Company was one of the world's first joint-stock corporations - an early form of the modern company where investors pooled capital and shared profits and risks. It started as a purely commercial venture, seeking Indian textiles (calico, muslin, and silk that were superior to anything Europe could produce), spices (pepper, cinnamon, and cloves that fetched high prices), and later tea (which became an English obsession). The Company established trading posts at Surat, Madras, Bombay, and Calcutta.

Gradually, through a combination of trade, diplomacy, bribery, and military force, the Company gained control of more and more territory. It raised its own armies, made treaties with local rulers, and collected taxes. The Mughal Empire, which had ruled much of India, was weakening, and the Company exploited the resulting chaos. After the Battle of Plassey in 1757, the Company effectively controlled Bengal, one of the richest regions in the world. By 1857, the East India Company - a private corporation! - ruled most of the Indian subcontinent, collecting taxes from hundreds of millions of people.

The Company's rule was often brutal and always extractive. The Bengal Famine of 1770 killed perhaps 10 million people - about a third of the population - while the Company continued to collect taxes and export grain. Indians who had been craftsmen and traders found themselves reduced to poverty as British policies deliberately destroyed Indian manufacturing to create markets for British goods. India, which had produced perhaps a quarter of the world's manufactured goods in 1750, was deindustrialized to benefit Manchester cotton mills.

In 1857, Indian soldiers (sepoys) in the Company's army rebelled, and the uprising spread across northern India. The causes were complex - resentment of foreign rule, fear that the Company was trying to convert Indians to Christianity, specific grievances about pay and conditions. The rebellion was eventually crushed with terrible violence, including blowing prisoners from cannons. The British called it the "Indian Mutiny"; Indians call it the First War of Independence.

After 1857, the British government took direct control, ending the Company's rule. India was reorganized as the British Raj (from a Hindi word meaning "rule"), with Queen Victoria crowned Empress of India in 1876. A civil service of (mostly British) administrators governed through a complex hierarchy of officials, with Indian princes retained as puppet rulers in some regions.

What did British rule mean for ordinary Indians? It meant railways - over 40,000 miles of them, still the backbone of Indian transportation. But the railways were designed to extract resources (moving cotton, tea, and grain to ports) and to move troops quickly, not to develop the country for Indians' benefit. It meant English education - but only for a tiny elite, while dismissing thousands of years of Indian learning, literature, and philosophy as inferior. It meant courts and civil service based on the rule of law - but Indians were excluded from top positions and subjected to separate, inferior justice.

It meant famines that killed millions. The Bengal Famine of 1943 killed an estimated 3 million people while grain was diverted to the war effort. Throughout the Raj, periodic famines killed tens of millions, while British policies prioritized exports and profits over Indian lives. British economist Utsa Patnaik has estimated that Britain extracted $45 trillion from India over its colonial period - wealth that helped finance British industrialization and global dominance.

The legacy is contested to this day. Some point to infrastructure, legal systems, the English language that now gives Indians access to global opportunities, and the parliamentary democracy that (with modifications) India inherited. Others point to deliberate deindustrialization, extraction of wealth, famines caused or worsened by British policies, and the trauma of partition when India gained independence in 1947. That partition - the division into Hindu-majority India and Muslim-majority Pakistan - killed perhaps one to two million people and displaced perhaps 15 million, the largest forced migration in human history. The border was drawn in weeks by a British lawyer who had never been to India, and communities that had lived together for centuries were torn apart in an orgy of violence.

Understanding what the British Empire meant for India requires holding all of these realities together - the railways and the famines, the legal systems and the exploitation, the English language and the cultural destruction.`,
    },
    {
      id: 'engelsk-vg1-8-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on British rule in India:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-2-n-quiz2-q0',
            task: 'How did British rule in India begin?',
            options: [
          { id: 'a', text: 'Through a military invasion ordered by the British king', isCorrect: false },
          { id: 'b', text: 'Through gradual expansion by the East India Company, a trading corporation', isCorrect: true },
          { id: 'c', text: 'Through a peaceful agreement with Indian rulers', isCorrect: false },
          { id: 'd', text: 'Through settlement by British farmers and colonists', isCorrect: false },
        ],
            solution: 'The East India Company, founded in 1600 for trade, gradually gained territorial control through commerce, diplomacy, and military force. Only after the 1857 rebellion did the British government take direct control, creating the British Raj.',
          },
          {
            id: 'engelsk-vg1-8-2-n-quiz2-q1',
            task: 'What was the effect of British economic policies on Indian manufacturing?',
            options: [
              { id: 'a', text: 'India became the world\'s largest manufacturer', isCorrect: false },
              { id: 'b', text: 'Indian manufacturing was deliberately destroyed to create markets for British goods', isCorrect: true },
              { id: 'c', text: 'Britain invested heavily in Indian factories', isCorrect: false },
              { id: 'd', text: 'Indian and British manufacturing grew equally', isCorrect: false },
            ],
            solution: 'British policies deliberately destroyed Indian manufacturing to create markets for British goods. India, which had produced about a quarter of the world\'s manufactured goods in 1750, was deindustrialized to benefit Manchester cotton mills.',
          },
          {
            id: 'engelsk-vg1-8-2-n-quiz2-q2',
            task: 'What happened during the partition of India in 1947?',
            options: [
              { id: 'a', text: 'A peaceful transition with no casualties', isCorrect: false },
              { id: 'b', text: 'India was divided into three countries', isCorrect: false },
              { id: 'c', text: 'One to two million people died and 15 million were displaced', isCorrect: true },
              { id: 'd', text: 'Britain maintained control of half of India', isCorrect: false },
            ],
            solution: 'The partition into Hindu-majority India and Muslim-majority Pakistan killed perhaps one to two million people and displaced about 15 million - the largest forced migration in human history. The border was drawn in weeks by a British lawyer who had never been to India.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-2-n-section3',
      type: 'text',
      content: `## The Scramble for Africa

In 1870, European powers controlled only about 10% of Africa - mostly coastal trading posts and a few settler colonies like South Africa. The vast interior remained in African hands, ruled by kingdoms, empires, and confederations that Europeans barely knew existed. By 1914, they controlled almost 90%. This extraordinary transformation - the "Scramble for Africa" - reshaped a continent and created the borders that still define African nations today.

What drove this sudden rush to conquer? Several forces converged. Nationalism meant that European powers competed for prestige; having colonies was a mark of great power status. Industrial capitalism sought new markets for manufactured goods and new sources of raw materials - rubber, palm oil, copper, diamonds, gold. Technological advances - the steamship, the quinine pill that prevented malaria, the machine gun - made conquest possible where it had been impossible before. And racism, the ideology of white supremacy that had justified slavery, now justified colonialism as "civilizing" inferior peoples.

The Berlin Conference of 1884-85 set the rules for the Scramble. Representatives of European powers gathered in the German capital - no Africans were invited - and literally drew lines on maps, dividing the continent among themselves with no regard for existing kingdoms, ethnic groups, linguistic boundaries, or geographic features. Borders were drawn through communities that had lived together for centuries, separating families, splitting ethnic groups between different colonial powers. The Somali people, for instance, were divided among British, French, Italian, and Ethiopian territories - a division whose consequences include the continuing chaos in Somalia today.

British Africa grew to include Nigeria (Africa's most populous country), Ghana (then called Gold Coast), Kenya, Uganda, Tanzania (then Tanganyika), Sudan, Zimbabwe (then Rhodesia), Zambia (then Northern Rhodesia), Malawi (then Nyasaland), Botswana (then Bechuanaland), and of course South Africa. Britain controlled a vast swath of the continent from Cairo to the Cape, interrupted only by German East Africa.

Colonial methods varied depending on local conditions and the number of British settlers. In some places, Britain ruled directly through appointed administrators who replaced traditional leaders. In others, particularly in Nigeria, Britain used "indirect rule" through existing chiefs and emirs who became collaborators with colonial power, collecting taxes and enforcing regulations in exchange for retaining their positions. This system was cheaper and required fewer British officials, but it distorted traditional institutions and created new forms of authority.

Always, the goal was extraction. Mining companies dug copper in Northern Rhodesia and gold in South Africa. Agricultural schemes forced Africans to grow cash crops - cotton, coffee, tea, cocoa - instead of food for themselves. Land was seized for European settlers, particularly in Kenya and Southern Rhodesia, while Africans were confined to "reserves" with the poorest soil. Labor was coerced through various means: head taxes that forced Africans to work for wages to pay the tax, pass laws that controlled movement, and in some cases direct forced labor that amounted to slavery in all but name.

The effects were devastating in ways that persist today. Traditional economies based on subsistence farming, cattle herding, and regional trade were disrupted. Communities that had been self-sufficient now depended on distant markets and colonial policies. Ethnic identities were hardened as colonial administrators categorized people into "tribes" (often quite arbitrarily) and played groups against each other - divide and rule was explicit colonial policy. Education was provided, but only enough to create clerks and minor officials, not to develop African potential. Infrastructure was built, but designed to move resources to ports for export, not to connect African communities.

And yet, Africans resisted. Every colony saw resistance movements - from the Mau Mau uprising in Kenya to the Maji Maji rebellion in German East Africa, from the Herero genocide in German Southwest Africa (where German forces killed 80% of the Herero people) to the ongoing resistance in South Africa. Some resistance was armed; some was cultural, preserving languages and traditions in defiance of colonial attempts at erasure; some was political, organizing movements that would eventually demand independence.

African soldiers fought in both World Wars - often conscripted to fight for the colonial powers that oppressed them. Over a million Africans served in World War II alone. They came home with new skills, new ideas about freedom and self-determination, and new unwillingness to accept colonial rule. The same European powers that had just fought a war against Nazi racism now seemed hypocritical ruling over Africans.

Independence came in a rush. Ghana became the first sub-Saharan African colony to gain independence in 1957, under the leadership of Kwame Nkrumah. Nigeria followed in 1960, Kenya in 1963, and others throughout the decade. By the mid-1960s, most British African colonies were independent nations. But they inherited the borders, the ethnic tensions, the economic structures, and the underdevelopment that colonialism had created. These legacies continue to shape African nations today.`,
    },
    {
      id: 'engelsk-vg1-8-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on the Scramble for Africa:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-2-n-quiz3-q0',
            task: 'What was significant about the Berlin Conference of 1884-85?',
            options: [
          { id: 'a', text: 'African leaders negotiated independence for their nations', isCorrect: false },
          { id: 'b', text: 'European powers divided Africa among themselves, drawing borders without African input', isCorrect: true },
          { id: 'c', text: 'Britain agreed to abolish slavery throughout Africa', isCorrect: false },
          { id: 'd', text: 'European nations decided to leave Africa alone', isCorrect: false },
        ],
            solution: 'At the Berlin Conference, European powers divided Africa among themselves, drawing arbitrary borders that ignored existing communities and kingdoms. These colonial borders, often cutting through ethnic groups, still cause problems today.',
          },
          {
            id: 'engelsk-vg1-8-2-n-quiz3-q1',
            task: 'What was the primary goal of British colonial rule in Africa?',
            options: [
              { id: 'a', text: 'To develop African economies for African benefit', isCorrect: false },
              { id: 'b', text: 'To spread democracy and human rights', isCorrect: false },
              { id: 'c', text: 'Extraction of resources and raw materials', isCorrect: true },
              { id: 'd', text: 'To create equal partnerships with African nations', isCorrect: false },
            ],
            solution: 'The goal was always extraction. Mining companies dug copper and gold, agricultural schemes forced cash crops instead of food, and infrastructure was built to move resources to ports for export, not to connect African communities.',
          },
          {
            id: 'engelsk-vg1-8-2-n-quiz3-q2',
            task: 'When did most British African colonies gain independence?',
            options: [
              { id: 'a', text: 'In the 1920s after World War I', isCorrect: false },
              { id: 'b', text: 'In the late 1950s and 1960s', isCorrect: true },
              { id: 'c', text: 'In the 1990s', isCorrect: false },
              { id: 'd', text: 'They are still colonies today', isCorrect: false },
            ],
            solution: 'Ghana became the first sub-Saharan African colony to gain independence in 1957. Nigeria followed in 1960, Kenya in 1963, and others throughout the decade. By the mid-1960s, most British African colonies were independent nations.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-2-n-section4',
      type: 'text',
      content: `## The Commonwealth: Empire's Afterlife

When the British Empire ended, something unexpected emerged from its ashes: the Commonwealth of Nations. This voluntary association of mostly former British colonies now includes 56 member states with a combined population of 2.5 billion people - nearly a third of humanity. It is one of the strangest and most enduring legacies of empire.

The Commonwealth evolved gradually. The term "British Commonwealth of Nations" first appeared in 1926 to describe the relationship between Britain and its self-governing "Dominions" - Canada, Australia, New Zealand, South Africa, and the Irish Free State. These were settler colonies where Europeans had become the majority, and they were already largely independent in practice. The Statute of Westminster (1931) made them legally equal to Britain.

As colonies gained independence after World War II, most chose to join this association despite having just fought to escape British rule. India's decision in 1949 was crucial - if the giant of the former empire joined, the Commonwealth could be genuinely global. A formula was found whereby India could be a republic with its own president while still recognizing the British monarch as "Head of the Commonwealth" - a purely symbolic role with no power.

Today, the Commonwealth is a remarkably diverse organization. Its members include some of the world's largest countries (India, Nigeria, Pakistan) and some of the smallest (Tuvalu, Nauru). Some are among the wealthiest (Singapore, Australia) and some among the poorest (Malawi, Bangladesh). Some retain the British monarch as head of state (Canada, Australia, Jamaica - though Jamaica is moving toward a republic); most are republics. Some are vibrant democracies; some have struggled with authoritarianism.

What binds this diverse group together? Partly shared language - most members use English officially, which facilitates communication and exchange. Partly shared legal systems based on British common law, which creates some similarity in how courts and governments function. Partly shared institutions like parliamentary democracy (though adapted in various ways). Partly economic ties that persist from the colonial era. And partly simply the habit of cooperation developed over decades, reinforced by regular meetings, educational exchanges, and the Commonwealth Games (a kind of mini-Olympics held every four years).

The Commonwealth does tangible things. The Commonwealth Scholarship program has educated thousands of students across member countries. Technical assistance programs share expertise. Election observation missions monitor democratic processes. The Harare Declaration (1991) committed members to democracy and human rights, though enforcement has been uneven - Zimbabwe was suspended for human rights violations, and The Gambia withdrew and then rejoined.

But critics question whether the Commonwealth has real purpose in the modern world or whether it is merely a nostalgia club keeping alive the memory of empire while avoiding honest reckoning with its crimes. Member states face no obligations and receive no guaranteed benefits. Meetings produce declarations but rarely concrete action. Britain's post-Brexit attempts to revive Commonwealth trade have shown that historical ties do not easily translate into economic advantage when geography and modern trade patterns point elsewhere.

For countries like India, Nigeria, and Jamaica, the Commonwealth represents a complex, ambivalent relationship with their colonial past. Leaders from these countries now sit as equals with Britain - a dramatic change from the colonial hierarchy. But equality at meetings does not erase historical inequality. The wealth extracted from colonies largely remains in British institutions, museums, and private collections. Artifacts looted during colonial conquest fill the British Museum. The economic patterns established by empire - former colonies exporting raw materials and importing manufactured goods - persist.

Calls for reparations have grown louder, though British governments have rejected them. Demands for the return of stolen artifacts have had some success - Nigeria is receiving back some of the Benin Bronzes looted by British soldiers in 1897. Honest reckoning with colonial history is slowly happening, though it remains controversial and incomplete. The Commonwealth exists in this space of tension between the desire to build something positive from shared history and the need to acknowledge that history's horrors.

King Charles III, who became Head of the Commonwealth in 2022, has spoken of the need to acknowledge "wrongs that have shaped our past" while looking forward to a shared future. Whether the Commonwealth can reinvent itself as something more than a colonial afterthought remains to be seen.`,
    },
    {
      id: 'engelsk-vg1-8-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on the Commonwealth:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-2-n-quiz4-q0',
            task: 'What is the Commonwealth of Nations?',
            options: [
          { id: 'a', text: 'A military alliance similar to NATO', isCorrect: false },
          { id: 'b', text: 'A trade bloc like the European Union', isCorrect: false },
          { id: 'c', text: 'A voluntary association of mostly former British colonies', isCorrect: true },
          { id: 'd', text: 'A group of countries still ruled by Britain', isCorrect: false },
        ],
            solution: 'The Commonwealth is a voluntary association of 54 nations, mostly former British colonies. Members cooperate on issues like education, democracy, and human rights. The British monarch is ceremonial head, but members are independent equals.',
          },
          {
            id: 'engelsk-vg1-8-2-n-quiz4-q1',
            task: 'How many member states does the Commonwealth of Nations include?',
            options: [
              { id: 'a', text: '12 nations', isCorrect: false },
              { id: 'b', text: '27 nations', isCorrect: false },
              { id: 'c', text: '56 nations with about 2.5 billion people', isCorrect: true },
              { id: 'd', text: 'Over 100 nations', isCorrect: false },
            ],
            solution: 'The Commonwealth includes 56 member states with a combined population of 2.5 billion people - nearly a third of humanity. It is remarkably diverse, including some of the world\'s largest and smallest, wealthiest and poorest countries.',
          },
          {
            id: 'engelsk-vg1-8-2-n-quiz4-q2',
            task: 'What binds Commonwealth nations together?',
            options: [
              { id: 'a', text: 'Shared military obligations', isCorrect: false },
              { id: 'b', text: 'A common currency', isCorrect: false },
              { id: 'c', text: 'Shared language, legal systems, and institutional ties from the colonial era', isCorrect: true },
              { id: 'd', text: 'A single trade agreement', isCorrect: false },
            ],
            solution: 'Commonwealth nations share English as a common language, similar legal systems based on common law, parliamentary institutions, and habits of cooperation developed over decades, reinforced by regular meetings, educational exchanges, and the Commonwealth Games.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-2-n-section5',
      type: 'text',
      content: `## The Legacy: What Remains?

The British Empire formally ended decades ago - the last significant colony, Hong Kong, was returned to China in 1997. But the Empire's effects are everywhere, woven into the fabric of our world in ways we often do not notice. Let us consider what remains.

**Language: The Tongue That Conquered the World**
English is a global language largely because of the Empire, reinforced by American power in the 20th century. Over 1.5 billion people speak English, and it is the dominant language of international business, scientific publication, aviation, diplomacy, and the internet. You are learning English not because it is inherently superior to Norwegian or any other language, but because historical power made it useful. When Indians and Nigerians and Singaporeans speak English to each other, they are using the language of their former colonizer - but they have also made it their own, creating new varieties that express their own cultures.

**Legal Systems: Common Law Goes Global**
Common law, developed in England over centuries, now forms the basis of legal systems in the United States, Canada, Australia, New Zealand, India, Pakistan, Bangladesh, Nigeria, Kenya, Singapore, Hong Kong, and dozens of other countries. Concepts that originated in English courts - habeas corpus (the right not to be imprisoned without charge), trial by jury, precedent (the idea that courts should follow previous decisions), the adversarial system (where prosecution and defense argue before an impartial judge) - spread through the Empire and now shape how billions of people experience justice. This is not necessarily better than alternative systems like civil law (used in most of Europe), but it creates a kind of legal family across former British territories.

**Borders and Conflicts: Lines Drawn by Foreigners**
Many of today's conflicts trace back directly to borders drawn by colonial powers with little knowledge of or concern for local realities. The partition of India in 1947 killed perhaps one to two million people and displaced 15 million, creating a border between India and Pakistan that remains one of the world's most dangerous flashpoints. Kashmir is still contested, and India and Pakistan - both nuclear powers - have fought multiple wars. Middle Eastern borders drawn by Britain and France (the Sykes-Picot Agreement of 1916) created Iraq by combining three Ottoman provinces with different ethnic and religious majorities, contributing to decades of conflict. African borders divided ethnic groups and combined historic enemies, creating tensions that erupted in the Rwandan genocide, the Nigerian civil war, and countless other conflicts.

**Economic Patterns: The Persistence of Extraction**
Colonial economies were designed for extraction, not development. Railways moved resources to ports, not between African or Asian cities. Education created clerks, not engineers. Manufacturing was deliberately suppressed to create markets for British goods. These patterns persist. Many former colonies still export raw materials - cocoa from Ghana, copper from Zambia, oil from Nigeria - and import manufactured goods. The terms of trade often remain unfavorable. Development has occurred, but the economic structures of colonialism have proven remarkably durable.

**Culture: Cricket, Tea, and English Manners**
Cricket is popular from Mumbai to Barbados to Melbourne because British colonial officers and settlers brought it. The sport became a way for colonized peoples to compete with and sometimes beat their colonizers - India's cricket victories over England carry symbolic weight. Tea drinking spread from Britain to its colonies (ironically, tea itself came to Britain from China). Educational systems in many former colonies still follow British models, with examinations and curricula that sometimes retain colonial perspectives. English literature is taught as the default "literature" in many countries, while local traditions are labeled "folklore."

**Racism: The Ideology of Empire**
The British Empire was built on a belief in white supremacy - the idea that Europeans were naturally superior to Africans, Asians, and other peoples, and therefore had a right and duty to rule them. This ideology justified slavery, justified conquest, justified extraction, and justified the many cruelties of colonial rule. These ideas did not disappear when the flags changed. They persist in institutions that favor whiteness, in beauty standards that privilege European features, in educational curricula that center European history, in immigration policies that treat some nationalities better than others, and in everyday assumptions and prejudices that shape how people are treated based on their race. Racism is not just individual prejudice; it is a system of advantage that the Empire helped create and that we have not yet dismantled.

**How Should We Remember?**
The British Empire cannot be reduced to either a civilizing mission that brought railways and rule of law, or to a criminal enterprise of theft and murder. It was both, simultaneously, and understanding this complexity is essential for understanding our world.

Nostalgia for empire - "Make Britain Great Again" sentiments that sometimes surface in British politics - ignores the reality of colonial violence and extraction. Simple condemnation, treating all aspects of the imperial legacy as tainted, ignores the genuine achievements and the ways former colonies have made imperial legacies their own.

The honest approach is to acknowledge complexity: the railways and the famines, the legal systems and the exploitation, the English language and the cultural destruction. It means recognizing that the wealth of Britain today was built partly on colonial extraction, and that this creates ongoing moral obligations. It means supporting efforts to return looted artifacts, considering reparations, and ensuring that colonial history is taught honestly.

We still live with the Empire's consequences. Understanding that history helps us understand why the world is organized the way it is - and what might be done to make it more just.`,
    },
    {
      id: 'engelsk-vg1-8-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on the Empire\'s legacy:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-2-n-quiz5-q0',
            task: 'Why is English now a global language?',
            options: [
          { id: 'a', text: 'Because English is the easiest language to learn', isCorrect: false },
          { id: 'b', text: 'Because the United Nations made it the official world language', isCorrect: false },
          { id: 'c', text: 'Largely because of British colonialism and later American influence', isCorrect: true },
          { id: 'd', text: 'Because Shakespeare wrote in English', isCorrect: false },
        ],
            solution: 'English became global primarily because of the British Empire, which spread the language across continents. American economic and cultural power in the 20th century reinforced this. Today, over 1.5 billion people speak English.',
          },
          {
            id: 'engelsk-vg1-8-2-n-quiz5-q1',
            task: 'How has the British Empire affected modern borders and conflicts?',
            options: [
              { id: 'a', text: 'Colonial borders created stability worldwide', isCorrect: false },
              { id: 'b', text: 'Arbitrary borders drawn by colonial powers still cause conflicts today', isCorrect: true },
              { id: 'c', text: 'The Empire had no effect on modern borders', isCorrect: false },
              { id: 'd', text: 'All colonial borders have been redrawn since independence', isCorrect: false },
            ],
            solution: 'Colonial borders divided ethnic groups and combined historic enemies, contributing to conflicts like the Kashmir dispute, the Rwandan genocide, and the Nigerian civil war. These arbitrary lines, drawn with little knowledge of local realities, continue to shape geopolitics.',
          },
          {
            id: 'engelsk-vg1-8-2-n-quiz5-q2',
            task: 'How should we remember the British Empire, according to the text?',
            options: [
              { id: 'a', text: 'Only as a civilizing mission that brought progress', isCorrect: false },
              { id: 'b', text: 'Only as a criminal enterprise of theft and murder', isCorrect: false },
              { id: 'c', text: 'By acknowledging complexity: both achievements and crimes together', isCorrect: true },
              { id: 'd', text: 'By forgetting it entirely and moving on', isCorrect: false },
            ],
            solution: 'The honest approach acknowledges complexity: railways and famines, legal systems and exploitation, English language and cultural destruction. It means recognizing ongoing moral obligations while understanding why the world is organized as it is.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-2-n-summary',
      type: 'text',
      content: `## Summary: The British Empire and Its Legacy

You have explored the rise, extent, and fall of the British Empire. Here are the key points:

**The First Empire (1583-1783):**
Built on trade and slavery. Caribbean sugar plantations generated enormous wealth through the labor of enslaved Africans. Ended with American independence.

**The Second Empire (1783-1914):**
Centered on India ("the jewel in the crown") and expanded into Africa during the Scramble for Africa. Controlled about 25% of the world's land and population.

**Colonialism's Methods:**
Direct rule, indirect rule through local elites, and economic extraction. Railways and institutions were built, but primarily served imperial interests.

**Lasting Effects:**
English as a global language, common law systems, but also problematic borders, economic inequality, and racism. The Commonwealth maintains ties between former colonies.

**How to Remember:**
Neither celebrate nor simply condemn. Understand the complexity and recognize that we still live with the Empire's consequences - in language, borders, economies, and attitudes.

The language you are learning, the global systems you navigate, and many current conflicts are shaped by this history. Understanding it helps you understand the world.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 8.3 NARRATIVE: British Politics and Government
// ============================================================================

export const CHAPTER_ENGELSK_VG1_8_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-8-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '8.3',
  title: 'British Politics and Government',
  subtitle: 'Narrative Version',
  description: 'Discover how the Mother of Parliaments works - from kings and queens to prime ministers.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden',
  ],
  linkedChapterId: 'engelsk-vg1-8-3',
  content: [
    {
      id: 'engelsk-vg1-8-3-n-intro',
      type: 'text',
      content: `## The Mother of Parliaments

Every Wednesday at noon, something remarkable happens in London. The Prime Minister stands up in the House of Commons and answers questions - not polite questions, but often hostile, mocking, and aggressive questions from political opponents. This is Prime Minister's Questions, and it symbolizes something important: in Britain, even the most powerful person must explain themselves to elected representatives.

Britain is often called "the mother of parliaments" because its system influenced democracies worldwide. But it is also a constitutional monarchy - meaning there is still a king (currently Charles III) who technically has enormous powers but never uses them. How does this strange system work?

Understanding British politics helps you understand not just Britain, but also the systems of Canada, Australia, India, and many other countries that inherited British institutions. It also raises interesting questions: Can tradition and democracy coexist? What role should a monarch have in a modern state? And how do you run a country without a written constitution?

Let us explore this ancient, complicated, and surprisingly functional system.`,
    },
    {
      id: 'engelsk-vg1-8-3-n-section1',
      type: 'text',
      content: `## The Constitutional Monarchy: Reigning Without Ruling

King Charles III is one of the richest people in Britain. He lives in palaces, wears a crown, and has his face on every coin and stamp. Technically, he has enormous powers - he could dissolve Parliament, refuse to sign laws, or dismiss the Prime Minister. But if he actually tried to use these powers, there would be a constitutional crisis.

This is the essence of constitutional monarchy: the monarch reigns but does not rule. Real power belongs to elected officials. The monarch's role is ceremonial - opening Parliament, hosting state visits, and providing a symbol of national unity above party politics.

Why keep a monarchy at all? Supporters argue it provides stability and continuity. Prime Ministers come and go, but the Crown endures. It attracts tourists. It allows the head of state (the monarch) to be separate from the head of government (the Prime Minister), so the nation has a non-political figure to rally around.

Critics see it as an outdated, expensive relic of privilege. The royal family costs taxpayers millions, lives in luxury, and inherits position rather than earning it. In a democracy, should anyone be born to such status?

The debate continues, but for now, Britain remains a constitutional monarchy - one of the world's oldest, and a model for others from Norway to Japan.`,
    },
    {
      id: 'engelsk-vg1-8-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on the British monarchy:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-3-n-quiz1-q0',
            task: 'What does it mean that the British monarch "reigns but does not rule"?',
            options: [
          { id: 'a', text: 'The monarch makes all important decisions but delegates routine matters', isCorrect: false },
          { id: 'b', text: 'The monarch has a ceremonial role while real power belongs to elected officials', isCorrect: true },
          { id: 'c', text: 'The monarch only rules in Scotland, not England', isCorrect: false },
          { id: 'd', text: 'The monarch shares power equally with Parliament', isCorrect: false },
        ],
            solution: 'In a constitutional monarchy, the monarch has ceremonial duties (reigning) but no real political power (not ruling). Real decisions are made by elected politicians. The monarch remains neutral and acts on the advice of the government.',
          },
          {
            id: 'engelsk-vg1-8-3-n-quiz1-q1',
            task: 'What argument do supporters of the monarchy make for keeping it?',
            options: [
              { id: 'a', text: 'The monarch makes better decisions than Parliament', isCorrect: false },
              { id: 'b', text: 'It provides stability, continuity, and a non-political head of state', isCorrect: true },
              { id: 'c', text: 'The monarch controls the military effectively', isCorrect: false },
              { id: 'd', text: 'Most countries still have monarchies', isCorrect: false },
            ],
            solution: 'Supporters argue the monarchy provides stability and continuity above party politics, attracts tourists, and allows the head of state to be separate from the head of government. Critics see it as an outdated, expensive relic of privilege.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-3-n-section2',
      type: 'text',
      content: `## Parliament: Lords and Commons

The British Parliament has two houses, and they could not be more different.

The House of Commons is where real power lies. It has 650 Members of Parliament (MPs), each elected to represent a geographic constituency. The party that wins the most seats usually forms the government. The Commons debates laws, controls government spending, and can bring down governments through votes of no confidence.

The House of Lords is... stranger. It has around 800 members, none of them elected. Some are hereditary peers (though most were removed in 1999). Most are "life peers" - appointed for their expertise or as political rewards. Some are bishops of the Church of England. The Lords can review and delay legislation, but they cannot block it forever.

Why keep an unelected house? The Lords provides expertise (many members are former senior judges, scientists, or business leaders) and acts as a check on hasty legislation. But critics call it undemocratic. Various reform attempts have failed, and the Lords remains an anomaly in British democracy.

One crucial thing Britain lacks: a written constitution. There is no single document like the American Constitution. Instead, there are laws, traditions, and conventions accumulated over centuries. This makes the system flexible but also unclear - sometimes no one is quite sure what the rules are.`,
    },
    {
      id: 'engelsk-vg1-8-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on Parliament:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-3-n-quiz2-q0',
            task: 'What is unusual about the House of Lords?',
            options: [
          { id: 'a', text: 'Its members are all elected by proportional representation', isCorrect: false },
          { id: 'b', text: 'Its members are not elected - they are appointed or inherit their positions', isCorrect: true },
          { id: 'c', text: 'It has more power than the House of Commons', isCorrect: false },
          { id: 'd', text: 'It only meets once a year', isCorrect: false },
        ],
            solution: 'The House of Lords has about 800 unelected members - life peers appointed for expertise, some remaining hereditary peers, and Church of England bishops. It can review legislation but cannot ultimately block the elected Commons.',
          },
          {
            id: 'engelsk-vg1-8-3-n-quiz2-q1',
            task: 'What is unusual about Britain\'s constitution?',
            options: [
              { id: 'a', text: 'It is the longest written constitution in the world', isCorrect: false },
              { id: 'b', text: 'It was written by the United Nations', isCorrect: false },
              { id: 'c', text: 'There is no single written constitution - it consists of accumulated laws and traditions', isCorrect: true },
              { id: 'd', text: 'It is identical to the American Constitution', isCorrect: false },
            ],
            solution: 'Unlike the American Constitution, there is no single document defining British constitutional rules. Instead, there are laws, traditions, and conventions accumulated over centuries. This makes the system flexible but sometimes unclear.',
          },
          {
            id: 'engelsk-vg1-8-3-n-quiz2-q2',
            task: 'How many members does the House of Commons have?',
            options: [
              { id: 'a', text: '100 members', isCorrect: false },
              { id: 'b', text: '435 members', isCorrect: false },
              { id: 'c', text: '650 elected Members of Parliament', isCorrect: true },
              { id: 'd', text: '800 appointed members', isCorrect: false },
            ],
            solution: 'The House of Commons has 650 Members of Parliament (MPs), each elected to represent a geographic constituency. The party that wins the most seats usually forms the government.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-3-n-section3',
      type: 'text',
      content: `## The Prime Minister and Government

The Prime Minister (PM) is the most powerful person in British politics - but the position barely exists in law. There is no constitutional job description. The PM is simply the leader of the party that can command a majority in the Commons.

The PM chooses the Cabinet - about 20-25 senior ministers who run government departments (Health, Defence, Education, etc.). This Cabinet meets regularly to make major decisions. Britain uses "collective responsibility" - once the Cabinet decides something, all ministers must support it publicly or resign.

British PMs can be very powerful. They control the government agenda, appoint ministers, and lead their party. Margaret Thatcher transformed Britain in the 1980s. Tony Blair took Britain into the Iraq War. But PMs can also be weak - if their party rebels, they are finished. Thatcher was eventually removed by her own party. Boris Johnson resigned after scandals and lost party support.

Unlike American presidents, British PMs can be questioned directly in Parliament. They must answer to MPs, defend their decisions, and sometimes face humiliating defeats. This makes for great political theater but also real accountability.`,
    },
    {
      id: 'engelsk-vg1-8-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on the Prime Minister:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-3-n-quiz3-q0',
            task: 'How does someone become British Prime Minister?',
            options: [
          { id: 'a', text: 'By winning a direct national election for the position', isCorrect: false },
          { id: 'b', text: 'By being appointed by the monarch after showing they can command a Commons majority', isCorrect: true },
          { id: 'c', text: 'By being elected by the House of Lords', isCorrect: false },
          { id: 'd', text: 'By winning the most votes in their local constituency', isCorrect: false },
        ],
            solution: 'There is no direct election for PM. The monarch appoints whoever can command a majority in the Commons - usually the leader of the largest party. Voters choose MPs, not the PM directly.',
          },
          {
            id: 'engelsk-vg1-8-3-n-quiz3-q1',
            task: 'What is "collective responsibility" in the British Cabinet?',
            options: [
              { id: 'a', text: 'All ministers must vote the same way in elections', isCorrect: false },
              { id: 'b', text: 'Once the Cabinet decides something, all ministers must support it publicly or resign', isCorrect: true },
              { id: 'c', text: 'Ministers share their salaries equally', isCorrect: false },
              { id: 'd', text: 'The Cabinet votes on every decision by majority', isCorrect: false },
            ],
            solution: 'Collective responsibility means that once the Cabinet makes a decision, all ministers must publicly support it, even if they personally disagree. Ministers who cannot support a decision must resign.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-3-n-section4',
      type: 'text',
      content: `## Devolution: Four Nations, Multiple Parliaments

The United Kingdom contains four nations: England, Scotland, Wales, and Northern Ireland. Since the late 1990s, three of these have had their own parliaments or assemblies with significant powers.

The Scottish Parliament in Edinburgh controls education, health, justice, and some taxation. Scotland has its own legal system (different from England's), its own banknotes, and a strong sense of national identity. Scottish independence remains a live political issue - a 2014 referendum voted to stay in the UK (55% to 45%), but Brexit has renewed demands for another vote.

The Welsh Parliament (Senedd) has similar but somewhat fewer powers than Scotland. Wales is more integrated with England, sharing a legal system, but Welsh language and culture are protected and promoted.

Northern Ireland's situation is most complex. The Good Friday Agreement of 1998 ended decades of violence between unionists (wanting to stay in the UK) and nationalists (wanting to join Ireland). The Northern Ireland Assembly requires power-sharing between these communities. Brexit has created new tensions, as Northern Ireland now has a different trading relationship with both Britain and the EU.

England, containing 84% of the UK's population, has no separate parliament. This creates an awkward imbalance - Scottish MPs can vote on English matters, but English MPs cannot vote on Scottish matters handled by the Scottish Parliament.`,
    },
    {
      id: 'engelsk-vg1-8-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on devolution:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-3-n-quiz4-q0',
            task: 'What does "devolution" mean in the UK context?',
            options: [
          { id: 'a', text: 'The process of leaving the European Union', isCorrect: false },
          { id: 'b', text: 'Transferring some powers from Westminster to Scotland, Wales, and Northern Ireland', isCorrect: true },
          { id: 'c', text: 'Reducing the power of the monarchy', isCorrect: false },
          { id: 'd', text: 'Abolishing the House of Lords', isCorrect: false },
        ],
            solution: 'Devolution means transferring certain powers from the central UK Parliament in Westminster to regional parliaments in Scotland, Wales, and Northern Ireland. These bodies control areas like education and health, while Westminster handles defense and foreign policy.',
          },
          {
            id: 'engelsk-vg1-8-3-n-quiz4-q1',
            task: 'What created new tensions in Northern Ireland after Brexit?',
            options: [
              { id: 'a', text: 'Northern Ireland voted to leave the UK', isCorrect: false },
              { id: 'b', text: 'Northern Ireland now has a different trading relationship with both Britain and the EU', isCorrect: true },
              { id: 'c', text: 'Scotland demanded control over Northern Ireland', isCorrect: false },
              { id: 'd', text: 'The Good Friday Agreement was abolished', isCorrect: false },
            ],
            solution: 'Brexit created special status for Northern Ireland, which now has different trading rules from the rest of the UK due to its border with EU member Ireland. This has created ongoing tensions about Northern Ireland\'s relationship with both Britain and the EU.',
          },
          {
            id: 'engelsk-vg1-8-3-n-quiz4-q2',
            task: 'What was the result of the 2014 Scottish independence referendum?',
            options: [
              { id: 'a', text: 'Scotland voted to become independent', isCorrect: false },
              { id: 'b', text: 'The referendum was cancelled', isCorrect: false },
              { id: 'c', text: 'Scotland voted 55% to 45% to remain in the UK', isCorrect: true },
              { id: 'd', text: 'It was a tie', isCorrect: false },
            ],
            solution: 'Scotland voted 55% to 45% to remain in the United Kingdom. However, Brexit has renewed demands for another independence vote, since Scotland opposed leaving the EU.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-3-n-section5',
      type: 'text',
      content: `## Brexit and Modern Challenges

In 2016, Britain voted 52% to 48% to leave the European Union. Brexit, as it became known, was the most significant constitutional change in decades. After four years of difficult negotiations, the UK left the EU on January 31, 2020.

Why did Brexit happen? Supporters wanted to "take back control" - of borders, laws, and money. They argued that EU membership meant accepting rules made in Brussels and unlimited immigration from EU countries. For them, Brexit was about national sovereignty.

Opponents warned of economic damage, loss of influence, and social division. The UK had been EU members for 47 years. Leaving meant renegotiating trade deals, changing regulations, and uncertain impacts on Northern Ireland's peace process.

The effects are still unfolding. Trade with Europe has become more complicated. Some industries have suffered; others have adapted. Immigration patterns have shifted. Northern Ireland faces ongoing tensions over its special status. Scotland's desire for independence has grown.

Brexit revealed deep divisions in British society - between young and old, cities and rural areas, those who see Britain's future in global engagement and those who want more national control. These divisions continue to shape British politics.`,
    },
    {
      id: 'engelsk-vg1-8-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on Brexit:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-3-n-quiz5-q0',
            task: 'What was the main argument of Brexit supporters?',
            options: [
          { id: 'a', text: 'The UK should adopt the Euro currency', isCorrect: false },
          { id: 'b', text: 'The UK should take back control of borders, laws, and sovereignty from the EU', isCorrect: true },
          { id: 'c', text: 'The UK should become a republic and abolish the monarchy', isCorrect: false },
          { id: 'd', text: 'The UK should join the United States', isCorrect: false },
        ],
            solution: 'Brexit supporters argued for "taking back control" - regaining national sovereignty over laws, borders, and policy from the European Union. The 2016 referendum passed 52% to 48%, and the UK left the EU in 2020.',
          },
          {
            id: 'engelsk-vg1-8-3-n-quiz5-q1',
            task: 'What divisions did Brexit reveal in British society?',
            options: [
              { id: 'a', text: 'Only economic divisions between rich and poor', isCorrect: false },
              { id: 'b', text: 'Deep divides between young and old, cities and rural areas, globalists and nationalists', isCorrect: true },
              { id: 'c', text: 'No significant divisions were revealed', isCorrect: false },
              { id: 'd', text: 'Only divisions between England and Scotland', isCorrect: false },
            ],
            solution: 'Brexit revealed deep divisions between young (pro-EU) and old (pro-Brexit), cities (Remain) and rural areas (Leave), and those who see Britain\'s future in global engagement versus those wanting more national control.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-3-n-summary',
      type: 'text',
      content: `## Summary: British Politics and Government

You now understand the basics of how Britain is governed. Here are the key points:

**Constitutional Monarchy:**
The monarch (King Charles III) reigns but does not rule. Real power belongs to elected politicians. The monarchy provides continuity and symbolism but has no political role.

**Parliament:**
Two houses - the elected House of Commons (650 MPs) where real power lies, and the unelected House of Lords which reviews legislation. No written constitution.

**Prime Minister and Cabinet:**
The PM leads the largest party and chooses the Cabinet. PM must answer to Parliament and can be removed by their own party. Collective responsibility means ministers must support government policy or resign.

**Devolution:**
Scotland, Wales, and Northern Ireland have their own parliaments with significant powers. Scottish independence remains a live issue. Northern Ireland has special arrangements due to its peace process.

**Brexit:**
The UK left the EU in 2020 after a 2016 referendum. Effects include trade complications, renewed Scottish independence demands, and ongoing Northern Ireland tensions.

Understanding British politics helps you understand similar systems in many Commonwealth countries and raises important questions about democracy, tradition, and national identity.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 8.4 NARRATIVE: British Culture and Identity
// ============================================================================

export const CHAPTER_ENGELSK_VG1_8_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-8-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '8.4',
  title: 'British Culture and Identity',
  subtitle: 'Narrative Version',
  description: 'Explore what it means to be British today - traditions, diversity, and contested identities.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden',
  ],
  linkedChapterId: 'engelsk-vg1-8-4',
  content: [
    {
      id: 'engelsk-vg1-8-4-n-intro',
      type: 'text',
      content: `## What Does It Mean to Be British?

When you think of Britain, what comes to mind? The Queen? Now the King. Tea and crumpets? Red phone boxes and double-decker buses? Football hooligans or polite gentlemen? Fish and chips or chicken tikka masala?

British identity is complicated, contested, and constantly changing. It includes ancient traditions and recent immigrants, rural villages and global cities, pride in history and shame about empire. Four nations - England, Scotland, Wales, and Northern Ireland - share a state but have distinct identities.

About 14% of the UK population was born abroad. London is one of the world's most diverse cities. Walk down any British high street and you will see halal butchers next to traditional pubs, Polish delis near Indian restaurants. This is modern Britain.

But diversity creates tensions too. Brexit divided the nation. Debates about immigration, national values, and what schools should teach about history rage on. What does it mean to be British when Britishness means different things to different people?

Let us explore British culture and identity - the traditions, the diversity, the tensions, and the ongoing conversation about who belongs.`,
    },
    {
      id: 'engelsk-vg1-8-4-n-section1',
      type: 'text',
      content: `## Traditional British Culture

Certain traditions define Britishness in the popular imagination, even if not all Britons participate in them.

**The Monarchy:** Royal weddings, the changing of the guard, the monarch's Christmas speech - these ceremonies attract global attention. The coronation of Charles III in 2023 was watched by millions. For many, the royal family represents continuity and national pride. For others, it is an outdated institution.

**Tea Culture:** Britain imports 130 million kg of tea annually. The ritual of afternoon tea - with sandwiches, scones, and cakes - is both a tourist attraction and a genuine tradition. "Putting the kettle on" is the British response to any crisis.

**Pubs:** The public house has been central to British social life for centuries. It is where communities gather, where deals are made, where strangers become friends. Though pub numbers are declining, the pub remains an iconic institution.

**Queuing:** The British love of orderly queues is famous - and largely true. Jumping the queue is a serious social offense. This reflects broader values of fairness and patience.

**Understatement and Irony:** British humor tends toward dry wit, understatement, and self-deprecation. "Not bad" means "quite good." "Interesting" might mean "terrible." Understanding these codes is key to understanding British communication.

Of course, these stereotypes do not capture everyone. Young Britons may never drink tea. Many have never been to a pub. Traditions vary by region, class, and generation.`,
    },
    {
      id: 'engelsk-vg1-8-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on traditional British culture:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-4-n-quiz1-q0',
            task: 'What is characteristic of British humor and communication style?',
            options: [
          { id: 'a', text: 'Direct, loud, and enthusiastic expression', isCorrect: false },
          { id: 'b', text: 'Understatement, irony, and self-deprecation', isCorrect: true },
          { id: 'c', text: 'Physical comedy and slapstick', isCorrect: false },
          { id: 'd', text: 'Formal and serious at all times', isCorrect: false },
        ],
            solution: 'British communication often features understatement (\"not bad\" meaning \"good\"), irony, and self-deprecation. Understanding these codes helps interpret what British people actually mean.',
          },
          {
            id: 'engelsk-vg1-8-4-n-quiz1-q1',
            task: 'What does "putting the kettle on" represent in British culture?',
            options: [
              { id: 'a', text: 'A punishment for bad behavior', isCorrect: false },
              { id: 'b', text: 'The standard British response to any crisis or difficult situation', isCorrect: true },
              { id: 'c', text: 'A morning exercise routine', isCorrect: false },
              { id: 'd', text: 'A signal that guests should leave', isCorrect: false },
            ],
            solution: 'Making tea is the quintessential British response to any situation, from minor inconveniences to major crises. It reflects the broader cultural values of calm, patience, and carrying on.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-4-n-section2',
      type: 'text',
      content: `## Regional and National Identities

Britain is not one homogeneous culture but at least four nations with distinct identities.

**English Identity:** The largest nation often struggles to define itself separately from "British." English identity has sometimes been associated with nationalism and exclusion. The St. George's Cross flag was long avoided by many due to far-right associations, though this is changing.

**Scottish Identity:** Scotland has strong national consciousness, its own legal system, education system, and church. Symbols include tartan, bagpipes, and whisky. Scottish identity survived 300+ years of union with England and may yet lead to independence.

**Welsh Identity:** Wales maintains a distinct language (Welsh is spoken by about 20% of the population), culture, and traditions including the Eisteddfod festival. Welsh identity balances pride in culture with economic ties to England.

**Northern Irish Identity:** Perhaps the most complex, divided between those who identify as British (mainly Protestant unionists) and those who identify as Irish (mainly Catholic nationalists). This division caused decades of violence and remains sensitive.

Beyond national identities, regional and class identities matter enormously. A working-class person from Liverpool has a very different culture from an upper-class Londoner. Accents alone - from Geordie to Cockney to Received Pronunciation - signal identity immediately.`,
    },
    {
      id: 'engelsk-vg1-8-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on regional identities:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-4-n-quiz2-q0',
            task: 'Why is identity in Northern Ireland particularly complex?',
            options: [
          { id: 'a', text: 'Because people speak many different languages', isCorrect: false },
          { id: 'b', text: 'Because of the division between those identifying as British and those as Irish', isCorrect: true },
          { id: 'c', text: 'Because Northern Ireland has no distinct culture', isCorrect: false },
          { id: 'd', text: 'Because it is geographically isolated', isCorrect: false },
        ],
            solution: 'Northern Ireland is divided between unionists (mainly Protestant) who identify as British and want to stay in the UK, and nationalists (mainly Catholic) who identify as Irish and favor unification with Ireland. This division caused decades of conflict.',
          },
          {
            id: 'engelsk-vg1-8-4-n-quiz2-q1',
            task: 'What is distinctive about Welsh identity within the UK?',
            options: [
              { id: 'a', text: 'Wales has no distinct culture from England', isCorrect: false },
              { id: 'b', text: 'Wales maintains its own language, spoken by about 20% of the population', isCorrect: true },
              { id: 'c', text: 'Wales has been independent since 1999', isCorrect: false },
              { id: 'd', text: 'Welsh identity is identical to Scottish identity', isCorrect: false },
            ],
            solution: 'Wales maintains a distinct language (Welsh is spoken by about 20% of the population), culture, and traditions including the Eisteddfod festival. Welsh identity balances pride in culture with economic ties to England.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-4-n-section3',
      type: 'text',
      content: `## Multicultural Britain

Modern Britain is shaped by immigration, especially since World War II.

**The Windrush Generation:** In 1948, the ship Empire Windrush brought the first large group of Caribbean immigrants to Britain, invited to help rebuild the post-war economy. They and their descendants faced racism but built communities and transformed British culture.

**South Asian Communities:** Immigration from India, Pakistan, and Bangladesh created vibrant communities in cities like Birmingham, Bradford, and Leicester. Curry houses became a British institution. Chicken tikka masala is sometimes called Britain's national dish.

**European Immigration:** EU membership brought millions of Europeans - Polish became the second most spoken language in England. Brexit partly reflected tensions about this immigration.

**Diversity Today:** About 14% of UK residents were born abroad. In London, the figure is over 35%. British schools, workplaces, and neighborhoods are far more diverse than a generation ago.

This diversity has transformed British culture. Music from grime to bhangra reflects multicultural influences. Literature by authors like Zadie Smith and Kazuo Ishiguro explores multicultural British identities. The 2012 London Olympics opening ceremony celebrated this diversity as central to modern Britishness.

But tensions exist. Racism has not disappeared. Debates about integration, "British values," and belonging continue. The 2023 census showed the white British population is no longer the majority in some cities - a fact celebrated by some, mourned by others.`,
    },
    {
      id: 'engelsk-vg1-8-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on multicultural Britain:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-4-n-quiz3-q0',
            task: 'What was the Windrush generation?',
            options: [
          { id: 'a', text: 'British soldiers who fought in World War II', isCorrect: false },
          { id: 'b', text: 'Caribbean immigrants invited to Britain after WWII to help rebuild the economy', isCorrect: true },
          { id: 'c', text: 'European refugees who fled to Britain in the 1930s', isCorrect: false },
          { id: 'd', text: 'The first group of Indian immigrants to Britain', isCorrect: false },
        ],
            solution: 'The Windrush generation refers to Caribbean immigrants who came to Britain from 1948 onwards, named after the ship Empire Windrush. They were invited to help rebuild post-war Britain and became a foundational part of multicultural Britain.',
          },
          {
            id: 'engelsk-vg1-8-4-n-quiz3-q1',
            task: 'What dish is sometimes called Britain\'s national dish, reflecting its multicultural identity?',
            options: [
              { id: 'a', text: 'Fish and chips', isCorrect: false },
              { id: 'b', text: 'Shepherd\'s pie', isCorrect: false },
              { id: 'c', text: 'Chicken tikka masala', isCorrect: true },
              { id: 'd', text: 'Bangers and mash', isCorrect: false },
            ],
            solution: 'Chicken tikka masala, a dish influenced by South Asian cuisine, is sometimes called Britain\'s national dish. This reflects how immigration has transformed British culture - curry houses became a quintessentially British institution.',
          },
          {
            id: 'engelsk-vg1-8-4-n-quiz3-q2',
            task: 'What percentage of UK residents were born abroad?',
            options: [
              { id: 'a', text: 'About 3%', isCorrect: false },
              { id: 'b', text: 'About 14%', isCorrect: true },
              { id: 'c', text: 'About 35%', isCorrect: false },
              { id: 'd', text: 'About 50%', isCorrect: false },
            ],
            solution: 'About 14% of UK residents were born abroad. In London, the figure is over 35%. British schools, workplaces, and neighborhoods are far more diverse than a generation ago.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-4-n-section4',
      type: 'text',
      content: `## British Popular Culture

Britain punches above its weight in global popular culture. British music, television, and film reach worldwide audiences.

**Music:** From the Beatles to Adele, British musicians have shaped global pop. The British Invasion of the 1960s brought rock and roll back to America transformed. Punk emerged from London in the 1970s. Britpop dominated the 1990s. Today, British artists like Ed Sheeran and Dua Lipa top global charts.

**Television:** The BBC, funded by a license fee rather than advertising, sets standards for quality television. Doctor Who, Downton Abbey, Sherlock, and countless other shows have global fanbases. British TV is often exported or remade (The Office, for example, became a massive American hit).

**Film:** From James Bond to Harry Potter, British cinema creates globally recognized franchises. The British film industry attracts Hollywood productions with its skilled workforce and tax incentives.

**Sports:** Football (soccer) is Britain's national obsession. The Premier League is the world's most-watched football league. But cricket (inherited from empire), rugby, and tennis (Wimbledon) also have passionate followings.

**Literature:** Britain has produced globally significant writers from Shakespeare to J.K. Rowling. The Booker Prize sets standards for English-language literature. British authors continue to shape global reading.

This cultural soft power means that British culture influences the world, even as Britain's political and economic power has declined.`,
    },
    {
      id: 'engelsk-vg1-8-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on British popular culture:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-4-n-quiz4-q0',
            task: 'What is the BBC and how is it funded?',
            options: [
          { id: 'a', text: 'A private company funded by advertising', isCorrect: false },
          { id: 'b', text: 'A public broadcaster funded by a license fee paid by TV owners', isCorrect: true },
          { id: 'c', text: 'A government department funded by taxes', isCorrect: false },
          { id: 'd', text: 'A streaming service funded by subscriptions', isCorrect: false },
        ],
            solution: 'The BBC (British Broadcasting Corporation) is a public broadcaster funded by a license fee that TV owners must pay. This allows it to operate without advertising. It is known for high-quality programming and global reach.',
          },
          {
            id: 'engelsk-vg1-8-4-n-quiz4-q1',
            task: 'What is the world\'s most-watched football league?',
            options: [
              { id: 'a', text: 'Spain\'s La Liga', isCorrect: false },
              { id: 'b', text: 'Germany\'s Bundesliga', isCorrect: false },
              { id: 'c', text: 'England\'s Premier League', isCorrect: true },
              { id: 'd', text: 'Italy\'s Serie A', isCorrect: false },
            ],
            solution: 'The English Premier League is the world\'s most-watched football league. Football is Britain\'s national obsession, and its cultural soft power extends British influence far beyond its political and economic reach.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-4-n-section5',
      type: 'text',
      content: `## Identity Debates: Who Belongs?

What does it mean to be British today? This question generates heated debate.

**"British Values":** The government has defined "British values" as democracy, rule of law, individual liberty, and tolerance. Critics argue these are universal values, not specifically British. Others ask whether Britain has always lived up to them.

**Immigration and Belonging:** Who counts as British? Someone born here? Someone with citizenship? Someone who "acts British"? These questions have no easy answers. British-born children of immigrants sometimes feel neither fully British nor fully connected to their parents' homelands.

**History Wars:** How should Britain teach its history? Should schools emphasize imperial achievements or colonial crimes? The debate over statues - like that of slave trader Edward Colston, toppled in Bristol in 2020 - shows how contested history remains.

**Multiculturalism vs. Integration:** Should Britain be a "melting pot" where immigrants assimilate, or a "salad bowl" where cultures maintain distinctness? Policy has shifted over time. Currently, there is emphasis on shared values while respecting diversity.

**Generational Divide:** Young Britons are generally more diverse, more pro-European, more socially liberal than older generations. Brexit revealed this divide sharply. What Britain becomes depends partly on which generation's vision prevails.

These debates have no resolution. British identity will continue to evolve, shaped by those who live there and the conversations they have.`,
    },
    {
      id: 'engelsk-vg1-8-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on British identity debates:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-8-4-n-quiz5-q0',
            task: 'What is the difference between "melting pot" and "salad bowl" approaches to diversity?',
            options: [
          { id: 'a', text: 'Melting pot refers to cooking traditions while salad bowl refers to eating habits', isCorrect: false },
          { id: 'b', text: 'Melting pot means immigrants assimilate into one culture; salad bowl means cultures remain distinct while coexisting', isCorrect: true },
          { id: 'c', text: 'Melting pot is an American term while salad bowl is British', isCorrect: false },
          { id: 'd', text: 'There is no meaningful difference between the terms', isCorrect: false },
        ],
            solution: 'The "melting pot" metaphor suggests immigrants should assimilate into a unified culture. The "salad bowl" (or "cultural mosaic") suggests different cultures can maintain their distinctness while contributing to a diverse whole. Both models have supporters and critics.',
          },
          {
            id: 'engelsk-vg1-8-4-n-quiz5-q1',
            task: 'Why was the statue of Edward Colston toppled in Bristol in 2020?',
            options: [
              { id: 'a', text: 'It was damaged by a storm', isCorrect: false },
              { id: 'b', text: 'The city needed space for a new building', isCorrect: false },
              { id: 'c', text: 'Protesters pulled it down because he was a slave trader', isCorrect: true },
              { id: 'd', text: 'It was moved to a museum for preservation', isCorrect: false },
            ],
            solution: 'Protesters toppled the statue of slave trader Edward Colston during Black Lives Matter protests, sparking debates about how Britain should remember its history and which figures deserve public monuments.',
          },
          {
            id: 'engelsk-vg1-8-4-n-quiz5-q2',
            task: 'What are the official "British values" as defined by the UK government?',
            options: [
              { id: 'a', text: 'Tea drinking, queuing, and politeness', isCorrect: false },
              { id: 'b', text: 'Democracy, rule of law, individual liberty, and tolerance', isCorrect: true },
              { id: 'c', text: 'Monarchy, tradition, and empire', isCorrect: false },
              { id: 'd', text: 'Hard work, competition, and self-reliance', isCorrect: false },
            ],
            solution: 'The government defined "British values" as democracy, rule of law, individual liberty, and tolerance. Critics argue these are universal values, not specifically British, and question whether Britain has always lived up to them.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-8-4-n-summary',
      type: 'text',
      content: `## Summary: British Culture and Identity

You have explored the complexity of British culture and identity. Here are the key points:

**Traditional Culture:**
The monarchy, tea, pubs, queuing, and dry humor are iconic but do not capture all Britons. Traditions vary by region, class, and generation.

**Multiple Identities:**
Britain contains English, Scottish, Welsh, and Northern Irish identities, plus strong regional and class identities. These sometimes complement and sometimes compete with "British" identity.

**Multicultural Britain:**
Post-WWII immigration, especially the Windrush generation and South Asian communities, transformed Britain. About 14% of residents were born abroad. London is one of the world's most diverse cities.

**Cultural Influence:**
British music, television, film, and sports have global reach. This "soft power" means British culture influences the world even as political power has declined.

**Ongoing Debates:**
Who belongs? How should history be remembered? Should Britain be a melting pot or salad bowl? These questions have no easy answers and will shape Britain's future.

Understanding British identity means accepting its complexity - multiple nations, multiple cultures, multiple views about what being British means.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 9.1 NARRATIVE: American History Overview
// ============================================================================

export const CHAPTER_ENGELSK_VG1_9_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-9-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '9.1',
  title: 'American History Overview',
  subtitle: 'Narrative Version',
  description: 'From revolution to superpower - the dramatic story of the United States.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden ut fra historiske sammenhenger',
  ],
  linkedChapterId: 'engelsk-vg1-9-1',
  content: [
    {
      id: 'engelsk-vg1-9-1-n-intro',
      type: 'text',
      content: `## A Nation Built on Ideas

"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."

These words, written in Philadelphia in the summer of 1776, launched a nation and an experiment in democracy that continues today. They were revolutionary - no government had ever been founded on the principle that ordinary people had rights that governments must respect, that power came from the people rather than from God through kings. These words would inspire revolutions in France, Haiti, and Latin America. They would be quoted by abolitionists fighting slavery, suffragettes demanding women's votes, and civil rights marchers in Selma, Alabama.

But here is the uncomfortable truth: the man who wrote them, Thomas Jefferson, owned over 600 enslaved people during his lifetime. He never freed most of them. He almost certainly fathered children with Sally Hemings, an enslaved woman who was the half-sister of his dead wife - children who remained enslaved until his death. The man who wrote "all men are created equal" bought, sold, and profited from the labor of people he kept in bondage.

This contradiction - between America's highest ideals and its often brutal reality - runs through the entire American story like a fault line. The Constitution that established "We the People" counted enslaved people as three-fifths of a person for representation purposes but gave them no rights. The nation that proclaimed liberty expanded by dispossessing indigenous peoples and taking their lands. The "land of opportunity" excluded women, immigrants, and minorities from full participation for most of its history.

Understanding America means holding both truths at once: the genuine inspiration of its founding principles - principles that have been used by oppressed people everywhere to demand their rights - and the violence, exclusion, and exploitation that have also characterized American history. Neither the patriotic story of ever-expanding freedom nor the critical story of unrelenting oppression captures the full truth. America is both, always, simultaneously.

Why does American history matter to you, here in Norway? Because American culture, politics, and economics shape your world in ways you may not even notice. American films dominate your screens, American music fills your earbuds, American social media platforms shape how you communicate. American tech companies hold your data and shape your online experience. American military power, with bases in over 70 countries, shapes global politics and security - including in Europe. American economic decisions affect global markets and Norwegian exports. American social movements - from civil rights to #MeToo to Black Lives Matter - spread worldwide and influence debates in Norway.

Understanding America is not optional in the modern world. Let us explore how a collection of rebellious British colonies on the edge of a continent became the world's dominant superpower, and what that journey reveals about both the possibilities of democracy and its persistent failures.`,
    },
    {
      id: 'engelsk-vg1-9-1-n-section1',
      type: 'text',
      content: `## Before Columbus: Indigenous America

Before we talk about "American history," we must acknowledge a fundamental truth that traditional American narratives often obscure: America was not empty before Europeans arrived. It was not a "wilderness" waiting to be "discovered" and "civilized." For at least 15,000 years - and possibly much longer - diverse peoples had lived across the continent, developing sophisticated civilizations, complex social structures, and sustainable relationships with the land.

The diversity of indigenous America is staggering. In the Southwest, the Navajo (Diné) and Pueblo peoples built adobe structures and developed irrigation systems that allowed farming in desert conditions. On the Great Plains, nations like the Lakota, Cheyenne, and Comanche developed horse cultures that made them among the most effective light cavalry in history. In the Pacific Northwest, peoples like the Haida and Tlingit built prosperous societies based on salmon fishing and cedar woodworking, producing remarkable totem poles and potlatch ceremonies. In the Northeast, the Haudenosaunee (Iroquois) Confederacy created a sophisticated democratic government that some historians believe influenced the framers of the US Constitution.

These were not "primitive" peoples waiting to be "discovered." The city of Cahokia, near present-day St. Louis, had perhaps 20,000 inhabitants at its peak around 1100 AD - larger than London at the same time. Indigenous peoples had developed corn (maize) from a wild grass through millennia of selective breeding - one of the most remarkable agricultural achievements in human history. They had created vast trading networks that connected peoples across the continent, exchanging goods like copper from Lake Superior, shells from the Gulf Coast, and obsidian from the Rocky Mountains.

When Christopher Columbus arrived in the Caribbean in 1492, perhaps 10 million people lived in what is now the United States, and perhaps 100 million across the Americas as a whole. They spoke hundreds of different languages, practiced diverse religions, and organized their societies in countless ways - from small hunting bands to vast empires like those of the Aztecs and Incas.

What followed Columbus was one of the greatest demographic catastrophes in human history. European diseases - smallpox, measles, influenza, typhus, bubonic plague - swept through indigenous populations that had no immunity. In some areas, 90% or more of the population died within a few decades of first contact. Whole villages were wiped out. Cultures that had developed over thousands of years vanished in a generation. This was not always intentional (though sometimes disease was deliberately spread, as when smallpox-infected blankets were given to tribes), but it made European conquest possible. Colonizers arriving in many areas found empty villages, abandoned fields, and traumatized survivors - and interpreted this as proof that the land was empty and available for taking.

Those who survived faced conquest, forced relocation, and deliberate cultural destruction. The Trail of Tears in the 1830s - the forced march of Cherokee, Creek, Choctaw, Chickasaw, and Seminole peoples from their ancestral lands in the Southeast to "Indian Territory" (now Oklahoma) - killed perhaps 15,000 people along the way from cold, hunger, and disease. Children were taken from families and sent to boarding schools where they were forbidden to speak their languages, practice their religions, or maintain their cultural identities. "Kill the Indian, save the man" was the explicit goal.

By 1900, the indigenous population of the United States had fallen to about 250,000 - a 97.5% decline from pre-contact numbers. Many assumed they would disappear entirely, that they were a "vanishing race." They did not vanish. Today, about 6 million Americans identify as Native American or Alaska Native, and indigenous peoples are reclaiming their languages, traditions, and rights.

This history is often minimized, forgotten, or told entirely from the perspective of the colonizers. Terms like "frontier," "settlement," and "Westward expansion" obscure the violence they describe. What settlers called "wilderness" was often land carefully managed by indigenous peoples through controlled burning and sustainable harvesting for thousands of years. The buffalo herds that roamed the Plains existed partly because indigenous peoples had shaped the ecosystem to support them.

You cannot understand America without understanding what was destroyed to create it. The land was not empty. The treaties were not fair. The "conquest" was not heroic. And indigenous peoples are not relics of the past but living communities still fighting for recognition, sovereignty, and justice.`,
    },
    {
      id: 'engelsk-vg1-9-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on Indigenous America:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-1-n-quiz1-q0',
            task: 'What caused the massive decline in indigenous American population after European contact?',
            options: [
          { id: 'a', text: 'Wars with European settlers killed most indigenous people', isCorrect: false },
          { id: 'b', text: 'Indigenous people voluntarily moved to other continents', isCorrect: false },
          { id: 'c', text: 'European diseases like smallpox killed up to 90% of the population', isCorrect: true },
          { id: 'd', text: 'Climate change made North America uninhabitable', isCorrect: false },
        ],
            solution: 'European diseases, particularly smallpox, measles, and influenza, were the primary cause of indigenous population collapse. Indigenous peoples had no immunity to these diseases. While violence and displacement also caused deaths, disease was by far the biggest killer.',
          },
          {
            id: 'engelsk-vg1-9-1-n-quiz1-q1',
            task: 'How long had indigenous peoples lived in North America before European contact?',
            options: [
              { id: 'a', text: 'About 500 years', isCorrect: false },
              { id: 'b', text: 'About 2,000 years', isCorrect: false },
              { id: 'c', text: 'At least 15,000 years', isCorrect: true },
              { id: 'd', text: 'About 500,000 years', isCorrect: false },
            ],
            solution: 'Indigenous peoples had lived in North America for at least 15,000 years, developing sophisticated civilizations, complex social structures, and sustainable relationships with the land long before any Europeans arrived.',
          },
          {
            id: 'engelsk-vg1-9-1-n-quiz1-q2',
            task: 'What was the Trail of Tears?',
            options: [
              { id: 'a', text: 'A trade route between indigenous nations', isCorrect: false },
              { id: 'b', text: 'A forced march of indigenous peoples from their ancestral lands that killed about 15,000 people', isCorrect: true },
              { id: 'c', text: 'A peaceful migration to better farming land', isCorrect: false },
              { id: 'd', text: 'A mourning ceremony practiced by the Cherokee', isCorrect: false },
            ],
            solution: 'The Trail of Tears in the 1830s was the forced march of Cherokee, Creek, Choctaw, Chickasaw, and Seminole peoples from the Southeast to "Indian Territory" (now Oklahoma). About 15,000 people died along the way from cold, hunger, and disease.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-1-n-section2',
      type: 'text',
      content: `## Revolution and the Birth of a Nation

In 1776, thirteen British colonies declared independence. Their complaints? Taxation without representation. Royal tyranny. Violations of their rights as Englishmen. The Declaration of Independence proclaimed radical ideas: that governments derive power from the consent of the governed, that people have natural rights to life, liberty, and the pursuit of happiness.

The Revolutionary War was not inevitable. Many colonists remained loyal to Britain. The Continental Army under George Washington often struggled and nearly collapsed. But with French help (France was happy to weaken Britain), the revolutionaries prevailed. In 1783, Britain recognized American independence.

Then came the hard work of building a government. The Constitution, written in 1787, created a federal system balancing national and state power. It established separation of powers - executive, legislative, judicial - to prevent tyranny. The Bill of Rights (1791) protected freedoms of speech, religion, and assembly.

But who counted as American? The Constitution counted enslaved people as three-fifths of a person for representation purposes, yet gave them no rights. Women could not vote. Native Americans were excluded. The ideals were revolutionary; the reality was limited to white, property-owning men.

Yet the ideals mattered. "All men are created equal" would become a rallying cry for every subsequent movement seeking to expand who counts as American.`,
    },
    {
      id: 'engelsk-vg1-9-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on the American founding:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-1-n-quiz2-q0',
            task: 'What was the main contradiction in the American founding?',
            options: [
          { id: 'a', text: 'The Constitution was too short', isCorrect: false },
          { id: 'b', text: 'Ideals of equality and liberty coexisted with slavery and exclusion', isCorrect: true },
          { id: 'c', text: 'Americans wanted to rejoin Britain but could not', isCorrect: false },
          { id: 'd', text: 'The president had too little power', isCorrect: false },
        ],
            solution: 'The Declaration proclaimed "all men are created equal" while many founders owned enslaved people. The Constitution protected slavery and excluded women, Native Americans, and non-property owners from full citizenship. This contradiction has shaped American history ever since.',
          },
          {
            id: 'engelsk-vg1-9-1-n-quiz2-q1',
            task: 'What document established separation of powers in the American government?',
            options: [
              { id: 'a', text: 'The Declaration of Independence', isCorrect: false },
              { id: 'b', text: 'The Bill of Rights', isCorrect: false },
              { id: 'c', text: 'The Constitution of 1787', isCorrect: true },
              { id: 'd', text: 'The Emancipation Proclamation', isCorrect: false },
            ],
            solution: 'The Constitution, written in 1787, created a federal system with separation of powers - executive, legislative, and judicial branches - to prevent tyranny. The Bill of Rights (1791) then protected individual freedoms.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-1-n-section3',
      type: 'text',
      content: `## Civil War and Reconstruction

The tension between freedom and slavery could not last forever. By 1860, America had divided into a free North and a slaveholding South. When Abraham Lincoln was elected president, Southern states seceded to form the Confederacy, determined to preserve slavery.

The Civil War (1861-1865) was the bloodiest conflict in American history. Over 620,000 soldiers died - more than in all other American wars combined until Vietnam. Brother fought brother. Cities were destroyed. The South's economy was devastated.

In 1863, Lincoln's Emancipation Proclamation declared enslaved people in Confederate states free. After the war, the 13th Amendment abolished slavery entirely. The 14th granted citizenship and equal protection. The 15th guaranteed the right to vote regardless of race.

But Reconstruction - the attempt to rebuild the South and integrate formerly enslaved people - failed. White Southerners resisted through violence and terrorism. The Ku Klux Klan murdered Black voters and their white allies. By 1877, federal troops withdrew, and Southern states implemented "Jim Crow" laws: segregation, disenfranchisement, and systematic oppression that would last nearly a century.

The Civil War ended slavery but not racism. The failure of Reconstruction meant that the full promise of emancipation would not be redeemed until the Civil Rights Movement a hundred years later - and many would argue it remains unfulfilled today.`,
    },
    {
      id: 'engelsk-vg1-9-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on the Civil War and Reconstruction:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-1-n-quiz3-q0',
            task: 'Why did Reconstruction fail to achieve lasting equality?',
            options: [
          { id: 'a', text: 'Formerly enslaved people did not want citizenship', isCorrect: false },
          { id: 'b', text: 'The Constitution did not allow equal rights', isCorrect: false },
          { id: 'c', text: 'White Southern resistance, violence, and eventual federal withdrawal allowed Jim Crow laws', isCorrect: true },
          { id: 'd', text: 'The Civil War never actually ended', isCorrect: false },
        ],
            solution: 'Reconstruction was undermined by violent white resistance (including the KKK), and when federal troops withdrew in 1877, Southern states implemented Jim Crow laws - legal segregation and disenfranchisement that lasted until the 1960s.',
          },
          {
            id: 'engelsk-vg1-9-1-n-quiz3-q1',
            task: 'How many soldiers died in the American Civil War?',
            options: [
              { id: 'a', text: 'About 50,000', isCorrect: false },
              { id: 'b', text: 'Over 620,000', isCorrect: true },
              { id: 'c', text: 'About 200,000', isCorrect: false },
              { id: 'd', text: 'Over 2 million', isCorrect: false },
            ],
            solution: 'Over 620,000 soldiers died in the Civil War - more than in all other American wars combined until Vietnam. It was the bloodiest conflict in American history.',
          },
          {
            id: 'engelsk-vg1-9-1-n-quiz3-q2',
            task: 'What were "Jim Crow" laws?',
            options: [
              { id: 'a', text: 'Laws that gave Black Americans full citizenship', isCorrect: false },
              { id: 'b', text: 'Laws requiring all children to attend school', isCorrect: false },
              { id: 'c', text: 'Laws enforcing segregation, disenfranchisement, and systematic oppression of Black Americans', isCorrect: true },
              { id: 'd', text: 'Laws that limited presidential power', isCorrect: false },
            ],
            solution: 'After federal troops withdrew from the South in 1877, Southern states implemented Jim Crow laws: legal segregation in public facilities, disenfranchisement of Black voters, and systematic oppression that lasted nearly a century.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-1-n-section4',
      type: 'text',
      content: `## Industrialization, Immigration, and Empire

Between 1870 and 1920, America transformed. Railroads connected the continent. Factories mass-produced goods. Cities exploded in population. Millionaires like Carnegie (steel) and Rockefeller (oil) amassed unprecedented wealth while workers labored in dangerous conditions for low wages.

Immigration fueled this growth. Millions came from Ireland, Germany, Italy, Poland, Russia, China, and Japan - seeking opportunity and fleeing poverty or persecution. They built railways, worked in mines and factories, and often faced discrimination. "No Irish Need Apply" signs gave way to restrictions on Chinese immigration (1882) and quotas limiting Southern and Eastern Europeans (1920s).

America also became an imperial power. The Spanish-American War (1898) brought control of Puerto Rico, the Philippines, and Guam. Hawaii was annexed. The Panama Canal was built. American businesses expanded across Latin America and Asia.

World War I marked America's arrival as a global power. Though late to enter (1917), American troops helped turn the tide. President Wilson promoted the League of Nations, though Congress refused to join.

The 1920s brought prosperity - jazz, cars, movies, consumer culture. Then came the crash. The Great Depression (1929-1939) devastated the economy. President Franklin Roosevelt's New Deal expanded government's role through Social Security, labor protections, and public works.

World War II completed America's transformation. Emerging victorious and economically dominant, the United States became one of two superpowers in a divided Cold War world.`,
    },
    {
      id: 'engelsk-vg1-9-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on American industrialization:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-1-n-quiz4-q0',
            task: 'What was the New Deal?',
            options: [
          { id: 'a', text: 'A peace treaty ending World War II', isCorrect: false },
          { id: 'b', text: 'Roosevelt\'s expansion of government programs to combat the Great Depression', isCorrect: true },
          { id: 'c', text: 'An agreement with Native American tribes', isCorrect: false },
          { id: 'd', text: 'A trade deal with European countries', isCorrect: false },
        ],
            solution: 'The New Deal was President Franklin Roosevelt\'s program of government intervention during the Great Depression (1930s). It created Social Security, labor protections, and public works programs, permanently expanding the federal government\'s role in the economy.',
          },
          {
            id: 'engelsk-vg1-9-1-n-quiz4-q1',
            task: 'What was notable about the Chinese Exclusion Act of 1882?',
            options: [
              { id: 'a', text: 'It was the first law banning immigration based on nationality', isCorrect: true },
              { id: 'b', text: 'It welcomed Chinese immigrants to America', isCorrect: false },
              { id: 'c', text: 'It gave Chinese Americans the right to vote', isCorrect: false },
              { id: 'd', text: 'It established trade relations with China', isCorrect: false },
            ],
            solution: 'The Chinese Exclusion Act was the first US law to ban immigration based on nationality, reflecting how immigrants faced discrimination even as they built the nation\'s infrastructure.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-1-n-section5',
      type: 'text',
      content: `## Civil Rights, Cold War, and Modern America

The Cold War (1945-1991) shaped American life for decades. Fear of communism drove foreign policy (Korea, Vietnam) and domestic politics (McCarthyism). The nuclear arms race threatened humanity's existence. But the Cold War also pushed America to address its racial contradictions - how could it lead the "free world" while oppressing its own citizens?

The Civil Rights Movement (1950s-60s) demanded that America live up to its ideals. Rosa Parks refused to give up her bus seat. Martin Luther King Jr. preached nonviolent resistance. Students sat in at segregated lunch counters. Marchers faced police dogs and fire hoses.

Change came through struggle. Brown v. Board of Education (1954) declared school segregation unconstitutional. The Civil Rights Act (1964) banned discrimination. The Voting Rights Act (1965) protected Black voters. These victories were hard-won against fierce resistance.

The late 20th century brought new challenges: Vietnam's divisive war, Watergate's corruption, economic transitions, culture wars. September 11, 2001, launched the "War on Terror" with consequences still unfolding.

Today's America faces polarization, racial reckoning, economic inequality, and debates about democracy itself. The January 6, 2021 attack on the Capitol showed how fragile democratic institutions can be. Yet movements for justice continue - Black Lives Matter, #MeToo, climate activism - carrying forward the American tradition of demanding that the nation live up to its ideals.`,
    },
    {
      id: 'engelsk-vg1-9-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on modern America:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-1-n-quiz5-q0',
            task: 'What was the significance of the Civil Rights Movement?',
            options: [
          { id: 'a', text: 'It established American independence from Britain', isCorrect: false },
          { id: 'b', text: 'It ended the Cold War', isCorrect: false },
          { id: 'c', text: 'It fought to end legal segregation and secure equal rights for Black Americans', isCorrect: true },
          { id: 'd', text: 'It gave women the right to vote', isCorrect: false },
        ],
            solution: 'The Civil Rights Movement (1950s-60s) used nonviolent protest to challenge segregation and discrimination. Key achievements include Brown v. Board of Education, the Civil Rights Act (1964), and the Voting Rights Act (1965), which dismantled legal Jim Crow.',
          },
          {
            id: 'engelsk-vg1-9-1-n-quiz5-q1',
            task: 'What was the Cold War?',
            options: [
              { id: 'a', text: 'A war fought in Arctic regions', isCorrect: false },
              { id: 'b', text: 'A period of tension between the US and Soviet Union from 1945-1991', isCorrect: true },
              { id: 'c', text: 'A trade dispute between the US and China', isCorrect: false },
              { id: 'd', text: 'A civil war within the United States', isCorrect: false },
            ],
            solution: 'The Cold War (1945-1991) was a period of political and military tension between the US and Soviet Union that shaped American foreign and domestic policy for decades. It drove interventions in Korea and Vietnam and the nuclear arms race.',
          },
          {
            id: 'engelsk-vg1-9-1-n-quiz5-q2',
            task: 'What event on January 6, 2021, raised concerns about American democracy?',
            options: [
              { id: 'a', text: 'A peaceful inauguration ceremony', isCorrect: false },
              { id: 'b', text: 'An attack on the US Capitol by Trump supporters', isCorrect: true },
              { id: 'c', text: 'A Supreme Court ruling on voting rights', isCorrect: false },
              { id: 'd', text: 'A major earthquake in Washington DC', isCorrect: false },
            ],
            solution: 'On January 6, 2021, supporters of President Trump attacked the Capitol while Congress was certifying Biden\'s election victory, showing how fragile democratic institutions can be.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-1-n-summary',
      type: 'text',
      content: `## Summary: American History Overview

You have journeyed through American history from indigenous civilizations to modern challenges. Here are the key points:

**Before Columbus:**
Indigenous peoples lived in North America for at least 15,000 years with complex societies. European contact brought disease that killed up to 90% of the population.

**Revolution and Founding:**
The 1776 Declaration proclaimed equality and liberty, but the reality excluded enslaved people, women, and Native Americans. The Constitution created lasting democratic institutions with fundamental contradictions.

**Civil War:**
The conflict over slavery killed 620,000 and ended legal bondage, but Reconstruction's failure allowed Jim Crow segregation to persist for nearly a century.

**Industrial Empire:**
Immigration, industrialization, and territorial expansion transformed America into a global power. Two world wars cemented its dominance.

**Civil Rights and Beyond:**
The movement ended legal segregation but racial inequality persists. Cold War, September 11, and current polarization continue to shape the nation.

**The American Paradox:**
Throughout history, America has proclaimed ideals it has often failed to live up to. Understanding both the ideals and the failures is essential to understanding America today.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 9.2 NARRATIVE: The American Dream
// ============================================================================

export const CHAPTER_ENGELSK_VG1_9_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-9-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '9.2',
  title: 'The American Dream',
  subtitle: 'Narrative Version',
  description: 'Explore America\'s most powerful myth - and the gap between dream and reality.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden',
  ],
  linkedChapterId: 'engelsk-vg1-9-2',
  content: [
    {
      id: 'engelsk-vg1-9-2-n-intro',
      type: 'text',
      content: `## The Dream That Shaped a Nation

Picture this: A young immigrant arrives at Ellis Island in 1905, carrying nothing but a small suitcase and a big dream. She speaks no English. She has no connections. But she believes that in America, unlike the old country, anyone who works hard enough can succeed. Two generations later, her granddaughter is a doctor, her grandson runs a business, and they live in a comfortable suburban home.

This is the American Dream - the belief that anyone, regardless of where they started, can achieve success through hard work. It is perhaps the most powerful idea in American culture, the story America tells about itself.

But is the Dream real? Does it still exist? Did it ever exist for everyone? These questions matter because the American Dream is not just a personal belief - it shapes policy, politics, and how Americans understand fairness. If the Dream is real, then the poor have only themselves to blame. If it is a myth, then the system needs changing.

Let us explore the American Dream - its history, its promise, and its reality.`,
    },
    {
      id: 'engelsk-vg1-9-2-n-section1',
      type: 'text',
      content: `## The Dream's Origins

The term "American Dream" was actually coined in 1931, during the Great Depression, by historian James Truslow Adams. He defined it as "that dream of a land in which life should be better and richer and fuller for everyone, with opportunity for each according to ability or achievement."

But the idea is much older. It goes back to the Puritans who saw America as a "city on a hill" - a place to build a better society. It runs through Benjamin Franklin's autobiography, where a poor printer's apprentice becomes wealthy and famous through ingenuity and hard work. It echoes in Abraham Lincoln's praise of a society where workers can become employers.

The Dream evolved with America. In the 1800s, it meant land - the frontier offered opportunity to those willing to work it (never mind the indigenous peoples being displaced). In the early 1900s, it meant entrepreneurship - building a business, making your fortune. After World War II, it meant homeownership, a car in the garage, college education for the kids.

At its best, the Dream represents genuine values: that people should be judged on merit, not birth; that hard work should be rewarded; that tomorrow can be better than today. These ideas helped attract millions of immigrants and motivated countless Americans to strive for better lives.`,
    },
    {
      id: 'engelsk-vg1-9-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on the American Dream\'s origins:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-2-n-quiz1-q0',
            task: 'What is the core idea of the American Dream?',
            options: [
          { id: 'a', text: 'That America is the richest country in the world', isCorrect: false },
          { id: 'b', text: 'That anyone can succeed through hard work, regardless of background', isCorrect: true },
          { id: 'c', text: 'That everyone should own a large house', isCorrect: false },
          { id: 'd', text: 'That America will always be a superpower', isCorrect: false },
        ],
            solution: 'The American Dream is the belief that anyone, regardless of where they started in life, can achieve success and prosperity through hard work and determination. It emphasizes merit over birth and opportunity for all.',
          },
          {
            id: 'engelsk-vg1-9-2-n-quiz1-q1',
            task: 'Who coined the term "American Dream" and when?',
            options: [
              { id: 'a', text: 'Thomas Jefferson in 1776', isCorrect: false },
              { id: 'b', text: 'James Truslow Adams in 1931', isCorrect: true },
              { id: 'c', text: 'Benjamin Franklin in 1790', isCorrect: false },
              { id: 'd', text: 'Abraham Lincoln in 1863', isCorrect: false },
            ],
            solution: 'Historian James Truslow Adams coined the term in 1931, during the Great Depression, defining it as "that dream of a land in which life should be better and richer and fuller for everyone." The idea itself is much older.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-2-n-section2',
      type: 'text',
      content: `## The Dream in Popular Culture

The American Dream pervades American culture. You see it everywhere, often without realizing it.

In literature, F. Scott Fitzgerald's "The Great Gatsby" (1925) both celebrates and critiques the Dream. Jay Gatsby rises from poverty to wealth, but his pursuit of the Dream ends in tragedy. Arthur Miller's "Death of a Salesman" (1949) shows the Dream's dark side - Willy Loman destroys himself chasing success he will never achieve.

In film, countless stories follow the rags-to-riches arc. Rocky, the underdog boxer who gets his shot. The Pursuit of Happyness, based on the real story of Chris Gardner going from homelessness to wealth. Even superhero movies often feature ordinary people who achieve extraordinary things.

Music celebrates and questions the Dream. Springsteen sings about factory workers whose dreams are fading. Hip-hop artists like Jay-Z embody the hustler's rise from nothing. Country songs praise small-town values and working-class aspirations.

Reality TV offers a modern version - shows like American Idol, Shark Tank, and countless makeover programs promise that ordinary people can become stars or entrepreneurs. The message: success is just one opportunity away.

This cultural saturation matters. It shapes how Americans understand their society and their own lives. Success feels earned; failure feels personal. The system seems fair, even when it is not.`,
    },
    {
      id: 'engelsk-vg1-9-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on the Dream in culture:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-2-n-quiz2-q0',
            task: 'How does "The Great Gatsby" relate to the American Dream?',
            options: [
          { id: 'a', text: 'It shows that the Dream always works perfectly', isCorrect: false },
          { id: 'b', text: 'It both celebrates and critiques the Dream, showing its tragic side', isCorrect: true },
          { id: 'c', text: 'It argues that the Dream is only for immigrants', isCorrect: false },
          { id: 'd', text: 'It has nothing to do with the American Dream', isCorrect: false },
        ],
            solution: 'Fitzgerald\'s novel both celebrates Gatsby\'s self-made rise and critiques the Dream\'s corruption. Gatsby achieves wealth but not happiness or acceptance. His tragic end questions whether the Dream delivers what it promises.',
          },
          {
            id: 'engelsk-vg1-9-2-n-quiz2-q1',
            task: 'What does "Death of a Salesman" by Arthur Miller show about the American Dream?',
            options: [
              { id: 'a', text: 'That the Dream always comes true with hard work', isCorrect: false },
              { id: 'b', text: 'That the Dream is only for immigrants', isCorrect: false },
              { id: 'c', text: 'The Dream\'s dark side - Willy Loman destroys himself chasing unattainable success', isCorrect: true },
              { id: 'd', text: 'That salesmen are the most successful Americans', isCorrect: false },
            ],
            solution: 'Arthur Miller\'s play shows the destructive side of the American Dream through Willy Loman, who destroys himself pursuing a version of success he can never achieve, revealing how the Dream can become a curse.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-2-n-section3',
      type: 'text',
      content: `## The Reality: Social Mobility in America

Here is where the Dream meets data. Social mobility - the ability to move up (or down) the economic ladder - can actually be measured. And the results are sobering.

America is not the most socially mobile developed country. That distinction goes to Nordic countries like Denmark, Norway, and Finland. In these countries, your parents' income is much less predictive of your own income than in America. The "land of opportunity" offers less upward mobility than Scandinavia.

Consider these statistics: In America, a child born to parents in the bottom 20% of income has only about a 7.5% chance of reaching the top 20% as an adult. The "rags to riches" story is real, but rare. Most people stay close to where they started.

Race matters enormously. Black Americans face lower mobility than white Americans at every income level. A Black child and a white child born to families with the same income will, on average, have very different adult incomes - with the Black child earning less.

Geography matters too. Some places - like Denmark County, North Carolina or much of the rural South - have very low mobility. Others - like San Jose or Salt Lake City - have much higher mobility. Where you grow up significantly affects your chances.

Why is American mobility declining? Economists point to rising inequality, expensive education, lack of affordable healthcare, and the declining power of labor unions. The rungs of the ladder have grown farther apart.`,
    },
    {
      id: 'engelsk-vg1-9-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on social mobility:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-2-n-quiz3-q0',
            task: 'How does American social mobility compare to Nordic countries?',
            options: [
          { id: 'a', text: 'America has much higher social mobility', isCorrect: false },
          { id: 'b', text: 'They are exactly equal', isCorrect: false },
          { id: 'c', text: 'Nordic countries like Norway have higher social mobility than America', isCorrect: true },
          { id: 'd', text: 'Social mobility cannot be measured, so comparison is impossible', isCorrect: false },
        ],
            solution: 'Research shows Nordic countries have higher social mobility than America. In these countries, your parents\' income is less predictive of your own income. The "land of opportunity" actually offers less upward mobility than Scandinavia.',
          },
          {
            id: 'engelsk-vg1-9-2-n-quiz3-q1',
            task: 'What chance does a child born to the bottom 20% in America have of reaching the top 20%?',
            options: [
              { id: 'a', text: 'About 50%', isCorrect: false },
              { id: 'b', text: 'About 25%', isCorrect: false },
              { id: 'c', text: 'About 7.5%', isCorrect: true },
              { id: 'd', text: 'About 1%', isCorrect: false },
            ],
            solution: 'A child born to parents in the bottom 20% of income has only about a 7.5% chance of reaching the top 20% as an adult. The "rags to riches" story is real but statistically rare.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-2-n-section4',
      type: 'text',
      content: `## Barriers to the Dream

Why do so many Americans struggle to achieve the Dream? Several structural barriers make mobility difficult.

**Education:** In America, school quality depends heavily on local property taxes. Rich neighborhoods have well-funded schools; poor neighborhoods have struggling ones. College is enormously expensive - total student debt exceeds $1.7 trillion. This creates a cycle where educational advantages pass from generation to generation.

**Healthcare:** Unlike Norway, America lacks universal healthcare. Medical bills are the leading cause of personal bankruptcy. A serious illness can wipe out a family's savings and derail careers. Fear of losing health insurance keeps workers in jobs they might otherwise leave.

**Housing:** Home prices in many cities have risen faster than incomes, making homeownership - a traditional step toward wealth-building - increasingly difficult. Meanwhile, discrimination in housing has historically prevented Black families from building wealth through homeownership.

**Wealth Inequality:** The richest 1% of Americans own more wealth than the bottom 50% combined. When capital earns more than labor, those who start with wealth pull further ahead. Inheritance matters more when inequality is high.

**The Belief in the Dream:** Paradoxically, belief in the Dream can be a barrier. If you believe anyone can succeed through hard work, you may oppose policies (like progressive taxation or welfare) that would actually increase mobility. You may blame yourself for failures that have structural causes.`,
    },
    {
      id: 'engelsk-vg1-9-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on barriers to the Dream:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-2-n-quiz4-q0',
            task: 'What is the leading cause of personal bankruptcy in America?',
            options: [
          { id: 'a', text: 'Gambling debts', isCorrect: false },
          { id: 'b', text: 'Student loans', isCorrect: false },
          { id: 'c', text: 'Medical bills', isCorrect: true },
          { id: 'd', text: 'Failed businesses', isCorrect: false },
        ],
            solution: 'Medical bills are the leading cause of personal bankruptcy in America. Unlike countries with universal healthcare, American families can be financially devastated by serious illness. This makes the American Dream harder to achieve and easier to lose.',
          },
          {
            id: 'engelsk-vg1-9-2-n-quiz4-q1',
            task: 'Why does school quality vary so much across America?',
            options: [
              { id: 'a', text: 'Schools are funded equally by the federal government', isCorrect: false },
              { id: 'b', text: 'School quality depends heavily on local property taxes', isCorrect: true },
              { id: 'c', text: 'All schools receive the same funding', isCorrect: false },
              { id: 'd', text: 'School quality is unrelated to funding', isCorrect: false },
            ],
            solution: 'In America, school quality depends heavily on local property taxes. Rich neighborhoods have well-funded schools; poor neighborhoods have struggling ones. This creates a cycle where educational advantages pass from generation to generation.',
          },
          {
            id: 'engelsk-vg1-9-2-n-quiz4-q2',
            task: 'How can belief in the American Dream paradoxically be a barrier to mobility?',
            options: [
              { id: 'a', text: 'It makes people too optimistic to work hard', isCorrect: false },
              { id: 'b', text: 'It leads people to oppose policies that would actually increase mobility', isCorrect: true },
              { id: 'c', text: 'It encourages people to leave America', isCorrect: false },
              { id: 'd', text: 'It has no effect on policy preferences', isCorrect: false },
            ],
            solution: 'If you believe anyone can succeed through hard work, you may oppose policies like progressive taxation or welfare that would actually increase mobility. You may blame yourself for failures that have structural causes.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-2-n-section5',
      type: 'text',
      content: `## The Dream Today: Hope and Critique

So is the American Dream dead? The answer is complicated.

For many immigrants, America still offers more opportunity than their home countries. The Dream remains powerful for those escaping poverty, persecution, or limited options elsewhere. Immigrants often achieve impressive mobility precisely because they started with so little.

For many Americans, the Dream feels increasingly out of reach. Younger generations face higher housing costs, more student debt, and less job security than their parents. The post-war formula - get a degree, work hard, retire comfortably - no longer works as reliably.

The Dream also looks different depending on who you are. For white Americans, it often means getting ahead. For Black Americans, it may mean being treated equally. For immigrants, it may simply mean safety and basic opportunity.

Critics argue we should redefine the Dream. Instead of rags-to-riches individual achievement, perhaps the Dream should be about collective well-being - good healthcare, education, and security for everyone. This version is closer to the Nordic model and might actually be more achievable.

Defenders argue the Dream's power lies precisely in its aspirational quality. Even if few achieve dramatic mobility, the belief in possibility motivates effort and innovation.

The debate continues. But understanding the gap between the Dream and reality is essential for understanding American society - its optimism, its inequalities, and its ongoing arguments about fairness.`,
    },
    {
      id: 'engelsk-vg1-9-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on the Dream today:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-2-n-quiz5-q0',
            task: 'Why do some critics want to redefine the American Dream?',
            options: [
          { id: 'a', text: 'They want America to become a monarchy', isCorrect: false },
          { id: 'b', text: 'They think individual success is more important than ever', isCorrect: false },
          { id: 'c', text: 'They argue collective well-being (healthcare, education for all) is more achievable than individual rags-to-riches', isCorrect: true },
          { id: 'd', text: 'They want to end all immigration', isCorrect: false },
        ],
            solution: 'Critics suggest redefining the Dream from individual achievement to collective well-being - ensuring everyone has access to healthcare, education, and security. This Nordic-style model might be more achievable and beneficial than the traditional rags-to-riches narrative.',
          },
          {
            id: 'engelsk-vg1-9-2-n-quiz5-q1',
            task: 'How does the Dream differ depending on who you are?',
            options: [
              { id: 'a', text: 'The Dream means the same thing for everyone', isCorrect: false },
              { id: 'b', text: 'For white Americans it often means getting ahead; for Black Americans it may mean being treated equally', isCorrect: true },
              { id: 'c', text: 'Only immigrants believe in the Dream', isCorrect: false },
              { id: 'd', text: 'The Dream is only about wealth', isCorrect: false },
            ],
            solution: 'The Dream looks different depending on who you are. For white Americans, it often means getting ahead. For Black Americans, it may mean being treated equally. For immigrants, it may simply mean safety and basic opportunity.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-2-n-summary',
      type: 'text',
      content: `## Summary: The American Dream

You have explored America's most powerful national myth. Here are the key points:

**The Dream's Promise:**
Anyone can succeed through hard work, regardless of background. Merit matters more than birth. Tomorrow can be better than today.

**Cultural Presence:**
The Dream pervades literature, film, music, and TV. Stories like "The Great Gatsby" both celebrate and critique it. The Dream shapes how Americans understand success and failure.

**Reality Check:**
Social mobility in America is lower than in Nordic countries. Race, geography, and family income strongly predict outcomes. The "rags to riches" story is real but rare.

**Barriers:**
Expensive education and healthcare, housing costs, wealth inequality, and the belief in the Dream itself all limit mobility.

**Today's Debate:**
Some see the Dream as dying; others see it as alive for immigrants. Critics want to redefine it as collective well-being; defenders value its aspirational power.

Understanding the American Dream - both its inspiration and its limitations - helps you understand American society, politics, and the gap between ideals and reality.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 9.3 NARRATIVE: American Politics and Society
// ============================================================================

export const CHAPTER_ENGELSK_VG1_9_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-9-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '9.3',
  title: 'American Politics and Society',
  subtitle: 'Narrative Version',
  description: 'Navigate the complexities of American democracy - from the Constitution to current polarization.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden',
  ],
  linkedChapterId: 'engelsk-vg1-9-3',
  content: [
    {
      id: 'engelsk-vg1-9-3-n-intro',
      type: 'text',
      content: `## A Nation Divided

Turn on American news and you might think you are watching two different countries. On one channel, pundits warn about socialist takeover and open borders. On another, they warn about fascism and voter suppression. Americans increasingly live in different information worlds, with different facts, different fears, and different visions of what America should be.

How did the world's oldest continuous democracy become so divided? And how does the American system actually work?

Understanding American politics matters beyond America. US foreign policy shapes global affairs. American cultural and political debates spread worldwide. And the American experiment in democracy offers lessons - both inspiring and cautionary - for democracies everywhere.

The American system is unique: a federal structure dividing power between national and state governments; three separate branches checking each other; a two-party system encouraging winner-take-all politics. Let us explore how it works and why it struggles.`,
    },
    {
      id: 'engelsk-vg1-9-3-n-section1',
      type: 'text',
      content: `## The Constitutional Framework

The US Constitution, written in 1787, remains the supreme law of the land. It is remarkably short - about 4,400 words - and deliberately difficult to change. Only 27 amendments have been added in over 230 years.

The Constitution creates three branches:

**Legislative (Congress):** Makes laws and controls spending. Congress has two chambers - the Senate (100 members, 2 per state, serving 6-year terms) and the House of Representatives (435 members, proportional to population, serving 2-year terms). Both must agree for a law to pass.

**Executive (President):** Enforces laws, commands the military, conducts foreign policy. The President serves 4-year terms, limited to two. Unlike British prime ministers, the President is separately elected and cannot be easily removed.

**Judicial (Supreme Court):** Interprets the Constitution. Nine justices serve for life, giving enormous power to whoever appoints them. The Court's ability to strike down unconstitutional laws makes it hugely influential.

The Founders designed this system to prevent tyranny through "checks and balances." But it also makes change difficult. Passing major legislation requires agreement across chambers often controlled by different parties. Critics argue this creates gridlock; defenders argue it prevents hasty action.`,
    },
    {
      id: 'engelsk-vg1-9-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on the US Constitution:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-3-n-quiz1-q0',
            task: 'Why did the Founders create three separate branches of government?',
            options: [
          { id: 'a', text: 'To make government more efficient', isCorrect: false },
          { id: 'b', text: 'To prevent any one branch from becoming too powerful (tyranny)', isCorrect: true },
          { id: 'c', text: 'To copy the British system exactly', isCorrect: false },
          { id: 'd', text: 'To give each state its own branch', isCorrect: false },
        ],
            solution: 'The separation of powers and checks and balances were designed to prevent tyranny. Each branch can limit the others: Congress can impeach the President, the President can veto laws, and the Supreme Court can strike down unconstitutional actions.',
          },
          {
            id: 'engelsk-vg1-9-3-n-quiz1-q1',
            task: 'How long do Supreme Court justices serve?',
            options: [
              { id: 'a', text: 'Four-year terms like the President', isCorrect: false },
              { id: 'b', text: 'Six-year terms like Senators', isCorrect: false },
              { id: 'c', text: 'For life, giving enormous power to whoever appoints them', isCorrect: true },
              { id: 'd', text: 'Ten-year terms with possible renewal', isCorrect: false },
            ],
            solution: 'Nine Supreme Court justices serve for life, giving enormous power to the presidents who appoint them. The Court\'s ability to strike down unconstitutional laws makes it hugely influential in American politics.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-3-n-section2',
      type: 'text',
      content: `## The Two-Party System

Unlike Norway's multi-party system with proportional representation, America has two dominant parties: Democrats and Republicans. Third parties exist but rarely win elections.

**Democrats** (symbol: donkey) are generally considered center-left. They typically support government programs for healthcare and education, environmental regulation, abortion rights, gun control, and immigration pathways. Their base includes urban voters, minorities, young people, and college graduates.

**Republicans** (symbol: elephant) are generally considered center-right. They typically support lower taxes, less regulation, gun rights, abortion restrictions, and stricter immigration. Their base includes rural voters, white evangelicals, and those without college degrees.

But these are generalizations. Both parties contain diverse viewpoints. Progressive Democrats like Bernie Sanders differ significantly from moderate Democrats like Joe Biden. Populist Republicans like Donald Trump differ from traditional conservatives like Mitt Romney.

Why only two parties? The winner-take-all electoral system rewards size. In Norwegian proportional representation, a party with 10% of votes gets about 10% of seats. In American districts, the party with the most votes wins everything; others get nothing. This pushes toward two large coalitions rather than many small parties.

The result is that Americans often vote against the party they dislike rather than for the party they love. Many feel neither party represents them well.`,
    },
    {
      id: 'engelsk-vg1-9-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on the two-party system:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-3-n-quiz2-q0',
            task: 'Why does America have only two major parties while Norway has many?',
            options: [
          { id: 'a', text: 'Americans are less politically interested', isCorrect: false },
          { id: 'b', text: 'The Constitution forbids other parties', isCorrect: false },
          { id: 'c', text: 'Winner-take-all elections reward large parties while proportional representation allows smaller ones', isCorrect: true },
          { id: 'd', text: 'Third parties are illegal in America', isCorrect: false },
        ],
            solution: 'In America\'s winner-take-all system, only the top vote-getter wins; others get nothing. This rewards large coalitions. Norway\'s proportional representation gives seats based on vote share, allowing smaller parties to win representation.',
          },
          {
            id: 'engelsk-vg1-9-3-n-quiz2-q1',
            task: 'What is a common result of America\'s two-party system?',
            options: [
              { id: 'a', text: 'All Americans feel well-represented', isCorrect: false },
              { id: 'b', text: 'People often vote against the party they dislike rather than for the party they love', isCorrect: true },
              { id: 'c', text: 'Third parties regularly win elections', isCorrect: false },
              { id: 'd', text: 'Both parties have identical platforms', isCorrect: false },
            ],
            solution: 'Because only two parties can realistically win, Americans often vote against the party they dislike rather than for one they love. Many feel neither party truly represents them.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-3-n-section3',
      type: 'text',
      content: `## The Electoral College and Elections

Americans do not directly elect their president. Instead, they vote for "electors" who then choose the president. This Electoral College system, created in 1787, was a compromise between those who wanted Congress to choose the president and those who wanted direct popular vote.

Each state gets electors equal to its congressional delegation (Senators + Representatives). California has 54; Wyoming has 3. Most states give all their electors to whoever wins the state's popular vote, even if they win by just one vote.

This system creates strange results. In 2000 and 2016, the winning president (Bush and Trump) lost the national popular vote but won the Electoral College. Campaigns focus on "swing states" that could go either way, ignoring reliably Democratic or Republican states. A voter in Ohio matters more than a voter in California.

Beyond the presidency, elections happen at federal, state, and local levels. Americans elect governors, state legislators, mayors, school boards, judges, sheriffs, and more. This means thousands of elections - and opportunities for both democratic participation and voter fatigue.

Voting itself has become controversial. Republican-controlled states have passed laws requiring ID, limiting early voting, and restricting mail-in ballots, citing fraud concerns. Democrats argue these laws suppress voting, particularly among minorities. The debate reveals fundamental disagreement about whether the problem is too much fraud or too little access.`,
    },
    {
      id: 'engelsk-vg1-9-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on American elections:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-3-n-quiz3-q0',
            task: 'What unusual result can the Electoral College produce?',
            options: [
          { id: 'a', text: 'A president who serves more than two terms', isCorrect: false },
          { id: 'b', text: 'A president who loses the popular vote but wins the election', isCorrect: true },
          { id: 'c', text: 'A president chosen by the Supreme Court', isCorrect: false },
          { id: 'd', text: 'No president at all', isCorrect: false },
        ],
            solution: 'The Electoral College can produce presidents who lose the popular vote but win the election by carrying key states. This happened in 2000 (Bush) and 2016 (Trump). It results from winner-take-all state rules and unequal representation.',
          },
          {
            id: 'engelsk-vg1-9-3-n-quiz3-q1',
            task: 'Why do presidential campaigns focus on "swing states"?',
            options: [
              { id: 'a', text: 'Swing states have the most people', isCorrect: false },
              { id: 'b', text: 'Swing states could go either way, making them decisive in the Electoral College', isCorrect: true },
              { id: 'c', text: 'Only swing states are allowed to vote', isCorrect: false },
              { id: 'd', text: 'Swing states have different voting rules', isCorrect: false },
            ],
            solution: 'Since most states reliably vote for one party, campaigns focus on "swing states" that could go either way. This means a voter in Ohio or Pennsylvania matters more than one in reliably Democratic California or Republican Texas.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-3-n-section4',
      type: 'text',
      content: `## Polarization: How Did It Get This Bad?

American political polarization has increased dramatically since the 1990s. Democrats and Republicans increasingly dislike and distrust each other. Compromise is seen as weakness. Each side views the other as not just wrong but dangerous.

Several factors drive this polarization:

**Media:** The end of the "Fairness Doctrine" in 1987 allowed openly partisan media. Cable news (Fox News, MSNBC) caters to partisan audiences. Social media algorithms promote engaging (often outrageous) content. Americans increasingly consume news that confirms their existing beliefs.

**Geographic Sorting:** Americans have increasingly moved to places where people share their political views. Cities are overwhelmingly Democratic; rural areas overwhelmingly Republican. People encounter fewer neighbors with different views.

**Primary Elections:** Party nominees are chosen by primary voters, who tend to be more extreme than general election voters. This pushes candidates toward the edges.

**Identity Politics:** Politics has become tied to identity - who you are, not just what policies you prefer. Being Republican or Democrat increasingly predicts your views on everything from vaccines to Disney movies.

**Institutional Distrust:** Trust in government, media, and other institutions has declined. When people do not trust referees, they only trust their own team.

The result is a country where basic facts are disputed, where cooperation is punished by one's own side, and where political opponents are seen as enemies rather than fellow citizens who disagree.`,
    },
    {
      id: 'engelsk-vg1-9-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on political polarization:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-3-n-quiz4-q0',
            task: 'What contributes to American political polarization?',
            options: [
          { id: 'a', text: 'Americans all watching the same news sources', isCorrect: false },
          { id: 'b', text: 'Partisan media, geographic sorting, and politics becoming tied to identity', isCorrect: true },
          { id: 'c', text: 'Too many political parties competing', isCorrect: false },
          { id: 'd', text: 'Constitutional requirements for disagreement', isCorrect: false },
        ],
            solution: 'Multiple factors drive polarization: partisan media creating separate information worlds, geographic sorting so people rarely encounter different views, primary elections pushing candidates to extremes, and politics becoming tied to personal identity.',
          },
          {
            id: 'engelsk-vg1-9-3-n-quiz4-q1',
            task: 'What role does "geographic sorting" play in polarization?',
            options: [
              { id: 'a', text: 'Americans are moving to smaller states', isCorrect: false },
              { id: 'b', text: 'People increasingly live near others who share their political views', isCorrect: true },
              { id: 'c', text: 'Geography has no effect on politics', isCorrect: false },
              { id: 'd', text: 'Rural and urban areas have identical voting patterns', isCorrect: false },
            ],
            solution: 'Americans have increasingly moved to places where people share their political views. Cities are overwhelmingly Democratic; rural areas overwhelmingly Republican. People encounter fewer neighbors with different views, reinforcing their existing beliefs.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-3-n-section5',
      type: 'text',
      content: `## Current Issues and Debates

American politics today features several divisive debates:

**Abortion:** After the Supreme Court overturned Roe v. Wade in 2022, abortion law returned to states. Some have banned it almost entirely; others have protected it. The issue remains intensely divisive.

**Guns:** America has more guns than people and far more gun deaths than other developed countries. After mass shootings, debates recur about background checks, assault weapon bans, and the Second Amendment's meaning. Change has been limited.

**Immigration:** Millions of undocumented immigrants live in America. Debates rage about border security, paths to citizenship, and treatment of asylum seekers. Neither party has achieved comprehensive reform.

**Race:** Black Lives Matter protests in 2020 sparked debates about policing, systemic racism, and how history is taught. "Critical Race Theory" became a flashpoint, though often misrepresented.

**Climate:** Democrats largely accept climate science and support action; many Republicans express skepticism. America has alternated between international climate agreements and withdrawal.

**Democracy Itself:** After January 6, 2021, when Trump supporters attacked the Capitol to overturn the election, debates about democracy have intensified. Election denial, voting restrictions, and threats to election workers raise questions about whether American democracy can endure.

These divisions reflect deeper disagreements about what America is and should be. They will likely define American politics for years to come.`,
    },
    {
      id: 'engelsk-vg1-9-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on current American issues:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-3-n-quiz5-q0',
            task: 'What happened on January 6, 2021?',
            options: [
          { id: 'a', text: 'A peaceful transfer of power after the election', isCorrect: false },
          { id: 'b', text: 'Trump supporters attacked the Capitol to try to overturn the election', isCorrect: true },
          { id: 'c', text: 'Congress passed major healthcare reform', isCorrect: false },
          { id: 'd', text: 'The Supreme Court made a major ruling', isCorrect: false },
        ],
            solution: 'On January 6, 2021, supporters of President Trump attacked the US Capitol while Congress was certifying Joe Biden\'s election victory. The event raised serious concerns about American democracy and remains deeply divisive.',
          },
          {
            id: 'engelsk-vg1-9-3-n-quiz5-q1',
            task: 'What happened to abortion law in America after 2022?',
            options: [
              { id: 'a', text: 'Abortion was banned nationwide', isCorrect: false },
              { id: 'b', text: 'The Supreme Court overturned Roe v. Wade, returning abortion law to individual states', isCorrect: true },
              { id: 'c', text: 'Abortion was made legal in all states', isCorrect: false },
              { id: 'd', text: 'Congress passed a national abortion law', isCorrect: false },
            ],
            solution: 'After the Supreme Court overturned Roe v. Wade in 2022, abortion law returned to individual states. Some have banned it almost entirely while others have protected it, creating a patchwork of laws across the country.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-3-n-summary',
      type: 'text',
      content: `## Summary: American Politics and Society

You have navigated the complexities of American politics. Here are the key points:

**Constitutional Framework:**
Three branches (legislative, executive, judicial) check each other's power. The system prevents tyranny but can cause gridlock.

**Two-Party System:**
Democrats (center-left) and Republicans (center-right) dominate due to winner-take-all elections. Many voters feel unrepresented.

**Elections:**
The Electoral College can produce presidents who lose the popular vote. Voting access itself has become politically contested.

**Polarization:**
Partisan media, geographic sorting, and identity-based politics have increased division. Basic facts are disputed between sides.

**Current Issues:**
Abortion, guns, immigration, race, climate, and democracy itself divide Americans deeply. These reflect fundamental disagreements about America's identity.

Understanding American politics helps you understand both America and the challenges democracies face in an era of polarization and distrust.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 9.4 NARRATIVE: American Culture and Diversity
// ============================================================================

export const CHAPTER_ENGELSK_VG1_9_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-9-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '9.4',
  title: 'American Culture and Diversity',
  subtitle: 'Narrative Version',
  description: 'Discover America\'s cultural mosaic - the diversity that defines and divides the nation.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden',
  ],
  linkedChapterId: 'engelsk-vg1-9-4',
  content: [
    {
      id: 'engelsk-vg1-9-4-n-intro',
      type: 'text',
      content: `## E Pluribus Unum - From Many, One

America's national motto captures both an aspiration and a tension. From many peoples, can one nation be made? And what does that nation look like?

Walk down a street in New York, Los Angeles, or Houston and you will hear Spanish, Chinese, Korean, Tagalog, Arabic, and dozens of other languages. You will see mosques next to churches next to temples. You will eat Korean tacos, Vietnamese banh mi, and Ethiopian injera alongside hamburgers and pizza.

This diversity is America's greatest strength and its greatest challenge. No other country has attempted to forge a national identity from so many different peoples. The experiment is ongoing, and the results are uncertain.

In 2021, for the first time, the US Census showed that the white population had declined in absolute numbers. America is becoming a "majority-minority" nation - one where no single racial group forms a majority. This demographic transformation shapes politics, culture, and debates about what it means to be American.

Let us explore American diversity - its history, its cultural expressions, and its ongoing tensions.`,
    },
    {
      id: 'engelsk-vg1-9-4-n-section1',
      type: 'text',
      content: `## A Nation of Immigrants - and Excluders

America's diversity comes from immigration. But American immigration history is marked by both welcome and exclusion.

The first great wave (1820-1880) brought Northern Europeans - Irish fleeing famine, Germans seeking opportunity. They faced discrimination (Irish Catholics were especially despised) but eventually assimilated and became "white."

The second wave (1880-1920) brought Southern and Eastern Europeans - Italians, Poles, Jews fleeing pogroms. Again, they faced prejudice. Signs reading "No Italians" were common. But they too eventually assimilated.

Asian immigrants faced worse treatment. The Chinese Exclusion Act (1882) banned Chinese immigration entirely - the first law to exclude a nationality. Japanese Americans were imprisoned in camps during World War II despite being citizens.

The 1924 Immigration Act established quotas favoring Northern Europeans and essentially banning Asian and African immigration. These restrictions lasted until 1965, when a new law opened immigration to all countries equally.

Since 1965, immigration has transformed America. Latinos (from Mexico, Central America, Caribbean) are now the largest minority group. Asian immigration has increased dramatically. African and Middle Eastern immigration has grown. Today's America looks very different from the Anglo-Protestant nation of the founding.

But nativist reactions recur. Fear of immigrants - as economic competitors, cultural threats, or security risks - has driven politics from the Know-Nothings of the 1850s to Trump's border wall.`,
    },
    {
      id: 'engelsk-vg1-9-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on American immigration history:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-4-n-quiz1-q0',
            task: 'What was the Chinese Exclusion Act?',
            options: [
          { id: 'a', text: 'A law welcoming Chinese immigrants', isCorrect: false },
          { id: 'b', text: 'The first US law to ban immigration based on nationality', isCorrect: true },
          { id: 'c', text: 'A trade agreement with China', isCorrect: false },
          { id: 'd', text: 'A law giving Chinese Americans voting rights', isCorrect: false },
        ],
            solution: 'The Chinese Exclusion Act (1882) was the first US law to ban immigration based on nationality. It prohibited Chinese laborers from entering America and prevented Chinese residents from becoming citizens. It lasted until 1943.',
          },
          {
            id: 'engelsk-vg1-9-4-n-quiz1-q1',
            task: 'What happened to Japanese Americans during World War II?',
            options: [
              { id: 'a', text: 'They were honored for their military service', isCorrect: false },
              { id: 'b', text: 'They were imprisoned in internment camps despite being citizens', isCorrect: true },
              { id: 'c', text: 'They were deported to Japan', isCorrect: false },
              { id: 'd', text: 'They faced no discrimination during the war', isCorrect: false },
            ],
            solution: 'Japanese Americans were imprisoned in internment camps during WWII despite being American citizens. This was one of the worst violations of civil liberties in American history, driven by racial prejudice and wartime hysteria.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-4-n-section2',
      type: 'text',
      content: `## Race in America

Race is America's deepest fault line. Understanding American diversity requires understanding how race has shaped the nation.

The concept of "white" itself was constructed. Irish, Italians, and Jews were not always considered white. They became white over time as new groups arrived and the boundaries shifted. Being white meant access to housing, education, and jobs that others were denied.

Black Americans' experience is unique. Brought forcibly through slavery, denied citizenship, then subjected to a century of legal segregation, Black Americans have fought for inclusion while simultaneously building distinctive cultural traditions.

Latino identity cuts across race - there are white Latinos, Black Latinos, and indigenous Latinos. The category itself is a US invention; in Latin America, people identify by nationality or class rather than a pan-ethnic "Latino" identity.

Asian Americans include hugely diverse groups - Chinese, Indian, Filipino, Vietnamese, Korean, Japanese - with different histories, languages, and experiences. The "model minority" stereotype (hardworking, successful, quiet) obscures this diversity and creates its own problems.

Indigenous peoples - Native Americans, Alaska Natives, Native Hawaiians - number about 6 million today. Their relationship to America is unique: they are both American citizens and members of sovereign nations with government-to-government relationships with the US.

These categories are social constructions, but they have real consequences. Race predicts wealth, health, education, and encounters with police. America remains deeply segregated in housing and schools. The legacies of slavery and exclusion persist.`,
    },
    {
      id: 'engelsk-vg1-9-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on race in America:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-4-n-quiz2-q0',
            task: 'Why were Irish and Italian immigrants not always considered "white"?',
            options: [
          { id: 'a', text: 'They had different skin colors than other Europeans', isCorrect: false },
          { id: 'b', text: 'Whiteness is a social construction whose boundaries have shifted over time', isCorrect: true },
          { id: 'c', text: 'They refused to identify as white', isCorrect: false },
          { id: 'd', text: 'The US government classified them differently', isCorrect: false },
        ],
            solution: 'Race is socially constructed, not biologically fixed. Irish, Italians, and Jews were initially seen as racially different from Anglo-Protestants. They "became white" as boundaries shifted and new groups (like later immigrants) were excluded instead.',
          },
          {
            id: 'engelsk-vg1-9-4-n-quiz2-q1',
            task: 'What is the "model minority" stereotype applied to Asian Americans?',
            options: [
              { id: 'a', text: 'That they are the smallest minority group', isCorrect: false },
              { id: 'b', text: 'That they are hardworking, successful, and quiet - obscuring actual diversity', isCorrect: true },
              { id: 'c', text: 'That they prefer to live separately from other groups', isCorrect: false },
              { id: 'd', text: 'That they all speak the same language', isCorrect: false },
            ],
            solution: 'The "model minority" stereotype portrays Asian Americans as uniformly hardworking and successful. This obscures the huge diversity within the group and creates its own problems, including pressure to conform and denial of struggles.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-4-n-section3',
      type: 'text',
      content: `## Melting Pot or Salad Bowl?

Two metaphors compete to describe American diversity.

The "melting pot" suggests immigrants should assimilate into a unified American culture. Give up your old language, customs, and identity; adopt American ways; become American. This was the dominant expectation for much of American history. Public schools deliberately taught "Americanization." Immigrants often anglicized their names.

The "salad bowl" (or "cultural mosaic") suggests groups can maintain distinct identities while contributing to a diverse whole. Celebrate your heritage. Maintain your language. Be Italian-American or Mexican-American, not just American. This vision became more influential from the 1960s onward.

In practice, both happen. First-generation immigrants often maintain strong ethnic identities and languages. By the third generation, most have assimilated significantly - English is dominant, cultural ties have loosened - but ethnicity may still matter for food, holidays, and identity.

Today's debates about diversity often reflect tension between these visions. Should schools teach in Spanish? Should businesses have to accommodate languages other than English? Is diversity a strength to celebrate or a problem to manage?

Americans are divided. Surveys show that while most value diversity in principle, they disagree on its implications. For some, a changing America represents exciting possibility. For others, it represents loss of a familiar country.`,
    },
    {
      id: 'engelsk-vg1-9-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on diversity models:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-4-n-quiz3-q0',
            task: 'What is the difference between "melting pot" and "salad bowl" models?',
            options: [
          { id: 'a', text: 'They refer to different cooking traditions', isCorrect: false },
          { id: 'b', text: 'Melting pot expects assimilation into one culture; salad bowl allows maintaining distinct identities', isCorrect: true },
          { id: 'c', text: 'Salad bowl is the older model; melting pot is newer', isCorrect: false },
          { id: 'd', text: 'There is no real difference between them', isCorrect: false },
        ],
            solution: 'The "melting pot" expects immigrants to assimilate into a unified American culture, giving up old identities. The "salad bowl" allows groups to maintain distinct cultures while contributing to diversity. Both models shape debates about immigration and identity.',
          },
          {
            id: 'engelsk-vg1-9-4-n-quiz3-q1',
            task: 'What was "Americanization" in early 20th-century schools?',
            options: [
              { id: 'a', text: 'Teaching American history to all students', isCorrect: false },
              { id: 'b', text: 'Deliberately teaching immigrants to abandon their old cultures and adopt American ways', isCorrect: true },
              { id: 'c', text: 'Celebrating diverse cultures in the classroom', isCorrect: false },
              { id: 'd', text: 'Teaching English as a second language', isCorrect: false },
            ],
            solution: 'Public schools deliberately taught "Americanization," expecting immigrants to give up their old languages, customs, and identities. Immigrants often anglicized their names. This "melting pot" approach was dominant for much of American history.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-4-n-section4',
      type: 'text',
      content: `## American Culture Goes Global

Despite - or because of - its diversity, American culture dominates globally. This "soft power" spreads American values, language, and commercial products worldwide.

**Entertainment:** Hollywood produces most globally distributed films. American TV series stream worldwide. You probably know more American celebrities than celebrities from any other country.

**Music:** From jazz to hip-hop, American music has shaped global popular music. Rock and roll emerged from the collision of African-American and white traditions. Today's pop music worldwide sounds American.

**Technology:** American tech giants - Google, Apple, Facebook/Meta, Amazon, Microsoft - dominate the digital world. Their platforms shape how you communicate, learn, and consume.

**Fashion and Food:** Jeans, sneakers, fast food, coffee culture - American casual style has spread globally. McDonald's operates in over 100 countries.

**Language:** American English is the global standard. You are likely learning American spelling and vocabulary.

This cultural dominance brings criticism. American culture can overwhelm local traditions. American values (individualism, consumerism) may clash with other cultures. The stories that dominate global media are disproportionately American and white.

But influence flows both ways. American culture itself absorbs global influences - Korean pop, Indian spices, Latin rhythms, anime. The diversity that defines America also shapes the culture it exports.`,
    },
    {
      id: 'engelsk-vg1-9-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on American cultural influence:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-4-n-quiz4-q0',
            task: 'What is "soft power"?',
            options: [
          { id: 'a', text: 'Military force used carefully', isCorrect: false },
          { id: 'b', text: 'Cultural and economic influence that shapes preferences without coercion', isCorrect: true },
          { id: 'c', text: 'A type of renewable energy', isCorrect: false },
          { id: 'd', text: 'Diplomatic negotiations', isCorrect: false },
        ],
            solution: 'Soft power refers to cultural, economic, and ideological influence that shapes other countries\' preferences without force. American soft power comes from entertainment, technology, language, and lifestyle that spread globally.',
          },
          {
            id: 'engelsk-vg1-9-4-n-quiz4-q1',
            task: 'Which American tech companies dominate the digital world?',
            options: [
              { id: 'a', text: 'Sony, Samsung, and Huawei', isCorrect: false },
              { id: 'b', text: 'Google, Apple, Meta, Amazon, and Microsoft', isCorrect: true },
              { id: 'c', text: 'Toyota, Volkswagen, and Shell', isCorrect: false },
              { id: 'd', text: 'BBC, Spotify, and Nokia', isCorrect: false },
            ],
            solution: 'American tech giants - Google, Apple, Facebook/Meta, Amazon, and Microsoft - dominate the digital world, shaping how people worldwide communicate, learn, and consume. Their platforms are a major source of American soft power.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-4-n-section5',
      type: 'text',
      content: `## Diversity Debates Today

Contemporary America debates diversity intensely.

**Education:** Should schools teach students about systemic racism and America's history of exclusion? Debates over "Critical Race Theory" (often misunderstood) reflect deeper disagreements about how to understand American history.

**Representation:** Should media, corporate boards, and institutions reflect America's diversity? Affirmative action in college admissions was restricted by the Supreme Court in 2023. Debates continue about how to address historical disadvantages.

**Language:** Should English be the official language? Should government services be provided in Spanish? About 20% of Americans speak a language other than English at home.

**Religion:** America is becoming less Christian and more religiously diverse. About 30% of adults now identify as religiously unaffiliated. This shift changes political alignments and cultural assumptions.

**LGBTQ+ Rights:** Gay marriage became legal nationwide in 2015. But debates continue about transgender rights, particularly regarding sports and youth healthcare.

These debates reflect a country in transition. The demographics are changing. The cultural assumptions are shifting. The question of what holds Americans together - what makes e pluribus unum possible - has no easy answer.

Some see diversity as America's greatest strength, the source of creativity and dynamism. Others see fragmentation, competing tribes with nothing in common. The reality probably includes both - and the balance will shape America's future.`,
    },
    {
      id: 'engelsk-vg1-9-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on America\'s demographic change:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-9-4-n-quiz5-q0',
            task: 'What demographic change is making America a "majority-minority" nation?',
            options: [
          { id: 'a', text: 'The population is getting younger', isCorrect: false },
          { id: 'b', text: 'More Americans are moving to cities', isCorrect: false },
          { id: 'c', text: 'No single racial group will form a majority as the white population declines relative to others', isCorrect: true },
          { id: 'd', text: 'Immigration has stopped entirely', isCorrect: false },
        ],
            solution: 'America is becoming "majority-minority" as the white population share declines (and in 2021, its absolute numbers). By around 2045, no single racial group is projected to be a majority. This demographic shift shapes politics and culture.',
          },
          {
            id: 'engelsk-vg1-9-4-n-quiz5-q1',
            task: 'By around what year is America projected to become "majority-minority"?',
            options: [
              { id: 'a', text: '2025', isCorrect: false },
              { id: 'b', text: '2045', isCorrect: true },
              { id: 'c', text: '2075', isCorrect: false },
              { id: 'd', text: '2100', isCorrect: false },
            ],
            solution: 'By around 2045, no single racial group is projected to be a majority in America. The 2021 Census already showed the white population declining in absolute numbers. This demographic shift is reshaping politics and culture.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-9-4-n-summary',
      type: 'text',
      content: `## Summary: American Culture and Diversity

You have explored America's remarkable diversity. Here are the key points:

**Immigration History:**
America is a nation of immigrants but also of exclusion. Different groups faced varying degrees of welcome and discrimination. Immigration continues to transform American demographics.

**Race:**
Race is socially constructed but has real consequences. Black, Latino, Asian, and Indigenous Americans have distinct histories and experiences. Racial inequality persists.

**Models of Diversity:**
The "melting pot" expects assimilation; the "salad bowl" celebrates maintained differences. In practice, both processes occur, creating tension about what American identity means.

**Cultural Influence:**
American entertainment, technology, language, and lifestyle spread globally (soft power). This influence is both celebrated and criticized.

**Current Debates:**
Education, representation, language, religion, and LGBTQ+ rights divide Americans. Demographic change is making America "majority-minority," intensifying debates about national identity.

Understanding American diversity helps you understand both America's creativity and its conflicts, its global influence and its internal struggles.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 10.1 NARRATIVE: Australia and New Zealand
// ============================================================================

export const CHAPTER_ENGELSK_VG1_10_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-10-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '10.1',
  title: 'Australia and New Zealand',
  subtitle: 'Narrative Version',
  description: 'Explore the lands down under - ancient cultures, colonial histories, and modern societies.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden',
  ],
  linkedChapterId: 'engelsk-vg1-10-1',
  content: [
    {
      id: 'engelsk-vg1-10-1-n-intro',
      type: 'text',
      content: `## The Antipodes: Worlds Apart

Imagine standing at Uluru (Ayers Rock) in central Australia as the sun sets, turning the massive red rock through shades of orange and purple. This rock has been sacred to the Anangu people for at least 30,000 years - longer than any European civilization has existed. Now imagine standing in Milford Sound, New Zealand, surrounded by steep cliffs and waterfalls, where Maori navigators arrived in canoes about 700 years ago.

Australia and New Zealand are often mentioned together - they are both former British colonies in the Pacific, both majority English-speaking, both democracies with similar accents (though do not tell them that). But they are also very different in geography, indigenous histories, and national identities.

These countries matter to you because they represent alternative models of English-speaking society - different from both Britain and America. They are also key players in the Pacific region, major exporters to the world, and popular destinations for Norwegian travelers and students.

Let us explore these fascinating lands at the bottom of the world.`,
    },
    {
      id: 'engelsk-vg1-10-1-n-section1',
      type: 'text',
      content: `## Australia: The Oldest Continent

Australia is a land of extremes. It is the world's sixth-largest country but has only 26 million people - mostly clustered on the coasts, because the interior is desert. It has unique wildlife - kangaroos, koalas, platypuses - that evolved in isolation for millions of years.

But the most remarkable thing about Australia is its human history. Aboriginal Australians arrived at least 65,000 years ago, making theirs the oldest continuous culture on Earth. When Europeans "discovered" Australia in the 1770s, they found a continent with hundreds of distinct language groups, complex spiritual traditions, and sophisticated land management practices.

The British declared Australia "terra nullius" - empty land belonging to no one. This legal fiction allowed them to claim the entire continent without treaties or compensation. In 1788, the First Fleet arrived at Sydney Cove with convicts, soldiers, and settlers. Australia began as a prison colony.

What followed was catastrophic for Aboriginal peoples. Disease killed perhaps 90% of the population. The survivors faced violence, dispossession, and forced assimilation. The "Stolen Generations" policy (roughly 1910-1970) removed Aboriginal children from their families to be raised in white institutions or families, erasing cultural connections.

Today, Aboriginal Australians are about 3% of the population. They have the worst health outcomes, highest incarceration rates, and lowest life expectancy of any Australian group. Recognition and reconciliation remain works in progress.`,
    },
    {
      id: 'engelsk-vg1-10-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on Australian history:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-1-n-quiz1-q0',
            task: 'What does "terra nullius" mean and why does it matter?',
            options: [
          { id: 'a', text: 'It means "beautiful land" and was a compliment to Australia', isCorrect: false },
          { id: 'b', text: 'It means "empty land" and was used to justify taking Aboriginal land without treaties', isCorrect: true },
          { id: 'c', text: 'It means "prison colony" and refers to Australia\'s convict history', isCorrect: false },
          { id: 'd', text: 'It means "isolated continent" and describes Australia\'s geography', isCorrect: false },
        ],
            solution: 'Terra nullius (Latin for "land belonging to no one") was the legal fiction Britain used to claim Australia. By declaring the land empty despite 65,000 years of Aboriginal habitation, they avoided treaties and any recognition of Aboriginal ownership.',
          },
          {
            id: 'engelsk-vg1-10-1-n-quiz1-q1',
            task: 'How long have Aboriginal Australians lived on the continent?',
            options: [
              { id: 'a', text: 'About 5,000 years', isCorrect: false },
              { id: 'b', text: 'At least 65,000 years', isCorrect: true },
              { id: 'c', text: 'About 1,000 years', isCorrect: false },
              { id: 'd', text: 'About 20,000 years', isCorrect: false },
            ],
            solution: 'Aboriginal Australians arrived at least 65,000 years ago, making theirs the oldest continuous culture on Earth. When Europeans arrived in the 1770s, they found hundreds of distinct language groups and complex spiritual traditions.',
          },
          {
            id: 'engelsk-vg1-10-1-n-quiz1-q2',
            task: 'What were the "Stolen Generations"?',
            options: [
              { id: 'a', text: 'Convicts transported from Britain to Australia', isCorrect: false },
              { id: 'b', text: 'Aboriginal children forcibly removed from their families to be raised in white institutions', isCorrect: true },
              { id: 'c', text: 'Australian soldiers lost in World War I', isCorrect: false },
              { id: 'd', text: 'Immigrants who returned to their home countries', isCorrect: false },
            ],
            solution: 'The "Stolen Generations" policy (roughly 1910-1970) forcibly removed Aboriginal children from their families to be raised in white institutions or families, erasing cultural connections. This constituted cultural genocide.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-1-n-section2',
      type: 'text',
      content: `## Modern Australia

Today's Australia is a prosperous, multicultural country. British ancestry remains common, but post-WWII immigration transformed the population. Italians, Greeks, Vietnamese, Chinese, Indians, and others have made Australia one of the world's most multicultural societies. About 30% of Australians were born overseas.

Australian identity is often associated with laid-back outdoor culture - beaches, barbecues, and sport. Australians value "mateship" (friendship and loyalty), irreverence toward authority, and a "fair go" for everyone. They call everyone "mate" and use slang that can baffle outsiders.

But Australia also struggles with its colonial past and present. Aboriginal recognition remains contested. A 2023 referendum to create an Aboriginal "Voice to Parliament" - an advisory body to give Aboriginal peoples input on policies affecting them - was rejected by voters. The debate revealed deep divisions about how to address historical wrongs.

Australia faces other challenges. Climate change threatens its unique ecosystems and causes devastating bushfires. Immigration policy is controversial - Australia has maintained strict controls and offshore processing that human rights groups criticize. The country's relationship with rising China creates economic opportunity and security anxiety.

Yet Australia remains remarkably successful by most measures - prosperous, democratic, livable. The question is whether that success can be shared more equitably with those who have lived there longest.`,
    },
    {
      id: 'engelsk-vg1-10-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on modern Australia:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-1-n-quiz2-q0',
            task: 'What happened to the 2023 Aboriginal "Voice to Parliament" referendum?',
            options: [
          { id: 'a', text: 'It passed with overwhelming support', isCorrect: false },
          { id: 'b', text: 'It was rejected by voters, revealing divisions over addressing colonial history', isCorrect: true },
          { id: 'c', text: 'It was cancelled before voting could occur', isCorrect: false },
          { id: 'd', text: 'Only Aboriginal people were allowed to vote on it', isCorrect: false },
        ],
            solution: 'The 2023 referendum to create an Aboriginal advisory body ("Voice to Parliament") was rejected by Australian voters. The defeat revealed deep divisions about how - or whether - to give Aboriginal peoples a formal role in policies affecting them.',
          },
          {
            id: 'engelsk-vg1-10-1-n-quiz2-q1',
            task: 'What percentage of Australians were born overseas?',
            options: [
              { id: 'a', text: 'About 5%', isCorrect: false },
              { id: 'b', text: 'About 30%', isCorrect: true },
              { id: 'c', text: 'About 50%', isCorrect: false },
              { id: 'd', text: 'About 10%', isCorrect: false },
            ],
            solution: 'About 30% of Australians were born overseas, making it one of the world\'s most multicultural societies. Post-WWII immigration from Italy, Greece, Vietnam, China, India, and others transformed the population.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-1-n-section3',
      type: 'text',
      content: `## New Zealand: Aotearoa

New Zealand has a different history. Maori arrived from Polynesia around 1250-1300 AD - relatively recently compared to Aboriginal Australians. When British settlers arrived in the 1800s, Maori were still the majority population and had a warrior culture that resisted colonization effectively.

The Treaty of Waitangi (1840) was signed between the British Crown and Maori chiefs. Unlike Australia's terra nullius, New Zealand's founding document acknowledged Maori presence and (in theory) protected their rights. But the English and Maori versions differed significantly, and settlers often ignored treaty provisions. Wars, land confiscation, and disease reduced Maori to a marginalized minority.

The treaty's legacy is complex. For decades, it was largely ignored. But since the 1970s, a Maori cultural and political renaissance has reclaimed the treaty as a living document. The Waitangi Tribunal hears claims about historical breaches. Maori language (te reo) is official alongside English. Maori culture is central to New Zealand's national identity.

Today, Maori are about 17% of New Zealand's population - a much larger proportion than Aboriginal Australians. While inequalities persist, Maori are more integrated into national life. New Zealand's approach to indigenous relations, while imperfect, is often seen as more successful than Australia's.`,
    },
    {
      id: 'engelsk-vg1-10-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on New Zealand:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-1-n-quiz3-q0',
            task: 'Why was the Treaty of Waitangi significant?',
            options: [
          { id: 'a', text: 'It ended all conflict between Maori and British', isCorrect: false },
          { id: 'b', text: 'It acknowledged Maori presence and (in theory) protected their rights, forming New Zealand\'s founding document', isCorrect: true },
          { id: 'c', text: 'It was signed between New Zealand and Australia', isCorrect: false },
          { id: 'd', text: 'It established New Zealand as a republic', isCorrect: false },
        ],
            solution: 'The Treaty of Waitangi (1840) was New Zealand\'s founding document, signed between the British Crown and Maori chiefs. Unlike Australia\'s terra nullius, it acknowledged Maori existence and rights. Though often violated, it remains a basis for Maori claims today.',
          },
          {
            id: 'engelsk-vg1-10-1-n-quiz3-q1',
            task: 'What problem arose from the Treaty of Waitangi?',
            options: [
              { id: 'a', text: 'Maori refused to sign it', isCorrect: false },
              { id: 'b', text: 'The English and Maori versions differed significantly', isCorrect: true },
              { id: 'c', text: 'It was destroyed in a fire', isCorrect: false },
              { id: 'd', text: 'Britain never signed its version', isCorrect: false },
            ],
            solution: 'The English and Maori versions of the Treaty differed significantly in key areas like sovereignty and land rights. These differences, combined with settlers ignoring treaty provisions, led to wars and land confiscation.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-1-n-section4',
      type: 'text',
      content: `## Modern New Zealand

New Zealand is a small country (5 million people) with an outsized international reputation. It is known for progressive politics, spectacular scenery (the Lord of the Rings films showcased this), and punching above its weight in global affairs.

New Zealand has been a leader on social issues. It was the first country to give women the vote (1893). It legalized same-sex marriage in 2013. Prime Minister Jacinda Ardern (2017-2023) became a global icon for her response to the Christchurch mosque shootings and COVID-19, though her popularity eventually faded domestically.

The country has pioneered environmental and anti-nuclear policies. New Zealand has no nuclear power and banned nuclear-armed ships from its waters in 1984, causing a rift with the United States. It has committed to ambitious climate targets and marketed itself as "100% Pure" - though critics note the gap between image and reality.

Economically, New Zealand depends heavily on agriculture (dairy, meat, wine) and tourism. It has a strong relationship with Australia but also increasing ties with Asia, especially China.

New Zealand faces challenges: housing affordability, inequality, and the ongoing work of addressing Maori grievances. But its combination of progressive values, natural beauty, and relative stability makes it consistently rank among the world's most livable countries.`,
    },
    {
      id: 'engelsk-vg1-10-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on modern New Zealand:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-1-n-quiz4-q0',
            task: 'What social achievement makes New Zealand historically significant?',
            options: [
          { id: 'a', text: 'It was the first country to achieve full literacy', isCorrect: false },
          { id: 'b', text: 'It was the first country to give women the right to vote (1893)', isCorrect: true },
          { id: 'c', text: 'It was the first country to abolish all taxes', isCorrect: false },
          { id: 'd', text: 'It was the first country to leave the British Empire', isCorrect: false },
        ],
            solution: 'New Zealand was the first self-governing country to grant women the right to vote, in 1893. This pioneering achievement reflects New Zealand\'s reputation for progressive social policies.',
          },
          {
            id: 'engelsk-vg1-10-1-n-quiz4-q1',
            task: 'What environmental policy set New Zealand apart from the United States?',
            options: [
              { id: 'a', text: 'New Zealand built the most nuclear power plants per capita', isCorrect: false },
              { id: 'b', text: 'New Zealand banned nuclear-armed ships from its waters in 1984', isCorrect: true },
              { id: 'c', text: 'New Zealand eliminated all carbon emissions', isCorrect: false },
              { id: 'd', text: 'New Zealand banned all imports from the US', isCorrect: false },
            ],
            solution: 'New Zealand banned nuclear-armed ships from its waters in 1984, causing a rift with the United States. The country has no nuclear power and has committed to ambitious climate targets.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-1-n-section5',
      type: 'text',
      content: `## Comparing Two Approaches

Australia and New Zealand offer a natural comparison in how settler societies deal with indigenous peoples.

**Legal Foundation:**
Australia declared terra nullius, denying Aboriginal presence. New Zealand signed the Treaty of Waitangi, acknowledging Maori. This difference shapes everything that followed.

**Demographics:**
Maori are 17% of New Zealand's population and growing; Aboriginal Australians are 3%. This makes Maori a more significant political force.

**Cultural Integration:**
Maori language and culture are central to New Zealand's national identity - the All Blacks rugby team performs the haka before matches. Australian identity has been slower to incorporate Aboriginal culture, though this is changing.

**Reconciliation:**
New Zealand has a treaty-based process for addressing historical grievances. Australia has apologized (Kevin Rudd's 2008 "Sorry" speech) but has no treaty and rejected the Voice referendum.

Neither country has fully resolved its colonial past. Both have significant indigenous-settler gaps in health, education, and wealth. But New Zealand's approach is generally seen as more successful - perhaps because a treaty, even a violated one, provides a foundation that terra nullius denied.

For other countries grappling with indigenous rights - including Norway with the Sami - these antipodean examples offer lessons about what works and what does not.`,
    },
    {
      id: 'engelsk-vg1-10-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on comparing Australia and New Zealand:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-1-n-quiz5-q0',
            task: 'Why is New Zealand\'s approach to indigenous rights often seen as more successful than Australia\'s?',
            options: [
          { id: 'a', text: 'New Zealand has fewer indigenous people to worry about', isCorrect: false },
          { id: 'b', text: 'The Treaty of Waitangi provides a legal foundation for addressing grievances that Australia lacks', isCorrect: true },
          { id: 'c', text: 'Australia tried harder but failed anyway', isCorrect: false },
          { id: 'd', text: 'Maori do not want recognition', isCorrect: false },
        ],
            solution: 'The Treaty of Waitangi, despite its problems, provides a legal basis for Maori claims that Australia\'s terra nullius doctrine denied Aboriginal peoples. This foundation, plus larger Maori demographic weight, has enabled greater recognition and reconciliation.',
          },
          {
            id: 'engelsk-vg1-10-1-n-quiz5-q1',
            task: 'What is the haka, and what does its use by the All Blacks rugby team demonstrate?',
            options: [
              { id: 'a', text: 'A British song adopted by New Zealand', isCorrect: false },
              { id: 'b', text: 'A Maori ceremonial war dance, showing Maori culture is central to national identity', isCorrect: true },
              { id: 'c', text: 'An Aboriginal Australian dance performed at cricket matches', isCorrect: false },
              { id: 'd', text: 'A modern dance created by the rugby team', isCorrect: false },
            ],
            solution: 'The haka is a traditional Maori war dance. The fact that New Zealand\'s national rugby team performs it before matches demonstrates how Maori culture has become central to New Zealand\'s national identity.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-1-n-summary',
      type: 'text',
      content: `## Summary: Australia and New Zealand

You have explored two fascinating Pacific nations. Here are the key points:

**Australia:**
Home to the world's oldest continuous culture (65,000+ years). Colonized without treaties under "terra nullius." Aboriginal peoples suffered disease, dispossession, and the Stolen Generations. Modern Australia is multicultural and prosperous but struggles with indigenous reconciliation - the 2023 Voice referendum was defeated.

**New Zealand:**
Maori arrived about 700 years ago. The Treaty of Waitangi (1840) acknowledged Maori rights, though it was often violated. Maori cultural renaissance since the 1970s has made Maori language and culture central to national identity. New Zealand is known for progressive policies, from women's suffrage to environmental leadership.

**Comparison:**
New Zealand's treaty-based approach has generally produced better outcomes than Australia's terra nullius. Both countries have gaps between indigenous and settler populations, but New Zealand has integrated Maori more successfully.

**Lessons:**
These countries offer models - positive and negative - for addressing colonial legacies, relevant to other nations including Norway.

Understanding Australia and New Zealand enriches your knowledge of the English-speaking world beyond Britain and America.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 10.2 NARRATIVE: Canada
// ============================================================================

export const CHAPTER_ENGELSK_VG1_10_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-10-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '10.2',
  title: 'Canada',
  subtitle: 'Narrative Version',
  description: 'Discover the world\'s second-largest country - two languages, many cultures, vast wilderness.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden',
  ],
  linkedChapterId: 'engelsk-vg1-10-2',
  content: [
    {
      id: 'engelsk-vg1-10-2-n-intro',
      type: 'text',
      content: `## The True North Strong and Free

Canada is a country of contradictions. It is the world's second-largest country by area, yet 90% of its 40 million people live within 160 kilometers of the US border. It has two official languages - English and French - reflecting a history of rivalry between two colonial powers. It celebrates multiculturalism while grappling with its treatment of indigenous peoples.

Canadians are often defined by what they are not: not American. They have universal healthcare where Americans do not. They say "sorry" more often. They play hockey instead of baseball. Their flag features a leaf, not stars and stripes. This contrast with their dominant southern neighbor shapes Canadian identity.

Canada matters to you because it offers another model of an English-speaking, multicultural democracy. Its bilingualism is unique. Its indigenous rights approach differs from both Australia and New Zealand. And its relationship with the United States - as neighbor, ally, and sometimes rival - shapes global politics.

Let us explore this vast northern nation.`,
    },
    {
      id: 'engelsk-vg1-10-2-n-section1',
      type: 'text',
      content: `## Two Founding Nations?

Canada's European history begins with rivalry between France and Britain. France established New France in the 1600s, centered on Quebec. Britain controlled territories to the south and east. In 1759, Britain won the Battle of the Plains of Abraham, taking Quebec and eventually all of French North America.

But the French population remained. Unlike the American colonies, which drove out or assimilated French speakers, Canada allowed French Canadians to keep their language, religion (Catholicism), and civil law. This created a country with two "founding nations" - though this narrative erases indigenous peoples who had been there for thousands of years.

The tension between English and French Canada has shaped the country ever since. Quebec has always been different - majority French-speaking, Catholic, with a distinct legal system based on French civil law rather than British common law.

In the 1960s, Quebec's "Quiet Revolution" transformed the province from a conservative, church-dominated society to a modern, secular one. It also sparked separatism. In 1980 and 1995, Quebec held referendums on independence. Both failed - the 1995 vote by just 1% - but the threat of Quebec separation remains part of Canadian politics.

Today, Canada is officially bilingual. Federal services are available in both languages. Politicians often speak both. But outside Quebec, French is declining, while within Quebec, protection of French dominates politics.`,
    },
    {
      id: 'engelsk-vg1-10-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on Canada\'s two founding nations:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-2-n-quiz1-q0',
            task: 'What happened in the 1995 Quebec referendum?',
            options: [
          { id: 'a', text: 'Quebec voted overwhelmingly to remain in Canada', isCorrect: false },
          { id: 'b', text: 'Quebec voted narrowly to become independent', isCorrect: false },
          { id: 'c', text: 'Quebec narrowly voted to remain in Canada, by about 1%', isCorrect: true },
          { id: 'd', text: 'The referendum was cancelled before voting', isCorrect: false },
        ],
            solution: 'The 1995 referendum on Quebec independence was defeated by just 50.6% to 49.4% - roughly 1%. This extremely close result showed how divided Quebec was and kept the separation question alive in Canadian politics.',
          },
          {
            id: 'engelsk-vg1-10-2-n-quiz1-q1',
            task: 'What was Quebec\'s "Quiet Revolution" in the 1960s?',
            options: [
              { id: 'a', text: 'A military uprising against the British', isCorrect: false },
              { id: 'b', text: 'A transformation from conservative, church-dominated society to modern, secular one', isCorrect: true },
              { id: 'c', text: 'A peaceful separation from Canada', isCorrect: false },
              { id: 'd', text: 'The adoption of English as Quebec\'s language', isCorrect: false },
            ],
            solution: 'The Quiet Revolution transformed Quebec from a conservative, church-dominated society to a modern, secular one. It also sparked separatism that led to independence referendums in 1980 and 1995.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-2-n-section2',
      type: 'text',
      content: `## Indigenous Peoples: First Nations, Inuit, and Metis

Canada recognizes three groups of indigenous peoples: First Nations (the largest and most diverse), Inuit (Arctic peoples), and Metis (people of mixed indigenous and European ancestry).

Before European contact, these peoples had sophisticated societies across the continent. The Haida of the Pacific coast built elaborate longhouses and totem poles. The Iroquois Confederacy influenced ideas about federalism. The Inuit adapted to survive in one of Earth's harshest environments.

Colonization brought disaster. Disease killed millions. Treaties were signed but often violated. From the 1880s to the 1990s, the Canadian government forcibly removed indigenous children from their families and sent them to residential schools, run mostly by churches, designed to "kill the Indian in the child." Children were forbidden to speak their languages or practice their cultures. Abuse was rampant. Thousands died.

The Truth and Reconciliation Commission (2008-2015) documented this history and issued 94 "Calls to Action" for healing. In 2021, unmarked graves were discovered at former residential school sites, sparking national mourning and a renewed reckoning.

Today, indigenous peoples are about 5% of Canada's population. They face ongoing challenges: missing and murdered indigenous women, inadequate housing and water on reserves, and lower life expectancy. But indigenous rights are advancing. Land claims are being settled. Indigenous languages are being revitalized. The relationship between Canada and its indigenous peoples is being renegotiated.`,
    },
    {
      id: 'engelsk-vg1-10-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on Canadian indigenous peoples:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-2-n-quiz2-q0',
            task: 'What were Canadian residential schools?',
            options: [
          { id: 'a', text: 'High-quality boarding schools for indigenous children', isCorrect: false },
          { id: 'b', text: 'Institutions designed to forcibly assimilate indigenous children by destroying their culture', isCorrect: true },
          { id: 'c', text: 'Schools where indigenous and non-indigenous children learned together', isCorrect: false },
          { id: 'd', text: 'Temporary housing during World War II', isCorrect: false },
        ],
            solution: 'Residential schools (1880s-1990s) forcibly removed indigenous children from families to destroy their cultural identity. Children were forbidden to speak their languages and faced widespread abuse. Thousands died. This constitutes a cultural genocide.',
          },
          {
            id: 'engelsk-vg1-10-2-n-quiz2-q1',
            task: 'What was discovered at former residential school sites in 2021?',
            options: [
              { id: 'a', text: 'Hidden treasures from the colonial era', isCorrect: false },
              { id: 'b', text: 'Unmarked graves of indigenous children', isCorrect: true },
              { id: 'c', text: 'Ancient indigenous artifacts', isCorrect: false },
              { id: 'd', text: 'Secret government documents', isCorrect: false },
            ],
            solution: 'In 2021, unmarked graves were discovered at former residential school sites, sparking national mourning and a renewed reckoning with Canada\'s treatment of indigenous children, thousands of whom died in these institutions.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-2-n-section3',
      type: 'text',
      content: `## Multiculturalism: A Canadian Invention?

In 1971, Canada became the first country to adopt multiculturalism as official policy. Rather than the American "melting pot," Canada embraced the "cultural mosaic" - the idea that different cultures can coexist while maintaining their distinctness.

This was not just idealism. It was practical politics. Canada needed to define itself as something other than British (anglophone) or French (Quebec). Multiculturalism offered a third option: Canada as a home for all cultures.

The policy has been remarkably successful in some ways. Canada accepts more immigrants per capita than almost any other country. Toronto and Vancouver are among the world's most diverse cities. Canadians generally express positive attitudes toward immigration and diversity.

Unlike many countries, Canada selects immigrants primarily on skills and education rather than family ties. Its points-based system has been copied worldwide. Canada also accepts significant numbers of refugees - it resettled more Syrian refugees than the United States despite having a tenth of the population.

But multiculturalism has critics. Some argue it ghettoizes communities rather than integrating them. Quebec has always been uncomfortable with multiculturalism, preferring "interculturalism" that emphasizes integration into French-speaking Quebec society. And the treatment of indigenous peoples sits uneasily alongside multiculturalism's celebration of diversity - were they just another culture to be celebrated, or peoples with unique rights based on prior occupation?`,
    },
    {
      id: 'engelsk-vg1-10-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on Canadian multiculturalism:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-2-n-quiz3-q0',
            task: 'What is Canada\'s "cultural mosaic" approach to diversity?',
            options: [
          { id: 'a', text: 'Requiring immigrants to abandon their original cultures', isCorrect: false },
          { id: 'b', text: 'Allowing different cultures to coexist while maintaining their distinctness', isCorrect: true },
          { id: 'c', text: 'Separating different ethnic groups into different provinces', isCorrect: false },
          { id: 'd', text: 'Teaching all children the same uniform culture', isCorrect: false },
        ],
            solution: 'The "cultural mosaic" (versus American "melting pot") describes Canada\'s approach where different cultures can coexist while maintaining their distinctness. Canada was the first country to adopt official multiculturalism policy (1971).',
          },
          {
            id: 'engelsk-vg1-10-2-n-quiz3-q1',
            task: 'How does Canada select immigrants differently from many other countries?',
            options: [
              { id: 'a', text: 'Canada accepts no immigrants at all', isCorrect: false },
              { id: 'b', text: 'Canada uses a points-based system prioritizing skills and education', isCorrect: true },
              { id: 'c', text: 'Canada only accepts immigrants from Commonwealth countries', isCorrect: false },
              { id: 'd', text: 'Canada selects immigrants by lottery', isCorrect: false },
            ],
            solution: 'Canada selects immigrants primarily on skills and education rather than family ties, using a points-based system that has been copied worldwide. Canada also accepts more immigrants per capita than almost any other country.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-2-n-section4',
      type: 'text',
      content: `## Canada-US Relations

Canada cannot be understood without understanding its relationship with the United States. The two countries share the world's longest undefended border (8,891 km), the largest bilateral trade relationship, and deep cultural ties.

Yet Canadians work hard to distinguish themselves from Americans. They point to universal healthcare, stricter gun laws, more generous immigration, and a less militaristic foreign policy. "We're not American" is almost a national motto.

This relationship is unequal. America's population is nine times larger. Its economy dominates. American media, technology, and culture flood across the border. Canadians know far more about America than Americans know about Canada.

Economically, the relationship is vital. The US is Canada's largest trading partner by far. The USMCA (formerly NAFTA) governs trade. Canadian oil, lumber, and auto parts flow south; American goods and culture flow north.

Politically, Canada balances alliance with independence. It fought alongside America in World War II, Korea, and Afghanistan, but stayed out of Vietnam and Iraq. It hosts NORAD (North American Aerospace Defense Command) but maintains independent foreign policy positions on issues from Cuba to climate.

The relationship has been tested by presidents from Nixon (who called Canada a "clenched fist") to Trump (who imposed tariffs and called Canada a "security threat"). Yet geography ensures the relationship endures - for better or worse, Canada and America are stuck with each other.`,
    },
    {
      id: 'engelsk-vg1-10-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on Canada-US relations:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-2-n-quiz4-q0',
            task: 'How do Canadians typically distinguish themselves from Americans?',
            options: [
          { id: 'a', text: 'By speaking a different language', isCorrect: false },
          { id: 'b', text: 'By having universal healthcare, stricter gun laws, and more immigration', isCorrect: true },
          { id: 'c', text: 'By having a completely separate culture with no American influence', isCorrect: false },
          { id: 'd', text: 'By refusing to trade with the United States', isCorrect: false },
        ],
            solution: 'Canadians often define themselves against Americans by pointing to policy differences: universal healthcare, stricter gun control, more welcoming immigration, and less militaristic foreign policy. "We\'re not American" is a key part of Canadian identity.',
          },
          {
            id: 'engelsk-vg1-10-2-n-quiz4-q1',
            task: 'What is notable about the Canada-US border?',
            options: [
              { id: 'a', text: 'It is the most heavily fortified border in the world', isCorrect: false },
              { id: 'b', text: 'It is the world\'s longest undefended border at 8,891 km', isCorrect: true },
              { id: 'c', text: 'There is no official border between the two countries', isCorrect: false },
              { id: 'd', text: 'It was established in 2020', isCorrect: false },
            ],
            solution: 'Canada and the US share the world\'s longest undefended border at 8,891 km. They also share the largest bilateral trade relationship and deep cultural ties, though Canadians work hard to distinguish themselves from Americans.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-2-n-section5',
      type: 'text',
      content: `## Canada Today

Modern Canada faces several challenges.

**Housing:** Major cities like Toronto and Vancouver have become unaffordable. Immigration adds pressure. Young Canadians struggle to buy homes their parents took for granted.

**Climate:** Canada is warming twice as fast as the global average. This threatens Arctic communities and ecosystems while also opening possibilities (Arctic shipping routes, agricultural expansion).

**National Unity:** Quebec separatism has faded but not disappeared. Western alienation (particularly in Alberta, with its oil industry) has grown. The country's regional divisions remain.

**Indigenous Reconciliation:** Implementing the Truth and Reconciliation Commission's calls to action remains incomplete. Clean water, housing, and missing/murdered indigenous women remain crises.

**Immigration Debate:** Even in multicultural Canada, debates about immigration levels, integration, and impacts on housing and services have intensified.

Yet Canada remains one of the world's most livable countries. It has a strong economy, functioning democracy, relatively low inequality (compared to America), and high quality of life. The "Canadian model" - bilingualism, multiculturalism, welfare state, peaceful coexistence with America - offers lessons for other countries.

Perhaps most importantly, Canada shows that a country can be modern, prosperous, and diverse while maintaining distinct values from its powerful neighbor. That achievement is no small thing.`,
    },
    {
      id: 'engelsk-vg1-10-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on modern Canada:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-2-n-quiz5-q0',
            task: 'Why is climate change particularly significant for Canada?',
            options: [
          { id: 'a', text: 'Canada produces no greenhouse gases', isCorrect: false },
          { id: 'b', text: 'Canada is warming twice as fast as the global average, threatening Arctic communities', isCorrect: true },
          { id: 'c', text: 'Climate change only affects southern Canada', isCorrect: false },
          { id: 'd', text: 'Canada has no ecosystems vulnerable to climate change', isCorrect: false },
        ],
            solution: 'Canada is warming at twice the global average rate. This particularly affects Arctic regions, threatening Inuit communities, wildlife, and ecosystems. It also creates opportunities like Arctic shipping routes but poses challenges for national planning.',
          },
          {
            id: 'engelsk-vg1-10-2-n-quiz5-q1',
            task: 'What housing challenge does Canada face?',
            options: [
              { id: 'a', text: 'There are too many houses available', isCorrect: false },
              { id: 'b', text: 'Major cities like Toronto and Vancouver have become unaffordable', isCorrect: true },
              { id: 'c', text: 'Most Canadians prefer to rent rather than own', isCorrect: false },
              { id: 'd', text: 'Housing is only a problem in rural areas', isCorrect: false },
            ],
            solution: 'Major cities like Toronto and Vancouver have become unaffordable, with immigration adding pressure on housing. Young Canadians struggle to buy homes their parents took for granted.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-2-n-summary',
      type: 'text',
      content: `## Summary: Canada

You have explored the world's second-largest country. Here are the key points:

**Two Languages:**
Canada's English-French bilingualism reflects British-French colonial rivalry. Quebec remains distinct and has twice voted on independence. Federal services are bilingual.

**Indigenous Peoples:**
First Nations, Inuit, and Metis peoples have distinct histories and rights. Residential schools caused cultural genocide. Truth and Reconciliation continues.

**Multiculturalism:**
Canada pioneered official multiculturalism (1971). It accepts more immigrants per capita than most countries. The "cultural mosaic" allows diverse cultures to coexist.

**Canada-US Relations:**
The world's longest undefended border. Deep economic ties but Canadian identity defined partly against America. Alliance with independence.

**Today's Challenges:**
Housing affordability, climate change (Canada warms twice as fast), regional tensions, and indigenous reconciliation.

Understanding Canada shows another model of English-speaking, multicultural democracy - distinct from both Britain and America, with lessons for managing diversity and indigenous relations.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 10.3 NARRATIVE: English in Africa and Asia
// ============================================================================

export const CHAPTER_ENGELSK_VG1_10_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-10-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '10.3',
  title: 'English in Africa and Asia',
  subtitle: 'Narrative Version',
  description: 'Explore how English became a world language - and what that means in post-colonial societies.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden ut fra historiske sammenhenger',
  ],
  linkedChapterId: 'engelsk-vg1-10-3',
  content: [
    {
      id: 'engelsk-vg1-10-3-n-intro',
      type: 'text',
      content: `## The Language That Conquered the World

You are learning English. So are about 1.5 billion other people worldwide. English is the language of international business, science, diplomacy, and the internet. But have you ever wondered why?

English is not inherently easier or more logical than other languages. It has irregular verbs, confusing spelling, and borrowed words from dozens of sources. What English has is history - specifically, the history of the British Empire followed by American global dominance.

In Africa and Asia, English often arrived with colonizers. It was the language of power, education, and opportunity. After independence, many countries kept English - sometimes as an official language, sometimes as a practical necessity. Today, more people speak English in India than in Britain.

This creates complex situations. English opens doors to global opportunities, but it also perpetuates inequalities within countries. Elites who speak English fluently have advantages over those who do not. The language of former colonizers becomes necessary for success.

Let us explore how English functions in Africa and Asia - its history, its role today, and the debates it generates.`,
    },
    {
      id: 'engelsk-vg1-10-3-n-section1',
      type: 'text',
      content: `## English in India: The Jewel's Legacy

India has more English speakers than any country except the United States - perhaps 125 million who speak it fluently, and hundreds of millions more with some ability. Yet English is the mother tongue of almost no one in India.

British rule (1858-1947) established English as the language of administration, law, and higher education. Thomas Macaulay's famous 1835 "Minute on Education" declared the goal of creating "a class of persons Indian in blood and colour, but English in tastes, in opinions, in morals and in intellect." English-medium schools produced this elite.

After independence, India could have replaced English with Hindi, the most widely spoken indigenous language. But southern states, which speak different languages (Tamil, Telugu, Kannada), resisted Hindi dominance. English became a compromise - a "neutral" language not associated with any Indian region.

Today, English is an "associate official language" alongside Hindi. It dominates higher education, courts, business, and technology. IITs (Indian Institutes of Technology) produce world-class engineers in English. Bangalore's tech industry runs on English.

But access is unequal. English-medium education is expensive. Rural Indians and those educated in regional languages face disadvantages. Speaking English signals class and education. "Hinglish" - a mix of Hindi and English - is common in urban areas, blurring boundaries.

Indian English has its own vocabulary ("prepone" for moving earlier, "do the needful"), grammar, and pronunciation. It is a legitimate variety of English, not broken or wrong - just different from British or American norms.`,
    },
    {
      id: 'engelsk-vg1-10-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on English in India:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-3-n-quiz1-q0',
            task: 'Why did India keep English after independence?',
            options: [
          { id: 'a', text: 'Indians preferred English to their own languages', isCorrect: false },
          { id: 'b', text: 'English was a neutral compromise since southern states resisted Hindi dominance', isCorrect: true },
          { id: 'c', text: 'Britain required India to keep English', isCorrect: false },
          { id: 'd', text: 'Hindi was not widely spoken enough', isCorrect: false },
        ],
            solution: 'When southern states (Tamil Nadu, etc.) resisted Hindi becoming the sole national language, English served as a "neutral" compromise. No Indian region claims English as its own, making it acceptable across the country\'s linguistic diversity.',
          },
          {
            id: 'engelsk-vg1-10-3-n-quiz1-q1',
            task: 'What is "Hinglish"?',
            options: [
              { id: 'a', text: 'A formal academic language used in Indian universities', isCorrect: false },
              { id: 'b', text: 'A mix of Hindi and English common in urban India', isCorrect: true },
              { id: 'c', text: 'The official language of India', isCorrect: false },
              { id: 'd', text: 'An ancient Indian language predating Hindi', isCorrect: false },
            ],
            solution: 'Hinglish is a mix of Hindi and English commonly used in urban India. It represents how Indian speakers have made English their own, blending it with local languages in everyday conversation.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-3-n-section2',
      type: 'text',
      content: `## English in Africa

English plays significant roles in many African countries - Nigeria, South Africa, Kenya, Ghana, and others - but always alongside African languages.

Nigeria, Africa's most populous country (over 200 million), has English as its only official language. This seems surprising in a country with over 500 indigenous languages, but it solves a problem: no single Nigerian language is spoken by a majority. English serves as a neutral link, though it also advantages educated elites.

Nigerian English (sometimes called "pidgin" in its colloquial form) has its own features. "How far?" means "how are you?" "Chop" means "eat." Nigerian writers like Chinua Achebe and Chimamanda Ngozi Adichie have produced world-renowned literature in English that incorporates African rhythms and perspectives.

South Africa has eleven official languages, including English and Afrikaans. English dominates business and higher education, though most South Africans' first language is Zulu, Xhosa, or another African language. Language debates intersect with race: Afrikaans was the language of apartheid; English was sometimes seen as more neutral but also colonial.

Kenya's situation is similar: English and Swahili are official, but English dominates formal education and business. Code-switching - moving between languages within a conversation - is common across Africa.

The challenge is balancing English's practical benefits (global communication, economic opportunity) against preserving African languages and ensuring those without English education are not permanently disadvantaged.`,
    },
    {
      id: 'engelsk-vg1-10-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on English in Africa:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-3-n-quiz2-q0',
            task: 'Why is English the only official language in Nigeria despite 500+ indigenous languages?',
            options: [
          { id: 'a', text: 'Nigerians do not want to use their own languages', isCorrect: false },
          { id: 'b', text: 'No single Nigerian language has a majority, so English serves as neutral link', isCorrect: true },
          { id: 'c', text: 'Britain still controls Nigerian language policy', isCorrect: false },
          { id: 'd', text: 'Nigerian languages have no written forms', isCorrect: false },
        ],
            solution: 'With over 500 languages and no single majority, Nigeria uses English as a "neutral" link language. Choosing any Nigerian language would advantage that ethnic group. English, while colonial, does not belong to any Nigerian group.',
          },
          {
            id: 'engelsk-vg1-10-3-n-quiz2-q1',
            task: 'Who are Chinua Achebe and Chimamanda Ngozi Adichie?',
            options: [
              { id: 'a', text: 'Nigerian political leaders', isCorrect: false },
              { id: 'b', text: 'World-renowned Nigerian writers who produced literature in English', isCorrect: true },
              { id: 'c', text: 'South African anti-apartheid activists', isCorrect: false },
              { id: 'd', text: 'Kenyan language teachers', isCorrect: false },
            ],
            solution: 'Chinua Achebe and Chimamanda Ngozi Adichie are world-renowned Nigerian writers who have produced critically acclaimed literature in English, incorporating African rhythms and perspectives.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-3-n-section3',
      type: 'text',
      content: `## English in Southeast Asia

English plays varying roles across Southeast Asia.

**Singapore** is perhaps the most successful example of English adoption. This city-state made English the main language of education and government after independence (1965). Today, English is the dominant language for most young Singaporeans, though Mandarin, Malay, and Tamil are also official. "Singlish" - a distinctive variety mixing English with Chinese and Malay - is the informal street language.

**The Philippines** uses English as an official language alongside Filipino. American colonialism (1898-1946) established English-medium education. Today, the Philippines exports English-speaking workers worldwide - nurses, teachers, call center workers. Filipino English is a distinct variety with its own features.

**Malaysia** has shifted policies over time. English-medium education dominated until the 1970s, when Malay became the primary medium. More recently, English has been reemphasized in science and technology education. Debates continue about the right balance.

**Other countries** - Thailand, Vietnam, Indonesia - are not former British or American colonies, so English is purely a foreign language rather than a colonial legacy. But English education is expanding as these countries integrate into the global economy.

Across the region, English ability correlates with economic opportunity. This creates pressure on families to invest in English education - and disadvantages those who cannot afford it.`,
    },
    {
      id: 'engelsk-vg1-10-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on English in Southeast Asia:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-3-n-quiz3-q0',
            task: 'What is "Singlish"?',
            options: [
          { id: 'a', text: 'The formal English taught in Singapore schools', isCorrect: false },
          { id: 'b', text: 'A distinctive variety of English mixing with Chinese and Malay, used informally', isCorrect: true },
          { id: 'c', text: 'The official language of Singapore', isCorrect: false },
          { id: 'd', text: 'A completely separate language unrelated to English', isCorrect: false },
        ],
            solution: 'Singlish is Singapore\'s informal variety of English that mixes English with Mandarin, Malay, and Tamil. It has distinctive grammar, vocabulary, and pronunciation. While not used in formal settings, it is a marker of Singaporean identity.',
          },
          {
            id: 'engelsk-vg1-10-3-n-quiz3-q1',
            task: 'Why does the Philippines export English-speaking workers worldwide?',
            options: [
              { id: 'a', text: 'The Philippines has too many workers', isCorrect: false },
              { id: 'b', text: 'American colonialism (1898-1946) established English-medium education', isCorrect: true },
              { id: 'c', text: 'The Philippines is a native English-speaking country', isCorrect: false },
              { id: 'd', text: 'Other countries require Filipino workers by law', isCorrect: false },
            ],
            solution: 'American colonialism (1898-1946) established English-medium education in the Philippines. Today, the Philippines exports English-speaking workers worldwide - nurses, teachers, and call center workers.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-3-n-section4',
      type: 'text',
      content: `## World Englishes: Varieties and Legitimacy

A crucial insight from linguists: there is no single "correct" English. British English, American English, Indian English, Nigerian English, Singaporean English - these are all legitimate varieties with their own rules and norms.

The model of "World Englishes" proposed by linguist Braj Kachru divides English use into three circles:

**Inner Circle:** Countries where English is the primary native language - UK, USA, Australia, etc. These traditionally set the "standards."

**Outer Circle:** Former colonies where English has official status and is widely used - India, Nigeria, Singapore, etc. These have developed their own varieties.

**Expanding Circle:** Countries where English is learned as a foreign language - China, Japan, Brazil, Norway. English is used for international communication but not within the country.

This model challenges the idea that British or American English is "correct" and others are deviations. Indian English is not broken British English - it is a variety that has developed its own rules over 200 years. The same is true for Nigerian, Singaporean, and other varieties.

This matters for you as a learner. You do not need to sound British or American. You need to communicate effectively. Your Norwegian-accented English is fine. What matters is clarity and appropriateness for your context.

However, power dynamics persist. Academic journals often require "standard" (British/American) English. Employers may discriminate based on accent. The "world Englishes" model describes reality but does not eliminate inequality.`,
    },
    {
      id: 'engelsk-vg1-10-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on World Englishes:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-3-n-quiz4-q0',
            task: 'According to the "World Englishes" model, is Indian English "broken" English?',
            options: [
          { id: 'a', text: 'Yes, it deviates from correct British English', isCorrect: false },
          { id: 'b', text: 'No, it is a legitimate variety with its own rules', isCorrect: true },
          { id: 'c', text: 'Only if spoken by uneducated people', isCorrect: false },
          { id: 'd', text: 'It depends on British approval', isCorrect: false },
        ],
            solution: 'The World Englishes model recognizes Indian English as a legitimate variety that developed its own rules over 200 years. It is not "broken" British English - it is a distinct variety with its own vocabulary, grammar, and pronunciation norms.',
          },
          {
            id: 'engelsk-vg1-10-3-n-quiz4-q1',
            task: 'What are the three circles in Kachru\'s World Englishes model?',
            options: [
              { id: 'a', text: 'Small, medium, and large English-speaking countries', isCorrect: false },
              { id: 'b', text: 'Inner Circle (native speakers), Outer Circle (former colonies), Expanding Circle (foreign language learners)', isCorrect: true },
              { id: 'c', text: 'British, American, and Australian English', isCorrect: false },
              { id: 'd', text: 'Formal, informal, and slang English', isCorrect: false },
            ],
            solution: 'Kachru\'s model divides English use into Inner Circle (native language countries like UK, USA), Outer Circle (former colonies like India, Nigeria), and Expanding Circle (foreign language countries like Norway, China).',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-3-n-section5',
      type: 'text',
      content: `## The English Debate: Liberation or Colonialism?

English in Africa and Asia generates intense debate.

**Arguments for English:**
- Opens doors to global opportunities (education, business, migration)
- Provides a neutral link language in multilingual countries
- Connects to international knowledge and networks
- Already established - changing would be costly and disruptive

**Arguments against English dominance:**
- Perpetuates colonial hierarchies
- Advantages elites at the expense of ordinary people
- Threatens indigenous languages (many are dying)
- Foreign language can never fully express indigenous cultures

Writers have grappled with this dilemma. Nigerian author Chinua Achebe chose to write in English, arguing he could shape the language to express African experience. Kenyan writer Ngugi wa Thiong'o abandoned English for Gikuyu, arguing that writing in colonial languages perpetuates "mental colonization."

There is no easy answer. English brings real benefits but also real costs. The question is not whether to use English but how - and how to ensure those without English access are not left behind.

For countries like Norway, this might seem distant. But consider: Norway increasingly uses English in business, academia, and culture. Many of the same debates - about Norwegian language vitality, about English as a neutral international medium, about who benefits from English dominance - apply here too.`,
    },
    {
      id: 'engelsk-vg1-10-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on the English debate:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-3-n-quiz5-q0',
            task: 'Why did Ngugi wa Thiong\'o stop writing in English?',
            options: [
          { id: 'a', text: 'He forgot how to write in English', isCorrect: false },
          { id: 'b', text: 'He believed writing in colonial languages perpetuates mental colonization', isCorrect: true },
          { id: 'c', text: 'English publishers refused to print his books', isCorrect: false },
          { id: 'd', text: 'Kenyan law required writing in Gikuyu', isCorrect: false },
        ],
            solution: 'Ngugi wa Thiong\'o argued that African writers using English perpetuate "mental colonization." By writing in Gikuyu (his mother tongue), he asserted African cultural independence. This contrasts with Chinua Achebe\'s choice to write in English.',
          },
          {
            id: 'engelsk-vg1-10-3-n-quiz5-q1',
            task: 'How did Chinua Achebe and Ngugi wa Thiong\'o differ in their approach to language?',
            options: [
              { id: 'a', text: 'Both wrote only in English', isCorrect: false },
              { id: 'b', text: 'Achebe chose to write in English to reach wider audiences; Ngugi abandoned English for Gikuyu to resist "mental colonization"', isCorrect: true },
              { id: 'c', text: 'Both wrote only in African languages', isCorrect: false },
              { id: 'd', text: 'Neither wrote in English', isCorrect: false },
            ],
            solution: 'Achebe chose to write in English, arguing he could shape the language to express African experience. Ngugi abandoned English for Gikuyu, arguing that writing in colonial languages perpetuates "mental colonization." Their debate continues today.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-3-n-summary',
      type: 'text',
      content: `## Summary: English in Africa and Asia

You have explored English's complex role in post-colonial societies. Here are the key points:

**India:**
125+ million English speakers. English became a "neutral" compromise language. Dominates education and business but creates inequality. Indian English is a distinct variety.

**Africa:**
English is official in Nigeria, South Africa, Kenya, and others. Solves multilingual challenges but advantages elites. African English varieties are legitimate, with distinctive literature.

**Southeast Asia:**
Singapore made English dominant. Philippines exports English speakers globally. Other countries balance English with national languages.

**World Englishes:**
Multiple legitimate varieties exist (Indian, Nigerian, Singaporean, etc.). "Standard" British/American English is not the only correct form. But power inequalities persist.

**The Debate:**
English opens opportunities but perpetuates colonial hierarchies, threatens local languages, and advantages elites. Writers like Achebe and Ngugi take different positions.

Understanding English's global role helps you see language as a political and social phenomenon, not just a communication tool.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 10.4 NARRATIVE: Indigenous Peoples and Their Rights
// ============================================================================

export const CHAPTER_ENGELSK_VG1_10_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-10-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '10.4',
  title: 'Indigenous Peoples and Their Rights',
  subtitle: 'Narrative Version',
  description: 'Learn about indigenous peoples across the English-speaking world and their ongoing struggles for justice.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspraklige verden ut fra historiske sammenhenger',
  ],
  linkedChapterId: 'engelsk-vg1-10-4',
  content: [
    {
      id: 'engelsk-vg1-10-4-n-intro',
      type: 'text',
      content: `## First Peoples, Last Considered

Before there was a United States, there were Cherokee, Lakota, and Navajo. Before there was Australia, there were peoples who had lived there for 65,000 years. Before there was Canada, there were Cree, Haida, and Inuit. Before there was New Zealand, there were Maori.

These indigenous peoples - the first inhabitants of their lands - share a common experience: colonization, dispossession, and ongoing struggles for recognition and rights. Across the English-speaking world, indigenous peoples have survived attempts to eliminate their cultures, and they continue to fight for justice.

Why should you care about indigenous rights? Because these issues are not just historical - they are ongoing. Because indigenous peoples hold knowledge about sustainable living that the world needs. Because understanding how settler societies have treated indigenous peoples reveals truths about those societies. And because Norway, with the Sami people, faces its own version of these challenges.

Let us explore indigenous experiences across the English-speaking world and the global movement for indigenous rights.`,
    },
    {
      id: 'engelsk-vg1-10-4-n-section1',
      type: 'text',
      content: `## Common Experiences, Different Histories

Indigenous peoples in English-speaking countries share common experiences despite different histories.

**Colonization:** Whether by treaties (broken), wars (unequal), or simply declaring land empty (terra nullius), colonizers took indigenous lands. The process varied - violent in some places, deceptively peaceful in others - but the result was the same: loss of land, resources, and autonomy.

**Disease:** European diseases - smallpox, measles, influenza - devastated indigenous populations. In some areas, 90% or more of the population died within decades of contact. This was not always intentional (though sometimes it was) but it enabled conquest.

**Cultural Destruction:** Colonial powers tried to eliminate indigenous cultures. Children were removed from families (Stolen Generations in Australia, residential schools in Canada and the US). Languages were forbidden. Spiritual practices were banned. The explicit goal was to "kill the Indian in the child."

**Marginalization:** After conquest, indigenous peoples were pushed to margins - reservations, missions, remote areas. They were excluded from citizenship, voting, and economic opportunity. Their land became national parks, farms, and cities for settlers.

**Survival and Resistance:** Despite everything, indigenous peoples survived. They maintained languages, often in secret. They preserved knowledge, stories, and practices. They resisted - sometimes through armed conflict, more often through persistence, legal battles, and cultural revival.

Today, indigenous peoples across the English-speaking world face similar challenges: lower life expectancy, higher poverty, inadequate housing and healthcare, overrepresentation in prisons, ongoing discrimination. But they also lead movements for land rights, cultural revival, and environmental protection.`,
    },
    {
      id: 'engelsk-vg1-10-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on indigenous experiences:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-4-n-quiz1-q0',
            task: 'What do "Stolen Generations" (Australia) and "residential schools" (Canada/US) have in common?',
            options: [
          { id: 'a', text: 'Both were high-quality educational institutions', isCorrect: false },
          { id: 'b', text: 'Both involved forcibly removing indigenous children to destroy their cultural identity', isCorrect: true },
          { id: 'c', text: 'Both were programs to teach indigenous languages', isCorrect: false },
          { id: 'd', text: 'Both were created by indigenous peoples themselves', isCorrect: false },
        ],
            solution: 'Both policies forcibly removed indigenous children from their families with the goal of eliminating indigenous cultures. Children were forbidden to speak their languages or practice their cultures. These policies constituted cultural genocide.',
          },
          {
            id: 'engelsk-vg1-10-4-n-quiz1-q1',
            task: 'What common policy goal was expressed as "kill the Indian in the child"?',
            options: [
              { id: 'a', text: 'Teaching indigenous children military skills', isCorrect: false },
              { id: 'b', text: 'Forcibly assimilating indigenous children by destroying their cultural identity', isCorrect: true },
              { id: 'c', text: 'Protecting indigenous children from disease', isCorrect: false },
              { id: 'd', text: 'Giving indigenous children equal educational opportunities', isCorrect: false },
            ],
            solution: 'The phrase "kill the Indian, save the man" was the explicit goal of boarding and residential schools across the English-speaking world. Children were forbidden to speak their languages or practice their cultures.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-4-n-section2',
      type: 'text',
      content: `## Indigenous Peoples by Country

**United States - Native Americans:**
574 federally recognized tribes with about 6 million people. The reservation system confines many to land with limited resources. Historical trauma from genocide, broken treaties, and boarding schools persists. Issues today include sovereignty rights, sacred site protection, sports team mascots, and persistent poverty. The Standing Rock protests against the Dakota Access Pipeline in 2016 drew global attention.

**Canada - First Nations, Inuit, and Metis:**
Over 600 First Nations plus Inuit (Arctic peoples) and Metis (mixed heritage). About 1.7 million people (5% of population). Treaties established rights that are now being enforced through courts. The Truth and Reconciliation Commission documented residential school horrors. Missing and murdered indigenous women remain a crisis. Land claims and self-government negotiations continue.

**Australia - Aboriginal and Torres Strait Islanders:**
The world's oldest continuous culture with about 800,000 people (3% of population). No treaty exists. The 2008 apology for Stolen Generations was symbolic but policies remain contested. The 2023 Voice referendum's defeat showed divisions over how to address indigenous disadvantage.

**New Zealand - Maori:**
About 850,000 people (17% of population). The Treaty of Waitangi (1840) provides a legal framework for rights. The Waitangi Tribunal addresses historical grievances. Maori language and culture are integral to national identity. Co-governance arrangements are expanding but also controversial.

Each country's approach reflects its particular history, but all grapple with how to address historical wrongs while building more equitable futures.`,
    },
    {
      id: 'engelsk-vg1-10-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on indigenous peoples by country:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-4-n-quiz2-q0',
            task: 'Which country has no treaty with its indigenous peoples?',
            options: [
          { id: 'a', text: 'New Zealand', isCorrect: false },
          { id: 'b', text: 'Canada', isCorrect: false },
          { id: 'c', text: 'Australia', isCorrect: true },
          { id: 'd', text: 'United States', isCorrect: false },
        ],
            solution: 'Australia declared its territory "terra nullius" (empty land) and never signed treaties with Aboriginal peoples. This contrasts with New Zealand (Treaty of Waitangi), Canada (numerous treaties), and the US (many treaties, though often violated).',
          },
          {
            id: 'engelsk-vg1-10-4-n-quiz2-q1',
            task: 'How many federally recognized tribes exist in the United States?',
            options: [
              { id: 'a', text: 'About 50', isCorrect: false },
              { id: 'b', text: '574 tribes with about 6 million people', isCorrect: true },
              { id: 'c', text: 'About 1,000 tribes', isCorrect: false },
              { id: 'd', text: 'Only 10 tribes remain', isCorrect: false },
            ],
            solution: 'There are 574 federally recognized tribes in the US with about 6 million people. They face issues including sovereignty rights, sacred site protection, and persistent poverty on reservations.',
          },
          {
            id: 'engelsk-vg1-10-4-n-quiz2-q2',
            task: 'What percentage of New Zealand\'s population is Maori?',
            options: [
              { id: 'a', text: 'About 3%', isCorrect: false },
              { id: 'b', text: 'About 17%', isCorrect: true },
              { id: 'c', text: 'About 5%', isCorrect: false },
              { id: 'd', text: 'About 50%', isCorrect: false },
            ],
            solution: 'Maori are about 17% of New Zealand\'s population - a much larger proportion than Aboriginal Australians (3%) or Canadian indigenous peoples (5%). This demographic weight gives Maori more political influence.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-4-n-section3',
      type: 'text',
      content: `## International Indigenous Rights

Indigenous peoples have organized internationally to advance their rights.

The United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP), adopted in 2007, establishes standards including:
- Right to self-determination
- Right to maintain culture, language, and institutions
- Right to lands and resources traditionally owned
- Free, prior, and informed consent before projects affecting indigenous peoples
- Protection from forced assimilation

Initially, four countries voted against UNDRIP: the US, Canada, Australia, and New Zealand - all English-speaking settler states. All have since endorsed it, though implementation varies widely.

Key concepts in indigenous rights:

**Self-Determination:** The right to determine one's own political status and development. This does not necessarily mean independence but does mean meaningful control over affairs affecting indigenous peoples.

**Land Rights:** Indigenous peoples' relationship to land is often different from Western property concepts. Land is not just property but identity, spirituality, and community. Returning land or providing compensation for its loss is central to justice.

**Free, Prior, and Informed Consent (FPIC):** Before governments or companies can undertake projects affecting indigenous peoples (mining, pipelines, etc.), they must obtain genuine consent - not just consultation. This principle is often violated.

**Cultural Rights:** Protection of languages, sacred sites, traditional knowledge, and practices. This includes intellectual property issues - preventing corporations from patenting traditional medicines, for example.`,
    },
    {
      id: 'engelsk-vg1-10-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on international indigenous rights:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-4-n-quiz3-q0',
            task: 'Which four countries initially voted against the UN Declaration on the Rights of Indigenous Peoples?',
            options: [
          { id: 'a', text: 'Britain, France, Germany, and Spain', isCorrect: false },
          { id: 'b', text: 'United States, Canada, Australia, and New Zealand', isCorrect: true },
          { id: 'c', text: 'India, China, Japan, and Brazil', isCorrect: false },
          { id: 'd', text: 'Russia, Norway, Sweden, and Finland', isCorrect: false },
        ],
            solution: 'The four English-speaking settler states initially opposed UNDRIP, likely because of concerns about land claims and self-determination implications. All have since endorsed it, though implementation remains incomplete.',
          },
          {
            id: 'engelsk-vg1-10-4-n-quiz3-q1',
            task: 'What does "free, prior, and informed consent" (FPIC) mean?',
            options: [
              { id: 'a', text: 'That indigenous peoples can freely move between countries', isCorrect: false },
              { id: 'b', text: 'That genuine consent must be obtained before projects affecting indigenous peoples', isCorrect: true },
              { id: 'c', text: 'That all information must be given in indigenous languages', isCorrect: false },
              { id: 'd', text: 'That indigenous peoples must consent to all government laws', isCorrect: false },
            ],
            solution: 'FPIC means that before governments or companies undertake projects affecting indigenous peoples (mining, pipelines, etc.), they must obtain genuine consent - not just consultation. This principle is often violated in practice.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-4-n-section4',
      type: 'text',
      content: `## Contemporary Issues and Movements

Indigenous peoples today face ongoing challenges and lead important movements.

**Land and Resources:** Conflicts over land continue. In Canada, pipeline protests at Wet'suwet'en and Coastal GasLink have drawn attention. In Australia, mining companies sometimes destroy sacred sites. In the US, Standing Rock showed the collision between indigenous rights and energy development.

**Missing and Murdered Indigenous Women:** Particularly in Canada and the US, indigenous women face disproportionate violence. A Canadian inquiry called it "genocide." The issue reflects broader patterns of how indigenous peoples - especially women - are devalued.

**Climate Change:** Indigenous peoples are often on the front lines of climate impacts while contributing least to the problem. Arctic communities see their world literally melting. At the same time, indigenous knowledge about sustainable living is increasingly recognized as valuable.

**Language Revitalization:** Many indigenous languages are endangered. Efforts to revive them include immersion schools, language apps, and official recognition. In New Zealand, Maori language is thriving; elsewhere, revival is more difficult.

**Truth and Reconciliation:** Countries are grappling with how to acknowledge and address historical wrongs. Apologies, truth commissions, and memorials are steps, but material change - returning land, closing gaps in health and wealth - is harder.

These issues connect. Land rights affect resources and climate. Cultural survival depends on language. Economic marginalization perpetuates vulnerability. Addressing indigenous rights requires comprehensive approaches, not just symbolic gestures.`,
    },
    {
      id: 'engelsk-vg1-10-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on contemporary indigenous issues:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-4-n-quiz4-q0',
            task: 'Why are indigenous peoples important in climate discussions?',
            options: [
          { id: 'a', text: 'They produce most greenhouse gas emissions', isCorrect: false },
          { id: 'b', text: 'They are on the front lines of climate impacts and hold knowledge about sustainable living', isCorrect: true },
          { id: 'c', text: 'They oppose all environmental protection', isCorrect: false },
          { id: 'd', text: 'Climate change does not affect indigenous peoples', isCorrect: false },
        ],
            solution: 'Indigenous peoples are disproportionately affected by climate change (Arctic melting, changing ecosystems) while contributing least to it. Their traditional knowledge about sustainable living is increasingly recognized as valuable for addressing the climate crisis.',
          },
          {
            id: 'engelsk-vg1-10-4-n-quiz4-q1',
            task: 'What was the Standing Rock protest about?',
            options: [
              { id: 'a', text: 'A dispute over fishing rights', isCorrect: false },
              { id: 'b', text: 'Opposition to the Dakota Access Pipeline crossing indigenous sacred lands', isCorrect: true },
              { id: 'c', text: 'A protest against residential schools', isCorrect: false },
              { id: 'd', text: 'A demand for a new national holiday', isCorrect: false },
            ],
            solution: 'The Standing Rock protests in 2016 opposed the Dakota Access Pipeline, which threatened indigenous water supplies and sacred sites. The protests drew global attention to the collision between indigenous rights and energy development.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-4-n-section5',
      type: 'text',
      content: `## Norway and the Sami: A Comparison

Norway has its own indigenous people: the Sami, who have lived in northern Scandinavia for thousands of years. Comparing Sami experiences with indigenous peoples in English-speaking countries offers insights.

**Similarities:**
- Colonization and forced assimilation ("Norwegianization" parallels boarding schools)
- Language suppression and revival efforts
- Land rights conflicts (particularly around reindeer herding)
- Self-governance structures (Sami Parliament established 1989)
- Ongoing gaps in recognition and respect

**Differences:**
- Sami were never a majority population in Norway
- No mass death from disease (no ocean separating populations)
- Sami Parliament exists but with limited power
- Sami cross four countries (Norway, Sweden, Finland, Russia)
- Reindeer herding provides economic base in some areas

Norway's Truth Commission on Norwegianization (2018) examined forced assimilation policies. Like Canada's TRC, it documented harm and made recommendations. Implementation remains incomplete.

The Fosen case (2021) saw the Norwegian Supreme Court rule that wind turbines violated Sami reindeer herding rights, but the turbines remained standing for years afterward - showing the gap between legal recognition and practical implementation.

Understanding indigenous rights in English-speaking countries helps you understand your own country's situation. The patterns - colonization, cultural destruction, ongoing struggle, slow recognition - are remarkably similar across very different contexts.`,
    },
    {
      id: 'engelsk-vg1-10-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on Norway and the Sami:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-10-4-n-quiz5-q0',
            task: 'What does the Fosen case reveal about indigenous rights in Norway?',
            options: [
          { id: 'a', text: 'That Sami have no legal rights', isCorrect: false },
          { id: 'b', text: 'That legal recognition of rights does not always translate into practical implementation', isCorrect: true },
          { id: 'c', text: 'That Norway has fully resolved all Sami rights issues', isCorrect: false },
          { id: 'd', text: 'That reindeer herding is no longer practiced', isCorrect: false },
        ],
            solution: 'The Supreme Court ruled wind turbines violated Sami rights, but they remained standing. This shows that even when indigenous peoples win legal battles, implementation can be delayed or ignored - a gap between rights on paper and rights in practice.',
          },
          {
            id: 'engelsk-vg1-10-4-n-quiz5-q1',
            task: 'What is "Norwegianization" and how does it compare to policies in other countries?',
            options: [
              { id: 'a', text: 'A celebration of Norwegian culture with no parallel elsewhere', isCorrect: false },
              { id: 'b', text: 'Forced assimilation of Sami, paralleling boarding schools in Canada and Australia', isCorrect: true },
              { id: 'c', text: 'A modern integration program for immigrants', isCorrect: false },
              { id: 'd', text: 'The process of learning Norwegian as a second language', isCorrect: false },
            ],
            solution: 'Norwegianization was the forced assimilation of Sami people, paralleling residential schools in Canada and the Stolen Generations in Australia. Sami languages were suppressed, and cultural practices were banned.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-10-4-n-summary',
      type: 'text',
      content: `## Summary: Indigenous Peoples and Their Rights

You have explored indigenous experiences across the English-speaking world. Here are the key points:

**Common Experiences:**
Colonization, disease, cultural destruction (children removed, languages banned), marginalization, survival and resistance. These patterns appear across all settler colonial states.

**Country Differences:**
US has 574 tribes and reservation system. Canada has First Nations, Inuit, and Metis with treaty-based rights. Australia has no treaty (terra nullius). New Zealand has the Treaty of Waitangi framework.

**International Framework:**
UNDRIP establishes rights to self-determination, land, culture, and consent. The four settler states initially opposed it. Implementation remains the challenge.

**Contemporary Issues:**
Land and resource conflicts, missing and murdered indigenous women, climate change impacts, language revitalization, truth and reconciliation processes.

**Norway Connection:**
Sami face similar patterns: Norwegianization, language loss, land rights conflicts, the Fosen case. Understanding global indigenous rights helps understand local situations.

Indigenous rights are not just historical issues - they are ongoing struggles for justice, with lessons for how societies treat their most vulnerable members.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Export all chapters
// ============================================================================

export const ENGELSK_VG1_NARRATIV_DEL4_CHAPTERS = [
  CHAPTER_ENGELSK_VG1_8_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_8_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_8_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_8_4_NARRATIV,
  CHAPTER_ENGELSK_VG1_9_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_9_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_9_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_9_4_NARRATIV,
  CHAPTER_ENGELSK_VG1_10_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_10_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_10_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_10_4_NARRATIV,
];
