/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivå 2 - Kapittel 14-16 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 14: Histoire et politique (14.1-14.4)
 * - Kapittel 15: Communication orale avancée (15.1-15.4)
 * - Kapittel 16: Révision avancée et examens (16.1-16.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 14.1: L'histoire de France
// ============================================================================

export const CHAPTER_FRANSK_2_14_1: TextbookChapter = {
  id: 'fransk-2-14-1',
  courseId: 'fransk-2',
  chapterNumber: '14.1',
  title: "L'histoire de France",
  subtitle: 'Viktige perioder i fransk historie',
  description: 'Lær om nøkkelperioder i fransk historie: revolusjonen, Napoleon, verdenskrigene og det moderne Frankrike. Utvid ordforrådet knyttet til historie og politikk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne fortelle om viktige hendelser i fransk historie på fransk',
    'Forstå og bruke historisk vokabular',
    'Kunne diskutere historiske perioder og deres betydning',
  ],
  content: [
    {
      id: 'fransk-2-14-1-intro',
      type: 'text',
      content: `## L'histoire de France – Et overblikk\n\nFrankrike har en rik og dramatisk historie som har formet hele Europa. Fra den franske revolusjonen i 1789 til de to verdenskrigene og oppbyggingen av det moderne Frankrike – historien er full av vendepunkter som fortsatt påvirker det franske samfunnet i dag.\n\nI dette kapittelet skal vi lære om de viktigste periodene i fransk historie, og vi skal utvide det franske ordforrådet knyttet til historie, politikk og samfunn.\n\n**Viktige historiske epoker:**\n- La Révolution française (1789)\n- L'Empire napoléonien (1804–1815)\n- La Première Guerre mondiale (1914–1918)\n- La Seconde Guerre mondiale (1939–1945)\n- La Cinquième République (1958–)`
    },
    {
      id: 'fransk-2-14-1-def-1',
      type: 'definition',
      title: 'Historisk vokabular',
      content: `**La Révolution** – Revolusjonen. En grunnleggende omveltning av et politisk system.\n\n**Le roi / la reine** – Kongen / dronningen.\n\n**La monarchie** – Monarkiet. Styreform med konge eller dronning.\n\n**La république** – Republikken. Styreform der makten ligger hos folket.\n\n**La guerre** – Krigen.\n\n**La paix** – Freden.\n\n**Le siècle** – Århundret.`
    },
    {
      id: 'fransk-2-14-1-vocab-table',
      type: 'text',
      content: `## Ordforråd: L'histoire\n\n| Fransk | Norsk | Eksempel |\n|--------|-------|----------|\n| la révolution | revolusjonen | La Révolution française a changé le monde. |\n| le roi | kongen | Le roi Louis XVI a été exécuté. |\n| la reine | dronningen | La reine Marie-Antoinette était autrichienne. |\n| l'empereur (m) | keiseren | Napoléon était empereur des Français. |\n| la bataille | slaget | La bataille de Waterloo a eu lieu en 1815. |\n| la liberté | friheten | Liberté, égalité, fraternité. |\n| l'égalité (f) | likheten | L'égalité est une valeur républicaine. |\n| la fraternité | brorskapet | La fraternité unit les citoyens. |\n| le peuple | folket | Le peuple français s'est révolté. |\n| la victoire | seieren | La victoire des Alliés en 1945. |`
    },
    {
      id: 'fransk-2-14-1-example-1',
      type: 'example',
      title: 'Eksempel 1: La Révolution française',
      problem: `Les denne teksten om den franske revolusjonen og svar på spørsmålene:\n\n*En 1789, le peuple français s'est révolté contre le roi Louis XVI. Les Français étaient fatigués de la monarchie absolue et des inégalités sociales. Le 14 juillet 1789, les Parisiens ont pris la Bastille, une prison qui symbolisait le pouvoir royal. La Révolution a introduit les idées de liberté, d'égalité et de fraternité. En 1792, la France est devenue une république.*\n\n1. Quand est-ce que la Révolution a commencé?\n2. Pourquoi le peuple s'est-il révolté?\n3. Qu'est-ce qui s'est passé le 14 juillet 1789?`,
      solution: `1. La Révolution a commencé en 1789.\n2. Le peuple s'est révolté parce qu'il était fatigué de la monarchie absolue et des inégalités sociales.\n3. Le 14 juillet 1789, les Parisiens ont pris la Bastille.\n\n**Nøkkelord:** *se révolter* (gjøre opprør), *les inégalités* (ulikhetene), *le pouvoir royal* (kongemakten).`
    },
    {
      id: 'fransk-2-14-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Napoléon Bonaparte',
      problem: `Oversett disse setningene til fransk:\n\n1. Napoleon ble keiser i 1804.\n2. Han vant mange slag i Europa.\n3. Han tapte slaget ved Waterloo i 1815.`,
      solution: `1. Napoléon est devenu empereur en 1804.\n2. Il a gagné beaucoup de batailles en Europe.\n3. Il a perdu la bataille de Waterloo en 1815.\n\n**Merk:** Vi bruker *passé composé* for å beskrive avsluttede historiske hendelser: *est devenu* (ble), *a gagné* (vant), *a perdu* (tapte).`
    },
    {
      id: 'fransk-2-14-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva skjedde den 14. juli 1789?',
        options: [
          { id: 'a', text: 'Napoléon est devenu empereur.', isCorrect: false },
          { id: 'b', text: 'Les Parisiens ont pris la Bastille.', isCorrect: true },
          { id: 'c', text: 'La France est entrée dans la Première Guerre mondiale.', isCorrect: false },
          { id: 'd', text: 'Le roi Louis XVI est né.', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Den 14. juli 1789 stormet pariserne Bastillen, et fengsel som symboliserte kongemakten. Denne datoen feires fortsatt som Frankrikes nasjonaldag.',
      }
    },
    {
      id: 'fransk-2-14-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «la liberté, l\'égalité, la fraternité»?',
        options: [
          { id: 'a', text: 'Krig, fred og seier', isCorrect: false },
          { id: 'b', text: 'Konge, dronning og keiser', isCorrect: false },
          { id: 'c', text: 'Frihet, likhet og brorskap', isCorrect: true },
          { id: 'd', text: 'Makt, rikdom og ære', isCorrect: false },
        ],
        solution: 'Riktig svar er C. «Liberté, égalité, fraternité» (frihet, likhet, brorskap) er Frankrikes nasjonale motto, innført under revolusjonen.',
      }
    },
    {
      id: 'fransk-2-14-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett til fransk:\n\n1. Den franske revolusjonen begynte i 1789.\n2. Folket ønsket frihet og likhet.\n3. Frankrike ble en republikk i 1792.\n4. Napoleon var en berømt keiser.',
        solution: '1. La Révolution française a commencé en 1789.\n2. Le peuple voulait la liberté et l\'égalité.\n3. La France est devenue une république en 1792.\n4. Napoléon était un empereur célèbre.',
      }
    },
    {
      id: 'fransk-2-14-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilket år tapte Napoleon slaget ved Waterloo?',
        options: [
          { id: 'a', text: '1789', isCorrect: false },
          { id: 'b', text: '1804', isCorrect: false },
          { id: 'c', text: '1815', isCorrect: true },
          { id: 'd', text: '1870', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Napoleon tapte slaget ved Waterloo i 1815, noe som markerte slutten på hans styre som keiser.',
      }
    },
    {
      id: 'fransk-2-14-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (5–7 setninger) på fransk om en viktig periode i fransk historie. Bruk minst fem av ordene fra vokabulartabellen. Du kan velge mellom revolusjonen, Napoleon-tiden eller verdenskrigene.',
        solution: 'Eksempel:\n\nLa Révolution française est une période très importante dans l\'histoire de France. En 1789, le peuple français s\'est révolté contre le roi Louis XVI. Les Français voulaient la liberté et l\'égalité pour tous les citoyens. Le 14 juillet, les Parisiens ont pris la Bastille. Après la Révolution, la France est devenue une république. Les idées de liberté, d\'égalité et de fraternité sont devenues les valeurs de la nation française. Cette victoire du peuple a changé l\'histoire de l\'Europe.',
      }
    },
    {
      id: 'fransk-2-14-1-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har vi lært om viktige perioder i fransk historie:\n\n- **La Révolution française (1789)** – Folket gjorde opprør mot kongemakten og innførte verdiene frihet, likhet og brorskap.\n- **L'Empire napoléonien (1804–1815)** – Napoleon ble keiser og erobret store deler av Europa, men tapte ved Waterloo.\n- **Les guerres mondiales** – Frankrike spilte en sentral rolle i begge verdenskrigene.\n\nVi har også lært viktige historiske ord som *la révolution*, *le roi*, *la bataille*, *la victoire* og *la liberté*.\n\n**Tips:** Bruk *passé composé* for avsluttede historiske hendelser og *imparfait* for beskrivelser av tilstander i fortiden.`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la révolution', definition: 'Revolusjonen – en grunnleggende omveltning av et politisk system' },
    { term: 'le roi / la reine', definition: 'Kongen / dronningen' },
    { term: 'l\'empereur', definition: 'Keiseren' },
    { term: 'la bataille', definition: 'Slaget' },
    { term: 'la liberté', definition: 'Friheten' },
    { term: 'le peuple', definition: 'Folket' },
    { term: 'la victoire', definition: 'Seieren' },
    { term: 'le siècle', definition: 'Århundret' },
  ],
};

// ============================================================================
// KAPITTEL 14.2: La politique française
// ============================================================================

export const CHAPTER_FRANSK_2_14_2: TextbookChapter = {
  id: 'fransk-2-14-2',
  courseId: 'fransk-2',
  chapterNumber: '14.2',
  title: 'La politique française',
  subtitle: 'Det franske politiske systemet',
  description: 'Lær om det franske politiske systemet: republikken, presidenten, nasjonalforsamlingen og politiske partier. Utvid ordforrådet for å kunne diskutere politikk på fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne beskrive det franske politiske systemet på fransk',
    'Forstå og bruke politisk vokabular',
    'Kunne sammenligne franske og norske politiske systemer',
  ],
  content: [
    {
      id: 'fransk-2-14-2-intro',
      type: 'text',
      content: `## La politique française – Det franske politiske systemet\n\nFrankrike er en republikk, og det nåværende politiske systemet kalles **la Cinquième République** (den femte republikken), grunnlagt i 1958 av Charles de Gaulle. Presidenten har stor makt sammenlignet med mange andre europeiske land.\n\nDet franske systemet er et **semi-presidentielt** system, der presidenten deler makten med statsministeren og nasjonalforsamlingen.\n\n**De viktigste politiske institusjonene:**\n- Le président de la République (presidenten)\n- Le Premier ministre (statsministeren)\n- L'Assemblée nationale (nasjonalforsamlingen)\n- Le Sénat (senatet)`
    },
    {
      id: 'fransk-2-14-2-def-1',
      type: 'definition',
      title: 'Politisk vokabular',
      content: `**La république** – Republikken. Styreform der makten ligger hos folket gjennom valgte representanter.\n\n**Le président** – Presidenten. Frankrikes statsoverhode, valgt for fem år.\n\n**Le Premier ministre** – Statsministeren. Leder regjeringen.\n\n**L'Assemblée nationale (f)** – Nasjonalforsamlingen. Parlamentets underhus med 577 representanter.\n\n**Le Sénat** – Senatet. Parlamentets overhus.\n\n**Le gouvernement** – Regjeringen.\n\n**L'élection (f)** – Valget.`
    },
    {
      id: 'fransk-2-14-2-vocab-table',
      type: 'text',
      content: `## Ordforråd: La politique\n\n| Fransk | Norsk | Eksempel |\n|--------|-------|----------|\n| le président | presidenten | Le président est élu pour cinq ans. |\n| le Premier ministre | statsministeren | Le Premier ministre dirige le gouvernement. |\n| l'Assemblée nationale (f) | nasjonalforsamlingen | Les députés siègent à l'Assemblée nationale. |\n| le Sénat | senatet | Le Sénat est le deuxième chambre du Parlement. |\n| le député | representanten | Les députés votent les lois. |\n| la loi | loven | Le Parlement vote les lois. |\n| le droit | retten/rettigheten | Le droit de vote est fondamental. |\n| l'élection (f) | valget | Les élections présidentielles ont lieu tous les cinq ans. |\n| le parti politique | det politiske partiet | Il y a plusieurs partis politiques en France. |\n| voter | å stemme | Les citoyens votent pour élire le président. |`
    },
    {
      id: 'fransk-2-14-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Le système politique français',
      problem: `Les teksten og svar på spørsmålene:\n\n*En France, le président de la République est le chef de l'État. Il est élu au suffrage universel direct pour un mandat de cinq ans. Le président nomme le Premier ministre, qui dirige le gouvernement. L'Assemblée nationale est composée de 577 députés élus par les citoyens français. Les députés votent les lois et contrôlent l'action du gouvernement.*\n\n1. Pour combien d'années le président est-il élu?\n2. Qui nomme le Premier ministre?\n3. Combien de députés y a-t-il à l'Assemblée nationale?`,
      solution: `1. Le président est élu pour cinq ans.\n2. C'est le président qui nomme le Premier ministre.\n3. Il y a 577 députés à l'Assemblée nationale.\n\n**Nøkkelord:** *élu au suffrage universel* (valgt ved allmenn stemmerett), *le mandat* (embetsperioden), *nommer* (utnevne), *les députés* (representantene).`
    },
    {
      id: 'fransk-2-14-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligning av politiske systemer',
      problem: `Fyll inn riktig ord:\n\n1. En France, le chef de l'État est le _______ .\n2. En Norvège, le chef de l'État est le _______ .\n3. Les Français élisent leurs députés à l'_______ .\n4. Les Norvégiens élisent leurs représentants au _______ .`,
      solution: `1. En France, le chef de l'État est le **président**.\n2. En Norvège, le chef de l'État est le **roi** (le roi Harald V).\n3. Les Français élisent leurs députés à l'**Assemblée nationale**.\n4. Les Norvégiens élisent leurs représentants au **Storting** (le Parlement norvégien).\n\n**Merk:** Frankrike er en republikk med president, mens Norge er et konstitusjonelt monarki med konge.`
    },
    {
      id: 'fransk-2-14-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva heter det franske parlamentets underhus?',
        options: [
          { id: 'a', text: 'Le Sénat', isCorrect: false },
          { id: 'b', text: 'Le Storting', isCorrect: false },
          { id: 'c', text: 'L\'Assemblée nationale', isCorrect: true },
          { id: 'd', text: 'Le Parlement européen', isCorrect: false },
        ],
        solution: 'Riktig svar er C. L\'Assemblée nationale er det franske parlamentets underhus med 577 folkevalgte representanter (députés).',
      }
    },
    {
      id: 'fransk-2-14-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvor lenge sitter den franske presidenten i sin embetsperiode?',
        options: [
          { id: 'a', text: 'Quatre ans (fire år)', isCorrect: false },
          { id: 'b', text: 'Cinq ans (fem år)', isCorrect: true },
          { id: 'c', text: 'Six ans (seks år)', isCorrect: false },
          { id: 'd', text: 'Sept ans (sju år)', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Den franske presidenten velges for fem år (un mandat de cinq ans). Før 2000 var mandatperioden sju år (le septennat).',
      }
    },
    {
      id: 'fransk-2-14-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett til fransk:\n\n1. Presidenten velges av folket.\n2. Nasjonalforsamlingen stemmer over lovene.\n3. Statsministeren leder regjeringen.\n4. Borgerne har stemmerett.',
        solution: '1. Le président est élu par le peuple.\n2. L\'Assemblée nationale vote les lois.\n3. Le Premier ministre dirige le gouvernement.\n4. Les citoyens ont le droit de vote.',
      }
    },
    {
      id: 'fransk-2-14-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvem utnevner den franske statsministeren?',
        options: [
          { id: 'a', text: 'L\'Assemblée nationale', isCorrect: false },
          { id: 'b', text: 'Le Sénat', isCorrect: false },
          { id: 'c', text: 'Le peuple français', isCorrect: false },
          { id: 'd', text: 'Le président de la République', isCorrect: true },
        ],
        solution: 'Riktig svar er D. Det er presidenten som utnevner statsministeren (Le président nomme le Premier ministre).',
      }
    },
    {
      id: 'fransk-2-14-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (5–7 setninger) på fransk der du sammenligner det franske og det norske politiske systemet. Bruk ord som: le président, le roi, le Parlement, l\'Assemblée nationale, élire, voter.',
        solution: 'Eksempel:\n\nLa France et la Norvège ont des systèmes politiques différents. La France est une république avec un président comme chef de l\'État. Le président français est élu par le peuple pour cinq ans. En Norvège, le chef de l\'État est le roi, mais il n\'a pas de pouvoir politique réel. Les Norvégiens élisent leurs représentants au Storting, tandis que les Français votent pour les députés de l\'Assemblée nationale. Dans les deux pays, les citoyens ont le droit de voter pour choisir leurs représentants.',
      }
    },
    {
      id: 'fransk-2-14-2-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har vi lært om det franske politiske systemet:\n\n- **La Cinquième République** – Frankrikes nåværende styreform, grunnlagt i 1958.\n- **Le président** velges for fem år og utnevner statsministeren.\n- **L'Assemblée nationale** har 577 representanter som stemmer over lovene.\n- **Le Sénat** er parlamentets overhus.\n\nVi har også lært å sammenligne det franske systemet med det norske, og vi kan nå bruke politisk vokabular som *le gouvernement*, *l'élection*, *la loi* og *le droit de vote*.`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la république', definition: 'Republikken – styreform der makten ligger hos folket' },
    { term: 'le président', definition: 'Presidenten – Frankrikes statsoverhode' },
    { term: 'le Premier ministre', definition: 'Statsministeren – leder regjeringen' },
    { term: 'l\'Assemblée nationale', definition: 'Nasjonalforsamlingen – parlamentets underhus med 577 representanter' },
    { term: 'le Sénat', definition: 'Senatet – parlamentets overhus' },
    { term: 'la loi', definition: 'Loven' },
    { term: 'l\'élection', definition: 'Valget' },
    { term: 'voter', definition: 'Å stemme' },
  ],
};

// ============================================================================
// KAPITTEL 14.3: La France et l'Europe
// ============================================================================

export const CHAPTER_FRANSK_2_14_3: TextbookChapter = {
  id: 'fransk-2-14-3',
  courseId: 'fransk-2',
  chapterNumber: '14.3',
  title: "La France et l'Europe",
  subtitle: 'Frankrike i EU og internasjonale relasjoner',
  description: 'Lær om Frankrikes rolle i EU, internasjonale relasjoner og det fransktalende verdenssamfunnet (la francophonie). Utvid ordforrådet knyttet til internasjonale relasjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne beskrive Frankrikes rolle i EU og internasjonalt samarbeid',
    'Forstå og bruke vokabular om internasjonale relasjoner',
    'Kunne diskutere forholdet mellom Frankrike og Europa',
  ],
  content: [
    {
      id: 'fransk-2-14-3-intro',
      type: 'text',
      content: `## La France et l'Europe – Frankrike og Europa\n\nFrankrike er et av grunnleggermedlemmene i EU (l'Union européenne) og har alltid spilt en sentral rolle i europeisk samarbeid. Sammen med Tyskland er Frankrike ofte sett på som «motoren» i EU.\n\nFrankrike er også en viktig aktør på den internasjonale scenen gjennom FN (l'ONU), NATO (l'OTAN) og den fransktalende verdensorganisasjonen (la Francophonie).\n\n**Viktige organisasjoner:**\n- L'Union européenne (EU)\n- L'ONU (FN)\n- L'OTAN (NATO)\n- La Francophonie (det fransktalende verdenssamfunnet)`
    },
    {
      id: 'fransk-2-14-3-def-1',
      type: 'definition',
      title: 'Internasjonalt vokabular',
      content: `**L'Union européenne (f)** – EU. Europeisk samarbeidsorganisasjon med 27 medlemsland.\n\n**Un pays membre** – Et medlemsland.\n\n**La coopération** – Samarbeid.\n\n**Les relations internationales** – Internasjonale relasjoner.\n\n**La Francophonie** – Det fransktalende verdenssamfunnet. Organisasjon for land som bruker fransk.\n\n**Un traité** – En traktat/avtale mellom land.\n\n**La diplomatie** – Diplomatiet.`
    },
    {
      id: 'fransk-2-14-3-vocab-table',
      type: 'text',
      content: `## Ordforråd: Les relations internationales\n\n| Fransk | Norsk | Eksempel |\n|--------|-------|----------|\n| l'Union européenne (f) | EU | La France est membre de l'Union européenne. |\n| le pays membre | medlemslandet | L'UE a 27 pays membres. |\n| la coopération | samarbeidet | La coopération franco-allemande est forte. |\n| le traité | traktaten | Le traité de Rome a créé la CEE en 1957. |\n| la frontière | grensen | Les frontières sont ouvertes dans l'espace Schengen. |\n| l'accord (m) | avtalen | Les pays ont signé un accord de paix. |\n| la monnaie | valutaen | L'euro est la monnaie de 20 pays européens. |\n| le commerce | handelen | Le commerce entre la France et la Norvège est important. |\n| la francophonie | det fransktalende verdenssamfunnet | La Francophonie réunit 88 États et gouvernements. |\n| le citoyen européen | EU-borgeren | Les citoyens européens peuvent voyager librement. |`
    },
    {
      id: 'fransk-2-14-3-example-1',
      type: 'example',
      title: 'Eksempel 1: La France dans l\'Union européenne',
      problem: `Les teksten og svar på spørsmålene:\n\n*La France est l'un des six pays fondateurs de l'Union européenne. En 1957, la France, l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg ont signé le traité de Rome. Aujourd'hui, l'UE compte 27 pays membres. La France utilise l'euro comme monnaie depuis 2002. Les citoyens européens peuvent voyager, travailler et étudier librement dans tous les pays de l'UE.*\n\n1. Combien de pays ont fondé l'UE?\n2. Quand le traité de Rome a-t-il été signé?\n3. Depuis quand la France utilise-t-elle l'euro?`,
      solution: `1. Six pays ont fondé l'UE.\n2. Le traité de Rome a été signé en 1957.\n3. La France utilise l'euro depuis 2002.\n\n**Nøkkelord:** *les pays fondateurs* (grunnleggerland), *signer* (signere/undertegne), *la monnaie* (valutaen), *librement* (fritt).`
    },
    {
      id: 'fransk-2-14-3-example-2',
      type: 'example',
      title: 'Eksempel 2: La Francophonie',
      problem: `Oversett disse setningene til fransk:\n\n1. Fransk snakkes i mange land i verden.\n2. Den fransktalende verdensorganisasjonen forener 88 stater.\n3. Frankrike samarbeider med mange afrikanske land.`,
      solution: `1. Le français est parlé dans beaucoup de pays dans le monde.\n2. La Francophonie réunit 88 États.\n3. La France coopère avec beaucoup de pays africains.\n\n**Merk:** Vi bruker passiv form (*est parlé* – snakkes) og verbet *coopérer avec* (samarbeide med).`
    },
    {
      id: 'fransk-2-14-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange land var med på å grunnlegge EU?',
        options: [
          { id: 'a', text: 'Quatre (4)', isCorrect: false },
          { id: 'b', text: 'Six (6)', isCorrect: true },
          { id: 'c', text: 'Douze (12)', isCorrect: false },
          { id: 'd', text: 'Vingt-sept (27)', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Seks land grunnla EU: Frankrike, Tyskland, Italia, Belgia, Nederland og Luxembourg. De signerte Roma-traktaten i 1957.',
      }
    },
    {
      id: 'fransk-2-14-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er «la Francophonie»?',
        options: [
          { id: 'a', text: 'Den franske regjeringen', isCorrect: false },
          { id: 'b', text: 'En fransk skole i utlandet', isCorrect: false },
          { id: 'c', text: 'Det fransktalende verdenssamfunnet', isCorrect: true },
          { id: 'd', text: 'Den franske ambassaden', isCorrect: false },
        ],
        solution: 'Riktig svar er C. La Francophonie er det fransktalende verdenssamfunnet – en organisasjon som forener 88 stater og regjeringer der fransk er et viktig språk.',
      }
    },
    {
      id: 'fransk-2-14-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett til fransk:\n\n1. Frankrike er et medlemsland i EU.\n2. EU-borgere kan reise fritt i Europa.\n3. Euroen er valutaen i 20 europeiske land.\n4. Frankrike og Tyskland samarbeider tett.',
        solution: '1. La France est un pays membre de l\'UE.\n2. Les citoyens européens peuvent voyager librement en Europe.\n3. L\'euro est la monnaie de 20 pays européens.\n4. La France et l\'Allemagne coopèrent étroitement.',
      }
    },
    {
      id: 'fransk-2-14-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilket år ble Roma-traktaten signert?',
        options: [
          { id: 'a', text: '1945', isCorrect: false },
          { id: 'b', text: '1957', isCorrect: true },
          { id: 'c', text: '1992', isCorrect: false },
          { id: 'd', text: '2002', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Roma-traktaten (le traité de Rome) ble signert i 1957 og la grunnlaget for det som senere ble EU.',
      }
    },
    {
      id: 'fransk-2-14-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (5–7 setninger) på fransk om Frankrikes rolle i Europa og i verden. Bruk ordene: l\'Union européenne, la coopération, les pays membres, la Francophonie, la diplomatie.',
        solution: 'Eksempel:\n\nLa France joue un rôle important en Europe et dans le monde. Comme pays fondateur de l\'Union européenne, la France travaille pour la coopération entre les pays membres. La diplomatie française est très active dans les organisations internationales comme l\'ONU et l\'OTAN. La France est aussi le centre de la Francophonie, une organisation qui réunit les pays francophones du monde entier. Grâce à la coopération européenne, les citoyens français peuvent voyager et travailler librement dans les 27 pays de l\'UE. La France continue de défendre les valeurs de paix et de solidarité en Europe.',
      }
    },
    {
      id: 'fransk-2-14-3-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har vi lært om Frankrikes rolle i Europa og internasjonalt:\n\n- **L'Union européenne** – Frankrike er et av grunnleggerlandene og bruker euro som valuta.\n- **La Francophonie** – 88 stater og regjeringer der fransk er et viktig språk.\n- **La coopération franco-allemande** – Det tette samarbeidet mellom Frankrike og Tyskland er sentralt i EU.\n\nVi har lært viktige ord som *le traité*, *la frontière*, *le commerce*, *la monnaie* og *la coopération*.`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'l\'Union européenne', definition: 'EU – europeisk samarbeidsorganisasjon' },
    { term: 'le pays membre', definition: 'Medlemslandet' },
    { term: 'la coopération', definition: 'Samarbeidet' },
    { term: 'le traité', definition: 'Traktaten – en avtale mellom land' },
    { term: 'la frontière', definition: 'Grensen' },
    { term: 'la monnaie', definition: 'Valutaen' },
    { term: 'la Francophonie', definition: 'Det fransktalende verdenssamfunnet' },
    { term: 'la diplomatie', definition: 'Diplomatiet' },
  ],
};

// ============================================================================
// KAPITTEL 14.4: Questions de société
// ============================================================================

export const CHAPTER_FRANSK_2_14_4: TextbookChapter = {
  id: 'fransk-2-14-4',
  courseId: 'fransk-2',
  chapterNumber: '14.4',
  title: 'Questions de société',
  subtitle: 'Samfunnsspørsmål i Frankrike',
  description: 'Lær å diskutere viktige samfunnsspørsmål i Frankrike: innvandring, likestilling, laïcité (sekularisme) og miljø. Utvid ordforrådet for å kunne delta i debatter om aktuelle temaer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne diskutere samfunnsspørsmål på fransk',
    'Forstå og bruke vokabular om sosiale utfordringer',
    'Kunne uttrykke meninger om likestilling, innvandring og sekularisme',
  ],
  content: [
    {
      id: 'fransk-2-14-4-intro',
      type: 'text',
      content: `## Questions de société – Samfunnsspørsmål\n\nDet franske samfunnet står overfor mange av de samme utfordringene som resten av Europa: innvandring, likestilling, religionens plass i samfunnet og miljøproblemer. Samtidig har Frankrike noen unike trekk, som prinsippet om **laïcité** (sekularisme) – skillet mellom stat og religion.\n\nI dette kapittelet skal vi lære å diskutere disse temaene på fransk, og vi skal utvide ordforrådet knyttet til samfunn og politikk.\n\n**Viktige temaer:**\n- L'immigration (innvandring)\n- L'égalité homme-femme (likestilling)\n- La laïcité (sekularisme)\n- L'environnement (miljø)`
    },
    {
      id: 'fransk-2-14-4-def-1',
      type: 'definition',
      title: 'Samfunnsvokabular',
      content: `**L'immigration (f)** – Innvandring. Når mennesker flytter til et nytt land.\n\n**L'égalité (f)** – Likhet/likestilling. Prinsippet om at alle mennesker har samme rettigheter.\n\n**La laïcité** – Sekularisme. Prinsippet om at staten er adskilt fra religion. En grunnverdi i den franske republikken.\n\n**L'environnement (m)** – Miljøet.\n\n**La diversité** – Mangfoldet.\n\n**Les droits de l'homme (m pl)** – Menneskerettighetene.\n\n**Le chômage** – Arbeidsledigheten.`
    },
    {
      id: 'fransk-2-14-4-vocab-table',
      type: 'text',
      content: `## Ordforråd: La société\n\n| Fransk | Norsk | Eksempel |\n|--------|-------|----------|\n| l'immigration (f) | innvandringen | L'immigration est un sujet de débat en France. |\n| l'immigré(e) | innvandreren | Les immigrés contribuent à la société française. |\n| l'égalité (f) | likheten | L'égalité homme-femme est un droit fondamental. |\n| la laïcité | sekularismen | La laïcité sépare l'État et la religion. |\n| la diversité | mangfoldet | La diversité culturelle enrichit la société. |\n| le chômage | arbeidsledigheten | Le chômage touche surtout les jeunes. |\n| la discrimination | diskrimineringen | La discrimination est interdite par la loi. |\n| l'environnement (m) | miljøet | Il faut protéger l'environnement. |\n| le droit | retten/rettigheten | Tous les citoyens ont les mêmes droits. |\n| la solidarité | solidariteten | La solidarité est une valeur importante. |`
    },
    {
      id: 'fransk-2-14-4-example-1',
      type: 'example',
      title: 'Eksempel 1: La laïcité',
      problem: `Les teksten og svar på spørsmålene:\n\n*La laïcité est un principe fondamental de la République française. Depuis la loi de 1905, l'État et la religion sont séparés en France. Cela signifie que l'État ne favorise aucune religion. Dans les écoles publiques, les élèves ne peuvent pas porter de signes religieux visibles. Ce principe garantit la liberté de conscience et l'égalité de tous les citoyens, quelle que soit leur religion.*\n\n1. Qu'est-ce que la laïcité?\n2. Depuis quand l'État et la religion sont-ils séparés?\n3. Qu'est-ce qui est interdit dans les écoles publiques?`,
      solution: `1. La laïcité est le principe de séparation entre l'État et la religion.\n2. L'État et la religion sont séparés depuis la loi de 1905.\n3. Dans les écoles publiques, les signes religieux visibles sont interdits.\n\n**Nøkkelord:** *le principe* (prinsippet), *la séparation* (adskillelsen), *favoriser* (favorisere), *les signes religieux* (religiøse symboler), *la liberté de conscience* (samvittighetsfriheten).`
    },
    {
      id: 'fransk-2-14-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Uttrykke meninger',
      problem: `Lær å uttrykke meninger om samfunnsspørsmål. Oversett uttrykkene:\n\n1. Jeg mener at likestilling er viktig.\n2. Etter min mening bør vi beskytte miljøet.\n3. Jeg er enig i at mangfold beriker samfunnet.\n4. Jeg er uenig fordi diskriminering er forbudt.`,
      solution: `1. Je pense que l'égalité est importante.\n2. À mon avis, nous devons protéger l'environnement.\n3. Je suis d'accord que la diversité enrichit la société.\n4. Je ne suis pas d'accord parce que la discrimination est interdite.\n\n**Nyttige uttrykk for å si sin mening:**\n- *Je pense que...* (Jeg mener at...)\n- *À mon avis,...* (Etter min mening,...)\n- *Je crois que...* (Jeg tror at...)\n- *Je suis d'accord* (Jeg er enig)\n- *Je ne suis pas d'accord* (Jeg er uenig)`
    },
    {
      id: 'fransk-2-14-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «la laïcité»?',
        options: [
          { id: 'a', text: 'Likestilling mellom kjønnene', isCorrect: false },
          { id: 'b', text: 'Adskillelse mellom stat og religion', isCorrect: true },
          { id: 'c', text: 'Ytringsfrihet', isCorrect: false },
          { id: 'd', text: 'Innvandringsrett', isCorrect: false },
        ],
        solution: 'Riktig svar er B. La laïcité betyr adskillelse mellom stat og religion. Det er et grunnleggende prinsipp i den franske republikken, innført med loven av 1905.',
      }
    },
    {
      id: 'fransk-2-14-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvordan sier du «etter min mening» på fransk?',
        options: [
          { id: 'a', text: 'En effet', isCorrect: false },
          { id: 'b', text: 'En revanche', isCorrect: false },
          { id: 'c', text: 'À mon avis', isCorrect: true },
          { id: 'd', text: 'En plus', isCorrect: false },
        ],
        solution: 'Riktig svar er C. «À mon avis» betyr «etter min mening» og er et vanlig uttrykk for å innlede en mening i en debatt.',
      }
    },
    {
      id: 'fransk-2-14-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett til fransk:\n\n1. Innvandring er et viktig tema i Frankrike.\n2. Alle borgere har de samme rettighetene.\n3. Vi må bekjempe diskriminering.\n4. Kulturelt mangfold beriker samfunnet.',
        solution: '1. L\'immigration est un sujet important en France.\n2. Tous les citoyens ont les mêmes droits.\n3. Nous devons lutter contre la discrimination.\n4. La diversité culturelle enrichit la société.',
      }
    },
    {
      id: 'fransk-2-14-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv tre setninger på fransk der du uttrykker din mening om et samfunnsspørsmål. Bruk uttrykkene: «Je pense que...», «À mon avis...» og «Je crois que...».',
        solution: 'Eksempel:\n\nJe pense que l\'égalité entre les hommes et les femmes est très importante dans la société moderne. À mon avis, il faut investir plus d\'argent dans la protection de l\'environnement. Je crois que la diversité culturelle est une richesse pour tous les pays.',
      }
    },
    {
      id: 'fransk-2-14-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-14-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg ett av følgende temaer og skriv en kort argumenterende tekst (6–8 setninger) på fransk:\n\na) L\'immigration en France\nb) L\'égalité homme-femme\nc) La protection de l\'environnement\n\nBruk minst tre av meningsuttrykkene (je pense que, à mon avis, je crois que, je suis d\'accord, il est important de).',
        solution: 'Eksempel (La protection de l\'environnement):\n\nÀ mon avis, la protection de l\'environnement est le défi le plus important de notre époque. Je pense que tous les pays doivent travailler ensemble pour réduire la pollution et les émissions de CO2. Je crois que la France peut jouer un rôle important dans cette lutte. Il est important de développer les énergies renouvelables comme l\'énergie solaire et éolienne. Je suis d\'accord avec ceux qui disent que nous devons changer nos habitudes de consommation. Chaque citoyen peut contribuer en recyclant et en utilisant les transports en commun. Si nous n\'agissons pas maintenant, les conséquences seront graves pour les générations futures.',
      }
    },
    {
      id: 'fransk-2-14-4-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har vi lært å diskutere viktige samfunnsspørsmål på fransk:\n\n- **L'immigration** – Innvandring og integrering i det franske samfunnet.\n- **L'égalité** – Likestilling mellom kjønn og mellom alle borgere.\n- **La laïcité** – Det franske prinsippet om skille mellom stat og religion.\n- **L'environnement** – Miljøspørsmål og bærekraftig utvikling.\n\nVi har også lært viktige meningsuttrykk som *je pense que*, *à mon avis* og *je crois que* for å delta i debatter.\n\n**Tips:** Når du diskuterer samfunnsspørsmål, husk å bruke konjunktiv (subjonctif) etter uttrykk som *il faut que* og *il est important que*.`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'l\'immigration', definition: 'Innvandring – når mennesker flytter til et nytt land' },
    { term: 'l\'égalité', definition: 'Likhet/likestilling' },
    { term: 'la laïcité', definition: 'Sekularisme – adskillelse mellom stat og religion' },
    { term: 'la diversité', definition: 'Mangfoldet' },
    { term: 'le chômage', definition: 'Arbeidsledigheten' },
    { term: 'la discrimination', definition: 'Diskrimineringen' },
    { term: 'l\'environnement', definition: 'Miljøet' },
    { term: 'la solidarité', definition: 'Solidariteten' },
  ],
};

// ============================================================================
// KAPITTEL 15.1: La prononciation avancée
// ============================================================================

export const CHAPTER_FRANSK_2_15_1: TextbookChapter = {
  id: 'fransk-2-15-1',
  courseId: 'fransk-2',
  chapterNumber: '15.1',
  title: 'La prononciation avancée',
  subtitle: 'Avansert uttale – liaisons, enchaînement og intonasjon',
  description: 'Lær avanserte uttaleregler i fransk: obligatoriske og forbudte liaisons, enchaînement (sammenkobling) og intonasjonsmønstre. Forbedre din franske uttale til et mer naturlig nivå.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne bruke liaison korrekt i vanlige fransksetninger',
    'Forstå forskjellen mellom obligatorisk og forbudt liaison',
    'Kunne bruke riktig intonasjon i spørsmål og utsagn',
  ],
  content: [
    {
      id: 'fransk-2-15-1-intro',
      type: 'text',
      content: `## La prononciation avancée – Avansert uttale\n\nGod uttale er nøkkelen til å bli forstått og til å forstå muntlig fransk. På dette nivået skal vi jobbe med tre viktige aspekter av avansert uttale:\n\n1. **La liaison** – Når den stumme sluttkonsonanten i et ord uttales fordi neste ord begynner med vokal.\n2. **L'enchaînement** – Når siste lyd i et ord kobles direkte til neste ord.\n3. **L'intonation** – Tonefall og rytme i setninger.\n\nDisse elementene gjør forskjellen mellom «bokmål-fransk» og naturlig, flytende fransk.`
    },
    {
      id: 'fransk-2-15-1-def-1',
      type: 'definition',
      title: 'Uttalebegreper',
      content: `**La liaison** – Sammenkobling av en stum sluttkonsonant med neste ords begynnelsesvokal. Eksempel: *les‿amis* [lezami] (vennene).\n\n**L'enchaînement** – Når siste uttalte konsonant i et ord kobles med neste ords vokal. Eksempel: *elle‿est* [ɛlɛ] (hun er).\n\n**L'intonation** – Tonefallet i en setning. Stigende i spørsmål, synkende i utsagn.\n\n**La liaison obligatoire** – Obligatorisk liaison, som alltid må gjøres.\n\n**La liaison interdite** – Forbudt liaison, som aldri skal gjøres.\n\n**L'élision** – Når en vokal faller bort foran et ord som begynner med vokal: *l'ami* (i stedet for *le ami*).`
    },
    {
      id: 'fransk-2-15-1-liaison-rules',
      type: 'text',
      content: `## Regler for liaison\n\n### Obligatorisk liaison (La liaison obligatoire)\nLiaison **må** gjøres i disse tilfellene:\n\n| Situasjon | Eksempel | Uttale |\n|-----------|----------|--------|\n| Artikkel + substantiv | les‿amis | [lezami] |\n| Adjektiv + substantiv | petit‿ami | [pətitami] |\n| Pronomen + verb | vous‿avez | [vuzave] |\n| Preposisjon + neste ord | dans‿un | [dɑ̃zœ̃] |\n| Etter tall | trois‿ans | [tʁwazɑ̃] |\n| Etter très/bien/trop | très‿important | [tʁɛzɛ̃pɔʁtɑ̃] |\n\n### Forbudt liaison (La liaison interdite)\nLiaison **skal ikke** gjøres i disse tilfellene:\n\n| Situasjon | Eksempel | Uttale |\n|-----------|----------|--------|\n| Etter «et» (og) | et / un ami | [e / œ̃nami] |\n| Etter entallssubstantiv | le chat / est | [lə ʃa / ɛ] |\n| Foran h aspiré | les / héros | [le / eʁo] |`
    },
    {
      id: 'fransk-2-15-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Liaison obligatoire',
      problem: `Marker hvor liaison skal gjøres i disse setningene (skriv ‿ mellom ordene):\n\n1. Les enfants sont arrivés.\n2. Nous avons un petit appartement.\n3. Ils ont trois ans.\n4. C'est très intéressant.`,
      solution: `1. Les‿enfants sont‿arrivés.\n2. Nous‿avons‿un petit‿appartement.\n3. Ils‿ont trois‿ans.\n4. C'est très‿intéressant.\n\n**Forklaring:**\n- *les‿enfants* – artikkel + substantiv (obligatorisk)\n- *sont‿arrivés* – verb + neste ord (obligatorisk etter être)\n- *nous‿avons* – pronomen + verb (obligatorisk)\n- *trois‿ans* – tall + neste ord (obligatorisk)`
    },
    {
      id: 'fransk-2-15-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Intonasjon i spørsmål',
      problem: `Angi om intonasjonen er stigende (↗) eller synkende (↘) i slutten av disse setningene:\n\n1. Tu parles français?\n2. Je parle français.\n3. Est-ce que tu viens?\n4. Non, je ne viens pas.`,
      solution: `1. Tu parles français? ↗ (stigende – ja/nei-spørsmål)\n2. Je parle français. ↘ (synkende – utsagn)\n3. Est-ce que tu viens? ↗ (stigende – ja/nei-spørsmål)\n4. Non, je ne viens pas. ↘ (synkende – utsagn)\n\n**Regel:** Ja/nei-spørsmål har stigende intonasjon, mens vanlige utsagn og informasjonsspørsmål (med hv-ord) har synkende intonasjon.`
    },
    {
      id: 'fransk-2-15-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I hvilken setning er liaison obligatorisk?',
        options: [
          { id: 'a', text: 'Le chat est noir.', isCorrect: false },
          { id: 'b', text: 'Les enfants jouent.', isCorrect: true },
          { id: 'c', text: 'Pierre et Anne.', isCorrect: false },
          { id: 'd', text: 'Le héros arrive.', isCorrect: false },
        ],
        solution: 'Riktig svar er B. I «les enfants» er liaison obligatorisk fordi det er artikkel + substantiv som begynner med vokal: les‿enfants [lezɑ̃fɑ̃]. I A er liaison etter entallssubstantiv forbudt, i C skal liaison ikke gjøres etter «et», og i D begynner «héros» med h aspiré.',
      }
    },
    {
      id: 'fransk-2-15-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvordan uttales «vous avez» med liaison?',
        options: [
          { id: 'a', text: '[vu ave]', isCorrect: false },
          { id: 'b', text: '[vuzave]', isCorrect: true },
          { id: 'c', text: '[vusave]', isCorrect: false },
          { id: 'd', text: '[vuave]', isCorrect: false },
        ],
        solution: 'Riktig svar er B. I «vous avez» gjøres liaison med [z]-lyd: vous‿avez [vuzave]. Bokstaven «s» i slutten av «vous» uttales som [z] foran vokalen i «avez».',
      }
    },
    {
      id: 'fransk-2-15-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Marker hvor liaison skal gjøres (skriv ‿) og hvor den er forbudt (skriv /) i disse setningene:\n\n1. Mes amis et eux sont arrivés.\n2. Les héros ont un grand appartement.\n3. Nous avons trois enfants.\n4. Un petit animal est dans un arbre.',
        solution: '1. Mes‿amis et / eux sont‿arrivés.\n(Liaison etter «mes» og «sont», men forbudt etter «et».)\n\n2. Les / héros‿ont‿un grand‿appartement.\n(Forbudt liaison med h aspiré i «héros», obligatorisk etter «ont» og «un», og mellom adjektiv + substantiv.)\n\n3. Nous‿avons trois‿enfants.\n(Obligatorisk: pronomen + verb, tall + substantiv.)\n\n4. Un petit‿animal est dans‿un‿arbre.\n(Obligatorisk: adjektiv + substantiv, preposisjon + artikkel.)',
      }
    },
    {
      id: 'fransk-2-15-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken intonasjon har setningen «Où est-ce que tu habites?»',
        options: [
          { id: 'a', text: 'Stigende (↗) – fordi det er et spørsmål', isCorrect: false },
          { id: 'b', text: 'Synkende (↘) – fordi det er et informasjonsspørsmål med spørreord', isCorrect: true },
          { id: 'c', text: 'Flat – fordi det er et høflig spørsmål', isCorrect: false },
          { id: 'd', text: 'Først stigende, så synkende', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Informasjonsspørsmål som begynner med et spørreord (où, quand, comment, pourquoi) har synkende intonasjon på slutten. Det er bare ja/nei-spørsmål som har stigende intonasjon.',
      }
    },
    {
      id: 'fransk-2-15-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv fem setninger på fransk der du bruker obligatorisk liaison. Marker liaison med ‿ i hver setning. Bruk ulike typer liaison (artikkel + substantiv, pronomen + verb, tall + ord, preposisjon + ord, adjektiv + substantiv).',
        solution: 'Eksempel:\n\n1. Les‿élèves sont‿arrivés à l\'école. (artikkel + substantiv, verb + partisipp)\n2. Nous‿avons deux‿amis en France. (pronomen + verb, tall + substantiv)\n3. C\'est un très‿important document. (adverb + adjektiv)\n4. Ils‿habitent dans‿un petit‿appartement. (pronomen + verb, preposisjon + artikkel, adjektiv + substantiv)\n5. Vous‿êtes mes‿amis depuis trois‿ans. (pronomen + verb, possessiv + substantiv, tall + substantiv)',
      }
    },
    {
      id: 'fransk-2-15-1-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har vi lært om avansert fransk uttale:\n\n- **La liaison obligatoire** – Må gjøres mellom artikkel + substantiv, pronomen + verb, tall + ord, preposisjon + neste ord, og adjektiv + substantiv.\n- **La liaison interdite** – Skal ikke gjøres etter «et», etter entallssubstantiv, eller foran h aspiré.\n- **L'enchaînement** – Siste uttalte konsonant kobles til neste ords vokal.\n- **L'intonation** – Stigende i ja/nei-spørsmål, synkende i utsagn og informasjonsspørsmål.\n\n**Tips:** Lytt mye til fransk tale (podcaster, filmer, nyheter) for å internalisere de naturlige uttalemønstrene.`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la liaison', definition: 'Sammenkobling av stum sluttkonsonant med neste ords vokal' },
    { term: 'la liaison obligatoire', definition: 'Obligatorisk liaison som alltid må gjøres' },
    { term: 'la liaison interdite', definition: 'Forbudt liaison som aldri skal gjøres' },
    { term: 'l\'enchaînement', definition: 'Sammenkobling av siste uttalte konsonant med neste ords vokal' },
    { term: 'l\'intonation', definition: 'Tonefallet i en setning' },
    { term: 'l\'élision', definition: 'Når en vokal faller bort foran et ord som begynner med vokal' },
    { term: 'le h aspiré', definition: 'Aspirert h – blokkerer liaison og élision' },
    { term: 'le h muet', definition: 'Stum h – tillater liaison og élision' },
  ],
};

// ============================================================================
// KAPITTEL 15.2: Discussions et débats
// ============================================================================

export const CHAPTER_FRANSK_2_15_2: TextbookChapter = {
  id: 'fransk-2-15-2',
  courseId: 'fransk-2',
  chapterNumber: '15.2',
  title: 'Discussions et débats',
  subtitle: 'Diskusjoner og debatter på fransk',
  description: 'Lær å delta i diskusjoner og debatter på fransk. Øv på å uttrykke meninger, argumentere, si seg enig og uenig, og bruke høflige diskusjonsuttrykk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne uttrykke meninger og argumentere på fransk',
    'Kunne bruke uttrykk for enighet og uenighet',
    'Kunne delta i en strukturert debatt på fransk',
  ],
  content: [
    {
      id: 'fransk-2-15-2-intro',
      type: 'text',
      content: `## Discussions et débats – Diskusjoner og debatter\n\nÅ kunne diskutere og debattere er en viktig del av å beherske et fremmedspråk. I Frankrike er debatten en viktig del av kulturen – man elsker å diskutere politikk, kultur og samfunn.\n\nI dette kapittelet skal vi lære å:\n- Uttrykke meninger (*donner son opinion*)\n- Argumentere for og imot (*argumenter pour et contre*)\n- Uttrykke enighet og uenighet (*exprimer l'accord et le désaccord*)\n- Bruke overgangsfrasene som gjør diskusjonen flytende`
    },
    {
      id: 'fransk-2-15-2-def-1',
      type: 'definition',
      title: 'Debattuttrykk',
      content: `**Donner son opinion** – Å uttrykke sin mening. Eksempel: *Je pense que...* (Jeg mener at...)\n\n**Être d'accord** – Å være enig. Eksempel: *Je suis tout à fait d'accord.* (Jeg er helt enig.)\n\n**Ne pas être d'accord** – Å være uenig. Eksempel: *Je ne suis pas d'accord avec vous.* (Jeg er ikke enig med deg/dere.)\n\n**Argumenter** – Å argumentere. Å gi grunner for sin mening.\n\n**Convaincre** – Å overbevise. Å få noen til å endre mening.\n\n**Nuancer** – Å nyansere. Å vise at et tema har flere sider.`
    },
    {
      id: 'fransk-2-15-2-uttrykk-table',
      type: 'text',
      content: `## Nyttige uttrykk for diskusjoner\n\n### Uttrykke meninger\n| Fransk | Norsk |\n|--------|-------|\n| Je pense que... | Jeg mener at... |\n| À mon avis... | Etter min mening... |\n| Je crois que... | Jeg tror at... |\n| Il me semble que... | Det virker som om... |\n| Je suis convaincu(e) que... | Jeg er overbevist om at... |\n| Selon moi... | Ifølge meg... |\n\n### Si seg enig\n| Fransk | Norsk |\n|--------|-------|\n| Je suis d'accord. | Jeg er enig. |\n| Tout à fait! | Helt riktig! |\n| Absolument! | Absolutt! |\n| C'est vrai. | Det stemmer. |\n| Tu as / Vous avez raison. | Du / Dere har rett. |\n| Je partage votre avis. | Jeg deler deres mening. |\n\n### Si seg uenig\n| Fransk | Norsk |\n|--------|-------|\n| Je ne suis pas d'accord. | Jeg er ikke enig. |\n| Je ne pense pas. | Det tror jeg ikke. |\n| Au contraire... | Tvert imot... |\n| C'est discutable. | Det er diskutabelt. |\n| Je comprends, mais... | Jeg forstår, men... |\n| Pas du tout! | Ikke i det hele tatt! |`
    },
    {
      id: 'fransk-2-15-2-example-1',
      type: 'example',
      title: 'Eksempel 1: En minidebatt',
      problem: `Les denne dialogen mellom to personer som diskuterer mobilbruk i skolen:\n\n*A: À mon avis, les téléphones portables devraient être interdits à l'école.\nB: Je ne suis pas d'accord. Je pense que les élèves ont besoin de leur téléphone pour des raisons de sécurité.\nA: Je comprends, mais les téléphones sont une distraction en classe.\nB: C'est vrai, mais on peut les éteindre pendant les cours.\nA: Tu as raison, c'est peut-être une bonne solution.*\n\nIdentifiser uttrykkene for:\n1. Å uttrykke en mening\n2. Å si seg uenig\n3. Å si seg enig\n4. Å nyansere`,
      solution: `1. **Uttrykke en mening:** *À mon avis* (etter min mening), *Je pense que* (jeg mener at)\n2. **Si seg uenig:** *Je ne suis pas d'accord* (jeg er ikke enig)\n3. **Si seg enig:** *C'est vrai* (det stemmer), *Tu as raison* (du har rett)\n4. **Nyansere:** *Je comprends, mais...* (jeg forstår, men...), *c'est peut-être* (det er kanskje)\n\n**Merk:** Debattspråket er høflig selv når man er uenig. Man bruker ofte nyanseringsuttrykk for å unngå å være for direkte.`
    },
    {
      id: 'fransk-2-15-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Argumentere for og imot',
      problem: `Tema: Les réseaux sociaux sont dangereux pour les jeunes (sosiale medier er farlige for ungdom).\n\nFull inn tabellen med argumenter for og imot, på fransk:`,
      solution: `**Pour (for):**\n- Les réseaux sociaux peuvent causer du cyberharcèlement. (Sosiale medier kan forårsake nettmobbing.)\n- Les jeunes passent trop de temps sur les écrans. (Ungdom bruker for mye tid på skjermer.)\n- Les réseaux sociaux créent une image irréaliste de la vie. (Sosiale medier skaper et urealistisk bilde av livet.)\n\n**Contre (imot):**\n- Les réseaux sociaux permettent de rester en contact avec ses amis. (Sosiale medier gjør det mulig å holde kontakten med venner.)\n- On peut apprendre beaucoup de choses sur Internet. (Man kan lære mye på Internett.)\n- Les réseaux sociaux donnent une voix aux jeunes. (Sosiale medier gir ungdom en stemme.)\n\n**Nyttige koblingsord:** *d'un côté... de l'autre côté* (på den ene siden... på den andre siden), *cependant* (likevel), *en revanche* (derimot).`
    },
    {
      id: 'fransk-2-15-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan sier du «jeg er helt enig» på fransk?',
        options: [
          { id: 'a', text: 'Je ne suis pas d\'accord.', isCorrect: false },
          { id: 'b', text: 'Je suis tout à fait d\'accord.', isCorrect: true },
          { id: 'c', text: 'C\'est discutable.', isCorrect: false },
          { id: 'd', text: 'Au contraire.', isCorrect: false },
        ],
        solution: 'Riktig svar er B. «Je suis tout à fait d\'accord» betyr «jeg er helt enig». «Tout à fait» forsterker uttrykket.',
      }
    },
    {
      id: 'fransk-2-15-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilket uttrykk bruker du for å nyansere en uenighet høflig?',
        options: [
          { id: 'a', text: 'Pas du tout!', isCorrect: false },
          { id: 'b', text: 'Au contraire!', isCorrect: false },
          { id: 'c', text: 'Je comprends, mais...', isCorrect: true },
          { id: 'd', text: 'C\'est faux!', isCorrect: false },
        ],
        solution: 'Riktig svar er C. «Je comprends, mais...» (Jeg forstår, men...) er en høflig måte å uttrykke uenighet på. Du anerkjenner den andres synspunkt før du presenterer ditt eget.',
      }
    },
    {
      id: 'fransk-2-15-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett disse debattuttrykkene til fransk:\n\n1. Etter min mening er dette feil.\n2. Jeg er overbevist om at han har rett.\n3. Tvert imot, jeg mener at det er en god idé.\n4. Du har rett, men vi må også tenke på...\n5. Det stemmer ikke i det hele tatt.',
        solution: '1. À mon avis, c\'est faux.\n2. Je suis convaincu(e) qu\'il a raison.\n3. Au contraire, je pense que c\'est une bonne idée.\n4. Tu as raison, mais il faut aussi penser à...\n5. Ce n\'est pas vrai du tout. / Pas du tout!',
      }
    },
    {
      id: 'fransk-2-15-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv en kort dialog (6–8 replikker) på fransk mellom to personer som diskuterer om uniformer bør være obligatorisk i skolen. Person A er for, person B er imot. Bruk minst fire debattuttrykk fra tabellene.',
        solution: 'Eksempel:\n\nA: À mon avis, les uniformes devraient être obligatoires à l\'école.\nB: Je ne suis pas d\'accord. Je pense que les élèves doivent pouvoir choisir leurs vêtements.\nA: Je comprends, mais les uniformes créent l\'égalité entre les élèves.\nB: C\'est vrai, mais la liberté d\'expression est aussi importante.\nA: Selon moi, les uniformes réduisent le harcèlement lié aux vêtements.\nB: Tu as raison sur ce point, cependant les uniformes coûtent cher pour certaines familles.\nA: C\'est discutable. On pourrait proposer des uniformes gratuits.\nB: Absolument, c\'est peut-être une bonne solution.',
      }
    },
    {
      id: 'fransk-2-15-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg ett av følgende temaer og skriv en argumenterende tekst (8–10 setninger) på fransk. Presenter argumenter for og imot, og avslutt med din egen mening.\n\na) L\'intelligence artificielle va-t-elle remplacer les professeurs?\nb) Faut-il interdire les voitures dans les centres-villes?\nc) Les études universitaires devraient-elles être gratuites?\n\nBruk koblingsord: d\'un côté, de l\'autre côté, cependant, en revanche, par conséquent.',
        solution: 'Eksempel (b: les voitures dans les centres-villes):\n\nD\'un côté, il y a de bonnes raisons d\'interdire les voitures dans les centres-villes. Premièrement, les voitures polluent l\'air et contribuent au changement climatique. Deuxièmement, les centres-villes sans voitures sont plus agréables pour les piétons. Cependant, de l\'autre côté, certaines personnes ont besoin de leur voiture pour se déplacer. En revanche, on peut développer les transports en commun comme alternative. Les personnes âgées ou handicapées pourraient avoir des difficultés sans voiture. Par conséquent, je pense qu\'il faut trouver un compromis. À mon avis, on devrait limiter les voitures dans les centres-villes tout en améliorant les transports en commun. De cette façon, on protège l\'environnement sans exclure personne.',
      }
    },
    {
      id: 'fransk-2-15-2-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har vi lært viktige uttrykk for diskusjoner og debatter:\n\n- **Uttrykke meninger:** *Je pense que*, *À mon avis*, *Je suis convaincu(e) que*\n- **Si seg enig:** *Je suis d'accord*, *Tout à fait*, *Tu as raison*\n- **Si seg uenig:** *Je ne suis pas d'accord*, *Au contraire*, *C'est discutable*\n- **Nyansere:** *Je comprends, mais...*, *C'est vrai, cependant...*\n- **Koblingsord:** *d'un côté / de l'autre côté*, *cependant*, *en revanche*, *par conséquent*\n\n**Tips:** I en debatt er det viktig å være høflig selv når du er uenig. Bruk nyanseringsuttrykk og unngå å si direkte «du tar feil» (*tu as tort*).`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'donner son opinion', definition: 'Å uttrykke sin mening' },
    { term: 'être d\'accord', definition: 'Å være enig' },
    { term: 'ne pas être d\'accord', definition: 'Å være uenig' },
    { term: 'argumenter', definition: 'Å argumentere – gi grunner for sin mening' },
    { term: 'convaincre', definition: 'Å overbevise' },
    { term: 'nuancer', definition: 'Å nyansere – vise flere sider av et tema' },
    { term: 'cependant', definition: 'Likevel – brukes for å introdusere motargument' },
    { term: 'en revanche', definition: 'Derimot – brukes for å presentere en kontrast' },
  ],
};

// ============================================================================
// KAPITTEL 15.3: Présentations orales
// ============================================================================

export const CHAPTER_FRANSK_2_15_3: TextbookChapter = {
  id: 'fransk-2-15-3',
  courseId: 'fransk-2',
  chapterNumber: '15.3',
  title: 'Présentations orales',
  subtitle: 'Muntlige presentasjoner på fransk',
  description: 'Lær å holde muntlige presentasjoner på fransk med god struktur, overganger og overbevisende argumenter. Øv på å bruke presentasjonsfraser og retoriske virkemidler.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne strukturere en muntlig presentasjon på fransk',
    'Kunne bruke overgangsfrasene mellom ulike deler av en presentasjon',
    'Kunne holde en presentasjon med selvsikkerhet og god flyt',
  ],
  content: [
    {
      id: 'fransk-2-15-3-intro',
      type: 'text',
      content: `## Présentations orales – Muntlige presentasjoner\n\nMuntlige presentasjoner er en viktig del av franskstudiet og av muntlig eksamen. En god presentasjon har en klar struktur, bruker overgangsfrasene effektivt og holder tilhørernes oppmerksomhet.\n\nI dette kapittelet skal vi lære:\n- Hvordan strukturere en presentasjon (*introduction, développement, conclusion*)\n- Overgangsfrasene som binder presentasjonen sammen\n- Tips for å snakke med selvsikkerhet og god uttale\n\n**Strukturen i en presentasjon:**\n1. **L'introduction** – Innledningen: presenter temaet og fang oppmerksomheten\n2. **Le développement** – Hoveddelen: presenter argumentene og eksemplene\n3. **La conclusion** – Konklusjonen: oppsummer og gi din mening`
    },
    {
      id: 'fransk-2-15-3-def-1',
      type: 'definition',
      title: 'Presentasjonsvokabular',
      content: `**L'introduction (f)** – Innledningen. Den første delen av en presentasjon der du presenterer temaet.\n\n**Le développement** – Hoveddelen/utdypingen. Den største delen der du presenterer argumenter og eksempler.\n\n**La conclusion** – Konklusjonen. Den siste delen der du oppsummerer og gir din mening.\n\n**La transition** – Overgangen. Uttrykk som binder delene av presentasjonen sammen.\n\n**L'argument (m)** – Argumentet. En grunn som støtter din mening.\n\n**L'exemple (m)** – Eksemplet. En konkret illustrasjon av et argument.`
    },
    {
      id: 'fransk-2-15-3-phrases-table',
      type: 'text',
      content: `## Nyttige presentasjonsfraser\n\n### Innledning (L'introduction)\n| Fransk | Norsk |\n|--------|-------|\n| Aujourd'hui, je vais vous parler de... | I dag skal jeg snakke om... |\n| Le sujet de ma présentation est... | Temaet for presentasjonen min er... |\n| Je voudrais aborder le thème de... | Jeg vil ta opp temaet... |\n| Pour commencer, je vais... | For å begynne, skal jeg... |\n\n### Hoveddel (Le développement)\n| Fransk | Norsk |\n|--------|-------|\n| Premièrement... Deuxièmement... | For det første... For det andre... |\n| D'abord... Ensuite... Enfin... | Først... Deretter... Til slutt... |\n| Passons maintenant à... | La oss nå gå over til... |\n| En ce qui concerne... | Når det gjelder... |\n| Par exemple... | For eksempel... |\n| Il est important de souligner que... | Det er viktig å understreke at... |\n\n### Konklusjon (La conclusion)\n| Fransk | Norsk |\n|--------|-------|\n| En conclusion... | Avslutningsvis... |\n| Pour résumer... | For å oppsummere... |\n| En résumé... | Kort oppsummert... |\n| Je voudrais conclure en disant que... | Jeg vil avslutte med å si at... |\n| Merci de votre attention. | Takk for oppmerksomheten. |`
    },
    {
      id: 'fransk-2-15-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Strukturere en presentasjon',
      problem: `Lag en plan for en presentasjon om «La cuisine française» (det franske kjøkkenet). Skriv stikkord på fransk for innledning, hoveddel og konklusjon.`,
      solution: `**Introduction:**\nAujourd'hui, je vais vous parler de la cuisine française, qui est célèbre dans le monde entier. La France est connue pour sa gastronomie et ses traditions culinaires.\n\n**Développement:**\n- *Premièrement,* les plats traditionnels: le coq au vin, la ratatouille, les crêpes.\n- *Deuxièmement,* l'importance du repas en France: le déjeuner dure souvent une heure.\n- *Troisièmement,* la pâtisserie française: les croissants, les éclairs, les macarons.\n- *Par exemple,* la baguette est un symbole de la France.\n\n**Conclusion:**\nEn conclusion, la cuisine française est un art de vivre qui fait partie de l'identité culturelle française. Merci de votre attention.\n\n**Merk:** Bruk overgangsfrasene (*premièrement, deuxièmement, par exemple*) for å gi presentasjonen god flyt.`
    },
    {
      id: 'fransk-2-15-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Overganger i en presentasjon',
      problem: `Fyll inn passende overgangsfraser i denne presentasjonen:\n\n«______, je vais vous parler du sport en France. ______, le football est le sport le plus populaire. ______, le rugby est très apprécié dans le sud. ______, le tennis français est célèbre grâce à Roland-Garros. ______, le sport joue un rôle important dans la société française.»`,
      solution: `«**Aujourd'hui**, je vais vous parler du sport en France. **Premièrement**, le football est le sport le plus populaire. **Deuxièmement**, le rugby est très apprécié dans le sud. **De plus**, le tennis français est célèbre grâce à Roland-Garros. **En conclusion**, le sport joue un rôle important dans la société française.»\n\n**Alternative overganger:**\n- *Aujourd'hui* → *Le sujet de ma présentation est*\n- *Premièrement* → *D'abord*\n- *Deuxièmement* → *Ensuite*\n- *De plus* → *En outre / Par ailleurs*\n- *En conclusion* → *Pour résumer / En résumé*`
    },
    {
      id: 'fransk-2-15-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan begynner du vanligvis en presentasjon på fransk?',
        options: [
          { id: 'a', text: 'En conclusion, je vais vous parler de...', isCorrect: false },
          { id: 'b', text: 'Aujourd\'hui, je vais vous parler de...', isCorrect: true },
          { id: 'c', text: 'Pour résumer, le sujet est...', isCorrect: false },
          { id: 'd', text: 'Merci de votre attention.', isCorrect: false },
        ],
        solution: 'Riktig svar er B. «Aujourd\'hui, je vais vous parler de...» (I dag skal jeg snakke om...) er en klassisk måte å innlede en presentasjon på.',
      }
    },
    {
      id: 'fransk-2-15-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken frase bruker du for å gå over til et nytt punkt i hoveddelen?',
        options: [
          { id: 'a', text: 'Merci de votre attention.', isCorrect: false },
          { id: 'b', text: 'En conclusion...', isCorrect: false },
          { id: 'c', text: 'Passons maintenant à...', isCorrect: true },
          { id: 'd', text: 'Aujourd\'hui, je vais vous parler de...', isCorrect: false },
        ],
        solution: 'Riktig svar er C. «Passons maintenant à...» (La oss nå gå over til...) brukes for å markere overgangen til et nytt punkt i hoveddelen av en presentasjon.',
      }
    },
    {
      id: 'fransk-2-15-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett disse presentasjonsfrasene til fransk:\n\n1. Temaet for presentasjonen min er musikk.\n2. For det første er Frankrike kjent for chanson française.\n3. Deretter skal vi se på moderne fransk musikk.\n4. For eksempel er Daft Punk kjent over hele verden.\n5. For å oppsummere er musikk en viktig del av fransk kultur.',
        solution: '1. Le sujet de ma présentation est la musique.\n2. Premièrement, la France est connue pour la chanson française.\n3. Ensuite, nous allons voir la musique française moderne.\n4. Par exemple, Daft Punk est connu dans le monde entier.\n5. Pour résumer, la musique est une partie importante de la culture française.',
      }
    },
    {
      id: 'fransk-2-15-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv innledningen (4–5 setninger) til en presentasjon på fransk om ett av følgende temaer:\n\na) Les vacances en France (ferie i Frankrike)\nb) La mode française (fransk mote)\nc) Le cinéma français (fransk film)\n\nBruk minst to innledningsfraser fra tabellen.',
        solution: 'Eksempel (Le cinéma français):\n\nBonjour à tous! Aujourd\'hui, je vais vous parler du cinéma français. Le sujet de ma présentation est l\'histoire et l\'importance du cinéma en France. La France est le pays qui a inventé le cinéma grâce aux frères Lumière en 1895. Je voudrais aborder le thème des films français les plus célèbres et leur influence dans le monde. Pour commencer, je vais parler des origines du cinéma français.',
      }
    },
    {
      id: 'fransk-2-15-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en komplett, kort presentasjon (12–15 setninger) på fransk om temaet «Le système scolaire français» (det franske skolesystemet). Presentasjonen skal ha tydelig innledning, hoveddel med minst tre punkter, og konklusjon. Bruk overgangsfraser mellom hver del.',
        solution: 'Eksempel:\n\nBonjour à tous! Aujourd\'hui, je vais vous parler du système scolaire français.\n\nLe système éducatif en France est organisé en plusieurs étapes. Premièrement, il y a l\'école primaire, qui dure cinq ans, de six à onze ans. Les élèves y apprennent les bases: la lecture, l\'écriture et les mathématiques.\n\nDeuxièmement, passons au collège, qui correspond aux classes de la sixième à la troisième. Les élèves ont entre onze et quinze ans. À la fin du collège, ils passent le brevet.\n\nTroisièmement, en ce qui concerne le lycée, il dure trois ans. Les lycéens préparent le baccalauréat, un examen très important. Il est important de souligner que le baccalauréat est nécessaire pour entrer à l\'université.\n\nEn conclusion, le système scolaire français est différent du système norvégien. Pour résumer, l\'éducation en France est obligatoire de six à seize ans. Merci de votre attention. Avez-vous des questions?',
      }
    },
    {
      id: 'fransk-2-15-3-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har vi lært å holde muntlige presentasjoner på fransk:\n\n- **L'introduction** – Bruk fraser som *Aujourd'hui, je vais vous parler de...* og *Le sujet de ma présentation est...*\n- **Le développement** – Strukturer med *Premièrement, Deuxièmement, Troisièmement* og bruk *Par exemple* for å gi eksempler.\n- **La conclusion** – Avslutt med *En conclusion*, *Pour résumer* og *Merci de votre attention*.\n- **Les transitions** – Bruk *Passons maintenant à...*, *En ce qui concerne...* og *Il est important de souligner que...* for å skape god flyt.\n\n**Tips for en god presentasjon:**\n- Snakk sakte og tydelig\n- Ha øyekontakt med publikum\n- Bruk notater, men les ikke fra et manus\n- Øv på uttalen av vanskelige ord på forhånd`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'l\'introduction', definition: 'Innledningen – den første delen av en presentasjon' },
    { term: 'le développement', definition: 'Hoveddelen – der argumenter og eksempler presenteres' },
    { term: 'la conclusion', definition: 'Konklusjonen – oppsummering og avslutning' },
    { term: 'la transition', definition: 'Overgangen – uttrykk som binder delene sammen' },
    { term: 'premièrement', definition: 'For det første' },
    { term: 'en ce qui concerne', definition: 'Når det gjelder' },
    { term: 'pour résumer', definition: 'For å oppsummere' },
    { term: 'il est important de souligner', definition: 'Det er viktig å understreke' },
  ],
};

// ============================================================================
// KAPITTEL 15.4: Jeux de rôle avancés
// ============================================================================

export const CHAPTER_FRANSK_2_15_4: TextbookChapter = {
  id: 'fransk-2-15-4',
  courseId: 'fransk-2',
  chapterNumber: '15.4',
  title: 'Jeux de rôle avancés',
  subtitle: 'Avanserte rollespill – jobbintervju, forhandlinger og klager',
  description: 'Øv på avanserte rollespillsituasjoner på fransk: jobbintervjuer, forhandlinger og klager. Lær profesjonelt språk og formelle uttrykk for ulike situasjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne gjennomføre et jobbintervju på fransk',
    'Kunne forhandle og diskutere betingelser på fransk',
    'Kunne fremsette en klage og finne en løsning på fransk',
  ],
  content: [
    {
      id: 'fransk-2-15-4-intro',
      type: 'text',
      content: `## Jeux de rôle avancés – Avanserte rollespill\n\nRollespill er en utmerket måte å øve på praktisk språkbruk i realistiske situasjoner. I dette kapittelet skal vi øve på tre avanserte scenarier:\n\n1. **L'entretien d'embauche** – Jobbintervjuet\n2. **La négociation** – Forhandlingen\n3. **La réclamation** – Klagen\n\nDisse situasjonene krever formelt språk, høflighetsuttrykk og evnen til å argumentere overbevisende. Det er viktig å bruke *vous*-formen og formelle uttrykk i profesjonelle sammenhenger.`
    },
    {
      id: 'fransk-2-15-4-def-1',
      type: 'definition',
      title: 'Profesjonelt vokabular',
      content: `**L'entretien d'embauche (m)** – Jobbintervjuet. Et formelt møte mellom en søker og en arbeidsgiver.\n\n**Le candidat / la candidate** – Søkeren/kandidaten.\n\n**La négociation** – Forhandlingen. Prosessen der to parter prøver å komme til enighet.\n\n**La réclamation** – Klagen. Når man uttrykker misnøye med en tjeneste eller et produkt.\n\n**Le CV (curriculum vitae)** – CV-en. Sammendrag av utdanning og arbeidserfaring.\n\n**La lettre de motivation** – Søknadsbrevet.\n\n**Le salaire** – Lønnen.`
    },
    {
      id: 'fransk-2-15-4-vocab-table',
      type: 'text',
      content: `## Ordforråd: Profesjonelle situasjoner\n\n| Fransk | Norsk | Situasjon |\n|--------|-------|-----------|\n| l'entretien d'embauche (m) | jobbintervjuet | Jobbintervju |\n| le poste | stillingen | Jobbintervju |\n| l'expérience professionnelle (f) | arbeidserfaringen | Jobbintervju |\n| les compétences (f pl) | kompetansene/ferdighetene | Jobbintervju |\n| la négociation | forhandlingen | Forhandling |\n| la proposition | forslaget | Forhandling |\n| le compromis | kompromisset | Forhandling |\n| les conditions (f pl) | betingelsene | Forhandling |\n| la réclamation | klagen | Klage |\n| le remboursement | refusjonen/tilbakebetalingen | Klage |\n| le responsable | den ansvarlige/sjefen | Klage |\n| satisfait(e) / insatisfait(e) | fornøyd / misfornøyd | Klage |`
    },
    {
      id: 'fransk-2-15-4-example-1',
      type: 'example',
      title: 'Eksempel 1: L\'entretien d\'embauche',
      problem: `Les dette jobbintervjuet og identifiser de formelle uttrykkene:\n\n*Recruteur: Bonjour, asseyez-vous. Pouvez-vous vous présenter?\nCandidat: Bonjour. Je m'appelle Marie Dupont. J'ai 25 ans et j'ai un master en marketing. J'ai travaillé pendant deux ans dans une agence de publicité.\nRecruteur: Pourquoi souhaitez-vous travailler dans notre entreprise?\nCandidat: Je suis très intéressée par votre entreprise parce qu'elle est innovante et dynamique. Je pense que mes compétences en marketing digital correspondent bien au poste.\nRecruteur: Quelles sont vos qualités principales?\nCandidat: Je suis organisée, créative et j'ai un bon esprit d'équipe.*\n\nIdentifiser:\n1. Spørsmål fra rekruttereren\n2. Formelle uttrykk\n3. Hvordan kandidaten beskriver sine kvalifikasjoner`,
      solution: `1. **Spørsmål fra rekruttereren:**\n- *Pouvez-vous vous présenter?* (Kan du presentere deg?)\n- *Pourquoi souhaitez-vous travailler dans notre entreprise?* (Hvorfor ønsker du å jobbe i vår bedrift?)\n- *Quelles sont vos qualités principales?* (Hva er dine viktigste egenskaper?)\n\n2. **Formelle uttrykk:**\n- *Asseyez-vous* (Sett deg) – høflig invitasjon med vous-form\n- *Je suis très intéressée par...* (Jeg er veldig interessert i...)\n- *Je pense que mes compétences correspondent...* (Jeg mener at mine ferdigheter passer...)\n\n3. **Kvalifikasjoner:**\n- *J'ai un master en marketing* (utdanning)\n- *J'ai travaillé pendant deux ans* (arbeidserfaring)\n- *Je suis organisée, créative* (personlige egenskaper)`
    },
    {
      id: 'fransk-2-15-4-example-2',
      type: 'example',
      title: 'Eksempel 2: La réclamation',
      problem: `Oversett denne klagedialogen til fransk:\n\n- Kunde: God dag. Jeg vil gjerne klage på et produkt.\n- Ansatt: Selvfølgelig. Hva er problemet?\n- Kunde: Jeg kjøpte denne datamaskinen for en uke siden, og den virker ikke.\n- Ansatt: Jeg beklager ulempene. Vi kan bytte den eller gi tilbakebetaling.`,
      solution: `- Client: Bonjour. Je voudrais faire une réclamation au sujet d'un produit.\n- Employé: Bien sûr. Quel est le problème?\n- Client: J'ai acheté cet ordinateur il y a une semaine et il ne fonctionne pas.\n- Employé: Je suis désolé(e) pour le désagrément. Nous pouvons l'échanger ou vous rembourser.\n\n**Nyttige klagefraser:**\n- *Je voudrais faire une réclamation* (Jeg vil gjerne fremsette en klage)\n- *Je ne suis pas satisfait(e) de...* (Jeg er ikke fornøyd med...)\n- *Je suis désolé(e) pour le désagrément* (Jeg beklager ulempene)\n- *Nous pouvons l'échanger ou vous rembourser* (Vi kan bytte den eller gi tilbakebetaling)`
    },
    {
      id: 'fransk-2-15-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan sier du «jobbintervju» på fransk?',
        options: [
          { id: 'a', text: 'La réclamation', isCorrect: false },
          { id: 'b', text: 'L\'entretien d\'embauche', isCorrect: true },
          { id: 'c', text: 'La négociation', isCorrect: false },
          { id: 'd', text: 'La présentation', isCorrect: false },
        ],
        solution: 'Riktig svar er B. «L\'entretien d\'embauche» betyr jobbintervjuet. «Entretien» betyr samtale/intervju, og «embauche» betyr ansettelse.',
      }
    },
    {
      id: 'fransk-2-15-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken frase bruker du for å fremsette en klage høflig?',
        options: [
          { id: 'a', text: 'Donnez-moi mon argent!', isCorrect: false },
          { id: 'b', text: 'C\'est nul, votre produit!', isCorrect: false },
          { id: 'c', text: 'Je voudrais faire une réclamation.', isCorrect: true },
          { id: 'd', text: 'Je déteste ce magasin.', isCorrect: false },
        ],
        solution: 'Riktig svar er C. «Je voudrais faire une réclamation» (Jeg vil gjerne fremsette en klage) er den høflige og formelle måten å klage på. Bruk alltid «je voudrais» (betinget form) for høflighet.',
      }
    },
    {
      id: 'fransk-2-15-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett disse jobbintervju-frasene til fransk:\n\n1. Jeg har tre års arbeidserfaring.\n2. Mine viktigste ferdigheter er kreativitet og organisering.\n3. Jeg ønsker å jobbe i deres bedrift fordi den er innovativ.\n4. Jeg har en bachelorgrad i økonomi.\n5. Jeg er tilgjengelig fra januar.',
        solution: '1. J\'ai trois ans d\'expérience professionnelle.\n2. Mes compétences principales sont la créativité et l\'organisation.\n3. Je souhaite travailler dans votre entreprise parce qu\'elle est innovante.\n4. J\'ai une licence en économie.\n5. Je suis disponible à partir de janvier.',
      }
    },
    {
      id: 'fransk-2-15-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv en kort forhandlingsdialog (6–8 replikker) på fransk mellom en kunde og en selger. Kunden vil ha rabatt på en vare som koster 200 euro. Bruk formelt språk og forhandlingsuttrykk.',
        solution: 'Eksempel:\n\nClient: Bonjour. Je suis intéressé par ce produit, mais je trouve le prix un peu élevé.\nVendeur: Le prix est de 200 euros, c\'est un très bon produit de qualité.\nClient: Serait-il possible d\'avoir une réduction?\nVendeur: Je peux vous proposer une réduction de 10%, soit 180 euros.\nClient: C\'est mieux, mais pourriez-vous descendre à 160 euros?\nVendeur: Je suis désolé, 170 euros est le minimum que je peux offrir.\nClient: D\'accord, c\'est un bon compromis. Je le prends.\nVendeur: Parfait! Merci de votre achat.',
      }
    },
    {
      id: 'fransk-2-15-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg ett av følgende rollespill og skriv en komplett dialog (10–12 replikker) på fransk:\n\na) Jobbintervju: Du søker en stilling som franskassistent på en skole. Intervjueren stiller spørsmål om din utdanning, erfaring og motivasjon.\n\nb) Klage: Du har bestilt en reise gjennom et reisebyrå, men hotellet var dårligere enn annonsert. Du klager og ber om kompensasjon.\n\nBruk formelt språk med vous-formen og profesjonelle uttrykk.',
        solution: 'Eksempel (a: Jobbintervju):\n\nRecruteur: Bonjour, bienvenue. Veuillez vous asseoir. Pouvez-vous vous présenter?\nCandidat: Bonjour. Je m\'appelle Thomas Martin. J\'ai 23 ans et je suis étudiant en langues étrangères.\nRecruteur: Quelle est votre expérience avec la langue française?\nCandidat: J\'étudie le français depuis six ans et j\'ai passé un semestre à Paris.\nRecruteur: Pourquoi souhaitez-vous travailler comme assistant de français?\nCandidat: J\'adore la langue française et je voudrais partager ma passion avec les élèves.\nRecruteur: Quelles sont vos qualités pour ce poste?\nCandidat: Je suis patient, enthousiaste et j\'ai de bonnes compétences en communication.\nRecruteur: Êtes-vous disponible à temps plein?\nCandidat: Oui, je suis disponible à partir de septembre.\nRecruteur: Très bien. Nous vous contacterons la semaine prochaine.\nCandidat: Merci beaucoup. J\'attends votre réponse avec impatience.',
      }
    },
    {
      id: 'fransk-2-15-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-15-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr «serait-il possible de...»?',
        options: [
          { id: 'a', text: 'Det er umulig å...', isCorrect: false },
          { id: 'b', text: 'Ville det vært mulig å...', isCorrect: true },
          { id: 'c', text: 'Det er nødvendig å...', isCorrect: false },
          { id: 'd', text: 'Jeg nekter å...', isCorrect: false },
        ],
        solution: 'Riktig svar er B. «Serait-il possible de...» betyr «Ville det vært mulig å...» og er et svært høflig uttrykk som bruker conditionnel (betinget form). Det brukes i forhandlinger og formelle forespørsler.',
      }
    },
    {
      id: 'fransk-2-15-4-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har vi lært å håndtere tre avanserte rollespillsituasjoner:\n\n- **L'entretien d'embauche** – Presentere seg selv, beskrive kvalifikasjoner og svare på intervjuspørsmål.\n- **La négociation** – Foreslå, akseptere og avvise betingelser høflig.\n- **La réclamation** – Klage på et produkt eller en tjeneste og be om løsning.\n\n**Viktige uttrykk:**\n- *Pouvez-vous vous présenter?* (Kan du presentere deg?)\n- *Serait-il possible de...?* (Ville det vært mulig å...?)\n- *Je voudrais faire une réclamation* (Jeg vil gjerne fremsette en klage)\n- *Je suis désolé(e) pour le désagrément* (Jeg beklager ulempene)\n\n**Tips:** I profesjonelle situasjoner på fransk, bruk alltid *vous*-formen og conditionnel (*je voudrais*, *pourriez-vous*, *serait-il possible*) for å virke høflig og profesjonell.`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'l\'entretien d\'embauche', definition: 'Jobbintervjuet – formelt møte mellom søker og arbeidsgiver' },
    { term: 'la négociation', definition: 'Forhandlingen – prosessen der partene prøver å bli enige' },
    { term: 'la réclamation', definition: 'Klagen – uttrykke misnøye med en tjeneste eller et produkt' },
    { term: 'le compromis', definition: 'Kompromisset – en løsning begge parter aksepterer' },
    { term: 'le remboursement', definition: 'Tilbakebetalingen/refusjonen' },
    { term: 'les compétences', definition: 'Kompetansene/ferdighetene' },
    { term: 'le poste', definition: 'Stillingen (i jobbsammenheng)' },
    { term: 'le salaire', definition: 'Lønnen' },
  ],
};

// ============================================================================
// KAPITTEL 16.1: Révision grammaticale
// ============================================================================

export const CHAPTER_FRANSK_2_16_1: TextbookChapter = {
  id: 'fransk-2-16-1',
  courseId: 'fransk-2',
  chapterNumber: '16.1',
  title: 'Révision grammaticale',
  subtitle: 'Komplett grammatikkrepetisjon',
  description: 'Repeter all viktig fransk grammatikk: tider, modus, setningsstrukturer og avanserte konstruksjoner. Systematisk gjennomgang for eksamensforberedelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'Beherske alle franske verbaltider og kunne velge riktig tid i kontekst',
    'Kunne bruke subjonctif, conditionnel og andre modi korrekt',
    'Mestre komplekse setningsstrukturer med relativsetninger og konjunksjoner',
  ],
  content: [
    {
      id: 'fransk-2-16-1-intro',
      type: 'text',
      content: `## Révision grammaticale – Komplett grammatikkrepetisjon\n\nI dette kapittelet repeterer vi de viktigste grammatiske emnene du har lært gjennom hele kurset. En solid grammatikkforståelse er avgjørende for å lykkes på eksamen, enten det gjelder leseforståelse, skriftlig produksjon eller muntlig eksamen.\n\nVi går systematisk gjennom:\n- **Les temps verbaux** – Alle verbaltider\n- **Les modes** – Modus (subjonctif, conditionnel, impératif)\n- **Les structures complexes** – Komplekse setningsstrukturer\n- **Les pièges courants** – Vanlige feller\n\nBruk dette kapittelet som et oppslagsverk og tren på de oppgavene der du føler deg minst sikker.`
    },
    {
      id: 'fransk-2-16-1-def-1',
      type: 'definition',
      title: 'Oversikt over franske verbaltider',
      content: `**Le présent** – Nåtid. Vanlige handlinger og tilstander: *Je parle français.* (Jeg snakker fransk.)\n\n**Le passé composé** – Sammensatt fortid. Avsluttede handlinger: *J'ai mangé.* (Jeg har spist / Jeg spiste.)\n\n**L'imparfait** – Fortidsbeskrivelse. Vaner og tilstander i fortiden: *Il faisait beau.* (Det var fint vær.)\n\n**Le plus-que-parfait** – Førfortid. Handling som skjedde før en annen fortidshandling: *J'avais déjà mangé quand il est arrivé.* (Jeg hadde allerede spist da han kom.)\n\n**Le futur simple** – Enkel fremtid: *Je partirai demain.* (Jeg reiser i morgen.)\n\n**Le futur proche** – Nær fremtid (aller + infinitiv): *Je vais partir.* (Jeg skal reise.)\n\n**Le conditionnel présent** – Betinget form: *Je voudrais un café.* (Jeg ville gjerne ha en kaffe.)`
    },
    {
      id: 'fransk-2-16-1-def-2',
      type: 'definition',
      title: 'Modus: Subjonctif, conditionnel og impératif',
      content: `**Le subjonctif** – Brukes etter uttrykk for ønske, følelse, tvil og nødvendighet:\n- *Il faut que tu viennes.* (Du må komme.)\n- *Je suis content que tu sois là.* (Jeg er glad for at du er her.)\n\n**Le conditionnel** – Brukes for høflighet, hypotetiske situasjoner og ønsker:\n- *Je voudrais partir.* (Jeg ville gjerne reise.)\n- *Si j'avais de l'argent, j'achèterais une voiture.* (Hvis jeg hadde penger, ville jeg kjøpt en bil.)\n\n**L'impératif** – Bydeform. Brukes for å gi ordrer, råd eller instruksjoner:\n- *Parle!* (Snakk!) / *Parlons!* (La oss snakke!) / *Parlez!* (Snakk! – formelt)\n- *Ne parle pas!* (Ikke snakk!)`
    },
    {
      id: 'fransk-2-16-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Velg riktig tid',
      problem: `Sett inn verbet i riktig tid (passé composé, imparfait eller plus-que-parfait):\n\n1. Quand je (être) _______ petit, je (jouer) _______ au football tous les jours.\n2. Hier, elle (aller) _______ au cinéma.\n3. Il (déjà/partir) _______ quand nous (arriver) _______ .\n4. Le soleil (briller) _______ et les oiseaux (chanter) _______ .`,
      solution: `1. Quand j'**étais** petit, je **jouais** au football tous les jours. (Imparfait – tilstand og vane i fortiden)\n2. Hier, elle **est allée** au cinéma. (Passé composé – avsluttet handling)\n3. Il **était déjà parti** quand nous **sommes arrivés**. (Plus-que-parfait for den første handlingen, passé composé for den andre)\n4. Le soleil **brillait** et les oiseaux **chantaient**. (Imparfait – beskrivelse av situasjon i fortiden)\n\n**Huskeregel:** Passé composé = hva som skjedde. Imparfait = hvordan det var. Plus-que-parfait = hva som hadde skjedd før.`
    },
    {
      id: 'fransk-2-16-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Subjonctif eller indicatif?',
      problem: `Velg riktig form av verbet i parentes:\n\n1. Je pense qu'il (venir/vient/vienne) demain.\n2. Il faut que tu (fais/fasses) tes devoirs.\n3. Je sais qu'elle (est/soit) malade.\n4. Je suis triste qu'il (part/parte) .\n5. Il est certain qu'elle (a/ait) raison.`,
      solution: `1. Je pense qu'il **vient** demain. (Indicatif – *penser que* uttrykker noe man tror er sant)\n2. Il faut que tu **fasses** tes devoirs. (Subjonctif – *il faut que* krever subjonctif)\n3. Je sais qu'elle **est** malade. (Indicatif – *savoir que* uttrykker sikkerhet)\n4. Je suis triste qu'il **parte**. (Subjonctif – følelsesuttrykk krever subjonctif)\n5. Il est certain qu'elle **a** raison. (Indicatif – *il est certain que* uttrykker sikkerhet)\n\n**Regel:** Subjonctif brukes etter uttrykk for følelse, ønske, tvil og nødvendighet. Indicatif brukes etter uttrykk for sikkerhet og tro.`
    },
    {
      id: 'fransk-2-16-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken setning bruker korrekt tid?',
        options: [
          { id: 'a', text: 'Quand je suis arrivé, il a déjà mangé.', isCorrect: false },
          { id: 'b', text: 'Quand je suis arrivé, il avait déjà mangé.', isCorrect: true },
          { id: 'c', text: 'Quand j\'arrivais, il a déjà mangé.', isCorrect: false },
          { id: 'd', text: 'Quand je suis arrivé, il mange déjà.', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Når én handling skjedde før en annen i fortiden, bruker vi plus-que-parfait (avait mangé) for den første handlingen og passé composé (suis arrivé) for den andre.',
      }
    },
    {
      id: 'fransk-2-16-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilket uttrykk krever subjonctif?',
        options: [
          { id: 'a', text: 'Je pense que...', isCorrect: false },
          { id: 'b', text: 'Je sais que...', isCorrect: false },
          { id: 'c', text: 'Il est certain que...', isCorrect: false },
          { id: 'd', text: 'Il faut que...', isCorrect: true },
        ],
        solution: 'Riktig svar er D. «Il faut que» (man må/det er nødvendig at) krever alltid subjonctif. De andre uttrykkene uttrykker sikkerhet eller overbevisning og tar indicatif.',
      }
    },
    {
      id: 'fransk-2-16-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Sett verbene i riktig tid (présent, passé composé, imparfait, futur simple eller conditionnel):\n\n1. Demain, nous (partir) _______ en vacances.\n2. Quand j\'(être) _______ jeune, je (habiter) _______ à Paris.\n3. Si j\'avais le temps, je (lire) _______ ce livre.\n4. Hier, ils (voir) _______ un film intéressant.\n5. En ce moment, elle (travailler) _______ au bureau.',
        solution: '1. Demain, nous **partirons** en vacances. (Futur simple – planlagt fremtid)\n2. Quand j\'**étais** jeune, je **habitais** à Paris. (Imparfait – tilstand/vane i fortiden)\n3. Si j\'avais le temps, je **lirais** ce livre. (Conditionnel – hypotetisk situasjon)\n4. Hier, ils **ont vu** un film intéressant. (Passé composé – avsluttet handling i går)\n5. En ce moment, elle **travaille** au bureau. (Présent – nåværende handling)',
      }
    },
    {
      id: 'fransk-2-16-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilken setning med conditionnel er korrekt?',
        options: [
          { id: 'a', text: 'Si j\'aurais de l\'argent, j\'achèterais une maison.', isCorrect: false },
          { id: 'b', text: 'Si j\'avais de l\'argent, j\'achèterais une maison.', isCorrect: true },
          { id: 'c', text: 'Si j\'ai de l\'argent, j\'achèterais une maison.', isCorrect: false },
          { id: 'd', text: 'Si j\'avais de l\'argent, j\'achète une maison.', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Regelen for hypotetiske betingelsessetninger er: Si + imparfait, conditionnel présent. Man bruker ALDRI conditionnel etter «si» i en betingelsessetning.',
      }
    },
    {
      id: 'fransk-2-16-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om disse setningene ved å bruke angitt grammatisk konstruksjon:\n\n1. Il pleut. Je ne sors pas. → Bruk «à cause de» + substantiv\n2. Elle est intelligente. Elle réussit. → Bruk «grâce à» + substantiv\n3. Tu dois venir. C\'est nécessaire. → Bruk «il faut que» + subjonctif\n4. Il fait beau. Nous allons à la plage. → Bruk «si» + présent\n5. Je veux partir. Mon père ne veut pas. → Bruk «bien que» + subjonctif',
        solution: '1. À cause de **la pluie**, je ne sors pas.\n2. Grâce à **son intelligence**, elle réussit.\n3. Il faut que tu **viennes**.\n4. S\'il fait beau, nous **allons** à la plage.\n5. Bien que je **veuille** partir, mon père ne veut pas.\n\nMerk: «bien que» krever alltid subjonctif, akkurat som «il faut que».',
      }
    },
    {
      id: 'fransk-2-16-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (6–8 setninger) på fransk der du bruker minst fire forskjellige verbaltider og minst én subjonctif-konstruksjon. Temaet er: «Min drømmereise til Frankrike». Marker hvilke tider du bruker.',
        solution: 'Eksempel:\n\nL\'année dernière, je **suis allé** en France pour la première fois. (passé composé) Quand j\'**étais** petit, je **rêvais** toujours de visiter Paris. (imparfait) Il **faut que** je **dise** que la Tour Eiffel est magnifique! (subjonctif) Demain, je **partirai** pour la Côte d\'Azur. (futur simple) Si j\'**avais** plus de temps, je **visiterais** aussi la Provence. (conditionnel) En ce moment, je **profite** de chaque instant. (présent) J\'**avais déjà vu** des photos, mais la réalité est encore plus belle. (plus-que-parfait)',
      }
    },
    {
      id: 'fransk-2-16-1-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har vi repetert de viktigste grammatiske emnene:\n\n- **Verbaltider:** Présent, passé composé, imparfait, plus-que-parfait, futur simple, futur proche og conditionnel.\n- **Subjonctif:** Brukes etter uttrykk for følelse, ønske, tvil og nødvendighet (*il faut que, je suis content que, bien que*).\n- **Conditionnel:** Brukes for høflighet og hypotetiske situasjoner. Husk: si + imparfait → conditionnel.\n- **Komplekse strukturer:** Relativsetninger, betingelsessetninger, kausaluttrykk.\n\n**Viktigste huskeregeler:**\n- Passé composé = avsluttet handling. Imparfait = beskrivelse/vane.\n- Aldri conditionnel etter *si* i en betingelsessetning.\n- Subjonctif etter: *il faut que, je veux que, bien que, avant que, pour que*.`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'le passé composé', definition: 'Sammensatt fortid – brukes for avsluttede handlinger i fortiden' },
    { term: 'l\'imparfait', definition: 'Fortidsbeskrivelse – brukes for vaner og tilstander i fortiden' },
    { term: 'le plus-que-parfait', definition: 'Førfortid – handling som skjedde før en annen fortidshandling' },
    { term: 'le subjonctif', definition: 'Modus som brukes etter uttrykk for følelse, ønske, tvil og nødvendighet' },
    { term: 'le conditionnel', definition: 'Betinget form – brukes for høflighet og hypotetiske situasjoner' },
    { term: 'l\'impératif', definition: 'Bydeform – brukes for ordrer, råd og instruksjoner' },
    { term: 'le futur simple', definition: 'Enkel fremtid – brukes for planlagte eller forutsagte handlinger' },
    { term: 'l\'indicatif', definition: 'Indikativ – den vanlige modusen som uttrykker fakta og sikkerhet' },
  ],
};

// ============================================================================
// KAPITTEL 16.2: Révision du vocabulaire
// ============================================================================

export const CHAPTER_FRANSK_2_16_2: TextbookChapter = {
  id: 'fransk-2-16-2',
  courseId: 'fransk-2',
  chapterNumber: '16.2',
  title: 'Révision du vocabulaire',
  subtitle: 'Ordforrådsrepetisjon med tematiske ordgrupper',
  description: 'Repeter og systematiser ordforrådet fra hele kurset. Tematiske ordgrupper, nyttige uttrykk og idiomatiske vendinger for eksamensforberedelse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Beherske tematisk vokabular innenfor alle gjennomgåtte emner',
    'Kunne bruke idiomatiske uttrykk og faste vendinger korrekt',
    'Utvide det aktive ordforrådet for skriftlig og muntlig produksjon',
  ],
  content: [
    {
      id: 'fransk-2-16-2-intro',
      type: 'text',
      content: `## Révision du vocabulaire – Ordforrådsrepetisjon\n\nEt rikt ordforråd er nøkkelen til å kommunisere effektivt på fransk. I dette kapittelet går vi systematisk gjennom de viktigste ordgruppene fra hele kurset og introduserer nyttige uttrykk du kan bruke på eksamen.\n\nVi dekker følgende tematiske områder:\n- **La vie quotidienne** – Dagliglivet\n- **La société et la politique** – Samfunn og politikk\n- **Les sentiments et les opinions** – Følelser og meninger\n- **Les expressions idiomatiques** – Idiomatiske uttrykk\n- **Les connecteurs logiques** – Bindeord og logiske forbindelser`
    },
    {
      id: 'fransk-2-16-2-def-1',
      type: 'definition',
      title: 'Les connecteurs logiques – Bindeord for tekststruktur',
      content: `**D'abord / Premièrement** – Først / For det første\n\n**Ensuite / Puis** – Deretter / Så\n\n**De plus / En outre** – Dessuten / I tillegg\n\n**Cependant / Pourtant / Néanmoins** – Imidlertid / Likevel\n\n**Par conséquent / Donc** – Følgelig / Altså\n\n**En revanche / Par contre** – Derimot / På den annen side\n\n**En conclusion / Pour conclure** – Til slutt / For å konkludere\n\n**En effet** – Nemlig / I virkeligheten\n\n**C'est-à-dire** – Det vil si`
    },
    {
      id: 'fransk-2-16-2-vocab-table',
      type: 'text',
      content: `## Uttrykk for å gi sin mening\n\n| Fransk | Norsk | Bruk |\n|--------|-------|------|\n| À mon avis... | Etter min mening... | Innleder en personlig mening |\n| Je pense que... | Jeg tenker at... | Mening (+ indicatif) |\n| Je crois que... | Jeg tror at... | Mening (+ indicatif) |\n| Il me semble que... | Det virker for meg som... | Forsiktig mening (+ indicatif) |\n| Je suis convaincu(e) que... | Jeg er overbevist om at... | Sterk mening (+ indicatif) |\n| Je suis d'accord avec... | Jeg er enig med... | Enighet |\n| Je ne suis pas d'accord... | Jeg er ikke enig... | Uenighet |\n| Il est important de... | Det er viktig å... | Fremheve viktighet |\n| Il faut souligner que... | Man må understreke at... | Fremheve poeng |\n| En ce qui concerne... | Når det gjelder... | Introdusere nytt tema |`
    },
    {
      id: 'fransk-2-16-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Bruke bindeord i tekst',
      problem: `Sett inn passende bindeord (connecteurs logiques) i denne teksten:\n\n*_______, je voudrais parler de l'environnement. _______, le réchauffement climatique est un problème grave. _______, la pollution de l'air augmente dans les grandes villes. _______, certaines personnes ne croient pas au changement climatique. _______, il est important que nous agissions maintenant. _______, chacun peut faire quelque chose pour protéger la planète.*`,
      solution: `**D'abord**, je voudrais parler de l'environnement. **En effet**, le réchauffement climatique est un problème grave. **De plus**, la pollution de l'air augmente dans les grandes villes. **Cependant**, certaines personnes ne croient pas au changement climatique. **Par conséquent**, il est important que nous agissions maintenant. **En conclusion**, chacun peut faire quelque chose pour protéger la planète.\n\n**Tips:** Bruk bindeord for å strukturere teksten og gjøre argumentasjonen tydelig. Varier uttrykkene for å vise et rikt språk.`
    },
    {
      id: 'fransk-2-16-2-def-2',
      type: 'definition',
      title: 'Expressions idiomatiques – Idiomatiske uttrykk',
      content: `**Avoir le cafard** – Å være deprimert/nedstemt (bokstavelig: å ha kakerlakken)\n\n**Avoir du mal à** – Å ha vanskelig for å\n\n**Être au courant** – Å være oppdatert/vite om noe\n\n**Mettre au point** – Å klargjøre/presisere\n\n**Avoir beau (+ infinitif)** – Uansett hvor mye man... (*J'ai beau essayer, je n'y arrive pas.* – Uansett hvor mye jeg prøver, klarer jeg det ikke.)\n\n**Il n'empêche que** – Det hindrer ikke at / Likevel\n\n**Tomber dans les pommes** – Å besvime (bokstavelig: å falle i eplene)\n\n**Ce n'est pas la mer à boire** – Det er ikke verdens undergang (bokstavelig: det er ikke havet å drikke)`
    },
    {
      id: 'fransk-2-16-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Tematiske ordgrupper',
      problem: `Kategoriser disse ordene i riktig tematisk gruppe:\n\n*le chômage, la joie, le député, la tristesse, l'élection, la pollution, l'espoir, le réchauffement, le parti politique, l'anxiété, les déchets, voter*\n\n**Grupper:**\n- La politique: ?\n- L'environnement: ?\n- Les sentiments: ?`,
      solution: `**La politique:** le député, l'élection, le parti politique, voter\n\n**L'environnement:** la pollution, le réchauffement, les déchets, le chômage\n\n**Les sentiments:** la joie, la tristesse, l'espoir, l'anxiété\n\n**Merk:** *Le chômage* (arbeidsledighet) kan passe under både politikk og samfunn. Det viktige er at du kjenner ordene og kan bruke dem i riktig kontekst.`
    },
    {
      id: 'fransk-2-16-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr det idiomatiske uttrykket «avoir le cafard»?',
        options: [
          { id: 'a', text: 'Å ha en kakerlakk i huset', isCorrect: false },
          { id: 'b', text: 'Å være deprimert eller nedstemt', isCorrect: true },
          { id: 'c', text: 'Å drikke kaffe', isCorrect: false },
          { id: 'd', text: 'Å være redd for insekter', isCorrect: false },
        ],
        solution: 'Riktig svar er B. «Avoir le cafard» er et idiomatisk uttrykk som betyr å være deprimert eller nedstemt. Bokstavelig betyr det «å ha kakerlakken», men det brukes figurativt.',
      }
    },
    {
      id: 'fransk-2-16-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilket bindeord passer best for å uttrykke en motsetning?',
        options: [
          { id: 'a', text: 'De plus', isCorrect: false },
          { id: 'b', text: 'Par conséquent', isCorrect: false },
          { id: 'c', text: 'Cependant', isCorrect: true },
          { id: 'd', text: 'En effet', isCorrect: false },
        ],
        solution: 'Riktig svar er C. «Cependant» (imidlertid/likevel) brukes for å uttrykke en motsetning. «De plus» betyr dessuten, «par conséquent» betyr følgelig, og «en effet» betyr nemlig.',
      }
    },
    {
      id: 'fransk-2-16-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett disse uttrykkene for meningsytring til fransk:\n\n1. Etter min mening er miljøet viktig.\n2. Jeg er enig med deg.\n3. Jeg er overbevist om at vi må handle.\n4. Når det gjelder utdanning, er Frankrike et godt eksempel.\n5. Det er viktig å lære fremmedspråk.',
        solution: '1. **À mon avis**, l\'environnement est important.\n2. **Je suis d\'accord** avec toi.\n3. **Je suis convaincu(e) que** nous devons agir.\n4. **En ce qui concerne** l\'éducation, la France est un bon exemple.\n5. **Il est important d\'**apprendre des langues étrangères.',
      }
    },
    {
      id: 'fransk-2-16-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «en revanche»?',
        options: [
          { id: 'a', text: 'I tillegg', isCorrect: false },
          { id: 'b', text: 'For å konkludere', isCorrect: false },
          { id: 'c', text: 'Derimot / På den annen side', isCorrect: true },
          { id: 'd', text: 'Nemlig', isCorrect: false },
        ],
        solution: 'Riktig svar er C. «En revanche» betyr «derimot» eller «på den annen side» og brukes for å introdusere et kontrasterende synspunkt.',
      }
    },
    {
      id: 'fransk-2-16-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort avsnitt (5–7 setninger) på fransk der du gir din mening om et av disse temaene. Bruk minst fire forskjellige bindeord (connecteurs logiques) og to uttrykk for meningsytring.\n\nVelg ett tema:\na) Les réseaux sociaux (Sosiale medier)\nb) L\'environnement (Miljøet)\nc) L\'importance des langues étrangères (Viktigheten av fremmedspråk)',
        solution: 'Eksempel (tema a):\n\n**À mon avis**, les réseaux sociaux ont changé notre société. **D\'abord**, ils permettent de rester en contact avec des amis dans le monde entier. **De plus**, ils sont une source d\'information rapide. **Cependant**, **je suis convaincu(e) que** les réseaux sociaux peuvent aussi être dangereux. **En effet**, beaucoup de jeunes passent trop de temps sur leur téléphone. **Par conséquent**, il est important d\'apprendre à les utiliser de manière responsable. **En conclusion**, les réseaux sociaux sont utiles, mais il faut être prudent.',
      }
    },
    {
      id: 'fransk-2-16-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar på norsk hva disse franske idiomatiske uttrykkene betyr, og lag en setning med hvert uttrykk på fransk:\n\n1. Avoir du mal à\n2. Être au courant\n3. Ce n\'est pas la mer à boire\n4. Avoir beau essayer',
        solution: '1. **Avoir du mal à** = Å ha vanskelig for å. *J\'ai du mal à comprendre cette leçon.* (Jeg har vanskelig for å forstå denne leksjonen.)\n\n2. **Être au courant** = Å være oppdatert/informert. *Tu es au courant de la nouvelle?* (Vet du om nyheten?)\n\n3. **Ce n\'est pas la mer à boire** = Det er ikke verdens undergang / Det er ikke så vanskelig. *L\'examen est long, mais ce n\'est pas la mer à boire.* (Eksamen er lang, men det er ikke verdens undergang.)\n\n4. **Avoir beau essayer** = Uansett hvor mye man prøver. *J\'ai beau essayer, je n\'arrive pas à prononcer ce mot.* (Uansett hvor mye jeg prøver, klarer jeg ikke å uttale dette ordet.)',
      }
    },
    {
      id: 'fransk-2-16-2-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har vi repetert og systematisert ordforrådet:\n\n- **Connecteurs logiques:** Bindeord for å strukturere tekst (*d'abord, ensuite, cependant, par conséquent, en conclusion*).\n- **Expressions d'opinion:** Uttrykk for å gi sin mening (*à mon avis, je pense que, je suis convaincu(e) que*).\n- **Expressions idiomatiques:** Idiomatiske vendinger som gjør språket rikere (*avoir le cafard, être au courant, avoir beau*).\n- **Vocabulaire thématique:** Ordgrupper innen politikk, miljø, følelser og dagligliv.\n\n**Eksamentips:** Bruk bindeord aktivt i skriftlige tekster for å vise strukturert argumentasjon. Varier uttrykkene for å demonstrere et rikt ordforråd. Sensor legger merke til elever som bruker idiomatiske uttrykk korrekt!`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'les connecteurs logiques', definition: 'Bindeord og logiske forbindelser som strukturerer tekst' },
    { term: 'à mon avis', definition: 'Etter min mening – innleder en personlig vurdering' },
    { term: 'cependant', definition: 'Imidlertid/likevel – uttrykker motsetning' },
    { term: 'par conséquent', definition: 'Følgelig/altså – uttrykker konsekvens' },
    { term: 'en revanche', definition: 'Derimot – introduserer et kontrasterende synspunkt' },
    { term: 'avoir le cafard', definition: 'Å være deprimert (idiomatisk uttrykk)' },
    { term: 'être au courant', definition: 'Å være oppdatert/informert om noe' },
    { term: 'en ce qui concerne', definition: 'Når det gjelder – introduserer et nytt tema' },
  ],
};

// ============================================================================
// KAPITTEL 16.3: Stratégies d'examen
// ============================================================================

export const CHAPTER_FRANSK_2_16_3: TextbookChapter = {
  id: 'fransk-2-16-3',
  courseId: 'fransk-2',
  chapterNumber: '16.3',
  title: "Stratégies d'examen",
  subtitle: 'Eksamensstrategier for alle deler',
  description: 'Lær effektive strategier for leseforståelse, skriftlig produksjon og muntlig eksamen i fransk. Tips og teknikker for å prestere best mulig på eksamen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Beherske strategier for leseforståelse av franske tekster',
    'Kunne planlegge og strukturere en skriftlig eksamensbesvarelse',
    'Kjenne til teknikker for muntlig eksamen og presentasjon',
  ],
  content: [
    {
      id: 'fransk-2-16-3-intro',
      type: 'text',
      content: `## Stratégies d'examen – Eksamensstrategier\n\nEksamen i fransk nivå 2 tester flere ferdigheter: leseforståelse, skriftlig produksjon, lytteforståelse og muntlig kommunikasjon. For å prestere best mulig trenger du ikke bare språkkunnskaper, men også gode strategier.\n\nI dette kapittelet lærer du:\n- **La compréhension écrite** – Strategier for leseforståelse\n- **La production écrite** – Strategier for skriftlig produksjon\n- **L'oral** – Strategier for muntlig eksamen\n- **La gestion du temps** – Tidsstyring under eksamen`
    },
    {
      id: 'fransk-2-16-3-def-1',
      type: 'definition',
      title: 'Strategier for leseforståelse (La compréhension écrite)',
      content: `**Skumlesing (le survol)** – Les raskt gjennom teksten for å få et overblikk over tema og struktur.\n\n**Nøkkelord (les mots-clés)** – Finn og understrek nøkkelordene i teksten som gir hovedinnholdet.\n\n**Kontekstforståelse (la compréhension par le contexte)** – Gjett betydningen av ukjente ord ut fra sammenhengen i setningen.\n\n**Spørsmålsstyrt lesing** – Les spørsmålene før du leser teksten grundig, så vet du hva du skal lete etter.\n\n**Markering av tekstbevis** – Marker de stedene i teksten der du finner svarene, slik at du kan referere tilbake.`
    },
    {
      id: 'fransk-2-16-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Leseforståelsesstrategi i praksis',
      problem: `Les denne teksten og svar på spørsmålene. Bruk strategien «les spørsmålene først».\n\n**Spørsmål:**\n1. Quel est le sujet principal du texte?\n2. Quels sont les avantages mentionnés?\n3. Quel problème est soulevé?\n\n**Tekst:**\n*Le télétravail est devenu très populaire en France depuis 2020. Beaucoup d'entreprises permettent maintenant à leurs employés de travailler depuis chez eux. Les avantages sont nombreux: on gagne du temps en évitant les transports, on est plus flexible et on peut mieux organiser sa journée. Cependant, certains employés se sentent isolés et ont du mal à séparer la vie professionnelle de la vie privée. Il est donc important de trouver un bon équilibre entre le travail au bureau et le télétravail.*`,
      solution: `1. Le sujet principal est **le télétravail en France** (hjemmekontor i Frankrike).\n2. Les avantages mentionnés sont: **gagner du temps** (spare tid), **être plus flexible** (være mer fleksibel) et **mieux organiser sa journée** (bedre organisere dagen sin).\n3. Le problème est que certains employés **se sentent isolés** (føler seg isolerte) et **ont du mal à séparer la vie professionnelle de la vie privée** (har vanskelig for å skille jobb og privatliv).\n\n**Strategitips:** Legg merke til at vi leste spørsmålene først. Dermed visste vi at vi skulle lete etter: 1) hovedtema, 2) fordeler, 3) problemer. Dette gjør lesingen mye mer effektiv.`
    },
    {
      id: 'fransk-2-16-3-def-2',
      type: 'definition',
      title: 'Strategier for skriftlig produksjon (La production écrite)',
      content: `**Planlegging (la planification)** – Bruk 5 minutter på å lage en disposisjon før du skriver. Del teksten i innledning, hoveddel og avslutning.\n\n**Innledning (l'introduction)** – Presenter temaet kort og tydelig. Bruk: *Dans ce texte, je vais parler de...*\n\n**Hoveddel (le développement)** – Presenter argumentene dine med eksempler. Bruk bindeord: *d'abord, ensuite, de plus, cependant*.\n\n**Avslutning (la conclusion)** – Oppsummer hovedpoengene og gi din personlige mening: *En conclusion, je pense que...*\n\n**Korrekturlesing (la relecture)** – Sett av 5 minutter til å sjekke grammatikk, samsvarsbøyning og rettskriving.`
    },
    {
      id: 'fransk-2-16-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Strukturere en skriftlig besvarelse',
      problem: `Lag en disposisjon for følgende skriveoppgave:\n\n«Êtes-vous pour ou contre l'uniforme scolaire? Donnez votre opinion avec des arguments.» (Er du for eller imot skoleuniform? Gi din mening med argumenter.)`,
      solution: `**Disposisjon:**\n\n**Introduction:**\n- Presenter temaet: L'uniforme scolaire est un sujet de débat.\n- Annonsér standpunktet: Je suis contre l'uniforme scolaire.\n\n**Développement – Argument 1:**\n- L'uniforme limite la liberté d'expression des élèves.\n- Eksempel: Les vêtements sont une forme d'expression personnelle.\n\n**Développement – Argument 2:**\n- L'uniforme ne résout pas les problèmes d'inégalité.\n- Eksempel: Les élèves trouvent d'autres moyens de montrer leur statut social.\n\n**Développement – Motargument:**\n- Cependant, certains disent que l'uniforme crée un sentiment d'égalité.\n\n**Conclusion:**\n- En conclusion, je pense que la liberté d'expression est plus importante.\n- Bien que l'uniforme ait des avantages, je crois que les élèves doivent pouvoir s'habiller librement.\n\n**Tips:** Å vise at du kjenner motargumentene (med *cependant*) demonstrerer modent og nyansert språk.`
    },
    {
      id: 'fransk-2-16-3-text-oral',
      type: 'text',
      content: `## Strategier for muntlig eksamen\n\nDen muntlige eksamen tester din evne til å kommunisere spontant på fransk. Her er de viktigste tipsene:\n\n**Presentasjon:**\n- Forbered en klar struktur: innledning, hoveddel, avslutning\n- Snakk sakte og tydelig – det er bedre enn å snakke fort og gjøre feil\n- Bruk notatkort med stikkord, ikke hele setninger\n\n**Samtale med sensor:**\n- Lytt nøye til spørsmålene\n- Hvis du ikke forstår, si: *Pourriez-vous répéter la question, s'il vous plaît?*\n- Bruk fyllord naturlig: *eh bien, alors, en fait, c'est-à-dire*\n- Hvis du ikke vet et ord, forklar med andre ord: *C'est une chose qui sert à...*\n\n**Vanlige fyllord for samtale:**\n- *Eh bien...* (Vel...)\n- *Alors...* (Altså...)\n- *En fait...* (Egentlig...)\n- *Disons que...* (La oss si at...)\n- *Comment dire...* (Hvordan skal jeg si det...)`
    },
    {
      id: 'fransk-2-16-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du gjøre FØRST når du får en leseforståelsesoppgave på eksamen?',
        options: [
          { id: 'a', text: 'Lese hele teksten grundig fra begynnelse til slutt', isCorrect: false },
          { id: 'b', text: 'Slå opp alle ukjente ord i ordboken', isCorrect: false },
          { id: 'c', text: 'Lese spørsmålene før du leser teksten', isCorrect: true },
          { id: 'd', text: 'Oversette teksten til norsk', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Ved å lese spørsmålene først vet du hva du skal lete etter i teksten. Dette gjør lesingen mer effektiv og sparer verdifull tid på eksamen.',
      }
    },
    {
      id: 'fransk-2-16-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvordan bør du strukturere en argumenterende tekst på eksamen?',
        options: [
          { id: 'a', text: 'Bare skrive ned alle tankene dine uten plan', isCorrect: false },
          { id: 'b', text: 'Introduction – Développement – Conclusion', isCorrect: true },
          { id: 'c', text: 'Starte med konklusjonen og så forklare hvorfor', isCorrect: false },
          { id: 'd', text: 'Skrive så mange ord som mulig uten å tenke på struktur', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En godt strukturert tekst følger modellen: Introduction (innledning), Développement (hoveddel med argumenter) og Conclusion (avslutning). Denne strukturen viser at du behersker sjangeren.',
      }
    },
    {
      id: 'fransk-2-16-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv en innledning (introduction) og en avslutning (conclusion) på fransk til denne skriveoppgaven:\n\n«Les jeunes et la technologie: avantages et inconvénients» (Ungdom og teknologi: fordeler og ulemper)\n\nBruk minst to meningsuttrykk og to bindeord.',
        solution: '**Introduction:**\nDans ce texte, je vais parler des jeunes et de la technologie. **À mon avis**, la technologie joue un rôle très important dans la vie des jeunes aujourd\'hui. **D\'abord**, je vais présenter les avantages, **ensuite** les inconvénients.\n\n**Conclusion:**\n**En conclusion**, la technologie a beaucoup d\'avantages pour les jeunes, comme l\'accès à l\'information et la communication avec des amis. **Cependant**, **je suis convaincu(e) que** les jeunes doivent apprendre à utiliser la technologie de manière responsable. Il est important de trouver un bon équilibre.',
      }
    },
    {
      id: 'fransk-2-16-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva bør du si på muntlig eksamen hvis du ikke forstår et spørsmål?',
        options: [
          { id: 'a', text: 'Bare svare noe tilfeldig og håpe det passer', isCorrect: false },
          { id: 'b', text: 'Svare på norsk i stedet', isCorrect: false },
          { id: 'c', text: '«Pourriez-vous répéter la question, s\'il vous plaît?»', isCorrect: true },
          { id: 'd', text: 'Bli stille og vente til sensor stiller et nytt spørsmål', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Å be om gjentakelse på fransk (Pourriez-vous répéter la question, s\'il vous plaît?) viser at du kan kommunisere på fransk, selv i vanskelige situasjoner. Det er mye bedre enn å bli stille eller svare på norsk.',
      }
    },
    {
      id: 'fransk-2-16-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbered en kort muntlig presentasjon (10–12 setninger) på fransk om følgende tema:\n\n«Mon lycée idéal» (Min ideelle videregående skole)\n\nStrukturér presentasjonen med en klar innledning, hoveddel og avslutning. Bruk bindeord og meningsuttrykk.',
        solution: 'Eksempel:\n\n**Introduction:** Bonjour, aujourd\'hui je vais vous parler de mon lycée idéal.\n\n**Développement:** D\'abord, dans mon lycée idéal, les élèves pourraient choisir librement leurs matières. En effet, je pense que chaque élève a des intérêts différents. De plus, il y aurait des cours de cuisine, de musique et d\'art. Ensuite, les journées scolaires seraient plus courtes, de 9 heures à 14 heures. Cependant, il faudrait que les élèves travaillent sérieusement pendant les cours. À mon avis, la technologie serait aussi très importante. Les élèves utiliseraient des tablettes et des ordinateurs.\n\n**Conclusion:** En conclusion, mon lycée idéal serait un endroit où les élèves se sentiraient libres et motivés. Je suis convaincu que l\'éducation devrait être agréable et stimulante.\n\nMerci de votre attention!',
      }
    },
    {
      id: 'fransk-2-16-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Leseforståelsesøvelse: Les teksten og svar på spørsmålene på fransk med hele setninger.\n\n*La France est un pays multilingue. Bien que le français soit la langue officielle, beaucoup de langues régionales existent encore: le breton en Bretagne, l\'alsacien en Alsace, le basque au Pays basque et l\'occitan dans le sud. Malheureusement, ces langues sont menacées de disparition. Le gouvernement français a créé des programmes pour les protéger, mais certains pensent que ces efforts ne sont pas suffisants. En revanche, d\'autres croient que l\'unité linguistique est importante pour la nation.*\n\n1. Quelle est la langue officielle de la France?\n2. Nommez deux langues régionales mentionnées dans le texte.\n3. Quel est le problème des langues régionales?\n4. Que fait le gouvernement pour résoudre ce problème?',
        solution: '1. La langue officielle de la France est **le français**.\n2. Deux langues régionales mentionnées sont **le breton** (en Bretagne) et **l\'alsacien** (en Alsace). (On pouvait aussi mentionner le basque ou l\'occitan.)\n3. Le problème est que ces langues **sont menacées de disparition** (er truet av utryddelse).\n4. Le gouvernement **a créé des programmes pour les protéger** (har laget programmer for å beskytte dem).\n\n**Strategitips:** Legg merke til at svarene er formulert som hele setninger, med referanse til teksten. På eksamen gir dette bedre uttelling enn korte stikkord.',
      }
    },
    {
      id: 'fransk-2-16-3-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har vi lært viktige eksamensstrategier:\n\n**Leseforståelse:**\n- Les spørsmålene først, deretter teksten\n- Finn nøkkelord og bruk kontekstforståelse\n- Marker tekstbevis for å finne svarene\n\n**Skriftlig produksjon:**\n- Planlegg med disposisjon: Introduction – Développement – Conclusion\n- Bruk bindeord og meningsuttrykk\n- Sett av tid til korrekturlesing\n\n**Muntlig eksamen:**\n- Snakk sakte og tydelig\n- Bruk fyllord naturlig (*eh bien, alors, en fait*)\n- Be om gjentakelse hvis du ikke forstår\n\n**Tidsstyring:**\n- 5 min planlegging, hoveddelen til skriving, 5 min korrektur\n- Ikke bruk for mye tid på én oppgave – gå videre og kom tilbake\n\n**Husk:** Sensor verdsetter struktur, variert språk og relevant innhold mer enn perfekt grammatikk!`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la compréhension écrite', definition: 'Leseforståelse – evnen til å forstå skriftlige tekster' },
    { term: 'la production écrite', definition: 'Skriftlig produksjon – evnen til å skrive tekster på fransk' },
    { term: 'l\'introduction', definition: 'Innledningen – første del av en strukturert tekst' },
    { term: 'le développement', definition: 'Hoveddelen – der argumentene presenteres' },
    { term: 'la conclusion', definition: 'Avslutningen – oppsummering og konklusjon' },
    { term: 'les mots-clés', definition: 'Nøkkelordene – de viktigste ordene i en tekst' },
    { term: 'la relecture', definition: 'Korrekturlesing – gjennomlesing for å finne feil' },
    { term: 'la planification', definition: 'Planlegging – å lage en disposisjon før man skriver' },
  ],
};

// ============================================================================
// KAPITTEL 16.4: Examen blanc
// ============================================================================

export const CHAPTER_FRANSK_2_16_4: TextbookChapter = {
  id: 'fransk-2-16-4',
  courseId: 'fransk-2',
  chapterNumber: '16.4',
  title: 'Examen blanc',
  subtitle: 'Komplett prøveeksamen',
  description: 'Gjennomfør en komplett prøveeksamen som tester alle ferdigheter: leseforståelse, grammatikk, ordforråd, oversettelse og skriftlig produksjon. Tren under eksamensforhold.',
  estimatedMinutes: 60,
  competenceGoals: [
    'Demonstrere samlet kompetanse i fransk nivå 2',
    'Kunne besvare varierte eksamensoppgaver under tidspress',
    'Vise ferdigheter i leseforståelse, grammatikk, ordforråd og skriftlig produksjon',
  ],
  content: [
    {
      id: 'fransk-2-16-4-intro',
      type: 'text',
      content: `## Examen blanc – Prøveeksamen\n\nDette kapittelet er en komplett prøveeksamen som simulerer den virkelige eksamen i fransk nivå 2. Prøveeksamenen tester alle ferdighetene du har lært gjennom kurset.\n\n**Instruksjoner:**\n- Forsøk å gjennomføre alle oppgavene uten hjelpemidler\n- Tidsramme: 60 minutter totalt\n- Del 1: Leseforståelse og ordforråd (ca. 20 min)\n- Del 2: Grammatikk (ca. 15 min)\n- Del 3: Skriftlig produksjon (ca. 25 min)\n\n**Tips:** Les gjennom alle oppgavene raskt først, og start med de du føler deg sikrest på. Bruk strategiene fra kapittel 16.3!\n\n---\n\n## DEL 1: Compréhension écrite et vocabulaire\n\nLes teksten nedenfor nøye og svar på oppgavene som følger.`
    },
    {
      id: 'fransk-2-16-4-text-passage',
      type: 'text',
      content: `## Tekst: La vie culturelle en France\n\n*La France est connue dans le monde entier pour sa richesse culturelle. Paris, la capitale, abrite de nombreux musées célèbres, comme le Louvre, le musée d'Orsay et le Centre Pompidou. Chaque année, des millions de touristes visitent ces institutions pour admirer des chefs-d'œuvre de l'art mondial.*\n\n*Mais la culture française ne se limite pas aux musées. Le cinéma français est reconnu internationalement, notamment grâce au Festival de Cannes, qui a lieu chaque année au mois de mai. De grands réalisateurs comme François Truffaut et Jean-Luc Godard ont révolutionné le cinéma mondial avec la Nouvelle Vague dans les années 1960.*\n\n*La littérature française est également très riche. Des auteurs comme Victor Hugo, Albert Camus et Simone de Beauvoir ont influencé la pensée mondiale. Aujourd'hui, la France compte encore de nombreux écrivains talentueux qui remportent des prix littéraires internationaux.*\n\n*Enfin, la gastronomie française est inscrite au patrimoine culturel immatériel de l'UNESCO depuis 2010. La cuisine française, avec ses fromages, ses vins et ses pâtisseries, est considérée comme l'une des meilleures au monde. Pour les Français, le repas est un moment de partage et de convivialité.*`
    },
    {
      id: 'fransk-2-16-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Oppgave 1 (Leseforståelse): Hva er hovedtemaet i teksten?',
        options: [
          { id: 'a', text: 'Le tourisme à Paris', isCorrect: false },
          { id: 'b', text: 'La richesse culturelle de la France', isCorrect: true },
          { id: 'c', text: 'L\'histoire du cinéma français', isCorrect: false },
          { id: 'd', text: 'La gastronomie française uniquement', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Teksten handler om den kulturelle rikdommen i Frankrike og dekker flere aspekter: museer, kino, litteratur og gastronomi. De andre alternativene dekker bare deler av teksten.',
      }
    },
    {
      id: 'fransk-2-16-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oppgave 2 (Leseforståelse): Svar på disse spørsmålene på fransk med hele setninger basert på teksten:\n\n1. Nommez trois musées mentionnés dans le texte.\n2. Qu\'est-ce que la Nouvelle Vague?\n3. Quand est-ce que la gastronomie française a été inscrite au patrimoine de l\'UNESCO?\n4. Que représente le repas pour les Français selon le texte?',
        solution: '1. Les trois musées mentionnés sont **le Louvre, le musée d\'Orsay et le Centre Pompidou**.\n2. La Nouvelle Vague est **un mouvement cinématographique des années 1960**, créé par des réalisateurs comme François Truffaut et Jean-Luc Godard, qui a **révolutionné le cinéma mondial**.\n3. La gastronomie française a été inscrite au patrimoine de l\'UNESCO **en 2010**.\n4. Selon le texte, le repas représente pour les Français **un moment de partage et de convivialité**.',
      }
    },
    {
      id: 'fransk-2-16-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Oppgave 3 (Ordforråd): Hva betyr «un chef-d\'œuvre» på norsk?',
        options: [
          { id: 'a', text: 'En sjefskokk', isCorrect: false },
          { id: 'b', text: 'Et hovedkontor', isCorrect: false },
          { id: 'c', text: 'Et mesterverk', isCorrect: true },
          { id: 'd', text: 'En arbeidssjef', isCorrect: false },
        ],
        solution: 'Riktig svar er C. «Un chef-d\'œuvre» betyr et mesterverk. Ordet er sammensatt av «chef» (hoved/sjef) og «œuvre» (verk), og brukes om fremragende kunstverk, litteratur og annet.',
      }
    },
    {
      id: 'fransk-2-16-4-section-2',
      type: 'text',
      content: `---\n\n## DEL 2: Grammaire\n\nDenne delen tester grammatikkunnskapene dine. Svar på alle oppgavene.`
    },
    {
      id: 'fransk-2-16-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oppgave 4 (Grammatikk – Verbaltider): Sett verbene i parentes i riktig tid:\n\n1. L\'année dernière, nous (visiter) _______ le musée du Louvre.\n2. Quand j\'(être) _______ enfant, je (adorer) _______ les films français.\n3. Demain, elle (aller) _______ au Festival de Cannes.\n4. Si nous (avoir) _______ le temps, nous (visiter) _______ le Centre Pompidou.\n5. Il faut que tu (faire) _______ tes devoirs avant de sortir.\n6. Nous (déjà/manger) _______ quand il (arriver) _______ .',
        solution: '1. L\'année dernière, nous **avons visité** le musée du Louvre. (Passé composé)\n2. Quand j\'**étais** enfant, j\'**adorais** les films français. (Imparfait)\n3. Demain, elle **ira** au Festival de Cannes. (Futur simple)\n4. Si nous **avions** le temps, nous **visiterions** le Centre Pompidou. (Si + imparfait → conditionnel)\n5. Il faut que tu **fasses** tes devoirs avant de sortir. (Subjonctif)\n6. Nous **avions déjà mangé** quand il **est arrivé**. (Plus-que-parfait + passé composé)',
      }
    },
    {
      id: 'fransk-2-16-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Oppgave 5 (Grammatikk): Hvilken setning er grammatisk korrekt?',
        options: [
          { id: 'a', text: 'Bien qu\'il est malade, il va à l\'école.', isCorrect: false },
          { id: 'b', text: 'Bien qu\'il soit malade, il va à l\'école.', isCorrect: true },
          { id: 'c', text: 'Bien qu\'il serait malade, il va à l\'école.', isCorrect: false },
          { id: 'd', text: 'Bien qu\'il a été malade, il va à l\'école.', isCorrect: false },
        ],
        solution: 'Riktig svar er B. «Bien que» (selv om) krever alltid subjonctif. Derfor er det «soit» (subjonctif av être) og ikke «est» (indicatif) eller andre former.',
      }
    },
    {
      id: 'fransk-2-16-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oppgave 6 (Ordforråd og oversettelse): Oversett disse setningene til fransk. Bruk varierte uttrykk og bindeord.\n\n1. Etter min mening er fransk kultur veldig rik.\n2. Dessuten er den franske gastronomien kjent i hele verden.\n3. Likevel foretrekker noen turister å besøke andre land.\n4. Det er viktig at man lærer om andre kulturer.\n5. Til slutt vil jeg si at Frankrike er et fascinerende land.',
        solution: '1. **À mon avis**, la culture française est très riche.\n2. **De plus**, la gastronomie française est connue dans le monde entier.\n3. **Cependant/Néanmoins**, certains touristes préfèrent visiter d\'autres pays.\n4. **Il est important qu\'**on apprenne d\'autres cultures. (Merk: subjonctif etter «il est important que»)\n5. **En conclusion/Pour conclure**, je voudrais dire que la France est un pays fascinant.',
      }
    },
    {
      id: 'fransk-2-16-4-section-3',
      type: 'text',
      content: `---\n\n## DEL 3: Production écrite\n\nDenne delen tester din evne til å skrive sammenhengende tekst på fransk. Velg én av oppgavene nedenfor.`
    },
    {
      id: 'fransk-2-16-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-16-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oppgave 7 (Skriftlig produksjon): Velg ETT av følgende emner og skriv en tekst på 120–150 ord på fransk. Bruk minst tre forskjellige verbaltider, fire bindeord og to meningsuttrykk.\n\n**Emne A:** «La France et la Norvège: similitudes et différences» (Frankrike og Norge: likheter og forskjeller)\n\n**Emne B:** «L\'importance de la culture dans la société moderne» (Kulturens betydning i det moderne samfunnet)\n\n**Emne C:** «Mon avenir: mes rêves et mes projets» (Min fremtid: mine drømmer og planer)\n\nHusk å strukturere teksten med innledning, hoveddel og avslutning.',
        solution: 'Eksempel (Emne A):\n\n**Introduction:**\nDans ce texte, je vais comparer la France et la Norvège. À mon avis, ces deux pays ont beaucoup de similitudes, mais aussi des différences intéressantes.\n\n**Développement:**\nD\'abord, les deux pays sont des démocraties européennes qui respectent les droits de l\'homme. Cependant, la France est une république avec un président, tandis que la Norvège est une monarchie constitutionnelle avec un roi. De plus, la France a une population beaucoup plus grande que la Norvège – environ 67 millions contre 5 millions.\n\nEn ce qui concerne la culture, les deux pays ont une riche tradition littéraire et artistique. Quand j\'étais petit, je rêvais de visiter Paris. L\'année dernière, j\'ai enfin réalisé ce rêve. Si j\'avais plus de temps, je visiterais aussi la Côte d\'Azur.\n\n**Conclusion:**\nEn conclusion, je suis convaincu que la France et la Norvège ont beaucoup à apprendre l\'une de l\'autre. Les échanges culturels entre nos pays seront encore plus importants à l\'avenir.\n\n(ca. 150 ord – bruker passé composé, imparfait, conditionnel og futur)',
      }
    },
    {
      id: 'fransk-2-16-4-oppsummering',
      type: 'text',
      content: `## Fasit og vurdering\n\nGratulerer – du har gjennomført prøveeksamenen! Her er en oversikt over hva som ble testet:\n\n**Del 1 – Leseforståelse og ordforråd (Oppgave 1–3):**\n- Hovedtema og detaljer i tekst\n- Evne til å svare på spørsmål med hele setninger\n- Ordforråd i kontekst\n\n**Del 2 – Grammatikk (Oppgave 4–6):**\n- Verbaltider: passé composé, imparfait, plus-que-parfait, futur, conditionnel, subjonctif\n- Betingelsessetninger (si-setninger)\n- Samsvar og korrekt modus\n- Oversettelse med varierte uttrykk\n\n**Del 3 – Skriftlig produksjon (Oppgave 7):**\n- Struktur: Introduction – Développement – Conclusion\n- Bruk av bindeord og meningsuttrykk\n- Variasjon i verbaltider\n- Relevant innhold og sammenhengende tekst\n\n**Vurderingskriterier:**\n- Kommunikasjon og innhold (forstår du oppgaven?)\n- Språklig bredde (bruker du variert språk?)\n- Språklig korrekthet (er grammatikken riktig?)\n- Tekststruktur (er teksten godt organisert?)\n\n**Tips til videre arbeid:** Gå tilbake til de kapitlene der du følte deg mest usikker, og gjør flere øvelser. Lykke til på eksamen!`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'l\'examen blanc', definition: 'Prøveeksamen – en simulert eksamen for å øve under eksamensforhold' },
    { term: 'la compréhension écrite', definition: 'Leseforståelse – del av eksamen som tester forståelse av skriftlige tekster' },
    { term: 'la production écrite', definition: 'Skriftlig produksjon – del av eksamen som tester evnen til å skrive tekster' },
    { term: 'un chef-d\'œuvre', definition: 'Et mesterverk – et fremragende kunstverk eller arbeid' },
    { term: 'le patrimoine culturel', definition: 'Kulturarv – den kulturelle arven til et land eller folk' },
    { term: 'la convivialité', definition: 'Hygge/trivsel – en varm og gjestfri atmosfære' },
    { term: 'la Nouvelle Vague', definition: 'Den nye bølgen – revolusjonerende fransk filmbevegelse fra 1960-tallet' },
    { term: 'la gastronomie', definition: 'Gastronomien – kunsten å lage og nyte god mat' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const FRANSK_2_CHAPTERS_14_16: TextbookChapter[] = [
  CHAPTER_FRANSK_2_14_1,
  CHAPTER_FRANSK_2_14_2,
  CHAPTER_FRANSK_2_14_3,
  CHAPTER_FRANSK_2_14_4,
  CHAPTER_FRANSK_2_15_1,
  CHAPTER_FRANSK_2_15_2,
  CHAPTER_FRANSK_2_15_3,
  CHAPTER_FRANSK_2_15_4,
  CHAPTER_FRANSK_2_16_1,
  CHAPTER_FRANSK_2_16_2,
  CHAPTER_FRANSK_2_16_3,
  CHAPTER_FRANSK_2_16_4,
];
