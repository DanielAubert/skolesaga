/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 2 (VG3) - Del 3: Globalisering og kultur
 *
 * Kapittel 3.1–3.5
 *
 * LK20-kompetansemål:
 * - drøfte kulturell globalisering og konsekvenser av denne
 * - analysere forholdet mellom globale medier, kulturimperialisme og kulturelt mangfold
 * - vurdere hvordan migrasjon og kulturmøter påvirker identitet og tilhørighet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Kulturell globalisering
// ============================================================================

export const CHAPTER_KOMKULT2_3_1: TextbookChapter = {
  id: 'komkult2-3-1',
  courseId: 'komkult-2',
  chapterNumber: '3.1',
  title: 'Kulturell globalisering',
  description: 'En innføring i kulturell globalisering: hva det innebærer, hva som driver den, og hvordan den påvirker kulturelle uttrykk, verdier og levemåter verden over.',
  estimatedMinutes: 22,
  competenceGoals: [
    'drøfte kulturell globalisering og konsekvenser av denne',
    'gjøre rede for drivkrefter bak kulturell globalisering',
  ],
  keyTerms: [
    { term: 'Globalisering', definition: 'Prosessen der verden knyttes tettere sammen gjennom økonomisk, politisk, teknologisk og kulturell utveksling på tvers av landegrenser.' },
    { term: 'Kulturell globalisering', definition: 'Den delen av globaliseringen som handler om spredning og utveksling av kulturelle uttrykk, verdier, ideer og levemåter mellom ulike samfunn.' },
    { term: 'Homogenisering', definition: 'Prosessen der kulturelle forskjeller viskes ut og kulturer blir mer like hverandre, ofte i retning av vestlig eller amerikansk kultur.' },
    { term: 'McDonaldisering', definition: 'George Ritzers begrep for at prinsipper fra hurtigmatindustrien — effektivitet, forutsigbarhet, kalkulerbarhet og kontroll — sprer seg til stadig flere samfunnsområder.' },
    { term: 'Deterritorialisering', definition: 'Prosessen der kultur løsrives fra et bestemt geografisk sted og spres gjennom medier, migrasjon og teknologi.' },
  ],
  content: [
    {
      id: 'kk2-3-1-intro',
      type: 'text',
      content: `## Hva er kulturell globalisering?

Har du noen gang tenkt over at ungdommer i Tokyo, Lagos, Oslo og Buenos Aires kan lytte til den samme musikken, se de samme seriene og bruke de samme appene — alt på samme dag? Denne typen kulturell utveksling i global skala er kjernen i det vi kaller kulturell globalisering.

Kulturell globalisering handler om at kulturelle uttrykk, verdier og levemåter sprer seg på tvers av landegrenser i et stadig raskere tempo. Det er en prosess som påvirker alt fra hva vi spiser og hva vi ser på, til hvordan vi tenker om oss selv og verden rundt oss.

I dette kapittelet skal du lære:
- Hva kulturell globalisering innebærer og hvordan den skiller seg fra økonomisk globalisering
- Hvilke drivkrefter som ligger bak den kulturelle globaliseringen
- Hva homogenisering og McDonaldisering betyr
- Hvordan kulturer påvirkes når verden knyttes tettere sammen`,
    },
    {
      id: 'kk2-3-1-def1',
      type: 'definition',
      title: 'Kulturell globalisering',
      content: `**Kulturell globalisering** er den prosessen der kulturelle uttrykk, verdier, ideer og levemåter spres på tvers av nasjonale og geografiske grenser. Denne spredningen skjer gjennom medier, migrasjon, turisme, handel og digital teknologi.

Mens **økonomisk globalisering** handler om at markeder, produksjon og kapital knyttes sammen globalt, og **politisk globalisering** handler om internasjonale organisasjoner og avtaler, dreier den **kulturelle globaliseringen** seg om møtet mellom ulike kulturer og den gjensidige påvirkningen som følger.

Kulturell globalisering er ikke et nytt fenomen — kulturutveksling har foregått i tusenvis av år langs handelsruter, gjennom erobringer og via religiøs misjon. Det som er nytt, er hastigheten og omfanget. Med internett og sosiale medier kan et kulturelt uttrykk nå milliarder av mennesker i løpet av timer.`,
    },
    {
      id: 'kk2-3-1-example',
      type: 'example',
      title: 'Eksempel: Kulturell globalisering i norsk hverdag',
      problem: 'Hvordan viser kulturell globalisering seg i hverdagen til en norsk ungdom?',
      solution: `En typisk dag kan se slik ut:

**Morgen:** Spiser frokost med avokado (opprinnelig fra Mexico) mens du scroller gjennom TikTok (kinesisk app) med innhold fra skapere over hele verden.

**Skole:** Diskuterer en Netflix-serie (amerikansk plattform) som er produsert i Sør-Korea (f.eks. Squid Game). Spiser sushi (japansk) til lunsj.

**Ettermiddag:** Hører på afrobeats (vest-afrikansk musikk) eller K-pop (sørkoreansk pop). Spiller et dataspill utviklet i Japan med venner fra ulike land via nett.

**Kveld:** Ser en bollywoodfilm (indisk) eller en tyrkisk dramaserie på strømmetjeneste. Bestiller thai-mat til middag.

**Poenget:** I løpet av én dag er en norsk ungdom i kontakt med kulturuttrykk fra minst ti ulike land — uten å forlate hjembyen. Dette er kulturell globalisering i praksis.`,
    },
    {
      id: 'kk2-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-1-ex1',
        number: '3.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner kulturell globalisering?',
        options: [
          { id: 'a', text: 'Spredning av kulturelle uttrykk, verdier og levemåter på tvers av landegrenser', isCorrect: true },
          { id: 'b', text: 'At alle land har samme politiske system', isCorrect: false },
          { id: 'c', text: 'At økonomisk handel foregår mellom ulike land', isCorrect: false },
          { id: 'd', text: 'At alle mennesker snakker samme språk', isCorrect: false },
        ],
        hints: ['Tenk på ordet «kulturell» — det handler spesifikt om kultur, ikke økonomi eller politikk.'],
        solution: 'Kulturell globalisering handler om at kulturelle uttrykk, verdier og levemåter spres mellom samfunn på tvers av landegrenser, gjennom medier, migrasjon, turisme og teknologi.',
      },
    },
    {
      id: 'kk2-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-1-ex2',
        number: '3.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med McDonaldisering?',
        options: [
          { id: 'a', text: 'At prinsipper fra hurtigmatindustrien — effektivitet, forutsigbarhet og kontroll — sprer seg til stadig flere samfunnsområder', isCorrect: true },
          { id: 'b', text: 'At McDonald\'s åpner restauranter i alle land', isCorrect: false },
          { id: 'c', text: 'At all mat i verden blir lik amerikansk mat', isCorrect: false },
          { id: 'd', text: 'At kulturelle forskjeller forsterkes gjennom matkultur', isCorrect: false },
        ],
        hints: ['George Ritzer brukte McDonald\'s som metafor for en bredere samfunnsutvikling.'],
        solution: 'McDonaldisering er George Ritzers begrep for at prinsipper fra hurtigmatindustrien — effektivitet, forutsigbarhet, kalkulerbarhet og kontroll — sprer seg til stadig flere deler av samfunnet, som utdanning, helsevesen og underholdning.',
      },
    },
    {
      id: 'kk2-3-1-def2',
      type: 'definition',
      title: 'Drivkrefter bak kulturell globalisering',
      content: `Flere faktorer driver den kulturelle globaliseringen fremover:

**1. Teknologi og medier**
Internett, sosiale medier og strømmetjenester gjør kulturelle uttrykk tilgjengelige overalt. En sang som går viralt på TikTok kan nå hundre millioner mennesker i løpet av dager.

**2. Økonomisk globalisering**
Internasjonale selskaper sprer sine produkter og merkevarer over hele verden. Coca-Cola, Apple og Nike er kulturelle symboler like mye som kommersielle produkter.

**3. Migrasjon og mobilitet**
Mennesker som flytter mellom land, tar med seg kulturelle praksiser og skaper nye kulturmøter. Diasporasamfunn opprettholder og sprer kultur på tvers av grenser.

**4. Turisme**
Masseturisme eksponerer milliarder av mennesker for andre kulturer hvert år og skaper kulturutveksling i begge retninger.

**5. Utdanning og forskning**
Utvekslingsprogrammer, internasjonale universiteter og global kunnskapsdeling bidrar til kulturell påvirkning.`,
    },
    {
      id: 'kk2-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-1-ex3',
        number: '3.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg to drivkrefter bak kulturell globalisering og forklar hvordan de påvirker norsk kultur. Gi konkrete eksempler.',
        hints: ['Tenk på teknologi, migrasjon, turisme, økonomi eller medier — og hvordan de bringer nye kulturuttrykk inn i norsk hverdag.'],
        solution: 'Et godt svar velger to drivkrefter og gir konkrete norske eksempler. F.eks.: 1) Teknologi og medier — strømmetjenester som Netflix og Spotify gir norske ungdommer tilgang til koreanske serier, latinamerikansk musikk og japansk anime. K-pop og K-drama har blitt populært i Norge takket være global tilgjengelighet. 2) Migrasjon — innvandring har brakt nye mattradisjoner (kebab, pho, falafel), religiøse praksiser og språklige uttrykk inn i norsk hverdag. Grønland i Oslo er et eksempel på et flerkulturelt byområde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-1-ex4',
        number: '3.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Kulturell globalisering fører til at alle kulturer blir like.» Bruk begrepene homogenisering og deterritorialisering i svaret ditt.',
        hints: ['Vurder om kulturell utveksling nødvendigvis betyr at kulturer blir identiske, eller om det kan oppstå nye blandinger.'],
        solution: 'Et godt svar drøfter begge sider: Homogenisering-argumentet er at globale medier, merkevarer og popkultur gjør kulturer likere — Hollywood-filmer, McDonald\'s og iPhone finnes overalt. Deterritorialisering betyr at kultur løsrives fra sted — norsk ungdom kan leve i en «global» kultur like mye som i en norsk. Men motargumentet er sterkt: kulturer tilpasser globale impulser til lokale forhold. Taco-fredagen er «norsk», ikke meksikansk. K-pop er globalt, men med distinkt koreansk identitet. Full homogenisering er derfor en overforenkling — kulturell globalisering skaper også nye, unike uttrykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-1-summary',
      type: 'text',
      content: `## Oppsummering

- **Kulturell globalisering** er spredning av kulturelle uttrykk, verdier og levemåter på tvers av landegrenser
- De viktigste **drivkreftene** er teknologi, medier, økonomisk globalisering, migrasjon og turisme
- **Homogenisering** betyr at kulturer blir likere, ofte i vestlig retning
- **McDonaldisering** beskriver spredningen av hurtigmatindustriens prinsipper til andre samfunnsområder
- **Deterritorialisering** innebærer at kultur løsrives fra bestemte steder og spres globalt
- Kulturell globalisering er ikke et nytt fenomen, men hastigheten og omfanget er historisk unikt`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-3-1-ex5',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-1-ex5',
        number: '3.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en liste over fem kulturelle uttrykk i din hverdag som har opprinnelse i andre land. For hvert uttrykk: Oppgi opprinnelsesland og forklar hvordan det har kommet til Norge.',
        hints: ['Tenk på mat, musikk, klær, teknologi, språkuttrykk, TV-serier og apper.'],
        solution: 'Et godt svar identifiserer fem uttrykk med riktig opprinnelse og forklarer spredningsmekanismen. Eksempel: 1) Sushi (Japan) — spredd gjennom japansk matkultur og globaliseringen av restaurantbransjen. 2) TikTok (Kina) — spredd gjennom digital teknologi og appmarkeder. 3) Yoga (India) — spredd gjennom migrasjon, turisme og helsebevegelsen. 4) K-pop (Sør-Korea) — spredd gjennom YouTube, sosiale medier og fankulturer. 5) Halloween (USA/Irland) — spredd gjennom amerikanske filmer, TV og kommersialisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-1-ex6',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-1-ex6',
        number: '3.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign kulturell globalisering i dag med kulturutveksling langs Silkeveien for 1000 år siden. Hva er likt og hva er forskjellig?',
        hints: ['Tenk på hastighet, omfang, hvem som deltok og hvilken teknologi som var tilgjengelig.'],
        solution: 'Likheter: Begge innebærer spredning av kulturelle uttrykk (mat, religion, kunst, teknologi) mellom fjerne samfunn gjennom handel og kontakt. Begge fører til kulturell blanding og nye uttrykk. Forskjeller: 1) Hastighet — Silkeveien tok måneder/år, i dag tar det sekunder via internett. 2) Omfang — Silkeveien nådde eliter og handelsfolk, i dag når kulturell globalisering milliarder. 3) Retning — Silkeveien var mer gjensidig utveksling, i dag dominerer vestlig/amerikansk kultur. 4) Teknologi — digital kommunikasjon gjør kulturutveksling uavhengig av fysisk transport.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Kulturimperialisme og mediemakt
// ============================================================================

export const CHAPTER_KOMKULT2_3_2: TextbookChapter = {
  id: 'komkult2-3-2',
  courseId: 'komkult-2',
  chapterNumber: '3.2',
  title: 'Kulturimperialisme og mediemakt',
  description: 'Utforsk teorien om kulturimperialisme, hvordan globale medieselskaper påvirker kulturer, og debatten om vestlig dominans i den globale kulturutvekslingen.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere forholdet mellom globale medier, kulturimperialisme og kulturelt mangfold',
    'drøfte maktforhold i global kulturutveksling',
  ],
  keyTerms: [
    { term: 'Kulturimperialisme', definition: 'Teorien om at mektige nasjoner — særlig USA — dominerer global kulturutveksling og påtvinger andre samfunn sine verdier, normer og kulturuttrykk.' },
    { term: 'Mediemakt', definition: 'Evnen medieselskaper og medieinnhold har til å påvirke holdninger, verdier og kulturelle praksiser i samfunnet.' },
    { term: 'Mediekonglomerat', definition: 'Store selskaper som eier flere mediekanaler og innholdsprodusenter, og som dermed kontrollerer store deler av det globale medietilbudet.' },
    { term: 'Vestlig dominans', definition: 'Den uforholdsmessig store innflytelsen vestlige — særlig amerikanske — kulturuttrykk har på resten av verden.' },
    { term: 'Soft power', definition: 'Joseph Nyes begrep for evnen til å påvirke andre land gjennom kultur, verdier og politisk tiltrekning, i motsetning til militær eller økonomisk makt (hard power).' },
  ],
  content: [
    {
      id: 'kk2-3-2-intro',
      type: 'text',
      content: `## Er kulturell globalisering rettferdig?

Når vi snakker om kulturell globalisering, oppstår et viktig spørsmål: Er denne kulturutvekslingen likeverdig, eller er det noen kulturer som dominerer på bekostning av andre?

Tenk over: Hvor mange amerikanske filmer ser du i løpet av et år? Og hvor mange nigerianske, indiske eller indonesiske filmer ser du? Selv om Bollywood produserer flere filmer enn Hollywood, er det Hollywood som dominerer verdens kinoer. Dette reiser spørsmålet om kulturimperialisme.

I dette kapittelet skal du lære:
- Hva kulturimperialisme-teorien går ut på
- Hvordan globale medieselskaper påvirker kulturutvekslingen
- Hva soft power betyr og hvordan det brukes
- Kritikk av kulturimperialisme-perspektivet`,
    },
    {
      id: 'kk2-3-2-def1',
      type: 'definition',
      title: 'Kulturimperialisme',
      content: `**Kulturimperialisme** er teorien om at mektige nasjoner — særlig USA og Vesten — dominerer den globale kulturutvekslingen og påfører andre samfunn sine verdier, normer og kulturuttrykk. Begrepet ble utviklet av medieforskere på 1970-tallet, blant annet Herbert Schiller.

**Kjernen i argumentet:**
- Kulturutvekslingen er asymmetrisk — den går hovedsakelig fra Vesten til resten
- Vestlige medieselskaper kontrollerer global distribusjon av kultur
- Lokale kulturer fortrenges av vestlig popkultur, konsum og verdier
- Det handler om makt: de som kontrollerer mediene, kontrollerer kulturutviklingen

**Historisk kontekst:** Begrepet bygger på en parallell til politisk imperialisme — der kolonimakter påtvang andre folk sine lover og styresett, påfører kulturimperialismen dem sine verdier og kulturuttrykk.`,
    },
    {
      id: 'kk2-3-2-example',
      type: 'example',
      title: 'Eksempel: Hollywoods globale dominans',
      problem: 'Hvordan kan Hollywood brukes som eksempel på kulturimperialisme?',
      solution: `**Fakta:**
- Hollywood-filmer utgjør omtrent 70–80 % av billettinntektene på kinoer i de fleste europeiske land
- Amerikanske strømmetjenester (Netflix, Disney+, HBO Max) dominerer det globale markedet
- De største filmstjernene i verden er nesten utelukkende amerikanske eller engelskspråklige

**Kulturelle konsekvenser ifølge kritikerne:**
- Amerikanske verdier som individualisme, konkurranse og forbruk normaliseres globalt
- Lokale filmindustrier sliter med å konkurrere og mister publikum
- Engelskspråklig kultur fremstilles som «normalen», andre kulturer som eksotisk eller annerledes
- Unge mennesker verden over identifiserer seg mer med amerikanske kulturuttrykk enn med sine egne

**Motargument:**
- Publikum velger aktivt å se Hollywood-filmer — de påtvinges ikke
- Mange Hollywood-filmer inkluderer nå mangfoldige perspektiver
- Ikke-vestlige filmindustrier (Bollywood, Nollywood, K-drama) vokser raskt
- Strømmetjenester gir faktisk mer rom for lokalt innhold enn tradisjonelle kinoer`,
    },
    {
      id: 'kk2-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-2-ex1',
        number: '3.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva går teorien om kulturimperialisme ut på?',
        options: [
          { id: 'a', text: 'At mektige nasjoner dominerer global kulturutveksling og påfører andre sine verdier og kulturuttrykk', isCorrect: true },
          { id: 'b', text: 'At alle kulturer påvirker hverandre i like stor grad', isCorrect: false },
          { id: 'c', text: 'At kultur kun spres gjennom militær erobring', isCorrect: false },
          { id: 'd', text: 'At lokale kulturer aldri påvirkes av globaliseringen', isCorrect: false },
        ],
        hints: ['Tenk på ordet «imperialisme» — det handler om makt og dominans.'],
        solution: 'Kulturimperialisme-teorien hevder at mektige nasjoner — særlig USA og Vesten — dominerer den globale kulturutvekslingen og påfører andre samfunn sine verdier og kulturuttrykk gjennom medier, merkevarer og underholdningsindustri.',
      },
    },
    {
      id: 'kk2-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-2-ex2',
        number: '3.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med begrepet «soft power»?',
        options: [
          { id: 'a', text: 'Evnen til å påvirke andre land gjennom kultur, verdier og tiltrekning — ikke militær makt', isCorrect: true },
          { id: 'b', text: 'Militær makt som brukes forsiktig og strategisk', isCorrect: false },
          { id: 'c', text: 'Økonomisk press gjennom sanksjoner og handelsblokader', isCorrect: false },
          { id: 'd', text: 'Diplomatisk forhandling mellom stater i FN', isCorrect: false },
        ],
        hints: ['Joseph Nye skiller mellom «hard power» (tvang) og «soft power» (tiltrekning).'],
        solution: 'Soft power er Joseph Nyes begrep for evnen til å påvirke andre gjennom tiltrekning snarere enn tvang. Et lands kultur, verdier og politikk kan gjøre det attraktivt og innflytelsesrikt uten bruk av militær eller økonomisk makt. Hollywoods filmer og amerikanske universiteter er eksempler på USAs soft power.',
      },
    },
    {
      id: 'kk2-3-2-def2',
      type: 'definition',
      title: 'Mediekonglomerater og global mediemakt',
      content: `**Mediekonglomerater** er store selskaper som eier og kontrollerer flere mediekanaler, produksjonsselskaper og distribusjonsnettverk. De har enorm innflytelse over hvilke kulturelle uttrykk som når et globalt publikum.

**Eksempler på store mediekonglomerater:**
- **The Walt Disney Company:** Eier Disney, Pixar, Marvel, Star Wars, ESPN, ABC, Hulu, Disney+
- **Comcast/NBCUniversal:** Eier NBC, Universal Pictures, DreamWorks, Sky
- **Warner Bros. Discovery:** Eier HBO, CNN, Warner Bros., Discovery Channel
- **Alphabet/Google:** Eier YouTube, den største videoplattformen i verden

**Hvorfor dette er relevant:**
- Få selskaper kontrollerer det meste av global underholdning
- De avgjør hvilke historier som fortelles — og hvilke som ikke fortelles
- Kommersielle interesser styrer ofte hva som produseres: det som selger best globalt
- Lokale stemmer og perspektiver kan bli marginalisert når globale aktører dominerer

**Soft power gjennom medier:** Når amerikanske verdier (individualisme, frihet, entreprenørskap) formidles gjennom underholdning, fungerer det som soft power — det gjør USAs verdensbilde attraktivt uten å bruke tvang.`,
    },
    {
      id: 'kk2-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-2-ex3',
        number: '3.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan et mediekonglomerat som Disney kan fungere som kulturimperialistisk aktør. Gi konkrete eksempler fra Disneys innhold.',
        hints: ['Tenk på hvilke verdier, skjønnhetsidealer og fortellinger Disney sprer globalt.'],
        solution: 'Disney sprer kulturelle verdier gjennom filmer, TV-serier, fornøyelsesparker og merchandise som når milliarder. Eksempler: Disney-prinsesser har historisk formidlet vestlige skjønnhetsidealer og kjønnsroller. Marvel-filmene fremmer individualistiske heltefortellinger og amerikanske verdier. Disneys fornøyelsesparker i Paris, Tokyo, Shanghai og Hong Kong bringer amerikansk underholdningskultur direkte inn i andre kulturer. Motargument: Disney har de siste årene inkludert flere mangfoldige karakterer og fortellinger (Moana, Encanto, Coco).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-2-ex4',
        number: '3.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om strømmetjenester som Netflix og Spotify forsterker eller motvirker kulturimperialisme. Bruk konkrete eksempler i svaret.',
        hints: ['Tenk på at strømmetjenester både er dominert av vestlig innhold og gir rom for lokalt innhold.'],
        solution: 'Forsterker: Plattformene er amerikanskeid, algoritmene favoriserer innhold med bred appell (ofte vestlig), og mesteparten av markedsføringsbudsjettet går til engelskspråklig innhold. Motvirker: Netflix investerer tungt i lokalt innhold — koreanske serier (Squid Game), spanske (La Casa de Papel) og tyrkiske serier når globalt publikum. Spotify har gjort afrobeats og latinamerikansk musikk tilgjengelig for hele verden. Konklusjon: Strømmetjenester er tvetydige — de er vestlige plattformer, men de gir samtidig ikke-vestlig kultur en global scene som aldri før har eksistert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-2-summary',
      type: 'text',
      content: `## Oppsummering

- **Kulturimperialisme** er teorien om at mektige nasjoner dominerer global kulturutveksling
- **Mediemakt** handler om medieselskapers evne til å forme holdninger og verdier
- **Mediekonglomerater** kontrollerer store deler av global underholdning og kulturproduksjon
- **Soft power** er påvirkning gjennom kultur og tiltrekning, i motsetning til militær makt
- Debatten har to sider: noen ser kulturimperialisme som en reell trussel mot kulturelt mangfold, andre mener publikum er aktive og velger selv
- Strømmetjenester har skapt nye muligheter for ikke-vestlig kultur, men plattformene er fortsatt vestlig kontrollert`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-3-2-ex5',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-2-ex5',
        number: '3.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'K-pop (koreansk popmusikk) og K-drama har blitt globale fenomener. Vurder om dette utfordrer eller bekrefter teorien om kulturimperialisme. Begrunn svaret med eksempler.',
        hints: ['Tenk på om K-pop er et eksempel på at ikke-vestlige kulturer kan dominere globalt, eller om den følger vestlige formler.'],
        solution: 'Utfordrer: K-pop viser at kulturell innflytelse kan gå i andre retninger enn fra Vesten. BTS og Blackpink har milliarder av fans. Koreanske dramaer dominerer strømmetjenester globalt. Sør-Korea bruker bevisst kultureksport som soft power. Bekrefter delvis: K-pop bygger på vestlige popmusikkformler og bruker vestlige distribusjonsplattformer (YouTube, Spotify). Artister synger ofte delvis på engelsk. Industrien er organisert etter kapitalistiske prinsipper. Konklusjon: K-pop viser at kulturimperialisme-teorien er for enkel — kulturflyten er mer kompleks enn en enveiskjøring fra Vesten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-2-ex6',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-2-ex6',
        number: '3.2.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar begrepet soft power med egne ord. Gi deretter to eksempler på hvordan Norge bruker soft power internasjonalt.',
        hints: ['Tenk på norsk kultur, verdier og politikk som gjør Norge attraktivt i utlandet.'],
        solution: 'Soft power er evnen til å påvirke andre gjennom tiltrekning — kultur, verdier og politisk praksis — i stedet for gjennom tvang. Norske eksempler: 1) Den norske velferdsmodellen og likestillingsverdier gjør Norge til et forbilde for mange land, noe som gir diplomatisk innflytelse. 2) Norsk musikk (Kygo, Aurora, A-ha) og TV-serier (Skam) har nådd globalt publikum og skapt interesse for norsk kultur og levemåte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Hybridisering og glokalisering
// ============================================================================

export const CHAPTER_KOMKULT2_3_3: TextbookChapter = {
  id: 'komkult2-3-3',
  courseId: 'komkult-2',
  chapterNumber: '3.3',
  title: 'Hybridisering og glokalisering',
  description: 'Lær om hvordan kulturer blandes og tilpasses lokalt. Forstå begrepene hybridisering, kreolisering og glokalisering som alternativer til kulturimperialisme-perspektivet.',
  estimatedMinutes: 23,
  competenceGoals: [
    'drøfte kulturell globalisering og konsekvenser av denne',
    'analysere eksempler på hybridisering og glokalisering i egen hverdag',
  ],
  keyTerms: [
    { term: 'Hybridisering', definition: 'Prosessen der elementer fra ulike kulturer blandes og skaper nye, sammensatte kulturuttrykk som ikke tilhører én bestemt kultur.' },
    { term: 'Glokalisering', definition: 'Sammenslåing av «globalisering» og «lokalisering» — prosessen der globale kulturuttrykk tilpasses lokale forhold, verdier og tradisjoner.' },
    { term: 'Kreolisering', definition: 'En form for hybridisering der kulturer som møtes i ulik maktposisjon blandes og skaper noe helt nytt, opprinnelig brukt om språkblanding i kolonitiden.' },
    { term: 'Kulturell motstand', definition: 'Bevisste forsøk på å bevare eller styrke lokal kultur i møte med global kulturpåvirkning.' },
    { term: 'Tredje kultur', definition: 'En ny kultur som oppstår i møtet mellom to eller flere kulturer, og som ikke er identisk med noen av opphavskulturene.' },
  ],
  content: [
    {
      id: 'kk2-3-3-intro',
      type: 'text',
      content: `## Når kulturer blandes — noe nytt oppstår

Kulturimperialisme-perspektivet gir inntrykk av at lokale kulturer er passive mottagere av vestlig kultur. Men virkeligheten er langt mer dynamisk. Når globale kulturuttrykk møter lokale tradisjoner, oppstår det ofte noe helt nytt — en blanding som verken er rent global eller rent lokal.

Taco-fredagen er et godt norsk eksempel: meksikansk mat tilpasset norsk smak, servert med norsk familiehygge. Det er verken meksikansk eller tradisjonelt norsk — det er noe nytt.

I dette kapittelet skal du lære:
- Hva hybridisering betyr og hvordan det skiller seg fra homogenisering
- Hva glokalisering innebærer og hvorfor det er et nyttig begrep
- Hvordan kreolisering skaper nye kulturelle uttrykk
- Eksempler på kulturell motstand mot globalisering`,
    },
    {
      id: 'kk2-3-3-def1',
      type: 'definition',
      title: 'Hybridisering',
      content: `**Hybridisering** betyr at elementer fra ulike kulturer blandes og skaper nye, sammensatte kulturuttrykk. Begrepet er hentet fra biologien (krysning av arter) og brukes i kulturteori for å beskrive kulturblanding.

**Kjennetegn ved hybridisering:**
- Det oppstår noe nytt som ikke tilhører én bestemt kultur
- Prosessen er kreativ og dynamisk — ikke bare en «utvanning»
- Begge (eller flere) kulturer bidrar med elementer
- Resultatet kan bli rikere og mer mangfoldig enn opphavskulturene

**Teoretisk bakgrunn:** Kulturforskeren Homi K. Bhabha argumenterer for at hybridisering er en naturlig og uunngåelig prosess i alle kulturmøter. Han mener at kultur alltid har vært blandet — ideen om «rene» kulturer er en myte.

**Forskjell fra homogenisering:** Mens homogenisering betyr at kulturer blir like (ofte i vestlig retning), betyr hybridisering at det oppstår noe nytt og unikt. Hybridisering handler om blanding, ikke ensretting.`,
    },
    {
      id: 'kk2-3-3-example',
      type: 'example',
      title: 'Eksempel: Hybridisering i musikk',
      problem: 'Hvordan viser hybridisering seg i moderne musikk?',
      solution: `Musikk er kanskje det tydeligste eksempelet på kulturell hybridisering:

**Reggaeton:** Blanding av latinamerikansk musikk, jamaicansk reggae og hiphop. Oppsto i Puerto Rico og har blitt global (Daddy Yankee, Bad Bunny).

**Afrobeats:** Blanding av vestafrikansk tradisjonell musikk, hiphop, R&B og elektronisk dansemusikk. Artister som Burna Boy og Wizkid har gjort det globalt.

**Norsk rap:** Kombinerer amerikansk rapkultur med norsk språk, humor og referanser. Karpe er et godt eksempel — rapperne har bakgrunn fra India og Egypt, rapper på norsk og blander kulturelle referanser fritt.

**K-pop:** Blanding av koreansk popmusikk, vestlige produksjonsteknikker, hiphop og elektronisk musikk, med distinkt koreansk visuell estetikk.

**Poenget:** Ingen av disse sjangrene er «ren» — de er alle hybride uttrykk som har blitt mulige gjennom kulturmøter. Og de er ofte mer populære enn de «rene» opphavssjangrene.`,
    },
    {
      id: 'kk2-3-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-3-ex1',
        number: '3.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med hybridisering i kultursammenheng?',
        options: [
          { id: 'a', text: 'At elementer fra ulike kulturer blandes og skaper nye, sammensatte kulturuttrykk', isCorrect: true },
          { id: 'b', text: 'At alle kulturer gradvis blir like', isCorrect: false },
          { id: 'c', text: 'At lokale kulturer forsvinner helt', isCorrect: false },
          { id: 'd', text: 'At kulturer bevisst holdes adskilt fra hverandre', isCorrect: false },
        ],
        hints: ['Tenk på «hybrid» — en krysning mellom to ulike ting som skaper noe nytt.'],
        solution: 'Hybridisering i kultursammenheng betyr at elementer fra ulike kulturer blandes og skaper noe nytt og sammensatt. I motsetning til homogenisering (der alt blir likt) handler hybridisering om kreativ blanding der begge kulturer bidrar.',
      },
    },
    {
      id: 'kk2-3-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-3-ex2',
        number: '3.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr glokalisering?',
        options: [
          { id: 'a', text: 'At globale kulturuttrykk tilpasses lokale forhold, verdier og tradisjoner', isCorrect: true },
          { id: 'b', text: 'At lokal kultur sprer seg globalt uten endring', isCorrect: false },
          { id: 'c', text: 'At global og lokal kultur holdes strengt adskilt', isCorrect: false },
          { id: 'd', text: 'At alle lokale kulturer erstattes av global kultur', isCorrect: false },
        ],
        hints: ['Ordet er en sammenslåing av «globalisering» og «lokalisering».'],
        solution: 'Glokalisering betyr at globale produkter, uttrykk og ideer tilpasses lokale forhold. McDonald\'s i India serverer vegetariske burgere fordi mange indere ikke spiser kjøtt. IKEA i Japan tilpasser møbler til små leiligheter. Globalt innhold får lokalt preg.',
      },
    },
    {
      id: 'kk2-3-3-def2',
      type: 'definition',
      title: 'Glokalisering og kulturell motstand',
      content: `**Glokalisering** er sammenslåingen av «globalisering» og «lokalisering». Begrepet beskriver prosessen der globale kulturuttrykk og produkter tilpasses lokale markeder, verdier og tradisjoner. Det ble popularisert av sosiologen Roland Robertson.

**Eksempler på glokalisering:**
- McDonald's serverer McSpicy Paneer i India, teriyaki-burger i Japan og McRib i Norge
- Netflix produserer lokalt innhold i over 50 land (Ragnarok i Norge, Dark i Tyskland)
- IKEA tilpasser katalogen til lokale smakspreferanser og boligstørrelser
- Coca-Cola justerer sukkerinnhold og markedsføring etter lokale preferanser

**Kulturell motstand** er bevisste forsøk på å bevare eller styrke lokal kultur i møte med globalisering:
- Frankrike har kvoter for fransk musikk på radio (minst 40 %)
- Mange land har språkvernlover som beskytter nasjonalspråket
- Slow Food-bevegelsen fremmer lokal matkultur mot hurtigmatens dominans
- Urfolksgrupper kjemper for å bevare tradisjonelle språk og praksiser

Kulturell motstand viser at mennesker ikke er passive mottagere — de velger aktivt hva de tar imot og hva de avviser.`,
    },
    {
      id: 'kk2-3-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-3-ex3',
        number: '3.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tre eksempler på glokalisering fra Norge eller norsk kultur. For hvert eksempel: Forklar hva som er det globale elementet og hva som er den lokale tilpasningen.',
        hints: ['Tenk på mat, medier, merkevarekjeder, musikk eller tradisjoner som har blitt «fornorsket».'],
        solution: 'Et godt svar identifiserer tre eksempler med tydelig skille mellom globalt og lokalt. Eksempel: 1) Taco-fredagen — globalt: meksikansk/tex-mex-mat, lokalt: tilpasset norsk smak (Old El Paso-pakker, rømme, norsk familietradisjon). 2) Halloween i Norge — globalt: amerikansk tradisjon, lokalt: kombinert med norsk Allehelgensdag, tilpasset norske boligforhold. 3) IKEA i Norge — globalt: svensk konsept, lokalt: fokus på hyttemøbler, vinterprodukter og norsk friluftstil i markedsføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-3-ex4',
        number: '3.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign begrepene homogenisering og hybridisering. Drøft hvilken av de to som best beskriver utviklingen av norsk ungdomskultur i dag.',
        hints: ['Tenk på om norske ungdommer blir «mer amerikanske» eller om de skaper noe eget og unikt.'],
        solution: 'Homogenisering: alle blir like, kulturelle forskjeller viskes ut. Hybridisering: kulturer blandes og skaper noe nytt. Norsk ungdomskultur: Argumenter for homogenisering — norske ungdommer bruker de samme appene, ser de samme seriene og har lignende forbruksmønstre som ungdom globalt. Argumenter for hybridisering — norsk rap (Karpe), norsk humor, «koselig»-kulturen, friluftsliv og norske verdier preger ungdomskulturen og blandes med globale impulser. Konklusjon: Hybridisering er en bedre beskrivelse fordi norsk ungdomskultur er en kreativ blanding — ikke en kopi av amerikansk ungdomskultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-3-summary',
      type: 'text',
      content: `## Oppsummering

- **Hybridisering** er prosessen der ulike kulturer blandes og skaper nye uttrykk
- **Kreolisering** er en spesifikk form for hybridisering med historisk maktasymmetri
- **Glokalisering** beskriver tilpasningen av globale uttrykk til lokale forhold
- **Kulturell motstand** viser at mennesker aktivt velger hva de tar imot og avviser
- Hybridisering er et alternativ til homogenisering-perspektivet — det viser at kulturmøter skaper noe nytt, ikke bare ensretting
- Homi K. Bhabha argumenterer for at alle kulturer alltid har vært hybride — «rene» kulturer er en myte`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-3-3-ex5',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-3-ex5',
        number: '3.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Noen mener at begrepet «kulturell motstand» viser at lokal kultur ikke er truet av globalisering. Andre mener at behovet for motstand nettopp viser at globaliseringen er en trussel. Drøft begge synspunkter.',
        hints: ['Tenk på at selve eksistensen av motstandsbevegelser kan tolkes på to ulike måter.'],
        solution: 'Synspunkt 1: Kulturell motstand viser at folk aktivt velger å bevare sin kultur. Frankrike kvoterer musikk, samiske aktivister revitaliserer joik, Slow Food-bevegelsen vokser. At folk kjemper tilbake, viser at lokal kultur er levedyktig og ikke passivt forsvinner. Synspunkt 2: At det er nødvendig med kvoter og lovverk for å beskytte kultur, viser at den er under press. Uten beskyttelse ville lokale kulturuttrykk tape i konkurranse med globale mediegiganter. Behovet for motstand er i seg selv et bevis på trusselen. Konklusjon: Begge perspektiver har noe for seg — trusselen er reell, men menneskers evne til motstand og tilpasning bør ikke undervurderes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-3-ex6',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-3-ex6',
        number: '3.3.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva kreolisering betyr, og gi et eksempel fra språk og et eksempel fra matkultur.',
        hints: ['Kreolisering oppsto som begrep i forbindelse med kolonitiden og språkblanding.'],
        solution: 'Kreolisering er en form for hybridisering der kulturer som møtes under ulike maktforhold, blandes og skaper noe nytt. Opprinnelig brukt om kreolspråk — språk som oppsto i kolonisamfunn der europeisk og afrikansk/asiatisk språk smeltet sammen. Språkeksempel: Haitisk kreol — en blanding av fransk og vestafrikanske språk som oppsto under slaveriet og nå er et eget språk. Mateksempel: Karibisk mat — en blanding av afrikansk, europeisk, indisk og urfolks matlaging som oppsto i kolonitidens Karibia. Retter som jerk chicken kombinerer afrikanske krydder og urfolksteknikker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Migrasjon og kulturmøter
// ============================================================================

export const CHAPTER_KOMKULT2_3_4: TextbookChapter = {
  id: 'komkult2-3-4',
  courseId: 'komkult-2',
  chapterNumber: '3.4',
  title: 'Migrasjon og kulturmøter',
  description: 'Utforsk hvordan migrasjon skaper kulturmøter, og lær om ulike strategier for integrering: assimilasjon, segregasjon, integrering og marginalisering.',
  estimatedMinutes: 24,
  competenceGoals: [
    'vurdere hvordan migrasjon og kulturmøter påvirker identitet og tilhørighet',
    'gjøre rede for ulike akkulturasjonsstratgier og deres konsekvenser',
  ],
  keyTerms: [
    { term: 'Migrasjon', definition: 'Forflytning av mennesker fra ett sted til et annet, enten innenfor et land (intern migrasjon) eller mellom land (internasjonal migrasjon).' },
    { term: 'Akkulturasjon', definition: 'Prosessen der en person eller gruppe tilpasser seg en ny kultur gjennom kontakt med den, uten nødvendigvis å gi opp sin opprinnelige kultur.' },
    { term: 'Assimilasjon', definition: 'Akkulturasjonsstrategi der innvandrere gir opp sin opprinnelseskultur og fullt ut overtar majoritetskulturens verdier, normer og levemåte.' },
    { term: 'Integrering', definition: 'Akkulturasjonsstrategi der innvandrere deltar i majoritetskulturen og beholder sentrale deler av sin opprinnelseskultur.' },
    { term: 'Diaspora', definition: 'En folkegruppe som lever spredt utenfor sitt opprinnelige hjemland, men som opprettholder kulturell tilknytning til opprinnelseslandet.' },
  ],
  content: [
    {
      id: 'kk2-3-4-intro',
      type: 'text',
      content: `## Når mennesker flytter — kulturer møtes

Migrasjon er en av de sterkeste drivkreftene bak kulturell globalisering. Når mennesker flytter, tar de med seg språk, tradisjoner, mat, religion og verdier. Samtidig møter de en ny kultur som de må forholde seg til. Disse kulturmøtene skaper både muligheter og utfordringer.

Norge har de siste tiårene blitt et stadig mer flerkulturelt samfunn. I dag har omtrent 20 prosent av befolkningen innvandrerbakgrunn. Det betyr at kulturmøter er en del av hverdagen for de fleste nordmenn.

I dette kapittelet skal du lære:
- Ulike typer migrasjon og deres årsaker
- Hva akkulturasjon innebærer
- Fire akkulturasjonstrategier: assimilasjon, integrering, segregasjon og marginalisering
- Hvordan diasporasamfunn opprettholder kultur på tvers av grenser`,
    },
    {
      id: 'kk2-3-4-def1',
      type: 'definition',
      title: 'Migrasjon og push/pull-faktorer',
      content: `**Migrasjon** er forflytning av mennesker fra ett sted til et annet. Vi skiller mellom flere typer:

**Etter avstand:**
- **Intern migrasjon:** Flytting innenfor et land (bygd til by, nord til sør)
- **Internasjonal migrasjon:** Flytting mellom land

**Etter årsak:**
- **Arbeidsmigrasjon:** Å flytte for å finne arbeid eller bedre arbeidsmuligheter
- **Flukt:** Å flytte for å unngå krig, forfølgelse eller naturkatastrofer
- **Familiemigrasjon:** Å flytte for å gjenforenes med familie
- **Utdanningsmigrasjon:** Å flytte for å studere

**Push-faktorer** (skyver folk bort fra hjemstedet):
- Krig, konflikt og forfølgelse
- Fattigdom og arbeidsledighet
- Naturkatastrofer og klimaendringer
- Politisk undertrykkelse

**Pull-faktorer** (trekker folk mot et nytt sted):
- Jobbtilbud og bedre økonomi
- Sikkerhet og stabilitet
- Utdanningsmuligheter
- Familietilknytning`,
    },
    {
      id: 'kk2-3-4-example',
      type: 'example',
      title: 'Eksempel: Akkulturasjon i praksis',
      problem: 'Hvordan kan akkulturasjon se ut for en syrisk flyktningfamilie i Norge?',
      solution: `**Familien Khalil** kom til Norge fra Syria i 2015. Slik kan akkulturasjonsprosessen se ut:

**Språk:** Foreldrene lærer norsk på norskkurs, men snakker arabisk hjemme. Barna lærer norsk raskt på skolen og blir ofte «tolker» for foreldrene.

**Mat:** Familien lager syrisk mat hjemme, men barna spiser norsk mat i skolekantinen. Gradvis introduseres norske matretter i hjemmet, og familien finner noen norske retter de liker.

**Verdier:** Foreldrene holder fast ved verdier som respekt for eldre og tett familiesamhold. Barna tilegner seg norske verdier om selvstendighet og likestilling. Noen ganger oppstår spenninger.

**Tradisjoner:** Familien feirer id og faster i ramadan (syrisk/islamsk). Barna deltar i 17. mai-feiring og juleavslutning på skolen. Taco-fredagen blir en ny familietradisjon.

**Religion:** Familien er muslimsk og finner en moské i nærheten. Barna har kristne og sekulære venner og lærer om ulike livssyn.

**Resultat:** Over tid utvikler familien en hybrid identitet — de er verken «helt syriske» eller «helt norske», men en blanding som er unik for dem.`,
    },
    {
      id: 'kk2-3-4-ex1',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-4-ex1',
        number: '3.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med akkulturasjon?',
        options: [
          { id: 'a', text: 'Prosessen der en person tilpasser seg en ny kultur gjennom kontakt med den', isCorrect: true },
          { id: 'b', text: 'At man fullstendig gir opp sin opprinnelige kultur', isCorrect: false },
          { id: 'c', text: 'At to kulturer holdes helt adskilt fra hverandre', isCorrect: false },
          { id: 'd', text: 'At man nekter å ta del i den nye kulturen', isCorrect: false },
        ],
        hints: ['Akkulturasjon er den overordnede prosessen — den kan ta ulike former.'],
        solution: 'Akkulturasjon er den generelle prosessen der en person eller gruppe tilpasser seg en ny kultur gjennom kontakt med den. Det er et overordnet begrep som kan ta ulike former, deriblant assimilasjon, integrering, segregasjon eller marginalisering.',
      },
    },
    {
      id: 'kk2-3-4-ex2',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-4-ex2',
        number: '3.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Ifølge John Berrys akkulturasjonmodell: Hva kjennetegner integrering som strategi?',
        options: [
          { id: 'a', text: 'At man deltar i majoritetskulturen og samtidig beholder sentrale deler av sin opprinnelseskultur', isCorrect: true },
          { id: 'b', text: 'At man fullt ut overtar majoritetskulturen og gir opp opprinnelseskulturen', isCorrect: false },
          { id: 'c', text: 'At man lever adskilt fra majoritetskulturen og bare har kontakt med egen gruppe', isCorrect: false },
          { id: 'd', text: 'At man verken deltar i majoritetskulturen eller opprettholder opprinnelseskulturen', isCorrect: false },
        ],
        hints: ['Integrering handler om å kombinere to kulturer, ikke å velge én.'],
        solution: 'Integrering betyr at man deltar aktivt i majoritetskulturen — lærer språket, jobber, deltar i samfunnslivet — samtidig som man beholder verdier, tradisjoner og identitet fra opprinnelseskulturen. Det er en «både/og»-strategi.',
      },
    },
    {
      id: 'kk2-3-4-def2',
      type: 'definition',
      title: 'Berrys fire akkulturasjonstrategier',
      content: `Den kanadiske psykologen John Berry utviklet en modell med fire strategier for akkulturasjon, basert på to spørsmål:
1. Er det viktig å opprettholde sin opprinnelseskultur?
2. Er det viktig å delta i majoritetskulturen?

**Assimilasjon** (nei + ja):
- Gir opp opprinnelseskulturen og overtar majoritetskulturen
- Eksempel: En innvandrer som slutter å snakke morsmålet og fullt ut lever som majoriteten

**Integrering** (ja + ja):
- Beholder opprinnelseskulturen og deltar i majoritetskulturen
- Eksempel: En familie som snakker morsmålet hjemme, feirer sine tradisjoner, men også snakker norsk, arbeider og deltar i samfunnslivet

**Segregasjon/separasjon** (ja + nei):
- Opprettholder opprinnelseskulturen og unngår majoritetskulturen
- Eksempel: Et lukket samfunn som kun har kontakt med egne medlemmer

**Marginalisering** (nei + nei):
- Verken opprettholder opprinnelseskulturen eller deltar i majoritetskulturen
- Eksempel: En person som føler seg utenfor begge kulturer — verken tilhører den gamle eller den nye

**Forskning viser** at integrering gir best resultat for mental helse, trivsel og samfunnsdeltakelse. Marginalisering gir dårligst resultat.`,
    },
    {
      id: 'kk2-3-4-ex3',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-4-ex3',
        number: '3.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom assimilasjon og integrering med egne ord. Gi et eksempel på hver strategi.',
        hints: ['Tenk på hva som skjer med opprinnelseskulturen i de to strategiene.'],
        solution: 'Assimilasjon betyr at man gir opp sin opprinnelseskultur og fullt ut overtar majoritetskulturen — man «smelter inn» og blir usynlig som innvandrer. Eksempel: En polsk familie som slutter å snakke polsk hjemme, feirer bare norske tradisjoner og unngår kontakt med det polske miljøet. Integrering betyr at man deltar i majoritetskulturen men beholder sentrale deler av opprinnelseskulturen — en «både/og»-strategi. Eksempel: En somalisk familie som snakker somali hjemme og norsk ute, feirer id og 17. mai, og har venner fra begge kulturer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-4-ex4',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-4-ex4',
        number: '3.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvilken rolle majoritetssamfunnet spiller i innvandreres akkulturasjon. Er det bare innvandrernes eget valg hvilken strategi de følger?',
        hints: ['Tenk på diskriminering, inkludering, arbeidsmarked og holdninger i majoritetsbefolkningen.'],
        solution: 'Akkulturasjon er ikke bare innvandrernes valg — majoritetssamfunnet spiller en avgjørende rolle. Faktorer: 1) Diskriminering på arbeids- og boligmarkedet kan tvinge folk mot segregasjon, selv om de ønsker integrering. 2) Manglende inkludering i sosiale nettverk kan isolere innvandrere. 3) Assimilasjonskrav («du må bli helt norsk») kan føre til at folk føler seg presset til å gi opp sin kultur. 4) Et inkluderende samfunn med god språkopplæring, tilgang til arbeid og sosial aksept gjør integrering mulig. Konklusjon: Begge parter har ansvar — innvandrere må delta aktivt, og majoritetssamfunnet må åpne dørene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-4-summary',
      type: 'text',
      content: `## Oppsummering

- **Migrasjon** drives av push- og pull-faktorer og skaper kulturmøter
- **Akkulturasjon** er den overordnede prosessen der mennesker tilpasser seg en ny kultur
- **Berrys fire strategier:** assimilasjon, integrering, segregasjon og marginalisering
- **Integrering** — å delta i majoritetskulturen og beholde opprinnelseskulturen — gir best resultater
- **Diasporasamfunn** opprettholder kulturell tilknytning til opprinnelseslandet
- Akkulturasjon er ikke bare innvandrernes valg — majoritetssamfunnet har et ansvar for å legge til rette`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-3-4-ex5',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-4-ex5',
        number: '3.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norge har en offisiell politikk som fremmer integrering fremfor assimilasjon. Drøft fordeler og utfordringer ved denne tilnærmingen. Bruk konkrete eksempler.',
        hints: ['Tenk på hva integrering krever av både innvandrere og samfunn, og hvilke spenninger som kan oppstå.'],
        solution: 'Fordeler: 1) Ivaretar menneskerettigheter og kulturell frihet. 2) Innvandrere som beholder tilknytning til opprinnelseskulturen har bedre mental helse. 3) Kulturelt mangfold beriker samfunnet. 4) Tospråklighet er en ressurs. Utfordringer: 1) Kan føre til parallellsamfunn hvis integreringen mislykkes. 2) Verdikonflikter kan oppstå (likestilling, ytringsfrihet). 3) Krever ressurser til språkopplæring og inkluderingstiltak. 4) Vanskelig å definere «nok» integrering. Konklusjon: Integreringspolitikk krever innsats fra begge sider og en balanse mellom å bevare mangfold og sikre felles verdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-4-ex6',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-4-ex6',
        number: '3.4.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva en diaspora er. Gi et eksempel på et diasporasamfunn og beskriv hvordan det opprettholder kulturell tilknytning til opprinnelseslandet.',
        hints: ['Tenk på grupper som lever utenfor sitt opprinnelige hjemland, men som holder fast ved kultur og tradisjon.'],
        solution: 'En diaspora er en folkegruppe som lever spredt utenfor sitt opprinnelige hjemland, men som opprettholder kulturell tilknytning. Eksempel: Den norsk-amerikanske diasporaen i USA — etterkommere av norske utvandrere i midtvesten som opprettholder tilknytning gjennom Sons of Norway-foreninger, feiring av syttende mai, lefse-baking, og reiser til Norge. De holder kulturelle tradisjoner levende og formidler norsk kulturarv til nye generasjoner, selv om de bor i et annet land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Kulturelt mangfold og identitet
// ============================================================================

export const CHAPTER_KOMKULT2_3_5: TextbookChapter = {
  id: 'komkult2-3-5',
  courseId: 'komkult-2',
  chapterNumber: '3.5',
  title: 'Kulturelt mangfold og identitet',
  description: 'Utforsk sammenhengen mellom kulturelt mangfold og identitet i en globalisert verden. Lær om flerkulturell identitet, kosmopolitisme og utfordringer knyttet til mangfold.',
  estimatedMinutes: 24,
  competenceGoals: [
    'vurdere hvordan migrasjon og kulturmøter påvirker identitet og tilhørighet',
    'drøfte hva kulturelt mangfold betyr for samfunn og individ',
  ],
  keyTerms: [
    { term: 'Kulturelt mangfold', definition: 'At et samfunn rommer mange ulike kulturelle uttrykk, verdier, tradisjoner og levemåter som eksisterer side om side.' },
    { term: 'Flerkulturell identitet', definition: 'En identitet som er formet av tilhørighet til flere kulturelle fellesskap samtidig, der ulike kulturelle elementer kombineres.' },
    { term: 'Kosmopolitisme', definition: 'Holdningen om at alle mennesker tilhører ett verdenssamfunn, og at kulturelle forskjeller er en berikelse snarere enn et problem.' },
    { term: 'Kulturell kompetanse', definition: 'Evnen til å kommunisere effektivt og respektfullt med mennesker fra ulike kulturelle bakgrunner.' },
    { term: 'Interseksjonalitet', definition: 'Perspektivet om at ulike identitetskategorier (kultur, kjønn, klasse, religion) virker sammen og former den enkeltes erfaringer og posisjon i samfunnet.' },
  ],
  content: [
    {
      id: 'kk2-3-5-intro',
      type: 'text',
      content: `## Mangfold som mulighet og utfordring

I en verden preget av globalisering og migrasjon er kulturelt mangfold en realitet i de fleste samfunn. Norge er i dag et langt mer kulturelt mangfoldig samfunn enn for 50 år siden. I norske skoler kan det sitte elever med bakgrunn fra over 30 ulike land i samme klasse.

Men hva gjør mangfoldet med oss som individer? Hvordan formes identiteten vår når vi vokser opp med tilhørighet til flere kulturer? Og hva kreves av et samfunn for at mangfold skal fungere?

I dette kapittelet skal du lære:
- Hva kulturelt mangfold betyr for samfunn og individ
- Hvordan flerkulturell identitet utvikles og oppleves
- Hva kosmopolitisme og kulturell kompetanse innebærer
- Utfordringer og muligheter knyttet til kulturelt mangfold`,
    },
    {
      id: 'kk2-3-5-def1',
      type: 'definition',
      title: 'Kulturelt mangfold',
      content: `**Kulturelt mangfold** betyr at et samfunn rommer mange ulike kulturelle uttrykk, verdier, tradisjoner, språk og levemåter. Det handler ikke bare om innvandring — kulturelt mangfold inkluderer også:

- Ulike religiøse og livssynsmessige tradisjoner
- Ulike sosiale klasser og livsstiler
- Ulike generasjoner med ulike verdier
- Urfolkskultur (samisk kultur i Norge)
- Ulike regionale og lokale kulturer
- Ulike subkulturer og ungdomskulturer

**UNESCO-erklæringen om kulturelt mangfold (2001)** slår fast at kulturelt mangfold er like viktig for menneskeheten som biologisk mangfold er for naturen. Mangfold er en kilde til kreativitet, innovasjon og utvikling.

**To perspektiver på mangfold:**
- **Mangfold som berikelse:** Ulike perspektiver gir kreativitet, innovasjon og bedre problemløsning
- **Mangfold som utfordring:** Kan skape verdikonflikter, kommunikasjonsproblemer og sosiale spenninger`,
    },
    {
      id: 'kk2-3-5-example',
      type: 'example',
      title: 'Eksempel: Flerkulturell identitet',
      problem: 'Hvordan kan flerkulturell identitet se ut i praksis?',
      solution: `**Amina (18 år):**
Amina er født i Norge med foreldre fra Somalia. Hun beskriver seg selv slik:

«Jeg er norsk — jeg er født her, snakker norsk, går på norsk skole og elsker brunost. Men jeg er også somalisk — jeg snakker somali med bestemor, elsker somalisk mat, og islam er en viktig del av livet mitt. Jeg er begge deler, og jeg vil ikke velge.»

**Identiteten hennes er sammensatt:**
- **Språk:** Trespråklig — norsk, somali og engelsk
- **Mat:** Veksler mellom norsk, somalisk og global matkultur
- **Verdier:** Kombinerer norske verdier om likestilling med somaliske verdier om familiesamhold
- **Sosiale fellesskap:** Tilhører norsk vennekrets, somalisk familiekrets og en global musikkfankultur
- **Religion:** Muslim i et sekulært samfunn — navigerer mellom ulike forventninger

**Utfordring:** Amina opplever noen ganger at andre vil at hun skal «velge» — «er du norsk eller somalisk?». Men for henne er svaret «begge deler, og mer til».

**Flerkulturell identitet er ikke en byrde — det er en ressurs** som gir bredere perspektiv, flerspråklighet og evnen til å bevege seg mellom ulike kulturelle kontekster.`,
    },
    {
      id: 'kk2-3-5-ex1',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-5-ex1',
        number: '3.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr kulturelt mangfold?',
        options: [
          { id: 'a', text: 'At et samfunn rommer mange ulike kulturelle uttrykk, verdier og levemåter side om side', isCorrect: true },
          { id: 'b', text: 'At alle i et samfunn har nøyaktig den samme kulturen', isCorrect: false },
          { id: 'c', text: 'At det bare finnes én akseptert kultur i et samfunn', isCorrect: false },
          { id: 'd', text: 'At ulike kulturer aldri har kontakt med hverandre', isCorrect: false },
        ],
        hints: ['Tenk på ordet «mangfold» — det handler om variasjon og forskjellighet.'],
        solution: 'Kulturelt mangfold betyr at et samfunn rommer mange ulike kulturelle uttrykk, verdier, tradisjoner og levemåter. Det inkluderer ikke bare etnisk mangfold, men også religiøst, sosialt og generasjonelt mangfold.',
      },
    },
    {
      id: 'kk2-3-5-ex2',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-5-ex2',
        number: '3.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner kosmopolitisme som holdning?',
        options: [
          { id: 'a', text: 'At alle mennesker tilhører ett verdenssamfunn og kulturelle forskjeller er en berikelse', isCorrect: true },
          { id: 'b', text: 'At man kun føler tilhørighet til sin egen nasjonale kultur', isCorrect: false },
          { id: 'c', text: 'At alle kulturer bør bli like den vestlige kulturen', isCorrect: false },
          { id: 'd', text: 'At kulturelle forskjeller alltid fører til konflikter', isCorrect: false },
        ],
        hints: ['«Kosmo» betyr verden, «politt» betyr borger — en verdensborger.'],
        solution: 'Kosmopolitisme er holdningen om at vi alle er verdensborgere som tilhører ett felles verdenssamfunn. Kulturelle forskjeller ses som en berikelse, ikke en trussel. Kosmopolitter er åpne for andre kulturer og mener at det finnes universelle verdier som forener oss på tvers av kulturelle grenser.',
      },
    },
    {
      id: 'kk2-3-5-def2',
      type: 'definition',
      title: 'Kulturell kompetanse og interseksjonalitet',
      content: `**Kulturell kompetanse** er evnen til å kommunisere effektivt og respektfullt med mennesker fra ulike kulturelle bakgrunner. Det innebærer:

1. **Kulturell bevissthet:** Å kjenne sine egne kulturelle verdier og fordommer
2. **Kulturell kunnskap:** Å ha kunnskap om andre kulturer og kulturelle forskjeller
3. **Kulturell sensitivitet:** Å være oppmerksom på kulturelle signaler og følsomheter
4. **Kulturelle ferdigheter:** Å kunne tilpasse kommunikasjon og atferd til kulturelle kontekster

**Interseksjonalitet** er et analytisk perspektiv som viser at ulike identitetskategorier — kultur, kjønn, klasse, religion, seksualitet, funksjonsnivå — virker sammen og former den enkeltes erfaringer.

**Eksempel:** En muslimsk kvinne med somalisk bakgrunn i Norge opplever ikke bare «kulturforskjeller». Hennes erfaringer formes av samspillet mellom kjønn, religion, etnisitet og klasse. Disse kategoriene kan ikke forstås isolert — de virker sammen.

**Interseksjonalitet i praksis:**
- En hvit norsk-somalisk mann og en svart norsk-somalisk kvinne har ulike erfaringer, selv om de har «samme» bakgrunn
- Klasse, utdanning og bosted påvirker opplevelsen av kulturelt mangfold
- Det er viktig å se hele mennesket, ikke bare én identitetskategori`,
    },
    {
      id: 'kk2-3-5-ex3',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-5-ex3',
        number: '3.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva kulturell kompetanse innebærer, og gi to konkrete eksempler på situasjoner der kulturell kompetanse er viktig.',
        hints: ['Tenk på situasjoner der du møter mennesker med annen kulturell bakgrunn — på skolen, i arbeidslivet eller i hverdagen.'],
        solution: 'Kulturell kompetanse er evnen til å kommunisere effektivt og respektfullt med mennesker fra ulike kulturer. Det innebærer bevissthet om egne verdier, kunnskap om andres kulturer og evne til å tilpasse seg. Eksempel 1: En lege som behandler pasienter med ulik bakgrunn, må forstå at noen kulturer har andre syn på sykdom, kjønnsroller i helsevesenet og bruk av alternativ medisin. Eksempel 2: En lærer med elever fra mange kulturer må forstå at øyekontakt, deltakelse i diskusjoner og forholdet mellom elev og lærer kan oppleves ulikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-5-ex4',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-5-ex4',
        number: '3.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar begrepet interseksjonalitet. Drøft hvorfor det er viktig å bruke et interseksjonelt perspektiv når vi analyserer kulturmøter og identitet.',
        hints: ['Tenk på at en person har mange identitetskategorier samtidig — og at disse virker sammen.'],
        solution: 'Interseksjonalitet betyr at ulike identitetskategorier (kultur, kjønn, klasse, religion, seksualitet) virker sammen og former erfaringer. Viktigheten: 1) Unngår forenkling — en «innvandrer» er ikke bare innvandrer, men også en person med bestemt kjønn, klasse og utdanning. 2) Synliggjør at ulike kombinasjoner gir ulike erfaringer — en høyt utdannet iransk mann opplever Norge annerledes enn en somalisk alenemor. 3) Forhindrer stereotypisering — vi kan ikke anta at alle med «samme bakgrunn» har like erfaringer. 4) Gir mer presis analyse av maktforhold og ulikhet i samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-5-summary',
      type: 'text',
      content: `## Oppsummering

- **Kulturelt mangfold** betyr at et samfunn rommer mange ulike kulturuttrykk og levemåter
- **Flerkulturell identitet** er formet av tilhørighet til flere kulturer samtidig og er en ressurs
- **Kosmopolitisme** ser kulturelle forskjeller som berikelse og alle mennesker som verdensborgere
- **Kulturell kompetanse** er evnen til å kommunisere respektfullt på tvers av kulturer
- **Interseksjonalitet** viser at identitet formes av samspillet mellom mange kategorier samtidig
- Mangfold er både en mulighet (kreativitet, innovasjon) og en utfordring (verdikonflikter, kommunikasjon)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-3-5-ex5',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-5-ex5',
        number: '3.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Kulturelt mangfold er Norges største styrke og største utfordring.» Bruk minst tre begreper fra kapittelet i svaret ditt.',
        hints: ['Bruk begreper som kulturelt mangfold, integrering, kulturell kompetanse, kosmopolitisme eller interseksjonalitet.'],
        solution: 'Styrke: Kulturelt mangfold gir bredere perspektiver, kreativitet og innovasjon. Norge drar nytte av innvandreres kompetanse, språkferdigheter og kulturforståelse. En kosmopolitisk tilnærming viser at forskjeller beriker. Utfordring: Mangfold kan skape verdikonflikter (likestilling, ytringsfrihet), kommunikasjonsproblemer og sosiale spenninger. Integrering krever innsats fra begge sider. Et interseksjonelt perspektiv viser at ulikhet ikke bare handler om kultur, men også om klasse og kjønn. Konklusjon: Mangfold er både styrke og utfordring — nøkkelen er kulturell kompetanse hos alle, god integreringspolitikk og vilje til dialog.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-3-5-ex6',
      type: 'exercise',
      exercise: {
        id: 'kk2-3-5-ex6',
        number: '3.5.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Mange ungdommer med flerkulturell bakgrunn opplever å bli spurt «hvor er du egentlig fra?». Analyser dette spørsmålet: Hva sier det om den som spør, og hvordan kan det oppleves for den som blir spurt?',
        hints: ['Tenk på skjulte antagelser i spørsmålet og hva det signaliserer om tilhørighet og identitet.'],
        solution: 'Spørsmålet «hvor er du egentlig fra?» rommer flere problematiske antagelser: 1) Det antar at personen ikke «egentlig» er norsk, basert på utseende. 2) Det signaliserer at den som spør ser vedkommende som annerledes — en «outsider». 3) For den som blir spurt — og som kanskje er født i Norge — kan det oppleves som at tilhørigheten deres til Norge betviles. 4) Spørsmålet reduserer en person med sammensatt, flerkulturell identitet til én kategori: «ikke-norsk». 5) For noen er det et uskyldig nysgjerrighetsspørsmål, men det kan oppleves belastende når man får det gjentatte ganger. Kulturell kompetanse innebærer å reflektere over slike spørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const KOMKULT2_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT2_3_1,
  CHAPTER_KOMKULT2_3_2,
  CHAPTER_KOMKULT2_3_3,
  CHAPTER_KOMKULT2_3_4,
  CHAPTER_KOMKULT2_3_5,
];
