/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivå 1 - Kapittel 11-13
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
  description: 'Utforsk den fransktalende verden og lær om hvor fransk snakkes.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive geografi i områder der språket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-11-1-intro',
      type: 'text',
      content: `## Den frankofone verden

Visste du at fransk snakkes av over 300 millioner mennesker på fem kontinenter? Fransk er offisielt språk i 29 land og er et av de offisielle språkene i FN, EU og mange internasjonale organisasjoner. Den fransktalende verden kalles **la Francophonie**.

I dette kapittelet skal du lære om hvor i verden fransk snakkes, og hvorfor språket er så utbredt.`,
    },
    {
      id: 'fransk-1-11-1-def-1',
      type: 'definition',
      title: 'La Francophonie',
      content: `**La Francophonie** betyr den fransktalende verden. Ordet brukes om:
1. Alle land og områder der fransk snakkes
2. **OIF** (Organisation internationale de la Francophonie) - en internasjonal organisasjon med 88 medlemsland som fremmer det franske språket og samarbeid

Fransk er utbredt på grunn av Frankrikes historie som kolonimakt, spesielt i Afrika, Asia og Amerika.`,
    },
    {
      id: 'fransk-1-11-1-text-1',
      type: 'text',
      content: `## Fransktalende land - oversikt

| Kontinent | Land (eksempler) |
|-----------|-----------------|
| Europa | la France, la Belgique, la Suisse, le Luxembourg, Monaco |
| Afrika | le Sénégal, le Maroc, la Tunisie, le Cameroun, la Côte d'Ivoire, la RD Congo |
| Nord-Amerika | le Canada (le Québec) |
| Karibia | Haiti, la Guadeloupe, la Martinique |
| Asia/Oseania | le Vietnam, le Cambodge, la Nouvelle-Calédonie |`,
    },
    {
      id: 'fransk-1-11-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Fransktalende land',
      problem: `Hvilke av disse landene er fransktalende?
a) la Belgique
b) l'Espagne
c) le Sénégal
d) la Norvège`,
      solution: `a) **la Belgique** - Ja! Fransk er et av tre offisielle språk (ved siden av nederlandsk og tysk).
b) **l'Espagne** - Nei, Spania snakker spansk.
c) **le Sénégal** - Ja! Fransk er offisielt språk.
d) **la Norvège** - Nei, Norge snakker norsk.`,
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
          { label: 'a', task: 'le Sénégal', solution: "l'Afrique (Afrika)" },
          { label: 'b', task: 'la Suisse', solution: "l'Europe (Europa)" },
          { label: 'c', task: 'le Canada', solution: "l'Amérique du Nord (Nord-Amerika)" },
          { label: 'd', task: 'le Cambodge', solution: "l'Asie (Asia)" },
        ],
        solution: "a) l'Afrique, b) l'Europe, c) l'Amérique du Nord, d) l'Asie",
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
| la langue | språket |
| la langue officielle | det offisielle språket |
| un continent | et kontinent |
| le monde | verden |
| francophone | fransktalende |
| parler français | snakke fransk |
| une colonie | en koloni |
| l'indépendance (f) | uavhengigheten |`,
    },
    {
      id: 'fransk-1-11-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Setninger om den frankofone verden',
      problem: `Oversett til norsk:
a) Le français est une langue mondiale.
b) Le Sénégal est un pays francophone en Afrique.
c) Il y a 29 pays ou le français est langue officielle.`,
      solution: `a) Fransk er et verdenssprak.
b) Sénégal er et fransktalende land i Afrika.
c) Det finnes 29 land der fransk er offisielt språk.`,
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
          { label: 'a', task: 'Fransk er et verdenssprak.', solution: 'Le français est une langue mondiale.' },
          { label: 'b', task: 'Belgia er et fransktalende land.', solution: 'La Belgique est un pays francophone.' },
          { label: 'c', task: 'Det finnes mange fransktalende land i Afrika.', solution: "Il y a beaucoup de pays francophones en Afrique." },
        ],
        solution: 'a) Le français est une langue mondiale. b) La Belgique est un pays francophone. c) Il y a beaucoup de pays francophones en Afrique.',
        hints: ['une langue = et språk', 'un pays = et land', 'francophone = fransktalende'],
      },
    },
    {
      id: 'fransk-1-11-1-note-1',
      type: 'note',
      content: `**Visste du?** Fransk er det nest mest studerte språket i verden etter engelsk. Over 50 % av alle som snakker fransk bor i Afrika, og antallet fransktalende i Afrika vokser raskt. Innen 2050 anslår man at det vil være over 700 millioner fransktalende i verden.`,
    },
    {
      id: 'fransk-1-11-1-text-3',
      type: 'text',
      content: `## Hvorfor snakkes fransk i så mange land?

Fransk ble spredt til mange deler av verden gjennom kolonisering fra 1600-tallet og framover. Frankrike hadde kolonier i:

- **Afrika**: Store deler av Vest- og Sentral-Afrika
- **Nord-Amerika**: Québec i Canada og Louisiana i USA
- **Karibia**: Haiti, Guadeloupe, Martinique
- **Asia**: Vietnam, Kambodsja, Laos

De fleste koloniene ble selvstendige på 1900-tallet, men mange beholdt fransk som offisielt språk.`,
    },
    {
      id: 'fransk-1-11-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Grunner til at fransk er utbredt',
      problem: `Sant eller usant?
a) Fransk snakkes bare i Europa.
b) Mange afrikanske land har fransk som offisielt språk.
c) Fransk er offisielt språk i FN.`,
      solution: `a) **Usant** - Fransk snakkes på fem kontinenter.
b) **Sant** - Over 20 afrikanske land har fransk som offisielt språk.
c) **Sant** - Fransk er et av seks offisielle språk i FN.`,
    },
    {
      id: 'fransk-1-11-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar på spørsmålene på norsk.',
        subTasks: [
          { label: 'a', task: 'Hva betyr "la Francophonie"?', solution: 'Den fransktalende verden / organisasjonen for fransktalende land' },
          { label: 'b', task: 'Hvorfor snakkes fransk i så mange land i Afrika?', solution: 'På grunn av fransk kolonisering fra 1600-tallet' },
          { label: 'c', task: 'Hvor mange land har fransk som offisielt språk?', solution: '29 land' },
        ],
        solution: 'a) Den fransktalende verden. b) På grunn av fransk kolonisering. c) 29 land.',
        hints: ['Se teksten om la Francophonie', 'Tenk på historien til det franske språket'],
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
        task: 'Velg et fransktalende land (ikke Frankrike) og skriv 3-4 setninger på norsk om det. Bruk følgende stikkord: hvor det ligger, hva språket er, noe spesielt med landet.',
        subTasks: [
          { label: 'a', task: 'Hvilket land har du valgt?', solution: 'Fritt valg, f.eks. le Sénégal, la Belgique, le Canada' },
          { label: 'b', task: 'Hvor ligger landet?', solution: 'F.eks. Sénégal ligger i Vest-Afrika.' },
          { label: 'c', task: 'Hva er det offisielle språket?', solution: 'F.eks. Det offisielle språket er fransk.' },
        ],
        solution: 'Eksempel: Sénégal ligger i Vest-Afrika. Det offisielle språket er fransk. Sénégal er kjent for sin gjestfrihet (teranga).',
        hints: ['Bruk tabellen over fransktalende land', 'Tenk på geografi og kultur'],
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
    'utforske og beskrive levemåter og tradisjoner i områder der språket snakkes',
    'se sammenhenger med egen bakgrunn',
  ],
  content: [
    {
      id: 'fransk-1-11-2-intro',
      type: 'text',
      content: `## Belgia og Sveits - fransktalende naboland

Frankrike er ikke det eneste europeiske landet der fransk snakkes. Både **Belgia** (la Belgique) og **Sveits** (la Suisse) har fransk som et av sine offisielle språk. Disse landene har sine egne tradisjoner og sin egen kultur, samtidig som de deler språket med Frankrike.`,
    },
    {
      id: 'fransk-1-11-2-text-1',
      type: 'text',
      content: `## Belgia (La Belgique)

Belgia er et lite land mellom Frankrike, Nederland og Tyskland. Landet har **tre offisielle språk**:
- **Fransk** - snakkes i den sørlige delen (Wallonia) og i Brussel
- **Nederlandsk (flamsk)** - snakkes i den nordlige delen (Flandern)
- **Tysk** - snakkes i et lite område i øst

**Hovedstaden** Brussel (Bruxelles) er offisielt tospråklig (fransk og nederlandsk) og er også setet for EU.

| Fakta | |
|-------|---|
| Hovedstad | Bruxelles (Brussel) |
| Befolkning | ca. 11,5 millioner |
| Språk | fransk, nederlandsk, tysk |
| Kjent for | sjokolade, vafler, Tintin, EU |`,
    },
    {
      id: 'fransk-1-11-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Fakta om Belgia',
      problem: `Sant eller usant?
a) Belgia har bare ett offisielt språk.
b) Brussel er hovedstaden i Belgia.
c) Belgia er kjent for sjokolade.`,
      solution: `a) **Usant** - Belgia har tre offisielle språk: fransk, nederlandsk og tysk.
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
        task: 'Svar på spørsmålene om Belgia.',
        subTasks: [
          { label: 'a', task: 'Hva heter Belgias hovedstad på fransk?', solution: 'Bruxelles' },
          { label: 'b', task: 'Hvilke tre språk snakkes i Belgia?', solution: 'Fransk, nederlandsk og tysk' },
          { label: 'c', task: 'I hvilken del av Belgia snakkes fransk?', solution: 'I den sørlige delen (Wallonia) og i Brussel' },
        ],
        solution: 'a) Bruxelles. b) Fransk, nederlandsk og tysk. c) Wallonia og Brussel.',
        hints: ['Se fakta-tabellen om Belgia'],
      },
    },
    {
      id: 'fransk-1-11-2-text-2',
      type: 'text',
      content: `## Sveits (La Suisse)

Sveits er et fjellrikt land midt i Europa med **fire offisielle språk**:
- **Tysk** - snakkes av ca. 63 % av befolkningen
- **Fransk** - snakkes av ca. 23 % (i vest, kalt "Suisse romande")
- **Italiensk** - snakkes av ca. 8 % (i sør)
- **Retoromansk** - snakkes av ca. 0,5 %

Viktige fransktalende byer i Sveits er **Genève** (Genf) og **Lausanne**.

| Fakta | |
|-------|---|
| Hovedstad | Berne (Bern) |
| Befolkning | ca. 8,7 millioner |
| Språk | tysk, fransk, italiensk, retoromansk |
| Kjent for | klokker, sjokolade, fondue, Alpene, nøytralitet |`,
    },
    {
      id: 'fransk-1-11-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne Belgia og Sveits',
      problem: `Fyll inn riktig land: la Belgique eller la Suisse.
a) ___ à quatre langues officielles.
b) ___ est le siège de l'Union européenne.
c) Genève est en ___.`,
      solution: `a) **La Suisse** à quatre langues officielles. (Sveits har fire offisielle språk.)
b) **La Belgique** est le siège de l'Union européenne. (Belgia er setet for EU.)
c) Genève est en **Suisse**. (Genève er i Sveits.)`,
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
          { label: 'b', task: 'Belgia har tre offisielle språk.', solution: 'La Belgique a trois langues officielles.' },
          { label: 'c', task: 'Genève er en by i Sveits.', solution: 'Genève est une ville en Suisse.' },
        ],
        solution: 'a) La Suisse est connue pour le chocolat. b) La Belgique a trois langues officielles. c) Genève est une ville en Suisse.',
        hints: ['connu(e) pour = kjent for', 'une langue = et språk'],
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
b) la fondue - **la Suisse** (sveitsisk fondue med smeltet øst)
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
        task: 'Hva betyr disse ordene på norsk?',
        subTasks: [
          { label: 'a', task: 'le chocolat', solution: 'sjokolade' },
          { label: 'b', task: 'la montagne', solution: 'fjellet' },
          { label: 'c', task: 'bilingue', solution: 'tospråklig' },
          { label: 'd', task: 'la neutralité', solution: 'nøytralitet' },
        ],
        solution: 'a) sjokolade, b) fjellet, c) tospråklig, d) nøytralitet',
        hints: ['chocolat ligner på det norske ordet', 'bilingue: bi = to, lingue = språk'],
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
        task: 'Sammenlign Belgia, Sveits og Norge. Skriv på norsk.',
        subTasks: [
          { label: 'a', task: 'Hva har disse tre landene til felles?', solution: 'Alle er små europeiske land. Belgia og Sveits er flerspråklige, Norge har også to målformer.' },
          { label: 'b', task: 'Hva er den største forskjellen?', solution: 'Belgia og Sveits har fransk som offisielt språk, det har ikke Norge.' },
          { label: 'c', task: 'Hva synes du er intéressant med flerspråklige land?', solution: 'Fritt svar. F.eks.: Det er spennende at folk kan snakke flere språk i hverdagen.' },
        ],
        solution: 'Fritt svar. Eksempel: Alle er små europeiske land. Forskjellen er at Belgia og Sveits er flerspråklige med fransk som offisielt språk.',
        hints: ['Tenk på språk, storrelse og beliggenhet', 'Norge har også to skriftsprak: bokmal og nynorsk'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.3: Le Québec et le Canada - Québec og Canada
// ============================================================================

export const CHAPTER_FRANSK_1_11_3: TextbookChapter = {
  id: 'fransk-1-11-3',
  courseId: 'fransk-1',
  chapterNumber: '11.3',
  title: 'Le Québec et le Canada',
  subtitle: 'Québec og Canada',
  description: 'Utforsk fransktalende Canada og forskjellene mellom fransk i Québec og Frankrike.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive levemåter og tradisjoner i områder der språket snakkes',
    'se sammenhenger med egen bakgrunn',
  ],
  content: [
    {
      id: 'fransk-1-11-3-intro',
      type: 'text',
      content: `## Québec - fransk i Nord-Amerika

Canada er et offisielt tospråklig land med **engelsk** og **fransk** som offisielle språk. Den fransktalende provinsen **Québec** (le Québec) er hjertet av det fransktalende Canada, med over 8 millioner innbyggere som snakker fransk til daglig.

Fransk kom til Canada med de første franske bosettingene på 1600-tallet. Byen Québec ble grunnlagt av Samuel de Champlain i 1608.`,
    },
    {
      id: 'fransk-1-11-3-text-1',
      type: 'text',
      content: `## Fakta om Québec

| Fakta | |
|-------|---|
| Hovedstad | Québec (ville de Québec) |
| Storste by | Montreal |
| Befolkning | ca. 8,5 millioner |
| Språk | fransk (offisielt), engelsk |
| Kjent for | poutine, ahornsirup, karneval, hockey |

**Montreal** er den nest største fransktalende byen i verden etter Paris! Byen er tospråklig, og mange innbyggere snakker både fransk og engelsk.`,
    },
    {
      id: 'fransk-1-11-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Fakta om Québec',
      problem: `Sant eller usant?
a) Québec er en provins i Canada.
b) Montreal er hovedstaden i Québec.
c) Canada har bare ett offisielt språk.`,
      solution: `a) **Sant** - Québec er den største provinsen i Canada.
b) **Usant** - Québec (byen) er hovedstaden. Montreal er den største byen.
c) **Usant** - Canada har to offisielle språk: engelsk og fransk.`,
    },
    {
      id: 'fransk-1-11-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-11-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om Québec.',
        subTasks: [
          { label: 'a', task: 'Hva er den største byen i Québec?', solution: 'Montreal' },
          { label: 'b', task: 'Når ble byen Québec grunnlagt?', solution: '1608' },
          { label: 'c', task: 'Hvilke to språk er offisielle i Canada?', solution: 'Engelsk og fransk' },
        ],
        solution: 'a) Montreal. b) 1608. c) Engelsk og fransk.',
        hints: ['Se fakta-tabellen'],
      },
    },
    {
      id: 'fransk-1-11-3-text-2',
      type: 'text',
      content: `## Fransk i Québec vs. Frankrike

Fransk i Québec skiller seg fra fransk i Frankrike på flere måter:

| Tema | Frankrike | Québec |
|------|-----------|--------|
| Bil | la voiture | le char |
| Kjaerest (f) | la petite amie | la blonde |
| Frokost | le petit déjeuner | le déjeuner |
| Lunsj | le déjeuner | le diner |
| Middag | le diner | le souper |

Quebecerne sier også ofte **"icitte"** i stedet for "ici" (her) og **"ben"** i stedet for "bien" (bra/vel).`,
    },
    {
      id: 'fransk-1-11-3-tip-1',
      type: 'tip',
      content: `Québec er veldig opptatt av a beskytte det franske språket. De har en egen språklov (la loi 101) som krever at alle skilt og reklame skal være på fransk.`,
    },
    {
      id: 'fransk-1-11-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Quebecois vs. fransk fra Frankrike',
      problem: `Hva betyr disse ordene i Québec?
a) le char
b) la blonde
c) le souper`,
      solution: `a) le char = **bilen** (i Frankrike: la voiture)
b) la blonde = **kjæresten** (i Frankrike: la petite amie)
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
          { label: 'a', task: 'le char (Québec) = ?', solution: 'la voiture (Frankrike)' },
          { label: 'b', task: 'le déjeuner (Québec) = ?', solution: 'le petit déjeuner (Frankrike)' },
          { label: 'c', task: 'le souper (Québec) = ?', solution: 'le diner (Frankrike)' },
        ],
        solution: 'a) la voiture, b) le petit déjeuner, c) le diner',
        hints: ['Se sammenlignings-tabellen'],
      },
    },
    {
      id: 'fransk-1-11-3-text-3',
      type: 'text',
      content: `## Kultur og tradisjoner i Québec

- **Le Carnaval de Québec**: Verdens største vinterkarneval, med snø- og isskulpturer
- **La cabane a sucre**: Sukkerkoier der man lager ahornsirup om våren
- **La poutine**: Quebecs nasjonalrett - pommes frites med ostklumper og brun sjy
- **Le hockey**: Kanadiere er lidenskapelig opptatt av ishockey
- **La Saint-Jean-Baptiste** (24. juni): Quebecs nasjonaldag`,
    },
    {
      id: 'fransk-1-11-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Quebecois kultur',
      problem: `Oversett til norsk:
a) Le Carnaval de Québec est en hiver.
b) La poutine est un plat typique du Québec.
c) Les Canadiens aiment le hockey.`,
      solution: `a) Karnevalet i Québec er om vinteren.
b) Poutine er en typisk rett fra Québec.
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
          { label: 'c', task: 'Québec er en provins i Canada.', solution: 'Le Québec est une province du Canada.' },
        ],
        solution: "a) Montreal est une grande ville. b) J'aime la poutine. c) Le Québec est une province du Canada.",
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
        task: 'Sammenlign Québec og Norge. Skriv på norsk.',
        subTasks: [
          { label: 'a', task: 'Nevn to ting Québec og Norge har til felles.', solution: 'Begge har kalde vintre og er opptatt av a bevare språket sitt.' },
          { label: 'b', task: 'Hva er den største forskjellen?', solution: 'Québec er en provins i Canada som snakker fransk, Norge er et selvstendig land som snakker norsk.' },
        ],
        solution: 'Felles: kalde vintre, språkbevissthet. Forskjell: språk, statsform.',
        hints: ['Tenk på klima, språk og kultur'],
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
    'utforske og beskrive levemåter, tradisjoner og geografi i områder der språket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-11-4-intro',
      type: 'text',
      content: `## Det fransktalende Afrika

Afrika er det kontinentet der det bor flest fransktalende mennesker. Over 140 millioner afrikanere snakker fransk, og tallet vokser raskt. Fransk er offisielt språk i mer enn 20 afrikanske land.`,
    },
    {
      id: 'fransk-1-11-4-text-1',
      type: 'text',
      content: `## Viktige fransktalende land i Afrika

| Land | Hovedstad | Kjent for |
|------|-----------|-----------|
| le Sénégal | Dakar | Teranga (gjestfrihet), musikk, thieboudienne |
| le Maroc | Rabat | Marrakech, tajine, souk |
| la Côte d'Ivoire | Yamoussoukro | Kakao, Abidjan, fotball |
| le Cameroun | Yaounde | Tospraklig (fransk/engelsk), naturmangfold |
| la RD Congo | Kinshasa | Storste fransktalende land, musikk |
| la Tunisie | Tunis | Middelhavskultur, historiske ruiner |`,
    },
    {
      id: 'fransk-1-11-4-def-1',
      type: 'definition',
      title: 'Teranga',
      content: `**Teranga** er et wolof-ord fra Sénégal som betyr **gjestfrihet**. Det er en sentral verdi i senegalesisk kultur. Sénégal kalles ofte "le pays de la teranga" (gjestfrihetens land).`,
    },
    {
      id: 'fransk-1-11-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Afrikanske land',
      problem: `Koble hovedstaden til riktig land:
a) Dakar
b) Rabat
c) Kinshasa`,
      solution: `a) Dakar - **le Sénégal**
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
          { label: 'a', task: 'le Sénégal', solution: 'Teranga (gjestfrihet)' },
          { label: 'b', task: 'le Maroc', solution: 'Tajine, souk, Marrakech' },
          { label: 'c', task: 'la Cote d\'Ivoire', solution: 'Kakao, fotball' },
          { label: 'd', task: 'la RD Congo', solution: 'Musikk, største fransktalende land' },
        ],
        solution: "a) Teranga. b) Tajine, souk. c) Kakao, fotball. d) Musikk.",
        hints: ['Se tabellen over fransktalende land i Afrika'],
      },
    },
    {
      id: 'fransk-1-11-4-text-2',
      type: 'text',
      content: `## Sénégal og Marokko

**Sénégal** ligger i Vest-Afrika ved Atlanterhavskysten. Senegalesisk mat er kjent for retten **thieboudienne** (ris med fisk og grønnsaker).

**Marokko** ligger i Nord-Afrika. Her snakker folk både **arabisk** og **fransk**. Marokko er kjent for sine vakre byer som Marrakech med fargerike markeder kalt **souks** og for retten **tajine**.

| Fransk | Norsk |
|--------|-------|
| l'Afrique (f) | Afrika |
| le marché | markedet |
| la musique | musikken |
| la cuisine | maten/kjøkkenet |
| la tradition | tradisjonen |
| la diversité | mangfoldet |
| l'hospitalité (f) | gjestfriheten |`,
    },
    {
      id: 'fransk-1-11-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Kultur i fransktalende Afrika',
      problem: `Oversett til norsk:
a) Le Sénégal est en Afrique de l'Ouest.
b) Le Maroc est connu pour ses souks.
c) La cuisine africaine est délicieuse.`,
      solution: `a) Sénégal ligger i Vest-Afrika.
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
          { label: 'a', task: 'Sénégal er i Afrika.', solution: "Le Sénégal est en Afrique." },
          { label: 'b', task: 'Marokko er kjent for tajine.', solution: 'Le Maroc est connu pour le tajine.' },
          { label: 'c', task: 'Afrikansk musikk er fantastisk.', solution: 'La musique africaine est fantastique.' },
        ],
        solution: "a) Le Sénégal est en Afrique. b) Le Maroc est connu pour le tajine. c) La musique africaine est fantastique.",
        hints: ['connu pour = kjent for', 'africain(e) = afrikansk'],
      },
    },
    {
      id: 'fransk-1-11-4-note-1',
      type: 'note',
      content: `**Flerspraklig hverdag**: I mange afrikanske land er fransk det offisielle språket, men folk snakker også lokale språk til daglig. For eksempel snakker man wolof i Sénégal, arabisk og berbersk i Marokko, og lingala i Kongo.`,
    },
    {
      id: 'fransk-1-11-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Sprakmangfold',
      problem: `Sant eller usant?
a) I Sénégal snakker alle bare fransk.
b) Marokko har både arabisk og fransk.
c) Kongo er det fransktalende landet med flest innbyggere.`,
      solution: `a) **Usant** - I Sénégal snakker de også wolof og andre lokale språk.
b) **Sant** - Marokko har både arabisk og fransk.
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
          { label: 'a', task: 'la cuisine', solution: 'maten / kjøkkenet' },
          { label: 'b', task: 'le marché', solution: 'markedet' },
          { label: 'c', task: "l'hospitalité", solution: 'gjestfriheten' },
          { label: 'd', task: 'la diversité', solution: 'mangfoldet' },
        ],
        solution: 'a) maten/kjøkkenet, b) markedet, c) gjestfriheten, d) mangfoldet',
        hints: ['diversité ligner på det engelske "diversity"'],
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
        task: 'Velg et fransktalende land i Afrika og skriv 3 setninger på norsk om det.',
        subTasks: [
          { label: 'a', task: 'Hvilket land velger du, og hvor ligger det?', solution: 'Fritt valg. F.eks.: Sénégal ligger i Vest-Afrika.' },
          { label: 'b', task: 'Hva er landet kjent for?', solution: 'F.eks.: Sénégal er kjent for gjestfrihet (teranga).' },
          { label: 'c', task: 'Hvilke språk snakkes i landet?', solution: 'F.eks.: Fransk (offisielt) og wolof.' },
        ],
        solution: 'Eksempel: Sénégal ligger i Vest-Afrika. Landet er kjent for gjestfrihet. De snakker fransk og wolof.',
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
  description: 'Oppdag franskspraklig musikk fra Frankrike, Belgia, Québec og andre land.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og presentere kunstneriske og kulturelle uttrykk fra områder der språket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-12-1-intro',
      type: 'text',
      content: `## Franskspraklig musikk

Frankrike og den fransktalende verden har en rik musikktradisjon. Fra Edith Piafs tidlose klassikere til moderne pop og rap - franskspraklig musikk har noe for enhver smak. I dette kapittelet skal du lære om kjente artister og musikksjangre, og du skal lære vokabular knyttet til musikk.`,
    },
    {
      id: 'fransk-1-12-1-text-1',
      type: 'text',
      content: `## Kjente franskspraklige artister

| Artist | Land | Kjent for |
|--------|------|-----------|
| Edith Piaf | Frankrike | "La Vie en rose", "Non, je ne regrette rien" |
| Stromae | Belgia | "Alors on danse", "Papaoutai", moderne pop/elektronisk |
| Angèle | Belgia | "Tout oublier", moderne pop |
| MC Solaar | Frankrike | Fransk rap, "Bouge de la" |
| Céline Dion | Canada (Québec) | "Pour que tu m'aimes encore", verdensstjerne |
| Zaz | Frankrike | "Je veux", moderne chanson française |

Edith Piaf (1915-1963) regnes som den største franske sangeren gjennom tidene. Hennes sang "La Vie en rose" er et av de mest kjente franske sangene i verden.`,
    },
    {
      id: 'fransk-1-12-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Artister og land',
      problem: `Koble artisten til riktig land:
a) Stromae
b) Céline Dion
c) Edith Piaf
d) Angèle`,
      solution: `a) Stromae - **la Belgique** (Belgia)
b) Céline Dion - **le Canada (le Québec)**
c) Edith Piaf - **la France** (Frankrike)
d) Angèle - **la Belgique** (Belgia)`,
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
          { label: 'c', task: 'Céline Dion', solution: 'le Canada / le Québec' },
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
| la chanson française | den franske visen (tradisjonell sjanger) |
| le rap français | fransk rap |
| la pop | popmusikk |
| la musique électronique | elektronisk musikk |
| le jazz | jazz |
| le hip-hop | hiphop |

**La chanson française** er en tradisjonell sjanger der teksten er veldig viktig. Artister som Edith Piaf, Jacques Brel og Charles Aznavour er klassiske representanter.

**Le rap français** er veldig populært i Frankrike i dag. MC Solaar var en av pionerene, og artister som Nekfeu og Orelsan er blant de mest populære i dag.`,
    },
    {
      id: 'fransk-1-12-1-note-1',
      type: 'note',
      content: `**La Fête de la Musique**: Hvert år den 21. juni feirer Frankrike musikkfesten. På denne dagen er det gratiskonserter overalt i gatene, og alle kan spille musikk utendørs. Festen ble startet i 1982 og har spredt seg til over 120 land.`,
    },
    {
      id: 'fransk-1-12-1-text-3',
      type: 'text',
      content: `## Musikkvokabular

| Fransk | Norsk |
|--------|-------|
| la chanson | sangen |
| le chanteur / la chanteuse | sangeren (m/f) |
| écouter | lytte (til) |
| les paroles (f, pl) | teksten (sangteksten) |
| la mélodie | melodien |
| le concert | konserten |
| un album | et album |
| la scène | scenen |
| le refrain | refrenget |
| le couplet | verset |`,
    },
    {
      id: 'fransk-1-12-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Musikkvokabular',
      problem: `Oversett til norsk:
a) J'écoute une chanson française.
b) Le chanteur est sur la scène.
c) Les paroles sont belles.`,
      solution: `a) Jeg lytter til en fransk sang.
b) Sangeren er på scenen.
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
          { label: 'b', task: 'écouter', solution: 'lytte (til)' },
          { label: 'c', task: 'le concert', solution: 'konserten' },
          { label: 'd', task: 'les paroles', solution: 'sangteksten' },
        ],
        solution: 'a) sangen, b) lytte (til), c) konserten, d) sangteksten',
        hints: ['concert ligner på det norske ordet "konsert"'],
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
          { label: 'a', task: 'Jeg lytter til musikk.', solution: "J'écoute de la musique." },
          { label: 'b', task: 'Sangeren er på scenen.', solution: 'Le chanteur est sur la scène.' },
          { label: 'c', task: 'Jeg liker fransk rap.', solution: "J'aime le rap français." },
        ],
        solution: "a) J'écoute de la musique. b) Le chanteur est sur la scène. c) J'aime le rap français.",
        hints: ['écouter = lytte til', 'sur = på', 'aimer = like'],
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
        task: 'Skriv om din favorittartist (valgfritt språk) på norsk. Bruk minst 3 musikkord fra kapittelet.',
        subTasks: [
          { label: 'a', task: 'Hvem er din favorittartist?', solution: 'Fritt valg.' },
          { label: 'b', task: 'Hvilken sjanger synger/spiller artisten?', solution: 'F.eks.: pop, rap, chanson française, elektronisk musikk.' },
          { label: 'c', task: 'Skriv en setning på fransk om artisten.', solution: "F.eks.: J'écoute Stromae. Il est un chanteur belge." },
        ],
        solution: "Eksempel: Min favorittartist er Stromae. Han synger pop og elektronisk musikk. J'écoute Stromae. Il est un chanteur belge.",
        hints: ['Se vokabular-tabellene', 'Bruk setningene fra eksemplene som mal'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12.2: Le cinéma français - Fransk film
// ============================================================================

export const CHAPTER_FRANSK_1_12_2: TextbookChapter = {
  id: 'fransk-1-12-2',
  courseId: 'fransk-1',
  chapterNumber: '12.2',
  title: 'Le cinéma français',
  subtitle: 'Fransk film',
  description: 'Lær om franskfilmhistorie, kjente filmer og filmvokabular.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og presentere kunstneriske og kulturelle uttrykk fra områder der språket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-12-2-intro',
      type: 'text',
      content: `## Fransk film - fra Lumière til i dag

Frankrike er kinematografiens fødeland. Det var de franske brødrene **Auguste og Louis Lumière** som viste den første offentlige filmen i Paris i 1895. Siden den gang har fransk film vært blant verdens mest innflytelsesrike. I dette kapittelet skal du lære om filmhistorie, kjente filmer og vokabular knyttet til film.`,
    },
    {
      id: 'fransk-1-12-2-def-1',
      type: 'definition',
      title: 'Le cinéma',
      content: `**Le cinéma** betyr både "kinoen" (stedet der man ser film) og "filmkunsten" generelt. Ordet kommer fra det greske "kinema" (bevegelse). Frankrike kalles ofte "le pays du cinéma" fordi filmen ble oppfunnet her.`,
    },
    {
      id: 'fransk-1-12-2-text-1',
      type: 'text',
      content: `## Filmhistorie og kjente filmer

| Film | Ar | Handling |
|------|----|---------|
| Les Intouchables | 2011 | En rik, lam mann og hans unge, energiske hjelper. Basert på en sann historie. |
| Amélie (Le Fabuleux Destin d'Amélie Poulain) | 2001 | Amélie fra Montmartre i Paris prøver a gjøre andre glade. |
| Le Petit Prince | 2015 | Animasjonsfilm basert på Antoine de Saint-Exupérys bok. |
| La Haine | 1995 | Tre unge menn i en forstad til Paris. |
| Les Choristes | 2004 | En lærer forandrer livet til vanskelige elever gjennom musikk. |

**Les Intouchables** er den mest sette franske filmen utenfor Frankrike. Filmen har blitt remade i mange land, blant annet i USA ("The Upside").`,
    },
    {
      id: 'fransk-1-12-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Filmvokabular',
      problem: `Hva betyr disse ordene?
a) le film
b) le réalisateur
c) un acteur
d) l'écran`,
      solution: `a) le film = **filmen**
b) le réalisateur = **regissoren**
c) un acteur = **en skuespiller (mann)**
d) l'écran = **skjermen / lerretet**`,
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
          { label: 'a', task: 'le cinéma', solution: 'kinoen / filmkunsten' },
          { label: 'b', task: 'une actrice', solution: 'en skuespiller (kvinne)' },
          { label: 'c', task: 'le festival', solution: 'festivalen' },
          { label: 'd', task: 'le réalisateur', solution: 'regissoren' },
        ],
        solution: 'a) kinoen/filmkunsten, b) en skuespiller (kvinne), c) festivalen, d) regissoren',
        hints: ['actrice = hunkjoennsformen av acteur'],
      },
    },
    {
      id: 'fransk-1-12-2-text-2',
      type: 'text',
      content: `## Filmfestivalen i Cannes

Hvert år i mai arrangeres den berømte **filmfestivalen i Cannes** (le Festival de Cannes) på den franske rivieraen. Det er en av verdens viktigste filmfestivaler. Hovedprisen heter **la Palme d'or** (gullpalmen).

Festivalen ble startet i 1946 og tiltrekker seg filmskapere, skuespillere og journalister fra hele verden.

## Filmvokabular

| Fransk | Norsk |
|--------|-------|
| le film | filmen |
| le cinéma | kinoen |
| le réalisateur / la réalisatrice | regissoren (m/f) |
| un acteur / une actrice | en skuespiller (m/f) |
| le festival | festivalen |
| l'écran (m) | skjermen / lerretet |
| une comédie | en komedie |
| un drame | et drama |
| un film d'animation | en animasjonsfilm |
| les sous-titres (m, pl) | undertekstene |
| la bande-annonce | traileren |`,
    },
    {
      id: 'fransk-1-12-2-note-1',
      type: 'note',
      content: `**Visste du?** Frankrike er det eneste landet i Europa der franske filmer er mer populære enn amerikanske filmer på kino. Fransk lov krever også at minst 40 % av sangene på radioen skal være på fransk.`,
    },
    {
      id: 'fransk-1-12-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sant eller usant om fransk film',
      problem: `Sant eller usant?
a) Lumière-brødrene viste den første offentlige filmen i London.
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
          { label: 'a', task: 'Filmen ble oppfunnet i Frankrike.', solution: 'Sant - av Lumière-brødrene i 1895.' },
          { label: 'b', task: 'La Palme d\'or er hovedprisen i Cannes.', solution: 'Sant.' },
          { label: 'c', task: 'Amélie handler om en jente i Lyon.', solution: 'Usant - Amélie handler om en jente i Montmartre, Paris.' },
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
a) Je vais au cinéma ce soir.
b) C'est un film français avec des sous-titres.
c) L'actrice est très connue.`,
      solution: `a) Jeg går på kino i kveld.
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
          { label: 'a', task: 'Jeg liker franske filmer.', solution: "J'aime les films français." },
          { label: 'b', task: 'Regissoren er kjent.', solution: 'Le réalisateur est connu.' },
          { label: 'c', task: 'Vi går på kino.', solution: 'Nous allons au cinéma.' },
        ],
        solution: "a) J'aime les films français. b) Le réalisateur est connu. c) Nous allons au cinéma.",
        hints: ['aimer = like', 'aller au cinéma = gå på kino'],
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
          { label: 'b', task: 'Hva slags film er det? (comédie, drame, film d\'animation)', solution: 'F.eks.: C\'est une comédie.' },
          { label: 'c', task: 'Skriv en setning på fransk om filmen.', solution: "F.eks.: J'aime le film Les Intouchables. C'est une comédie." },
        ],
        solution: "Eksempel: J'aime le film Les Intouchables. C'est une comédie. Les acteurs sont très bons.",
        hints: ['Se vokabular-tabellene', 'Bruk eksemplene som mal'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12.3: La bande dessinée - Tegneserier
// ============================================================================

export const CHAPTER_FRANSK_1_12_3: TextbookChapter = {
  id: 'fransk-1-12-3',
  courseId: 'fransk-1',
  chapterNumber: '12.3',
  title: 'La bande dessinée',
  subtitle: 'Tegneserier',
  description: 'Oppdag den franske og belgiske tegneserietradisjonen med Tintin, Asterix og mer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og presentere kunstneriske og kulturelle uttrykk fra områder der språket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-12-3-intro',
      type: 'text',
      content: `## Tegneserier - en viktig kunstform

I Frankrike og Belgia er tegneserier (**la bande dessinée**, forkortet **la BD**) en høyt respektert kunstform. BD regnes som "den niende kunsten" (le neuvième art) og er like populær blant voksne som blant barn. Hvert år selges det millioner av BD-album i fransktalende land.`,
    },
    {
      id: 'fransk-1-12-3-def-1',
      type: 'definition',
      title: 'La bande dessinée (la BD)',
      content: `**La bande dessinée** betyr bokstavelig "tegnet stripe". Forkortet: **la BD** (uttales "be-de"). Det er den franskspraklige betegnelsen for tegneserier, og sjangeren har en lang og stolt tradisjon i Frankrike og Belgia. BD-album er vanligvis i hardcover og kan være alt fra humor til seriose historier.`,
    },
    {
      id: 'fransk-1-12-3-text-1',
      type: 'text',
      content: `## Kjente tegneserier

| Tegneserie | Skapert av | Land | Handling |
|------------|-----------|------|---------|
| Tintin | Hergé (Georges Remi) | Belgia | En ung journalist reiser verden rundt med hunden Milou |
| Asterix | Goscinny og Uderzo | Frankrike | Gallere kjemper mot romerne med hjelp av en trylledrikk |
| Lucky Luke | Morris | Belgia | En cowboy i det ville vesten som skyter raskere enn sin egen skygge |
| Le Petit Nicolas | Goscinny og Sempé | Frankrike | En liten gutt og hans morsomme hverdagseventyr |

**Tintin** (1929) er en av verdens mest oversatte tegneserier og finnes på over 100 språk. **Asterix** (1959) har solgt over 380 millioner album på verdensbasis.`,
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
          { label: 'b', task: 'Tintin', solution: 'Tintin (av Hergé)' },
          { label: 'c', task: 'Lucky Luke', solution: 'Lucky Luke (av Morris)' },
          { label: 'd', task: 'Le Petit Nicolas', solution: 'Le Petit Nicolas (av Goscinny og Sempé)' },
        ],
        solution: 'a) Asterix, b) Tintin, c) Lucky Luke, d) Le Petit Nicolas',
        hints: ['Se tabellen over kjente tegneserier'],
      },
    },
    {
      id: 'fransk-1-12-3-text-2',
      type: 'text',
      content: `## BD-festivalen i Angoulême

Hvert år i januar arrangeres **Festival international de la bande dessinée** i byen Angoulême i Vest-Frankrike. Det er verdens største tegneseriefestival. Her vises nye album, det deles ut priser, og forfattere og tegnere møter publikum.

## Vokabular - Tegneserier

| Fransk | Norsk |
|--------|-------|
| la bande dessinée (la BD) | tegneserien |
| le personnage | figuren / karakteren |
| l'aventure (f) | eventyret |
| drôle | morsom |
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
      content: `**Tips!** Å lese franske tegneserier er en morsom måte a lære språk på. Bildene hjelper deg a forstå handlingen, og snakkeboblene inneholder hverdagslig språk. Prøv a finne en Asterix eller Tintin på fransk!`,
    },
    {
      id: 'fransk-1-12-3-example-2',
      type: 'example',
      title: 'Eksempel 2: BD-vokabular',
      problem: `Hva betyr disse ordene?
a) le personnage
b) dessiner
c) drôle`,
      solution: `a) le personnage = **figuren / karakteren**
b) dessiner = **tegne**
c) drôle = **morsom**`,
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
          { label: 'a', task: 'la bande dessinée', solution: 'tegneserien' },
          { label: 'b', task: "l'aventure", solution: 'eventyret' },
          { label: 'c', task: 'une bulle', solution: 'en snakkeboble' },
          { label: 'd', task: "l'auteur", solution: 'forfatteren' },
        ],
        solution: 'a) tegneserien, b) eventyret, c) en snakkeboble, d) forfatteren',
        hints: ['aventure ligner på det engelske "adventure"'],
      },
    },
    {
      id: 'fransk-1-12-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Oversettelse',
      problem: `Oversett til norsk:
a) Tintin est un personnage de BD belge.
b) Asterix est drôle.
c) J'aime lire des bandes dessinées.`,
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
          { label: 'a', task: 'Asterix er en morsom tegneserie.', solution: 'Asterix est une BD drôle.' },
          { label: 'b', task: 'Tintin er en belgisk figur.', solution: 'Tintin est un personnage belge.' },
          { label: 'c', task: 'Jeg liker a tegne.', solution: "J'aime dessiner." },
        ],
        solution: "a) Asterix est une BD drôle. b) Tintin est un personnage belge. c) J'aime dessiner.",
        hints: ['drôle = morsom', 'belge = belgisk', 'dessiner = tegne'],
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
          { label: 'c', task: 'Er tegneserien morsom, spennende eller begge deler?', solution: 'F.eks.: Asterix est drôle et plein d\'aventures.' },
        ],
        solution: "Eksempel: Asterix est une bande dessinée française. Le personnage principal est Asterix. La BD est drôle et pleine d'aventures.",
        hints: ['Se vokabular-tabellen', 'Bruk eksemplene som mal'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12.4: Les fêtes et traditions - Høytider og tradisjoner
// ============================================================================

export const CHAPTER_FRANSK_1_12_4: TextbookChapter = {
  id: 'fransk-1-12-4',
  courseId: 'fransk-1',
  chapterNumber: '12.4',
  title: 'Les fêtes et traditions',
  subtitle: 'Høytider og tradisjoner',
  description: 'Lær om franske høytider og tradisjoner gjennom året.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive levemåter og tradisjoner i områder der språket snakkes',
    'se sammenhenger med egen bakgrunn',
  ],
  content: [
    {
      id: 'fransk-1-12-4-intro',
      type: 'text',
      content: `## Franske høytider og tradisjoner

Frankrike har mange spennende høytider og tradisjoner gjennom året. Noen er nasjonale feiringer, mens andre er religiøse eller kulturelle. I dette kapittelet skal du lære om de viktigste franske høytidene og sammenligne dem med norske tradisjoner.`,
    },
    {
      id: 'fransk-1-12-4-text-1',
      type: 'text',
      content: `## De viktigste franske høytidene

| Høytid | Dato | Beskrivelse |
|--------|------|------------|
| Le 14 juillet (Nasjonaldagen) | 14. juli | Feirer den franske revolusjonen med militærparade, fyrverkeri og ball |
| La Fête de la Musique | 21. juni | Gratis konserter i hele Frankrike |
| Noël (Jul) | 25. desember | Julaften feires med stor middag, buche de Noël (julekake) |
| L'Épiphanie | 6. januar | Man spiser galette des rois (trettendagskake) |
| Mardi gras | Varierer (februar/mars) | Karneval med kostymer, krepler og festing |
| La Toussaint | 1. november | Allehelgensdag, man besøker graver |
| Le Jour de l'An | 1. januar | Nyttårsdag |`,
    },
    {
      id: 'fransk-1-12-4-def-1',
      type: 'definition',
      title: 'Le 14 juillet',
      content: `**Le 14 juillet** (den 14. juli) er Frankrikes nasjonaldag. Den markerer stormingen av Bastillen i 1789, som var starten på den franske revolusjonen. På denne dagen er det en stor militærparade på **les Champs-Élysées** i Paris, etterfulgt av et spektakulært fyrverkeri fra Eiffeltarnet.`,
    },
    {
      id: 'fransk-1-12-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Koble høytider til datoer',
      problem: `Koble høytiden til riktig dato:
a) Le 14 juillet
b) La Fête de la Musique
c) L'Épiphanie
d) Noël`,
      solution: `a) Le 14 juillet - **14. juli** (nasjonaldagen)
b) La Fête de la Musique - **21. juni**
c) L'Épiphanie - **6. januar**
d) Noël - **25. desember**`,
    },
    {
      id: 'fransk-1-12-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble høytiden til riktig dato.',
        subTasks: [
          { label: 'a', task: 'Le Jour de l\'An', solution: '1. januar' },
          { label: 'b', task: 'La Toussaint', solution: '1. november' },
          { label: 'c', task: 'Le 14 juillet', solution: '14. juli' },
          { label: 'd', task: 'La Fête de la Musique', solution: '21. juni' },
        ],
        solution: 'a) 1. januar, b) 1. november, c) 14. juli, d) 21. juni',
        hints: ['Se tabellen over franske høytider'],
      },
    },
    {
      id: 'fransk-1-12-4-text-2',
      type: 'text',
      content: `## Jul i Frankrike (Noël)

Julen i Frankrike skiller seg litt fra den norske:
- **Le reveillon de Noël** (julaften): Franskmenn spiser en stor festmiddag sent på kvelden den 24. desember
- **La buche de Noël**: En tradisjonell julekake formet som en vedkubbe
- **Le Pere Noël**: Den franske julenissen
- **Les cadeaux**: Gavelappning foregaer enten sent på julaften eller om morgenen den 25. desember
- Frankrike har ingen "lille julaften" som i Norge

## L'Épiphanie og galette des rois

Den 6. januar feires **l'Épiphanie** (trettendagen). På denne dagen spiser man **la galette des rois** (kongekaken). Inne i kaken er det gjemt en liten figur (**la feve**). Den som finner figuren, blir kronet til konge eller dronning for en dag!

## Vokabular - Høytider

| Fransk | Norsk |
|--------|-------|
| la fête | festen / høytiden |
| célébrer / feter | feire |
| la tradition | tradisjonen |
| le défilé | paraden / opptog |
| le feu d'artifice | fyrverkeriet |
| le gâteau | kaken |
| un cadeau | en gave |
| le déguisement | kostymet (utkledning) |
| joyeux Noël | god jul |
| bonne année | godt nyttår |`,
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
b) le défilé
c) célébrer`,
      solution: `a) le feu d'artifice = **fyrverkeriet**
b) le défilé = **paraden / opptoget**
c) célébrer = **feire**`,
    },
    {
      id: 'fransk-1-12-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-12-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett høytidsvokabularet til norsk.',
        subTasks: [
          { label: 'a', task: 'la fête', solution: 'festen / høytiden' },
          { label: 'b', task: 'un cadeau', solution: 'en gave' },
          { label: 'c', task: 'le gâteau', solution: 'kaken' },
          { label: 'd', task: 'joyeux Noël', solution: 'god jul' },
        ],
        solution: 'a) festen/høytiden, b) en gave, c) kaken, d) god jul',
        hints: ['cadeau ligner litt på det engelske "gift" - men på fransk!'],
      },
    },
    {
      id: 'fransk-1-12-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Sammenligning med Norge',
      problem: `Sammenlign franske og norske tradisjoner:
a) Hva feires 14. juli i Frankrike? Hva feires 17. mai i Norge?
b) Hva er la buche de Noël?
c) Hva er galette des rois?`,
      solution: `a) Begge er nasjonaldager. 14. juli feirer den franske revolusjonen, 17. mai feirer den norske grunnloven. Begge har parader og feiring.
b) La buche de Noël er en tradisjonell fransk julekake formet som en vedkubbe.
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
          { label: 'a', task: 'God jul!', solution: 'Joyeux Noël !' },
          { label: 'b', task: 'Godt nyttår!', solution: 'Bonne année !' },
          { label: 'c', task: 'Det er fyrverkeri på nasjonaldagen.', solution: "Il y a un feu d'artifice le 14 juillet." },
        ],
        solution: "a) Joyeux Noël ! b) Bonne année ! c) Il y a un feu d'artifice le 14 juillet.",
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
        task: 'Sammenlign franske og norske tradisjoner. Skriv på norsk.',
        subTasks: [
          { label: 'a', task: 'Nevn to likheter mellom franske og norske høytider.', solution: 'Begge land har en nasjonaldag med parade. Begge feirer jul med gave og god mat.' },
          { label: 'b', task: 'Nevn to forskjeller.', solution: 'Frankrike har Mardi gras og l\'Épiphanie. Norge har ikke disse. Franskmenn spiser julemat sent på kvelden.' },
          { label: 'c', task: 'Hvilken fransk tradisjon synes du høres mest spennende ut?', solution: 'Fritt svar. F.eks.: L\'Épiphanie med galette des rois høres gøy ut.' },
        ],
        solution: 'Eksempel: Likheter: nasjonaldag med parade, julefeiring. Forskjeller: Mardi gras, l\'Épiphanie. Galette des rois høres morsomt ut.',
        hints: ['Tenk på jul, nasjonaldag og andre høytider'],
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
  description: 'Lær a lese og forstå en fransk restaurantmeny.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forstå enkle autentiske tekster',
    'bruke spraklige strukturer og vokabular tilpasset situasjonen',
  ],
  content: [
    {
      id: 'fransk-1-13-1-intro',
      type: 'text',
      content: `## Lese en fransk meny

Når du besøker en restaurant i Frankrike, er det nyttig a kunne lese menyen. En fransk meny er organisert på en bestemt måte, med forrett, hovedrett og dessert. I dette kapittelet skal du lære a forstå en typisk fransk meny og bestille mat.`,
    },
    {
      id: 'fransk-1-13-1-def-1',
      type: 'definition',
      title: 'Le menu du jour',
      content: `**Le menu du jour** er dagens meny på en fransk restaurant. Det er vanligvis et fast måltidet med forrett, hovedrett og dessert til en fast pris. Det er ofte billigere enn a bestille a la carte (fra det vanlige menykortet). I Frankrike betyr **le menu** et fastsatt måltid, mens **la carte** er det store menykortet der du velger fritt.`,
    },
    {
      id: 'fransk-1-13-1-text-1',
      type: 'text',
      content: `## Eksempel på en fransk meny

---

**Restaurant Le Petit Bistrot**
*Menu du jour - 15 euros*

**Entrée** (forrett)
- Soupe a l'oignon (løksuppe)
- Salade niçoise (salat med tunfisk, egg og oliven)

**Plat principal** (hovedrett)
- Poulet roti avec des frites (stekt kylling med pommes frites)
- Steak-frites (biff med pommes frites)
- Quiche lorraine (pai med skinke og øst)

**Dessert**
- Crème brulee
- Tarte aux pommes (eplekake)
- Mousse au chocolat (sjokolademousse)

*Boissons non comprises* (drikke ikke inkludert)

---

Legg merke til at menyen er delt inn i tre deler: **l'entrée** (forretten), **le plat principal** (hovedretten) og **le dessert** (desserten).`,
    },
    {
      id: 'fransk-1-13-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå menyen',
      problem: `Bruk menyen over til a svare:
a) Hva koster "menu du jour"?
b) Hvilke forretter kan du velge?
c) Er drikke inkludert i prisen?`,
      solution: `a) Menu du jour koster **15 euro**.
b) Forrettene er **soupe a l'oignon** (løksuppe) og **salade niçoise**.
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
        task: 'Bruk menyen til a svare på spørsmålene.',
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
| l'entrée (f) | forretten |
| le plat principal | hovedretten |
| le dessert | desserten |
| le menu du jour | dagens meny |
| la carte | menykortet (a la carte) |
| à emporter | ta med (take away) |
| sur place | spise her (på stedet) |
| les boissons (f, pl) | drikkene |
| l'addition (f) | regningen |
| le serveur / la serveuse | kelneren (m/f) |
| commander | bestille |
| le prix | prisen |`,
    },
    {
      id: 'fransk-1-13-1-tip-1',
      type: 'tip',
      content: `**På restaurant i Frankrike**: Når du vil ha regningen, sier du "L'addition, s'il vous plaît!" (Regningen, vær så snill!). Tips er vanligvis inkludert i prisen i Frankrike (service compris), men det er vanlig a runde opp eller legge igjen noen euro ekstra.`,
    },
    {
      id: 'fransk-1-13-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Menyvokabular',
      problem: `Oversett til norsk:
a) Je voudrais le menu du jour, s'il vous plaît.
b) C'est a emporter ou sur place?
c) L'addition, s'il vous plaît.`,
      solution: `a) Jeg vil gjerne ha dagens meny, vær så snill.
b) Er det for a ta med eller spise her?
c) Regningen, vær så snill.`,
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
          { label: 'a', task: "l'entrée", solution: 'forretten' },
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
b) Kan jeg få regningen?
c) Jeg tar eplekake som dessert.`,
      solution: `a) Je voudrais le poulet avec des frites, s'il vous plaît.
b) L'addition, s'il vous plaît. / Est-ce que je peux avoir l'addition ?
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
          { label: 'b', task: 'For a ta med, vær så snill.', solution: 'À emporter, s\'il vous plait.' },
          { label: 'c', task: 'Hva er dagens suppe?', solution: 'Quelle est la soupe du jour ?' },
        ],
        solution: "a) Je voudrais le menu du jour. b) À emporter, s'il vous plaît. c) Quelle est la soupe du jour ?",
        hints: ['je voudrais = jeg vil gjerne ha', 's\'il vous plait = vær så snill'],
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
        task: 'Lag din egen meny for en restaurant. Skriv på fransk.',
        subTasks: [
          { label: 'a', task: 'Skriv navnet på restauranten din.', solution: 'Fritt valg. F.eks.: Restaurant Chez Moi.' },
          { label: 'b', task: 'Skriv en forrett, en hovedrett og en dessert på fransk.', solution: 'F.eks.: Entrée: Soupe de tomates. Plat principal: Poulet avec du riz. Dessert: Mousse au chocolat.' },
          { label: 'c', task: 'Hva koster menyen?', solution: 'F.eks.: Le menu du jour: 12 euros.' },
        ],
        solution: 'Eksempel: Restaurant Chez Moi. Menu du jour: 12 euros. Entrée: Soupe de tomates. Plat: Poulet avec du riz. Dessert: Mousse au chocolat.',
        hints: ['Se eksempelet på menyen', 'Bruk matvokabular du allerede kan'],
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
  description: 'Lær a lese og forstå franske rutetabeller for tog, metro og buss.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forstå enkle autentiske tekster',
    'bruke spraklige strukturer og vokabular tilpasset situasjonen',
  ],
  content: [
    {
      id: 'fransk-1-13-2-intro',
      type: 'text',
      content: `## Lese rutetabeller

Når du reiser i Frankrike, trenger du a forstå rutetabeller for tog, metro og buss. Frankrike har et godt utbygd togsystem med **SNCF** (Société Nationale des Chemins de fer Français) og **TGV** (Train a Grande Vitesse - høyhastighetstog). I dette kapittelet lærer du a lese og forstå franske rutetabeller.`,
    },
    {
      id: 'fransk-1-13-2-def-1',
      type: 'definition',
      title: 'SNCF og TGV',
      content: `**SNCF** (Société Nationale des Chemins de fer Français) er det franske statlige jernbaneselskapet. **TGV** (Train a Grande Vitesse) er det franske høyhastighetstog som kan kjøre opptil 320 km/t. Med TGV tar det bare ca. 2 timer fra Paris til Lyon (ca. 470 km).`,
    },
    {
      id: 'fransk-1-13-2-text-1',
      type: 'text',
      content: `## Eksempel på en rutetabell

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
(Gar hver dag unntatt søndag)

---

Legg merke til kolonnene: **le train** (toget), **le depart** (avgang), **l'arrivee** (ankomst), **la voie** (sporet/perrongen) og **le type** (togtype).`,
    },
    {
      id: 'fransk-1-13-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese rutetabellen',
      problem: `Bruk rutetabellen over til a svare:
a) Når går det første toget?
b) Hvor lang tid tar TGV fra Paris til Lyon?
c) Hvilket spor går TGV 6605 fra?`,
      solution: `a) Det første toget går **klokken 07:12**.
b) TGV tar ca. **2 timer** (f.eks. 07:12 til 09:14).
c) TGV 6605 går fra **spor 7** (voie 7).`,
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
          { label: 'a', task: 'Når ankommer TGV 6611 til Lyon?', solution: 'Klokken 14:14.' },
          { label: 'b', task: 'Hvor lang tid tar TER 4821?', solution: 'Ca. 4 timer og 25 minutter (10:30-14:55).' },
          { label: 'c', task: 'Gar togene på sondager?', solution: 'Nei, "sauf le dimanche" betyr unntatt søndag.' },
        ],
        solution: 'a) 14:14. b) Ca. 4 timer 25 min. c) Nei, ikke på sondager.',
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
| en semaine | på hverdager |
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
      content: `**I det franske metrosystemet** bruker man 24-timersklokken, så 15:30 betyr halv fire på ettermiddagen. Paris har et enormt metrosystem med 16 linjer og over 300 stasjoner. Hver linje har et nummer og en farge, og man navigerer ved a følge retningen til endestasjonene.`,
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
b) Når går toget? (Toget går klokken...?)
c) Man må stemple billetten.`,
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
a) Når går toget?
b) Jeg vil gjerne ha en enveisbillett.
c) Toget ankommer klokken 14.`,
      solution: `a) Le train part a quelle heure ? / À quelle heure part le train ?
b) Je voudrais un billet aller simple, s'il vous plaît.
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
          { label: 'a', task: 'Toget går klokken 9.', solution: 'Le train part a neuf heures.' },
          { label: 'b', task: 'Jeg vil gjerne ha en tur-returbillett.', solution: "Je voudrais un billet aller-retour, s'il vous plaît." },
          { label: 'c', task: 'Hvilket spor går toget fra?', solution: 'Le train part de quelle voie ?' },
        ],
        solution: "a) Le train part a neuf heures. b) Je voudrais un billet aller-retour. c) Le train part de quelle voie ?",
        hints: ['partir = gå/reise', 'voie = spor'],
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
        task: 'Du er på Paris Gare de Lyon og skal til Lyon. Bruk rutetabellen til a planlegge reisen din.',
        subTasks: [
          { label: 'a', task: 'Hvilket tog velger du, og hvorfor?', solution: 'Fritt valg. F.eks.: TGV 6605 fordi det er raskt og går på formiddagen.' },
          { label: 'b', task: 'Skriv på fransk: "Jeg vil gjerne ha en billett til Lyon."', solution: "Je voudrais un billet pour Lyon, s'il vous plaît." },
          { label: 'c', task: 'Når ankommer du?', solution: 'Avhenger av valgt tog. F.eks.: J\'arrive a onze heures quarante-quatre (11:44).' },
        ],
        solution: "Eksempel: Jeg velger TGV 6605. Je voudrais un billet pour Lyon. J'arrive a 11h44.",
        hints: ['Se rutetabellen', 'pour = til'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 13.3: Petites annonces - Småannonser
// ============================================================================

export const CHAPTER_FRANSK_1_13_3: TextbookChapter = {
  id: 'fransk-1-13-3',
  courseId: 'fransk-1',
  chapterNumber: '13.3',
  title: 'Petites annonces',
  subtitle: 'Småannonser',
  description: 'Lær a lese og forstå franske småannonser for bolig og jobb.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forstå enkle autentiske tekster',
    'bruke spraklige strukturer og vokabular tilpasset situasjonen',
  ],
  content: [
    {
      id: 'fransk-1-13-3-intro',
      type: 'text',
      content: `## Småannonser - petites annonces

Småannonser er en nyttig type tekst a kunne lese. I Frankrike finner man annonser for boliger, jobber og brukte gjenstander i aviser, på nettsider og på oppslagstavler. Annonsene bruker ofte forkortelser og spesielle uttrykk. I dette kapittelet lærer du a forstå de vanligste.`,
    },
    {
      id: 'fransk-1-13-3-text-1',
      type: 'text',
      content: `## Boligannonser

Her er eksempler på franske boligannonser:

---

**Annonce 1:**
A louer - T2 meuble, centre-ville, 3e etage, 45 m2. Cuisine equipee, balcon. Charges comprises. Loyer: 650 euros/mois. Disponible 1er mars. Tel: 06 12 34 56 78.

**Annonce 2:**
A vendre - T4, 85 m2, quartier calme, proche école. 2 chambres, salon, cuisine. Cave et parking. Prix: 220 000 euros.

---

## Forkortelser i boligannonser

| Forkortelse | Betydning | Norsk |
|-------------|-----------|-------|
| T2, T3, T4... | Antall rom (Type 2, 3, 4...) | 2-roms, 3-roms, 4-roms |
| meuble | moelblert | moelblert |
| charges comprises (CC) | utgifter inkludert | utgifter inkludert |
| à louer | til leie | til leie |
| à vendre | til salgs | til salgs |
| m2 | kvadratmeter | kvadratmeter |
| etage | etasje | etasje |`,
    },
    {
      id: 'fransk-1-13-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå en boligannonse',
      problem: `Les annonce 1 og svar:
a) Er leiligheten til leie eller til salgs?
b) Hvor stor er leiligheten?
c) Hva koster den per måned?`,
      solution: `a) Leiligheten er **til leie** ("a louer").
b) Leiligheten er **45 m2** (kvadratmeter).
c) Den koster **650 euro per måned** (650 euros/mois).`,
    },
    {
      id: 'fransk-1-13-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-13-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les annonsene og svar på spørsmålene.',
        subTasks: [
          { label: 'a', task: 'Hva betyr "T2"?', solution: 'En 2-roms leilighet (Type 2).' },
          { label: 'b', task: 'Er annonce 2 til leie eller til salgs?', solution: 'Til salgs ("a vendre").' },
          { label: 'c', task: 'Har annonce 1 balkong?', solution: 'Ja ("balcon").' },
          { label: 'd', task: 'Hva betyr "charges comprises"?', solution: 'Utgifter inkludert (strøm, vann osv.).' },
        ],
        solution: 'a) 2-roms. b) Til salgs. c) Ja. d) Utgifter inkludert.',
        hints: ['Se forkortelsestabellen'],
      },
    },
    {
      id: 'fransk-1-13-3-text-2',
      type: 'text',
      content: `## Jobbannonser

Her er eksempler på franske jobbannonser:

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
      content: `**Visste du?** I Frankrike er en **CDI** (fast stilling) veldig ettertraktet. Mange unge franskmenn jobber på kortere kontrakter (**CDD**) i lang tid for de får en fast stilling. SMIC er den franske minstelønnen og ligger på ca. 1 750 euro brutto per måned (2024).`,
    },
    {
      id: 'fransk-1-13-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Forstå en jobbannonse',
      problem: `Les annonce 3 og svar:
a) Hva slags jobb er det?
b) Er det heltid eller deltid?
c) Hva betyr "CDI"?`,
      solution: `a) Det er en jobb som **servitor** (serveur/serveuse) på en restaurant.
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
| chercher | søke / lete etter |
| louer | leie |
| le loyer | leien (husleien) |
| le salaire | loennen |
| disponible | tilgjengelig |
| l'experience (f) | erfaringen |
| envoyer | sende |
| immediatement | umiddelbart |
| souhaite(e) | oensket |
| proche (de) | nær / i nærheten (av) |
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
      solution: `a) Jeg søkerenleilighet til leie.
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
          { label: 'a', task: 'Jeg søkerenjobb.', solution: 'Je cherche un travail / un emploi.' },
          { label: 'b', task: 'Leiligheten er rolig.', solution: "L'appartement est calme." },
          { label: 'c', task: 'Send CV-en din.', solution: 'Envoyez votre CV.' },
        ],
        solution: "a) Je cherche un travail. b) L'appartement est calme. c) Envoyez votre CV.",
        hints: ['chercher = søke', 'calme = rolig', 'envoyer = sende'],
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
        task: 'Skriv din egen annonse på fransk (bolig eller jobb).',
        subTasks: [
          { label: 'a', task: 'Er det en boligannonse eller jobbannonse?', solution: 'Fritt valg.' },
          { label: 'b', task: 'Skriv annonsen på fransk med minst 3 opplysninger.', solution: 'F.eks.: A louer - T3 meuble, centre-ville. 55 m2. Loyer: 700 euros/mois. Disponible 1er septembre.' },
          { label: 'c', task: 'Bruk minst 2 forkortelser fra kapittelet.', solution: 'F.eks.: T3, CC, CDI, mi-temps, m2.' },
        ],
        solution: 'Eksempel: A louer - T3, 55 m2, CC, centre-ville. Loyer: 700 euros/mois.',
        hints: ['Se eksemplene på annonser', 'Bruk forkortelsestabellene'],
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
  description: 'Les og forstå enkle franske dikt og sanger.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forstå enkle autentiske tekster',
    'utforske og presentere kunstneriske og kulturelle uttrykk fra områder der språket snakkes',
  ],
  content: [
    {
      id: 'fransk-1-13-4-intro',
      type: 'text',
      content: `## Enkle dikt og sanger

Dikt og sanger er en fin måte a lære språk på. De er korte, har ofte rim og rytme, og de hjelper deg a huske nye ord og uttrykk. I dette kapittelet skal du lese et kjent fransk dikt og noen kjente barnesanger.`,
    },
    {
      id: 'fransk-1-13-4-text-1',
      type: 'text',
      content: `## Jacques Prévert: "Déjeuner du matin"

Jacques Prévert (1900-1977) er en av Frankrikes mest elsker diktere. Hans dikt handler ofte om hverdagslige ting og er skrevet i et enkelt språk. Her er et forenklet utdrag av hans berømte dikt:

---

*Dejeuner du matin*

Il a mis le café
dans la tasse.
Il a mis le lait
dans la tasse de café.
Il a mis le sucre
dans le café au lait.
Il a bu le café au lait.
Et il est parti
sans me parler.
Sans me regarder.

---

**Oversettelse:**
Han la kaffen / i koppen. / Han la melken / i kaffekoppen. / Han la sukkeret / i kaffe-med-melken. / Han drakk kaffe-med-melken. / Og han dro / uten a snakke til meg. / Uten a se på meg.`,
    },
    {
      id: 'fransk-1-13-4-def-1',
      type: 'definition',
      title: 'Le passé composé',
      content: `I diktet "Déjeuner du matin" brukes verbtiden **le passé composé** (sammensatt fortid). Den dannes med **avoir** eller **être** + partisipp: "il a mis" = han la, "il a bu" = han drakk, "il est parti" = han dro. Denne verbtiden lærer du mer om senere, men du kan allerede begynne a gjenkjenne den i tekster.`,
    },
    {
      id: 'fransk-1-13-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå diktet',
      problem: `Svar på spørsmål om diktet "Déjeuner du matin":
a) Hva legger personen i koppen forst?
b) Hva gjør personen til slutt?
c) Hva er stemningen i diktet?`,
      solution: `a) Personen legger **kaffen** i koppen forst.
b) Personen **drar** uten a snakke eller se på fortelleren.
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
        task: 'Svar på spørsmål om diktet.',
        subTasks: [
          { label: 'a', task: 'Hva betyr "la tasse"?', solution: 'Koppen.' },
          { label: 'b', task: 'Hva betyr "le café au lait"?', solution: 'Kaffe med melk.' },
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

**Oversettelse:** På broen i Avignon danser man, danser man. På broen i Avignon danser man rundt i ring.`,
    },
    {
      id: 'fransk-1-13-4-note-1',
      type: 'note',
      content: `**Visste du?** "Frere Jacques" er oversatt til over 100 språk og synges over hele verden. På norsk heter den "Bror Jakob". Sangen er en kanon (rundsang) - man kan synge den i flere stemmer som starter til forskjellige tidspunkter.`,
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
| le poète / la poètesse | dikteren (m/f) |
| chanter | synge |
| une chanson enfantine | en barnesang |`,
    },
    {
      id: 'fransk-1-13-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Identifisere rim',
      problem: `Finn rimene i diktet "Déjeuner du matin":
a) Hvilke ord rimer med "tasse"?
b) Rimer "parler" og "regarder"?`,
      solution: `a) I diktet gjentas "tasse" (kopp) - det rimer med seg selv og skaper en repeterende struktur.
b) **Ja**, "parler" og "regarder" rimer. Begge slutter på "-er"-lyden. Dette er et vanlig rim i fransk poesi.`,
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
        hints: ['rime ligner på det norske "rim"', 'sentiment ligner på det engelske "sentiment"'],
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
b) På broen i Avignon
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
        task: 'Jobb med diktet "Déjeuner du matin" og barnesangene.',
        subTasks: [
          { label: 'a', task: 'Hva handler diktet "Déjeuner du matin" om? Skriv 2-3 setninger på norsk.', solution: 'Diktet handler om en person som drikker kaffe og drar uten a si noe. Fortelleren er trist fordi personen forlater uten et ord.' },
          { label: 'b', task: 'Skriv de to første linjene av "Frere Jacques" på fransk.', solution: 'Frere Jacques, Frere Jacques, dormez-vous ? Dormez-vous ?' },
          { label: 'c', task: 'Kjenner du noen norske barnesanger som ligner på de franske? Hvilke?', solution: 'Fritt svar. F.eks.: "Bror Jakob" er den norske versjonen av "Frere Jacques".' },
        ],
        solution: 'Fritt svar. Diktet handler om en som forlater uten a si noe. "Bror Jakob" er den norske versjonen av "Frere Jacques".',
        hints: ['Les diktet og oversettelsen noeye', 'Tenk på norske barnesanger du kjenner'],
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
