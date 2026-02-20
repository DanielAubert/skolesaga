/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivå 3 - Kapittel 14-16 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 14: Littérature contemporaine et francophone (14.1-14.4)
 * - Kapittel 15: Traduction et interprétation (15.1-15.4)
 * - Kapittel 16: Révision avancée et examen final (16.1-16.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 14: Littérature contemporaine et francophone
// ============================================================================

// --- 14.1: La littérature francophone africaine ---
export const CHAPTER_FRANSK_3_14_1: TextbookChapter = {
  id: 'fransk-3-14-1',
  courseId: 'fransk-3',
  chapterNumber: '14.1',
  title: 'La littérature francophone africaine',
  subtitle: 'Afrikansk franskspråklig litteratur',
  description: 'Utforsk franskspråklig afrikansk litteratur fra négritude til samtidsforfattere.',
  estimatedMinutes: 55,
  competenceGoals: ['lese, analysere og tolke avanserte franske tekster i ulike sjangre'],
  content: [
    {
      id: 'fransk-3-14-1-intro',
      type: 'text',
      content: `## La littérature francophone africaine

Den franskspråklige afrikanske litteraturen utgjør en av de rikeste og mest dynamiske grenene av verdenslitteraturen. Fra **la négritude**-bevegelsen på 1930-tallet til dagens postkoloniale romaner, har afrikanske forfattere brukt det franske språket som et redskap for frigjøring, identitetssøken og samfunnskritikk.

Denne litteraturen springer ut fra et komplekst historisk bakteppe: kolonialisme, uavhengighetskamper, diktaturer og globaliseringens utfordringer. Forfatterne skriver på fransk, men forankrer tekstene sine i afrikanske muntlige tradisjoner, myter og språklige strukturer.

| Fransk | Norsk |
|--------|-------|
| la littérature francophone | den franskspråklige litteraturen |
| la négritude | négritude (litterær bevegelse) |
| le colonialisme | kolonialismen |
| l'indépendance (f) | uavhengigheten |
| le postcolonialisme | postkolonialismen |
| la tradition orale | den muntlige tradisjonen |
| le métissage culturel | den kulturelle blandingen |
| l'identité (f) | identiteten |`
    },
    {
      id: 'fransk-3-14-1-def-1',
      type: 'definition',
      title: 'La négritude',
      content: `**La négritude** er en litterær og intellektuell bevegelse grunnlagt på 1930-tallet av **Léopold Sédar Senghor** (Senegal), **Aimé Césaire** (Martinique) og **Léon-Gontran Damas** (Guyana). Bevegelsen kjempet for en positiv verdsetting av afrikansk kultur og identitet som motvekt til kolonialismens nedvurdering. Senghor definerte den som « *l'ensemble des valeurs culturelles du monde noir* » (helheten av den svarte verdens kulturelle verdier).`
    },
    {
      id: 'fransk-3-14-1-text-2',
      type: 'text',
      content: `## Léopold Sédar Senghor (1906–2001)

Senghor var poet, filosof og Senegals første president. Hans diktsamlinger – *Chants d'ombre* (1945), *Hosties noires* (1948) og *Éthiopiques* (1956) – feirer afrikansk skjønnhet, rytme og åndelighet. Han var den første afrikaner som ble valgt inn i **l'Académie française** (1983).

### Utdrag fra « Femme noire » (1945)

> *Femme nue, femme noire*
> *Vêtue de ta couleur qui est vie, de ta forme qui est beauté !*
> *J'ai grandi à ton ombre ; la douceur de tes mains bandait mes yeux.*

I dette diktet bruker Senghor den afrikanske kvinnen som et symbol for hele det afrikanske kontinentet. Legg merke til den lyriske rytmen og de sanselige bildene som knytter kropp, natur og identitet sammen.

| Fransk | Norsk |
|--------|-------|
| le poème | diktet |
| le recueil de poèmes | diktsamlingen |
| la métaphore | metaforen |
| le symbole | symbolet |
| le rythme | rytmen |
| l'image poétique (f) | det poetiske bildet |`
    },
    {
      id: 'fransk-3-14-1-def-2',
      type: 'definition',
      title: 'Le postcolonialisme littéraire',
      content: `**Le postcolonialisme littéraire** (litterær postkolonialisme) er en kritisk tilnærming til litteratur som undersøker kulturelle, sosiale og politiske konsekvenser av kolonialismen. I franskspråklig afrikansk kontekst handler det om å dekonstruere koloniale forestillinger, utforske hybride identiteter og gi stemme til de som ble marginalisert under kolonitiden. Sentrale teoretikere inkluderer **Frantz Fanon** (*Les Damnés de la terre*, 1961) og **Edward Said** (*L'Orientalisme*, 1978).`
    },
    {
      id: 'fransk-3-14-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Analyse av Kouroumas språkbruk',
      problem: `Ahmadou Kourouma (Elfenbenskysten, 1927–2003) er kjent for å ha revolusjonert franskspråklig afrikansk prosa med romanen *Les Soleils des indépendances* (1968). Les dette utdraget og analyser hvordan Kourouma «afrikaniserer» det franske språket:

> « *Il y avait une semaine qu'avait fini dans la capitale Koné Ibrahima, de race malinké, ou disons-le en malinké : il n'avait pas soutenu un petit rhume...* »

Hvilke språklige grep bruker Kourouma for å skape en afrikansk stemme i den franske teksten?`,
      solution: `Kourouma bruker flere grep for å afrikanisere det franske språket:

1. **Syntaktisk omveltning**: Han bryter med standard fransk setningsoppbygging og følger malinké-språkets logikk (« *avait fini* » i stedet for « *était mort* » – «var ferdig» i stedet for «var død»).

2. **Eufemismer fra muntlig tradisjon**: Uttrykket « *il n'avait pas soutenu un petit rhume* » (han holdt ikke ut en liten forkjølelse) er en malinké-eufemisme for døden, oversatt direkte til fransk.

3. **Kodeblanding**: Forfatteren veksler mellom fransk og malinké og inviterer leseren inn i en tospråklig virkelighet: « *disons-le en malinké* » (la oss si det på malinké).

4. **Muntlig fortellerstil**: Teksten etterligner en griot (tradisjonell forteller) som henvender seg direkte til tilhørerne.

Kourouma skapte et nytt litterært språk – et «malinkisert fransk» – som ble banebrytende for hele den franskspråklige afrikanske litteraturen.`
    },
    {
      id: 'fransk-3-14-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var det sentrale målet for la négritude-bevegelsen?',
        options: [
          { id: 'a', text: 'Å innføre fransk som offisielt språk i alle afrikanske land', isCorrect: false },
          { id: 'b', text: 'Å verdsette afrikansk kultur og identitet som motvekt til kolonialismens nedvurdering', isCorrect: true },
          { id: 'c', text: 'Å oversette afrikanske tekster til fransk for et europeisk publikum', isCorrect: false },
          { id: 'd', text: 'Å fremme den franske revolusjonens idealer i Afrika', isCorrect: false },
        ],
        solution: 'La négritude-bevegelsen, grunnlagt av Senghor, Césaire og Damas, hadde som mål å gjenopprette verdigheten til afrikansk kultur og identitet (« l\'ensemble des valeurs culturelles du monde noir ») mot kolonialismens kulturelle undertrykkelse.',
      }
    },
    {
      id: 'fransk-3-14-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva kjennetegner Ahmadou Kouroumas litterære stil i « Les Soleils des indépendances »?',
        options: [
          { id: 'a', text: 'Han skriver i en klassisk, akademisk fransk stil inspirert av Proust', isCorrect: false },
          { id: 'b', text: 'Han afrikaniserer det franske språket ved å integrere malinké-syntaks og muntlige tradisjoner', isCorrect: true },
          { id: 'c', text: 'Han skriver utelukkende på malinké og oversetter deretter til fransk', isCorrect: false },
          { id: 'd', text: 'Han unngår alle referanser til afrikansk kultur for å nå et internasjonalt publikum', isCorrect: false },
        ],
        solution: 'Kourouma revolusjonerte franskspråklig prosa ved å «malinkisere» det franske språket: han integrerte malinké-syntaks, eufemismer fra muntlig tradisjon og en fortellerstil inspirert av grioten (den tradisjonelle fortelleren).',
      }
    },
    {
      id: 'fransk-3-14-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Analyser følgende sitat av Senghor og forklar sammenhengen mellom négritude og identitet. Skriv svaret på fransk (minst 80 ord):

« *Je suis un métis culturel... Je pense en nègre, mais je m'exprime en français.* »
(Jeg er en kulturell mestis... Jeg tenker som svart, men jeg uttrykker meg på fransk.)

Diskuter: Hvordan reflekterer dette sitatet spenningen mellom afrikansk identitet og det franske språket i franskspråklig afrikansk litteratur?`,
        solution: `Eksempelsvar: Ce propos de Senghor illustre le paradoxe fondamental de la littérature francophone africaine : l'écrivain africain utilise la langue du colonisateur pour exprimer une identité que cette même langue a tenté d'effacer. Le terme « métis culturel » suggère une double appartenance – ni entièrement africain selon la tradition, ni entièrement français. Cette tension créatrice a produit une littérature riche où le français est transformé, enrichi par les structures de pensée africaines. Plutôt qu'une aliénation, Senghor présente ce métissage comme une force : penser en nègre signifie puiser dans les valeurs de la négritude, tandis que s'exprimer en français permet de toucher un public universel.`,
      }
    },
    {
      id: 'fransk-3-14-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Frantz Fanon beskrev i « Les Damnés de la terre » (1961) hvordan kolonialismen påvirket den kolonisertes psyke. Hvilket av disse begrepene brukes for å beskrive den kolonisertes internalisering av kolonimaktens verdier?',
        options: [
          { id: 'a', text: 'Le métissage culturel (den kulturelle blandingen)', isCorrect: false },
          { id: 'b', text: 'L\'aliénation coloniale (den koloniale fremmedgjøringen)', isCorrect: true },
          { id: 'c', text: 'La créolisation (kreoliseringen)', isCorrect: false },
          { id: 'd', text: 'Le réalisme magique (den magiske realismen)', isCorrect: false },
        ],
        solution: 'Fanon brukte begrepet « l\'aliénation coloniale » for å beskrive prosessen der den koloniserte internaliserer kolonimaktens verdisystem og begynner å se seg selv gjennom kolonisatorens blikk. Dette fører til en psykologisk splittethet som Fanon analyserer inngående i både « Peau noire, masques blancs » (1952) og « Les Damnés de la terre » (1961).',
      }
    },
    {
      id: 'fransk-3-14-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Sammenlign négritude-bevegelsen med den postkoloniale litteraturen som fulgte etter. Skriv en sammenhengende tekst på fransk (minst 120 ord) der du diskuterer:

1. Hva var négritude-bevegelsens styrker og svakheter?
2. Hvordan kritiserte senere forfattere som Kourouma og Yambo Ouologuem négritude?
3. Hva kjennetegner den postkoloniale tilnærmingen sammenlignet med négritude?

Bruk relevante franske litterære begreper i analysen din.`,
        solution: `Eksempelsvar: Le mouvement de la négritude, fondé dans les années 1930, a constitué une étape cruciale dans l'affirmation de l'identité africaine. Sa force résidait dans la revalorisation des cultures noires face au mépris colonial. Cependant, des critiques comme Wole Soyinka ont reproché à la négritude son essentialisme : « Le tigre ne proclame pas sa tigritude, il bondit », suggérant que l'identité se démontre par l'action plutôt que par la proclamation.

Les écrivains postcoloniaux comme Kourouma et Ouologuem ont adopté une approche plus complexe. Dans « Le Devoir de violence » (1968), Ouologuem démythifie l'Afrique précoloniale, montrant que la violence et l'oppression existaient avant la colonisation. Kourouma, quant à lui, subvertit la langue française elle-même pour créer un espace littéraire véritablement africain.

La littérature postcoloniale se distingue de la négritude par son refus de l'idéalisation et sa volonté de représenter la complexité des sociétés africaines contemporaines – corruption, conflits ethniques, mondialisation – sans nostalgie simplificatrice.`,
      }
    },
    {
      id: 'fransk-3-14-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket den franskspråklige afrikanske litteraturen gjennom dens to store epoker:

- **La négritude** (1930–1960-tallet): Grunnlagt av Senghor, Césaire og Damas for å gjenopprette verdien av afrikansk kultur. Senghors poesi feirer afrikansk skjønnhet og åndelighet.

- **Den postkoloniale litteraturen** (1960-tallet–i dag): Kourouma revolusjonerte prosaen ved å afrikanisere det franske språket. Fanon analyserte kolonialismens psykologiske konsekvenser. Senere forfattere utforsker hybride identiteter og samtidige utfordringer.

**Nøkkelbegreper å huske:**
- La négritude som kulturell og politisk bevegelse
- Kouroumas «malinkisering» av det franske språket
- Fanons analyse av *l'aliénation coloniale*
- Spenningen mellom muntlig tradisjon og skriftlig litteratur`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la négritude', definition: 'Litterær bevegelse grunnlagt av Senghor, Césaire og Damas for verdsetting av afrikansk kultur og identitet' },
    { term: 'le postcolonialisme', definition: 'Kritisk tilnærming som undersøker konsekvensene av kolonialismen i kultur, samfunn og litteratur' },
    { term: 'la tradition orale', definition: 'Den muntlige fortellertradisjonen som er sentral i afrikansk kultur, formidlet av grioter' },
    { term: 'le griot', definition: 'Tradisjonell vestafrikansk forteller, musiker og historiker som bærer videre den muntlige tradisjonen' },
    { term: 'l\'aliénation coloniale (f)', definition: 'Den kolonisertes internalisering av kolonimaktens verdisystem og påfølgende identitetskrise' },
    { term: 'le métissage culturel', definition: 'Kulturell blanding der elementer fra ulike tradisjoner smelter sammen til noe nytt' },
    { term: 'la francophonie', definition: 'Det franskspråklige fellesskapet av land og kulturer som bruker fransk som offisielt eller utbredt språk' },
    { term: 'l\'écriture engagée (f)', definition: 'Engasjert litteratur som tar stilling til sosiale, politiske eller moralske spørsmål' },
  ],
};

// --- 14.2: La littérature des Caraïbes et du Maghreb ---
export const CHAPTER_FRANSK_3_14_2: TextbookChapter = {
  id: 'fransk-3-14-2',
  courseId: 'fransk-3',
  chapterNumber: '14.2',
  title: 'La littérature des Caraïbes et du Maghreb',
  subtitle: 'Litteratur fra Karibia og Maghreb',
  description: 'Oppdag franskspråklig litteratur fra Karibia og Nord-Afrika: Césaire, Djebar, Ben Jelloun og créolité.',
  estimatedMinutes: 55,
  competenceGoals: ['lese, analysere og tolke avanserte franske tekster i ulike sjangre'],
  content: [
    {
      id: 'fransk-3-14-2-intro',
      type: 'text',
      content: `## La littérature des Caraïbes et du Maghreb

Den franskspråklige verden strekker seg langt utover Afrika og Europa. To av de mest betydningsfulle litterære tradisjonene finnes i **les Caraïbes** (Karibia) og **le Maghreb** (Nord-Afrika). Disse regionene har hver sin unike historie med fransk kolonialisme, og forfatterne deres har skapt litteratur som utforsker identitet, eksil, språk og tilhørighet på dypt originale måter.

Fra Martiniques vulkanske landskap til Algeries ørkensletter, har franskspråklige forfattere brukt litteraturen til å forhandle mellom kulturer, språk og virkeligheter. La **créolité** i Karibia og den **littérature beur** i Frankrike representerer nye stemmer som utfordrer det tradisjonelle synet på franskspråklig litteratur.

| Fransk | Norsk |
|--------|-------|
| les Caraïbes (f, pl) | Karibia |
| le Maghreb | Maghreb (Nord-Afrika: Marokko, Algerie, Tunisia) |
| la créolité | kreolitet (karibisk identitetsbevegelse) |
| l'exil (m) | eksilet |
| le déracinement | opprykkingen, rotløsheten |
| l'enracinement (m) | forankringen, det å slå røtter |
| la quête identitaire | identitetssøkenen |
| le bilinguisme | tospråkligheten |`
    },
    {
      id: 'fransk-3-14-2-def-1',
      type: 'definition',
      title: 'La créolité',
      content: `**La créolité** er en litterær og kulturell bevegelse fra de franske Karibiske øyene, formulert i manifestet *Éloge de la créolité* (1989) av **Jean Bernabé**, **Patrick Chamoiseau** og **Raphaël Confiant**. I motsetning til négritude, som fokuserte på afrikanske røtter, omfavner créolité den kulturelle *blandingen* som kjennetegner det karibiske samfunnet – afrikansk, europeisk, indisk og amerindiansk arv. Bevegelsen feirer kreolsk språk og muntlig tradisjon som grunnlag for en autentisk karibisk identitet.`
    },
    {
      id: 'fransk-3-14-2-text-2',
      type: 'text',
      content: `## Aimé Césaire (1913–2008) – Martinique

Aimé Césaire var poet, dramatiker og politiker fra Martinique. Hans episke dikt *Cahier d'un retour au pays natal* (Notatbok om en hjemkomst til fødelandet, 1939) regnes som et av de viktigste verkene i franskspråklig litteratur. Césaire oppfant selve begrepet **négritude** og brukte en eksplosjonsartet, surrealistisk poetisk stil.

### Utdrag fra « Cahier d'un retour au pays natal »

> *Au bout du petit matin...*
> *Va-t'en, lui disais-je, gueule de flic, gueule de vache, va-t'en...*
> *Et nous sommes debout maintenant, mon pays et moi...*

Césaire bryter med den klassiske poetiske formen og skaper en revolusjonær poesi der sinne, smerte og stolthet smelter sammen. Hans innflytelse strekker seg til Frantz Fanon, som var hans elev i Martinique.

## Assia Djebar (1936–2015) – Algerie

Assia Djebar var romanforfatter, filmskaper og historiker fra Algerie, og den første maghrebinske kvinnen som ble valgt inn i l'Académie française (2005). Hennes verk utforsker algeriske kvinners usynliggjorte historie, forholdet mellom fransk og arabisk, og konsekvensene av kolonialisme og uavhengighetskrig.

Hennes mesterverk *L'Amour, la fantasia* (1985) vever sammen personlig memoar og Algeries koloniale historie, der det franske språket paradoksalt nok blir et verktøy for å uttrykke det arabiske og berbiske som ble undertrykket.`
    },
    {
      id: 'fransk-3-14-2-def-2',
      type: 'definition',
      title: 'La littérature beur',
      content: `**La littérature beur** (beur-litteratur) refererer til litteratur skrevet av andregenerasjons nordafrikanske innvandrere i Frankrike. Begrepet «beur» er baklengs-slang (*verlan*) for «arabe». Denne litteraturen, som vokste frem på 1980-tallet, tematiserer oppvekst mellom to kulturer, rasisme, forstedenes utfordringer og identitetsforhandling. Sentrale verk inkluderer Azouz Begags *Le Gone du Chaâba* (1986) og Mehdi Charefs *Le Thé au harem d'Archi Ahmed* (1983).`
    },
    {
      id: 'fransk-3-14-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Tahar Ben Jellouns polyfone fortelling',
      problem: `Tahar Ben Jelloun (Marokko, f. 1944) vant Prix Goncourt i 1987 for romanen *La Nuit sacrée*. Les dette utdraget fra *L'Enfant de sable* (1985) og analyser den narrative strukturen:

> « *Messieurs, j'ai ici une histoire, belle comme l'ombre du crépuscule, un récit qui n'a pas de fin... Approchez-vous, faites un cercle... je suis le conteur. Cette histoire, je la tiens d'un vieux carnet...* »

Hvordan bruker Ben Jelloun den muntlige fortellertradisjonen (*la tradition orale*) i sin romanform?`,
      solution: `Ben Jelloun integrerer den muntlige fortellertradisjonen på flere nivåer:

1. **Le conteur (fortelleren)**: Romanen åpner med en forteller på en marokkansk markedsplass (*la place publique*) som henvender seg direkte til et publikum, akkurat som i den tradisjonelle *halqa*-tradisjonen (sirkelfortellingen).

2. **Polyfoni**: Historien fortelles av flere fortellere som gir ulike versjoner av den samme historien. Dette speiler den muntlige tradisjonens ustabilitet – historien forandrer seg med hver ny forteller.

3. **Metafiksjon**: Forfatteren gjør selve fortellerhandlingen til et tema: « *un récit qui n'a pas de fin* » (en fortelling uten slutt) signaliserer at historien er åpen og formbar.

4. **Kulturell forankring**: Gjennom formuleringer som « *faites un cercle* » (lag en sirkel) og referansen til et gammelt notathefte, forankrer Ben Jelloun den skriftlige romanen i en levende muntlig tradisjon.

Resultatet er en **roman polyphonique** (polyfon roman) som utfordrer vestlige fortellingskonvensjoner og skaper en unik fusjon mellom maghrebinsk og europeisk litterær tradisjon.`
    },
    {
      id: 'fransk-3-14-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva feirer la créolité-bevegelsen som grunnlag for karibisk identitet?',
        options: [
          { id: 'a', text: 'Utelukkende de afrikanske røttene i karibisk kultur', isCorrect: false },
          { id: 'b', text: 'Den franske koloniale arven og det franske språket', isCorrect: false },
          { id: 'c', text: 'Den kulturelle blandingen av afrikansk, europeisk, indisk og amerindiansk arv', isCorrect: true },
          { id: 'd', text: 'En tilbakevending til det karibiske folkets opprinnelige amerindianske kultur', isCorrect: false },
        ],
        solution: 'La créolité skiller seg fra négritude nettopp ved å feire den kulturelle blandingen (le métissage) som kjennetegner Karibia. Manifestet « Éloge de la créolité » (1989) hevder at karibisk identitet er kreolsk – en unik fusjon av alle kulturene som møtes i regionen.',
      }
    },
    {
      id: 'fransk-3-14-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilket paradoks utforsker Assia Djebar i « L\'Amour, la fantasia » (1985)?',
        options: [
          { id: 'a', text: 'At kolonialismen brakte fremskritt til Algerie, men ødela den tradisjonelle kulturen', isCorrect: false },
          { id: 'b', text: 'At det franske språket – kolonimaktens språk – blir verktøyet for å uttrykke den undertrykte arabiske og berbiske historien', isCorrect: true },
          { id: 'c', text: 'At algeriske kvinner foretrekker det franske språket fremfor arabisk', isCorrect: false },
          { id: 'd', text: 'At den franske litteraturen er overlegen den arabiske', isCorrect: false },
        ],
        solution: 'Djebar utforsker paradokset i at hun bruker fransk – koloniherrens språk – for å fortelle om algeriske kvinners skjulte historie og den smerten kolonialismen forårsaket. Det franske språket blir både et «slør» (un voile) og et «frigjøringsverktøy» (un outil de libération).',
      }
    },
    {
      id: 'fransk-3-14-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Sammenlign la négritude og la créolité som identitetsbevegelser. Skriv en tekst på fransk (minst 80 ord) der du diskuterer:

1. Hva er hovedforskjellen mellom de to bevegelsenes syn på identitet?
2. Hvordan kritiserte créolité-forfatterne négritude?
3. Kan man si at créolité er en videreføring av négritude, eller et brudd med den?`,
        solution: `Eksempelsvar: La négritude et la créolité représentent deux visions différentes de l'identité francophone. La négritude, fondée par Senghor et Césaire, affirmait l'existence d'une essence noire universelle, valorisant les racines africaines contre le mépris colonial. La créolité, formulée par Chamoiseau, Confiant et Bernabé dans leur manifeste de 1989, rejette cette vision essentialiste.

Les auteurs de la créolité ont critiqué la négritude pour son idéalisation de l'Afrique et son refus de reconnaître le métissage caribéen. Pour eux, l'identité antillaise n'est ni africaine, ni européenne, mais créole – née du mélange de toutes ces cultures.

On peut considérer la créolité comme à la fois une continuation et une rupture : elle poursuit le projet d'affirmation identitaire de la négritude, mais en remplaçant l'essentialisme par une vision plurielle et hybride de l'identité.`,
      }
    },
    {
      id: 'fransk-3-14-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva betyr det at Tahar Ben Jellouns « L\'Enfant de sable » er en « roman polyphonique »?',
        options: [
          { id: 'a', text: 'At romanen er skrevet som et musikkstykke med flere instrumenter', isCorrect: false },
          { id: 'b', text: 'At historien fortelles av flere fortellere som gir ulike versjoner av de samme hendelsene', isCorrect: true },
          { id: 'c', text: 'At romanen er oversatt til flere språk simultant', isCorrect: false },
          { id: 'd', text: 'At forfatteren bruker flere pseudonymer i samme tekst', isCorrect: false },
        ],
        solution: 'En polyfon roman (roman polyphonique) kjennetegnes ved at flere fortellerstemmer presenterer ulike versjoner av den samme historien. I « L\'Enfant de sable » forteller ulike fortellere på en marokkansk markedsplass den samme historien med varierende detaljer og tolkninger, noe som speiler den muntlige tradisjonens ustabilitet og rikdom.',
      }
    },
    {
      id: 'fransk-3-14-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Assia Djebar skrev: « *La langue française, mon butin de guerre* » (Det franske språket, mitt krigsbytte). Analyser dette sitatet i lys av den franskspråklige maghrebinske litteraturen. Skriv teksten på fransk (minst 100 ord), og diskuter:

1. Hva mener Djebar med at det franske språket er et «krigsbytte»?
2. Hvordan kan et språk være både et undertrykkelsesverktøy og et frigjøringsverktøy?
3. Hvilken rolle spiller tospråkligheten (le bilinguisme) i maghrebinsk litteratur?`,
        solution: `Eksempelsvar: Quand Djebar qualifie le français de « butin de guerre », elle reprend une expression de Kateb Yacine pour transformer la relation de domination en une relation de réappropriation. Le français, imposé par la colonisation, devient un outil conquis par les colonisés, retourné contre l'ancien colonisateur.

Ce paradoxe est au cœur de la littérature maghrébine francophone. Le français a été l'instrument de l'assimilation coloniale – les écoles françaises visaient à effacer les langues et cultures locales. Pourtant, c'est en français que Djebar, Kateb Yacine, Mohammed Dib et d'autres ont raconté la souffrance de la colonisation et la lutte pour l'indépendance.

Le bilinguisme dans la littérature maghrébine n'est pas un simple choix linguistique, mais une condition existentielle. L'écrivain maghrébin francophone vit entre deux langues, deux cultures, deux mondes. Cette tension, loin d'être paralysante, devient une source de créativité : le français maghrébin porte en lui les rythmes, les images et les structures de l'arabe et du berbère, créant une langue littéraire unique.`,
      }
    },
    {
      id: 'fransk-3-14-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket franskspråklig litteratur fra to viktige regioner:

**Karibia:**
- **Aimé Césaire**: Grunnlegger av négritude, surrealistisk revolusjonær poesi med *Cahier d'un retour au pays natal*
- **La créolité**: Bevegelse som feirer den karibiske kulturelle blandingen (Chamoiseau, Confiant, Bernabé)

**Maghreb (Nord-Afrika):**
- **Assia Djebar**: Utforsker algeriske kvinners historie og språklig paradoks i *L'Amour, la fantasia*
- **Tahar Ben Jelloun**: Polyfon roman som integrerer den muntlige fortellertradisjonen (*halqa*)
- **La littérature beur**: Andregenerasjons innvandrerlitteratur i Frankrike

**Nøkkeltemaer:**
- Språket som krigsbytte (*la langue comme butin de guerre*)
- Tospråklighet og kulturell mellomposisjon
- Muntlig tradisjon i romanformen
- Identitet mellom kulturer`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la créolité', definition: 'Karibisk identitetsbevegelse som feirer den kulturelle blandingen i kreolske samfunn' },
    { term: 'le Maghreb', definition: 'Nord-Afrika (Marokko, Algerie, Tunisia) – region med rik franskspråklig litterær tradisjon' },
    { term: 'le roman polyphonique', definition: 'Roman der flere fortellerstemmer presenterer ulike versjoner av den samme historien' },
    { term: 'la littérature beur', definition: 'Litteratur av andregenerasjons nordafrikanske innvandrere i Frankrike' },
    { term: 'le bilinguisme', definition: 'Tospråklighet – sentralt fenomen i franskspråklig litteratur utenfor Frankrike' },
    { term: 'la halqa', definition: 'Tradisjonell marokkansk sirkelfortelling på offentlige plasser, brukt av Ben Jelloun i romanform' },
    { term: 'le butin de guerre', definition: 'Krigsbytte – metafor for det franske språket som de koloniserte tok til seg og gjorde til sitt eget' },
    { term: 'le déracinement', definition: 'Opprykning, rotløshet – tema om tap av kulturelle røtter i eksil- og migrasjonslitteratur' },
  ],
};

// --- 14.3: Le roman contemporain français ---
export const CHAPTER_FRANSK_3_14_3: TextbookChapter = {
  id: 'fransk-3-14-3',
  courseId: 'fransk-3',
  chapterNumber: '14.3',
  title: 'Le roman contemporain français',
  subtitle: 'Den samtidige franske romanen',
  description: 'Studer den moderne franske romanen: autofiction, den sosiale romanen og samtidsforfattere som Houellebecq og Nothomb.',
  estimatedMinutes: 55,
  competenceGoals: ['lese, analysere og tolke avanserte franske tekster i ulike sjangre'],
  content: [
    {
      id: 'fransk-3-14-3-intro',
      type: 'text',
      content: `## Le roman contemporain français

Den franske romanen har gjennomgått store forandringer siden 1980-tallet. Etter **le nouveau roman** (den nye romanen) på 1960-tallet, som forkastet tradisjonell fortelling, har samtidsforfattere vendt tilbake til fortellergleden – men med nye virkemidler. To dominerende strømninger preger den samtidige franske litteraturen: **l'autofiction** (autofiksjonen) og **le roman social** (den sosiale romanen).

Dagens franske forfattere utforsker temaer som identitetskrise, globaliseringens konsekvenser, den digitale tidsalderens fremmedgjøring og de sosiale klassenes ulikhet. De skriver i en tid der den franske romanen konkurrerer med angloamerikansk litteratur, og mange søker å gjenvinne lesernes oppmerksomhet med provoserende tematikk og eksperimentelle former.

| Fransk | Norsk |
|--------|-------|
| l'autofiction (f) | autofiksjonen |
| le roman social | den sosiale romanen |
| le nouveau roman | den nye romanen (1950–70-tallet) |
| la rentrée littéraire | den litterære høstsesongen (september) |
| le prix littéraire | den litterære prisen |
| le récit de soi | selvfortellingen |
| la provocation | provokasjonen |
| le malaise social | det sosiale ubehaget |`
    },
    {
      id: 'fransk-3-14-3-def-1',
      type: 'definition',
      title: 'L\'autofiction',
      content: `**L'autofiction** (autofiksjon) er en sjanger der forfatteren bruker sitt eget liv som materiale, men blander fakta og fiksjon på en bevisst måte. Begrepet ble lansert av **Serge Doubrovsky** i 1977 med romanen *Fils*. I motsetning til ren selvbiografi (l'autobiographie), gjør autofiksjonen det umulig å skille mellom «sant» og «oppdiktet». Sentrale utøvere i dag inkluderer **Annie Ernaux** (Nobelpris 2022), **Christine Angot** og **Édouard Louis**. Sjangeren reiser viktige spørsmål om grensene mellom privatliv, sannhet og litteratur.`
    },
    {
      id: 'fransk-3-14-3-text-2',
      type: 'text',
      content: `## Michel Houellebecq (f. 1956)

Michel Houellebecq er den mest oversatte og debatterte franske samtidsforfatteren. Hans romaner – *Les Particules élémentaires* (1998), *Plateforme* (2001), *Soumission* (2015) – tegner et dystopisk bilde av det moderne vestlige samfunnet: forbrukersamfunnets tomhet, seksualitetens markedslogikk og religiøs fremvekst.

Houellebecqs stil kjennetegnes av:
- **Flatt, klinisk språk**: En tilsynelatende nøytral beskrivelse av deprimerende virkeligheter
- **Sosiologisk analyse**: Romanene fungerer nesten som sosiologiske studier av samtiden
- **Provokasjon**: Kontroversielle standpunkter om islam, turisme og seksualitet
- **Nihilisme**: En grunnleggende pessimisme om menneskets muligheter for lykke

## Amélie Nothomb (f. 1966)

Amélie Nothomb, belgisk-japansk forfatter, utgir én roman hvert år under *la rentrée littéraire* (den litterære høstsesongen i september). Hennes verk veksler mellom autofiktive romaner om sin oppvekst i Japan (*Stupeur et tremblements*, 1999 – Prix de l'Académie française) og mer fantasifulle fortellinger.

Nothombs stil kjennetegnes av:
- **Kort, intens form**: Romanene er sjelden over 200 sider
- **Svart humor**: En besk, ironisk tone
- **Kulturkonflikter**: Spenningen mellom japansk og vestlig kultur
- **Identitetsproblematikk**: Temaer om kropp, mat og tilhørighet`
    },
    {
      id: 'fransk-3-14-3-def-2',
      type: 'definition',
      title: 'Le roman social',
      content: `**Le roman social** (den sosiale romanen) er en romantype som fokuserer på sosiale klasser, ulikhet og marginaliserte gruppers liv. I Frankrike har denne tradisjonen røtter tilbake til Zola og Balzac, men har fått en fornyet aktualitet med forfattere som **Édouard Louis** (*En finir avec Eddy Bellegueule*, 2014), **Didier Eribon** (*Retour à Reims*, 2009) og **Nicolas Mathieu** (Prix Goncourt 2018 for *Leurs enfants après eux*). Disse verkene utforsker arbeiderklassens opplevelser, sosial mobilitet og «de usynliges Frankrike» (la France des invisibles).`
    },
    {
      id: 'fransk-3-14-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Annie Ernaux og den sosiale autofiksjonen',
      problem: `Annie Ernaux (f. 1940) fikk Nobelprisen i litteratur i 2022. Les dette utdraget fra *La Place* (1983) og analyser forholdet mellom autofiksjon og sosial analyse:

> « *Mon père est mort deux mois après mon mariage. Il avait soixante-sept ans et tenait avec ma mère un café-alimentation dans un quartier de Rouen. Il suffira de quelques phrases pour que ce livre devienne de la littérature, des phrases du genre : "Le soleil brillait..." Je n'ai pas le droit de prendre d'abord le parti de l'art.* »

Hvordan kombinerer Ernaux autofiksjon med sosial analyse i dette utdraget?`,
      solution: `Ernaux forener det personlige og det sosiale gjennom en bevisst litterær strategi:

1. **Nekting av «litteratur»**: Ernaux avviser eksplisitt den tradisjonelle litterære stilen (« *des phrases du genre : "Le soleil brillait..."* »). Hun mener at poetisk utsmykking ville forråde farens virkelighet – arbeiderklassens virkelighet.

2. **L'écriture plate** (flat skrivemåte): Hun bruker et bevisst enkelt, nesten klinisk språk som gjenspeiler farens egen språkfattigdom (som resultat av sosial klasse). Stilen *er* innholdet.

3. **Le récit de filiation** (slektsfortellingen): Gjennom farens livshistorie avdekker Ernaux klasseskillene i det franske samfunnet – gapet mellom hennes akademiske verden og foreldrenes arbeiderklassebakgrunn.

4. **Sosial skam** (la honte sociale): Utdraget avslører en dyp ambivalens – kjærlighet til faren blandet med skam over hans sosiale posisjon, en skam som litteraturen forsøker å bearbeide.

Ernaux kaller sin metode « *l'auto-socio-biographie* » – en selvbiografi som er uatskillelig fra den sosiale analysen.`
    },
    {
      id: 'fransk-3-14-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner autofiksjon (l\'autofiction) som litterær sjanger?',
        options: [
          { id: 'a', text: 'Forfatteren skriver en rent oppdiktet historie uten personlige elementer', isCorrect: false },
          { id: 'b', text: 'Forfatteren bruker sitt eget liv som materiale, men blander bevisst fakta og fiksjon', isCorrect: true },
          { id: 'c', text: 'Forfatteren skriver en nøyaktig og dokumentarisk selvbiografi', isCorrect: false },
          { id: 'd', text: 'Forfatteren lar en annen person fortelle sin historie', isCorrect: false },
        ],
        solution: 'Autofiction kjennetegnes nettopp av blandingen mellom selvbiografisk materiale og fiksjon. Sjangeren ble navngitt av Serge Doubrovsky i 1977. I motsetning til selvbiografien (l\'autobiographie) gjør autofiksjonen det bevisst umulig å skille mellom «sant» og «oppdiktet».',
      }
    },
    {
      id: 'fransk-3-14-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva mener Annie Ernaux med begrepet « l\'écriture plate » (flat skrivemåte)?',
        options: [
          { id: 'a', text: 'En kjedelig og uinspirert skrivestil som skyldes manglende talent', isCorrect: false },
          { id: 'b', text: 'En bevisst enkel og nøktern stil som unngår litterær utsmykking for å gjenspeile arbeiderklassens virkelighet', isCorrect: true },
          { id: 'c', text: 'En humoristisk stil med flate vitser og ordspill', isCorrect: false },
          { id: 'd', text: 'En eksperimentell stil inspirert av le nouveau roman som fjerner alle følelser fra teksten', isCorrect: false },
        ],
        solution: 'Ernaux\' « écriture plate » er en bevisst stilistisk strategi: hun bruker et enkelt, direkte språk uten poetisk utsmykking fordi hun mener at en «vakker» litterær stil ville forråde arbeiderklassens virkelighet og gjøre den til estetisk objekt. Stilen gjenspeiler altså innholdet – den sosiale virkeligheten den beskriver.',
      }
    },
    {
      id: 'fransk-3-14-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Houellebecqs romaner har blitt kalt «sosiologiske romaner» (des romans sociologiques). Skriv en tekst på fransk (minst 80 ord) der du diskuterer:

1. Hva menes med at Houellebecqs romaner fungerer som «sosiologiske studier»?
2. Hvilke aspekter av det moderne samfunnet kritiserer Houellebecq?
3. Kan man si at Houellebecqs provokasjon har en litterær funksjon, eller er den bare sjokk for sjokkens skyld?`,
        solution: `Eksempelsvar: Les romans de Houellebecq sont qualifiés de « sociologiques » parce qu'ils décrivent la société contemporaine avec une précision quasi scientifique. Plutôt que de raconter des histoires personnelles, ses romans analysent des phénomènes sociaux : la marchandisation de la sexualité dans « Les Particules élémentaires », le tourisme de masse dans « Plateforme », la montée de l'islam politique dans « Soumission ».

Houellebecq critique principalement le vide existentiel du libéralisme économique, l'atomisation sociale et l'incapacité des individus modernes à trouver le bonheur malgré le confort matériel. Son regard est celui d'un sociologue pessimiste.

Sa provocation n'est pas gratuite – elle sert à déranger le lecteur et à l'obliger à regarder en face des réalités que la société préfère ignorer. Toutefois, la frontière entre critique sociale et provocation pure reste discutable dans certains de ses textes.`,
      }
    },
    {
      id: 'fransk-3-14-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Annie Ernaux kaller sin metode « l\'auto-socio-biographie ». Hva innebærer dette begrepet?',
        options: [
          { id: 'a', text: 'En selvbiografi der forfatteren analyserer sin egen sosiale medieprofil', isCorrect: false },
          { id: 'b', text: 'En selvbiografisk metode der det personlige livet er uatskillelig fra den sosiale klasseanalysen', isCorrect: true },
          { id: 'c', text: 'En sosiologisk studie som bruker andres livshistorier som eksempler', isCorrect: false },
          { id: 'd', text: 'En biografisk metode der forfatteren intervjuer medlemmer av ulike sosiale klasser', isCorrect: false },
        ],
        solution: 'Ernaux\' « auto-socio-biographie » kombinerer tre dimensjoner: det selvbiografiske (auto-), det sosiologiske (-socio-) og det biografiske (-biographie). For Ernaux er personlige minner alltid formet av sosiale strukturer – klassebakgrunn, kjønn, utdanning. Man kan ikke forstå et individ uten å forstå den sosiale konteksten det lever i.',
      }
    },
    {
      id: 'fransk-3-14-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `La rentrée littéraire er et unikt fransk kulturelt fenomen der hundrevis av romaner utgis i september hvert år. Skriv en drøftende tekst på fransk (minst 100 ord) der du diskuterer:

1. Hva er la rentrée littéraire, og hvorfor er den viktig for fransk kulturliv?
2. Hvilken rolle spiller de store litterære prisene (le prix Goncourt, le prix Renaudot, le prix Femina) i det franske litterære systemet?
3. Er det franske systemet med litterære priser og rentrée littéraire positivt eller negativt for litteraturen?`,
        solution: `Eksempelsvar: La rentrée littéraire est un phénomène culturel typiquement français qui se déroule chaque année en septembre. Pendant quelques semaines, plusieurs centaines de romans sont publiés simultanément, créant une effervescence médiatique et culturelle sans équivalent dans le monde.

Les grands prix littéraires – le Goncourt, le Renaudot, le Femina, le Médicis, l'Interallié – jouent un rôle central dans ce système. Le prix Goncourt, décerné en novembre, ne rapporte que dix euros symboliques, mais garantit des ventes de plusieurs centaines de milliers d'exemplaires. Ces prix fonctionnent comme des labels de qualité qui orientent les choix des lecteurs.

Ce système présente des avantages et des inconvénients. D'un côté, il maintient la littérature au centre de la vie culturelle française et permet à des auteurs peu connus d'accéder à un large public. De l'autre, il crée un système de compétition qui favorise les grandes maisons d'édition (Gallimard, Grasset, Seuil) au détriment des petits éditeurs, et la concentration des sorties en septembre noie de nombreux romans qui méritaient davantage d'attention.`,
      }
    },
    {
      id: 'fransk-3-14-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket den samtidige franske romanen gjennom to hovedstrømninger:

**L'autofiction:**
- Sjanger der fakta og fiksjon blandes bevisst (Doubrovsky, 1977)
- **Annie Ernaux** (Nobelpris 2022): « l'écriture plate » og « l'auto-socio-biographie »
- **Amélie Nothomb**: Kulturkonflikt og identitet mellom Japan og Europa

**Le roman social:**
- **Houellebecq**: Sosiologisk roman om det moderne samfunnets tomhet og fremmedgjøring
- **Édouard Louis**: Arbeiderklassens usynlighet og sosial skam
- **Nicolas Mathieu**: Prix Goncourt 2018 for skildringar av provinsiell arbeiderklasse

**Nøkkelkonsepter:**
- L'écriture plate – flat skrivemåte som stilistisk valg
- La rentrée littéraire – den franske litterære høstsesongen
- Le récit de filiation – slektsfortellingen som sosial analyse
- Forholdet mellom litteratur og sosiologi`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'l\'autofiction (f)', definition: 'Litterær sjanger der forfatteren blander selvbiografisk materiale med fiksjon på en bevisst måte' },
    { term: 'le roman social', definition: 'Romantype som fokuserer på sosiale klasser, ulikhet og marginaliserte gruppers liv' },
    { term: 'l\'écriture plate (f)', definition: 'Annie Ernaux\' bevisst enkle og nøkterne stil som unngår litterær utsmykking' },
    { term: 'la rentrée littéraire', definition: 'Den franske litterære høstsesongen i september der hundrevis av romaner utgis simultant' },
    { term: 'le prix Goncourt', definition: 'Frankrikes mest prestisjefylte litterære pris, tildelt hvert år i november' },
    { term: 'le récit de filiation', definition: 'Slektsfortelling der forfatteren utforsker sin egen familiehistorie for å avdekke sosiale strukturer' },
    { term: 'l\'auto-socio-biographie (f)', definition: 'Annie Ernaux\' metode som forener selvbiografi, sosiologisk analyse og biografisk fortelling' },
    { term: 'le malaise social', definition: 'Det sosiale ubehaget – tema i samtidsromaner om fremmedgjøring, ulikhet og identitetskrise' },
  ],
};

// --- 14.4: La bande dessinée et le roman graphique ---
export const CHAPTER_FRANSK_3_14_4: TextbookChapter = {
  id: 'fransk-3-14-4',
  courseId: 'fransk-3',
  chapterNumber: '14.4',
  title: 'La bande dessinée et le roman graphique',
  subtitle: 'Tegneserien og den grafiske romanen',
  description: 'Utforsk den franskspråklige tegneserietradisjonen: fra Tintin og Astérix til Persepolis og le neuvième art.',
  estimatedMinutes: 55,
  competenceGoals: ['lese, analysere og tolke avanserte franske tekster i ulike sjangre'],
  content: [
    {
      id: 'fransk-3-14-4-intro',
      type: 'text',
      content: `## La bande dessinée et le roman graphique

I den franskspråklige verden er tegneserien – **la bande dessinée** (forkortet **la BD**) – ikke barneunderholdning, men en anerkjent kunstform. Den kalles **le neuvième art** (den niende kunstart), på lik linje med litteratur, film og musikk. Frankrike og Belgia har den rikeste tegneserietradisjonen i Europa, med en historie som strekker seg fra Hergés *Tintin* (1929) til dagens grafiske romaner om krig, migrasjon og identitet.

Tegneseriens særstilling i franskspråklig kultur gjenspeiles i dedikerte festivaler som **le Festival international de la bande dessinée d'Angoulême** (grunnlagt 1974), Europas viktigste tegneseriefestival, samt spesialiserte forlag og akademiske studier.

| Fransk | Norsk |
|--------|-------|
| la bande dessinée (la BD) | tegneserien |
| le roman graphique | den grafiske romanen |
| le neuvième art | den niende kunstarten |
| la case / la vignette | tegneserieruten |
| la bulle / le phylactère | snakkeboblen |
| la planche | tegneseriesiden |
| le dessinateur / la dessinatrice | tegneren |
| le scénariste | manusforfatteren |`
    },
    {
      id: 'fransk-3-14-4-def-1',
      type: 'definition',
      title: 'Le neuvième art',
      content: `**Le neuvième art** (den niende kunstarten) er betegnelsen på tegneserien som kunstform i den franskspråklige tradisjonen. Uttrykket plasserer tegneserien i en klassifisering av kunstartene: (1) arkitektur, (2) skulptur, (3) maleri, (4) musikk, (5) poesi/litteratur, (6) teater, (7) film, (8) TV/mediefotografi, (9) tegneserien. Denne anerkjennelsen reflekterer den franskspråklige kulturens unike respekt for tegneseriemediet som en fullverdig kunstnerisk uttrykksform.`
    },
    {
      id: 'fransk-3-14-4-text-2',
      type: 'text',
      content: `## De store klassikerne: Tintin og Astérix

### Tintin (1929–1976) – Hergé

**Georges Remi**, kjent som **Hergé** (Belgia, 1907–1983), skapte journalisten Tintin og hans hund Milou i 1929. De 23 albumene i serien er oversatt til over 100 språk og har solgt mer enn 250 millioner eksemplarer. Hergé utviklet **la ligne claire** (den klare linjen) – en tegnestil med tydelige konturer, flate farger og detaljerte bakgrunner som ble banebrytende for europeisk tegneserie.

Tintin-albumene speiler også sin tid: de tidlige albumene inneholder koloniale stereotypier (*Tintin au Congo*, 1931), mens de senere verkene (*Le Lotus bleu*, 1936) viser en langt mer nyansert kulturforståelse.

### Astérix (1959–) – Goscinny & Uderzo

**René Goscinny** (manus) og **Albert Uderzo** (tegninger) skapte Astérix le Gaulois i 1959 – historien om en liten gallisk landsby som motstår den romerske okkupasjonen. Serien er en satirisk allegori over det moderne Frankrike: den galliske landsbyen representerer fransk motstandsånd, og hvert album parodierer en annen nasjon eller kulturelt fenomen.

Astérix er den bestselgende franske tegneserien med over 385 millioner solgte eksemplarer og er oversatt til mer enn 100 språk, inkludert latin og gammelgresk.`
    },
    {
      id: 'fransk-3-14-4-def-2',
      type: 'definition',
      title: 'La ligne claire',
      content: `**La ligne claire** (den klare linjen) er en tegnestil utviklet av Hergé og den belgiske tegneserieskolen. Stilen kjennetegnes av: (1) tydelige, jevne konturer uten skravering, (2) flate, ensartede farger, (3) realistiske og detaljerte bakgrunner, og (4) forenklede, ekspressive ansikter. La ligne claire har påvirket generasjoner av tegneserieskapere og brukes fortsatt av moderne tegnere som Joost Swarte og Jason Lutes.`
    },
    {
      id: 'fransk-3-14-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Analyse av Persepolis som grafisk roman',
      problem: `**Marjane Satrapi** (Iran/Frankrike, f. 1969) publiserte *Persepolis* (2000–2003), en selvbiografisk grafisk roman om sin oppvekst under den iranske revolusjonen. Verket regnes som et gjennombrudd for den grafiske romanen som seriøs litterær form.

Analyser følgende aspekter av *Persepolis*:
1. Hvordan bruker Satrapi den visuelle stilen (svart-hvitt, forenklede figurer) til å formidle alvorlige temaer?
2. Hvorfor valgte Satrapi tegneserieformatet fremfor en tradisjonell selvbiografi?`,
      solution: `Satrapis visuelle og narrative valg i *Persepolis* er bevisste kunstneriske strategier:

1. **Den svart-hvite stilen**: Satrapi bruker kun svart og hvitt uten gråtoner, noe som skaper en visuell kontrast som speiler det iranske samfunnets polarisering. Den enkle stilen minner om persisk miniatyrkunst og står i kontrast til tegneseriens alvorlige innhold – krig, tortur, eksil – noe som gjør det vonde tilgjengelig uten å trivialisere det.

2. **Forenklede figurer**: De stiliserte ansiktene gjør det lettere for lesere fra alle kulturer å identifisere seg med karakterene. Satrapi følger **Scott McClouds** prinsipp: jo enklere ansiktet, jo flere kan se seg selv i det.

3. **Tegneserieformatet som valg**: Satrapi forklarer at tegneserien tillater henne å fortelle en universell historie: « *L'image est un langage international* » (bildet er et internasjonalt språk). Tegneserieformatet:
   - Gjør den iranske historien tilgjengelig for et vestlig publikum
   - Unngår den «eksotiseringen» som ofte følger med prosafortellinger om Midtøsten
   - Kombinerer barnets perspektiv (enkle tegninger) med voksens analyse (teksten)

*Persepolis* ble en internasjonal bestselger, filmatisert som animasjonsfilm (2007), og er nå pensum på mange skoler og universiteter – et bevis på den grafiske romanens litterære anerkjennelse.`
    },
    {
      id: 'fransk-3-14-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr « le neuvième art » (den niende kunstarten) i franskspråklig kultur?',
        options: [
          { id: 'a', text: 'Film', isCorrect: false },
          { id: 'b', text: 'Tegneserien (la bande dessinée)', isCorrect: true },
          { id: 'c', text: 'Videospill', isCorrect: false },
          { id: 'd', text: 'Fotografi', isCorrect: false },
        ],
        solution: 'I den franskspråklige kunstklassifiseringen er tegneserien (la bande dessinée) den niende kunstarten, etter arkitektur (1), skulptur (2), maleri (3), musikk (4), litteratur (5), teater (6), film (7) og TV/mediefotografi (8). Denne statusen reflekterer den unike respekten for tegneseriemediet i franskspråklig kultur.',
      }
    },
    {
      id: 'fransk-3-14-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva kjennetegner « la ligne claire » som tegnestil?',
        options: [
          { id: 'a', text: 'Mørke, skyggelagte bilder med uklare konturer og ekspresjonistisk stil', isCorrect: false },
          { id: 'b', text: 'Tydelige konturer uten skravering, flate farger og detaljerte, realistiske bakgrunner', isCorrect: true },
          { id: 'c', text: 'Abstrakt kunst med geometriske former og begrenset fargepalett', isCorrect: false },
          { id: 'd', text: 'Fotorealistiske tegninger med digitale effekter og 3D-perspektiv', isCorrect: false },
        ],
        solution: 'La ligne claire, utviklet av Hergé i Tintin-serien, kjennetegnes av tydelige, jevne konturer, flate ensartede farger, realistiske bakgrunner og forenklede ansikter. Denne stilen ble grunnleggende for den belgisk-franske tegneserietradisjonen og brukes fortsatt av moderne tegnere.',
      }
    },
    {
      id: 'fransk-3-14-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Astérix-serien bruker satire og allegorier for å kommentere det moderne franske samfunnet. Velg et Astérix-album du kjenner til (eller bruk det generelle konseptet med den lille galliske landsbyen som motstår romerne) og skriv en tekst på fransk (minst 80 ord) der du diskuterer:

1. Hva representerer den galliske landsbyen i en moderne kontekst?
2. Hvordan fungerer humor og satire som verktøy for kulturkritikk i Astérix?
3. Hvorfor tror du Astérix har blitt et symbol for fransk identitet?`,
        solution: `Eksempelsvar: Le petit village gaulois d'Astérix, qui résiste encore et toujours à l'envahisseur romain, est devenu un symbole de l'identité française. Dans un contexte moderne, ce village représente la France elle-même – un petit pays qui refuse de se soumettre aux grandes puissances, qu'il s'agisse de l'impérialisme culturel américain, de la mondialisation ou de l'Union européenne.

L'humour dans Astérix fonctionne à plusieurs niveaux. Pour les enfants, il y a le comique visuel – les bagarres, les menhirs d'Obélix, la potion magique. Pour les adultes, il y a la satire culturelle : chaque album parodie les stéréotypes d'un peuple différent (les Britanniques dans « Astérix chez les Bretons », les Espagnols dans « Astérix en Hispanie »).

Astérix incarne la « résistance à la française » – cette idée que la culture, l'humour et la bonne cuisine sont des armes aussi puissantes que la force militaire.`,
      }
    },
    {
      id: 'fransk-3-14-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Marjane Satrapi valgte å tegne Persepolis i svart-hvitt uten gråtoner. Hva er den mest overbevisende analysen av dette visuelle valget?',
        options: [
          { id: 'a', text: 'Det var billigere å trykke i svart-hvitt enn i farger', isCorrect: false },
          { id: 'b', text: 'Den visuelle kontrasten speiler det iranske samfunnets polarisering og gjør det vonde tilgjengelig uten å trivialisere det', isCorrect: true },
          { id: 'c', text: 'Satrapi kunne ikke tegne i farger og valgte den enkleste teknikken', isCorrect: false },
          { id: 'd', text: 'Svart-hvitt var en referanse til gamle iranske tegneserier fra 1950-tallet', isCorrect: false },
        ],
        solution: 'Satrapis svart-hvite stil er et bevisst kunstnerisk valg som fungerer på flere nivåer: den speiler polariseringen i det iranske samfunnet (svart/hvitt = undertrykkere/undertrykte), den knytter an til persisk miniatyrkunst og xylografi, og den skaper en tilgjengelighet som lar leseren fokusere på innholdet uten å bli overveldet av realistiske bilder av vold og undertrykkelse.',
      }
    },
    {
      id: 'fransk-3-14-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Den franskspråklige tegneserien har utviklet seg fra underholdning (Tintin, Astérix) til seriøs litteratur (Persepolis, Maus). Skriv en analytisk tekst på fransk (minst 120 ord) der du diskuterer:

1. Hvordan har tegneseriens status endret seg i franskspråklig kultur fra 1930-tallet til i dag?
2. Hva skiller « le roman graphique » (den grafiske romanen) fra den tradisjonelle tegneserien?
3. Kan en tegneserie ha samme litterære verdi som en tradisjonell roman? Begrunn svaret ditt med eksempler.

Bruk relevante franske begreper som: la BD, le neuvième art, la ligne claire, la case, la bulle, la planche.`,
        solution: `Eksempelsvar: L'évolution de la bande dessinée francophone illustre un parcours remarquable : d'un divertissement pour enfants à un art littéraire reconnu, « le neuvième art ».

Dans les années 1930-1960, la BD était principalement destinée aux jeunes : Tintin d'Hergé (1929) et Astérix de Goscinny et Uderzo (1959) dominaient le marché. Malgré leur qualité artistique – la ligne claire d'Hergé reste une référence visuelle – ces œuvres n'étaient pas considérées comme de la « vraie » littérature.

Le tournant s'est produit dans les années 1970-1980 avec des revues comme « Métal Hurlant » et des auteurs comme Moebius, qui ont exploré des thèmes adultes et expérimenté avec la forme visuelle. La planche est devenue un espace de création artistique, la case un cadrage cinématographique, la bulle un outil narratif sophistiqué.

Le roman graphique – terme qui s'est imposé dans les années 2000 – se distingue de la BD traditionnelle par sa longueur (souvent plus de 200 pages), ses thèmes sérieux (autobiographie, histoire, politique) et sa publication en volume unique plutôt qu'en série. « Persepolis » de Satrapi (2000-2003) et « L'Arabe du futur » de Riad Sattouf (2014) démontrent que le roman graphique peut atteindre la même profondeur analytique qu'un roman traditionnel, tout en utilisant la spécificité du médium : la combinaison du texte et de l'image.

Je suis convaincu(e) qu'une BD peut avoir autant de valeur littéraire qu'un roman. La preuve : « Persepolis » est désormais au programme de nombreuses universités, et le festival d'Angoulême attire autant d'attention critique que les prix littéraires traditionnels.`,
      }
    },
    {
      id: 'fransk-3-14-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-14-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva representerer den galliske landsbyen i Astérix-serien som allegorisk figur?',
        options: [
          { id: 'a', text: 'Den representerer det franske monarkiets storhetstid under Ludvig XIV', isCorrect: false },
          { id: 'b', text: 'Den representerer Frankrikes motstandsånd – et lite land som nekter å underkaste seg store makter', isCorrect: true },
          { id: 'c', text: 'Den representerer det kommunistiske idealsamfunnet slik Karl Marx beskrev det', isCorrect: false },
          { id: 'd', text: 'Den representerer den franske kolonimakten i Afrika', isCorrect: false },
        ],
        solution: 'Den lille galliske landsbyen som «motstår den romerske okkupanten ennå og alltid» (« résiste encore et toujours à l\'envahisseur ») er en allegori for den franske motstandsånden (l\'esprit de résistance). Den speiler Frankrikes selvbilde som en selvstendig kulturnasjon som forsvarer sin identitet mot ytre press, enten det er kulturell globalisering, stormaktspolitikk eller EU-byråkrati.',
      }
    },
    {
      id: 'fransk-3-14-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket den franskspråklige tegneserietradisjonen – le neuvième art:

**De store klassikerne:**
- **Tintin** (Hergé, 1929): La ligne claire, journalisten som utforsker verden – 250 millioner solgte
- **Astérix** (Goscinny & Uderzo, 1959): Satirisk allegori over det franske samfunnet – 385 millioner solgte

**Den moderne grafiske romanen:**
- **Persepolis** (Satrapi, 2000–2003): Selvbiografisk om den iranske revolusjonen, svart-hvit stil, internasjonal bestselger
- **L'Arabe du futur** (Sattouf, 2014–): Oppvekst mellom Frankrike, Libya og Syria

**Nøkkelkonsepter:**
- La BD som le neuvième art – en anerkjent kunstform
- La ligne claire – Hergés innflytelsesrike tegnestil
- Utviklingen fra underholdning til seriøs litteratur
- Festival d'Angoulême som kulturelt sentrum
- Det visuelle språkets narrative muligheter (la case, la bulle, la planche)`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la bande dessinée (la BD)', definition: 'Tegneserien – den franskspråklige tradisjonen for sekvensielt bildefortelling' },
    { term: 'le neuvième art', definition: 'Den niende kunstarten – betegnelsen på tegneserien som anerkjent kunstform' },
    { term: 'le roman graphique', definition: 'Den grafiske romanen – lengre, mer komplekst tegneserieverk med seriøse temaer' },
    { term: 'la ligne claire', definition: 'Tegnestil utviklet av Hergé med tydelige konturer, flate farger og detaljerte bakgrunner' },
    { term: 'la case / la vignette', definition: 'Tegneserieruten – den enkelte rammen i en tegneserie' },
    { term: 'la bulle / le phylactère', definition: 'Snakkeboblen – grafisk element som inneholder karakterenes tale eller tanker' },
    { term: 'la planche', definition: 'Tegneseriesiden – den fullstendige siden med alle ruter og bobler' },
    { term: 'le festival d\'Angoulême', definition: 'Europas viktigste tegneseriefestival, arrangert årlig siden 1974 i byen Angoulême' },
  ],
};

// ============================================================================
// Kapittel 15.1: Les techniques de traduction
// ============================================================================

export const CHAPTER_FRANSK_3_15_1: TextbookChapter = {
  id: 'fransk-3-15-1',
  courseId: 'fransk-3',
  chapterNumber: '15.1',
  title: 'Les techniques de traduction',
  subtitle: 'Oversettelsesteknikker',
  description: 'Lær ulike tilnærminger til oversettelse mellom fransk og norsk, inkludert direkte oversettelse, fri oversettelse, ekvivalens og transposisjon.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke et avansert og nyansert ordforråd tilpasset formål og situasjon', 'oversette og tolke tekster mellom fransk og norsk med bevissthet om språklige nyanser'],
  content: [
    {
      id: 'fransk-3-15-1-intro',
      type: 'text',
      content: `## Les techniques de traduction — Oversettelsesteknikker

Oversettelse er langt mer enn å erstatte ord fra ett språk med ord fra et annet. Det krever en dyp forståelse av begge språkenes grammatikk, kultur og uttrykksmåter. Den kanadiske lingvisten Jean-Paul Vinay og den franske lingvisten Jean Darbelnet identifiserte i 1958 syv grunnleggende oversettelsesprosedyrer, som fortsatt danner grunnlaget for moderne oversettelsesteori.

I dette kapittelet skal vi konsentrere oss om fire sentrale teknikker:

| Teknikk | Fransk | Beskrivelse |
|---|---|---|
| Direkte oversettelse | la traduction littérale | Ord-for-ord-oversettelse der det fungerer |
| Fri oversettelse | la traduction libre | Overføring av mening uten å følge ordstillingen |
| Ekvivalens | l'équivalence (f) | Bruk av tilsvarende uttrykk i målspråket |
| Transposisjon | la transposition | Endring av ordklasse under oversettelsen |

La oss se nærmere på hver av disse teknikkene med eksempler fra fransk til norsk og omvendt.`
    },
    {
      id: 'fransk-3-15-1-def-1',
      type: 'definition',
      title: 'La traduction littérale',
      content: `**La traduction littérale** (direkte/bokstavelig oversettelse) innebærer å oversette ord for ord fra kildespråket til målspråket, samtidig som man beholder den grammatiske strukturen så langt det lar seg gjøre. Denne teknikken fungerer best når språkene har lignende syntaktiske strukturer.\n\n*Eksempel:* «Le chat est sur la table» → «Katten er på bordet» — her fungerer direkte oversettelse utmerket fordi setningsstrukturen er lik.`
    },
    {
      id: 'fransk-3-15-1-def-2',
      type: 'definition',
      title: 'La traduction libre',
      content: `**La traduction libre** (fri oversettelse) innebærer å overføre meningen i en tekst uten å være bundet til kildespråkets ordstilling eller grammatikk. Oversetteren fokuserer på å gjenskape innholdet og tonen på en naturlig måte i målspråket.\n\n*Eksempel:* «Il pleut des cordes» → «Det regner kattar og trollkjerringar» (nynorsk) / «Det øser ned» — den franske metaforen med tau oversettes med et tilsvarende norsk uttrykk.`
    },
    {
      id: 'fransk-3-15-1-def-3',
      type: 'definition',
      title: "L'équivalence et la transposition",
      content: `**L'équivalence** (ekvivalens) brukes når et uttrykk i kildespråket erstattes med et helt annet uttrykk i målspråket som har samme funksjon og effekt. Dette gjelder spesielt ordtak, idiomer og faste uttrykk.\n\n*Eksempel:* «Quand les poules auront des dents» → «Når kua flyr» (= aldri)\n\n**La transposition** innebærer å endre ordklasse under oversettelsen, for eksempel fra verb til substantiv eller fra adjektiv til adverb, for å oppnå et naturlig resultat i målspråket.\n\n*Eksempel:* «Dès son retour» (preposisjon + substantiv) → «Så snart han kom tilbake» (konjunksjon + verb)`
    },
    {
      id: 'fransk-3-15-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifisere oversettelsesteknikk',
      problem: `Hvilken oversettelsesteknikk er brukt i følgende oversettelse?\n\n**Fransk:** «Elle a pris la mouche.»\n**Norsk:** «Hun ble fornærmet.»\n\nDen franske setningen betyr bokstavelig «Hun tok flua», men uttrykket *prendre la mouche* er et idiom som betyr å bli fornærmet over en bagatell.`,
      solution: `Her er det brukt **ekvivalens** (l'équivalence). Det franske idiomatiske uttrykket *prendre la mouche* kan ikke oversettes direkte til norsk. I stedet bruker vi et tilsvarende norsk uttrykk som formidler samme mening: «å bli fornærmet». En direkte oversettelse («å ta flua») ville vært uforståelig på norsk.`
    },
    {
      id: 'fransk-3-15-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Transposisjon i praksis',
      problem: `Oversett følgende setning fra norsk til fransk ved hjelp av transposisjon:\n\n**Norsk:** «Etter at han hadde spist, gikk han en tur.»\n\nHint: Forsøk å erstatte leddsetningen med en preposisjonsfrase med substantiv.`,
      solution: `**Fransk:** «Après le repas, il a fait une promenade.»\n\nHer har vi brukt **transposisjon** ved å endre:\n- Leddsetningen «etter at han hadde spist» (konjunksjon + verb) → preposisjonsfrase «après le repas» (preposisjon + substantiv)\n- Verbet «gikk en tur» → uttrykket «a fait une promenade» (faire une promenade)\n\nDette gir en mer naturlig og elegant fransk setning enn en direkte oversettelse som «Après qu'il avait mangé, il est allé se promener», selv om også den ville vært grammatisk korrekt.`
    },
    {
      id: 'fransk-3-15-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: `Hvilken oversettelsesteknikk er brukt her?\n\n**Fransk:** «Il fait beau aujourd'hui.»\n**Norsk:** «Det er fint vær i dag.»`,
        options: [
          { id: 'a', text: 'La traduction littérale — setningen er oversatt ord for ord', isCorrect: false },
          { id: 'b', text: 'La transposition — «fait beau» (verb + adjektiv) er oversatt til «fint vær» (adjektiv + substantiv)', isCorrect: true },
          { id: 'c', text: "L'équivalence — uttrykket er erstattet med et helt annet norsk uttrykk", isCorrect: false },
          { id: 'd', text: 'La traduction libre — meningen er overført uten å følge strukturen', isCorrect: false },
        ],
        solution: `Riktig svar er **B**. Her ser vi transposisjon: det franske uttrykket «il fait beau» bruker verbet *faire* + adjektivet *beau*, mens den norske oversettelsen bruker adjektivet «fint» + substantivet «vær». Ordklassen har endret seg, noe som er kjennetegnet på transposisjon.`,
      }
    },
    {
      id: 'fransk-3-15-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: `Hvilket av følgende franske ordtak er korrekt oversatt til norsk ved hjelp av ekvivalens?\n\n**Fransk:** «Avoir le cafard»`,
        options: [
          { id: 'a', text: '«Å ha kakerlakken» — direkte oversettelse av det franske uttrykket', isCorrect: false },
          { id: 'b', text: '«Å føle seg som en kakerlakk» — fri oversettelse av bildet', isCorrect: false },
          { id: 'c', text: '«Å være nedfor / ha det tungt» — norsk uttrykk med samme betydning', isCorrect: true },
          { id: 'd', text: '«Å ha en dårlig dag» — en forenklet versjon av uttrykket', isCorrect: false },
        ],
        solution: `Riktig svar er **C**. «Avoir le cafard» betyr bokstavelig «å ha kakerlakken», men det er et idiom som betyr å være deprimert eller nedfor. Ved ekvivalens erstatter vi det franske idiomet med et norsk uttrykk som har samme emosjonelle innhold: «å være nedfor» eller «å ha det tungt». Alternativene A og B forsøker å beholde det franske bildet, noe som ikke fungerer på norsk.`,
      }
    },
    {
      id: 'fransk-3-15-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Oversett følgende setninger fra norsk til fransk. Identifiser hvilken oversettelsesteknikk du bruker for hver setning, og begrunn valget ditt.\n\n1. «Tiden flyr.»\n2. «Han svømte over elven.»\n3. «Det nytter ikke å gråte over spilt melk.»\n4. «Ved daggry dro de av gårde.»`,
        solution: `1. «Le temps passe vite.» — **Transposisjon**: Det norske verbet «flyr» (metaforisk) er erstattet med «passe vite» (verb + adverb). Man kunne også brukt ekvivalens med «Le temps file».\n\n2. «Il a traversé la rivière à la nage.» — **Transposisjon**: Det norske verbet «svømte» er oversatt med preposisjonsfrasen «à la nage», mens bevegelsen er uttrykt med verbet «traverser». Fransk skiller ofte mellom bevegelsesmåte og bevegelsesretning på en annen måte enn norsk.\n\n3. «Il ne sert à rien de pleurer sur le lait renversé.» — **Direkte oversettelse / ekvivalens**: Interessant nok finnes et lignende uttrykk på fransk, så dette kan nesten oversettes direkte. Man kan også bruke det franske uttrykket «Ce qui est fait est fait».\n\n4. «À l'aube, ils sont partis.» — **Transposisjon**: «Ved daggry» (preposisjon + substantiv) → «À l'aube» (preposisjon + substantiv) er direkte, men «dro av gårde» → «sont partis» viser transposisjon fra et partikelverb til et enkelt verb.`,
      }
    },
    {
      id: 'fransk-3-15-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Oversett følgende avsnitt fra fransk til norsk. Bruk minst tre ulike oversettelsesteknikker, og marker i teksten din hvilke teknikker du har brukt.\n\n«Dès son arrivée à Paris, Marie a eu le coup de foudre pour cette ville lumière. Elle avait beau chercher des défauts, elle n'en trouvait pas. Les rues pavées, les cafés animés, les bouquinistes le long de la Seine — tout lui plaisait. Elle s'est dit qu'elle ne mettrait jamais les voiles.»`,
        solution: `Forslag til oversettelse:\n\n«Så snart Marie ankom Paris, ble hun hodestups forelsket i lysets by. Uansett hvor hardt hun forsøkte å finne feil, fant hun ingen. De brosteinsbelagte gatene, de livlige kafeene, antikvarbokhandlerne langs Seinen — alt behaget henne. Hun sa til seg selv at hun aldri ville stikke av.»\n\nTeknikker brukt:\n- **Transposisjon**: «Dès son arrivée» (preposisjon + substantiv) → «Så snart hun ankom» (konjunksjon + verb)\n- **Ekvivalens**: «le coup de foudre» (bokstavelig: lynnedslaget) → «ble hodestups forelsket» (norsk idiom)\n- **Fri oversettelse**: «Elle avait beau chercher» → «Uansett hvor hardt hun forsøkte» (strukturen *avoir beau + infinitiv* finnes ikke på norsk)\n- **Ekvivalens**: «mettre les voiles» (bokstavelig: sette seil) → «stikke av» (norsk idiom)\n- **Direkte oversettelse**: «les cafés animés» → «de livlige kafeene»`,
      }
    },
    {
      id: 'fransk-3-15-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Les følgende oversettelse og identifiser problemet:\n\n**Fransk original:** «Pierre a cassé sa pipe hier soir.»\n**Foreslått oversettelse:** «Pierre knuste pipa si i går kveld.»\n\nHva er problemet med denne oversettelsen?`,
        options: [
          { id: 'a', text: 'Oversettelsen er grammatisk feil — det burde vært «sin pipe»', isCorrect: false },
          { id: 'b', text: '«Casser sa pipe» er et idiom som betyr «å dø» — oversettelsen tar uttrykket bokstavelig', isCorrect: true },
          { id: 'c', text: 'Tempusbruken er feil — det burde vært pluskvamperfektum', isCorrect: false },
          { id: 'd', text: 'Oversettelsen mangler kontekstuell informasjon om Pierre', isCorrect: false },
        ],
        solution: `Riktig svar er **B**. «Casser sa pipe» er et fransk idiomatisk uttrykk (familiert/uformelt) som betyr «å dø». En bokstavelig oversettelse gir helt feil mening. Korrekt oversettelse med ekvivalens: «Pierre gikk bort i går kveld» eller mer uformelt «Pierre vandret heden i går kveld». Dette er et klassisk eksempel på hvorfor direkte oversettelse av idiomer kan være svært villedende.`,
      }
    },
    {
      id: 'fransk-3-15-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi gjennomgått fire sentrale oversettelsesteknikker:

| Teknikk | Når brukes den? | Eksempel |
|---|---|---|
| **La traduction littérale** | Når språkene har lik struktur | «Le livre est sur la table» → «Boken er på bordet» |
| **La traduction libre** | Når direkte oversettelse gir unaturlig resultat | «Il a pris ses jambes à son cou» → «Han tok bena fatt» |
| **L'équivalence** | For idiomer, ordtak og faste uttrykk | «Quand les poules auront des dents» → «Når kua flyr» |
| **La transposition** | Når ordklassen må endres for naturlig resultat | «Dès son retour» → «Så snart han kom tilbake» |

En dyktig oversetter veksler mellom disse teknikkene og velger den som gir det mest naturlige og presise resultatet i målspråket. Husk at målet alltid er å formidle mening, tone og intensjon — ikke bare ord.`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la traduction littérale', definition: 'Direkte/bokstavelig oversettelse, ord for ord' },
    { term: 'la traduction libre', definition: 'Fri oversettelse som overfører mening uten å følge kildespråkets struktur' },
    { term: "l'équivalence (f)", definition: 'Bruk av tilsvarende uttrykk i målspråket, særlig for idiomer og ordtak' },
    { term: 'la transposition', definition: 'Endring av ordklasse under oversettelsen (f.eks. verb → substantiv)' },
    { term: 'la langue source', definition: 'Kildespråket — språket man oversetter fra' },
    { term: 'la langue cible', definition: 'Målspråket — språket man oversetter til' },
    { term: 'un idiome', definition: 'Et idiomatisk uttrykk — et fast uttrykk der helheten betyr noe annet enn delene' },
    { term: 'la fidélité', definition: 'Troskap mot originalteksten i oversettelsen' },
  ],
};

// ============================================================================
// Kapittel 15.2: Les faux amis et les pièges linguistiques
// ============================================================================

export const CHAPTER_FRANSK_3_15_2: TextbookChapter = {
  id: 'fransk-3-15-2',
  courseId: 'fransk-3',
  chapterNumber: '15.2',
  title: 'Les faux amis et les pièges linguistiques',
  subtitle: 'Falske venner og språklige feller',
  description: 'Bli kjent med de vanligste falske vennene mellom fransk, norsk og engelsk, og lær å unngå typiske grammatiske feller i oversettelse.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke et avansert og nyansert ordforråd tilpasset formål og situasjon', 'reflektere over og beskrive likheter og forskjeller mellom fransk og andre språk'],
  content: [
    {
      id: 'fransk-3-15-2-intro',
      type: 'text',
      content: `## Les faux amis — Falske venner

«Les faux amis» (falske venner) er ord som ser like ut eller høres like ut på to språk, men som har forskjellig betydning. De er en av de vanligste kildene til misforståelser og oversettelsesfeil, og de kan være spesielt lumske fordi de gir oversetteren en falsk trygghet.

For norske franskstudenter er det viktig å være oppmerksom på falske venner i tre retninger:
- **Fransk–norsk**: Ord som ligner på norske ord, men betyr noe annet
- **Fransk–engelsk**: Ord som ligner på engelske ord (som vi ofte bruker som bro til fransk)
- **Trippel-feller**: Ord som ser like ut på alle tre språk, men med ulike nyanser

### De vanligste falske vennene fransk–norsk–engelsk

| Fransk ord | Ser ut som... | Betyr faktisk | Korrekt oversettelse |
|---|---|---|---|
| la librairie | «library» (eng.) | bokhandel | le magasin de livres |
| la bibliothèque | — | bibliotek | — |
| assister à | «å assistere» | å være til stede ved | être présent(e) à |
| aider | — | å hjelpe/assistere | — |
| actuellement | «actually» (eng.) | for øyeblikket | en ce moment |
| en fait | — | faktisk/egentlig | — |
| la journée | — | dagen (varighet) | — |
| le journal | «journal» (eng.) | avis | — |
| sensible | «sensibel» (no.) | følsom/sensitiv | — |
| raisonnable | — | fornuftig/forstandig | — |
| blesser | — | å såre/skade | — |
| bénir | «blessed» (eng.) | å velsigne | — |`
    },
    {
      id: 'fransk-3-15-2-def-1',
      type: 'definition',
      title: 'Les faux amis',
      content: `**Les faux amis** (falske venner) er ord i to ulike språk som har lignende form (ortografi eller uttale), men forskjellig betydning. De oppstår ofte fordi ordene har felles etymologisk opphav, men har utviklet seg i ulike retninger over tid.\n\nDet finnes to typer:\n- **Les faux amis complets** (fullstendige falske venner): Ordene har helt forskjellig betydning (*la monnaie* betyr «vekslepenger», ikke «mynt»)\n- **Les faux amis partiels** (delvise falske venner): Ordene deler én betydning, men har også andre, ulike betydninger (*la figure* kan bety «ansikt» på fransk, mens det på norsk primært betyr «figur»)`
    },
    {
      id: 'fransk-3-15-2-def-2',
      type: 'definition',
      title: 'Les pièges grammaticaux',
      content: `**Les pièges grammaticaux** (grammatiske feller) er systematiske forskjeller mellom to språks grammatikk som ofte fører til feil i oversettelse. De vanligste fellene mellom fransk og norsk inkluderer:\n\n- **Kjønn og artikler**: Norsk og fransk har ulike kjønn for mange substantiv (*le soleil* er hankjønn, men «sola» er hunkjønn på norsk)\n- **Preposisjonsbruk**: Fransk og norsk bruker ofte ulike preposisjoner (*penser à* = «å tenke på», ikke *penser sur*)\n- **Verbtider**: Fransk har flere fortidsformer enn norsk (passé composé, imparfait, plus-que-parfait, passé simple)\n- **Negasjon**: Fransk dobbel negasjon (*ne...pas, ne...jamais*) vs. norsk enkel negasjon`
    },
    {
      id: 'fransk-3-15-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Falske venner i kontekst',
      problem: `Identifiser den falske vennen og forklar feilen i følgende oversettelse:\n\n**Norsk original:** «Hun er veldig engasjert og deltar aktivt i samfunnsdebatten.»\n**Feil oversettelse:** «Elle est très engagée et assiste activement au débat public.»`,
      solution: `Den falske vennen er **assister à**, som betyr «å være til stede ved» eller «å overvære», IKKE «å delta aktivt i» (som er *participer à*).\n\nKorrekt oversettelse: «Elle est très engagée et **participe** activement au débat public.»\n\nMerk: *Assister à un concert* = å overvære en konsert (passivt), mens *participer à un débat* = å delta i en debatt (aktivt). Denne feilen skyldes påvirkning fra det norske «å assistere» og det engelske «to assist», som begge betyr «å hjelpe», men det franske *assister* har en helt annen hovedbetydning.`
    },
    {
      id: 'fransk-3-15-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Grammatiske feller med preposisjoner',
      problem: `Oversett følgende setninger til fransk. Vær spesielt oppmerksom på preposisjonsbruken:\n\n1. «Jeg tenker på deg.»\n2. «Hun er redd for edderkopper.»\n3. «Vi er avhengige av hverandre.»`,
      solution: `1. «Je pense **à** toi.» (IKKE *de* toi — *penser à* = tenke på noen, *penser de* = mene om noe/noen)\n\n2. «Elle a peur **des** araignées.» (*avoir peur de* = være redd for, med sammentrukket artikkel *des* = *de + les*)\n\n3. «Nous **dépendons** les uns des autres.» (*dépendre de* = være avhengig av)\n\nDisse preposisjonsfellene er vanskelige fordi norsk og fransk ofte bruker helt ulike preposisjoner med tilsvarende verb. Det er viktig å lære preposisjonen sammen med verbet som en fast enhet.`
    },
    {
      id: 'fransk-3-15-2-text-2',
      type: 'text',
      content: `### Flere viktige falske venner

Her er en utvidet liste over falske venner som er spesielt relevante for norske franskstudenter:

| Fransk | Virker som | Faktisk betydning | Norsk ekvivalent |
|---|---|---|---|
| la monnaie | «mynt» | vekslepenger / valuta | la pièce (de monnaie) = mynt |
| la figure | «figur» | ansikt | la silhouette / le personnage = figur |
| le travail | — | arbeid | — |
| travailler | «travle» | å arbeide | — |
| le coin | «coin» (eng.) | hjørne | — |
| la pièce | «piece» (eng.) | rom / mynt / teaterstykke | — |
| le regard | «regard» (eng.) | blikk | — |
| la chair | «chair» (eng.) | kjøtt/kjød | la chaise = stol |
| le préservatif | «preservativ» | kondom | le conservateur = konserveringsmiddel |
| la sympathie | «sympati» | vennlighet/vennligsinnethet | la compassion = medlidenhet |
| demander | «to demand» (eng.) | å spørre/be om | exiger = å kreve |
| attendre | «to attend» (eng.) | å vente | assister à = å overvære |

Disse ordene er spesielt farlige i skriftlig oversettelse der konteksten ikke alltid hjelper deg å oppdage feilen.`
    },
    {
      id: 'fransk-3-15-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: `Hva betyr det franske ordet «actuellement»?`,
        options: [
          { id: 'a', text: 'Faktisk / egentlig (som engelsk «actually»)', isCorrect: false },
          { id: 'b', text: 'Nåværende / for øyeblikket', isCorrect: true },
          { id: 'c', text: 'Aktuell / relevant', isCorrect: false },
          { id: 'd', text: 'Virkelig / i virkeligheten', isCorrect: false },
        ],
        solution: `Riktig svar er **B**. «Actuellement» betyr «for øyeblikket» eller «nåværende» — IKKE «faktisk» som det engelske «actually». For å si «faktisk» på fransk bruker man «en fait» eller «en réalité». Eksempel: «Actuellement, je travaille à Oslo» = «For øyeblikket jobber jeg i Oslo», IKKE «Faktisk jobber jeg i Oslo».`,
      }
    },
    {
      id: 'fransk-3-15-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: `Hvilken av følgende setninger inneholder en feil forårsaket av en falsk venn?`,
        options: [
          { id: 'a', text: '«Je suis allé à la librairie pour acheter un roman.» — Jeg gikk til bokhandelen for å kjøpe en roman.', isCorrect: false },
          { id: 'b', text: '«Il a demandé une augmentation de salaire.» — Han krevde lønnsøkning.', isCorrect: true },
          { id: 'c', text: '«Elle attend le bus depuis une heure.» — Hun har ventet på bussen i en time.', isCorrect: false },
          { id: 'd', text: '«Le journal publie les résultats.» — Avisen publiserer resultatene.', isCorrect: false },
        ],
        solution: `Riktig svar er **B**. Setningen «Il a demandé une augmentation» er korrekt fransk, men oversettelsen er feil. «Demander» betyr «å spørre om» eller «å be om», IKKE «å kreve». Korrekt oversettelse: «Han ba om lønnsøkning.» For å si «å kreve» på fransk bruker man «exiger»: «Il a exigé une augmentation.»`,
      }
    },
    {
      id: 'fransk-3-15-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Rett feilene i følgende oversettelser. Forklar hvilken falsk venn som har forårsaket feilen, og gi korrekt oversettelse.\n\n1. «Jeg kjøpte en billett på biblioteket.» → «J'ai acheté un billet à la librairie.»\n2. «Hun deltok på forelesningen.» → «Elle a participé au cours.»\n3. «Han er veldig sensibel for kritikk.» → «Il est très sensible aux critiques.»\n4. «Mynten er verdt mye.» → «La monnaie vaut beaucoup.»`,
        solution: `1. **Feil**: «la librairie» er brukt for «biblioteket», men *la librairie* betyr «bokhandel». **Korrekt**: «J'ai acheté un billet **à la bibliothèque**.»\n\n2. **Egentlig korrekt!** Her er det ingen feil. «Participer à» betyr nettopp «å delta på/i». Hadde man brukt «assister au cours», ville det betydd «å overvære forelesningen» (mer passivt). Begge kan brukes avhengig av kontekst.\n\n3. **Korrekt fransk, men potensielt falsk venn!** På fransk betyr «sensible» det samme som «følsom/sensitiv», så oversettelsen er riktig. Men merk: på norsk brukes «sensibel» ofte i betydningen «fornuftig» — for det bruker man «raisonnable» på fransk.\n\n4. **Feil**: «la monnaie» betyr «vekslepenger» eller «valuta», ikke «mynt» (enkeltmynt). **Korrekt**: «**La pièce de monnaie** vaut beaucoup.»`,
      }
    },
    {
      id: 'fransk-3-15-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en kort tekst (6–8 setninger) på fransk der du med vilje bruker minst fem av ordene fra listen over falske venner KORREKT. Understrék eller uthev de falske vennene i teksten din, og gi en norsk oversettelse under.\n\nVelg fra: actuellement, assister à, la librairie, demander, attendre, sensible, la figure, le journal, la monnaie, le regard`,
        solution: `Eksempel:\n\n«**Actuellement**, Marie travaille dans une **librairie** au centre-ville. Chaque matin, elle lit **le journal** en **attendant** les premiers clients. Hier, un homme au **regard** triste est entré et lui a **demandé** un livre sur la philosophie. Marie, qui est très **sensible**, a remarqué qu'il avait l'air malheureux. Elle a décidé de lui recommander un roman réconfortant.»\n\nNorsk oversettelse:\n«For øyeblikket jobber Marie i en bokhandel i sentrum. Hver morgen leser hun avisen mens hun venter på de første kundene. I går kom en mann med et trist blikk inn og spurte henne om en bok om filosofi. Marie, som er veldig følsom, la merke til at han virket ulykkelig. Hun bestemte seg for å anbefale ham en oppmuntrende roman.»`
      }
    },
    {
      id: 'fransk-3-15-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Hvilken av følgende setninger bruker preposisjonen korrekt?`,
        options: [
          { id: 'a', text: '«Je pense de toi tous les jours.» — Jeg tenker på deg hver dag.', isCorrect: false },
          { id: 'b', text: '«Elle joue du piano depuis dix ans.» — Hun har spilt piano i ti år.', isCorrect: true },
          { id: 'c', text: '«Il s\'intéresse pour la politique.» — Han interesserer seg for politikk.', isCorrect: false },
          { id: 'd', text: '«Nous dépendons à nos parents.» — Vi er avhengige av foreldrene våre.', isCorrect: false },
        ],
        solution: `Riktig svar er **B**. «Jouer du piano» (med *de* + bestemt artikkel) er korrekt for å spille et instrument.\n\nFeil i de andre:\n- A: «Penser **à** toi» (ikke *de*) = tenke på noen. *Penser de* = mene om.\n- C: «S'intéresser **à** la politique» (ikke *pour*) = interessere seg for.\n- D: «Dépendre **de** nos parents» (ikke *à*) = være avhengig av.`,
      }
    },
    {
      id: 'fransk-3-15-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

Falske venner og grammatiske feller er blant de største utfordringene i oversettelse mellom fransk og norsk. Her er de viktigste poengene:

**Falske venner:**
- Stol aldri blindt på ordlikhet mellom språk — sjekk alltid i ordboken
- Vær spesielt oppmerksom på engelsk–franske falske venner, da vi ofte bruker engelsk som mellomstasjon
- Lær de vanligste falske vennene utenat som faste vokabulærpar

**Grammatiske feller:**
- Lær franske verb med preposisjonene de styrer (*penser à*, *s'intéresser à*, *dépendre de*)
- Vær bevisst på at norsk og fransk har ulike kjønn for mange substantiv
- Husk at fransk bruker flere fortidsformer enn norsk — velg riktig form ut fra kontekst

Den beste strategien er å bygge opp en personlig liste over falske venner og grammatiske feller du støter på, og repetere dem jevnlig.`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'les faux amis (m.pl.)', definition: 'Falske venner — ord som ser like ut på to språk, men har ulik betydning' },
    { term: 'les faux amis complets', definition: 'Fullstendige falske venner — ordene har helt forskjellig betydning' },
    { term: 'les faux amis partiels', definition: 'Delvise falske venner — ordene deler noen, men ikke alle, betydninger' },
    { term: 'un piège linguistique', definition: 'En språklig felle — en systematisk feilkilde i oversettelse' },
    { term: 'un calque', definition: 'Et låneoversatt uttrykk — direkte overføring av en struktur fra et annet språk' },
    { term: "l'interférence linguistique (f)", definition: 'Språklig interferens — påvirkning fra morsmålet som fører til feil i målspråket' },
    { term: 'la préposition', definition: 'Preposisjon — styrende ord som angir forholdet mellom setningsledd' },
  ],
};

// ============================================================================
// Kapittel 15.3: La traduction littéraire
// ============================================================================

export const CHAPTER_FRANSK_3_15_3: TextbookChapter = {
  id: 'fransk-3-15-3',
  courseId: 'fransk-3',
  chapterNumber: '15.3',
  title: 'La traduction littéraire',
  subtitle: 'Litterær oversettelse',
  description: 'Utforsk utfordringene ved å oversette skjønnlitteratur mellom fransk og norsk, med vekt på stil, register, kulturell tilpasning og balansen mellom troskap og frihet.',
  estimatedMinutes: 55,
  competenceGoals: ['lese, analysere og tolke franskspråklig skjønnlitteratur og sakprosa', 'oversette og tolke tekster mellom fransk og norsk med bevissthet om språklige nyanser'],
  content: [
    {
      id: 'fransk-3-15-3-intro',
      type: 'text',
      content: `## La traduction littéraire — Litterær oversettelse

Litterær oversettelse er ofte kalt «oversetterkunstens krone». Å oversette en roman, et dikt eller et teaterstykke handler om langt mer enn å overføre informasjon — det handler om å gjenskape en kunstnerisk opplevelse i et nytt språk. Den italienske forfatteren Umberto Eco kalte oversettelse «å si nesten det samme».

Litterær oversettelse byr på unike utfordringer:

- **Le style** (stilen): Forfatteren har en unik stemme — rytme, ordvalg, setningsoppbygging
- **Le registre** (registeret): Er teksten formell, uformell, arkaisk, slangpreget?
- **L'adaptation culturelle** (kulturell tilpasning): Hvordan håndterer man kulturbundne referanser?
- **La fidélité vs la liberté** (troskap vs. frihet): Hvor nært skal man ligge originalen?

Den franske oversettelsestradisjonen har gjennom historien vekslet mellom to ytterpunkter: «les belles infidèles» (de vakre utro — elegante, men frie oversettelser) fra 1600-tallet, og den mer kildetro tilnærmingen fra romantikken og fremover.`
    },
    {
      id: 'fransk-3-15-3-def-1',
      type: 'definition',
      title: 'Le style et le registre',
      content: `**Le style** (stilen) i litterær oversettelse refererer til forfatterens unike måte å skrive på: ordvalg, setningslengde, bruk av bilder og metaforer, rytme og tempo. En god litterær oversetter må gjenkjenne og gjenskape disse elementene.\n\n**Le registre** (registeret/stilnivået) angir tekstens formalitetsgrad:\n- **Le registre soutenu** (høytidelig): Litterær, formell stil med komplekse setninger\n- **Le registre courant** (nøytral): Hverdagsspråk uten markerte trekk\n- **Le registre familier** (uformell): Avslappet dagligtale med slang og forkortelser\n- **Le registre vulgaire** (vulgær): Grovt, banneord, tabuord\n\nOversetteren må identifisere registeret i originalen og finne tilsvarende nivå i målspråket.`
    },
    {
      id: 'fransk-3-15-3-def-2',
      type: 'definition',
      title: "L'adaptation culturelle",
      content: `**L'adaptation culturelle** (kulturell tilpasning) innebærer å håndtere elementer i teksten som er spesifikke for kildekulturen og som kanskje ikke finnes eller ikke har samme betydning i målkulturen.\n\nStrategier for kulturell tilpasning:\n- **La domestication** (hjemliggjøring): Erstatte fremmede elementer med kjente fra målkulturen\n- **L'exotisation** (fremmedgjøring): Beholde fremmede elementer for å gi leseren et møte med kildekulturen\n- **L'explicitation** (eksplisitering): Legge til forklarende informasjon som leseren trenger\n- **La note du traducteur** (oversetterens fotnote): Forklare kulturbundne referanser i en fotnote\n\n*Eksempel:* Skal man oversette «un croissant» til «en kringle» (domestication) eller beholde «en croissant» (exotisation)?`
    },
    {
      id: 'fransk-3-15-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Stil og register i oversettelse',
      problem: `Sammenlign to oversettelser av den berømte åpningen av Albert Camus' «L'Étranger» (1942):\n\n**Original:** «Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas.»\n\n**Oversettelse A:** «I dag døde mor. Eller kanskje det var i går, jeg vet ikke.»\n**Oversettelse B:** «I dag har min mor gått bort. Eller muligens var det i går — det er jeg usikker på.»\n\nHvilken oversettelse gjenskaper stilen til Camus best? Begrunn svaret ditt.`,
      solution: `**Oversettelse A** er klart bedre som litterær oversettelse av Camus' stil.\n\nBegrunnelse:\n- **Korthet og enkelhet**: Camus' stil i «L'Étranger» er kjent for sine korte, nøkterne setninger. Oversettelse A beholder denne knappheten («I dag døde mor»), mens B er mer omstendelig.\n- **Register**: Camus bruker det hverdagslige «maman» (ikke det formelle «ma mère»), som gjenspeiles i det uformelle «mor» i A. Oversettelse B bruker «min mor», som er mer formelt.\n- **Emosjonell distanse**: Protagonisten Meursault er kjent for sin følelsesmessige likegyldighet. «jeg vet ikke» i A fanger denne flatheten bedre enn «det er jeg usikker på» i B.\n- **Rytme**: De korte, opphakkede setningene i A gjenspeiler originalens rytme.\n\nDette eksempelet viser hvorfor stil er viktigere enn «korrekthet» i litterær oversettelse.`
    },
    {
      id: 'fransk-3-15-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Kulturell tilpasning',
      problem: `I en fransk roman for ungdom står det:\n\n«Après le bac, Léa a décidé de faire une année sabbatique avant d'entrer en fac de droit. Ses parents, qui avaient toujours rêvé qu'elle intègre une grande école, étaient déçus.»\n\nHvordan ville du håndtere de kulturbundne uttrykkene «le bac», «une année sabbatique», «la fac de droit» og «une grande école» i en norsk oversettelse?`,
      solution: `Her er det flere kulturbundne uttrykk som krever ulike strategier:\n\n**Le bac** (le baccalauréat): Kan oversettes med «eksamen» eller «avgangseksamen». De fleste norske lesere vil forstå konseptet, selv om den franske versjonen er mer omfattende enn norsk eksamen.\n→ «Etter avgangseksamen» (domestication)\n\n**Une année sabbatique**: «Et friår» — dette konseptet finnes også i Norge.\n→ «å ta et friår» (direkte oversettelse fungerer)\n\n**La fac de droit**: «Juridisk fakultet» eller «jusstudiet».\n→ «å begynne på jusstudiet» (domestication)\n\n**Une grande école**: Dette er det vanskeligste. Frankrike har et unikt system der «les grandes écoles» (elitehøyskoler som ENA, Polytechnique, HEC) har høyere prestisje enn vanlige universiteter. Norge har ikke tilsvarende.\n→ Forslag: «en prestisjetung eliteskole» med eventuell fotnote (eksplisitering + fotnote)\n\nHel oversettelse: «Etter avgangseksamen bestemte Léa seg for å ta et friår før hun begynte på jusstudiet. Foreldrene hennes, som alltid hadde drømt om at hun skulle komme inn på en prestisjetung eliteskole*, var skuffet.»\n\n*Fotnote: I Frankrike er «les grandes écoles» svært selektive høyskoler med høyere prestisje enn vanlige universiteter.`
    },
    {
      id: 'fransk-3-15-3-text-2',
      type: 'text',
      content: `### Fidélité vs liberté — Troskap vs. frihet

Den evige debatten i oversettelsesteori handler om forholdet mellom troskap mot originalen og frihet til å skape en god tekst i målspråket. Denne debatten har vært sentral siden antikken.

**Argumenter for troskap (la fidélité):**
- Respekt for forfatterens intensjon og stemme
- Leseren får et autentisk møte med kildekulturen
- Oversetteren skal «tjene» teksten, ikke omskrive den

**Argumenter for frihet (la liberté):**
- En slavisk oversettelse kan gi et stivt, unaturlig resultat
- Målspråkets lesere fortjener en tekst som fungerer på egne premisser
- Noen ting lar seg rett og slett ikke oversette direkte

De fleste moderne oversettere velger en middelvei, der graden av troskap avhenger av teksttype:
- **Poesi**: Større frihet nødvendig for å bevare rytme, rim og klang
- **Prosa**: Middelvei mellom troskap og lesbarhet
- **Sakprosa/fagtekster**: Større troskap mot innhold og terminologi`
    },
    {
      id: 'fransk-3-15-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: `Hva mener man med begrepet «les belles infidèles» i oversettelsestradisjonen?`,
        options: [
          { id: 'a', text: 'Oversettelser som er vakre og poetiske, men som tar seg store friheter med originalen', isCorrect: true },
          { id: 'b', text: 'Oversettelser av kjærlighetsromaner som handler om utroskap', isCorrect: false },
          { id: 'c', text: 'Oversettelser som er trofaste mot originalen, men som mangler estetisk kvalitet', isCorrect: false },
          { id: 'd', text: 'Oversettelser gjort av kvinner i det franske hoffet på 1600-tallet', isCorrect: false },
        ],
        solution: `Riktig svar er **A**. «Les belles infidèles» (bokstavelig: «de vakre utro») er et begrep fra den franske oversettelsestradisjonen på 1600-tallet. Det refererer til oversettelser som prioriterer eleganse og lesbarhet i målspråket på bekostning av nøyaktighet overfor originalen. Uttrykket ble skapt av Gilles Ménage (1613–1692) som sammenlignet slike oversettelser med kvinner: «de er som kvinner — enten vakre eller trofaste, sjelden begge deler.»`,
      }
    },
    {
      id: 'fransk-3-15-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: `En oversetter velger å erstatte det franske uttrykket «manger une galette des Rois» med «spise julekake» i en norsk oversettelse. Hvilken strategi bruker oversetteren?`,
        options: [
          { id: 'a', text: "L'exotisation — oversetteren beholder det fremmede elementet", isCorrect: false },
          { id: 'b', text: "L'explicitation — oversetteren legger til en forklaring", isCorrect: false },
          { id: 'c', text: 'La domestication — oversetteren erstatter med et kjent norsk element', isCorrect: true },
          { id: 'd', text: 'La traduction littérale — oversetteren oversetter ordrett', isCorrect: false },
        ],
        solution: `Riktig svar er **C**. «La domestication» (hjemliggjøring) innebærer å erstatte et kulturbundet element med noe leseren kjenner fra sin egen kultur. «La galette des Rois» er en fransk tradisjonskake som spises på Helligtrekongersdag (6. januar), og oversetteren har erstattet den med «julekake» — en norsk tradisjonskake. Merk at dette innebærer et visst tap av kulturell informasjon, da «galette des Rois» og «julekake» hører til ulike tradisjoner.`,
      }
    },
    {
      id: 'fransk-3-15-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Oversett følgende utdrag fra Victor Hugos «Les Misérables» til norsk. Gjør to versjoner: én som prioriterer troskap (fidélité) og én som prioriterer frihet (liberté). Kommenter forskjellene mellom de to versjonene.\n\n«La suprême bonheur de la vie, c'est la conviction qu'on est aimé ; aimé pour soi-même, disons mieux, aimé malgré soi-même.»`,
        solution: `**Versjon A — Trofast (fidélité):**\n«Den høyeste lykke i livet er overbevisningen om at man er elsket; elsket for sin egen skyld, la oss si det bedre, elsket til tross for seg selv.»\n\nDenne versjonen følger originalens struktur tett: semikolon, den innstikket kommentaren «disons mieux», og repetisjonen av «aimé/elsket».\n\n**Versjon B — Fri (liberté):**\n«Livets største lykke er vissheten om å være elsket — elsket for den man er, eller rettere sagt: elsket på tross av den man er.»\n\nDenne versjonen omstrukturerer for flyt: tankestrek i stedet for semikolon, «la oss si det bedre» erstattet med «rettere sagt», og «malgré soi-même» gjort mer eksplisitt.\n\n**Kommentar:**\n- Versjon A beholder Hugos karakteristiske retoriske oppbygging med gjentakelser\n- Versjon B er mer idiomatisk norsk og lettere å lese\n- Versjon A bevarer den muntlige kvaliteten («disons mieux» = «la oss si det bedre»)\n- Versjon B moderniserer og strømlinjefør, noe som kan passe bedre for moderne lesere`
      }
    },
    {
      id: 'fransk-3-15-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du skal oversette følgende dialog fra en moderne fransk roman. Dialogen er i «registre familier» (uformelt register) med slang og forkortelser. Oversett til norsk og bevar det uformelle registeret.\n\n«— T'as vu le dernier film de Klapisch? C'était ouf, j'te jure!\n— Bof, c'était pas terrible. J'ai trouvé ça un peu naze, perso.\n— N'importe quoi! T'y connais rien au ciné, toi.\n— Arrête de me saouler avec ça. On se casse?»`,
        solution: `Forslag til oversettelse:\n\n«— Har du sett den siste filmen til Klapisch? Den var sinnsykt bra, altså!\n— Nææh, den var ikke noe spess. Synes den var litt teit, personlig.\n— Hva faen! Du skjønner jo ingenting om film.\n— Slutt å mase om det, a. Skal vi dra?»\n\n**Oversettelsesvalg:**\n- «T'as vu» (forkortelse av «Tu as vu») → «Har du sett» (norsk bruker ikke tilsvarende forkortelser i skrift, men kan kompensere med uformell tone)\n- «ouf» (verlan for «fou» = gal, brukt som «fantastisk») → «sinnsykt bra» (norsk slang)\n- «Bof» (uttrykk for likegyldighet) → «Nææh» (norsk interjeksjon)\n- «naze» (slang for dårlig/kjedelig) → «teit» (norsk uformelt)\n- «perso» (forkortelse for «personnellement») → «personlig»\n- «N'importe quoi» (tull/vrøvl) → «Hva faen!» (norsk uformelt utrop)\n- «me saouler» (slang: å plage/irritere) → «mase» (norsk uformelt)\n- «On se casse?» (slang: skal vi stikke?) → «Skal vi dra?»\n\nMerk: Registeret er bevart gjennom ordvalg og tone, selv om de spesifikke slanguttrykkene er forskjellige.`
      }
    },
    {
      id: 'fransk-3-15-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Oversett følgende dikt av Jacques Prévert til norsk. Forsøk å bevare rytme, stemning og billedspråk. Kommenter de vanskeligste valgene du måtte ta.\n\n*Déjeuner du matin*\n\nIl a mis le café\nDans la tasse\nIl a mis le lait\nDans la tasse de café\nIl a mis le sucre\nDans le café au lait\nAvec la petite cuiller\nIl a remué`,
        solution: `Forslag til oversettelse:\n\n*Frokost*\n\nHan helte kaffe\nI koppen\nHan helte melk\nI kaffekoppen\nHan la sukker\nI kaffe med melk\nMed den lille skjeen\nRørte han rundt\n\n**Kommentarer til oversettelsesvalg:**\n\n1. **Tittelen**: «Déjeuner du matin» betyr bokstavelig «morgenlunsj/morgenmåltid». «Frokost» er valgt fremfor «Morgenmåltid» for naturlighet og korthet.\n\n2. **«Il a mis»**: Gjentatt tre ganger i originalen. «Han helte» brukes for de to første (kaffe og melk i kopp), mens «Han la» brukes for sukkeret (man legger sukker, man heller ikke).\n\n3. **Rytme**: Prévert bruker korte, enkle setninger med repetisjon. Den norske versjonen forsøker å bevare dette med korte linjer og gjentatt struktur.\n\n4. **«La petite cuiller»**: «Den lille skjeen» beholder bildet av det intime, hverdagslige. «Teskje» ville vært mer presist, men mister adjektivet «petite/lille» som er viktig for stemningen.\n\n5. **Inversjon**: «Rørte han rundt» i stedet for «Han rørte rundt» — for å bevare den litt uvanlige rytmen Prévert skaper.`
      }
    },
    {
      id: 'fransk-3-15-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

Litterær oversettelse er en kompleks kunstform som krever:

- **Stilbevissthet**: Gjenkjenne og gjenskape forfatterens unike stemme — ordvalg, rytme, setningsstruktur
- **Registerforståelse**: Identifisere og matche formalitetsnivået fra kildespråket til målspråket
- **Kulturell kompetanse**: Håndtere kulturbundne referanser gjennom hjemliggjøring, fremmedgjøring, eksplisitering eller fotnoter
- **Balansekunst**: Finne riktig balanse mellom troskap mot originalen og naturlig uttrykksmåte i målspråket

Husk at det sjelden finnes én «riktig» oversettelse — ulike oversettere vil gjøre ulike valg, og alle kan forsvares så lenge de er bevisste og gjennomtenkte. Det viktigste er å kunne begrunne sine valg med referanse til oversettelsesteori.`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'le style', definition: 'Forfatterens unike uttrykksmåte — ordvalg, setningsstruktur, rytme' },
    { term: 'le registre', definition: 'Stilnivå/formalitetsgrad i en tekst (soutenu, courant, familier, vulgaire)' },
    { term: "l'adaptation culturelle (f)", definition: 'Kulturell tilpasning av kulturbundne elementer i oversettelse' },
    { term: 'la domestication', definition: 'Hjemliggjøring — erstatte fremmede elementer med kjente fra målkulturen' },
    { term: "l'exotisation (f)", definition: 'Fremmedgjøring — beholde fremmede elementer for kulturelt møte' },
    { term: 'la fidélité', definition: 'Troskap mot originalteksten i oversettelsen' },
    { term: 'les belles infidèles', definition: 'Elegante, men frie oversettelser — begrep fra 1600-tallets Frankrike' },
    { term: 'la note du traducteur', definition: 'Oversetterens fotnote — forklaring av kulturbundne referanser' },
  ],
};

// ============================================================================
// Kapittel 15.4: L'interprétation et la médiation culturelle
// ============================================================================

export const CHAPTER_FRANSK_3_15_4: TextbookChapter = {
  id: 'fransk-3-15-4',
  courseId: 'fransk-3',
  chapterNumber: '15.4',
  title: "L'interprétation et la médiation culturelle",
  subtitle: 'Tolking og kulturell mediering',
  description: 'Lær om ulike former for tolking (simultan og konsekutiv) og rollen som kulturell mediator i interkulturell kommunikasjon.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke fransk som kommunikasjonsspråk i ulike sammenhenger', 'reflektere over og beskrive likheter og forskjeller mellom fransk og andre språk'],
  content: [
    {
      id: 'fransk-3-15-4-intro',
      type: 'text',
      content: `## L'interprétation et la médiation culturelle — Tolking og kulturell mediering

Mens oversettelse handler om skriftlig tekst, handler **tolking** (*l'interprétation*) om muntlig kommunikasjon i sanntid. En tolk må ikke bare mestre to språk — hen må også tenke raskt, håndtere stress, og navigere kulturelle forskjeller i øyeblikket.

I tillegg til ren språklig overføring har tolken ofte en rolle som **kulturell mediator** (*médiateur culturel*): en som bygger broer mellom ulike kulturelle virkeligheter og hjelper partene å forstå hverandre ikke bare språklig, men også kulturelt.

### Former for tolking

| Type | Fransk | Beskrivelse |
|---|---|---|
| Simultantolking | l'interprétation simultanée | Tolken oversetter samtidig som taleren snakker |
| Konsekutiv tolking | l'interprétation consécutive | Tolken oversetter etter at taleren har fullført en sekvens |
| Hvisketolking | le chuchotage | Tolken hvisker oversettelsen til én person |
| Fjerntolking | l'interprétation à distance | Tolking via telefon eller video |
| Relaistolking | l'interprétation relais | Tolking via et tredje språk (f.eks. norsk → engelsk → fransk) |

La oss se nærmere på de to hovedformene og rollen som kulturell mediator.`
    },
    {
      id: 'fransk-3-15-4-def-1',
      type: 'definition',
      title: "L'interprétation simultanée et consécutive",
      content: `**L'interprétation simultanée** (simultantolking) er den mest krevende formen for tolking. Tolken sitter i en lydtett kabin og oversetter det som blir sagt i nesten sanntid, med bare noen sekunders forsinkelse («décalage»). Denne formen brukes i internasjonale organisasjoner som FN, EU og ved store konferanser.\n\nKrav: Tolken må kunne lytte, forstå, oversette og snakke *samtidig* — en ekstraordinær kognitiv prestasjon.\n\n**L'interprétation consécutive** (konsekutiv tolking) innebærer at tolken lytter til taleren i segmenter (vanligvis 3–7 minutter), tar notater, og deretter gjengir innholdet på målspråket. Denne formen brukes i møter, forhandlinger og rettssaker.\n\nKrav: Tolken må beherske notatteknikk (*la prise de notes*) og ha god hukommelse for å gjengi lange sekvenser presist.`
    },
    {
      id: 'fransk-3-15-4-def-2',
      type: 'definition',
      title: 'La médiation interculturelle',
      content: `**La médiation interculturelle** (interkulturell mediering) er prosessen der en person hjelper individer eller grupper fra ulike kulturelle bakgrunner å kommunisere effektivt og forstå hverandre.\n\nDen kulturelle mediatoren:\n- Forklarer kulturelle koder, normer og forventninger\n- Identifiserer og løser opp i misforståelser som skyldes kulturelle forskjeller\n- Tilpasser kommunikasjonsstilen til begge parters kulturelle kontekst\n- Fungerer som en nøytral bro mellom kulturene\n\nI en fransk–norsk kontekst kan dette innebære å forklare forskjeller i:\n- **Høflighetskonvensjoner**: Det franske *vouvoiement* (bruk av «vous») vs. norsk dukultur\n- **Forhandlingsstil**: Fransk indirekte kommunikasjon vs. norsk direkte kommunikasjon\n- **Sosiale koder**: Franske bise-hilsener, bordskikk, tidsoppfatning`
    },
    {
      id: 'fransk-3-15-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Konsekutiv tolking — notatteknikk',
      problem: `Du skal tolke følgende tale konsekutivt fra fransk til norsk. Les teksten, ta mentale notater av hovedelementene, og gjengi innholdet på norsk.\n\n«Mesdames et messieurs, je suis ravi de vous accueillir à cette conférence sur le développement durable. Aujourd'hui, nous allons aborder trois thèmes essentiels : premièrement, la transition énergétique en Europe ; deuxièmement, les défis de la biodiversité en milieu urbain ; et troisièmement, le rôle des jeunes dans la lutte contre le changement climatique. Je tiens à remercier nos partenaires norvégiens pour leur contribution exceptionnelle à ce projet.»`,
      solution: `**Norsk gjengivelse:**\n\n«Mine damer og herrer, det er en glede å ønske dere velkommen til denne konferansen om bærekraftig utvikling. I dag skal vi ta opp tre sentrale temaer: for det første, energiomstillingen i Europa; for det andre, utfordringene knyttet til biologisk mangfold i byområder; og for det tredje, ungdommens rolle i kampen mot klimaendringene. Jeg vil gjerne takke våre norske partnere for deres enestående bidrag til dette prosjektet.»\n\n**Notatteknikk — nøkkelelementer:**\n- Velkomst + konferanse om bærekraft\n- 3 temaer: (1) energiomstilling Europa, (2) biodiversitet by, (3) ungdom + klima\n- Takk til norske partnere\n\nMerk: I konsekutiv tolking er det viktig å fange strukturen (tre punkter) og nøkkelordene, ikke å huske hvert ord. Tolken bør gjengi meningen presist, men trenger ikke å bruke nøyaktig samme ordrekkefølge.`
    },
    {
      id: 'fransk-3-15-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Kulturell mediering i praksis',
      problem: `Tenk deg følgende situasjon: En norsk forretningskvinne (Kari) møter en fransk forretningsmann (Jean-Pierre) for første gang for å diskutere et samarbeidsprosjekt. Kari strekker ut hånden og sier «Hei, bare kall meg Kari!» på flytende fransk. Jean-Pierre virker litt overrasket.\n\nSom kulturell mediator, hvilke kulturelle forskjeller bør du være oppmerksom på, og hvordan ville du hjulpet begge parter?`,
      solution: `**Kulturelle forskjeller å være oppmerksom på:**\n\n1. **Tiltaleform (le tutoiement/vouvoiement)**:\n   - Kari bruker sannsynligvis «tu» (du-form) umiddelbart, noe som er naturlig i norsk kultur\n   - I fransk forretningskultur begynner man nesten alltid med «vous» (De-form) og går eventuelt over til «tu» etter at et forhold er etablert\n   - Jean-Pierre kan oppfatte den umiddelbare du-formen som mangel på respekt\n\n2. **Fornavn vs. etternavn**:\n   - «Bare kall meg Kari» er typisk norsk — fornavn brukes fra første stund\n   - I Frankrike er det vanlig å bruke «Monsieur/Madame + etternavn» i forretningssammenheng\n\n3. **Hilsemåte**:\n   - Håndtrykk er akseptabelt i forretningskontekst i begge kulturer\n   - Men i mer uformelle franske sammenhenger forventes «la bise» (kinnkyss)\n\n**Som mediator ville jeg:**\n- Forklare Kari (på forhånd eller diskret) at fransk forretningskultur er mer formell i starten\n- Forklare Jean-Pierre at nordmenn bruker fornavn og uformell tiltale som et tegn på likeverd, ikke mangel på respekt\n- Foreslå at Kari åpner med «Enchantée, Monsieur Dupont» og lar Jean-Pierre ta initiativet til å gå over til fornavn`
    },
    {
      id: 'fransk-3-15-4-text-2',
      type: 'text',
      content: `### Les compétences du médiateur culturel — Mediatorens kompetanser

En god kulturell mediator trenger mer enn bare språkferdigheter. Det europeiske rammeverket for språk (CEFR) har i sin oppdaterte versjon fra 2020 inkludert **mediasjon** som en egen språkferdighet, ved siden av lytting, lesing, skriving og muntlig produksjon.

**Nøkkelkompetanser for kulturell mediering:**

| Kompetanse | Fransk | Beskrivelse |
|---|---|---|
| Språklig presisjon | la précision linguistique | Nøyaktig overføring av innhold mellom språk |
| Kulturell sensitivitet | la sensibilité culturelle | Bevissthet om kulturelle normer og verdier |
| Nøytralitet | la neutralité | Evne til å forbli upartisk mellom partene |
| Tilpasningsevne | l'adaptabilité (f) | Evne til å justere stil og register etter situasjon |
| Empati | l'empathie (f) | Evne til å forstå begge parters perspektiv |
| Konflikthåndtering | la gestion des conflits | Evne til å dempe spenning og løse misforståelser |

I en verden med økende globalisering og kulturelt mangfold er behovet for kompetente kulturelle mediatorer større enn noensinne. Franskkunnskaper åpner dører til mange frankofone land og kulturer — fra Frankrike og Belgia til Canada, Vest-Afrika og Karibien.`
    },
    {
      id: 'fransk-3-15-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: `Hva er hovedforskjellen mellom simultantolking og konsekutiv tolking?`,
        options: [
          { id: 'a', text: 'Simultantolking brukes bare i rettssaker, mens konsekutiv tolking brukes i konferanser', isCorrect: false },
          { id: 'b', text: 'Ved simultantolking oversetter tolken i sanntid mens taleren snakker, mens ved konsekutiv tolking venter tolken til taleren er ferdig med en sekvens', isCorrect: true },
          { id: 'c', text: 'Simultantolking er skriftlig, mens konsekutiv tolking er muntlig', isCorrect: false },
          { id: 'd', text: 'Konsekutiv tolking er mer krevende enn simultantolking fordi tolken må huske mer', isCorrect: false },
        ],
        solution: `Riktig svar er **B**. Ved simultantolking (*l'interprétation simultanée*) oversetter tolken nesten i sanntid med bare noen sekunders forsinkelse, mens taleren fortsetter å snakke. Ved konsekutiv tolking (*l'interprétation consécutive*) lytter tolken til en sekvens (typisk 3–7 minutter), tar notater, og gjengir deretter innholdet på målspråket. Begge former er kognitivt svært krevende, men på ulike måter.`,
      }
    },
    {
      id: 'fransk-3-15-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: `En norsk student sier «Vous avez tort!» (De tar feil!) til en fransk professor under en debatt. Hvorfor kan dette oppfattes som uhøflig i Frankrike, selv om det er faglig korrekt?`,
        options: [
          { id: 'a', text: 'Fordi man aldri skal si imot en professor i Frankrike', isCorrect: false },
          { id: 'b', text: 'Fordi «avoir tort» er et vulgært uttrykk på fransk', isCorrect: false },
          { id: 'c', text: 'Fordi den direkte konfrontasjonen bryter med den franske normen om å formulere uenighet indirekte og høflig', isCorrect: true },
          { id: 'd', text: 'Fordi man burde brukt «tu» i stedet for «vous» i en debatt', isCorrect: false },
        ],
        solution: `Riktig svar er **C**. I fransk kommunikasjonskultur, spesielt i akademiske og formelle sammenhenger, formuleres uenighet ofte mer indirekte enn i norsk kultur. En nordmann som er vant til den norske likhetstanken og direkte kommunikasjonsstil, kan virke konfronterende. En mer diplomatisk formulering ville vært: «Je comprends votre point de vue, mais permettez-moi de nuancer...» (Jeg forstår Deres synspunkt, men tillat meg å nyansere...) eller «Je ne suis pas tout à fait d'accord, car...» (Jeg er ikke helt enig, fordi...).`,
      }
    },
    {
      id: 'fransk-3-15-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Du er tolk i et forretningsm møte mellom et norsk og et fransk firma. Den franske delegasjonen sier:\n\n«Nous sommes tout à fait d'accord sur le principe. Cependant, il faudrait peut-être revoir certains détails du contrat. Il serait souhaitable de prendre un peu plus de temps pour réfléchir aux modalités.»\n\n1. Oversett utsagnet til norsk.\n2. Forklar hva den franske delegasjonen egentlig sier «mellom linjene».\n3. Hvordan ville du som kulturell mediator forklart dette til den norske delegasjonen?`,
        solution: `**1. Oversettelse:**\n«Vi er helt enige i prinsippet. Imidlertid burde man kanskje se nærmere på visse detaljer i kontrakten. Det ville vært ønskelig å ta litt mer tid til å tenke over vilkårene.»\n\n**2. Hva sies «mellom linjene»:**\nDen franske delegasjonen er sannsynligvis IKKE enig, men uttrykker sin uenighet på en indirekte, diplomatisk måte. Uttrykk som «tout à fait d'accord sur le principe» (enig i prinsippet), «cependant» (imidlertid), «peut-être» (kanskje) og «il serait souhaitable» (det ville vært ønskelig) er typiske franske dempere som signaliserer at det er vesentlige innvendinger.\n\n**3. Kulturell mediering:**\nTil den norske delegasjonen ville jeg sagt (utenfor møterommet):\n«Den franske siden har signifikante bekymringer om kontrakten. I fransk forretningskultur uttrykkes uenighet ofte mer indirekte enn i Norge. Når de sier at de er 'enige i prinsippet', men ønsker å 'se nærmere på detaljene', betyr det at de ønsker å reforhandle viktige punkter. Jeg anbefaler at dere spør konkret hvilke detaljer de ønsker å diskutere.»`
      }
    },
    {
      id: 'fransk-3-15-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Simuler konsekutiv tolking. Les følgende franske tekst nøye én gang, lukk øynene, og skriv en norsk gjengivelse basert på hukommelsen. Sammenlign deretter med originalen.\n\n«Le système éducatif français diffère considérablement du système norvégien. En France, les élèves passent le baccalauréat à la fin du lycée, un examen national qui détermine leur accès à l'enseignement supérieur. Le système est très centralisé, avec des programmes nationaux identiques dans tout le pays. En Norvège, par contre, le système est plus décentralisé et met davantage l'accent sur l'autonomie des élèves et l'apprentissage par la pratique. Une autre différence majeure est la hiérarchie dans la relation professeur-élève, qui est beaucoup plus marquée en France qu'en Norvège.»\n\nEtter at du har gjengitt teksten, reflekter over: Hva husket du best? Hva glemte du? Hva forteller dette om tolkens utfordringer?`,
        solution: `**Forventet gjengivelse (hovedelementer):**\n\n«Det franske utdanningssystemet skiller seg vesentlig fra det norske. I Frankrike tar elevene en nasjonal avgangseksamen, baccalauréat, ved slutten av videregående. Denne eksamen avgjør adgangen til høyere utdanning. Systemet er svært sentralisert, med identiske nasjonale læreplaner over hele landet. I Norge er systemet derimot mer desentralisert, med større vekt på elevenes selvstendighet og læring gjennom praksis. En annen viktig forskjell er hierarkiet i forholdet mellom lærer og elev, som er mye mer markert i Frankrike enn i Norge.»\n\n**Refleksjon over tolkeutfordringer:**\n- **Struktur huskes best**: De fleste vil huske at teksten handler om forskjeller mellom fransk og norsk utdanning, og at det er tre hovedpoeng.\n- **Detaljer kan gå tapt**: Spesifikke ord som «centralisé», «autonomie», «apprentissage par la pratique» kan erstattes med omskrivinger.\n- **Notatteknikk er avgjørende**: Profesjonelle tolker bruker symboler og forkortelser for å fange nøkkelpunkter raskt.\n- **Kognitivt krevende**: Å lytte, forstå, huske OG formulere samtidig er en ekstraordinær mental oppgave.\n- **Nøyaktighet vs. fullstendighet**: Det er viktigere å gjengi de sentrale poengene korrekt enn å forsøke å huske hvert ord.`
      }
    },
    {
      id: 'fransk-3-15-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `I CEFR-rammeverkets oppdaterte versjon er «mediasjon» lagt til som egen språkferdighet. Hvilken av følgende situasjoner er det beste eksempelet på språklig mediasjon?`,
        options: [
          { id: 'a', text: 'En student leser en fransk artikkel og skriver et sammendrag på norsk for medstudentene sine', isCorrect: true },
          { id: 'b', text: 'En student øver på fransk uttale foran speilet', isCorrect: false },
          { id: 'c', text: 'En student leser en fransk roman og svarer på forståelsesspørsmål på fransk', isCorrect: false },
          { id: 'd', text: 'En student skriver en stil på fransk om sitt siste feriemål', isCorrect: false },
        ],
        solution: `Riktig svar er **A**. Mediasjon i CEFR-sammenheng innebærer å gjøre informasjon tilgjengelig for andre — å bygge bro mellom språk, kulturer eller kunnskapsnivåer. Å lese en fransk artikkel og skrive et norsk sammendrag for medstudenter er et klassisk eksempel: studenten må forstå kildeteksten, identifisere de viktigste poengene, og formidle dem på en tilgjengelig måte på et annet språk. De andre alternativene er eksempler på individuelle ferdigheter (uttale, lesing, skriving), ikke mediasjon mellom parter.`,
      }
    },
    {
      id: 'fransk-3-15-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-15-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et rollespill-scenario (8–10 replikker) der en norsk turist (som snakker litt fransk) forsøker å forklare til en fransk lege at hen har en allergisk reaksjon. En kulturell mediator (tolk) hjelper med kommunikasjonen.\n\nInkluder:\n- Minst to kulturelle misforståelser som mediatoren må løse\n- Mediatorens kommentarer (i parentes) som forklarer de kulturelle aspektene\n- Replikker på både fransk og norsk`,
        solution: `**Scenario: Hos legen i Nice**\n\n**Turisten (på gebrokkent fransk):** «Bonjour, docteur... je suis... eh... malade. Ma peau est rouge et... ça gratte beaucoup.» (Hei, doktor... jeg er... eh... syk. Huden min er rød og... det klør mye.)\n\n**Legen:** «Bonjour, Madame. Asseyez-vous, je vous en prie. Depuis quand avez-vous ces symptômes?» (God dag, frue. Vær så god, sett deg. Hvor lenge har du hatt disse symptomene?)\n\n*(Mediator, til turisten: «Legen bruker De-form, det er standard høflighet i Frankrike, selv om dere er på samme alder. Ikke ta det som avstand.»)*\n\n**Turisten (på norsk, til mediatoren):** «Kan du si at det begynte etter at jeg spiste noe med sjømat til lunsj? Og at jeg har en epipen i vesken min.»\n\n**Mediatoren (til legen):** «Elle a commencé à avoir ces symptômes après avoir mangé des fruits de mer au déjeuner. Elle a un stylo d'adrénaline dans son sac.»\n\n**Legen:** «C'est probablement une réaction allergique. Je vais vous prescrire des antihistaminiques. Vous pouvez prendre rendez-vous avec un allergologue la semaine prochaine.»\n\n**Turisten (på norsk):** «Ok, men jeg reiser hjem på fredag. Kan jeg bare gå til en spesialist uten henvisning? I Norge kan man det.»\n\n*(Mediator, til turisten: «I Frankrike trenger man vanligvis en henvisning fra fastlegen for å gå til spesialist. Systemet er annerledes enn i Norge. Legen skriver en 'ordonnance' som du trenger for å hente medisiner på apoteket — i Frankrike får du ikke reseptbelagte medisiner uten dette.»)*\n\n**Mediatoren (til legen):** «Elle repart en Norvège vendredi. Serait-il possible d'avoir une lettre pour son médecin traitant en Norvège, avec vos recommandations?»\n\n**Legen:** «Bien sûr, je vais préparer un courrier. N'oubliez pas de passer à la pharmacie avec l'ordonnance.»\n\n*(Mediator, til turisten: «Han skriver et brev til fastlegen din i Norge med anbefalingene sine. Husk å gå innom apoteket med resepten — i Frankrike er apoteket alltid merket med et grønt kors, og farmaseuten kan gi deg mye veiledning.»)*\n\n**Kulturelle misforståelser løst:**\n1. De-form/du-form: Turisten kunne tolket legens «vous» som kaldhet\n2. Henvisningssystemet: Norsk direkteadgang til spesialist vs. fransk henvisningskrav`
      }
    },
    {
      id: 'fransk-3-15-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket to viktige aspekter ved språklig formidling:

**Tolking:**
- **Simultantolking** krever evnen til å lytte, forstå, oversette og snakke samtidig
- **Konsekutiv tolking** krever god notatteknikk og hukommelse for å gjengi lengre sekvenser
- Begge former krever ikke bare språkkunnskaper, men også fagkunnskap, stressmestring og etisk bevissthet

**Kulturell mediering:**
- En kulturell mediator bygger broer mellom kulturer, ikke bare mellom språk
- Viktige kompetanser: kulturell sensitivitet, nøytralitet, empati og tilpasningsevne
- Fransk–norske kulturforskjeller inkluderer tiltaleformer, kommunikasjonsstil og sosiale koder

CEFR-rammeverket anerkjenner mediasjon som en egen språkferdighet — evnen til å gjøre informasjon og kommunikasjon tilgjengelig for andre på tvers av språk og kulturer. Denne ferdigheten er stadig viktigere i en globalisert verden.`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: "l'interprétation simultanée (f)", definition: 'Simultantolking — tolken oversetter i sanntid mens taleren snakker' },
    { term: "l'interprétation consécutive (f)", definition: 'Konsekutiv tolking — tolken gjengir innholdet etter at taleren har fullført en sekvens' },
    { term: 'le chuchotage', definition: 'Hvisketolking — tolken hvisker oversettelsen til én person' },
    { term: 'la médiation interculturelle', definition: 'Interkulturell mediering — å hjelpe parter fra ulike kulturer å forstå hverandre' },
    { term: 'le vouvoiement', definition: 'Bruk av De-formen «vous» som høflighetsform i fransk' },
    { term: 'le tutoiement', definition: 'Bruk av du-formen «tu» som uformell tiltaleform i fransk' },
    { term: 'le décalage', definition: 'Tidsforskyvningen mellom taler og tolk i simultantolking' },
    { term: 'la prise de notes', definition: 'Notatteknikk — systematisk notering av nøkkelpunkter under konsekutiv tolking' },
  ],
};

// ============================================================================
// KAPITTEL 16: Révision avancée et examen final
// ============================================================================

// --- 16.1: Révision grammaticale avancée ---
export const CHAPTER_FRANSK_3_16_1: TextbookChapter = {
  id: 'fransk-3-16-1',
  courseId: 'fransk-3',
  chapterNumber: '16.1',
  title: 'Révision grammaticale avancée',
  subtitle: 'Avansert grammatikkrepetisjon',
  description: 'Repeter avansert grammatikk: subjonctif passé, conditionnel passé, plus-que-parfait du subjonctif, tempusharmoni og indirekte tale.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke et bredt repertoar av språklige virkemidler og avanserte språkstrukturer'],
  content: [
    {
      id: 'fransk-3-16-1-intro',
      type: 'text',
      content: `## Révision grammaticale avancée — Avansert grammatikkrepetisjon

Når man nærmer seg et avansert nivå i fransk (B2–C1), er det avgjørende å beherske de mest komplekse grammatiske strukturene. Mange av disse er sjeldne i dagligtalen, men essensielle i skriftlig fransk, litteratur og formelle sammenhenger.

I dette kapittelet repeterer vi de vanskeligste grammatiske punktene og fokuserer på typiske feil som norske franskstudenter gjør. Vi gjennomgår avanserte verbformer, tempusharmoni (la concordance des temps) og komplekse setningsstrukturer.

| Fransk | Norsk |
|--------|-------|
| le subjonctif passé | konjunktiv fortid |
| le conditionnel passé | kondisjonalis fortid |
| le plus-que-parfait du subjonctif | konjunktiv pluskvamperfektum |
| la concordance des temps | tempusharmoni |
| le discours indirect | indirekte tale |
| les propositions relatives complexes | komplekse relativsetninger |
| la voix passive | passiv form |
| le gérondif | gerundium (ved å + infinitiv) |`
    },
    {
      id: 'fransk-3-16-1-def-1',
      type: 'definition',
      title: 'Le subjonctif passé',
      content: `**Le subjonctif passé** (konjunktiv fortid) brukes for å uttrykke en handling som er avsluttet *før* handlingen i hovedsetningen. Det dannes med **subjonctif av avoir/être + partisipp perfektum**.

*Formel:* que j'aie parlé / que je sois allé(e)

*Bruk:* Etter uttrykk som krever subjonctif, når handlingen i leddsetningen skjedde *før* handlingen i hovedsetningen:
- «Je suis content **qu'il ait réussi** son examen.» (Jeg er glad for at han besto eksamenen sin — bestått *før* gleden.)
- «Il est possible **qu'elle soit déjà partie**.» (Det er mulig at hun allerede har dratt.)

**Typisk feil:** Norske studenter bruker ofte subjonctif présent i stedet for subjonctif passé. Husk: hvis handlingen i leddsetningen er avsluttet, bruk subjonctif passé.`
    },
    {
      id: 'fransk-3-16-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Subjonctif présent vs. subjonctif passé',
      problem: `Velg riktig form (subjonctif présent eller subjonctif passé) i følgende setninger:

1. Je doute qu'il (comprendre) ________ cette leçon hier.
2. Il faut que tu (finir) ________ tes devoirs avant demain.
3. Nous regrettons qu'ils (ne pas pouvoir) ________ venir à la fête la semaine dernière.
4. Il est important que vous (lire) ________ ce livre avant l'examen.`,
      solution: `1. **Je doute qu'il ait compris cette leçon hier.** → Subjonctif passé, fordi handlingen (å forstå leksjonen) skjedde i fortiden (*hier*).

2. **Il faut que tu finisses tes devoirs avant demain.** → Subjonctif présent, fordi handlingen (å gjøre lekser) ennå ikke er fullført.

3. **Nous regrettons qu'ils n'aient pas pu venir à la fête la semaine dernière.** → Subjonctif passé, fordi handlingen (å ikke kunne komme) skjedde i fortiden (*la semaine dernière*).

4. **Il est important que vous lisiez / ayez lu ce livre avant l'examen.** → Begge kan fungere: subjonctif présent (*lisiez*) fokuserer på selve leseprosessen, mens subjonctif passé (*ayez lu*) understreker at lesingen skal være fullført *før* eksamenen.`
    },
    {
      id: 'fransk-3-16-1-def-2',
      type: 'definition',
      title: 'Le conditionnel passé',
      content: `**Le conditionnel passé** (kondisjonalis fortid) brukes for å uttrykke:
1. **Urealiserte handlinger i fortiden**: Noe som *kunne ha* skjedd, men ikke skjedde
2. **Beklagelser**: Noe man *burde ha* gjort
3. **Hypotetiske situasjoner i fortiden**: I setninger med «si» + plus-que-parfait

*Formel:* conditionnel av avoir/être + partisipp perfektum
- j'aurais parlé, je serais allé(e)

*Eksempler:*
- «Si j'avais su, **j'aurais agi** autrement.» (Hvis jeg hadde visst, ville jeg ha handlet annerledes.)
- «Tu **aurais dû** me prévenir.» (Du burde ha varslet meg.)
- «Il **serait venu**, mais il était malade.» (Han ville ha kommet, men han var syk.)

**Typisk feil:** Norske studenter blander ofte conditionnel présent og conditionnel passé. Husk: conditionnel passé refererer alltid til en urealisert fortidshandling.`
    },
    {
      id: 'fransk-3-16-1-example-2',
      type: 'example',
      title: 'Eksempel 2: La concordance des temps — Indirekte tale',
      problem: `Gjør om følgende setninger fra direkte til indirekte tale. Husk tempusharmoni (la concordance des temps):

1. Marie a dit : « Je suis fatiguée. »
2. Pierre a annoncé : « Nous partirons demain. »
3. Le professeur a expliqué : « Les élèves ont bien travaillé. »
4. Elle a demandé : « Est-ce que tu viendras à la fête ? »`,
      solution: `1. **Marie a dit qu'elle était fatiguée.**
(présent → imparfait: *suis* → *était*)

2. **Pierre a annoncé qu'ils partiraient le lendemain.**
(futur simple → conditionnel présent: *partirons* → *partiraient*; *demain* → *le lendemain*)

3. **Le professeur a expliqué que les élèves avaient bien travaillé.**
(passé composé → plus-que-parfait: *ont travaillé* → *avaient travaillé*)

4. **Elle a demandé s'il viendrait à la fête.**
(futur simple → conditionnel présent: *viendras* → *viendrait*; «est-ce que» → *si*)

**Regler for tempusharmoni i indirekte tale:**
| Direkte tale | Indirekte tale |
|---|---|
| Présent | → Imparfait |
| Passé composé | → Plus-que-parfait |
| Futur simple | → Conditionnel présent |
| Futur antérieur | → Conditionnel passé |`
    },
    {
      id: 'fransk-3-16-1-def-3',
      type: 'definition',
      title: 'Les propositions relatives complexes',
      content: `**Les propositions relatives complexes** (komplekse relativsetninger) bruker andre relativpronomen enn de vanlige *qui* og *que*:

- **dont** — «som/hvis/av hvem»: erstatter *de + noe*
  - «Le livre **dont** je t'ai parlé.» (Boken som jeg fortalte deg om.)
- **où** — «der/da»: refererer til sted eller tid
  - «La ville **où** je suis né.» (Byen der jeg ble født.)
  - «Le jour **où** nous nous sommes rencontrés.» (Dagen da vi møttes.)
- **lequel / laquelle / lesquels / lesquelles** — «som/hvilken»: etter preposisjoner
  - «La raison **pour laquelle** il est parti.» (Grunnen til at han dro.)
  - «Les outils **avec lesquels** il travaille.» (Verktøyene som han arbeider med.)

**Typisk feil:** Norske studenter overbruker *que* der *dont* eller *lequel* er påkrevd. Husk: bruk *dont* når det franske verbet krever preposisjonen *de*, og *lequel* etter andre preposisjoner.`
    },
    {
      id: 'fransk-3-16-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken setning bruker subjonctif passé korrekt?',
        options: [
          { id: 'a', text: 'Je suis heureux qu\'il vienne demain.', isCorrect: false },
          { id: 'b', text: 'Je suis heureux qu\'il soit venu hier.', isCorrect: true },
          { id: 'c', text: 'Je suis heureux qu\'il a venu hier.', isCorrect: false },
          { id: 'd', text: 'Je suis heureux qu\'il venait hier.', isCorrect: false },
        ],
        solution: 'Riktig svar er **B**. «Qu\'il soit venu» er subjonctif passé av *venir* (être + partisipp). Handlingen (å komme) skjedde i fortiden (*hier*), og uttrykket «je suis heureux que» krever subjonctif. Alternativ A er subjonctif présent (korrekt for fremtid), C bruker feil hjelpeverb og mangler subjonctif, og D bruker imparfait i stedet for subjonctif.',
      }
    },
    {
      id: 'fransk-3-16-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Gjør om til indirekte tale med korrekt tempusharmoni: Il a dit : « Je partirai demain. »',
        options: [
          { id: 'a', text: 'Il a dit qu\'il partira demain.', isCorrect: false },
          { id: 'b', text: 'Il a dit qu\'il partirait le lendemain.', isCorrect: true },
          { id: 'c', text: 'Il a dit qu\'il est parti le lendemain.', isCorrect: false },
          { id: 'd', text: 'Il a dit qu\'il parte le lendemain.', isCorrect: false },
        ],
        solution: 'Riktig svar er **B**. I indirekte tale etter et innledende verb i fortid gjelder tempusharmoni: futur simple (*partirai*) blir conditionnel présent (*partirait*), og tidsuttrykket *demain* blir *le lendemain*. Alternativ A mangler tempusharmoni, C bruker feil tempus, og D bruker subjonctif uten grunn.',
      }
    },
    {
      id: 'fransk-3-16-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilket relativpronomen mangler? «C\'est le film ______ je t\'ai parlé.»',
        options: [
          { id: 'a', text: 'que', isCorrect: false },
          { id: 'b', text: 'qui', isCorrect: false },
          { id: 'c', text: 'dont', isCorrect: true },
          { id: 'd', text: 'lequel', isCorrect: false },
        ],
        solution: 'Riktig svar er **C**. Verbet *parler de quelque chose* krever preposisjonen *de*. Når relativsetningen refererer til et objekt for et verb med *de*, bruker vi *dont*: «le film dont je t\'ai parlé» = filmen som jeg har snakket med deg om (= *j\'ai parlé de ce film*). *Que* brukes for direkte objekt, *qui* for subjekt, og *lequel* etter andre preposisjoner.',
      }
    },
    {
      id: 'fransk-3-16-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Oversett følgende setninger til fransk. Bruk de avanserte grammatiske strukturene vi har gjennomgått (subjonctif passé, conditionnel passé, indirekte tale, komplekse relativpronomen):

1. Jeg er lei meg for at de ikke kunne komme i går.
2. Hvis vi hadde visst det, ville vi ha handlet annerledes.
3. Han fortalte meg at han hadde lest boken som jeg anbefalte.
4. Byen der jeg vokste opp har forandret seg mye.
5. Det er grunnen til at hun valgte å studere i Frankrike.`,
        solution: `1. **Je suis désolé(e) qu'ils n'aient pas pu venir hier.** (Subjonctif passé: *aient pu* fordi handlingen er avsluttet i fortiden.)

2. **Si nous l'avions su, nous aurions agi autrement.** (Conditionnel passé: *si* + plus-que-parfait → conditionnel passé.)

3. **Il m'a dit qu'il avait lu le livre que je lui avais recommandé.** (Indirekte tale med dobbel tempusharmoni: passé composé → plus-que-parfait.)

4. **La ville où j'ai grandi a beaucoup changé.** (Relativpronomen *où* for sted.)

5. **C'est la raison pour laquelle elle a choisi d'étudier en France.** (Sammensatt relativpronomen *pour laquelle* etter preposisjon.)`,
      }
    },
    {
      id: 'fransk-3-16-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Rett feilene i følgende setninger. Hver setning inneholder én eller flere grammatiske feil som er typiske for norske franskstudenter:

1. «Si j'aurais su, je serais venu.»
2. «Je doute qu'il comprend la situation.»
3. «C'est la personne que je t'ai parlé.»
4. «Elle a dit que elle partira demain.»
5. «Le livre que j'ai besoin est sur la table.»`,
        solution: `1. **Si j'avais su, je serais venu.** — Etter *si* bruker man aldri conditionnel. Regelen er: *si* + plus-que-parfait, *ikke* si + conditionnel passé. (Typisk feil: norsk «hvis jeg ville ha visst» oversettes direkte.)

2. **Je doute qu'il comprenne la situation.** — *Douter que* krever subjonctif, ikke indikativ. *Comprenne* er subjonctif présent av *comprendre*.

3. **C'est la personne dont je t'ai parlé.** — *Parler de quelqu'un* krever *dont*, ikke *que*. (Typisk feil: norsk «personen som» oversettes som *que* uansett.)

4. **Elle a dit qu'elle partirait le lendemain.** — To feil: *que + elle* trekkes sammen til *qu'elle* (elisjon), og tempusharmoni krever conditionnel présent (*partirait*) i stedet for futur simple (*partira*), samt *le lendemain* i stedet for *demain*.

5. **Le livre dont j'ai besoin est sur la table.** — *Avoir besoin de quelque chose* krever *dont*, ikke *que*. (Typisk feil: norsk «som jeg trenger» blir oversatt med *que*.)`,
      }
    },
    {
      id: 'fransk-3-16-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi repetert de mest avanserte grammatiske strukturene i fransk:

**Avanserte verbformer:**
- **Le subjonctif passé**: Brukes for avsluttede handlinger i subjonctif-kontekster (que j'aie fait, que je sois allé)
- **Le conditionnel passé**: Uttrykker urealiserte handlinger i fortiden (j'aurais fait) og brukes i hypotetiske si-setninger

**Tempusharmoni (la concordance des temps):**
- I indirekte tale etter et innledende verb i fortid forskyves alle tempus ett steg bakover
- Présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel

**Komplekse relativpronomen:**
- *dont* — etter verb med *de* (parler de, avoir besoin de)
- *où* — for sted og tid
- *lequel/laquelle/lesquels/lesquelles* — etter preposisjoner

**Vanlige feil å unngå:**
- Aldri conditionnel etter *si*
- Husk subjonctif etter uttrykk som krever det
- Bruk *dont* og ikke *que* etter verb med *de*`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'le subjonctif passé', definition: 'Konjunktiv fortid — brukes for avsluttede handlinger i kontekster som krever subjonctif' },
    { term: 'le conditionnel passé', definition: 'Kondisjonalis fortid — uttrykker urealiserte handlinger i fortiden (j\'aurais fait)' },
    { term: 'la concordance des temps', definition: 'Tempusharmoni — regelen om at tempus i leddsetningen tilpasses tempus i hovedsetningen' },
    { term: 'le discours indirect', definition: 'Indirekte tale — gjengivelse av noens ord uten direkte sitering' },
    { term: 'les propositions relatives', definition: 'Relativsetninger — leddsetninger innledet av qui, que, dont, où, lequel' },
    { term: 'le plus-que-parfait', definition: 'Pluskvamperfektum — uttrykker en handling som skjedde før en annen fortidshandling' },
    { term: 'le gérondif', definition: 'Gerundium — dannes med en + partisipp presens (en parlant = mens man snakker)' },
    { term: "l'élision (f)", definition: 'Elisjon — bortfall av vokal foran en annen vokal (que + elle → qu\'elle)' },
  ],
};

// --- 16.2: Techniques de rédaction avancée ---
export const CHAPTER_FRANSK_3_16_2: TextbookChapter = {
  id: 'fransk-3-16-2',
  courseId: 'fransk-3',
  chapterNumber: '16.2',
  title: 'Techniques de rédaction avancée',
  subtitle: 'Avanserte skriveteknikker',
  description: 'Lær akademisk skriving på fransk: dissertation, commentaire composé, avanserte konnektorer og argumentasjonsteknikker.',
  estimatedMinutes: 55,
  competenceGoals: ['skrive sammenhengende, nyanserte tekster i ulike sjangre'],
  content: [
    {
      id: 'fransk-3-16-2-intro',
      type: 'text',
      content: `## Techniques de rédaction avancée — Avanserte skriveteknikker

Akademisk skriving på fransk følger svært strukturerte konvensjoner som skiller seg fra norske skrivetradisjoner. To av de viktigste sjangrene i det franske utdanningssystemet er **la dissertation** (det franske essayet) og **le commentaire composé** (litterær tekstanalyse). Å beherske disse sjangrene er avgjørende for å lykkes i franskstudier og på eksamen.

I dette kapittelet gjennomgår vi oppbygningen av disse sjangrene, avanserte konnektorer for logisk argumentasjon, og teknikker for å formulere presise og nyanserte tekster.

| Fransk | Norsk |
|--------|-------|
| la dissertation | det franske essayet / avhandlingen |
| le commentaire composé | den strukturerte tekstanalysen |
| la problématique | problemstillingen |
| le plan dialectique | den dialektiske planen (tese–antitese–syntese) |
| la transition | overgangen (mellom avsnitt) |
| la conclusion partielle | delkonklusjonen |
| les connecteurs logiques | de logiske konnektorene |
| le brouillon | kladden |`
    },
    {
      id: 'fransk-3-16-2-def-1',
      type: 'definition',
      title: 'La dissertation',
      content: `**La dissertation** er den mest sentrale sjangeren i det franske utdanningssystemet. Det er en strukturert argumenterende tekst som utforsker en problemstilling (la problématique) gjennom en logisk plan.

**Oppbygning:**
1. **L'introduction** (innledningen): Amorce (inngang) → problématique (problemstilling) → annonce du plan (presentasjon av planen)
2. **Le développement** (hoveddelen): Vanligvis to eller tre deler, hver med delkonklusjon og overgang
3. **La conclusion** (konklusjonen): Sammenfatning → svar på problemstillingen → ouverture (åpning mot et bredere perspektiv)

**Le plan dialectique** (den dialektiske planen) er den vanligste strukturen:
- **Thèse**: Argumenter *for* påstanden
- **Antithèse**: Argumenter *mot* påstanden eller nyansering
- **Synthèse**: Overskrider motsetningen og gir et mer komplekst svar

**Viktig forskjell fra norsk essay:** Den franske dissertasjonen krever strengere struktur, tydeligere logisk oppbygning og mer upersonlig stil. Man bruker sjelden «jeg» — i stedet skriver man «on peut constater que...» eller «il semble que...».`
    },
    {
      id: 'fransk-3-16-2-def-2',
      type: 'definition',
      title: 'Le commentaire composé',
      content: `**Le commentaire composé** (den strukturerte tekstanalysen) er den andre store sjangeren i det franske utdanningssystemet. Oppgaven er å analysere en litterær tekst ved å identifisere de viktigste tematiske og stilistiske trekkene og organisere dem i en sammenhengende argumentasjon.

**Oppbygning:**
1. **L'introduction**: Presentasjon av teksten (forfatter, verk, kontekst) → problemstilling → presentasjon av analyseplan
2. **Le développement**: 2–3 hoveddeler som utforsker ulike aspekter av teksten (tematikk, stilistiske virkemidler, struktur)
3. **La conclusion**: Sammenfatning av hovedfunnene → teksten i bredere perspektiv

**Viktige prinsipper:**
- Analyser *hvordan* teksten virker, ikke bare *hva* den sier
- Alltid knytt innhold (le fond) til form (la forme)
- Bruk sitater fra teksten som belegg for analysepunktene
- Unngå parafrasering — analyser, ikke gjenfortell`
    },
    {
      id: 'fransk-3-16-2-text-1',
      type: 'text',
      content: `## Les connecteurs logiques — Logiske konnektorer

For å skrive overbevisende tekster på avansert nivå trenger man et rikt repertoar av konnektorer som strukturerer argumentasjonen:

### Innledning og presentasjon
| Fransk | Norsk |
|--------|-------|
| tout d'abord / en premier lieu | først og fremst |
| il convient de souligner que | det er verdt å understreke at |
| il s'agit de | det dreier seg om |
| nous nous proposons d'examiner | vi foreslår å undersøke |

### Tillegg og utdyping
| Fransk | Norsk |
|--------|-------|
| de plus / en outre / par ailleurs | dessuten / videre / for øvrig |
| qui plus est | hva mer er |
| non seulement... mais encore | ikke bare... men også |
| à cela s'ajoute que | i tillegg til dette kommer at |

### Motsetning og nyansering
| Fransk | Norsk |
|--------|-------|
| cependant / néanmoins / toutefois | likevel / imidlertid / ikke desto mindre |
| en revanche / par contre | derimot |
| bien que + subjonctif | selv om |
| quoique + subjonctif | enda / til tross for at |
| force est de constater que | man er nødt til å konstatere at |

### Konklusjon
| Fransk | Norsk |
|--------|-------|
| en définitive / en somme | til syvende og sist / kort sagt |
| il en résulte que | det følger av dette at |
| en conclusion / pour conclure | avslutningsvis |
| au terme de cette analyse | etter endt analyse |`
    },
    {
      id: 'fransk-3-16-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Skrive en innledning til en dissertation',
      problem: `Skriv en innledning til følgende oppgave (dissertation):

**Sujet:** «La littérature peut-elle changer le monde ?» (Kan litteraturen forandre verden?)

Husk de tre delene av innledningen: amorce (inngang), problématique (problemstilling) og annonce du plan (presentasjon av planen).`,
      solution: `**Modellinnledning:**

*De tout temps, les écrivains ont aspiré à influencer la société par leurs œuvres.* [AMORCE — generell inngang] *De l'engagement de Victor Hugo contre la peine de mort à la dénonciation du totalitarisme par George Orwell, la littérature a souvent été perçue comme un instrument de transformation sociale. Pourtant, dans un monde dominé par les médias numériques et l'immédiateté de l'information, on peut se demander si la littérature conserve encore ce pouvoir.* [PROBLÉMATIQUE — problemstilling]

*Nous examinerons d'abord comment la littérature a historiquement contribué au changement social. Nous nuancerons ensuite cette vision en montrant les limites de l'engagement littéraire. Enfin, nous proposerons une réflexion sur les nouvelles formes que peut prendre l'influence littéraire au XXIe siècle.* [ANNONCE DU PLAN — tredelt dialektisk plan]

**Analyse av innledningen:**
1. **Amorce**: Starter bredt med en historisk observasjon — aldri start med «Depuis toujours» alene
2. **Problématique**: Spørsmålet spesifiseres og kontekstualiseres
3. **Plan**: Tre deler annonseres med verb som *examiner*, *nuancer*, *proposer*`
    },
    {
      id: 'fransk-3-16-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Skrive en overgang (transition)',
      problem: `Skriv en overgang mellom en «thèse»-del og en «antithèse»-del i en dissertation om temaet:

**Thèse**: Litteraturen *kan* forandre verden (del 1 er nettopp avsluttet)
**Antithèse**: Litteraturens påvirkningskraft har sine begrensninger (del 2 begynner)

En god overgang har tre elementer: oppsummering av forrige del → konstatering av grenser → introduksjon av neste del.`,
      solution: `**Modellovergang:**

*Ainsi, nous avons pu constater que la littérature a joué un rôle indéniable dans les transformations sociales, de l'abolition de l'esclavage à la prise de conscience écologique.* [OPPSUMMERING]

*Toutefois, il serait naïf de penser que la publication d'un roman suffit à elle seule à changer le cours de l'histoire. La réalité est bien plus complexe.* [KONSTATERING AV GRENSER]

*Il convient donc de s'interroger sur les limites de l'engagement littéraire et sur les obstacles qui empêchent parfois la littérature d'atteindre son objectif transformateur.* [INTRODUKSJON AV NESTE DEL]

**Nøkkelkonnektorer brukt:**
- *Ainsi* — oppsummerer
- *Toutefois* — signaliserer motsetning
- *Il convient de s'interroger* — introduserer neste problemstilling`
    },
    {
      id: 'fransk-3-16-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er den korrekte rekkefølgen i en innledning til en dissertation?',
        options: [
          { id: 'a', text: 'Annonce du plan → problématique → amorce', isCorrect: false },
          { id: 'b', text: 'Problématique → amorce → annonce du plan', isCorrect: false },
          { id: 'c', text: 'Amorce → problématique → annonce du plan', isCorrect: true },
          { id: 'd', text: 'Amorce → annonce du plan → problématique', isCorrect: false },
        ],
        solution: 'Riktig svar er **C**. En innledning til en dissertation følger alltid denne rekkefølgen: 1) **Amorce** (en generell inngang som fanger leserens oppmerksomhet), 2) **Problématique** (den presise problemstillingen som teksten skal undersøke), 3) **Annonce du plan** (en kort presentasjon av de to eller tre delene som utgjør hoveddelen).',
      }
    },
    {
      id: 'fransk-3-16-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken konnektor er best egnet for å innlede en motsetning eller nyansering i en dissertation?',
        options: [
          { id: 'a', text: 'De plus (dessuten)', isCorrect: false },
          { id: 'b', text: 'Néanmoins (ikke desto mindre)', isCorrect: true },
          { id: 'c', text: 'En effet (ja, for)', isCorrect: false },
          { id: 'd', text: 'En premier lieu (for det første)', isCorrect: false },
        ],
        solution: 'Riktig svar er **B**. *Néanmoins* (ikke desto mindre / likevel) er en av de sterkeste konnektorene for å signalisere motsetning eller nyansering. *De plus* legger til et argument i samme retning, *en effet* bekrefter eller utdyper, og *en premier lieu* introduserer et første punkt i en oppregning.',
      }
    },
    {
      id: 'fransk-3-16-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva skiller le commentaire composé fra en vanlig bokanalyse (le résumé analytique)?',
        options: [
          { id: 'a', text: 'Le commentaire composé gjenforteller teksten kronologisk, mens le résumé analytique organiserer etter tema', isCorrect: false },
          { id: 'b', text: 'Le commentaire composé organiserer analysen tematisk og knytter innhold til form, mens parafrasering unngås', isCorrect: true },
          { id: 'c', text: 'Le commentaire composé fokuserer kun på forfatterens biografi og historiske kontekst', isCorrect: false },
          { id: 'd', text: 'Le commentaire composé og le résumé analytique er i praksis det samme', isCorrect: false },
        ],
        solution: 'Riktig svar er **B**. Det viktigste prinsippet i le commentaire composé er at analysen organiseres tematisk (ikke kronologisk etter teksten) og alltid knytter *le fond* (innholdet) til *la forme* (formen/stilen). Man analyserer *hvordan* teksten virker, ikke bare *hva* den sier. Parafrasering (gjenfortelling) er den vanligste feilen og bør unngås.',
      }
    },
    {
      id: 'fransk-3-16-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en komplett innledning (introduction) til følgende commentaire composé-oppgave:

**Tekst:** Et utdrag fra Albert Camus' «L'Étranger» (1942), der Meursault beskriver morens begravelse med tilsynelatende likegyldighet.

**Oppgave:** Analyser hvordan Camus bruker et nøytralt, «hvitt» språk (l'écriture blanche) for å skildre hovedpersonens forhold til verden.

Innledningen din skal inneholde: presentasjon av teksten → problemstilling → analyseplan (2–3 deler). Skriv på fransk (minst 80 ord).`,
        solution: `**Modellinnledning:**

Publié en 1942, « L'Étranger » d'Albert Camus est considéré comme l'un des romans fondateurs de l'absurde. Dans cet extrait, le narrateur Meursault relate les funérailles de sa mère avec une neutralité troublante, sans exprimer de chagrin apparent. Ce passage cristallise l'une des caractéristiques les plus frappantes du roman : l'écriture blanche, terme emprunté à Roland Barthes pour désigner un style dépouillé de toute émotion.

Comment Camus utilise-t-il ce langage neutre pour exprimer le rapport singulier de Meursault au monde et, plus largement, la philosophie de l'absurde ?

Nous analyserons d'abord les procédés stylistiques de l'écriture blanche dans cet extrait, notamment la syntaxe et le lexique. Nous montrerons ensuite comment cette neutralité du langage révèle la vision existentialiste de Camus, où l'absence de sens rend impossible toute expression conventionnelle du deuil.

**Analyse:** Innledningen presenterer verket og utdraget, stiller en tydelig problemstilling (comment... pour...) og annonserer en todelt analyseplan som knytter stil (la forme) til filosofisk innhold (le fond).`,
      }
    },
    {
      id: 'fransk-3-16-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Bruk følgende konnektorer til å bygge et sammenhengende avsnitt (8–10 setninger) på fransk om temaet «les avantages et les inconvénients des réseaux sociaux» (fordeler og ulemper ved sosiale medier):

Konnektorer du MÅ bruke (i en logisk rekkefølge):
- Il est indéniable que...
- De plus...
- Cependant...
- Bien que + subjonctif...
- Force est de constater que...
- En définitive...`,
        solution: `**Eksempelsvar:**

Il est indéniable que les réseaux sociaux ont révolutionné notre manière de communiquer. Grâce à des plateformes comme Instagram et TikTok, il est désormais possible de rester en contact avec des personnes du monde entier en temps réel. De plus, ces outils offrent une tribune démocratique où chacun peut s'exprimer et partager ses idées, ce qui favorise la liberté d'expression et la mobilisation citoyenne.

Cependant, cette médaille a son revers. La désinformation se propage à une vitesse alarmante sur ces plateformes, rendant parfois difficile la distinction entre faits vérifiés et fausses nouvelles. Bien que les entreprises technologiques aient mis en place des mesures de modération, le cyberharcèlement et les discours haineux restent des problèmes majeurs.

Force est de constater que les réseaux sociaux ont également un impact négatif sur la santé mentale, en particulier chez les jeunes, créant des phénomènes d'addiction et de comparaison sociale constante.

En définitive, les réseaux sociaux sont un outil à double tranchant : ils rapprochent les individus tout en créant de nouvelles formes d'isolement et de manipulation. L'enjeu réside dans notre capacité à les utiliser de manière critique et responsable.`,
      }
    },
    {
      id: 'fransk-3-16-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi gjennomgått de viktigste teknikkene for avansert akademisk skriving på fransk:

**La dissertation:**
- Innledning med amorce → problématique → annonce du plan
- Le plan dialectique: thèse → antithèse → synthèse
- Overganger som oppsummerer, konstaterer grenser og introduserer neste del
- Upersonlig stil — unngå «je», bruk «on» eller upersonlige konstruksjoner

**Le commentaire composé:**
- Tematisk organisering, ikke kronologisk gjenfortelling
- Alltid knytte innhold (le fond) til form (la forme)
- Sitater fra teksten som belegg
- Unngå parafrasering — analyser, ikke gjenfortell

**Les connecteurs logiques:**
- For tillegg: de plus, en outre, par ailleurs, qui plus est
- For motsetning: cependant, néanmoins, toutefois, bien que + subjonctif
- For konklusjon: en définitive, en somme, au terme de cette analyse
- For introduksjon: il convient de souligner que, il s'agit de`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la dissertation', definition: 'Det franske essayet — en strengt strukturert argumenterende tekst med tese, antitese og syntese' },
    { term: 'le commentaire composé', definition: 'Strukturert litterær tekstanalyse som knytter innhold til form' },
    { term: 'la problématique', definition: 'Problemstillingen — det sentrale spørsmålet som en dissertation eller analyse utforsker' },
    { term: 'le plan dialectique', definition: 'Den dialektiske planen — tese, antitese, syntese som strukturerer en dissertation' },
    { term: 'la transition', definition: 'Overgangen mellom deler i en tekst — oppsummerer forrige del og introduserer neste' },
    { term: 'les connecteurs logiques', definition: 'Logiske konnektorer — ord og uttrykk som strukturerer argumentasjon (cependant, de plus, en revanche)' },
    { term: "l'amorce (f)", definition: 'Inngangssetningen i en dissertation-innledning — fanger leserens oppmerksomhet' },
    { term: "l'ouverture (f)", definition: 'Åpning mot et bredere perspektiv i konklusjonen av en dissertation' },
  ],
};

// --- 16.3: Compréhension et expression orale avancée ---
export const CHAPTER_FRANSK_3_16_3: TextbookChapter = {
  id: 'fransk-3-16-3',
  courseId: 'fransk-3',
  chapterNumber: '16.3',
  title: 'Compréhension et expression orale avancée',
  subtitle: 'Avansert muntlig forståelse og produksjon',
  description: 'Forbered deg på muntlig eksamen: presentasjonsteknikk, debattferdigheter, spontan kommunikasjon og reformulering.',
  estimatedMinutes: 50,
  competenceGoals: ['kommunisere med god uttale, variert ordforråd og avanserte strukturer'],
  content: [
    {
      id: 'fransk-3-16-3-intro',
      type: 'text',
      content: `## Compréhension et expression orale avancée — Avansert muntlig forståelse og produksjon

Muntlig kommunikasjon på avansert nivå handler ikke bare om å snakke korrekt — det handler om å kommunisere effektivt, overbevisende og spontant. På B2–C1-nivå forventes det at du kan holde strukturerte presentasjoner, delta i debatter, reformulere komplekse ideer og håndtere uventede spørsmål.

I dette kapittelet forbereder vi oss på muntlig eksamen og avansert muntlig kommunikasjon gjennom teknikker for presentasjon, debatt og spontan respons.

| Fransk | Norsk |
|--------|-------|
| l'exposé oral (m) | den muntlige presentasjonen |
| la soutenance | forsvaret (av en oppgave) |
| la prise de parole | det å ta ordet / å gripe ordet |
| le débat contradictoire | den motsetningsfylte debatten |
| l'improvisation (f) | improvisasjonen |
| la reformulation | omformuleringen |
| la relance | oppfølgingsspørsmålet / det å bringe samtalen videre |
| l'aisance orale (f) | muntlig flyt / trygghet |`
    },
    {
      id: 'fransk-3-16-3-def-1',
      type: 'definition',
      title: "L'exposé oral",
      content: `**L'exposé oral** (den muntlige presentasjonen) er en strukturert muntlig fremstilling av et tema. I franske utdanningsinstitusjoner er det en sentral vurderingsform. En god presentasjon på fransk følger en klar struktur:

1. **L'introduction**: Presenter temaet, definer problemstillingen, og annonser planen
2. **Le développement**: 2–3 hoveddeler med eksempler og argumenter
3. **La conclusion**: Oppsummering og åpning

**Nøkkelfraser for presentasjonen:**
- « Aujourd'hui, je vais vous présenter... » (I dag skal jeg presentere for dere...)
- « Mon exposé portera sur... » (Presentasjonen min handler om...)
- « Je commencerai par... avant d'aborder... » (Jeg begynner med... før jeg tar opp...)
- « En guise de conclusion, je dirais que... » (Som konklusjon vil jeg si at...)

**Viktig:** En muntlig presentasjon er ikke det samme som å lese opp en tekst. Bruk stikkord (des notes), oppretthold øyekontakt, og tilpass tempoet til publikum.`
    },
    {
      id: 'fransk-3-16-3-def-2',
      type: 'definition',
      title: 'Le débat contradictoire',
      content: `**Le débat contradictoire** (den motsetningsfylte debatten) er en strukturert diskusjon der deltakerne argumenterer for motstridende synspunkter. I franskspråklig tradisjon har debatten en sterk kulturell posisjon — franskmenn setter pris på logisk argumentasjon og retorisk eleganse.

**Nyttige debattfraser:**

*Å uttrykke enighet:*
- « Je suis tout à fait d'accord avec vous. » (Jeg er helt enig med Dem.)
- « Vous avez entièrement raison sur ce point. » (De har helt rett på dette punktet.)

*Å uttrykke uenighet høflig:*
- « Je comprends votre point de vue, mais... » (Jeg forstår Deres synspunkt, men...)
- « Permettez-moi de nuancer cette affirmation. » (Tillat meg å nyansere denne påstanden.)
- « Je me permets de vous contredire sur ce point. » (Jeg tillater meg å motsi Dem på dette punktet.)

*Å reformulere:*
- « Autrement dit... » (Med andre ord...)
- « Si je comprends bien, vous voulez dire que... » (Hvis jeg forstår riktig, mener De at...)
- « Pour reformuler votre propos... » (For å omformulere det De sa...)`
    },
    {
      id: 'fransk-3-16-3-text-1',
      type: 'text',
      content: `## La reformulation — Omformulering

Evnen til å **reformulere** (omformulere) er en av de viktigste muntlige ferdighetene på avansert nivå. Reformulering innebærer å uttrykke den samme ideen med andre ord, og brukes til å:

- **Klargjøre** noe du har sagt (quand on n'a pas été compris)
- **Sjekke forståelse** av det andre har sagt
- **Vinne tid** for å tenke under en diskusjon
- **Forenkle** komplekse ideer for publikum

### Teknikker for reformulering

| Teknikk | Fransk uttrykk | Eksempel |
|---|---|---|
| Forenkle | « En d'autres termes... » | «Den kartesianske dualismen — med andre ord, skillet mellom kropp og sjel» |
| Presisere | « Plus précisément... » | «Frankrike — mer presist, den sørlige delen av landet» |
| Eksemplifisere | « Par exemple... / Prenons le cas de... » | «La discrimination — la oss ta eksempelet med diskriminering i arbeidsmarkedet» |
| Generalisere | « De manière plus générale... » | «Dette spesifikke tilfellet viser at... mer generelt...» |
| Oppsummere | « En résumé... / Pour résumer... » | «Kort oppsummert er hovedpoenget...» |

### Spontan kommunikasjon

Å kommunisere spontant på et fremmedspråk krever at man mestrer **des stratégies de compensation** (kompensasjonsstrategier):

- **Omskrivning** (la périphrase): Beskriv det du vil si med andre ord — «l'appareil qui sert à prendre des photos» i stedet for «l'appareil photo»
- **Tilnærming** (l'approximation): Bruk et nærliggende ord — «une sorte de...» (en slags...)
- **Fyllord** (les mots de remplissage): «Eh bien...», «Voyons...», «Comment dire...» gir deg tid til å tenke
- **Avbrytning og omstart** (l'autocorrection): «Non, ce que je voulais dire, c'est que...» (Nei, det jeg ville si, er at...)`
    },
    {
      id: 'fransk-3-16-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Strukturere en muntlig presentasjon',
      problem: `Du skal holde en 5-minutters muntlig presentasjon (exposé oral) om temaet: «Les jeunes et l'engagement politique en France» (Ungdom og politisk engasjement i Frankrike).

Lag en strukturert plan med:
1. Innledning med problemstilling
2. To hoveddeler med stikkord
3. Konklusjon

Skriv stikkordene og nøkkelfrasene du ville brukt.`,
      solution: `**Plan for l'exposé oral:**

**I. Introduction** (30 sekunder)
- « Bonjour, aujourd'hui je vais vous présenter un sujet qui concerne directement notre génération : l'engagement politique des jeunes en France. »
- Problemstilling: « Les jeunes Français sont-ils vraiment désengagés de la politique, ou assiste-t-on plutôt à une transformation des formes d'engagement ? »
- « Mon exposé se divisera en deux parties... »

**II. Première partie : Le constat d'un désengagement apparent** (2 minutter)
- Stikkord: baisse de participation électorale, méfiance envers les partis traditionnels, abstention record chez les 18–25 ans
- Nøkkelfrase: « En premier lieu, les chiffres semblent confirmer un désintérêt : lors des dernières élections, plus de 60 % des 18–25 ans se sont abstenus. »
- *Transition:* « Cependant, ce constat mérite d'être nuancé... »

**III. Deuxième partie : De nouvelles formes d'engagement** (2 minutter)
- Stikkord: réseaux sociaux, marches pour le climat, associations, engagement citoyen hors partis
- Nøkkelfrase: « En réalité, les jeunes ne se désintéressent pas de la politique — ils réinventent les formes de l'engagement. »
- Eksempler: mouvements écologistes, pétitions en ligne, bénévolat

**IV. Conclusion** (30 sekunder)
- « En définitive, il serait réducteur de parler de désengagement. Il s'agit plutôt d'une mutation profonde de l'engagement politique, qui passe désormais par des canaux non traditionnels. »
- Ouverture: « On peut se demander si ces nouvelles formes d'engagement auront un impact durable sur la démocratie française. »`
    },
    {
      id: 'fransk-3-16-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Debatteknikker i praksis',
      problem: `Du deltar i en debatt om temaet: «Faut-il interdire les téléphones portables dans les écoles ?» (Bør mobiltelefoner forbys i skolene?)

Du har fått rollen som motstander av et mobilforbud. Formuler tre argumenter mot forbud og skriv dem med passende debattfraser.`,
      solution: `**Argument 1 — Pedagogisk bruk:**
« Permettez-moi de nuancer cette proposition. Interdire les téléphones revient à se priver d'un outil pédagogique puissant. De nombreuses applications éducatives permettent un apprentissage interactif et personnalisé. Plutôt que d'interdire, il faudrait apprendre aux élèves à utiliser cet outil de manière responsable. »

**Argument 2 — Realisme:**
« Je comprends les arguments en faveur de l'interdiction, mais je me permets de vous contredire sur un point essentiel : une interdiction est pratiquement impossible à appliquer. Les élèves trouveront toujours le moyen de contourner cette règle, ce qui risque de créer un climat de surveillance et de méfiance plutôt qu'un environnement d'apprentissage serein. »

**Argument 3 — Sikkerhet og ansvar:**
« Il est indéniable que les téléphones peuvent être une source de distraction. Cependant, ils jouent également un rôle crucial en matière de sécurité — les parents doivent pouvoir joindre leurs enfants en cas d'urgence. De plus, apprendre à gérer les distractions fait partie de l'éducation au XXIe siècle. Autrement dit, le problème n'est pas le téléphone lui-même, mais l'absence d'éducation numérique. »

**Reformulering som avrunding:**
« Pour résumer ma position : plutôt que d'interdire, éduquons. Un téléphone bien utilisé est un allié de l'apprentissage. »`
    },
    {
      id: 'fransk-3-16-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken frase er mest passende for å høflig uttrykke uenighet i en formell fransk debatt?',
        options: [
          { id: 'a', text: '«Non, vous avez tort.» (Nei, De tar feil.)', isCorrect: false },
          { id: 'b', text: '«Je comprends votre point de vue, mais permettez-moi de nuancer.» (Jeg forstår Deres synspunkt, men tillat meg å nyansere.)', isCorrect: true },
          { id: 'c', text: '«C\'est n\'importe quoi !» (Det er tull!)', isCorrect: false },
          { id: 'd', text: '«Bof, je ne suis pas d\'accord.» (Neivel, jeg er ikke enig.)', isCorrect: false },
        ],
        solution: 'Riktig svar er **B**. I en formell fransk debatt er det avgjørende å uttrykke uenighet med respekt og eleganse. «Je comprends votre point de vue, mais permettez-moi de nuancer» anerkjenner motstanderens synspunkt før man fremfører sin egen nyansering. Alternativene A, C og D er for direkte, uformelle eller uhøflige for en formell debattkontekst.',
      }
    },
    {
      id: 'fransk-3-16-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er formålet med reformulering (la reformulation) i muntlig kommunikasjon?',
        options: [
          { id: 'a', text: 'Å gjenta nøyaktig det samme man nettopp har sagt for å understreke poenget', isCorrect: false },
          { id: 'b', text: 'Å bytte til norsk når man ikke finner det riktige franske ordet', isCorrect: false },
          { id: 'c', text: 'Å uttrykke den samme ideen med andre ord for å klargjøre, sjekke forståelse eller vinne tid', isCorrect: true },
          { id: 'd', text: 'Å endre mening midt i samtalen og si noe helt annet', isCorrect: false },
        ],
        solution: 'Riktig svar er **C**. Reformulering er en nøkkelkompetanse i muntlig kommunikasjon som innebærer å uttrykke den samme ideen med andre ord. Det brukes til å klargjøre noe man har sagt, sjekke at man har forstått samtalepartneren, eller vinne tid til å tenke. Det er *ikke* ren gjentakelse (A), språkbytte (B) eller meningsendring (D).',
      }
    },
    {
      id: 'fransk-3-16-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken rekkefølge bør et exposé oral (muntlig presentasjon) følge?',
        options: [
          { id: 'a', text: 'Conclusion → développement → introduction', isCorrect: false },
          { id: 'b', text: 'Introduction → développement → conclusion', isCorrect: true },
          { id: 'c', text: 'Développement → introduction → conclusion', isCorrect: false },
          { id: 'd', text: 'Introduction → conclusion → développement', isCorrect: false },
        ],
        solution: 'Riktig svar er **B**. Et exposé oral følger den klassiske franske strukturen: introduction (innledning med problemstilling og annonsering av plan), développement (hoveddel med 2–3 deler), og conclusion (oppsummering og åpning). Denne strukturen gjelder både for skriftlige og muntlige tekster i det franske utdanningssystemet.',
      }
    },
    {
      id: 'fransk-3-16-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Øv på reformulering: Reformuler følgende komplekse setninger på enklere fransk. Bruk passende reformuleringsuttrykk (autrement dit, en d'autres termes, plus simplement, etc.):

1. «La mondialisation a engendré une interdépendance économique qui rend les marchés financiers vulnérables aux crises systémiques.»

2. «Le réchauffement climatique résulte d'une accumulation de gaz à effet de serre dans l'atmosphère, principalement due aux activités anthropiques.»

3. «La démocratie représentative traverse une crise de légitimité liée à l'écart croissant entre les élus et les citoyens.»`,
        solution: `1. **Reformulering:** « Autrement dit, la mondialisation a créé des liens économiques si forts entre les pays que lorsqu'un marché va mal, tous les autres en souffrent aussi. » — (Med andre ord, globaliseringen har skapt så sterke økonomiske bånd mellom landene at når ett marked går dårlig, lider alle de andre også.)

2. **Reformulering:** « En d'autres termes, la planète se réchauffe parce que les activités humaines — comme les usines et les voitures — produisent des gaz qui emprisonnent la chaleur du soleil dans l'atmosphère. » — (Sagt på en annen måte, planeten varmes opp fordi menneskelige aktiviteter — som fabrikker og biler — produserer gasser som fanger solvarmen i atmosfæren.)

3. **Reformulering:** « Plus simplement, de moins en moins de citoyens font confiance à leurs représentants politiques, car ils ont l'impression que les élus ne comprennent pas leurs problèmes quotidiens. » — (Enklere sagt, færre og færre innbyggere stoler på sine politiske representanter, fordi de har inntrykk av at de folkevalgte ikke forstår deres hverdagsproblemer.)`,
      }
    },
    {
      id: 'fransk-3-16-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et debattinnlegg (8–10 setninger) på fransk der du argumenterer FOR eller MOT følgende påstand:

«Les intelligences artificielles devraient remplacer les professeurs de langues.»
(Kunstig intelligens bør erstatte språklærere.)

Innlegget ditt skal:
- Starte med en klar posisjonering
- Inneholde minst tre argumenter
- Bruke minst fire debattfraser fra kapittelet
- Avslutte med en reformulering av hovedpoenget`,
        solution: `**Eksempelsvar (mot påstanden):**

Je me permets de vous contredire sur cette proposition. Il est indéniable que l'intelligence artificielle a révolutionné l'apprentissage des langues — des applications comme Duolingo offrent un entraînement accessible et personnalisé. Cependant, réduire l'enseignement des langues à un échange avec une machine, c'est ignorer l'essence même de la communication humaine.

En premier lieu, un professeur ne transmet pas seulement des règles grammaticales : il partage une culture, des nuances, une passion. Aucun algorithme ne peut reproduire l'émotion d'un professeur qui lit un poème de Prévert à ses élèves. De plus, l'apprentissage d'une langue est fondamentalement un acte social — on apprend à parler en parlant avec d'autres êtres humains, pas avec un écran.

Permettez-moi d'ajouter un troisième argument : l'IA ne peut pas s'adapter à la dimension émotionnelle de l'apprentissage. Un professeur sait quand un élève est frustré, découragé ou au contraire prêt pour un défi plus ambitieux.

Pour résumer ma position : l'IA est un excellent complément, mais elle ne pourra jamais remplacer la richesse irremplaçable de l'interaction humaine dans l'apprentissage des langues.`,
      }
    },
    {
      id: 'fransk-3-16-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi gjennomgått avanserte teknikker for muntlig kommunikasjon på fransk:

**L'exposé oral (den muntlige presentasjonen):**
- Følger strukturen: introduction → développement → conclusion
- Bruk stikkord, ikke ferdigskrevet tekst
- Annonsér planen din tydelig i innledningen
- Hold øyekontakt og tilpass tempoet

**Le débat contradictoire (debatten):**
- Uttrykk uenighet høflig: «Permettez-moi de nuancer...», «Je comprends votre point de vue, mais...»
- Bygg argumenter logisk med konnektorer
- Anerkjenn motstanderens argumenter før du motargumenterer

**La reformulation (omformulering):**
- Nøkkelferdighet for å klargjøre, forenkle og sjekke forståelse
- Bruk uttrykk som «autrement dit», «en d'autres termes», «plus simplement»
- Viktig kompensasjonsstrategi når man mangler et bestemt ord

**Spontan kommunikasjon:**
- Bruk omskrivninger (la périphrase) når du mangler et ord
- Fyllord som «eh bien», «voyons», «comment dire» gir tenketid
- Selvkorrigering er et tegn på kompetanse, ikke svakhet`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: "l'exposé oral (m)", definition: 'Den muntlige presentasjonen — strukturert fremstilling av et tema med innledning, hoveddel og konklusjon' },
    { term: 'la soutenance', definition: 'Forsvaret — muntlig presentasjon og forsvar av en oppgave eller avhandling' },
    { term: 'la prise de parole', definition: 'Det å ta ordet — å gripe ordet i en diskusjon eller debatt' },
    { term: 'le débat contradictoire', definition: 'Den motsetningsfylte debatten — strukturert diskusjon med motstridende synspunkter' },
    { term: 'la reformulation', definition: 'Omformulering — å uttrykke den samme ideen med andre ord for klargjøring' },
    { term: 'la relance', definition: 'Oppfølgingsspørsmålet — teknikk for å bringe samtalen videre' },
    { term: 'la périphrase', definition: 'Omskrivning — å beskrive noe med andre ord når man mangler det presise ordet' },
    { term: "l'aisance orale (f)", definition: 'Muntlig flyt — evnen til å snakke naturlig og trygt uten overdreven nøling' },
  ],
};

// --- 16.4: L'examen final — Simulation et préparation ---
export const CHAPTER_FRANSK_3_16_4: TextbookChapter = {
  id: 'fransk-3-16-4',
  courseId: 'fransk-3',
  chapterNumber: '16.4',
  title: "L'examen final — Simulation et préparation",
  subtitle: 'Eksamensforberedelse og simulering',
  description: 'Forbered deg til eksamen med strategier for tidsbruk, typiske oppgavetyper, og simulerte eksamensoppgaver i alle ferdighetsområder.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke varierte strategier for språklæring, tekstskaping og kommunikasjon'],
  content: [
    {
      id: 'fransk-3-16-4-intro',
      type: 'text',
      content: `## L'examen final — Simulation et préparation

Eksamen i fransk nivå 3 tester alle ferdighetsområder: lesing, skriving, lytting og muntlig kommunikasjon. God eksamensforberedelse handler ikke bare om å repetere grammatikk og vokabular — det handler om å kjenne eksamensformatet, mestre tidsbruk, og ha strategier for ulike oppgavetyper.

I dette kapittelet gir vi deg verktøyene du trenger for å møte eksamen med selvtillit: oversikt over oppgavetyper, strategier for hver del, og simulerte oppgaver.

| Fransk | Norsk |
|--------|-------|
| l'épreuve (f) | prøven / eksamensoppgaven |
| la consigne | oppgaveinstruksen |
| le barème | poengsystemet / vurderingskriteriene |
| la grille d'évaluation | vurderingsmatrisen |
| le brouillon | kladden |
| la relecture | gjennomlesingen / korrekturlesingen |
| la gestion du temps | tidsstyringen |
| la notation | karaktersettingen |`
    },
    {
      id: 'fransk-3-16-4-def-1',
      type: 'definition',
      title: 'La gestion du temps',
      content: `**La gestion du temps** (tidsstyring) er kanskje den viktigste eksamensferdigheten. Mange studenter taper poeng fordi de bruker for mye tid på én oppgave og ikke rekker de andre.

**Generelle prinsipper:**
1. **Les alle oppgavene først** (5 minutter): Få oversikt over hele eksamen før du begynner
2. **Fordel tiden proporsjonalt**: Bruk tid i forhold til poengverdien — en oppgave til 20 poeng fortjener mer tid enn en til 5 poeng
3. **Reserver tid til korrekturlesing** (la relecture): De siste 10–15 minuttene bør brukes til å lese gjennom og rette feil
4. **Bruk kladd strategisk** (le brouillon): Skriv innledning og plan på kladd, men hoveddelen direkte på besvarelsen

**Tidfordeling for en 5-timers skriftlig eksamen:**
| Fase | Tid | Aktivitet |
|---|---|---|
| Orientering | 10 min | Les alle oppgaver, velg strategi |
| Planlegging | 20 min | Lag plan/disposisjon på kladd |
| Skriving | 3 t 30 min | Skriv besvarelsen |
| Korrektur | 15–20 min | Kontroller språk, innhold, struktur |`
    },
    {
      id: 'fransk-3-16-4-def-2',
      type: 'definition',
      title: 'La grille d\'évaluation',
      content: `**La grille d'évaluation** (vurderingsmatrisen) er verktøyet sensorer bruker for å vurdere besvarelser. Å kjenne vurderingskriteriene gir deg en stor fordel, fordi du vet nøyaktig hva sensoren ser etter.

**Typiske vurderingskriterier for skriftlig eksamen i fransk:**

| Kriterium | Hva vurderes | Typisk vekt |
|---|---|---|
| **Contenu** (innhold) | Relevans, argumentasjon, eksempler, originalitet | 30–40 % |
| **Langue** (språk) | Grammatikk, ortografi, syntaks, ordforråd | 25–35 % |
| **Structure** (struktur) | Oppbygning, avsnittsinndeling, konnektorer, logikk | 15–25 % |
| **Communication** (kommunikasjon) | Formidlingsevne, tilpasning til sjanger og mottaker | 10–20 % |

**Praktiske konsekvenser:**
- Innhold teller mest — et godt argument veier mer enn perfekt grammatikk
- Men mange språkfeil trekker *mye* ned — korrekturlesing er avgjørende
- Struktur viser at du behersker sjangrene — alltid ha en klar plan
- Tilpass stilen til oppgavetypen — en formell tekst krever formelt språk`
    },
    {
      id: 'fransk-3-16-4-text-1',
      type: 'text',
      content: `## Stratégies pour chaque type d'épreuve — Strategier for hver oppgavetype

### Leseforståelse (compréhension écrite)
- **Les teksten to ganger**: Først for helhetsforståelse, deretter for detaljer
- **Understrek nøkkelord** i både teksten og spørsmålene
- **Svar med egne ord**: Ikke kopier teksten direkte — reformuler
- **Belegg med sitater**: Bruk korte sitater fra teksten som støtte

### Skriftlig produksjon (production écrite)
- **Analyser oppgaveinstruksen nøye** (la consigne): Hva ber den deg om? Argumentere? Beskrive? Analysere?
- **Lag en plan på kladd** før du begynner å skrive
- **Følg sjangerkonvensjonene**: Dissertation-strukturen for argumenterende tekster, brevformat for formelle brev
- **Bruk avanserte strukturer**: Subjonctif, conditionnel, komplekse konnektorer — vis at du behersker dem

### Lytteforståelse (compréhension orale)
- **Les spørsmålene først**: Vet du hva du skal lytte etter
- **Noter stikkord** under første lytting
- **Fyll inn detaljer** under andre lytting
- **Ikke panikk** hvis du ikke forstår alt — fokuser på det du forstår

### Muntlig produksjon (production orale)
- **Bruk forberedelsestiden godt**: Lag stikkordliste, ikke ferdigskrevet tekst
- **Strukturer presentasjonen**: Innledning → hoveddel → konklusjon
- **Snakk tydelig og i naturlig tempo**: Bedre å snakke sakte og korrekt enn fort og feil
- **Håndter spørsmål rolig**: Reformuler hvis du ikke forstår, be om at spørsmålet gjentas`
    },
    {
      id: 'fransk-3-16-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Analysere en oppgaveinstruks (consigne)',
      problem: `Analyser følgende oppgaveinstruks (consigne) fra en franskeksamen. Identifiser: hva slags tekst du skal skrive, hva innholdet skal fokusere på, og hvilke krav som stilles.

**Consigne:** «Dans un texte argumentatif structuré de 300 à 400 mots, discutez la citation suivante de Victor Hugo : "Ouvrir une école, c'est fermer une prison." Vous présenterez des arguments pour et contre cette affirmation, en vous appuyant sur des exemples concrets. Vous rédigerez votre texte sous forme de dissertation avec une introduction, un développement en deux ou trois parties, et une conclusion.»`,
      solution: `**Analyse av oppgaveinstruksen:**

1. **Teksttype**: Argumenterende tekst (texte argumentatif) i form av en dissertation
2. **Lengde**: 300–400 ord — dette er strengt, hold deg innenfor rammen
3. **Innhold**: Diskutere Victor Hugos sitat om at å åpne en skole er å stenge et fengsel
4. **Krav**:
   - Argumenter *for* OG *mot* (discutez = begge sider)
   - Bruk konkrete eksempler (exemples concrets)
   - Følg dissertation-strukturen: introduction + développement (2–3 deler) + conclusion

**Strategisk planlegging:**
- **Introduction** (~60 ord): Kontekstualiser sitatet (Hugo, 1800-tallet, sosial ulikhet) → formuler problemstillingen → annonser planen
- **Partie 1 — Thèse** (~100 ord): Utdanning forebygger kriminalitet — eksempler med statistikk, rehabiliteringsprogrammer
- **Partie 2 — Antithèse** (~100 ord): Utdanning alene løser ikke alle problemer — fattigdom, psykisk helse, strukturelle årsaker
- **Conclusion** (~60 ord): Oppsummer begge sider → gi et nyansert svar → ouverture

**Viktige feller å unngå:**
- Ikke bare skriv *for* sitatet — «discutez» krever nyansering
- Ikke glem konkrete eksempler — abstrakte argumenter gir færre poeng
- Hold deg strengt til ordgrensen — både for kort og for langt trekker ned`
    },
    {
      id: 'fransk-3-16-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Korrekturstrategi (la relecture)',
      problem: `Les følgende eksamensbesvarelse og identifiser feilene. Rett dem og forklar hvilken type feil det er:

«Aujourd'hui, beaucoup de jeunes est connectés à Internet tout le temps. Ils utilisent leur téléphones pour communiquer avec ses amis. Bien que la technologie est utile, il y a aussi des problèmes. Si j'aurais le choix, je interdirais les réseaux sociaux pour les enfants. Les parents que leurs enfants passent trop de temps en ligne devraient contrôler plus.»`,
      solution: `**Korrigert tekst:**
«Aujourd'hui, beaucoup de jeunes **sont** connectés à Internet tout le temps. Ils utilisent **leurs** téléphones pour communiquer avec **leurs** amis. Bien que la technologie **soit** utile, il y a aussi des problèmes. Si **j'avais** le choix, **j'interdirais** les réseaux sociaux pour les enfants. Les parents **dont** les enfants passent trop de temps en ligne devraient **les** contrôler **davantage**.»

**Feilanalyse:**

| Feil | Type | Forklaring |
|---|---|---|
| *est* → **sont** | Subjekt-verb-samsvar | «Beaucoup de jeunes» er flertall, krever *sont* |
| *leur* → **leurs** | Possessiv flertall | Flertallssubstantivet *téléphones* krever flertallsformen *leurs* |
| *ses* → **leurs** | Possessivpronomen | Eieren er *ils* (de), ikke *il/elle* (han/hun), altså *leurs* |
| *est* → **soit** | Subjonctif | *Bien que* krever alltid subjonctif: *bien que... soit* |
| *j'aurais* → **j'avais** | Si-setning | Aldri conditionnel etter *si* — regelen er *si* + imparfait → conditionnel |
| *je interdirais* → **j'interdirais** | Elisjon | *Je* + vokal = *j'* (obligatorisk elisjon) |
| *que* → **dont** | Relativpronomen | «Les parents dont les enfants...» — *dont* erstatter *de* |
| *contrôler plus* → **les contrôler davantage** | Pronomen + adverb | Trenger objektspronomen *les* og *davantage* er mer presist enn *plus* |

**Korrektursjekkliste for eksamen:**
1. Subjekt-verb-samsvar (spesielt etter *beaucoup de*, *la plupart de*)
2. Possessivpronomen (leur/leurs, son/ses)
3. Subjonctif etter uttrykk som krever det
4. Si-setningsregelen (aldri conditionnel etter si)
5. Relativpronomen (qui/que/dont/où)
6. Elisjon (je→j', le→l', etc.)`
    },
    {
      id: 'fransk-3-16-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du gjøre i de første 5–10 minuttene av en skriftlig eksamen?',
        options: [
          { id: 'a', text: 'Begynne å skrive umiddelbart på den første oppgaven for å spare tid', isCorrect: false },
          { id: 'b', text: 'Lese gjennom alle oppgavene for å få oversikt og planlegge tidsbruken', isCorrect: true },
          { id: 'c', text: 'Skrive en detaljert kladd av hele besvarelsen', isCorrect: false },
          { id: 'd', text: 'Repetere grammatikkregler i hodet', isCorrect: false },
        ],
        solution: 'Riktig svar er **B**. De første minuttene bør brukes til orientering: les alle oppgavene, forstå hva som kreves, og lag en tidsplan. Å begynne umiddelbart (A) fører ofte til dårlig tidsbruk. En detaljert kladd av alt (C) tar for mye tid. Å repetere grammatikk (D) er noe du bør ha gjort før eksamen.',
      }
    },
    {
      id: 'fransk-3-16-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr oppgaveinstruksen «Discutez cette affirmation» i en franskeksamen?',
        options: [
          { id: 'a', text: 'Skriv en tekst som bare støtter påstanden med argumenter for', isCorrect: false },
          { id: 'b', text: 'Skriv en tekst som bare motbeviser påstanden', isCorrect: false },
          { id: 'c', text: 'Presenter argumenter både for og mot påstanden, og kom med en nyansert konklusjon', isCorrect: true },
          { id: 'd', text: 'Oversett påstanden til norsk og forklar hva den betyr', isCorrect: false },
        ],
        solution: 'Riktig svar er **C**. «Discutez» er en av de vanligste oppgaveinstruksene i franske eksamener og betyr at du skal presentere argumenter fra begge sider (for og mot) og komme med en balansert, nyansert konklusjon. En ensidig besvarelse (A eller B) vil tape poeng fordi den ikke oppfyller instruksen.',
      }
    },
    {
      id: 'fransk-3-16-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilket vurderingskriterium teller vanligvis mest i en skriftlig franskeksamen?',
        options: [
          { id: 'a', text: 'Penmanship — vakker håndskrift', isCorrect: false },
          { id: 'b', text: 'Contenu — innhold, relevans og argumentasjon', isCorrect: true },
          { id: 'c', text: 'Longueur — at teksten er så lang som mulig', isCorrect: false },
          { id: 'd', text: 'Originalité — at man har et helt unikt synspunkt', isCorrect: false },
        ],
        solution: 'Riktig svar er **B**. Innhold (contenu) vektes vanligvis tyngst (30–40 %) i en skriftlig eksamen. Sensoren ser etter relevans i forhold til oppgaven, kvalitet på argumentasjonen, og konkrete eksempler. Håndskrift (A) teller ikke som eget kriterium. Lengde (C) utover minimumskravet gir ikke ekstrapoeng. Originalitet (D) kan gi pluss, men er ikke hovedkriteriet.',
      }
    },
    {
      id: 'fransk-3-16-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Simulert eksamensoppgave — Leseforståelse og skriftlig produksjon:

Les følgende tekst og svar på oppgavene under.

**Tekst:** «En France, le débat sur l'uniforme scolaire revient régulièrement dans l'actualité. Ses partisans affirment qu'il favorise l'égalité entre les élèves et réduit le harcèlement lié aux vêtements de marque. Ses opposants, en revanche, considèrent qu'il porte atteinte à la liberté d'expression individuelle et qu'il ne résout pas les véritables problèmes de discrimination. En 2024, plusieurs écoles pilotes ont testé l'uniforme, avec des résultats mitigés.»

**Oppgave A** (leseforståelse): Hva er de to hovedargumentene for og de to hovedargumentene mot skoleuniform ifølge teksten?

**Oppgave B** (skriftlig produksjon): Skriv en kort dissertation-innledning (60–80 ord) på fransk med amorce, problématique og annonce du plan om temaet skoleuniform.`,
        solution: `**Oppgave A — Leseforståelse:**

*Argumenter FOR skoleuniform:*
1. Det fremmer likhet mellom elevene (il favorise l'égalité entre les élèves)
2. Det reduserer mobbing knyttet til merkeklær (il réduit le harcèlement lié aux vêtements de marque)

*Argumenter MOT skoleuniform:*
1. Det krenker individets ytringsfrihet (il porte atteinte à la liberté d'expression individuelle)
2. Det løser ikke de virkelige diskrimineringsproblemene (il ne résout pas les véritables problèmes de discrimination)

**Oppgave B — Modellinnledning:**

La question de l'uniforme scolaire divise la société française depuis des décennies. Si certains y voient un outil d'égalité sociale, d'autres le considèrent comme une atteinte aux libertés individuelles. On peut donc se demander : l'uniforme scolaire est-il un véritable remède aux inégalités, ou une mesure symbolique qui masque des problèmes plus profonds ? Nous examinerons d'abord les arguments en faveur de l'uniforme, avant de nuancer cette position en analysant ses limites.

(74 ord — innenfor rammen av 60–80 ord.)`,
      }
    },
    {
      id: 'fransk-3-16-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-16-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Simulert eksamensoppgave — Korrekturøvelse:

Rett alle feilene i følgende tekst (det er 8 feil totalt). Kategoriser hver feil som: grammatikk (G), ordforråd (O), syntaks (S) eller ortografi (Ort).

«La France est un pays que attire beaucoup de touristes chaque année. Bien que le climat est agréable, c'est surtout la culture et la gastronomie qui fascine les visiteurs. Les touristes qui vient de Norvège apprecie particulièrement les musées parisiens. Si ils auraient plus de temps, ils visiteraient aussi la campagne française. Je pense que la France est le plus beau pays de le monde.»`,
        solution: `**Korrigert tekst:**
«La France est un pays **qui** attire beaucoup de touristes chaque année. Bien que le climat **soit** agréable, c'est surtout la culture et la gastronomie qui **fascinent** les visiteurs. Les touristes qui **viennent** de Norvège **apprécient** particulièrement les musées parisiens. **S'ils avaient** plus de temps, ils visiteraient aussi la campagne française. Je pense que la France est le plus beau pays **du** monde.»

**Feiloversikt:**

| Nr. | Feil | Rettelse | Type |
|---|---|---|---|
| 1 | *que* → **qui** | Relativpronomen for subjekt, ikke objekt | G |
| 2 | *est* → **soit** | Subjonctif etter *bien que* | G |
| 3 | *fascine* → **fascinent** | Flertallssamsvar: *la culture et la gastronomie* (flertallssubjekt) | G |
| 4 | *vient* → **viennent** | Flertallssamsvar: *les touristes qui viennent* | G |
| 5 | *apprecie* → **apprécient** | Mangler accent + flertallsform | Ort + G |
| 6 | *Si ils auraient* → **S'ils avaient** | Elisjon (*si* + *ils* = *s'ils*) + aldri conditionnel etter *si* | S + G |
| 7 | *de le* → **du** | Sammentrekning: *de* + *le* = *du* (obligatorisk) | G |

(Feil 5 teller som to feil: ortografi og grammatikk, totalt 8 feil.)`,
      }
    },
    {
      id: 'fransk-3-16-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi gjennomgått strategier for eksamensforberedelse og -gjennomføring:

**La gestion du temps (tidsstyring):**
- Les alle oppgavene først (5–10 min)
- Fordel tiden proporsjonalt etter poengverdi
- Reserver 10–15 minutter til korrekturlesing
- Bruk kladd for plan og innledning

**Oppgaveinstrukser (les consignes):**
- «Discutez» = presenter begge sider + nyansert konklusjon
- «Analysez» = undersøk i dybden med eksempler
- «Commentez» = gi din vurdering med begrunnelse
- «Comparez» = finn likheter og forskjeller

**Vurderingskriterier:**
- Innhold (contenu) teller mest — relevans, argumenter, eksempler
- Språk (langue) — grammatikk, ordforråd, ortografi
- Struktur (structure) — oppbygning, konnektorer, avsnitt
- Kommunikasjon (communication) — tilpasning til sjanger og mottaker

**Korrekturstrategi (la relecture):**
- Sjekk subjekt-verb-samsvar
- Kontroller subjonctif etter uttrykk som krever det
- Verifiser si-setningsregelen
- Sjekk relativpronomen (qui/que/dont/où)
- Kontroller elisjoner og sammentrekninger

**Lykke til med eksamen — Bonne chance pour l'examen !**`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: "l'épreuve (f)", definition: 'Prøven / eksamensoppgaven — den konkrete oppgaven som skal besvares' },
    { term: 'la consigne', definition: 'Oppgaveinstruksen — forklarer hva du skal gjøre (discutez, analysez, commentez)' },
    { term: 'le barème', definition: 'Poengsystemet — hvor mange poeng hver oppgave er verdt' },
    { term: "la grille d'évaluation", definition: 'Vurderingsmatrisen — kriteriene sensoren bruker for å vurdere besvarelsen' },
    { term: 'le brouillon', definition: 'Kladden — brukes til å planlegge og strukturere besvarelsen før renskrift' },
    { term: 'la relecture', definition: 'Gjennomlesingen / korrekturlesingen — siste kontroll før innlevering' },
    { term: 'la gestion du temps', definition: 'Tidsstyringen — strategisk fordeling av tid mellom oppgaver og faser' },
    { term: 'la notation', definition: 'Karaktersettingen — systemet for å gi karakter basert på vurderingskriteriene' },
  ],
};

// ============================================================================
// Eksporter alle kapitler fra kap 14-16
// ============================================================================

export const FRANSK_3_CHAPTERS_14_16: TextbookChapter[] = [
  CHAPTER_FRANSK_3_14_1,
  CHAPTER_FRANSK_3_14_2,
  CHAPTER_FRANSK_3_14_3,
  CHAPTER_FRANSK_3_14_4,
  CHAPTER_FRANSK_3_15_1,
  CHAPTER_FRANSK_3_15_2,
  CHAPTER_FRANSK_3_15_3,
  CHAPTER_FRANSK_3_15_4,
  CHAPTER_FRANSK_3_16_1,
  CHAPTER_FRANSK_3_16_2,
  CHAPTER_FRANSK_3_16_3,
  CHAPTER_FRANSK_3_16_4,
];
