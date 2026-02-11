/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

/**
 * Textbook content for Samfunnsfaglig engelsk (VG2/VG3) - Section 7: International Relations
 *
 * Chapters 7.1–7.5
 *
 * LK20 competence goals:
 * - explore and discuss international organisations and their role in global governance
 * - analyse diplomacy, conflict resolution, and the pursuit of peace
 * - discuss global security challenges and Norway's role in international affairs
 */

// ============================================================================
// Chapter 7.1: International Organisations
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_7_1: TextbookChapter = {
  id: 'samf-engelsk-7-1',
  courseId: 'samf-engelsk',
  chapterNumber: '7.1',
  title: 'International Organisations',
  description: 'An overview of the major international organisations, their structures, purposes, and influence on global governance. From the United Nations to regional bodies, this chapter examines how states cooperate across borders.',
  estimatedMinutes: 22,
  competenceGoals: [
    'explore and discuss how international organisations contribute to global cooperation and governance',
    'analyse the role of multilateral institutions in addressing transnational challenges',
  ],
  keyTerms: [
    { term: 'Multilateralism', definition: 'A system of coordinating relations among three or more states, often through international institutions' },
    { term: 'Sovereignty', definition: 'The supreme authority of a state to govern itself without external interference' },
    { term: 'General Assembly', definition: 'The main deliberative body of the United Nations where all 193 member states have equal representation' },
    { term: 'Security Council', definition: 'The UN body with primary responsibility for maintaining international peace and security, with five permanent members holding veto power' },
    { term: 'Supranational', definition: 'An authority that transcends national boundaries and has the power to make decisions binding on member states' },
  ],
  content: [
    {
      id: 'se-7-1-intro',
      type: 'text',
      content: `## International Organisations and Global Governance

No single country can solve the world's most pressing problems alone. Climate change, pandemics, terrorism, and economic instability all cross national borders and require coordinated responses. International organisations provide the frameworks and institutions through which states work together to address these shared challenges.

The modern system of international organisations was largely built after the devastation of the Second World War. Leaders recognised that unchecked nationalism and the absence of effective international cooperation had contributed to two catastrophic global conflicts within a single generation. The result was a new architecture of global governance centred on the United Nations, but extending to a wide range of specialised agencies and regional bodies.

Today, there are hundreds of international organisations shaping everything from trade policy to human rights standards. Understanding how they work, and where they fall short, is essential for anyone seeking to understand contemporary international relations.`,
    },
    {
      id: 'se-7-1-def-1',
      type: 'definition',
      title: 'The United Nations',
      content: `**The United Nations (UN)** was founded in 1945 with 51 member states; today it has 193 members. Its stated purposes, laid out in the UN Charter, include:

- Maintaining international peace and security
- Developing friendly relations among nations
- Achieving international cooperation on economic, social, and humanitarian issues
- Promoting respect for human rights

**Key organs of the UN:**
- **General Assembly:** All members have one vote; discusses and makes recommendations on global issues
- **Security Council:** 15 members (5 permanent with veto power: USA, UK, France, Russia, China) responsible for peace and security
- **Secretariat:** The administrative arm, headed by the Secretary-General
- **International Court of Justice (ICJ):** Settles legal disputes between states

The UN does not have its own army or the power to tax. Its effectiveness depends on the willingness of member states, especially the major powers, to cooperate.`,
    },
    {
      id: 'se-7-1-example',
      type: 'text',
      content: `### The UN in Action: Peacekeeping

One of the UN's most visible roles is peacekeeping. Since 1948, the UN has deployed over 70 peacekeeping operations around the world. These missions typically involve soldiers from multiple member states wearing the UN's distinctive blue helmets.

Peacekeepers are not sent to fight wars. Instead, they monitor ceasefires, protect civilians, and help create conditions for lasting peace. Successful examples include operations in Mozambique, East Timor, and Sierra Leone, where UN forces helped stabilise post-conflict societies.

However, UN peacekeeping has also faced serious criticism. In Rwanda in 1994, a small UN force was unable to prevent genocide. In Srebrenica in 1995, Dutch peacekeepers failed to protect Bosnian Muslims from massacre. These failures raised difficult questions about when and how the international community should intervene.`,
    },
    {
      id: 'se-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-7-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following is a key feature of the UN Security Council?',
        options: [
          { id: 'a', text: 'All 193 member states have equal voting rights', isCorrect: false },
          { id: 'b', text: 'Five permanent members hold veto power over resolutions', isCorrect: true },
          { id: 'c', text: 'It serves primarily as a court for legal disputes between states', isCorrect: false },
          { id: 'd', text: 'It controls its own standing army for enforcement', isCorrect: false },
        ],
        solution: 'The UN Security Council has five permanent members (the USA, UK, France, Russia, and China), each of which holds veto power. This means that any one of these states can block a Security Council resolution, regardless of how many other members vote in favour. This is a key feature that distinguishes the Security Council from the General Assembly, where all states have one vote and no veto.',
      },
    },
    {
      id: 'se-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-7-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'What does the term "multilateralism" mean in international relations?',
        options: [
          { id: 'a', text: 'A policy of avoiding all international agreements', isCorrect: false },
          { id: 'b', text: 'A bilateral agreement between two powerful states', isCorrect: false },
          { id: 'c', text: 'Cooperation among three or more states, often through international institutions', isCorrect: true },
          { id: 'd', text: 'A military alliance directed against a specific enemy', isCorrect: false },
        ],
        solution: 'Multilateralism refers to the practice of coordinating policies and actions among three or more states, typically through international institutions and agreements. It is the foundation of the modern international order, as seen in organisations like the United Nations, the World Trade Organization, and the European Union. It stands in contrast to unilateralism (acting alone) and bilateralism (agreements between two states).',
      },
    },
    {
      id: 'se-7-1-def-2',
      type: 'definition',
      title: 'Regional Organisations',
      content: `In addition to global bodies like the UN, numerous **regional organisations** play significant roles in international relations:

- **European Union (EU):** A supranational organisation of 27 European states with shared institutions, a common market, and a single currency (the euro) used by most members. The EU can pass laws that are binding on member states.
- **NATO (North Atlantic Treaty Organization):** A military alliance of 32 states in North America and Europe. An attack on one member is considered an attack on all (Article 5).
- **African Union (AU):** A continental organisation of 55 African states promoting political and economic integration.
- **ASEAN (Association of Southeast Asian Nations):** A regional bloc of 10 Southeast Asian states focused on economic cooperation and stability.

Regional organisations reflect the principle that states with geographic proximity and shared interests can often cooperate more effectively at a regional level than through global institutions alone.`,
    },
    {
      id: 'se-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Explain the difference between a supranational organisation and an intergovernmental organisation. Use the EU and the UN as examples to illustrate your answer.',
        hints: ['Think about where decision-making power lies and whether decisions are binding on member states'],
        solution: 'A supranational organisation like the EU has authority that goes beyond individual member states. EU institutions (such as the European Commission and the European Court of Justice) can make decisions and pass laws that are directly binding on member states, even if a particular state disagrees. An intergovernmental organisation like the UN is based on cooperation between sovereign states. Decisions in the General Assembly are recommendations, not binding laws, and in the Security Council, any permanent member can veto a resolution. States retain their sovereignty and cannot be forced to comply. The key difference is thus the degree to which states surrender decision-making power to the organisation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'The veto power of the five permanent members of the Security Council has been called both essential and deeply problematic. Discuss arguments for and against the veto system.',
        hints: ['Consider what would happen without the veto, and also what happens when it is used to block action'],
        solution: 'Arguments for the veto: 1) It ensures that the most powerful states remain within the UN system, since they would likely leave if decisions could be imposed on them. 2) It prevents the UN from authorising military action against a major power, which could lead to world war. 3) It forces compromise and consensus among the great powers. Arguments against: 1) It allows a single state to block action even when the vast majority agree, as Russia has done with Syria resolutions. 2) It gives disproportionate power to five states chosen based on the power dynamics of 1945. 3) It can paralyse the Security Council when urgent action is needed, as during the Rwandan genocide. The veto remains controversial because it represents a tension between realism (reflecting actual power) and idealism (equal rights for all states).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-1-summary',
      type: 'text',
      content: `## Summary

In this chapter you have learned:

- International organisations provide frameworks for states to cooperate on shared challenges that cross national borders
- The **United Nations** is the most prominent global organisation, with 193 member states and key organs including the General Assembly and Security Council
- The **veto power** of the five permanent Security Council members is a defining and controversial feature of global governance
- **Regional organisations** such as the EU, NATO, and the AU play crucial roles alongside global institutions
- The distinction between **supranational** and **intergovernmental** organisations reflects different degrees of shared sovereignty

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Multilateralism | Cooperation among multiple states through institutions |
| Sovereignty | A state's supreme authority over its own territory |
| Veto power | The ability of a permanent Security Council member to block a resolution |
| Supranational | Authority that transcends and can bind member states |
| Peacekeeping | UN-mandated operations to maintain peace in conflict zones |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-7-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Choose one UN peacekeeping operation (past or present) and evaluate its effectiveness. What did the mission achieve, and where did it fall short? What lessons can be drawn for future operations?',
        hints: ['Consider the mandate the mission was given, the resources available, and the political context on the ground'],
        solution: 'Example using UNAMIR in Rwanda (1993-1996): The mission was initially deployed to monitor a ceasefire and peace agreement. When genocide began in April 1994, the force commander General Dallaire requested reinforcements, but the Security Council voted to reduce the force instead. Approximately 800,000 people were killed in 100 days while the international community stood by. The mission showed that peacekeeping forces are only effective when they have a strong mandate, adequate resources, and the political will of major powers behind them. Lessons include the need for rapid response capabilities, clearer rules of engagement for protecting civilians, and a commitment from the Security Council to act in the face of mass atrocities. The Rwanda failure ultimately contributed to the development of the Responsibility to Protect (R2P) doctrine.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-7-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Some argue that international organisations are becoming less relevant in a world of rising nationalism and great-power competition. Others argue they are more important than ever. Write a well-structured text (300-500 words) in which you discuss both perspectives and present your own reasoned conclusion.',
        hints: ['Consider examples such as the UN, WTO, and EU, and how they have performed in recent crises'],
        solution: 'A strong response should address both sides. For declining relevance: rising nationalism (Brexit, "America First"), the Security Council being paralysed by vetoes on Syria and Ukraine, the US withdrawing from international agreements (Paris, Iran deal), and growing bilateralism in trade. For increasing relevance: the COVID-19 pandemic showed the need for global coordination (WHO, COVAX), climate change requires multilateral solutions (Paris Agreement), global supply chains need trade rules (WTO), and no single state can address cybersecurity or terrorism alone. A balanced conclusion might argue that international organisations need reform to remain effective, but that the alternative - a world without multilateral cooperation - would be far more dangerous and unstable. The key is not whether we need international organisations, but how to make them more responsive and representative.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Chapter 7.2: Diplomacy and Conflict Resolution
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_7_2: TextbookChapter = {
  id: 'samf-engelsk-7-2',
  courseId: 'samf-engelsk',
  chapterNumber: '7.2',
  title: 'Diplomacy and Conflict Resolution',
  description: 'How states and international actors use diplomacy, mediation, and negotiation to resolve disputes and prevent armed conflict. This chapter examines the tools of peaceful conflict resolution and their limitations.',
  estimatedMinutes: 23,
  competenceGoals: [
    'analyse how diplomacy and negotiation are used to resolve conflicts between states and groups',
    'discuss the conditions that make peaceful conflict resolution possible or difficult',
  ],
  keyTerms: [
    { term: 'Diplomacy', definition: 'The practice of managing international relations through negotiation, dialogue, and representation' },
    { term: 'Mediation', definition: 'A process in which a neutral third party helps conflicting parties reach a voluntary agreement' },
    { term: 'Sanctions', definition: 'Economic or political penalties imposed on a state to pressure it to change its behaviour' },
    { term: 'Track II diplomacy', definition: 'Unofficial dialogue and negotiation conducted by non-governmental actors such as academics, NGOs, or private citizens' },
    { term: 'Ceasefire', definition: 'A temporary or permanent halt to fighting, often a first step towards a peace agreement' },
  ],
  content: [
    {
      id: 'se-7-2-intro',
      type: 'text',
      content: `## Diplomacy and the Art of Conflict Resolution

For most of human history, disputes between states were settled through war. The development of modern diplomacy represents one of humanity's most important achievements: the idea that conflicts can and should be resolved through talking rather than fighting.

Diplomacy takes many forms. It includes formal negotiations between governments, the work of ambassadors posted in foreign capitals, multilateral conferences at the United Nations, and behind-the-scenes conversations that never make the news. At its core, diplomacy is about communication: understanding the interests and concerns of other parties and finding solutions that all sides can accept.

Conflict resolution is closely related to diplomacy but focuses specifically on ending disputes. It draws on insights from political science, psychology, and negotiation theory. Effective conflict resolution requires understanding not just the stated positions of the parties, but their underlying interests, fears, and needs.`,
    },
    {
      id: 'se-7-2-def-1',
      type: 'definition',
      title: 'Tools of Diplomacy',
      content: `States and international actors have a range of tools available for managing conflicts peacefully:

**Negotiation** is direct dialogue between the parties to a conflict, aimed at reaching an agreement. Successful negotiation often involves compromise, where each side gives up something to gain something else.

**Mediation** involves a neutral third party who helps the conflicting sides communicate and find common ground. The mediator does not impose a solution but facilitates the process. Norway has played a prominent role as a mediator in several international conflicts.

**Arbitration** is a process where the parties agree to submit their dispute to an impartial panel whose decision they will accept as binding.

**Sanctions** are economic or political penalties (such as trade embargoes or asset freezes) used to pressure a state into changing its behaviour without resorting to military force.

**Diplomatic recognition and isolation** can also be powerful tools. Granting or withholding recognition of a government sends strong signals about its legitimacy.`,
    },
    {
      id: 'se-7-2-example',
      type: 'text',
      content: `### Case Study: The Oslo Accords (1993)

One of the most famous examples of mediation is the Oslo Accords, negotiated in secret in Norway between Israel and the Palestine Liberation Organization (PLO). Norwegian diplomats facilitated back-channel meetings that led to mutual recognition and a framework for Palestinian self-governance.

The process succeeded in part because of several key factors:
- **Secrecy** allowed the parties to explore compromises without public pressure
- **A trusted mediator** (Norway) with good relations with both sides
- **Direct personal contact** between negotiators built trust
- **Both parties had incentives** to reach an agreement at that particular moment

However, the Oslo process also illustrates the limitations of diplomacy. The Accords left the most difficult issues (Jerusalem, refugees, borders) for later negotiations that never produced agreement. Violence continued, trust eroded, and the peace process ultimately stalled. This shows that even successful diplomacy can fail if the underlying issues are not fully addressed.`,
    },
    {
      id: 'se-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-7-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What distinguishes mediation from arbitration as a form of conflict resolution?',
        options: [
          { id: 'a', text: 'Mediation uses military force while arbitration does not', isCorrect: false },
          { id: 'b', text: 'In mediation the third party facilitates dialogue, while in arbitration the third party makes a binding decision', isCorrect: true },
          { id: 'c', text: 'Mediation is only used between states, while arbitration is for individuals', isCorrect: false },
          { id: 'd', text: 'Arbitration is always conducted by the United Nations, while mediation is not', isCorrect: false },
        ],
        solution: 'The key difference is the role and authority of the third party. In mediation, the third party (mediator) helps the conflicting sides communicate, understand each other, and find their own solution. The mediator cannot impose an outcome. In arbitration, the parties agree to submit their dispute to an impartial panel or arbitrator whose decision is binding. Both are peaceful methods, but arbitration involves surrendering decision-making power to a third party.',
      },
    },
    {
      id: 'se-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-7-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Which of the following best describes "Track II diplomacy"?',
        options: [
          { id: 'a', text: 'Secret military operations conducted by intelligence agencies', isCorrect: false },
          { id: 'b', text: 'Official negotiations between heads of state', isCorrect: false },
          { id: 'c', text: 'Unofficial dialogue by non-governmental actors such as academics and NGOs', isCorrect: true },
          { id: 'd', text: 'Economic sanctions imposed by the Security Council', isCorrect: false },
        ],
        solution: 'Track II diplomacy refers to unofficial, informal dialogue conducted by non-governmental actors such as academics, religious leaders, retired politicians, and representatives of NGOs. It operates alongside official (Track I) diplomacy and can help build relationships, generate new ideas, and create conditions for formal negotiations. Track II diplomacy played an important role in the early stages of the Oslo Accords, when Norwegian academics facilitated initial contacts between Israeli and Palestinian representatives.',
      },
    },
    {
      id: 'se-7-2-def-2',
      type: 'definition',
      title: 'Conditions for Successful Conflict Resolution',
      content: `Research on conflict resolution identifies several conditions that increase the likelihood of a peaceful settlement:

**Mutually hurting stalemate:** Both parties recognise that continuing the conflict is more costly than compromising. Neither side can win outright.

**Ripeness:** The conflict has reached a point where both sides are ready for a resolution. This is often linked to war-weariness or changes in leadership.

**Third-party involvement:** A trusted mediator or guarantor can help build confidence and facilitate dialogue.

**Political will:** Leaders on both sides must be willing to make concessions and sell the agreement to their own populations.

**Addressing root causes:** Agreements that deal only with the symptoms of a conflict (e.g., a ceasefire) without addressing underlying grievances (e.g., inequality, injustice) are less likely to hold.

When these conditions are absent, even the most skilled diplomats may be unable to achieve peace. This helps explain why some conflicts, such as the Israeli-Palestinian conflict, have proven so resistant to resolution.`,
    },
    {
      id: 'se-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-7-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Explain the concept of a "mutually hurting stalemate" and give an example of how it has contributed to a peace process.',
        hints: ['Think about what motivates parties in a conflict to come to the negotiating table'],
        solution: 'A mutually hurting stalemate occurs when both parties in a conflict reach a point where continuing to fight is increasingly costly and painful, yet neither side can achieve a decisive victory. This creates incentives for negotiation, as the status quo becomes unbearable. An example is the Northern Ireland peace process: by the mid-1990s, decades of violence (the Troubles) had caused enormous suffering on both sides without either achieving its goals. The IRA could not force British withdrawal, and the British security forces could not eliminate the IRA. This mutual exhaustion, combined with skilled mediation and political leadership, contributed to the Good Friday Agreement of 1998. The concept highlights that timing is crucial in conflict resolution; attempts to negotiate when one side believes it can still win militarily are often futile.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-7-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sanctions are often used as an alternative to military intervention. Discuss the effectiveness of sanctions as a tool of diplomacy, using at least one specific example.',
        hints: ['Consider both the intended effects and the unintended consequences of sanctions'],
        solution: 'Sanctions can be effective in some circumstances but have significant limitations. Supporters argue they provide a middle ground between doing nothing and using military force. The sanctions against apartheid South Africa are often cited as a success; international economic and sporting isolation contributed to the regime agreeing to end apartheid. However, sanctions against Iraq in the 1990s, while intended to weaken Saddam Hussein, caused enormous suffering among ordinary civilians (malnutrition, lack of medicine) while the regime remained in power. Modern "targeted" or "smart" sanctions (freezing assets of specific leaders, travel bans) aim to hurt decision-makers rather than populations, but powerful states can often find ways around them. Sanctions are most effective when they are broadly supported, clearly targeted, and combined with diplomatic efforts that offer the targeted state a way out if it changes its behaviour.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-2-summary',
      type: 'text',
      content: `## Summary

In this chapter you have learned:

- **Diplomacy** is the primary tool for managing international relations peacefully, involving negotiation, mediation, and other non-violent methods
- Key tools include **negotiation**, **mediation**, **arbitration**, and **sanctions**, each with distinct characteristics and applications
- The **Oslo Accords** illustrate both the potential and the limitations of diplomatic mediation
- Successful conflict resolution often depends on conditions such as **mutually hurting stalemate**, **ripeness**, and **political will**
- **Track II diplomacy** by non-governmental actors can complement official negotiations

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Diplomacy | Managing relations through dialogue and negotiation |
| Mediation | Third-party facilitation of dialogue between adversaries |
| Sanctions | Economic/political penalties to change state behaviour |
| Mutually hurting stalemate | When both sides find the conflict too costly to continue |
| Track II diplomacy | Unofficial dialogue by non-state actors |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-7-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Compare two different conflict resolution processes (e.g., Northern Ireland and the Israeli-Palestinian conflict, or South Africa and the Korean Peninsula). Why did one succeed (or make more progress) than the other? What conditions were present or absent?',
        hints: ['Use the theoretical framework of conditions for successful conflict resolution: stalemate, ripeness, third-party involvement, political will, and addressing root causes'],
        solution: 'Example comparing Northern Ireland and the Israeli-Palestinian conflict: Northern Ireland succeeded because: 1) A genuine mutually hurting stalemate existed by the 1990s. 2) Skilled third-party involvement from the US (George Mitchell) and the Irish and British governments. 3) Political leaders (Trimble, Hume, Adams) showed courage and political will. 4) The Good Friday Agreement addressed root causes by creating power-sharing institutions. The Israeli-Palestinian conflict has stalled because: 1) The power imbalance means Israel does not face a "hurting stalemate." 2) Internal divisions (Hamas vs. Fatah) make unified Palestinian negotiation difficult. 3) Core issues (Jerusalem, refugees, settlements) are deeply entrenched. 4) Domestic politics on both sides punish compromise. The comparison shows that the theoretical conditions for peace are interconnected, and the absence of even one can derail a process.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-7-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Norway is often described as a "peace nation." Discuss the role Norway has played in international mediation efforts. What strengths does Norway bring to the table, and what criticisms have been raised about Norwegian peace diplomacy?',
        hints: ['Consider examples such as the Oslo Accords, Sri Lanka, and Colombia, and think about Norway\'s size, reputation, and foreign policy interests'],
        solution: 'Norway has played a disproportionately large role in international peace mediation for a small country. Key examples include: the Oslo Accords (1993) between Israel and the PLO, mediation in Sri Lanka (2002-2006), and supporting the peace process in Colombia. Norway brings several strengths: 1) It is perceived as neutral, with no colonial history or strategic interests in most conflict areas. 2) It has a strong humanitarian reputation and a tradition of aid and development work. 3) Its small size makes it less threatening. 4) Norwegian diplomats have built extensive networks and expertise. However, criticisms include: 1) The Oslo process is seen by many as a failure that gave Israel a diplomatic cover while continuing settlement expansion. 2) Norway may overestimate its own influence and impartiality. 3) Peace diplomacy can serve Norwegian prestige and influence rather than the interests of the conflict parties. 4) In Sri Lanka, Norway was ultimately unable to prevent a return to full-scale war.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Chapter 7.3: War and Peace
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_7_3: TextbookChapter = {
  id: 'samf-engelsk-7-3',
  courseId: 'samf-engelsk',
  chapterNumber: '7.3',
  title: 'War and Peace',
  description: 'An exploration of the causes of war, the evolution of warfare, international humanitarian law, and the challenges of building sustainable peace after conflict. This chapter examines both the theory and reality of armed conflict.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analyse causes of armed conflict and the conditions for building sustainable peace',
    'discuss ethical dilemmas related to the use of military force and international humanitarian law',
  ],
  keyTerms: [
    { term: 'Just War Theory', definition: 'A philosophical tradition that sets out criteria for when the use of military force is morally justified and how it should be conducted' },
    { term: 'International Humanitarian Law', definition: 'The body of rules that seeks to limit the effects of armed conflict, including the Geneva Conventions' },
    { term: 'Transitional justice', definition: 'The set of judicial and non-judicial measures used to address legacies of mass human rights abuses after a conflict' },
    { term: 'Asymmetric warfare', definition: 'Conflict between parties of significantly unequal military power, where the weaker side uses unconventional tactics' },
    { term: 'Responsibility to Protect (R2P)', definition: 'The principle that the international community has a responsibility to intervene when a state fails to protect its population from genocide, war crimes, ethnic cleansing, or crimes against humanity' },
  ],
  content: [
    {
      id: 'se-7-3-intro',
      type: 'text',
      content: `## War and Peace: Understanding Armed Conflict

War is one of the most destructive activities that humans engage in. Throughout history, armed conflicts have killed hundreds of millions of people, displaced entire populations, and destroyed civilisations. Yet war has also been a constant feature of human societies, raising the fundamental question: why do humans go to war?

The study of war and peace is central to international relations. Political scientists, historians, and philosophers have long debated the causes of war, the conditions under which the use of force can be justified, and the best ways to build lasting peace. In the modern era, the nature of warfare itself has changed dramatically, from the trench warfare of the First World War to the drone strikes and cyber-attacks of the twenty-first century.

Understanding war requires examining it from multiple perspectives: the political decisions that lead to conflict, the legal frameworks that attempt to regulate it, the human suffering it causes, and the difficult process of rebuilding societies after violence has ended.`,
    },
    {
      id: 'se-7-3-def-1',
      type: 'definition',
      title: 'Causes of War',
      content: `Scholars identify a range of factors that contribute to the outbreak of armed conflict:

**Structural causes:**
- Competition for territory, resources, or strategic advantage
- Power imbalances or shifts in the balance of power between states
- Weak or failed states that cannot maintain order

**Political causes:**
- Aggressive or expansionist ideologies
- Authoritarian regimes that suppress dissent and use external enemies to maintain power
- Nationalism and ethnic or religious tensions

**Economic causes:**
- Competition for valuable resources (oil, minerals, water)
- Economic inequality and marginalisation of groups
- The influence of the arms industry and military-industrial complex

**Immediate triggers:**
- Assassination, border incidents, or provocations
- Miscalculation or misperception of the other side's intentions
- Escalation spirals where each side responds to perceived threats

Most wars result from a combination of these factors rather than a single cause. The debate over the relative importance of different causes remains one of the central questions in the study of international relations.`,
    },
    {
      id: 'se-7-3-example',
      type: 'text',
      content: `### The Changing Nature of Warfare

The way wars are fought has changed dramatically over the past century. Understanding these changes is essential for analysing contemporary conflicts.

**Interstate vs. intrastate conflict:** After 1945, wars between states (interstate conflicts) have become less common, while civil wars and internal conflicts (intrastate conflicts) have become the dominant form of armed violence. Since the end of the Cold War, the vast majority of armed conflicts have been fought within states rather than between them.

**Asymmetric warfare:** Modern conflicts often involve parties of very unequal military strength. Weaker parties use guerrilla tactics, improvised explosive devices, and terrorism to offset their disadvantage. This makes conventional military superiority less decisive.

**Technology and warfare:** Drones, precision-guided munitions, cyber-attacks, and artificial intelligence are transforming how wars are fought. These technologies raise new ethical and legal questions about accountability, civilian harm, and the threshold for using force.

**The human cost:** Despite changes in technology, the human cost of war remains immense. Civilians bear the brunt of modern conflicts, accounting for the majority of casualties. Displacement, trauma, destruction of infrastructure, and the collapse of healthcare and education systems cause suffering that lasts generations.`,
    },
    {
      id: 'se-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-7-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following best describes "asymmetric warfare"?',
        options: [
          { id: 'a', text: 'War between two states with roughly equal military power', isCorrect: false },
          { id: 'b', text: 'Conflict between parties of very unequal military strength, where the weaker side uses unconventional tactics', isCorrect: true },
          { id: 'c', text: 'A war that is fought entirely with nuclear weapons', isCorrect: false },
          { id: 'd', text: 'A purely economic conflict between trading partners', isCorrect: false },
        ],
        solution: 'Asymmetric warfare refers to conflicts between parties with significantly different levels of military capability. The weaker side cannot match the stronger side in conventional military terms, so it uses unconventional tactics such as guerrilla warfare, ambushes, improvised explosive devices, and sometimes terrorism. Examples include the conflicts in Afghanistan (Taliban vs. US/NATO forces) and Iraq (insurgent groups vs. coalition forces). Asymmetric warfare poses particular challenges for international humanitarian law because the lines between combatants and civilians often become blurred.',
      },
    },
    {
      id: 'se-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-7-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'What is the core idea behind the Responsibility to Protect (R2P)?',
        options: [
          { id: 'a', text: 'States have no obligation to protect foreign populations under any circumstances', isCorrect: false },
          { id: 'b', text: 'The international community may intervene when a state fails to protect its people from genocide, war crimes, ethnic cleansing, or crimes against humanity', isCorrect: true },
          { id: 'c', text: 'Every state must maintain a standing army for the United Nations', isCorrect: false },
          { id: 'd', text: 'Only neighbouring states have the right to intervene in another state\'s internal affairs', isCorrect: false },
        ],
        solution: 'The Responsibility to Protect (R2P) is a principle adopted by UN member states at the 2005 World Summit. It rests on three pillars: 1) Every state has the responsibility to protect its population from genocide, war crimes, ethnic cleansing, and crimes against humanity. 2) The international community should assist states in fulfilling this responsibility. 3) If a state manifestly fails to protect its population, the international community has the responsibility to take collective action, including, as a last resort, military intervention authorised by the Security Council. R2P represents a significant shift in thinking about sovereignty, suggesting that sovereignty entails responsibilities, not just rights.',
      },
    },
    {
      id: 'se-7-3-def-2',
      type: 'definition',
      title: 'International Humanitarian Law and Just War Theory',
      content: `**International Humanitarian Law (IHL)**, also known as the laws of war, is a set of rules that seek to limit the effects of armed conflict. The most important instruments are the **Geneva Conventions** (1949) and their Additional Protocols.

Key principles of IHL:
- **Distinction:** Parties must distinguish between combatants and civilians. Deliberate targeting of civilians is prohibited.
- **Proportionality:** The harm caused by an attack must not be excessive in relation to the military advantage gained.
- **Military necessity:** Force may only be used to the extent necessary to achieve a legitimate military objective.
- **Humane treatment:** Prisoners of war and wounded combatants must be treated humanely.

**Just War Theory** is a philosophical tradition dating back to St. Augustine and Thomas Aquinas. It establishes criteria for when going to war is morally justified (*jus ad bellum*) and how war should be conducted (*jus in bello*):

*Jus ad bellum* (right to go to war): just cause, legitimate authority, right intention, last resort, reasonable chance of success.
*Jus in bello* (conduct in war): distinction, proportionality, no use of inherently evil means.

These principles underpin modern international law and continue to shape debates about military intervention.`,
    },
    {
      id: 'se-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-7-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Apply Just War Theory to a specific military intervention (such as the NATO bombing of Serbia in 1999, the US-led invasion of Iraq in 2003, or the NATO intervention in Libya in 2011). Did the intervention meet the criteria for a "just war"? Explain your reasoning.',
        hints: ['Consider each criterion: just cause, legitimate authority, last resort, right intention, proportionality, distinction, and reasonable chance of success'],
        solution: 'Example using the NATO intervention in Libya (2011): Just cause: The Gaddafi regime was threatening to massacre civilians in Benghazi, which could be argued as a just cause under R2P. Legitimate authority: The UN Security Council passed Resolution 1973 authorising the use of force to protect civilians, giving the intervention legal backing. Last resort: Diplomatic efforts had been attempted but Gaddafi showed no willingness to stop. Right intention: The stated goal was civilian protection, though critics argue regime change was the real objective. Proportionality: This is contested; the bombing campaign went beyond strict civilian protection. Distinction: NATO used precision weapons, but civilian casualties did occur. Reasonable chance of success: The regime was overthrown, but Libya descended into chaos and civil war. Overall assessment: The intervention partially met the criteria (just cause, legitimate authority) but raises serious questions about proportionality, true intention (regime change went beyond the mandate), and the outcome, as Libya remains unstable. This illustrates the difficulty of applying Just War Theory in practice.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-7-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Explain what transitional justice means and discuss why it is important for building peace after a conflict. Give examples of different transitional justice mechanisms.',
        hints: ['Think about what happens after a war ends: how do societies deal with past atrocities and build a future together?'],
        solution: 'Transitional justice refers to the range of measures used to address legacies of mass human rights abuses in societies emerging from conflict or authoritarian rule. It is important because lasting peace requires more than just the absence of fighting; it requires accountability, recognition of victims, and reforms to prevent recurrence. Key mechanisms include: 1) Criminal trials (e.g., the Nuremberg Trials, the International Criminal Tribunal for Yugoslavia, the ICC) that hold individuals accountable for war crimes and crimes against humanity. 2) Truth commissions (e.g., South Africa\'s Truth and Reconciliation Commission) that investigate and publicly acknowledge past abuses. 3) Reparations programmes that provide compensation to victims. 4) Institutional reforms such as vetting security forces and reforming the justice system. The choice of mechanism depends on the specific context. South Africa chose truth and reconciliation over widespread prosecution, prioritising national unity. Other contexts may require criminal accountability to establish the rule of law. Effective transitional justice often involves a combination of these approaches.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-3-summary',
      type: 'text',
      content: `## Summary

In this chapter you have learned:

- Wars arise from a complex interaction of **structural**, **political**, **economic**, and **immediate** causes
- The nature of warfare has changed: **intrastate conflicts** and **asymmetric warfare** are now more common than traditional wars between states
- **International Humanitarian Law** (the Geneva Conventions) and **Just War Theory** provide frameworks for regulating the use of force
- The **Responsibility to Protect (R2P)** represents a shift in thinking about sovereignty and intervention
- **Transitional justice** is essential for building lasting peace after conflict

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Just War Theory | Philosophical criteria for when force is morally justified |
| Geneva Conventions | International rules limiting the effects of armed conflict |
| Asymmetric warfare | Conflict between parties of unequal military strength |
| R2P | International responsibility to protect populations from mass atrocities |
| Transitional justice | Measures to address past abuses and build post-conflict peace |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-7-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'The use of armed drones has become increasingly common in modern warfare. Discuss the ethical and legal issues raised by drone warfare, with reference to international humanitarian law and Just War Theory.',
        hints: ['Consider issues such as accountability, civilian casualties, the lowered threshold for using force, and the principle of distinction'],
        solution: 'Drone warfare raises several significant ethical and legal concerns: 1) Distinction: Drone strikes in countries like Pakistan, Yemen, and Somalia have killed civilians alongside targeted individuals. "Signature strikes" target people based on patterns of behaviour rather than confirmed identity, which challenges the principle of distinction. 2) Proportionality: While drones can be more precise than conventional bombing, the cumulative toll on civilian communities raises proportionality concerns. 3) Accountability: The use of drones by intelligence agencies (like the CIA) rather than the military raises questions about oversight and legal accountability. 4) Lowered threshold: Because drones involve no risk to the attacking side\'s soldiers, they may lower the political and psychological threshold for using lethal force. 5) Sovereignty: Drone strikes in countries that have not consented violate state sovereignty. 6) Psychological impact: Communities living under constant drone surveillance suffer severe psychological harm ("living under drones"). Under Just War Theory, the "right intention" and "last resort" criteria are questionable when drones are used for targeted killings far from any battlefield.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-7-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Choose a current or recent armed conflict and analyse its causes using the categories discussed in this chapter (structural, political, economic, and immediate triggers). Write a structured analysis of 300-500 words.',
        hints: ['Select a conflict you are familiar with and try to identify factors at each level of analysis'],
        solution: 'Example using the conflict in Syria (2011-present): Structural causes: Syria was a multi-ethnic and multi-religious state governed by an authoritarian minority regime (Alawite-dominated). Decades of one-party rule by the Ba\'ath Party created deep structural grievances. The state failed to provide economic opportunities for a growing young population. Political causes: The Assad regime suppressed all political opposition, used security forces to intimidate citizens, and refused to implement meaningful reforms. The 2011 Arab Spring inspired demands for democratic change. Economic causes: Years of drought had devastated agriculture, driving rural populations into cities. Economic liberalisation benefited a small elite connected to the regime while poverty increased. Youth unemployment was high. Immediate triggers: In March 2011, security forces arrested and tortured teenagers who had written anti-government graffiti in Daraa. Protests demanding their release were met with lethal force, sparking wider demonstrations. The regime\'s violent response to peaceful protests radicalised the opposition and turned demonstrations into armed rebellion. The conflict was then escalated by foreign intervention (Russia, Iran, Turkey, and the US), the rise of ISIS, and the fragmentation of the opposition into numerous armed groups. This analysis shows how multiple factors at different levels interact to produce armed conflict.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Chapter 7.4: Global Security Challenges
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_7_4: TextbookChapter = {
  id: 'samf-engelsk-7-4',
  courseId: 'samf-engelsk',
  chapterNumber: '7.4',
  title: 'Global Security Challenges',
  description: 'An examination of the most pressing security threats facing the world today, from terrorism and nuclear proliferation to climate change and cyber warfare. This chapter explores how the concept of security has expanded beyond traditional military threats.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analyse contemporary global security challenges and how they affect states and individuals',
    'discuss the relationship between traditional and non-traditional security threats in the modern world',
  ],
  keyTerms: [
    { term: 'Human security', definition: 'A concept that broadens security beyond military threats to include economic, food, health, environmental, personal, community, and political dimensions' },
    { term: 'Terrorism', definition: 'The use of violence against civilians to create fear and achieve political, religious, or ideological objectives' },
    { term: 'Nuclear proliferation', definition: 'The spread of nuclear weapons and weapons technology to states or non-state actors that do not currently possess them' },
    { term: 'Cyber warfare', definition: 'The use of digital attacks by states or non-state actors to disrupt, damage, or destroy critical infrastructure and information systems' },
    { term: 'Climate security', definition: 'The recognition that climate change poses threats to human survival, state stability, and international peace' },
  ],
  content: [
    {
      id: 'se-7-4-intro',
      type: 'text',
      content: `## Global Security Challenges in the 21st Century

For much of the twentieth century, "security" in international relations meant primarily military security: the protection of states from external armed attack. The Cold War, with its nuclear arms race and superpower rivalry, exemplified this traditional understanding of security.

In recent decades, however, the concept of security has expanded significantly. Scholars and policymakers increasingly recognise that threats to human well-being come from many sources beyond military attack. Terrorism, climate change, pandemics, cyber-attacks, organised crime, and resource scarcity all pose serious security challenges that do not respect national borders.

This broader understanding is captured in the concept of **human security**, which shifts the focus from the security of states to the security of individuals. The United Nations Development Programme introduced this concept in 1994, identifying seven dimensions of human security: economic, food, health, environmental, personal, community, and political. This chapter examines some of the most pressing global security challenges of our time.`,
    },
    {
      id: 'se-7-4-def-1',
      type: 'definition',
      title: 'Terrorism',
      content: `**Terrorism** is generally defined as the deliberate use of violence against civilians or non-combatants to create fear and achieve political, religious, or ideological objectives. Key characteristics include:

- **Targeting civilians:** Terrorists deliberately attack civilian targets to maximise fear and media attention
- **Political motivation:** Unlike ordinary crime, terrorism is driven by political, religious, or ideological goals
- **Communication:** Terrorist acts are intended to send a message to a wider audience beyond the immediate victims
- **Non-state actors:** While states can sponsor terrorism, most terrorist organisations are non-state groups

**Types of terrorism:**
- **Religiously motivated:** e.g., al-Qaeda, ISIS (Islamic State)
- **Ethno-nationalist:** e.g., ETA (Basque separatists), PKK (Kurdish separatists)
- **Far-right extremism:** e.g., the 2011 attacks in Norway, white supremacist violence
- **Far-left extremism:** e.g., Red Army Faction (historical)

It is important to note that "terrorism" is a contested term. The saying "one person's terrorist is another person's freedom fighter" reflects the fact that the label is often applied selectively for political purposes. International law still lacks a universally agreed definition.`,
    },
    {
      id: 'se-7-4-example',
      type: 'text',
      content: `### The War on Terror: Consequences and Debates

The attacks of September 11, 2001, in which al-Qaeda terrorists killed nearly 3,000 people in the United States, fundamentally changed the global security landscape. The US response, known as the "War on Terror," included:

- The invasion of Afghanistan (2001) to overthrow the Taliban regime that harboured al-Qaeda
- The invasion of Iraq (2003), justified partly by claims of weapons of mass destruction (which were never found)
- Expanded surveillance programmes domestically and internationally
- The use of drone strikes in Pakistan, Yemen, and other countries
- The detention centre at Guantanamo Bay, where suspects were held without trial

The War on Terror raised profound questions about the balance between security and civil liberties, the effectiveness of military responses to terrorism, and the consequences of intervention. Critics argue that the invasions of Afghanistan and Iraq created more instability and radicalisation than they prevented. Supporters argue that aggressive action was necessary to disrupt terrorist networks and prevent further attacks.

Twenty years later, the debate continues. The US withdrawal from Afghanistan in 2021 and the Taliban's return to power raised questions about whether two decades of military intervention achieved lasting results.`,
    },
    {
      id: 'se-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-7-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What does the concept of "human security" emphasise compared to traditional security?',
        options: [
          { id: 'a', text: 'The need for larger military budgets', isCorrect: false },
          { id: 'b', text: 'The security of individuals rather than just states, including non-military threats', isCorrect: true },
          { id: 'c', text: 'That only nuclear weapons pose real security threats', isCorrect: false },
          { id: 'd', text: 'That security is exclusively a national government responsibility', isCorrect: false },
        ],
        solution: 'Human security shifts the focus from the traditional emphasis on the security of states (territorial integrity, military defence) to the security of individuals. It recognises that people can be threatened by many things beyond military attack, including poverty, disease, environmental degradation, and political repression. The concept, introduced by the UNDP in 1994, identifies seven dimensions: economic, food, health, environmental, personal, community, and political security. This broader understanding acknowledges that a person living in a country at peace can still be deeply insecure if they lack food, healthcare, or basic rights.',
      },
    },
    {
      id: 'se-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-7-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Why is it difficult to agree on a universal definition of terrorism?',
        options: [
          { id: 'a', text: 'Because terrorism does not actually exist as a real phenomenon', isCorrect: false },
          { id: 'b', text: 'Because the label is politically contested and applied selectively depending on perspective', isCorrect: true },
          { id: 'c', text: 'Because only the United States has experienced terrorist attacks', isCorrect: false },
          { id: 'd', text: 'Because international law forbids defining terrorism', isCorrect: false },
        ],
        solution: 'Defining terrorism is difficult because the term is inherently political. Groups that one government calls "terrorists" may be viewed by others as "freedom fighters" or "resistance movements." For example, the African National Congress was labelled a terrorist organisation during apartheid, but its members are now celebrated as heroes of liberation. Similarly, one state\'s "counter-terrorism operation" may be seen by others as oppression or state terrorism. States have different interests in how terrorism is defined: some want a broad definition that covers violent opposition to governments, while others resist definitions that might apply to their own military actions. This political dimension has prevented the United Nations from adopting a single, universally accepted definition.',
      },
    },
    {
      id: 'se-7-4-def-2',
      type: 'definition',
      title: 'Emerging Security Threats',
      content: `Beyond terrorism, several other security challenges have risen to prominence in the 21st century:

**Nuclear proliferation:** The spread of nuclear weapons remains one of the gravest threats to global security. Nine states currently possess nuclear weapons. The Treaty on the Non-Proliferation of Nuclear Weapons (NPT) aims to prevent spread, but challenges persist from states like North Korea and concerns about Iran's nuclear programme.

**Cyber warfare:** States and non-state actors increasingly use digital attacks to disrupt critical infrastructure, steal secrets, and spread disinformation. Cyber-attacks on power grids, financial systems, and elections represent a new frontier in security. Attribution (identifying who carried out an attack) is extremely difficult in cyberspace.

**Climate change and environmental security:** Climate change is increasingly recognised as a "threat multiplier" that exacerbates existing security risks. Rising sea levels, extreme weather events, water scarcity, and competition for shrinking arable land can drive displacement, resource conflicts, and state instability. The Sahel region in Africa is a prime example where climate stress has contributed to conflict.

**Pandemic threats:** COVID-19 demonstrated how quickly a health crisis can become a global security challenge, disrupting economies, straining governments, and deepening social divisions.

**Disinformation and hybrid threats:** The deliberate spread of false information to undermine democratic institutions, elections, and public trust represents a growing security concern that blurs the line between war and peace.`,
    },
    {
      id: 'se-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-7-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Explain how climate change can be considered a security threat. Use specific examples to illustrate the connection between environmental change and conflict or instability.',
        hints: ['Think about how resource scarcity, displacement, and competition for land and water can contribute to social tensions and conflict'],
        solution: 'Climate change acts as a "threat multiplier" that worsens existing vulnerabilities. Specific examples: 1) The Sahel region: Desertification and declining rainfall have reduced agricultural productivity, leading to competition between farmers and herders that has fuelled violence in countries like Mali, Nigeria, and Burkina Faso. 2) Syria: A severe drought from 2006-2010, worsened by climate change, devastated agriculture and drove 1.5 million people from rural areas to already strained cities, contributing to the social tensions that erupted in the 2011 uprising. 3) Pacific island nations: Rising sea levels threaten the very existence of states like Tuvalu and Kiribati, potentially creating "climate refugees" and raising unprecedented questions about sovereignty and statehood. 4) The Arctic: Melting ice is opening new shipping routes and access to resources, increasing geopolitical competition between Russia, the US, Canada, and other Arctic states. Climate change affects food security, water availability, displacement patterns, and resource competition, all of which can destabilise societies and trigger or worsen conflicts.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-7-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Discuss why cyber warfare is considered one of the most significant emerging security threats. What makes it different from traditional forms of warfare?',
        hints: ['Consider the issues of attribution, the blurring of peace and war, the vulnerability of critical infrastructure, and the role of non-state actors'],
        solution: 'Cyber warfare differs from traditional warfare in several important ways: 1) Attribution: It is extremely difficult to prove who is behind a cyber-attack. States can use proxy hackers, route attacks through third countries, and disguise their involvement. This makes deterrence and retaliation problematic. 2) Blurred boundaries: Cyber operations exist in a grey zone between peace and war. Is a cyber-attack on a power grid an act of war? At what point does cyber espionage become aggression? There is no clear international legal framework. 3) Low cost, high impact: Relatively small groups or even individuals can cause enormous damage. Critical infrastructure (power grids, water systems, hospitals, financial systems) is increasingly connected to the internet and vulnerable. 4) Speed and scale: Cyber-attacks can be launched instantly, across any distance, with global reach. 5) No physical risk to attackers: Unlike conventional military operations, cyber-attacks can be conducted without any physical danger to the attacking side. 6) Disinformation: Cyber tools are used not just for destruction but for manipulation, undermining democratic processes and public trust. Examples include the Russian cyber-attacks on Estonia (2007), the Stuxnet virus targeting Iran\'s nuclear programme, and election interference operations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-4-summary',
      type: 'text',
      content: `## Summary

In this chapter you have learned:

- The concept of security has expanded from a narrow military focus to a broader understanding that includes **human security**
- **Terrorism** remains a significant threat, but defining it is politically contested
- The **War on Terror** raised fundamental questions about the effectiveness of military responses and the balance between security and civil liberties
- **Emerging threats** such as cyber warfare, climate change, nuclear proliferation, and pandemics challenge traditional approaches to security
- Many modern security threats are **transnational** and require international cooperation to address

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Human security | Broadened concept focusing on individual well-being, not just state defence |
| Terrorism | Use of violence against civilians for political/ideological goals |
| Cyber warfare | Digital attacks on infrastructure and information systems |
| Climate security | Recognition that environmental change threatens stability and peace |
| Nuclear proliferation | The spread of nuclear weapons to new states or actors |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-7-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'The attacks in Norway on 22 July 2011 were carried out by a far-right extremist. Discuss what this event reveals about the nature of terrorism and the security challenges posed by domestic extremism. How did Norway respond, and what lessons can be drawn?',
        hints: ['Consider the type of threat, the challenges of preventing lone-actor attacks, and Norway\'s response in terms of values and security measures'],
        solution: 'The 22 July attacks illustrate several important points about modern terrorism: 1) Terrorism is not exclusively associated with any one ideology. The attacker was motivated by far-right, anti-Islamic, and anti-multiculturalist views, challenging the post-9/11 focus on Islamist terrorism. 2) Lone-actor terrorism is extremely difficult to detect and prevent. The attacker planned his attacks over years while appearing to live a normal life. Intelligence agencies are better at monitoring organised groups than isolated individuals. 3) Norway\'s response was distinctive: Prime Minister Jens Stoltenberg called for "more democracy, more openness, and more humanity" rather than a security crackdown. The legal process followed normal democratic procedures, with the attacker receiving a fair trial. This response was widely admired but also debated, with some arguing that security measures were inadequate. 4) The attacks exposed weaknesses in Norway\'s emergency response and led to security reforms, including improved police response times and better coordination between agencies. Lessons include: the need to take far-right extremism as seriously as other forms of terrorism, the importance of monitoring online radicalisation, and the value of responding to terrorism in ways that uphold democratic values rather than undermining them.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-7-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Write a well-structured essay (300-500 words) in which you rank what you consider the three most serious global security threats today. Justify your ranking with evidence and reasoning.',
        hints: ['Consider the likelihood of each threat, its potential impact, and how well-prepared the international community is to address it'],
        solution: 'A strong response should identify three threats and provide clear reasoning for the ranking. Example ranking: 1) Climate change: The most serious because it is already happening, its effects are irreversible on human timescales, it affects every country and every dimension of security (food, water, displacement, conflict), and the international response remains inadequate. 2) Nuclear weapons/proliferation: An existential threat because even a limited nuclear exchange could cause catastrophic and potentially civilisation-ending consequences. The risk is heightened by the deterioration of arms control agreements, North Korea\'s nuclear programme, and the potential for miscalculation. 3) Cyber warfare and disinformation: A rapidly growing threat that undermines critical infrastructure, democratic processes, and social cohesion, and for which international norms and defences are still underdeveloped. The essay should demonstrate understanding of each threat, provide specific evidence, and explain the reasoning behind the ranking (e.g., likelihood vs. severity, short-term vs. long-term).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Chapter 7.5: Norway's Role in International Affairs
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_7_5: TextbookChapter = {
  id: 'samf-engelsk-7-5',
  courseId: 'samf-engelsk',
  chapterNumber: '7.5',
  title: "Norway's Role in International Affairs",
  description: "An analysis of Norway's foreign policy, its engagement in international organisations, peace diplomacy, development aid, and security policy. This chapter examines how a small country seeks to influence global affairs and the tensions in its international role.",
  estimatedMinutes: 23,
  competenceGoals: [
    "analyse Norway's role in international organisations and its contributions to peace, security, and development",
    "discuss tensions and dilemmas in Norwegian foreign policy",
  ],
  keyTerms: [
    { term: 'Humanitarian superpower', definition: 'A term used to describe Norway\'s outsized role in international aid, peace diplomacy, and humanitarian engagement relative to its small population' },
    { term: 'NATO membership', definition: 'Norway has been a founding member of NATO since 1949, making collective defence a cornerstone of its security policy' },
    { term: 'EEA Agreement', definition: 'The European Economic Area agreement gives Norway access to the EU\'s single market while remaining outside the EU as a political union' },
    { term: 'Government Pension Fund Global', definition: 'Norway\'s sovereign wealth fund (commonly called the Oil Fund), one of the world\'s largest, funded by petroleum revenues and subject to ethical investment guidelines' },
    { term: 'High North policy', definition: 'Norway\'s strategic focus on the Arctic region, where it manages relations with Russia, environmental concerns, and resource interests' },
  ],
  content: [
    {
      id: 'se-7-5-intro',
      type: 'text',
      content: `## Norway's Role in International Affairs

Norway is a small country by global standards, with a population of just over five million people. Yet it punches well above its weight in international affairs. Norway is one of the world's largest providers of development aid (as a percentage of gross national income), a prominent peace mediator, a founding member of NATO, and home to the Nobel Peace Prize.

This outsized international role is rooted in several factors: Norway's petroleum wealth provides the resources for an active foreign policy; its perceived neutrality and lack of colonial history make it an attractive mediator; and a strong tradition of internationalism and solidarity shapes public support for global engagement.

However, Norway's international role also contains significant tensions and contradictions. It promotes peace and human rights while being a major exporter of arms and fossil fuels. It champions multilateralism while remaining outside the European Union. It values its close alliance with the United States while also advocating for a rules-based international order that sometimes conflicts with US policy. Understanding these tensions is essential for a nuanced picture of Norway's place in the world.`,
    },
    {
      id: 'se-7-5-def-1',
      type: 'definition',
      title: "Norway's International Engagement",
      content: `Norway's international engagement can be understood through several key pillars:

**Peace diplomacy:** Norway has facilitated peace processes in the Middle East (Oslo Accords), Sri Lanka, Colombia, the Philippines, and other conflict zones. The Norwegian government, along with organisations like the Norwegian Refugee Council and the Norwegian Church Aid, maintains a substantial peace and reconciliation infrastructure.

**Development aid:** Norway consistently gives more than 1% of its GNI in official development assistance, one of the highest rates in the world. Norwegian aid focuses on education, health, climate, and humanitarian response.

**Multilateralism:** Norway is a strong supporter of the United Nations and the rules-based international order. It regularly seeks seats on the UN Security Council and contributes to UN peacekeeping operations.

**NATO and security policy:** As a founding member of NATO, Norway relies on the alliance for its core defence against potential threats, particularly from Russia, with which it shares a border in the Arctic.

**Arctic/High North policy:** The Arctic is a priority area where Norway balances resource exploitation, environmental protection, relations with Russia, and the interests of indigenous Sami populations.`,
    },
    {
      id: 'se-7-5-example',
      type: 'text',
      content: `### The Oil Fund: Wealth and Responsibility

Norway's Government Pension Fund Global (commonly called the Oil Fund) is one of the world's largest sovereign wealth funds, worth over 17 trillion Norwegian kroner. It was established to manage Norway's petroleum revenues for the benefit of current and future generations.

The fund invests globally in stocks, bonds, and real estate, and is subject to **ethical guidelines** that prohibit investment in companies involved in certain activities:
- Production of certain weapons (cluster munitions, nuclear weapons)
- Serious environmental damage
- Severe human rights violations
- Gross corruption

The ethical guidelines have led to the exclusion of numerous companies, making the fund a significant instrument of Norway's values-based foreign policy. The fund's decisions attract international attention because of its size and can influence corporate behaviour globally.

However, the Oil Fund also highlights contradictions in Norway's international role. Norway's wealth is built on fossil fuels, which contribute to climate change. Critics argue that a country that profits from oil and gas cannot credibly claim leadership on climate issues. The debate over the fund's investments in fossil fuel companies reflects this tension.`,
    },
    {
      id: 'se-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-7-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: "Which of the following is NOT one of the key pillars of Norway's international engagement?",
        options: [
          { id: 'a', text: 'Peace diplomacy and mediation in international conflicts', isCorrect: false },
          { id: 'b', text: 'Full membership in the European Union', isCorrect: true },
          { id: 'c', text: 'Founding membership in NATO', isCorrect: false },
          { id: 'd', text: 'Significant development aid as a percentage of GNI', isCorrect: false },
        ],
        solution: "Norway is not a member of the European Union. Norwegians voted against EU membership in referendums in 1972 and 1994. Instead, Norway has access to the EU's single market through the EEA (European Economic Area) Agreement, which requires Norway to adopt most EU single-market regulations without having a vote in EU decision-making. All the other options are genuine pillars of Norway's international engagement: peace diplomacy (Oslo Accords, Colombia), NATO membership (founding member since 1949), and development aid (consistently above 1% of GNI).",
      },
    },
    {
      id: 'se-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-7-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: "What is the main contradiction critics identify in Norway's role as both an oil producer and a climate advocate?",
        options: [
          { id: 'a', text: 'Norway does not invest its oil revenues wisely', isCorrect: false },
          { id: 'b', text: 'Norway refuses to participate in any international climate agreements', isCorrect: false },
          { id: 'c', text: "Norway's wealth depends on fossil fuels that contribute to climate change, undermining its credibility as a climate leader", isCorrect: true },
          { id: 'd', text: "Norway's oil production is too small to have any environmental impact", isCorrect: false },
        ],
        solution: "The central contradiction is that Norway positions itself as a leader on climate issues, investing heavily in renewable energy and electric vehicles domestically, while simultaneously being one of Europe's largest producers and exporters of oil and gas. The wealth that funds Norway's generous development aid and climate initiatives comes from the very fossil fuels that drive climate change. Critics argue this is hypocritical: Norway profits from selling hydrocarbons while urging other countries to cut emissions. Defenders respond that Norwegian gas displaces coal in Europe (which is worse for the climate) and that Norway is investing in the green transition. This tension is one of the most debated aspects of Norwegian foreign policy.",
      },
    },
    {
      id: 'se-7-5-def-2',
      type: 'definition',
      title: 'Dilemmas in Norwegian Foreign Policy',
      content: `Norway's international role involves several significant dilemmas and tensions:

**Peace nation vs. arms exporter:** Norway promotes peace and conflict resolution, but it is also a significant exporter of military equipment. Norwegian weapons have been found in conflict zones, raising questions about the consistency of its values-based foreign policy.

**Climate leader vs. oil producer:** As discussed, Norway's economic dependence on petroleum conflicts with its climate ambitions. The debate over opening new oil fields in the Arctic illustrates this tension.

**Multilateralism vs. national interests:** Norway supports a rules-based international order, but occasionally acts in its own interest in ways that conflict with this principle, for example in fisheries disputes or when managing its petroleum resources.

**Alliance loyalty vs. independent voice:** Norway's NATO membership and close relationship with the United States sometimes conflict with its desire to act as an independent voice on issues like nuclear disarmament, Middle East policy, and international law. The tension between being a loyal ally and being a principled actor is a recurring theme.

**EEA Agreement:** Norway adopts most EU regulations through the EEA Agreement without having a voice in EU decision-making, leading to debates about democratic deficit and sovereignty.

These dilemmas are not unique to Norway, but they are particularly visible because of the contrast between Norway's idealistic self-image and the pragmatic compromises that all states must make.`,
    },
    {
      id: 'se-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-7-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Discuss the term "humanitarian superpower" as applied to Norway. To what extent is this label justified, and what are its limitations?',
        hints: ['Consider Norway\'s achievements in aid, peace diplomacy, and multilateralism, but also the contradictions in its international role'],
        solution: 'The "humanitarian superpower" label is partly justified: Norway gives more in development aid (as a percentage of GNI) than almost any other country, has facilitated numerous peace processes, contributes to UN peacekeeping, hosts the Nobel Peace Prize, and actively promotes human rights and international law. For a country of five million people, this is an extraordinary level of engagement. However, the label has significant limitations: 1) Norway is a major oil and gas exporter, contributing to climate change while preaching climate action. 2) Norway exports significant amounts of military equipment, including to countries involved in conflicts. 3) Norwegian peace efforts have had mixed results (the Oslo Accords are widely seen as a failure, and the Sri Lanka process collapsed). 4) The "superpower" framing can reflect a degree of national self-congratulation that obscures these contradictions. 5) Norway\'s generous aid may also serve strategic interests (influence, access, prestige) rather than being purely altruistic. A balanced assessment recognises genuine achievements while acknowledging that Norway, like all states, pursues a mix of ideals and interests.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-7-5-ex-4',
        number: '4',
        type: 'classic',
        task: "Norway is not a member of the EU but is bound by most EU regulations through the EEA Agreement. Discuss the advantages and disadvantages of this arrangement for Norway's role in international affairs.",
        hints: ['Consider issues of sovereignty, democratic participation, market access, and foreign policy flexibility'],
        solution: "Advantages: 1) Access to the EU's single market, which is vital for Norwegian exports (especially fish and energy). 2) Freedom to conduct an independent foreign policy, particularly in areas like fisheries, Arctic policy, and relations with non-EU states. 3) Ability to maintain control over agriculture and fisheries, which are sensitive domestic issues. 4) No obligation to adopt the euro or participate in EU political integration. Disadvantages: 1) Democratic deficit: Norway adopts approximately 75% of EU legislation without having a vote in EU institutions. Norwegian citizens have no representation in the European Parliament. 2) Limited influence: Norway cannot shape the rules it must follow, which critics call 'fax democracy' (receiving rules by fax from Brussels). 3) Financial contributions: Norway pays substantial sums to the EU through EEA and Norway Grants without having a voice in how the EU budget is spent. 4) Foreign policy limitations: When the EU acts as a bloc in international negotiations, Norway is on the outside and must negotiate separately. The EEA arrangement reflects a pragmatic compromise between the desire for market access and the reluctance to give up sovereignty, but it involves real trade-offs.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-5-summary',
      type: 'text',
      content: `## Summary

In this chapter you have learned:

- Norway plays an **outsized role** in international affairs for a small country, driven by petroleum wealth, a tradition of internationalism, and a perceived neutrality
- Key pillars of Norway's engagement include **peace diplomacy**, **development aid**, **NATO membership**, **multilateralism**, and **Arctic/High North policy**
- The **Government Pension Fund Global** (Oil Fund) is both an instrument of values-based policy and a symbol of Norway's contradictions
- Significant **dilemmas** include the tension between peace promotion and arms exports, climate leadership and oil production, and alliance loyalty and independent voice
- The **EEA Agreement** gives Norway access to the EU single market but raises questions about democratic participation

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Humanitarian superpower | Norway's outsized role in aid, peace, and humanitarian engagement |
| NATO membership | Cornerstone of Norwegian security policy since 1949 |
| EEA Agreement | Market access to the EU without full membership |
| Oil Fund | Sovereign wealth fund with ethical investment guidelines |
| High North policy | Strategic focus on the Arctic and relations with Russia |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-7-5-ex-5',
        number: '5',
        type: 'classic',
        task: "Norway shares an Arctic border with Russia. Discuss the challenges and opportunities of Norway's relationship with Russia, particularly in the High North. How does Norway balance cooperation and deterrence?",
        hints: ['Consider the history of the relationship, the Barents cooperation, NATO membership, fisheries management, and how events like Russia\'s actions in Ukraine have affected the relationship'],
        solution: "Norway's relationship with Russia in the High North has historically combined cooperation and caution. Opportunities and cooperation: 1) The Barents cooperation (established 1993) fostered cross-border ties in areas like environmental protection, people-to-people contacts, and nuclear safety. 2) The 2010 maritime boundary agreement resolved a 40-year dispute over the Barents Sea, demonstrating that diplomatic solutions were possible. 3) Joint fisheries management in the Barents Sea has been a success story of practical cooperation. 4) Economic ties, particularly in the energy sector. Challenges and deterrence: 1) Russia's invasion of Crimea (2014) and full-scale invasion of Ukraine (2022) fundamentally changed the security environment. Norway increased defence spending and NATO presence in the north. 2) Russia has modernised its Northern Fleet on the Kola Peninsula, close to the Norwegian border. 3) Hybrid threats including GPS jamming, submarine activity, and intelligence operations. 4) The Barents cooperation was largely suspended after 2022. Norway's approach has been to maintain a firm deterrence through NATO while keeping communication channels open to reduce the risk of miscalculation. This balancing act has become more difficult as relations have deteriorated, and Norway must navigate between being a loyal NATO ally and managing a direct border relationship with a nuclear-armed neighbour.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-7-5-ex-6',
        number: '6',
        type: 'classic',
        task: "Imagine you are advising the Norwegian government on its foreign policy priorities for the next decade. Write a policy brief (300-500 words) identifying what you consider the three most important priorities and explaining why. Consider Norway's values, interests, and the changing international landscape.",
        hints: ['Think about the global challenges discussed in this section (security, climate, multilateralism) and how they specifically affect Norway'],
        solution: "A strong response should identify three priorities with clear reasoning. Example: 1) Climate transition and energy policy: Norway must plan for a future beyond oil and gas while managing the transition responsibly. This involves investing in renewable energy, green technology, and using the Oil Fund strategically. It also means addressing the credibility gap between being an oil producer and a climate advocate. 2) European security and NATO: Russia's invasion of Ukraine has made European security the most urgent priority. Norway should increase defence spending, strengthen NATO's northern flank, invest in Arctic military capabilities, and maintain close ties with Nordic and European allies. Nordic NATO membership (with Finland and Sweden) creates new opportunities for defence cooperation. 3) Reforming multilateralism: The rules-based international order is under strain. Norway should work to reform international institutions (particularly the UN Security Council), champion international law, and build coalitions of like-minded states to defend multilateral cooperation against rising unilateralism. The brief should demonstrate awareness of trade-offs (e.g., increased military spending vs. development aid budgets) and the need to align values and interests.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Export all chapters in Section 7
// ============================================================================

export const SAMF_ENGELSK_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMF_ENGELSK_7_1,
  CHAPTER_SAMF_ENGELSK_7_2,
  CHAPTER_SAMF_ENGELSK_7_3,
  CHAPTER_SAMF_ENGELSK_7_4,
  CHAPTER_SAMF_ENGELSK_7_5,
];
