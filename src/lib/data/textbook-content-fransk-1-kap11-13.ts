/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Niva 1 - Kapittel 11-13
 *
 * Kapittel 11: Den frankofone verden (Le monde francophone)
 * Kapittel 12: Kunst og kultur (L'art et la culture)
 * Kapittel 13: Autentiske tekster (Textes authentiques)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 11.1: La Francophonie - Den frankofone verden
// ============================================================================

export const CHAPTER_FRANSK_1_11_1: TextbookChapter = {
  id: 'fransk-1-11-1',
  courseId: 'fransk-1',
  chapterNumber: '11.1',
  title: 'La Francophonie',
  subtitle: 'Den frankofone verden',
  description: 'Utforsk den fransktalende verden og laer om hvor fransk snakkes.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive geografi i omrader der spraket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-11-1-intro',
      type: 'text',
      content: `## Den frankofone verden

Visste du at fransk snakkes av over 300 millioner mennesker pa fem kontinenter? Fransk er offisielt sprak i 29 land og er et av de offisielle sprakene i FN, EU og mange internasjonale organisasjoner. Den fransktalende verden kalles **la Francophonie**.

I dette kapittelet skal du laere om hvor i verden fransk snakkes, og hvorfor spraket er sa utbredt.`,
    },
    {
      id: 'fransk-1-11-1-def-1',
      type: 'definition',
      title: 'La Francophonie',
      content: `**La Francophonie** betyr den fransktalende verden. Ordet brukes om:
1. Alle land og omrader der fransk snakkes
2. **OIF** (Organisation internationale de la Francophonie) - en internasjonal organisasjon med 88 medlemsland som fremmer det franske spraket og samarbeid

Fransk er utbredt pa grunn av Frankrikes historie som kolonimakt, spesielt i Afrika, Asia og Amerika.`,
    },
    {
      id: 'fransk-1-11-1-text-1',
      type: 'text',
      content: `## Fransktalende land - oversikt

| Kontinent | Land (eksempler) |
|-----------|-----------------|
| Europa | la France, la Belgique, la Suisse, le Luxembourg, Monaco |
| Afrika | le Senegal, le Maroc, la Tunisie, le Cameroun, la Cote d'Ivoire, la RD Congo |
| Nord-Amerika | le Canada (le Quebec) |
| Karibia | Haiti, la Guadeloupe, la Martinique |
| Asia/Oseania | le Vietnam, le Cambodge, la Nouvelle-Caledonie |`,
    },
    {
      id: 'fransk-1-11-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Fransktalende land',
      problem: `Hvilke av disse landene er fransktalende?
a) la Belgique
b) l'Espagne
c) le Senegal
d) la Norvege`,
      solution: `a) **la Belgique** - Ja! Fransk er et av tre offisielle sprak (ved siden av nederlandsk og tysk).
b) **l'Espagne** - Nei, Spania snakker spansk.
c) **le Senegal** - Ja! Fransk er offisielt sprak.
d) **la Norvege** - Nei, Norge snakker norsk.`,
    },
    {
      id: 'fransk-1-11-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble hvert land til riktig kontinent.',
        subTasks: [
          { label: 'a', task: 'le Senegal', solution: "l'Afrique (Afrika)" },
          { label: 'b', task: 'la Suisse', solution: "l'Europe (Europa)" },
          { label: 'c', task: 'le Canada', solution: "l'Amerique du Nord (Nord-Amerika)" },
          { label: 'd', task: 'le Cambodge', solution: "l'Asie (Asia)" },
        ],
        solution: "a) l'Afrique, b) l'Europe, c) l'Amerique du Nord, d) l'Asie",
        hints: ['Se tabellen over fransktalende land'],
      },
    },
    {
      id: 'fransk-1-11-1-text-2',
      type: 'text',
      content: `## Vokabular - Land og geografi

| Fransk | Norsk |
|--------|-------|
| le pays | landet |
| la langue | spraket |
| la langue officielle | det offisielle spraket |
| un continent | et kontinent |
| le monde | verden |
| francophone | fransktalende |
| parler francais | snakke fransk |
| une colonie | en koloni |
| l'independance (f) | uavhengigheten |`,
    },
    {
      id: 'fransk-1-11-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Setninger om den frankofone verden',
      problem: `Oversett til norsk:
a) Le francais est une langue mondiale.
b) Le Senegal est un pays francophone en Afrique.
c) Il y a 29 pays ou le francais est langue officielle.`,
      solution: `a) Fransk er et verdenssprak.
b) Senegal er et fransktalende land i Afrika.
c) Det finnes 29 land der fransk er offisielt sprak.`,
    },
    {
      id: 'fransk-1-11-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Fransk er et verdenssprak.', solution: 'Le francais est une langue mondiale.' },
          { label: 'b', task: 'Belgia er et fransktalende land.', solution: 'La Belgique est un pays francophone.' },
          { label: 'c', task: 'Det finnes mange fransktalende land i Afrika.', solution: "Il y a beaucoup de pays francophones en Afrique." },
        ],
        solution: 'a) Le francais est une langue mondiale. b) La Belgique est un pays francophone. c) Il y a beaucoup de pays francophones en Afrique.',
        hints: ['une langue = et sprak', 'un pays = et land', 'francophone = fransktalende'],
      },
    },
    {
      id: 'fransk-1-11-1-note-1',
      type: 'note',
      content: `**Visste du?** Fransk er det nest mest studerte spraket i verden etter engelsk. Over 50 % av alle som snakker fransk bor i Afrika, og antallet fransktalende i Afrika vokser raskt. Innen 2050 anslaar man at det vil vaere over 700 millioner fransktalende i verden.`,
    },
    {
      id: 'fransk-1-11-1-text-3',
      type: 'text',
      content: `## Hvorfor snakkes fransk i sa mange land?

Fransk ble spredt til mange deler av verden gjennom kolonisering fra 1600-tallet og framover. Frankrike hadde kolonier i:

- **Afrika**: Store deler av Vest- og Sentral-Afrika
- **Nord-Amerika**: Quebec i Canada og Louisiana i USA
- **Karibia**: Haiti, Guadeloupe, Martinique
- **Asia**: Vietnam, Kambodsja, Laos

De fleste koloniene ble selvstendige pa 1900-tallet, men mange beholdt fransk som offisielt sprak.`,
    },
    {
      id: 'fransk-1-11-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Grunner til at fransk er utbredt',
      problem: `Sant eller usant?
a) Fransk snakkes bare i Europa.
b) Mange afrikanske land har fransk som offisielt sprak.
c) Fransk er offisielt sprak i FN.`,
      solution: `a) **Usant** - Fransk snakkes pa fem kontinenter.
b) **Sant** - Over 20 afrikanske land har fransk som offisielt sprak.
c) **Sant** - Fransk er et av seks offisielle sprak i FN.`,
    },
    {
      id: 'fransk-1-11-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar pa sporsmalene pa norsk.',
        subTasks: [
          { label: 'a', task: 'Hva betyr "la Francophonie"?', solution: 'Den fransktalende verden / organisasjonen for fransktalende land' },
          { label: 'b', task: 'Hvorfor snakkes fransk i sa mange land i Afrika?', solution: 'Pa grunn av fransk kolonisering fra 1600-tallet' },
          { label: 'c', task: 'Hvor mange land har fransk som offisielt sprak?', solution: '29 land' },
        ],
        solution: 'a) Den fransktalende verden. b) Pa grunn av fransk kolonisering. c) 29 land.',
        hints: ['Se teksten om la Francophonie', 'Tenk pa historien til det franske spraket'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-11-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et fransktalende land (ikke Frankrike) og skriv 3-4 setninger pa norsk om det. Bruk folgende stikkord: hvor det ligger, hva spraket er, noe spesielt med landet.',
        subTasks: [
          { label: 'a', task: 'Hvilket land har du valgt?', solution: 'Fritt valg, f.eks. le Senegal, la Belgique, le Canada' },
          { label: 'b', task: 'Hvor ligger landet?', solution: 'F.eks. Senegal ligger i Vest-Afrika.' },
          { label: 'c', task: 'Hva er det offisielle spraket?', solution: 'F.eks. Det offisielle spraket er fransk.' },
        ],
        solution: 'Eksempel: Senegal ligger i Vest-Afrika. Det offisielle spraket er fransk. Senegal er kjent for sin gjestfrihet (teranga).',
        hints: ['Bruk tabellen over fransktalende land', 'Tenk pa geografi og kultur'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.2: La Belgique et la Suisse - Belgia og Sveits
// ============================================================================

export const CHAPTER_FRANSK_1_11_2: TextbookChapter = {
  id: 'fransk-1-11-2',
  courseId: 'fransk-1',
  chapterNumber: '11.2',
  title: 'La Belgique et la Suisse',
  subtitle: 'Belgia og Sveits',
  description: 'Utforsk fransktalende land i Europa: Belgia og Sveits.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive levemaker og tradisjoner i omrader der spraket snakkes',
    'se sammenhenger med egen bakgrunn',
  ],
  content: [
    {
      id: 'fransk-1-11-2-intro',
      type: 'text',
      content: `## Belgia og Sveits - fransktalende naboland

Frankrike er ikke det eneste europeiske landet der fransk snakkes. Bade **Belgia** (la Belgique) og **Sveits** (la Suisse) har fransk som et av sine offisielle sprak. Disse landene har sine egne tradisjoner og sin egen kultur, samtidig som de deler spraket med Frankrike.`,
    },
    {
      id: 'fransk-1-11-2-text-1',
      type: 'text',
      content: `## Belgia (La Belgique)

Belgia er et lite land mellom Frankrike, Nederland og Tyskland. Landet har **tre offisielle sprak**:
- **Fransk** - snakkes i den sorlige delen (Wallonia) og i Brussel
- **Nederlandsk (flamsk)** - snakkes i den nordlige delen (Flandern)
- **Tysk** - snakkes i et lite omrade i ost

**Hovedstaden** Brussel (Bruxelles) er offisielt tospraklig (fransk og nederlandsk) og er ogsa setet for EU.

| Fakta | |
|-------|---|
| Hovedstad | Bruxelles (Brussel) |
| Befolkning | ca. 11,5 millioner |
| Sprak | fransk, nederlandsk, tysk |
| Kjent for | sjokolade, vafler, Tintin, EU |`,
    },
    {
      id: 'fransk-1-11-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Fakta om Belgia',
      problem: `Sant eller usant?
a) Belgia har bare ett offisielt sprak.
b) Brussel er hovedstaden i Belgia.
c) Belgia er kjent for sjokolade.`,
      solution: `a) **Usant** - Belgia har tre offisielle sprak: fransk, nederlandsk og tysk.
b) **Sant** - Bruxelles er hovedstaden.
c) **Sant** - Belgia er verdenskjent for sin sjokolade.`,
    },
    {
      id: 'fransk-1-11-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar pa sporsmalene om Belgia.',
        subTasks: [
          { label: 'a', task: 'Hva heter Belgias hovedstad pa fransk?', solution: 'Bruxelles' },
          { label: 'b', task: 'Hvilke tre sprak snakkes i Belgia?', solution: 'Fransk, nederlandsk og tysk' },
          { label: 'c', task: 'I hvilken del av Belgia snakkes fransk?', solution: 'I den sorlige delen (Wallonia) og i Brussel' },
        ],
        solution: 'a) Bruxelles. b) Fransk, nederlandsk og tysk. c) Wallonia og Brussel.',
        hints: ['Se fakta-tabellen om Belgia'],
      },
    },
    {
      id: 'fransk-1-11-2-text-2',
      type: 'text',
      content: `## Sveits (La Suisse)

Sveits er et fjellrikt land midt i Europa med **fire offisielle sprak**:
- **Tysk** - snakkes av ca. 63 % av befolkningen
- **Fransk** - snakkes av ca. 23 % (i vest, kalt "Suisse romande")
- **Italiensk** - snakkes av ca. 8 % (i sor)
- **Retoromansk** - snakkes av ca. 0,5 %

Viktige fransktalende byer i Sveits er **Geneve** (Genf) og **Lausanne**.

| Fakta | |
|-------|---|
| Hovedstad | Berne (Bern) |
| Befolkning | ca. 8,7 millioner |
| Sprak | tysk, fransk, italiensk, retoromansk |
| Kjent for | klokker, sjokolade, fondue, Alpene, noytralitet |`,
    },
    {
      id: 'fransk-1-11-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne Belgia og Sveits',
      problem: `Fyll inn riktig land: la Belgique eller la Suisse.
a) ___ a quatre langues officielles.
b) ___ est le siege de l'Union europeenne.
c) Geneve est en ___.`,
      solution: `a) **La Suisse** a quatre langues officielles. (Sveits har fire offisielle sprak.)
b) **La Belgique** est le siege de l'Union europeenne. (Belgia er setet for EU.)
c) Geneve est en **Suisse**. (Geneve er i Sveits.)`,
    },
    {
      id: 'fransk-1-11-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Sveits er kjent for sjokolade.', solution: 'La Suisse est connue pour le chocolat.' },
          { label: 'b', task: 'Belgia har tre offisielle sprak.', solution: 'La Belgique a trois langues officielles.' },
          { label: 'c', task: 'Geneve er en by i Sveits.', solution: 'Geneve est une ville en Suisse.' },
        ],
        solution: 'a) La Suisse est connue pour le chocolat. b) La Belgique a trois langues officielles. c) Geneve est une ville en Suisse.',
        hints: ['connu(e) pour = kjent for', 'une langue = et sprak'],
      },
    },
    {
      id: 'fransk-1-11-2-tip-1',
      type: 'tip',
      content: `**Tallforskjeller!** I Belgia og Sveits bruker man andre ord for noen tall enn i Frankrike:
- 70: **septante** (Belgia/Sveits) vs. soixante-dix (Frankrike)
- 80: **huitante** (Sveits) vs. quatre-vingts (Frankrike)
- 90: **nonante** (Belgia/Sveits) vs. quatre-vingt-dix (Frankrike)

Mange mener at det belgiske/sveitsiske systemet er mer logisk!`,
    },
    {
      id: 'fransk-1-11-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Kulturelle spesialiteter',
      problem: `Koble maten til riktig land:
a) les gaufres (vafler)
b) la fondue
c) les moules-frites (blaaskjell med pommes frites)`,
      solution: `a) les gaufres - **la Belgique** (Belgia er verdenskjent for sine vafler)
b) la fondue - **la Suisse** (sveitsisk fondue med smeltet ost)
c) les moules-frites - **la Belgique** (en belgisk nasjonalrett)`,
    },
    {
      id: 'fransk-1-11-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene pa norsk?',
        subTasks: [
          { label: 'a', task: 'le chocolat', solution: 'sjokolade' },
          { label: 'b', task: 'la montagne', solution: 'fjellet' },
          { label: 'c', task: 'bilingue', solution: 'tospraklig' },
          { label: 'd', task: 'la neutralite', solution: 'noytralitet' },
        ],
        solution: 'a) sjokolade, b) fjellet, c) tospraklig, d) noytralitet',
        hints: ['chocolat ligner pa det norske ordet', 'bilingue: bi = to, lingue = sprak'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-11-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Belgia, Sveits og Norge. Skriv pa norsk.',
        subTasks: [
          { label: 'a', task: 'Hva har disse tre landene til felles?', solution: 'Alle er sma europeiske land. Belgia og Sveits er flerspraklige, Norge har ogsa to malformer.' },
          { label: 'b', task: 'Hva er den storste forskjellen?', solution: 'Belgia og Sveits har fransk som offisielt sprak, det har ikke Norge.' },
          { label: 'c', task: 'Hva synes du er interessant med flerspraklige land?', solution: 'Fritt svar. F.eks.: Det er spennende at folk kan snakke flere sprak i hverdagen.' },
        ],
        solution: 'Fritt svar. Eksempel: Alle er sma europeiske land. Forskjellen er at Belgia og Sveits er flerspraklige med fransk som offisielt sprak.',
        hints: ['Tenk pa sprak, storrelse og beliggenhet', 'Norge har ogsa to skriftsprak: bokmal og nynorsk'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.3: Le Quebec et le Canada - Quebec og Canada
// ============================================================================

export const CHAPTER_FRANSK_1_11_3: TextbookChapter = {
  id: 'fransk-1-11-3',
  courseId: 'fransk-1',
  chapterNumber: '11.3',
  title: 'Le Quebec et le Canada',
  subtitle: 'Quebec og Canada',
  description: 'Utforsk fransktalende Canada og forskjellene mellom fransk i Quebec og Frankrike.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive levemaker og tradisjoner i omrader der spraket snakkes',
    'se sammenhenger med egen bakgrunn',
  ],
  content: [
    {
      id: 'fransk-1-11-3-intro',
      type: 'text',
      content: `## Quebec - fransk i Nord-Amerika

Canada er et offisielt tospraklig land med **engelsk** og **fransk** som offisielle sprak. Den fransktalende provinsen **Quebec** (le Quebec) er hjertet av det fransktalende Canada, med over 8 millioner innbyggere som snakker fransk til daglig.

Fransk kom til Canada med de forste franske bosettingene pa 1600-tallet. Byen Quebec ble grunnlagt av Samuel de Champlain i 1608.`,
    },
    {
      id: 'fransk-1-11-3-text-1',
      type: 'text',
      content: `## Fakta om Quebec

| Fakta | |
|-------|---|
| Hovedstad | Quebec (ville de Quebec) |
| Storste by | Montreal |
| Befolkning | ca. 8,5 millioner |
| Sprak | fransk (offisielt), engelsk |
| Kjent for | poutine, ahornsirup, karneval, hockey |

**Montreal** er den nest storste fransktalende byen i verden etter Paris! Byen er tospraklig, og mange innbyggere snakker bade fransk og engelsk.`,
    },
    {
      id: 'fransk-1-11-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Fakta om Quebec',
      problem: `Sant eller usant?
a) Quebec er en provins i Canada.
b) Montreal er hovedstaden i Quebec.
c) Canada har bare ett offisielt sprak.`,
      solution: `a) **Sant** - Quebec er den storste provinsen i Canada.
b) **Usant** - Quebec (byen) er hovedstaden. Montreal er den storste byen.
c) **Usant** - Canada har to offisielle sprak: engelsk og fransk.`,
    },
    {
      id: 'fransk-1-11-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar pa sporsmalene om Quebec.',
        subTasks: [
          { label: 'a', task: 'Hva er den storste byen i Quebec?', solution: 'Montreal' },
          { label: 'b', task: 'Nar ble byen Quebec grunnlagt?', solution: '1608' },
          { label: 'c', task: 'Hvilke to sprak er offisielle i Canada?', solution: 'Engelsk og fransk' },
        ],
        solution: 'a) Montreal. b) 1608. c) Engelsk og fransk.',
        hints: ['Se fakta-tabellen'],
      },
    },
    {
      id: 'fransk-1-11-3-text-2',
      type: 'text',
      content: `## Fransk i Quebec vs. Frankrike

Fransk i Quebec skiller seg fra fransk i Frankrike pa flere mater:

| Tema | Frankrike | Quebec |
|------|-----------|--------|
| Bil | la voiture | le char |
| Kjaerest (f) | la petite amie | la blonde |
| Frokost | le petit dejeuner | le dejeuner |
| Lunsj | le dejeuner | le diner |
| Middag | le diner | le souper |

Quebecerne sier ogsa ofte **"icitte"** i stedet for "ici" (her) og **"ben"** i stedet for "bien" (bra/vel).`,
    },
    {
      id: 'fransk-1-11-3-tip-1',
      type: 'tip',
      content: `Quebec er veldig opptatt av a beskytte det franske spraket. De har en egen spraklov (la loi 101) som krever at alle skilt og reklame skal vaere pa fransk.`,
    },
    {
      id: 'fransk-1-11-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Quebecois vs. fransk fra Frankrike',
      problem: `Hva betyr disse ordene i Quebec?
a) le char
b) la blonde
c) le souper`,
      solution: `a) le char = **bilen** (i Frankrike: la voiture)
b) la blonde = **kjaeresten** (i Frankrike: la petite amie)
c) le souper = **middagen** (i Frankrike: le diner)`,
    },
    {
      id: 'fransk-1-11-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble det quebecois-uttrykket med det franske uttrykket fra Frankrike.',
        subTasks: [
          { label: 'a', task: 'le char (Quebec) = ?', solution: 'la voiture (Frankrike)' },
          { label: 'b', task: 'le dejeuner (Quebec) = ?', solution: 'le petit dejeuner (Frankrike)' },
          { label: 'c', task: 'le souper (Quebec) = ?', solution: 'le diner (Frankrike)' },
        ],
        solution: 'a) la voiture, b) le petit dejeuner, c) le diner',
        hints: ['Se sammenlignings-tabellen'],
      },
    },
    {
      id: 'fransk-1-11-3-text-3',
      type: 'text',
      content: `## Kultur og tradisjoner i Quebec

- **Le Carnaval de Quebec**: Verdens storste vinterkarneval, med snoe- og isskulpturer
- **La cabane a sucre**: Sukkerkoier der man lager ahornsirup om varen
- **La poutine**: Quebecs nasjonalrett - pommes frites med ostklumper og brun sjy
- **Le hockey**: Kanadiere er lidenskapelig opptatt av ishockey
- **La Saint-Jean-Baptiste** (24. juni): Quebecs nasjonaldag`,
    },
    {
      id: 'fransk-1-11-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Quebecois kultur',
      problem: `Oversett til norsk:
a) Le Carnaval de Quebec est en hiver.
b) La poutine est un plat typique du Quebec.
c) Les Canadiens aiment le hockey.`,
      solution: `a) Karnevalet i Quebec er om vinteren.
b) Poutine er en typisk rett fra Quebec.
c) Kanadiere elsker hockey.`,
    },
    {
      id: 'fransk-1-11-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Montreal er en stor by.', solution: 'Montreal est une grande ville.' },
          { label: 'b', task: 'Jeg liker poutine.', solution: "J'aime la poutine." },
          { label: 'c', task: 'Quebec er en provins i Canada.', solution: 'Le Quebec est une province du Canada.' },
        ],
        solution: "a) Montreal est une grande ville. b) J'aime la poutine. c) Le Quebec est une province du Canada.",
        hints: ['une ville = en by', 'aimer = like/elske'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-11-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Quebec og Norge. Skriv pa norsk.',
        subTasks: [
          { label: 'a', task: 'Nevn to ting Quebec og Norge har til felles.', solution: 'Begge har kalde vintre og er opptatt av a bevare spraket sitt.' },
          { label: 'b', task: 'Hva er den storste forskjellen?', solution: 'Quebec er en provins i Canada som snakker fransk, Norge er et selvstendig land som snakker norsk.' },
        ],
        solution: 'Felles: kalde vintre, sprakbevissthet. Forskjell: sprak, statsform.',
        hints: ['Tenk pa klima, sprak og kultur'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.4: L'Afrique francophone - Det fransktalende Afrika
// ============================================================================

export const CHAPTER_FRANSK_1_11_4: TextbookChapter = {
  id: 'fransk-1-11-4',
  courseId: 'fransk-1',
  chapterNumber: '11.4',
  title: "L'Afrique francophone",
  subtitle: 'Det fransktalende Afrika',
  description: 'Utforsk fransktalende land i Afrika og deres kultur og tradisjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive levemaker, tradisjoner og geografi i omrader der spraket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-11-4-intro',
      type: 'text',
      content: `## Det fransktalende Afrika

Afrika er det kontinentet der det bor flest fransktalende mennesker. Over 140 millioner afrikanere snakker fransk, og tallet vokser raskt. Fransk er offisielt sprak i mer enn 20 afrikanske land.`,
    },
    {
      id: 'fransk-1-11-4-text-1',
      type: 'text',
      content: `## Viktige fransktalende land i Afrika

| Land | Hovedstad | Kjent for |
|------|-----------|-----------|
| le Senegal | Dakar | Teranga (gjestfrihet), musikk, thieboudienne |
| le Maroc | Rabat | Marrakech, tajine, souk |
| la Cote d'Ivoire | Yamoussoukro | Kakao, Abidjan, fotball |
| le Cameroun | Yaounde | Tospraklig (fransk/engelsk), naturmangfold |
| la RD Congo | Kinshasa | Storste fransktalende land, musikk |
| la Tunisie | Tunis | Middelhavskultur, historiske ruiner |`,
    },
    {
      id: 'fransk-1-11-4-def-1',
      type: 'definition',
      title: 'Teranga',
      content: `**Teranga** er et wolof-ord fra Senegal som betyr **gjestfrihet**. Det er en sentral verdi i senegalesisk kultur. Senegal kalles ofte "le pays de la teranga" (gjestfrihetens land).`,
    },
    {
      id: 'fransk-1-11-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Afrikanske land',
      problem: `Koble hovedstaden til riktig land:
a) Dakar
b) Rabat
c) Kinshasa`,
      solution: `a) Dakar - **le Senegal**
b) Rabat - **le Maroc**
c) Kinshasa - **la RD Congo**`,
    },
    {
      id: 'fransk-1-11-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble hvert land til det det er kjent for.',
        subTasks: [
          { label: 'a', task: 'le Senegal', solution: 'Teranga (gjestfrihet)' },
          { label: 'b', task: 'le Maroc', solution: 'Tajine, souk, Marrakech' },
          { label: 'c', task: 'la Cote d\'Ivoire', solution: 'Kakao, fotball' },
          { label: 'd', task: 'la RD Congo', solution: 'Musikk, storste fransktalende land' },
        ],
        solution: "a) Teranga. b) Tajine, souk. c) Kakao, fotball. d) Musikk.",
        hints: ['Se tabellen over fransktalende land i Afrika'],
      },
    },
    {
      id: 'fransk-1-11-4-text-2',
      type: 'text',
      content: `## Senegal og Marokko

**Senegal** ligger i Vest-Afrika ved Atlanterhavskysten. Senegalesisk mat er kjent for retten **thieboudienne** (ris med fisk og gronnsaker).

**Marokko** ligger i Nord-Afrika. Her snakker folk bade **arabisk** og **fransk**. Marokko er kjent for sine vakre byer som Marrakech med fargerike markeder kalt **souks** og for retten **tajine**.

| Fransk | Norsk |
|--------|-------|
| l'Afrique (f) | Afrika |
| le marche | markedet |
| la musique | musikken |
| la cuisine | maten/kjoekkenet |
| la tradition | tradisjonen |
| la diversite | mangfoldet |
| l'hospitalite (f) | gjestfriheten |`,
    },
    {
      id: 'fransk-1-11-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Kultur i fransktalende Afrika',
      problem: `Oversett til norsk:
a) Le Senegal est en Afrique de l'Ouest.
b) Le Maroc est connu pour ses souks.
c) La cuisine africaine est delicieuse.`,
      solution: `a) Senegal ligger i Vest-Afrika.
b) Marokko er kjent for sine souker (markeder).
c) Afrikansk mat er deilig.`,
    },
    {
      id: 'fransk-1-11-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Senegal er i Afrika.', solution: "Le Senegal est en Afrique." },
          { label: 'b', task: 'Marokko er kjent for tajine.', solution: 'Le Maroc est connu pour le tajine.' },
          { label: 'c', task: 'Afrikansk musikk er fantastisk.', solution: 'La musique africaine est fantastique.' },
        ],
        solution: "a) Le Senegal est en Afrique. b) Le Maroc est connu pour le tajine. c) La musique africaine est fantastique.",
        hints: ['connu pour = kjent for', 'africain(e) = afrikansk'],
      },
    },
    {
      id: 'fransk-1-11-4-note-1',
      type: 'note',
      content: `**Flerspraklig hverdag**: I mange afrikanske land er fransk det offisielle spraket, men folk snakker ogsa lokale sprak til daglig. For eksempel snakker man wolof i Senegal, arabisk og berbersk i Marokko, og lingala i Kongo.`,
    },
    {
      id: 'fransk-1-11-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Sprakmangfold',
      problem: `Sant eller usant?
a) I Senegal snakker alle bare fransk.
b) Marokko har bade arabisk og fransk.
c) Kongo er det fransktalende landet med flest innbyggere.`,
      solution: `a) **Usant** - I Senegal snakker de ogsa wolof og andre lokale sprak.
b) **Sant** - Marokko har bade arabisk og fransk.
c) **Sant** - DR Kongo har over 100 millioner innbyggere.`,
    },
    {
      id: 'fransk-1-11-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene?',
        subTasks: [
          { label: 'a', task: 'la cuisine', solution: 'maten / kjoekkenet' },
          { label: 'b', task: 'le marche', solution: 'markedet' },
          { label: 'c', task: "l'hospitalite", solution: 'gjestfriheten' },
          { label: 'd', task: 'la diversite', solution: 'mangfoldet' },
        ],
        solution: 'a) maten/kjoekkenet, b) markedet, c) gjestfriheten, d) mangfoldet',
        hints: ['diversite ligner pa det engelske "diversity"'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-11-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et fransktalende land i Afrika og skriv 3 setninger pa norsk om det.',
        subTasks: [
          { label: 'a', task: 'Hvilket land velger du, og hvor ligger det?', solution: 'Fritt valg. F.eks.: Senegal ligger i Vest-Afrika.' },
          { label: 'b', task: 'Hva er landet kjent for?', solution: 'F.eks.: Senegal er kjent for gjestfrihet (teranga).' },
          { label: 'c', task: 'Hvilke sprak snakkes i landet?', solution: 'F.eks.: Fransk (offisielt) og wolof.' },
        ],
        solution: 'Eksempel: Senegal ligger i Vest-Afrika. Landet er kjent for gjestfrihet. De snakker fransk og wolof.',
        hints: ['Se tabellen og tekstene i dette kapittelet'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12.1: La musique francophone - Franskspraklig musikk
// ============================================================================

export const CHAPTER_FRANSK_1_12_1: TextbookChapter = {
  id: 'fransk-1-12-1',
  courseId: 'fransk-1',
  chapterNumber: '12.1',
  title: 'La musique francophone',
  subtitle: 'Franskspraklig musikk',
  description: 'Oppdag franskspraklig musikk fra Frankrike, Belgia, Quebec og andre land.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og presentere kunstneriske og kulturelle uttrykk fra omrader der spraket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-12-1-intro',
      type: 'text',
      content: `## Franskspraklig musikk

Frankrike og den fransktalende verden har en rik musikktradisjon. Fra Edith Piafs tidlose klassikere til moderne pop og rap - franskspraklig musikk har noe for enhver smak. I dette kapittelet skal du laere om kjente artister og musikksjangre, og du skal laere vokabular knyttet til musikk.`,
    },
    {
      id: 'fransk-1-12-1-text-1',
      type: 'text',
      content: `## Kjente franskspraklige artister

| Artist | Land | Kjent for |
|--------|------|-----------|
| Edith Piaf | Frankrike | "La Vie en rose", "Non, je ne regrette rien" |
| Stromae | Belgia | "Alors on danse", "Papaoutai", moderne pop/elektronisk |
| Angele | Belgia | "Tout oublier", moderne pop |
| MC Solaar | Frankrike | Fransk rap, "Bouge de la" |
| Celine Dion | Canada (Quebec) | "Pour que tu m'aimes encore", verdensstjerne |
| Zaz | Frankrike | "Je veux", moderne chanson francaise |

Edith Piaf (1915-1963) regnes som den storste franske sangeren gjennom tidene. Hennes sang "La Vie en rose" er et av de mest kjente franske sangene i verden.`,
    },
    {
      id: 'fransk-1-12-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Artister og land',
      problem: `Koble artisten til riktig land:
a) Stromae
b) Celine Dion
c) Edith Piaf
d) Angele`,
      solution: `a) Stromae - **la Belgique** (Belgia)
b) Celine Dion - **le Canada (le Quebec)**
c) Edith Piaf - **la France** (Frankrike)
d) Angele - **la Belgique** (Belgia)`,
    },
    {
      id: 'fransk-1-12-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble artisten til riktig land.',
        subTasks: [
          { label: 'a', task: 'MC Solaar', solution: 'la France (Frankrike)' },
          { label: 'b', task: 'Stromae', solution: 'la Belgique (Belgia)' },
          { label: 'c', task: 'Celine Dion', solution: 'le Canada / le Quebec' },
          { label: 'd', task: 'Zaz', solution: 'la France (Frankrike)' },
        ],
        solution: 'a) la France, b) la Belgique, c) le Canada, d) la France',
        hints: ['Se tabellen over kjente artister'],
      },
    },
    {
      id: 'fransk-1-12-1-text-2',
      type: 'text',
      content: `## Musikksjangre

| Fransk | Norsk |
|--------|-------|
| la chanson francaise | den franske visen (tradisjonell sjanger) |
| le rap francais | fransk rap |
| la pop | popmusikk |
| la musique electronique | elektronisk musikk |
| le jazz | jazz |
| le hip-hop | hiphop |

**La chanson francaise** er en tradisjonell sjanger der teksten er veldig viktig. Artister som Edith Piaf, Jacques Brel og Charles Aznavour er klassiske representanter.

**Le rap francais** er veldig populaert i Frankrike i dag. MC Solaar var en av pionerene, og artister som Nekfeu og Orelsan er blant de mest populaere i dag.`,
    },
    {
      id: 'fransk-1-12-1-note-1',
      type: 'note',
      content: `**La Fete de la Musique**: Hvert ar den 21. juni feirer Frankrike musikkfesten. Pa denne dagen er det gratiskonserter overalt i gatene, og alle kan spille musikk utendors. Festen ble startet i 1982 og har spredt seg til over 120 land.`,
    },
    {
      id: 'fransk-1-12-1-text-3',
      type: 'text',
      content: `## Musikkvokabular

| Fransk | Norsk |
|--------|-------|
| la chanson | sangen |
| le chanteur / la chanteuse | sangeren (m/f) |
| ecouter | lytte (til) |
| les paroles (f, pl) | teksten (sangteksten) |
| la melodie | melodien |
| le concert | konserten |
| un album | et album |
| la scene | scenen |
| le refrain | refrenget |
| le couplet | verset |`,
    },
    {
      id: 'fransk-1-12-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Musikkvokabular',
      problem: `Oversett til norsk:
a) J'ecoute une chanson francaise.
b) Le chanteur est sur la scene.
c) Les paroles sont belles.`,
      solution: `a) Jeg lytter til en fransk sang.
b) Sangeren er pa scenen.
c) Sangteksten er vakker.`,
    },
    {
      id: 'fransk-1-12-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett musikkordene til norsk.',
        subTasks: [
          { label: 'a', task: 'la chanson', solution: 'sangen' },
          { label: 'b', task: 'ecouter', solution: 'lytte (til)' },
          { label: 'c', task: 'le concert', solution: 'konserten' },
          { label: 'd', task: 'les paroles', solution: 'sangteksten' },
        ],
        solution: 'a) sangen, b) lytte (til), c) konserten, d) sangteksten',
        hints: ['concert ligner pa det norske ordet "konsert"'],
      },
    },
    {
      id: 'fransk-1-12-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Sant eller usant',
      problem: `Sant eller usant?
a) Edith Piaf er kjent for sangen "La Vie en rose".
b) Stromae kommer fra Frankrike.
c) MC Solaar synger rap.`,
      solution: `a) **Sant** - "La Vie en rose" er en av hennes mest kjente sanger.
b) **Usant** - Stromae kommer fra Belgia.
c) **Sant** - MC Solaar er en av pionerene innen fransk rap.`,
    },
    {
      id: 'fransk-1-12-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg lytter til musikk.', solution: "J'ecoute de la musique." },
          { label: 'b', task: 'Sangeren er pa scenen.', solution: 'Le chanteur est sur la scene.' },
          { label: 'c', task: 'Jeg liker fransk rap.', solution: "J'aime le rap francais." },
        ],
        solution: "a) J'ecoute de la musique. b) Le chanteur est sur la scene. c) J'aime le rap francais.",
        hints: ['ecouter = lytte til', 'sur = pa', 'aimer = like'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-12-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om din favorittartist (valgfritt sprak) pa norsk. Bruk minst 3 musikkord fra kapittelet.',
        subTasks: [
          { label: 'a', task: 'Hvem er din favorittartist?', solution: 'Fritt valg.' },
          { label: 'b', task: 'Hvilken sjanger synger/spiller artisten?', solution: 'F.eks.: pop, rap, chanson francaise, elektronisk musikk.' },
          { label: 'c', task: 'Skriv en setning pa fransk om artisten.', solution: "F.eks.: J'ecoute Stromae. Il est un chanteur belge." },
        ],
        solution: "Eksempel: Min favorittartist er Stromae. Han synger pop og elektronisk musikk. J'ecoute Stromae. Il est un chanteur belge.",
        hints: ['Se vokabular-tabellene', 'Bruk setningene fra eksemplene som mal'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12.2: Le cinema francais - Fransk film
// ============================================================================

export const CHAPTER_FRANSK_1_12_2: TextbookChapter = {
  id: 'fransk-1-12-2',
  courseId: 'fransk-1',
  chapterNumber: '12.2',
  title: 'Le cinema francais',
  subtitle: 'Fransk film',
  description: 'Laer om franskfilmhistorie, kjente filmer og filmvokabular.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og presentere kunstneriske og kulturelle uttrykk fra omrader der spraket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-12-2-intro',
      type: 'text',
      content: `## Fransk film - fra Lumiere til i dag

Frankrike er kinematografiens foedeland. Det var de franske brodrene **Auguste og Louis Lumiere** som viste den forste offentlige filmen i Paris i 1895. Siden den gang har fransk film vaert blant verdens mest innflytelsesrike. I dette kapittelet skal du laere om filmhistorie, kjente filmer og vokabular knyttet til film.`,
    },
    {
      id: 'fransk-1-12-2-def-1',
      type: 'definition',
      title: 'Le cinema',
      content: `**Le cinema** betyr bade "kinoen" (stedet der man ser film) og "filmkunsten" generelt. Ordet kommer fra det greske "kinema" (bevegelse). Frankrike kalles ofte "le pays du cinema" fordi filmen ble oppfunnet her.`,
    },
    {
      id: 'fransk-1-12-2-text-1',
      type: 'text',
      content: `## Filmhistorie og kjente filmer

| Film | Ar | Handling |
|------|----|---------|
| Les Intouchables | 2011 | En rik, lam mann og hans unge, energiske hjelper. Basert pa en sann historie. |
| Amelie (Le Fabuleux Destin d'Amelie Poulain) | 2001 | Amelie fra Montmartre i Paris proever a gjore andre glade. |
| Le Petit Prince | 2015 | Animasjonsfilm basert pa Antoine de Saint-Exuperys bok. |
| La Haine | 1995 | Tre unge menn i en forstad til Paris. |
| Les Choristes | 2004 | En laerer forandrer livet til vanskelige elever gjennom musikk. |

**Les Intouchables** er den mest sette franske filmen utenfor Frankrike. Filmen har blitt remade i mange land, blant annet i USA ("The Upside").`,
    },
    {
      id: 'fransk-1-12-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Filmvokabular',
      problem: `Hva betyr disse ordene?
a) le film
b) le realisateur
c) un acteur
d) l'ecran`,
      solution: `a) le film = **filmen**
b) le realisateur = **regissoren**
c) un acteur = **en skuespiller (mann)**
d) l'ecran = **skjermen / lerretet**`,
    },
    {
      id: 'fransk-1-12-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett filmvokabularet til norsk.',
        subTasks: [
          { label: 'a', task: 'le cinema', solution: 'kinoen / filmkunsten' },
          { label: 'b', task: 'une actrice', solution: 'en skuespiller (kvinne)' },
          { label: 'c', task: 'le festival', solution: 'festivalen' },
          { label: 'd', task: 'le realisateur', solution: 'regissoren' },
        ],
        solution: 'a) kinoen/filmkunsten, b) en skuespiller (kvinne), c) festivalen, d) regissoren',
        hints: ['actrice = hunkjoennsformen av acteur'],
      },
    },
    {
      id: 'fransk-1-12-2-text-2',
      type: 'text',
      content: `## Filmfestivalen i Cannes

Hvert ar i mai arrangeres den beroemte **filmfestivalen i Cannes** (le Festival de Cannes) pa den franske rivieraen. Det er en av verdens viktigste filmfestivaler. Hovedprisen heter **la Palme d'or** (gullpalmen).

Festivalen ble startet i 1946 og tiltrekker seg filmskapere, skuespillere og journalister fra hele verden.

## Filmvokabular

| Fransk | Norsk |
|--------|-------|
| le film | filmen |
| le cinema | kinoen |
| le realisateur / la realisatrice | regissoren (m/f) |
| un acteur / une actrice | en skuespiller (m/f) |
| le festival | festivalen |
| l'ecran (m) | skjermen / lerretet |
| une comedie | en komedie |
| un drame | et drama |
| un film d'animation | en animasjonsfilm |
| les sous-titres (m, pl) | undertekstene |
| la bande-annonce | traileren |`,
    },
    {
      id: 'fransk-1-12-2-note-1',
      type: 'note',
      content: `**Visste du?** Frankrike er det eneste landet i Europa der franske filmer er mer populaere enn amerikanske filmer pa kino. Fransk lov krever ogsa at minst 40 % av sangene pa radioen skal vaere pa fransk.`,
    },
    {
      id: 'fransk-1-12-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sant eller usant om fransk film',
      problem: `Sant eller usant?
a) Lumiere-brodrene viste den forste offentlige filmen i London.
b) Filmfestivalen i Cannes er en av verdens viktigste.
c) Les Intouchables er en fransk film.`,
      solution: `a) **Usant** - Det var i Paris i 1895.
b) **Sant** - Cannes-festivalen er blant de mest prestisjefylte.
c) **Sant** - Les Intouchables (2011) er en av de mest sette franske filmene.`,
    },
    {
      id: 'fransk-1-12-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sant eller usant?',
        subTasks: [
          { label: 'a', task: 'Filmen ble oppfunnet i Frankrike.', solution: 'Sant - av Lumiere-brodrene i 1895.' },
          { label: 'b', task: 'La Palme d\'or er hovedprisen i Cannes.', solution: 'Sant.' },
          { label: 'c', task: 'Amelie handler om en jente i Lyon.', solution: 'Usant - Amelie handler om en jente i Montmartre, Paris.' },
        ],
        solution: 'a) Sant. b) Sant. c) Usant - Montmartre, Paris.',
        hints: ['Se tekstene om filmhistorie og kjente filmer'],
      },
    },
    {
      id: 'fransk-1-12-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Oversettelse',
      problem: `Oversett til norsk:
a) Je vais au cinema ce soir.
b) C'est un film francais avec des sous-titres.
c) L'actrice est tres connue.`,
      solution: `a) Jeg gar pa kino i kveld.
b) Det er en fransk film med undertekster.
c) Skuespilleren (kvinnelig) er veldig kjent.`,
    },
    {
      id: 'fransk-1-12-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg liker franske filmer.', solution: "J'aime les films francais." },
          { label: 'b', task: 'Regissoren er kjent.', solution: 'Le realisateur est connu.' },
          { label: 'c', task: 'Vi gar pa kino.', solution: 'Nous allons au cinema.' },
        ],
        solution: "a) J'aime les films francais. b) Le realisateur est connu. c) Nous allons au cinema.",
        hints: ['aimer = like', 'aller au cinema = ga pa kino'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-12-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en film du liker og beskriv den kort. Bruk minst 3 filmord fra kapittelet.',
        subTasks: [
          { label: 'a', task: 'Hva heter filmen?', solution: 'Fritt valg.' },
          { label: 'b', task: 'Hva slags film er det? (comedie, drame, film d\'animation)', solution: 'F.eks.: C\'est une comedie.' },
          { label: 'c', task: 'Skriv en setning pa fransk om filmen.', solution: "F.eks.: J'aime le film Les Intouchables. C'est une comedie." },
        ],
        solution: "Eksempel: J'aime le film Les Intouchables. C'est une comedie. Les acteurs sont tres bons.",
        hints: ['Se vokabular-tabellene', 'Bruk eksemplene som mal'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12.3: La bande dessinee - Tegneserier
// ============================================================================

export const CHAPTER_FRANSK_1_12_3: TextbookChapter = {
  id: 'fransk-1-12-3',
  courseId: 'fransk-1',
  chapterNumber: '12.3',
  title: 'La bande dessinee',
  subtitle: 'Tegneserier',
  description: 'Oppdag den franske og belgiske tegneserietradisjonen med Tintin, Asterix og mer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og presentere kunstneriske og kulturelle uttrykk fra omrader der spraket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-12-3-intro',
      type: 'text',
      content: `## Tegneserier - en viktig kunstform

I Frankrike og Belgia er tegneserier (**la bande dessinee**, forkortet **la BD**) en hoyt respektert kunstform. BD regnes som "den niende kunsten" (le neuvieme art) og er like populaer blant voksne som blant barn. Hvert ar selges det millioner av BD-album i fransktalende land.`,
    },
    {
      id: 'fransk-1-12-3-def-1',
      type: 'definition',
      title: 'La bande dessinee (la BD)',
      content: `**La bande dessinee** betyr bokstavelig "tegnet stripe". Forkortet: **la BD** (uttales "be-de"). Det er den franskspraklige betegnelsen for tegneserier, og sjangeren har en lang og stolt tradisjon i Frankrike og Belgia. BD-album er vanligvis i hardcover og kan vaere alt fra humor til seriose historier.`,
    },
    {
      id: 'fransk-1-12-3-text-1',
      type: 'text',
      content: `## Kjente tegneserier

| Tegneserie | Skapert av | Land | Handling |
|------------|-----------|------|---------|
| Tintin | Herge (Georges Remi) | Belgia | En ung journalist reiser verden rundt med hunden Milou |
| Asterix | Goscinny og Uderzo | Frankrike | Gallere kjemper mot romerne med hjelp av en trylledrikk |
| Lucky Luke | Morris | Belgia | En cowboy i det ville vesten som skyter raskere enn sin egen skygge |
| Le Petit Nicolas | Goscinny og Sempe | Frankrike | En liten gutt og hans morsomme hverdagseventyr |

**Tintin** (1929) er en av verdens mest oversatte tegneserier og finnes pa over 100 sprak. **Asterix** (1959) har solgt over 380 millioner album pa verdensbasis.`,
    },
    {
      id: 'fransk-1-12-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Tegneseriefigurer',
      problem: `Koble figuren til riktig tegneserie:
a) Obelix
b) Milou (en hund)
c) Jolly Jumper (en hest)
d) Nicolas`,
      solution: `a) Obelix - **Asterix** (Obelix er Asterix' beste venn)
b) Milou - **Tintin** (Milou er Tintins hund)
c) Jolly Jumper - **Lucky Luke** (Lucky Lukes hest)
d) Nicolas - **Le Petit Nicolas** (hovedpersonen)`,
    },
    {
      id: 'fransk-1-12-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble figuren til riktig tegneserie.',
        subTasks: [
          { label: 'a', task: 'Asterix', solution: 'Asterix (av Goscinny og Uderzo)' },
          { label: 'b', task: 'Tintin', solution: 'Tintin (av Herge)' },
          { label: 'c', task: 'Lucky Luke', solution: 'Lucky Luke (av Morris)' },
          { label: 'd', task: 'Le Petit Nicolas', solution: 'Le Petit Nicolas (av Goscinny og Sempe)' },
        ],
        solution: 'a) Asterix, b) Tintin, c) Lucky Luke, d) Le Petit Nicolas',
        hints: ['Se tabellen over kjente tegneserier'],
      },
    },
    {
      id: 'fransk-1-12-3-text-2',
      type: 'text',
      content: `## BD-festivalen i Angouleme

Hvert ar i januar arrangeres **Festival international de la bande dessinee** i byen Angouleme i Vest-Frankrike. Det er verdens storste tegneseriefestival. Her vises nye album, det deles ut priser, og forfattere og tegnere moeter publikum.

## Vokabular - Tegneserier

| Fransk | Norsk |
|--------|-------|
| la bande dessinee (la BD) | tegneserien |
| le personnage | figuren / karakteren |
| l'aventure (f) | eventyret |
| drole | morsom |
| dessiner | tegne |
| l'auteur (m) | forfatteren |
| le dessinateur / la dessinatrice | tegneren (m/f) |
| une bulle | en snakkeboble |
| une planche | en tegneserieside |
| un album | et album |`,
    },
    {
      id: 'fransk-1-12-3-tip-1',
      type: 'tip',
      content: `**Tips!** A lese franske tegneserier er en morsom mate a laere sprak pa. Bildene hjelper deg a forsta handlingen, og snakkeboblene inneholder hverdagslig sprak. Prov a finne en Asterix eller Tintin pa fransk!`,
    },
    {
      id: 'fransk-1-12-3-example-2',
      type: 'example',
      title: 'Eksempel 2: BD-vokabular',
      problem: `Hva betyr disse ordene?
a) le personnage
b) dessiner
c) drole`,
      solution: `a) le personnage = **figuren / karakteren**
b) dessiner = **tegne**
c) drole = **morsom**`,
    },
    {
      id: 'fransk-1-12-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett BD-vokabularet til norsk.',
        subTasks: [
          { label: 'a', task: 'la bande dessinee', solution: 'tegneserien' },
          { label: 'b', task: "l'aventure", solution: 'eventyret' },
          { label: 'c', task: 'une bulle', solution: 'en snakkeboble' },
          { label: 'd', task: "l'auteur", solution: 'forfatteren' },
        ],
        solution: 'a) tegneserien, b) eventyret, c) en snakkeboble, d) forfatteren',
        hints: ['aventure ligner pa det engelske "adventure"'],
      },
    },
    {
      id: 'fransk-1-12-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Oversettelse',
      problem: `Oversett til norsk:
a) Tintin est un personnage de BD belge.
b) Asterix est drole.
c) J'aime lire des bandes dessinees.`,
      solution: `a) Tintin er en belgisk tegneseriefigur.
b) Asterix er morsom.
c) Jeg liker a lese tegneserier.`,
    },
    {
      id: 'fransk-1-12-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Asterix er en morsom tegneserie.', solution: 'Asterix est une BD drole.' },
          { label: 'b', task: 'Tintin er en belgisk figur.', solution: 'Tintin est un personnage belge.' },
          { label: 'c', task: 'Jeg liker a tegne.', solution: "J'aime dessiner." },
        ],
        solution: "a) Asterix est une BD drole. b) Tintin est un personnage belge. c) J'aime dessiner.",
        hints: ['drole = morsom', 'belge = belgisk', 'dessiner = tegne'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-12-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om en tegneserie du kjenner. Bruk minst 3 ord fra vokabular-tabellen.',
        subTasks: [
          { label: 'a', task: 'Hva heter tegneserien?', solution: 'Fritt valg. F.eks.: Asterix, Tintin, eller en annen tegneserie.' },
          { label: 'b', task: 'Hvem er hovedpersonen?', solution: 'F.eks.: Le personnage principal est Asterix. Il est petit et fort.' },
          { label: 'c', task: 'Er tegneserien morsom, spennende eller begge deler?', solution: 'F.eks.: Asterix est drole et plein d\'aventures.' },
        ],
        solution: "Eksempel: Asterix est une bande dessinee francaise. Le personnage principal est Asterix. La BD est drole et pleine d'aventures.",
        hints: ['Se vokabular-tabellen', 'Bruk eksemplene som mal'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12.4: Les fetes et traditions - Hoytider og tradisjoner
// ============================================================================

export const CHAPTER_FRANSK_1_12_4: TextbookChapter = {
  id: 'fransk-1-12-4',
  courseId: 'fransk-1',
  chapterNumber: '12.4',
  title: 'Les fetes et traditions',
  subtitle: 'Hoytider og tradisjoner',
  description: 'Laer om franske hoytider og tradisjoner gjennom aret.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive levemaker og tradisjoner i omrader der spraket snakkes',
    'se sammenhenger med egen bakgrunn',
  ],
  content: [
    {
      id: 'fransk-1-12-4-intro',
      type: 'text',
      content: `## Franske hoytider og tradisjoner

Frankrike har mange spennende hoytider og tradisjoner gjennom aret. Noen er nasjonale feiringer, mens andre er religiose eller kulturelle. I dette kapittelet skal du laere om de viktigste franske hoytidene og sammenligne dem med norske tradisjoner.`,
    },
    {
      id: 'fransk-1-12-4-text-1',
      type: 'text',
      content: `## De viktigste franske hoytidene

| Hoytid | Dato | Beskrivelse |
|--------|------|------------|
| Le 14 juillet (Nasjonaldagen) | 14. juli | Feirer den franske revolusjonen med militaerparade, fyrverkeri og ball |
| La Fete de la Musique | 21. juni | Gratis konserter i hele Frankrike |
| Noel (Jul) | 25. desember | Julaften feires med stor middag, buche de Noel (julekake) |
| L'Epiphanie | 6. januar | Man spiser galette des rois (trettendagskake) |
| Mardi gras | Varierer (februar/mars) | Karneval med kostymer, krepler og festing |
| La Toussaint | 1. november | Allehelgensdag, man besoekergraver |
| Le Jour de l'An | 1. januar | Nytarsdag |`,
    },
    {
      id: 'fransk-1-12-4-def-1',
      type: 'definition',
      title: 'Le 14 juillet',
      content: `**Le 14 juillet** (den 14. juli) er Frankrikes nasjonaldag. Den markerer stormingen av Bastillen i 1789, som var starten pa den franske revolusjonen. Pa denne dagen er det en stor militaerparade pa **les Champs-Elysees** i Paris, etterfulgt av et spektakulaert fyrverkeri fra Eiffeltarnet.`,
    },
    {
      id: 'fransk-1-12-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Koble hoytider til datoer',
      problem: `Koble hoytiden til riktig dato:
a) Le 14 juillet
b) La Fete de la Musique
c) L'Epiphanie
d) Noel`,
      solution: `a) Le 14 juillet - **14. juli** (nasjonaldagen)
b) La Fete de la Musique - **21. juni**
c) L'Epiphanie - **6. januar**
d) Noel - **25. desember**`,
    },
    {
      id: 'fransk-1-12-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble hoytiden til riktig dato.',
        subTasks: [
          { label: 'a', task: 'Le Jour de l\'An', solution: '1. januar' },
          { label: 'b', task: 'La Toussaint', solution: '1. november' },
          { label: 'c', task: 'Le 14 juillet', solution: '14. juli' },
          { label: 'd', task: 'La Fete de la Musique', solution: '21. juni' },
        ],
        solution: 'a) 1. januar, b) 1. november, c) 14. juli, d) 21. juni',
        hints: ['Se tabellen over franske hoytider'],
      },
    },
    {
      id: 'fransk-1-12-4-text-2',
      type: 'text',
      content: `## Jul i Frankrike (Noel)

Julen i Frankrike skiller seg litt fra den norske:
- **Le reveillon de Noel** (julaften): Franskmenn spiser en stor festmiddag sent pa kvelden den 24. desember
- **La buche de Noel**: En tradisjonell julekake formet som en vedkubbe
- **Le Pere Noel**: Den franske julenissen
- **Les cadeaux**: Gavelappning foregaer enten sent pa julaften eller om morgenen den 25. desember
- Frankrike har ingen "lille julaften" som i Norge

## L'Epiphanie og galette des rois

Den 6. januar feires **l'Epiphanie** (trettendagen). Pa denne dagen spiser man **la galette des rois** (kongekaken). Inne i kaken er det gjemt en liten figur (**la feve**). Den som finner figuren, blir kronet til konge eller dronning for en dag!

## Vokabular - Hoytider

| Fransk | Norsk |
|--------|-------|
| la fete | festen / hoytiden |
| celebrer / feter | feire |
| la tradition | tradisjonen |
| le defile | paraden / opptog |
| le feu d'artifice | fyrverkeriet |
| le gateau | kaken |
| un cadeau | en gave |
| le deguisement | kostymet (utkledning) |
| joyeux Noel | god jul |
| bonne annee | godt nyttar |`,
    },
    {
      id: 'fransk-1-12-4-note-1',
      type: 'note',
      content: `**Mardi gras** betyr bokstavelig "feit tirsdag". Det er siste dagen for festing og god mat for den kristne fastetiden begynner. I mange franske byer er det karneval med kostymer og parader. Den mest kjente Mardi gras-feiringen i den fransktalende verden er i New Orleans, som var en fransk koloni.`,
    },
    {
      id: 'fransk-1-12-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Hoytidsvokabular',
      problem: `Oversett til norsk:
a) le feu d'artifice
b) le defile
c) celebrer`,
      solution: `a) le feu d'artifice = **fyrverkeriet**
b) le defile = **paraden / opptoget**
c) celebrer = **feire**`,
    },
    {
      id: 'fransk-1-12-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett hoytidsvokabularet til norsk.',
        subTasks: [
          { label: 'a', task: 'la fete', solution: 'festen / hoytiden' },
          { label: 'b', task: 'un cadeau', solution: 'en gave' },
          { label: 'c', task: 'le gateau', solution: 'kaken' },
          { label: 'd', task: 'joyeux Noel', solution: 'god jul' },
        ],
        solution: 'a) festen/hoytiden, b) en gave, c) kaken, d) god jul',
        hints: ['cadeau ligner litt pa det engelske "gift" - men pa fransk!'],
      },
    },
    {
      id: 'fransk-1-12-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Sammenligning med Norge',
      problem: `Sammenlign franske og norske tradisjoner:
a) Hva feires 14. juli i Frankrike? Hva feires 17. mai i Norge?
b) Hva er la buche de Noel?
c) Hva er galette des rois?`,
      solution: `a) Begge er nasjonaldager. 14. juli feirer den franske revolusjonen, 17. mai feirer den norske grunnloven. Begge har parader og feiring.
b) La buche de Noel er en tradisjonell fransk julekake formet som en vedkubbe.
c) Galette des rois er en kake man spiser 6. januar. Den som finner den gjemte figuren, blir "konge" for en dag.`,
    },
    {
      id: 'fransk-1-12-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'God jul!', solution: 'Joyeux Noel !' },
          { label: 'b', task: 'Godt nyttar!', solution: 'Bonne annee !' },
          { label: 'c', task: 'Det er fyrverkeri pa nasjonaldagen.', solution: "Il y a un feu d'artifice le 14 juillet." },
        ],
        solution: "a) Joyeux Noel ! b) Bonne annee ! c) Il y a un feu d'artifice le 14 juillet.",
        hints: ['joyeux = gledelig', 'il y a = det er/det finnes'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-12-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign franske og norske tradisjoner. Skriv pa norsk.',
        subTasks: [
          { label: 'a', task: 'Nevn to likheter mellom franske og norske hoytider.', solution: 'Begge land har en nasjonaldag med parade. Begge feirer jul med gave og god mat.' },
          { label: 'b', task: 'Nevn to forskjeller.', solution: 'Frankrike har Mardi gras og l\'Epiphanie. Norge har ikke disse. Franskmenn spiser julemat sent pa kvelden.' },
          { label: 'c', task: 'Hvilken fransk tradisjon synes du hores mest spennende ut?', solution: 'Fritt svar. F.eks.: L\'Epiphanie med galette des rois hores goy ut.' },
        ],
        solution: 'Eksempel: Likheter: nasjonaldag med parade, julefeiring. Forskjeller: Mardi gras, l\'Epiphanie. Galette des rois hores morsomt ut.',
        hints: ['Tenk pa jul, nasjonaldag og andre hoytider'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 13.1: Lire un menu - Lese en meny
// ============================================================================

export const CHAPTER_FRANSK_1_13_1: TextbookChapter = {
  id: 'fransk-1-13-1',
  courseId: 'fransk-1',
  chapterNumber: '13.1',
  title: 'Lire un menu',
  subtitle: 'Lese en meny',
  description: 'Laer a lese og forsta en fransk restaurantmeny.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forsta enkle autentiske tekster',
    'bruke spraklige strukturer og vokabular tilpasset situasjonen',
  ],
  content: [
    {
      id: 'fransk-1-13-1-intro',
      type: 'text',
      content: `## Lese en fransk meny

Nar du besoekerennrestaurant i Frankrike, er det nyttig a kunne lese menyen. En fransk meny er organisert pa en bestemt mate, med forrett, hovedrett og dessert. I dette kapittelet skal du laere a forsta en typisk fransk meny og bestille mat.`,
    },
    {
      id: 'fransk-1-13-1-def-1',
      type: 'definition',
      title: 'Le menu du jour',
      content: `**Le menu du jour** er dagens meny pa en fransk restaurant. Det er vanligvis et fast maltidet med forrett, hovedrett og dessert til en fast pris. Det er ofte billigere enn a bestille a la carte (fra det vanlige menykortet). I Frankrike betyr **le menu** et fastsatt maltid, mens **la carte** er det store menykortet der du velger fritt.`,
    },
    {
      id: 'fransk-1-13-1-text-1',
      type: 'text',
      content: `## Eksempel pa en fransk meny

---

**Restaurant Le Petit Bistrot**
*Menu du jour - 15 euros*

**Entree** (forrett)
- Soupe a l'oignon (loeksuppe)
- Salade nicoise (salat med tunfisk, egg og oliven)

**Plat principal** (hovedrett)
- Poulet roti avec des frites (stekt kylling med pommes frites)
- Steak-frites (biff med pommes frites)
- Quiche lorraine (pai med skinke og ost)

**Dessert**
- Creme brulee
- Tarte aux pommes (eplekake)
- Mousse au chocolat (sjokolademousse)

*Boissons non comprises* (drikke ikke inkludert)

---

Legg merke til at menyen er delt inn i tre deler: **l'entree** (forretten), **le plat principal** (hovedretten) og **le dessert** (desserten).`,
    },
    {
      id: 'fransk-1-13-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Forsta menyen',
      problem: `Bruk menyen over til a svare:
a) Hva koster "menu du jour"?
b) Hvilke forretter kan du velge?
c) Er drikke inkludert i prisen?`,
      solution: `a) Menu du jour koster **15 euro**.
b) Forrettene er **soupe a l'oignon** (loeksuppe) og **salade nicoise**.
c) **Nei**, drikke er ikke inkludert ("boissons non comprises").`,
    },
    {
      id: 'fransk-1-13-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk menyen til a svare pa sporsmalene.',
        subTasks: [
          { label: 'a', task: 'Hvor mange hovedretter kan du velge mellom?', solution: 'Tre: poulet roti, steak-frites og quiche lorraine.' },
          { label: 'b', task: 'Hva er "tarte aux pommes"?', solution: 'Eplekake (tarte = kake/pai, pommes = epler).' },
          { label: 'c', task: 'Hva betyr "plat principal"?', solution: 'Hovedrett.' },
        ],
        solution: 'a) Tre hovedretter. b) Eplekake. c) Hovedrett.',
        hints: ['Se menyen i teksten', 'pommes = epler, frites = stekte (pommes frites)'],
      },
    },
    {
      id: 'fransk-1-13-1-text-2',
      type: 'text',
      content: `## Menyvokabular

| Fransk | Norsk |
|--------|-------|
| l'entree (f) | forretten |
| le plat principal | hovedretten |
| le dessert | desserten |
| le menu du jour | dagens meny |
| la carte | menykortet (a la carte) |
| a emporter | ta med (take away) |
| sur place | spise her (pa stedet) |
| les boissons (f, pl) | drikkene |
| l'addition (f) | regningen |
| le serveur / la serveuse | kelneren (m/f) |
| commander | bestille |
| le prix | prisen |`,
    },
    {
      id: 'fransk-1-13-1-tip-1',
      type: 'tip',
      content: `**Pa restaurant i Frankrike**: Nar du vil ha regningen, sier du "L'addition, s'il vous plait!" (Regningen, vaer sa snill!). Tips er vanligvis inkludert i prisen i Frankrike (service compris), men det er vanlig a runde opp eller legge igjen noen euro ekstra.`,
    },
    {
      id: 'fransk-1-13-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Menyvokabular',
      problem: `Oversett til norsk:
a) Je voudrais le menu du jour, s'il vous plait.
b) C'est a emporter ou sur place?
c) L'addition, s'il vous plait.`,
      solution: `a) Jeg vil gjerne ha dagens meny, vaer sa snill.
b) Er det for a ta med eller spise her?
c) Regningen, vaer sa snill.`,
    },
    {
      id: 'fransk-1-13-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett menyvokabularet til norsk.',
        subTasks: [
          { label: 'a', task: "l'entree", solution: 'forretten' },
          { label: 'b', task: 'le plat principal', solution: 'hovedretten' },
          { label: 'c', task: 'a emporter', solution: 'ta med (take away)' },
          { label: 'd', task: "l'addition", solution: 'regningen' },
        ],
        solution: 'a) forretten, b) hovedretten, c) ta med, d) regningen',
        hints: ['addition betyr her "regningen", ikke "addisjon" som i matte'],
      },
    },
    {
      id: 'fransk-1-13-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Bestille mat',
      problem: `Oversett til fransk:
a) Jeg vil gjerne ha kylling med pommes frites.
b) Kan jeg fa regningen?
c) Jeg tar eplekake som dessert.`,
      solution: `a) Je voudrais le poulet avec des frites, s'il vous plait.
b) L'addition, s'il vous plait. / Est-ce que je peux avoir l'addition ?
c) Je prends la tarte aux pommes comme dessert.`,
    },
    {
      id: 'fransk-1-13-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne ha dagens meny.', solution: 'Je voudrais le menu du jour, s\'il vous plait.' },
          { label: 'b', task: 'For a ta med, vaer sa snill.', solution: 'A emporter, s\'il vous plait.' },
          { label: 'c', task: 'Hva er dagens suppe?', solution: 'Quelle est la soupe du jour ?' },
        ],
        solution: "a) Je voudrais le menu du jour. b) A emporter, s'il vous plait. c) Quelle est la soupe du jour ?",
        hints: ['je voudrais = jeg vil gjerne ha', 's\'il vous plait = vaer sa snill'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-13-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag din egen meny for en restaurant. Skriv pa fransk.',
        subTasks: [
          { label: 'a', task: 'Skriv navnet pa restauranten din.', solution: 'Fritt valg. F.eks.: Restaurant Chez Moi.' },
          { label: 'b', task: 'Skriv en forrett, en hovedrett og en dessert pa fransk.', solution: 'F.eks.: Entree: Soupe de tomates. Plat principal: Poulet avec du riz. Dessert: Mousse au chocolat.' },
          { label: 'c', task: 'Hva koster menyen?', solution: 'F.eks.: Le menu du jour: 12 euros.' },
        ],
        solution: 'Eksempel: Restaurant Chez Moi. Menu du jour: 12 euros. Entree: Soupe de tomates. Plat: Poulet avec du riz. Dessert: Mousse au chocolat.',
        hints: ['Se eksempelet pa menyen', 'Bruk matvokabular du allerede kan'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 13.2: Lire un horaire - Lese rutetabeller
// ============================================================================

export const CHAPTER_FRANSK_1_13_2: TextbookChapter = {
  id: 'fransk-1-13-2',
  courseId: 'fransk-1',
  chapterNumber: '13.2',
  title: 'Lire un horaire',
  subtitle: 'Lese rutetabeller',
  description: 'Laer a lese og forsta franske rutetabeller for tog, metro og buss.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forsta enkle autentiske tekster',
    'bruke spraklige strukturer og vokabular tilpasset situasjonen',
  ],
  content: [
    {
      id: 'fransk-1-13-2-intro',
      type: 'text',
      content: `## Lese rutetabeller

Nar du reiser i Frankrike, trenger du a forsta rutetabeller for tog, metro og buss. Frankrike har et godt utbygd togsystem med **SNCF** (Societe Nationale des Chemins de fer Francais) og **TGV** (Train a Grande Vitesse - hoghastighetstog). I dette kapittelet laerer du a lese og forsta franske rutetabeller.`,
    },
    {
      id: 'fransk-1-13-2-def-1',
      type: 'definition',
      title: 'SNCF og TGV',
      content: `**SNCF** (Societe Nationale des Chemins de fer Francais) er det franske statlige jernbaneselskapet. **TGV** (Train a Grande Vitesse) er det franske hoghastighetstog som kan kjore opptil 320 km/t. Med TGV tar det bare ca. 2 timer fra Paris til Lyon (ca. 470 km).`,
    },
    {
      id: 'fransk-1-13-2-text-1',
      type: 'text',
      content: `## Eksempel pa en rutetabell

---

**Paris Gare de Lyon → Lyon Part-Dieu**

| Train | Depart | Arrivee | Voie | Type |
|-------|--------|---------|------|------|
| TGV 6601 | 07:12 | 09:14 | 3 | TGV |
| TGV 6605 | 09:42 | 11:44 | 7 | TGV |
| TER 4821 | 10:30 | 14:55 | 12 | TER |
| TGV 6611 | 12:12 | 14:14 | 5 | TGV |
| TGV 6619 | 16:42 | 18:44 | 3 | TGV |

*Circule tous les jours sauf le dimanche*
(Gar hver dag unntatt sondag)

---

Legg merke til kolonnene: **le train** (toget), **le depart** (avgang), **l'arrivee** (ankomst), **la voie** (sporet/perrongen) og **le type** (togtype).`,
    },
    {
      id: 'fransk-1-13-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese rutetabellen',
      problem: `Bruk rutetabellen over til a svare:
a) Nar gar det forste toget?
b) Hvor lang tid tar TGV fra Paris til Lyon?
c) Hvilket spor gar TGV 6605 fra?`,
      solution: `a) Det forste toget gar **klokken 07:12**.
b) TGV tar ca. **2 timer** (f.eks. 07:12 til 09:14).
c) TGV 6605 gar fra **spor 7** (voie 7).`,
    },
    {
      id: 'fransk-1-13-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk rutetabellen til a svare.',
        subTasks: [
          { label: 'a', task: 'Nar ankommer TGV 6611 til Lyon?', solution: 'Klokken 14:14.' },
          { label: 'b', task: 'Hvor lang tid tar TER 4821?', solution: 'Ca. 4 timer og 25 minutter (10:30-14:55).' },
          { label: 'c', task: 'Gar togene pa sondager?', solution: 'Nei, "sauf le dimanche" betyr unntatt sondag.' },
        ],
        solution: 'a) 14:14. b) Ca. 4 timer 25 min. c) Nei, ikke pa sondager.',
        hints: ['Se tidene i tabellen', 'sauf = unntatt'],
      },
    },
    {
      id: 'fransk-1-13-2-text-2',
      type: 'text',
      content: `## Vokabular - Rutetabeller

| Fransk | Norsk |
|--------|-------|
| l'horaire (m) | rutetabellen / tidsskjemaet |
| le depart | avgangen |
| l'arrivee (f) | ankomsten |
| la voie | sporet / perrongen |
| quotidien(ne) | daglig |
| en semaine | pa hverdager |
| le week-end | i helgen |
| sauf | unntatt |
| le billet | billetten |
| aller simple | enveisbillett |
| aller-retour | tur-retur |
| composter le billet | stemple billetten |
| le quai | plattformen |
| la correspondance | bytte (tog/metro) |`,
    },
    {
      id: 'fransk-1-13-2-tip-1',
      type: 'tip',
      content: `**I det franske metrosystemet** bruker man 24-timersklokken, sa 15:30 betyr halv fire pa ettermiddagen. Paris har et enormt metrosystem med 16 linjer og over 300 stasjoner. Hver linje har et nummer og en farge, og man navigerer ved a folge retningen til endestasjonene.`,
    },
    {
      id: 'fransk-1-13-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Reisevokabular',
      problem: `Oversett til norsk:
a) Je voudrais un billet aller-retour Paris-Lyon.
b) Le train part a quelle heure ?
c) Il faut composter le billet.`,
      solution: `a) Jeg vil gjerne ha en tur-returbillett Paris-Lyon.
b) Nar gar toget? (Toget gar klokken...?)
c) Man ma stemple billetten.`,
    },
    {
      id: 'fransk-1-13-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett reisevokabularet til norsk.',
        subTasks: [
          { label: 'a', task: 'le depart', solution: 'avgangen' },
          { label: 'b', task: "l'arrivee", solution: 'ankomsten' },
          { label: 'c', task: 'aller-retour', solution: 'tur-retur' },
          { label: 'd', task: 'la correspondance', solution: 'bytte (tog/metro)' },
        ],
        solution: 'a) avgangen, b) ankomsten, c) tur-retur, d) bytte (tog/metro)',
        hints: ['arrivee kommer fra "arriver" (ankomme)'],
      },
    },
    {
      id: 'fransk-1-13-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Oversettelse',
      problem: `Oversett til fransk:
a) Nar gar toget?
b) Jeg vil gjerne ha en enveisbillett.
c) Toget ankommer klokken 14.`,
      solution: `a) Le train part a quelle heure ? / A quelle heure part le train ?
b) Je voudrais un billet aller simple, s'il vous plait.
c) Le train arrive a quatorze heures.`,
    },
    {
      id: 'fransk-1-13-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Toget gar klokken 9.', solution: 'Le train part a neuf heures.' },
          { label: 'b', task: 'Jeg vil gjerne ha en tur-returbillett.', solution: "Je voudrais un billet aller-retour, s'il vous plait." },
          { label: 'c', task: 'Hvilket spor gar toget fra?', solution: 'Le train part de quelle voie ?' },
        ],
        solution: "a) Le train part a neuf heures. b) Je voudrais un billet aller-retour. c) Le train part de quelle voie ?",
        hints: ['partir = ga/reise', 'voie = spor'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-13-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du er pa Paris Gare de Lyon og skal til Lyon. Bruk rutetabellen til a planlegge reisen din.',
        subTasks: [
          { label: 'a', task: 'Hvilket tog velger du, og hvorfor?', solution: 'Fritt valg. F.eks.: TGV 6605 fordi det er raskt og gar pa formiddagen.' },
          { label: 'b', task: 'Skriv pa fransk: "Jeg vil gjerne ha en billett til Lyon."', solution: "Je voudrais un billet pour Lyon, s'il vous plait." },
          { label: 'c', task: 'Nar ankommer du?', solution: 'Avhenger av valgt tog. F.eks.: J\'arrive a onze heures quarante-quatre (11:44).' },
        ],
        solution: "Eksempel: Jeg velger TGV 6605. Je voudrais un billet pour Lyon. J'arrive a 11h44.",
        hints: ['Se rutetabellen', 'pour = til'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 13.3: Petites annonces - Smaaannonser
// ============================================================================

export const CHAPTER_FRANSK_1_13_3: TextbookChapter = {
  id: 'fransk-1-13-3',
  courseId: 'fransk-1',
  chapterNumber: '13.3',
  title: 'Petites annonces',
  subtitle: 'Smaaannonser',
  description: 'Laer a lese og forsta franske smaaannonser for bolig og jobb.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forsta enkle autentiske tekster',
    'bruke spraklige strukturer og vokabular tilpasset situasjonen',
  ],
  content: [
    {
      id: 'fransk-1-13-3-intro',
      type: 'text',
      content: `## Smaaannonser - petites annonces

Smaaannonser er en nyttig type tekst a kunne lese. I Frankrike finner man annonser for boliger, jobber og brukte gjenstander i aviser, pa nettsider og pa oppslagstavler. Annonsene bruker ofte forkortelser og spesielle uttrykk. I dette kapittelet laerer du a forsta de vanligste.`,
    },
    {
      id: 'fransk-1-13-3-text-1',
      type: 'text',
      content: `## Boligannonser

Her er eksempler pa franske boligannonser:

---

**Annonce 1:**
A louer - T2 meuble, centre-ville, 3e etage, 45 m2. Cuisine equipee, balcon. Charges comprises. Loyer: 650 euros/mois. Disponible 1er mars. Tel: 06 12 34 56 78.

**Annonce 2:**
A vendre - T4, 85 m2, quartier calme, proche ecole. 2 chambres, salon, cuisine. Cave et parking. Prix: 220 000 euros.

---

## Forkortelser i boligannonser

| Forkortelse | Betydning | Norsk |
|-------------|-----------|-------|
| T2, T3, T4... | Antall rom (Type 2, 3, 4...) | 2-roms, 3-roms, 4-roms |
| meuble | moelblert | moelblert |
| charges comprises (CC) | utgifter inkludert | utgifter inkludert |
| a louer | til leie | til leie |
| a vendre | til salgs | til salgs |
| m2 | kvadratmeter | kvadratmeter |
| etage | etasje | etasje |`,
    },
    {
      id: 'fransk-1-13-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Forsta en boligannonse',
      problem: `Les annonce 1 og svar:
a) Er leiligheten til leie eller til salgs?
b) Hvor stor er leiligheten?
c) Hva koster den per maned?`,
      solution: `a) Leiligheten er **til leie** ("a louer").
b) Leiligheten er **45 m2** (kvadratmeter).
c) Den koster **650 euro per maned** (650 euros/mois).`,
    },
    {
      id: 'fransk-1-13-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les annonsene og svar pa sporsmalene.',
        subTasks: [
          { label: 'a', task: 'Hva betyr "T2"?', solution: 'En 2-roms leilighet (Type 2).' },
          { label: 'b', task: 'Er annonce 2 til leie eller til salgs?', solution: 'Til salgs ("a vendre").' },
          { label: 'c', task: 'Har annonce 1 balkong?', solution: 'Ja ("balcon").' },
          { label: 'd', task: 'Hva betyr "charges comprises"?', solution: 'Utgifter inkludert (strom, vann osv.).' },
        ],
        solution: 'a) 2-roms. b) Til salgs. c) Ja. d) Utgifter inkludert.',
        hints: ['Se forkortelsestabellen'],
      },
    },
    {
      id: 'fransk-1-13-3-text-2',
      type: 'text',
      content: `## Jobbannonser

Her er eksempler pa franske jobbannonser:

---

**Annonce 3:**
Restaurant Le Bon Gout cherche serveur/serveuse. CDI, temps plein. Experience souhaitee. Salaire: SMIC + pourboires. Envoyer CV a: lebongout@mail.fr

**Annonce 4:**
Cherche baby-sitter pour 2 enfants (6 et 9 ans). Mi-temps, mercredi et samedi. 12 euros/heure. Disponible immediatement.

---

## Forkortelser i jobbannonser

| Forkortelse | Betydning | Norsk |
|-------------|-----------|-------|
| CDI | Contrat a Duree Indeterminee | fast stilling |
| CDD | Contrat a Duree Determinee | midlertidig stilling |
| mi-temps | deltid | deltid |
| temps plein | heltid | heltid |
| SMIC | minstellonn | minstellonn |
| CV | curriculum vitae | CV |`,
    },
    {
      id: 'fransk-1-13-3-note-1',
      type: 'note',
      content: `**Visste du?** I Frankrike er en **CDI** (fast stilling) veldig ettertraktet. Mange unge franskmenn jobber pa kortere kontrakter (**CDD**) i lang tid for de far en fast stilling. SMIC er den franske minstelonnen og ligger pa ca. 1 750 euro brutto per maned (2024).`,
    },
    {
      id: 'fransk-1-13-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Forsta en jobbannonse',
      problem: `Les annonce 3 og svar:
a) Hva slags jobb er det?
b) Er det heltid eller deltid?
c) Hva betyr "CDI"?`,
      solution: `a) Det er en jobb som **servitor** (serveur/serveuse) pa en restaurant.
b) Det er **heltid** (temps plein).
c) CDI betyr **fast stilling** (Contrat a Duree Indeterminee).`,
    },
    {
      id: 'fransk-1-13-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les annonsene og svar.',
        subTasks: [
          { label: 'a', task: 'Hva er loennen i annonce 4?', solution: '12 euro per time.' },
          { label: 'b', task: 'Er baby-sitter-jobben heltid eller deltid?', solution: 'Deltid (mi-temps).' },
          { label: 'c', task: 'Hva betyr "experience souhaitee"?', solution: 'Erfaring oensket.' },
        ],
        solution: 'a) 12 euro/time. b) Deltid. c) Erfaring oensket.',
        hints: ['Se forkortelsestabellene', 'souhaite(e) = oensket'],
      },
    },
    {
      id: 'fransk-1-13-3-text-3',
      type: 'text',
      content: `## Vokabular - Annonser

| Fransk | Norsk |
|--------|-------|
| l'annonce (f) | annonsen |
| chercher | soeke / lete etter |
| louer | leie |
| le loyer | leien (husleien) |
| le salaire | loennen |
| disponible | tilgjengelig |
| l'experience (f) | erfaringen |
| envoyer | sende |
| immediatement | umiddelbart |
| souhaite(e) | oensket |
| proche (de) | naer / i naerheten (av) |
| calme | rolig |`,
    },
    {
      id: 'fransk-1-13-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Oversettelse',
      problem: `Oversett til norsk:
a) Je cherche un appartement a louer.
b) Le salaire est de 12 euros par heure.
c) L'appartement est disponible immediatement.`,
      solution: `a) Jeg soekerenleilighet til leie.
b) Loennen er 12 euro per time.
c) Leiligheten er tilgjengelig umiddelbart.`,
    },
    {
      id: 'fransk-1-13-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg soekerenjobb.', solution: 'Je cherche un travail / un emploi.' },
          { label: 'b', task: 'Leiligheten er rolig.', solution: "L'appartement est calme." },
          { label: 'c', task: 'Send CV-en din.', solution: 'Envoyez votre CV.' },
        ],
        solution: "a) Je cherche un travail. b) L'appartement est calme. c) Envoyez votre CV.",
        hints: ['chercher = soeke', 'calme = rolig', 'envoyer = sende'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-13-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv din egen annonse pa fransk (bolig eller jobb).',
        subTasks: [
          { label: 'a', task: 'Er det en boligannonse eller jobbannonse?', solution: 'Fritt valg.' },
          { label: 'b', task: 'Skriv annonsen pa fransk med minst 3 opplysninger.', solution: 'F.eks.: A louer - T3 meuble, centre-ville. 55 m2. Loyer: 700 euros/mois. Disponible 1er septembre.' },
          { label: 'c', task: 'Bruk minst 2 forkortelser fra kapittelet.', solution: 'F.eks.: T3, CC, CDI, mi-temps, m2.' },
        ],
        solution: 'Eksempel: A louer - T3, 55 m2, CC, centre-ville. Loyer: 700 euros/mois.',
        hints: ['Se eksemplene pa annonser', 'Bruk forkortelsestabellene'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 13.4: Poemes et chansons simples - Enkle dikt og sanger
// ============================================================================

export const CHAPTER_FRANSK_1_13_4: TextbookChapter = {
  id: 'fransk-1-13-4',
  courseId: 'fransk-1',
  chapterNumber: '13.4',
  title: 'Poemes et chansons simples',
  subtitle: 'Enkle dikt og sanger',
  description: 'Les og forsta enkle franske dikt og sanger.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forsta enkle autentiske tekster',
    'utforske og presentere kunstneriske og kulturelle uttrykk fra omrader der spraket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-13-4-intro',
      type: 'text',
      content: `## Enkle dikt og sanger

Dikt og sanger er en fin mate a laere sprak pa. De er korte, har ofte rim og rytme, og de hjelper deg a huske nye ord og uttrykk. I dette kapittelet skal du lese et kjent fransk dikt og noen kjente barnesanger.`,
    },
    {
      id: 'fransk-1-13-4-text-1',
      type: 'text',
      content: `## Jacques Prevert: "Dejeuner du matin"

Jacques Prevert (1900-1977) er en av Frankrikes mest elsker diktere. Hans dikt handler ofte om hverdagslige ting og er skrevet i et enkelt sprak. Her er et forenklet utdrag av hans beroemte dikt:

---

*Dejeuner du matin*

Il a mis le cafe
dans la tasse.
Il a mis le lait
dans la tasse de cafe.
Il a mis le sucre
dans le cafe au lait.
Il a bu le cafe au lait.
Et il est parti
sans me parler.
Sans me regarder.

---

**Oversettelse:**
Han la kaffen / i koppen. / Han la melken / i kaffekoppen. / Han la sukkeret / i kaffe-med-melken. / Han drakk kaffe-med-melken. / Og han dro / uten a snakke til meg. / Uten a se pa meg.`,
    },
    {
      id: 'fransk-1-13-4-def-1',
      type: 'definition',
      title: 'Le passe compose',
      content: `I diktet "Dejeuner du matin" brukes verbtiden **le passe compose** (sammensatt fortid). Den dannes med **avoir** eller **etre** + partisipp: "il a mis" = han la, "il a bu" = han drakk, "il est parti" = han dro. Denne verbtiden laerer du mer om senere, men du kan allerede begynne a gjenkjenne den i tekster.`,
    },
    {
      id: 'fransk-1-13-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Forsta diktet',
      problem: `Svar pa sporsmal om diktet "Dejeuner du matin":
a) Hva legger personen i koppen forst?
b) Hva gjor personen til slutt?
c) Hva er stemningen i diktet?`,
      solution: `a) Personen legger **kaffen** i koppen forst.
b) Personen **drar** uten a snakke eller se pa fortelleren.
c) Stemningen er **trist og ensom**. Diktet handler om noen som forlater fortelleren uten et ord.`,
    },
    {
      id: 'fransk-1-13-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar pa sporsmal om diktet.',
        subTasks: [
          { label: 'a', task: 'Hva betyr "la tasse"?', solution: 'Koppen.' },
          { label: 'b', task: 'Hva betyr "le cafe au lait"?', solution: 'Kaffe med melk.' },
          { label: 'c', task: 'Hva betyr "sans me parler"?', solution: 'Uten a snakke til meg.' },
          { label: 'd', task: 'Hva betyr "il est parti"?', solution: 'Han dro / han gikk.' },
        ],
        solution: 'a) koppen, b) kaffe med melk, c) uten a snakke til meg, d) han dro',
        hints: ['Se oversettelsen under diktet'],
      },
    },
    {
      id: 'fransk-1-13-4-text-2',
      type: 'text',
      content: `## Kjente franske barnesanger

### Frere Jacques
En av verdens mest kjente sanger er faktisk fransk!

*Frere Jacques, Frere Jacques,*
*Dormez-vous ? Dormez-vous ?*
*Sonnez les matines, sonnez les matines,*
*Ding, dang, dong. Ding, dang, dong.*

**Oversettelse:** Bror Jakob, bror Jakob, sover du? Sover du? Ring til morgenbonnen, ring til morgenbonnen, ding, dang, dong.

### Sur le pont d'Avignon
*Sur le pont d'Avignon,*
*On y danse, on y danse,*
*Sur le pont d'Avignon,*
*On y danse tout en rond.*

**Oversettelse:** Pa broen i Avignon danser man, danser man. Pa broen i Avignon danser man rundt i ring.`,
    },
    {
      id: 'fransk-1-13-4-note-1',
      type: 'note',
      content: `**Visste du?** "Frere Jacques" er oversatt til over 100 sprak og synges over hele verden. Pa norsk heter den "Bror Jakob". Sangen er en kanon (rundang) - man kan synge den i flere stemmer som starter til forskjellige tidspunkter.`,
    },
    {
      id: 'fransk-1-13-4-text-3',
      type: 'text',
      content: `## Diktvokabular

| Fransk | Norsk |
|--------|-------|
| le poeme | diktet |
| la rime | rimet |
| le vers | verset / verslinjen |
| la strophe | strofen |
| reciter | framsi / resitere |
| le sentiment | folelsen |
| triste | trist |
| joyeux / joyeuse | glad |
| le rythme | rytmen |
| le poete / la poetesse | dikteren (m/f) |
| chanter | synge |
| une chanson enfantine | en barnesang |`,
    },
    {
      id: 'fransk-1-13-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Identifisere rim',
      problem: `Finn rimene i diktet "Dejeuner du matin":
a) Hvilke ord rimer med "tasse"?
b) Rimer "parler" og "regarder"?`,
      solution: `a) I diktet gjentas "tasse" (kopp) - det rimer med seg selv og skaper en repeterende struktur.
b) **Ja**, "parler" og "regarder" rimer. Begge slutter pa "-er"-lyden. Dette er et vanlig rim i fransk poesi.`,
    },
    {
      id: 'fransk-1-13-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett diktvokabularet til norsk.',
        subTasks: [
          { label: 'a', task: 'le poeme', solution: 'diktet' },
          { label: 'b', task: 'la rime', solution: 'rimet' },
          { label: 'c', task: 'reciter', solution: 'framsi / resitere' },
          { label: 'd', task: 'le sentiment', solution: 'folelsen' },
        ],
        solution: 'a) diktet, b) rimet, c) framsi/resitere, d) folelsen',
        hints: ['rime ligner pa det norske "rim"', 'sentiment ligner pa det engelske "sentiment"'],
      },
    },
    {
      id: 'fransk-1-13-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Oversettelse',
      problem: `Oversett til norsk:
a) Dormez-vous ?
b) Sur le pont d'Avignon
c) C'est un poeme triste.`,
      solution: `a) Sover du? / Sover dere?
b) Pa broen i Avignon
c) Det er et trist dikt.`,
    },
    {
      id: 'fransk-1-13-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Diktet er trist.', solution: 'Le poeme est triste.' },
          { label: 'b', task: 'Jeg liker a synge.', solution: "J'aime chanter." },
          { label: 'c', task: '"Frere Jacques" er en kjent barnesang.', solution: '"Frere Jacques" est une chanson enfantine connue.' },
        ],
        solution: 'a) Le poeme est triste. b) J\'aime chanter. c) "Frere Jacques" est une chanson enfantine connue.',
        hints: ['triste = trist', 'chanter = synge', 'connu(e) = kjent'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-13-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Jobb med diktet "Dejeuner du matin" og barnesangene.',
        subTasks: [
          { label: 'a', task: 'Hva handler diktet "Dejeuner du matin" om? Skriv 2-3 setninger pa norsk.', solution: 'Diktet handler om en person som drikker kaffe og drar uten a si noe. Fortelleren er trist fordi personen forlater uten et ord.' },
          { label: 'b', task: 'Skriv de to forste linjene av "Frere Jacques" pa fransk.', solution: 'Frere Jacques, Frere Jacques, dormez-vous ? Dormez-vous ?' },
          { label: 'c', task: 'Kjenner du noen norske barnesanger som ligner pa de franske? Hvilke?', solution: 'Fritt svar. F.eks.: "Bror Jakob" er den norske versjonen av "Frere Jacques".' },
        ],
        solution: 'Fritt svar. Diktet handler om en som forlater uten a si noe. "Bror Jakob" er den norske versjonen av "Frere Jacques".',
        hints: ['Les diktet og oversettelsen noeye', 'Tenk pa norske barnesanger du kjenner'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_1_CHAPTERS_11_13: TextbookChapter[] = [
  CHAPTER_FRANSK_1_11_1,
  CHAPTER_FRANSK_1_11_2,
  CHAPTER_FRANSK_1_11_3,
  CHAPTER_FRANSK_1_11_4,
  CHAPTER_FRANSK_1_12_1,
  CHAPTER_FRANSK_1_12_2,
  CHAPTER_FRANSK_1_12_3,
  CHAPTER_FRANSK_1_12_4,
  CHAPTER_FRANSK_1_13_1,
  CHAPTER_FRANSK_1_13_2,
  CHAPTER_FRANSK_1_13_3,
  CHAPTER_FRANSK_1_13_4,
];
