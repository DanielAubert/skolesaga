/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 1 (VG2) - Del 6: Film og TV
 *
 * Kapittel 6.1-6.5
 * Dekker LK20-kompetansemaal for medie- og informasjonskunnskap 1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Filmspr\u00e5k
// ============================================================================

export const CHAPTER_MEDIEINFO_1_6_1: TextbookChapter = {
  id: 'medieinfo-1-6-1',
  courseId: 'medieinfo-1',
  chapterNumber: '6.1',
  title: 'Filmspr\u00e5k',
  description: 'Grunnleggende filmspr\u00e5k med kamerainnstillinger, vinkler, klipping og lyd. Du l\u00e6rer hvordan visuelle og auditive virkemidler skaper mening i film.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gj\u00f8re rede for sentrale virkemidler i filmspr\u00e5ket',
    'analysere bruk av kamerainnstillinger, vinkler og klipping i audiovisuelle produksjoner',
    'forklare hvordan lyd og bilde samvirker for \u00e5 skape mening',
  ],
  keyTerms: [
    { term: 'Kamerainnstilling', definition: 'Hvor mye av motivet som vises i bildet, fra ultratotalt til ultran\u00e6rt.' },
    { term: 'Kameravinkel', definition: 'Vinkelen kameraet er plassert i forhold til motivet, for eksempel fug\u00adleperspektiv eller froskeperspektiv.' },
    { term: 'Klipping', definition: 'Redigeringsprosessen der enkeltbilder og sekvenser settes sammen til en helhet.' },
    { term: 'Diegetisk lyd', definition: 'Lyd som har sin kilde innenfor filmens handlingsunivers.' },
    { term: 'Ikke-diegetisk lyd', definition: 'Lyd som er lagt til utenfra, for eksempel filmmusikk eller voiceover.' },
  ],
  content: [
    {
      id: 'mi-6-1-intro',
      type: 'text',
      content: `## Hva er filmspr\u00e5k?

Film kommuniserer gjennom et eget spr\u00e5k best\u00e5ende av bilder, lyd, klipping og komposisjon. Filmspr\u00e5ket er et sett med konvensjoner og teknikker som filmskapere bruker for \u00e5 formidle handling, f\u00f8lelser og ideer til publikum. N\u00e5r du forst\u00e5r filmspr\u00e5ket, kan du b\u00e5de analysere andres filmer og skape mer bevisste produksjoner selv.

I dette kapittelet skal du l\u00e6re:
- De viktigste kamerainnstillingene og hva de formidler
- Hvordan kameravinkler p\u00e5virker opplevelsen
- Grunnleggende klippeteknikker
- Samspillet mellom lyd og bilde`,
    },
    {
      id: 'mi-6-1-def-kamerainnstilling',
      type: 'definition',
      title: 'Kamerainnstilling',
      content: 'En **kamerainnstilling** (ogs\u00e5 kalt bildeutsnitt) beskriver hvor mye av motivet som vises i bildet. Innstillingen bestemmes av avstanden mellom kameraet og motivet, eller av brennvidden p\u00e5 objektivet. Valg av kamerainnstilling er et av de viktigste virkemidlene i film.',
    },
    {
      id: 'mi-6-1-innstillinger',
      type: 'text',
      content: `### De viktigste kamerainnstillingene

| Innstilling | Beskrivelse | Typisk bruk |
|-------------|-------------|-------------|
| **Ultratotalt** | Viser et vidt landskap eller byomr\u00e5de | Etablere sted, vise skala |
| **Totalt** | Viser hele personen i omgivelsene | Orientering, kroppsspr\u00e5k |
| **Halvtotalt** | Person fra kn\u00e6rne og opp | Dialog, bevegelse |
| **Halvn\u00e6rt** | Person fra livet og opp | Samtale, reaksjoner |
| **N\u00e6rbilde** | Ansiktet fyller det meste av bildet | F\u00f8lelser, intimitet |
| **Ultran\u00e6rt** | Detalj av ansikt eller gjenstand | Dramatikk, detaljer |

**Tommelregel:** Jo n\u00e6rmere kameraet er, desto mer intimt og f\u00f8lelsesladet blir bildet. Jo lenger unna, desto mer distansert og overordnet.`,
    },
    {
      id: 'mi-6-1-example-innstilling',
      type: 'example',
      title: 'Kamerainnstillinger i praksis',
      content: `Tenk deg en scene der en karakter f\u00e5r en d\u00e5rlig nyhet:

1. **Totalt:** Vi ser personen st\u00e5 i et stort, tomt rom. F\u00f8lelsen av ensomhet forsterkes.
2. **Halvn\u00e6rt:** Vi ser personen ta opp telefonen og lytte. Vi legger merke til kroppsspr\u00e5ket.
3. **N\u00e6rbilde:** Kameraet zoomer inn p\u00e5 ansiktet. Vi ser t\u00e5rene og reaksjonen tydelig.
4. **Ultran\u00e6rt:** Et bilde av \u00f8ynene som fylles med t\u00e5rer. Maksimal emosjonell effekt.

Denne overgangen fra totalt til ultran\u00e6rt kalles en **innzoomingssekvens** og er et klassisk grep for \u00e5 bygge emosjonell intensitet.`,
    },
    {
      id: 'mi-6-1-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      exerciseType: 'multiple-choice',
      task: 'Hvilken kamerainnstilling brukes typisk for \u00e5 vise en karakters f\u00f8lelser tydelig?',
      options: [
        { id: 'a', text: 'Ultratotalt', isCorrect: false },
        { id: 'b', text: 'Halvtotalt', isCorrect: false },
        { id: 'c', text: 'N\u00e6rbilde', isCorrect: true },
        { id: 'd', text: 'Totalt', isCorrect: false },
      ],
      solution: 'N\u00e6rbildet viser ansiktet tydelig og lar publikum lese f\u00f8lelser og reaksjoner. Det skaper intimitet og n\u00e6rhet mellom karakter og seer.',
    },
    {
      id: 'mi-6-1-def-kameravinkel',
      type: 'definition',
      title: 'Kameravinkel',
      content: 'En **kameravinkel** er vinkelen kameraet har i forhold til motivet. De vanligste er **normalperspektiv** (i \u00f8yenh\u00f8yde), **fugleperspektiv** (ovenfra og ned, gj\u00f8r motivet mindre og s\u00e5rbart), **froskeperspektiv** (nedenfra og opp, gj\u00f8r motivet st\u00f8rre og mektigere) og **skjev vinkel** (dutch angle, skaper uro og spenning).',
    },
    {
      id: 'mi-6-1-klipping',
      type: 'text',
      content: `### Klipping og redigering

Klipping er prosessen der r\u00e5materiale settes sammen til en ferdig film. Klipperen bestemmer tempo, rytme og dramaturgisk oppbygging.

**Vanlige klippeteknikker:**

- **Rett klipp (cut):** Direkte overgang fra ett bilde til det neste. Den vanligste teknikken.
- **Overtoning (dissolve):** Ett bilde glir gradvis over i det neste. Markerer ofte tidshopp.
- **Fade:** Bildet tones gradvis til svart (fade out) eller fra svart (fade in). Markerer slutten eller starten p\u00e5 en sekvens.
- **Kryssklipping:** Veksling mellom to parallelle handlinger. Bygger spenning og viser at ting skjer samtidig.
- **Jumpcut:** Bryter med kontinuiteten ved \u00e5 hoppe i tid. Brukes for \u00e5 skape uro eller fart.

**180-gradersregelen:** Kameraet b\u00f8r holde seg p\u00e5 \u00e9n side av en tenkt linje mellom to karakterer. Brytes regelen, kan seeren bli forvirret om hvem som snakker til hvem.`,
    },
    {
      id: 'mi-6-1-lyd',
      type: 'text',
      content: `### Lyd i film

Lyd utf\u00f8rer mange funksjoner i film. Den kan forsterke stemning, gi informasjon og skape sammenheng mellom scener.

**Diegetisk lyd** har sin kilde i filmens verden:
- Dialog mellom karakterer
- Omgivelseslyd (trafikk, fugler, regn)
- Musikk fra en radio eller konsert i filmen

**Ikke-diegetisk lyd** er lagt til utenfra:
- Filmmusikk (soundtrack)
- Voiceover (fortellerstemme)
- Lydeffekter for dramatisk effekt

**Lyddesign** handler om \u00e5 bygge opp et komplett lydlandskap som st\u00f8tter fortellingen. En skrekkfilm bruker for eksempel dissonant musikk, plutselige lyder og stillhet for \u00e5 skape frykt.`,
    },
    {
      id: 'mi-6-1-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      task: 'Forklar forskjellen mellom diegetisk og ikke-diegetisk lyd. Gi to eksempler p\u00e5 hver.',
      difficulty: 'medium',
      solution: 'Diegetisk lyd har sin kilde i filmens handlingsunivers \u2013 for eksempel dialog mellom to karakterer eller lyden av en bil som kj\u00f8rer forbi. Ikke-diegetisk lyd er lagt til utenfra og finnes ikke i filmens verden \u2013 for eksempel filmmusikk som understreker stemning eller en voiceover som kommenterer handlingen.',
    },
    {
      id: 'mi-6-1-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      task: 'Velg en kort filmscene (2\u20133 minutter) fra en film du liker. Beskriv minst tre filmspr\u00e5klige virkemidler som brukes, og forklar hvilken effekt de har.',
      difficulty: 'vanskelig',
      solution: 'Et godt svar inneholder konkrete observasjoner av kamerainnstillinger, vinkler, klippeteknikker og lydbruk. For eksempel: \u00abI \u00e5pningsscenen brukes et ultratotalt bilde for \u00e5 etablere stedet, etterfulgt av et n\u00e6rbilde for \u00e5 introdusere hovedpersonen. Sakte klippetempo gir en rolig stemning, mens den ikke-diegetiske musikken bygger en f\u00f8lelse av melankoli.\u00bb',
    },
    {
      id: 'mi-6-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### N\u00f8kkelpunkter

- **Kamerainnstillinger** (totalt, halvtotalt, n\u00e6rt, ultran\u00e6rt) styrer hvor n\u00e6rt publikum kommer motivet
- **Kameravinkler** (fugleperspektiv, froskeperspektiv, normalvinkel) p\u00e5virker maktforhold og stemning
- **Klipping** bestemmer tempo, rytme og sammenheng mellom scener
- **Lyd** deles i diegetisk (innenfor filmens verden) og ikke-diegetisk (lagt til utenfra)
- Alle disse elementene virker sammen for \u00e5 skape mening i film`,
    },
    {
      id: 'mi-6-1-exercise-4',
      type: 'exercise',
      title: 'Samleoppgave',
      task: 'Du skal planlegge en kort filmsekvens (5\u20136 bilder) som viser en person som kommer hjem og oppdager noe uventet. Beskriv hvilke kamerainnstillinger, vinkler og lydvalg du vil bruke i hvert bilde, og begrunn valgene dine.',
      difficulty: 'vanskelig',
      solution: 'Svaret b\u00f8r vise forst\u00e5else for hvordan virkemidlene bygger spenning: for eksempel starte med totalt bilde av huset (etablering), halvtotalt av personen som g\u00e5r mot d\u00f8ren (bevegelse), n\u00e6rbilde av h\u00e5nden p\u00e5 d\u00f8rh\u00e5ndtaket (spenning), halvtotalt av rommet innenfra (avsl\u00f8ring), og ultran\u00e6rt av personens ansiktsuttrykk (reaksjon). Lydvalg b\u00f8r st\u00f8tte dramaturgien.',
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2: Filmsjangre
// ============================================================================

export const CHAPTER_MEDIEINFO_1_6_2: TextbookChapter = {
  id: 'medieinfo-1-6-2',
  courseId: 'medieinfo-1',
  chapterNumber: '6.2',
  title: 'Filmsjangre',
  description: 'De viktigste filmsjangrene som drama, komedie, thriller, action og sci-fi. Du l\u00e6rer om sjangerkoder, sjangerkonvensjoner og hvordan sjangre utvikler seg.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gj\u00f8re rede for kjennetegn ved ulike filmsjangre',
    'analysere sjangerkoder og sjangerkonvensjoner i film',
    'dr\u00f8fte sjangerblanding og sjangerutvikling',
  ],
  keyTerms: [
    { term: 'Sjanger', definition: 'En kategori av filmer med felles kjennetegn n\u00e5r det gjelder handling, stil, tema og stemning.' },
    { term: 'Sjangerkoder', definition: 'De gjenkjennelige elementene som knytter en film til en bestemt sjanger, for eksempel kostymer, musikk og plottstrukturer.' },
    { term: 'Sjangerkonvensjon', definition: 'Forventninger publikum har til en sjanger basert p\u00e5 tidligere erfaringer med sjangeren.' },
    { term: 'Sjangerblanding', definition: 'N\u00e5r en film kombinerer elementer fra to eller flere sjangre, for eksempel romantisk komedie eller sci-fi-thriller.' },
  ],
  content: [
    {
      id: 'mi-6-2-intro',
      type: 'text',
      content: `## Hva er en filmsjanger?

En sjanger er en kategori som brukes for \u00e5 klassifisere filmer med felles kjennetegn. Sjangre hjelper publikum med \u00e5 velge film og gir filmskapere et rammeverk \u00e5 jobbe innenfor \u2013 eller bryte ut av. Sjangersystemet bygger p\u00e5 gjenkjennelse: n\u00e5r du velger en komedie, forventer du humor, og n\u00e5r du velger en thriller, forventer du spenning.

I dette kapittelet skal du l\u00e6re:
- Kjennetegn ved de viktigste filmsjangrene
- Hva sjangerkoder og sjangerkonvensjoner er
- Hvordan sjangre blandes og utvikler seg over tid`,
    },
    {
      id: 'mi-6-2-def-sjanger',
      type: 'definition',
      title: 'Sjanger',
      content: 'En **sjanger** er en kategori av kulturelle uttrykk (film, litteratur, musikk) som deler felles kjennetegn. I film bestemmes sjangeren av en kombinasjon av handling, stemning, visuelle koder, tematikk og publikums forventninger. Sjangerbegrepet har r\u00f8tter tilbake til antikkens retorikk og litteraturteori.',
    },
    {
      id: 'mi-6-2-sjangre-oversikt',
      type: 'text',
      content: `### De store filmsjangrene

**Drama**
- Fokuserer p\u00e5 mellommenneskelige konflikter og f\u00f8lelsesmessig utvikling
- Realistisk tone og dype karakterer
- Eksempler: *Forrest Gump*, *Kon-Tiki*, *The Shawshank Redemption*

**Komedie**
- Har som hovedm\u00e5l \u00e5 underholde og skape latter
- Overdrivelse, forviklinger, timing og spr\u00e5klig humor
- Undersjangre: romantisk komedie, slapstick, satire, svart komedie
- Eksempler: *Fl\u00e5klypa Grand Prix*, *Monty Python*, *K\u00f8n-Tiki*

**Thriller**
- Bygger p\u00e5 spenning, uforutsigbarhet og trussel
- Sjangerkoder: m\u00f8rk belysning, intens musikk, tidsklemme
- Undersjangre: psykologisk thriller, politithriller, spionfilm
- Eksempler: *Hodejegerne*, *Se7en*, *Gone Girl*

**Action**
- Fysiske konfrontasjoner, jaktscener, eksplosjoner
- H\u00f8yt tempo, spektakul\u00e6re effekter
- Ofte enkel moralsk struktur: helt mot skurk
- Eksempler: *James Bond*-serien, *Die Hard*, *Mad Max*

**Science fiction (sci-fi)**
- Utforsker hypotetiske scenarier med teknologi, romfart eller fremtid
- Stiller sp\u00f8rsm\u00e5l om samfunn, identitet og hva det betyr \u00e5 v\u00e6re menneske
- Eksempler: *Blade Runner*, *Interstellar*, *Passasjerer*

**Skrekk (horror)**
- Skal skremme og skape ubehag
- Bruker overraskelsesmomenter, monster, overnaturlige elementer
- Sjangerkoder: m\u00f8rke, isolasjon, ukjente trusler
- Eksempler: *Fritt Vilt*, *The Shining*, *Get Out*`,
    },
    {
      id: 'mi-6-2-example-sjangerkoder',
      type: 'example',
      title: 'Sjangerkoder i western',
      content: `Westernfilmen er et godt eksempel p\u00e5 tydelige sjangerkoder:

- **Setting:** Det amerikanske ville vesten, \u00f8rkener, sm\u00e5byer
- **Karakterer:** Cowboys, sheriff, lovl\u00f8se, urfolk
- **Rekvisitter:** Hester, revolvere, cowboyhatter, saloon
- **Tema:** Lov og rett, sivilisasjon mot villmark, ensomme helter
- **Musikk:** Dramatisk orkestermusikk, munnspill

Selv om du aldri har sett en westernfilm, vil du trolig gjenkjenne sjangeren umiddelbart fra disse elementene. Det er sjangerkodenes kraft.`,
    },
    {
      id: 'mi-6-2-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      exerciseType: 'multiple-choice',
      task: 'Hvilken sjanger kjennetegnes typisk av mellommenneskelige konflikter, realistisk tone og dype karakterportretter?',
      options: [
        { id: 'a', text: 'Action', isCorrect: false },
        { id: 'b', text: 'Komedie', isCorrect: false },
        { id: 'c', text: 'Drama', isCorrect: true },
        { id: 'd', text: 'Sci-fi', isCorrect: false },
      ],
      solution: 'Drama kjennetegnes av fokus p\u00e5 mellommenneskelige relasjoner, realistisk tone og karakterutvikling. Sjangeren utforsker ofte dype temaer som kj\u00e6rlighet, tap, identitet og moralske dilemmaer.',
    },
    {
      id: 'mi-6-2-sjangerblanding',
      type: 'text',
      content: `### Sjangerblanding og sjangerutvikling

I praksis er de f\u00e6rreste filmer \u00abren\u00bb sjanger. De fleste kombinerer elementer fra flere sjangre. Dette kalles **sjangerblanding** eller **sjangerhibridisering**.

**Eksempler p\u00e5 sjangerblanding:**
- *Shaun of the Dead* \u2013 komedie + skrekk (zom-com)
- *Alien* \u2013 sci-fi + skrekk
- *Guardians of the Galaxy* \u2013 sci-fi + komedie + action
- *Thelma* (2017) \u2013 drama + overnaturlig thriller

**Hvorfor blandes sjangre?**
- Filmskapere vil v\u00e6re nyskapende og overraske
- Publikum \u00f8nsker variasjon og friske fortellinger
- Sjangergrensene er sosiale konvensjoner som stadig endres
- Str\u00f8mmetjenester skaper nye nisjer og mikro-sjangre`,
    },
    {
      id: 'mi-6-2-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      task: 'Velg en film du kjenner godt. Identifiser hvilken hovedsjanger den tilh\u00f8rer, og beskriv minst fire sjangerkoder som filmen bruker (for eksempel setting, karaktertyper, musikk, tematikk).',
      difficulty: 'medium',
      solution: 'Et godt svar identifiserer sjangeren tydelig og peker p\u00e5 konkrete koder. For eksempel: \u00abFilmen \u00abFritt Vilt\u00bb tilh\u00f8rer skrekksjangeren. Sjangerkodene inkluderer: isolert setting (nedsnedd fjellstue), truende antagonist (ukjent morder), m\u00f8rk belysning og skygger, uhyggelig lyddesign, og en \u00abfinal girl\u00bb-struktur der \u00e9n overlever.\u00bb',
    },
    {
      id: 'mi-6-2-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      task: 'Hva menes med sjangerblanding? Gi et eksempel p\u00e5 en film som blander sjangre, og forklar hvilke sjangerelementer som kombineres.',
      difficulty: 'lett',
      solution: 'Sjangerblanding betyr at en film kombinerer elementer fra to eller flere sjangre. For eksempel blander \u00abGuardians of the Galaxy\u00bb sci-fi (romfart, fremmede planeter), action (kamper, jakter) og komedie (humor, l\u00f8ye dialoger). Blandingen gj\u00f8r filmen unik og appellerer til et bredt publikum.',
    },
    {
      id: 'mi-6-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### N\u00f8kkelpunkter

- **Sjangre** klassifiserer filmer etter felles kjennetegn som handling, stil og stemning
- De viktigste sjangrene er drama, komedie, thriller, action, sci-fi og skrekk
- **Sjangerkoder** er gjenkjennelige elementer (setting, karakterer, musikk) som knytter en film til en sjanger
- **Sjangerkonvensjoner** er publikums forventninger til sjangeren
- De fleste moderne filmer bruker **sjangerblanding** og kombinerer elementer fra flere sjangre`,
    },
    {
      id: 'mi-6-2-exercise-4',
      type: 'exercise',
      title: 'Samleoppgave',
      task: 'Du skal utvikle et filmkonsept som bevisst blander to sjangre. Beskriv handlingen i korte trekk, og forklar hvilke sjangerkoder du henter fra hver sjanger. Begrunn hvorfor du tror denne blandingen kan fungere for et ungt publikum.',
      difficulty: 'vanskelig',
      solution: 'Svaret b\u00f8r vise forst\u00e5else for sjangerkonvensjoner og kreativ bruk av sjangerblanding. Eleven b\u00f8r peke p\u00e5 konkrete sjangerkoder fra begge sjangre og argumentere for hvordan kombinasjonen skaper noe nytt. For eksempel: en sci-fi-komedie der humor oppst\u00e5r av kontrasten mellom hverdagslige karakterer og fantastisk teknologi.',
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3: TV-formater
// ============================================================================

export const CHAPTER_MEDIEINFO_1_6_3: TextbookChapter = {
  id: 'medieinfo-1-6-3',
  courseId: 'medieinfo-1',
  chapterNumber: '6.3',
  title: 'TV-formater',
  description: 'Ulike TV-formater som nyheter, talkshow, reality-TV og serier. Du l\u00e6rer om formatenes kjennetegn og hvordan str\u00f8mming har endret TV-landskapet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gj\u00f8re rede for kjennetegn ved ulike TV-formater',
    'dr\u00f8fte hvordan str\u00f8mmetjenester har endret TV-bransjen',
    'analysere virkemidler i ulike TV-programmer',
  ],
  keyTerms: [
    { term: 'TV-format', definition: 'En mal eller oppskrift for et TV-program som kan gjentas episode etter episode, og eventuelt selges til andre land.' },
    { term: 'Reality-TV', definition: 'TV-programmer som presenterer virkelige mennesker i konstruerte situasjoner, ofte med elementer av konkurranse.' },
    { term: 'Str\u00f8mmetjeneste', definition: 'Digital plattform som gj\u00f8r TV-innhold tilgjengelig p\u00e5 foresp\u00f8rsel via internett, for eksempel Netflix og NRK TV.' },
    { term: 'Binge-watching', definition: 'Det \u00e5 se mange episoder av en serie i strekk, muliggjort av str\u00f8mmetjenester som publiserer hele sesonger samtidig.' },
    { term: 'Flerkameraproduksjon', definition: 'Opptak med flere kameraer samtidig som klippes i sanntid, vanlig i nyheter og talkshow.' },
  ],
  content: [
    {
      id: 'mi-6-3-intro',
      type: 'text',
      content: `## TV-formater i endring

Fjernsyn har v\u00e6rt det dominerende massemediet i over 60 \u00e5r, men m\u00e5ten vi ser p\u00e5 TV har endret seg dramatisk. Fra line\u00e6r TV med faste sendetider til str\u00f8mming p\u00e5 mobilen \u2013 innholdet har ogs\u00e5 utviklet seg. TV-formater er maler for hvordan programmer lages, og de kan selges p\u00e5 tvers av land og kulturer.

I dette kapittelet skal du l\u00e6re:
- Kjennetegn ved de viktigste TV-formatene
- Hvordan nyheter, talkshow og reality fungerer
- Hva str\u00f8mming betyr for TV-bransjen
- Forskjellen mellom line\u00e6r TV og on-demand`,
    },
    {
      id: 'mi-6-3-def-format',
      type: 'definition',
      title: 'TV-format',
      content: 'Et **TV-format** er en mal eller oppskrift for et TV-program som kan produseres gjentatte ganger. Formatet beskriver konsept, struktur, regler og visuell profil. Formater kan lisenseres og selges internasjonalt \u2013 for eksempel er *Idol*, *Big Brother* og *The Voice* formater som produseres i mange land med lokale tilpasninger.',
    },
    {
      id: 'mi-6-3-nyheter',
      type: 'text',
      content: `### Nyheter

Nyhetssendinger er blant de eldste og viktigste TV-formatene. De har en klar struktur og faste konvensjoner.

**Kjennetegn:**
- Fast sendetid og varighet
- Nyhetsanker som leder sendingen fra studio
- Innslag med reporter p\u00e5 stedet
- Direkte dekning av viktige hendelser
- Flerkameraproduksjon med live-regi
- N\u00f8ytral og saklig tone

**Virkemidler:**
- Vignett og kjenningsmelodi skaper gjenkjennelse
- Grafiske elementer og kart visualiserer informasjon
- Nyhetsankeret ser rett i kamera for \u00e5 skape tillit
- Saker prioriteres etter nyhetskriteriene (aktualitet, vesentlighet, n\u00e6rhet, konflikt, sensasjon)`,
    },
    {
      id: 'mi-6-3-talkshow-reality',
      type: 'text',
      content: `### Talkshow

Talkshow er programlederbaserte formater der samtale og underholdning st\u00e5r sentralt.

**Kjennetegn:**
- Karismatisk programleder som b\u00e6rer showet
- Gjester fra underholdning, politikk og kultur
- Fast studiodesign med sofa/stol-oppsett
- Musikk og innslag mellom intervjuene
- Blanding av humor og alvor

**Eksempler:** *Lindmo*, *Skavlan*, *The Tonight Show*

### Reality-TV

Reality-TV er programmer som f\u00f8lger virkelige mennesker i mer eller mindre konstruerte situasjoner.

**Kjennetegn:**
- Vanlige mennesker som deltakere (ikke profesjonelle skuespillere)
- Konstruerte premisser og regler
- Konfesjonaler (deltakerne snakker til kamera)
- Dramatisk klipping for \u00e5 bygge konflikter
- Ofte med eliminasjon eller konkurranse

**Typer reality:**

| Type | Beskrivelse | Eksempel |
|------|-------------|----------|
| Konkurranse | Deltakere konkurrerer om \u00e5 vinne | *Farmen*, *71\u00b0 Nord* |
| Sosial | Fokus p\u00e5 relasjoner og drama | *Paradise Hotel*, *Love Island* |
| Talent | Fremviser ferdigheter | *Idol*, *Norske Talenter* |
| Dokus\u00e5pe | F\u00f8lger hverdagen til personer | *Bloggerne*, *Kardashians* |`,
    },
    {
      id: 'mi-6-3-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      exerciseType: 'multiple-choice',
      task: 'Hva er et TV-format?',
      options: [
        { id: 'a', text: 'En enkelt TV-episode', isCorrect: false },
        { id: 'b', text: 'En mal eller oppskrift for et TV-program som kan gjentas og selges internasjonalt', isCorrect: true },
        { id: 'c', text: 'En teknisk standard for sending av TV-signaler', isCorrect: false },
        { id: 'd', text: 'Et TV-programs visuelle stil', isCorrect: false },
      ],
      solution: 'Et TV-format er en mal som beskriver konsept, struktur og regler for et program. Formater kan produseres gjentatte ganger og lisenseres til andre land, som for eksempel \u00abIdol\u00bb og \u00abThe Voice\u00bb.',
    },
    {
      id: 'mi-6-3-serier-stromming',
      type: 'text',
      content: `### TV-serier

TV-serier har blitt et av de viktigste formatene i moderne TV.

**Episodiske serier:** Hver episode er selvstendig med avsluttet handling (f.eks. *Mesternes mester*).

**Fortl\u00f8pende serier:** Handlingen strekker seg over flere episoder og sesonger (f.eks. *Skam*, *Ragnarok*).

**Miniserier:** Avsluttet fortelling over et begrenset antall episoder (f.eks. *Atlantic Crossing*).

### Str\u00f8mmetjenester og ny TV-virkelighet

Str\u00f8mmetjenester som Netflix, HBO Max, Disney+ og NRK TV har forandret TV-landskapet fundamentalt.

**Endringer str\u00f8mming har brakt:**
- **On-demand:** Seeren bestemmer selv n\u00e5r og hvor de ser
- **Binge-watching:** Hele sesonger slippes p\u00e5 \u00e9n gang
- **Algoritmer:** Innhold anbefales basert p\u00e5 seerhistorikk
- **Globalt marked:** Lokale produksjoner n\u00e5r internasjonalt publikum
- **Ny \u00f8konomi:** Abonnementsmodell erstatter reklamefinansiering
- **Originalt innhold:** Str\u00f8mmetjenestene produserer egne serier og filmer`,
    },
    {
      id: 'mi-6-3-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      task: 'Forklar minst tre m\u00e5ter str\u00f8mmetjenester har endret hvordan vi ser p\u00e5 TV-innhold sammenlignet med tradisjonell line\u00e6r TV.',
      difficulty: 'medium',
      solution: 'Str\u00f8mmetjenester har endret TV-vaner p\u00e5 flere m\u00e5ter: (1) On-demand \u2013 vi velger selv n\u00e5r vi ser, i stedet for faste sendetider. (2) Binge-watching \u2013 vi kan se hele sesonger i strekk i stedet for \u00e5 vente en uke mellom episoder. (3) Algoritmer anbefaler innhold basert p\u00e5 hva vi har sett f\u00f8r, noe som p\u00e5virker hva vi velger. Andre relevante svar: globalt marked, ny \u00f8konomi, originalt innhold.',
    },
    {
      id: 'mi-6-3-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      exerciseType: 'multiple-choice',
      task: 'Hvilken type reality-TV fokuserer p\u00e5 \u00e5 vise frem deltakernes ferdigheter?',
      options: [
        { id: 'a', text: 'Sosial reality', isCorrect: false },
        { id: 'b', text: 'Dokus\u00e5pe', isCorrect: false },
        { id: 'c', text: 'Talentkonkurranse', isCorrect: true },
        { id: 'd', text: 'Konkurransereality', isCorrect: false },
      ],
      solution: 'Talentkonkurranser som \u00abIdol\u00bb og \u00abNorske Talenter\u00bb fokuserer p\u00e5 \u00e5 vise frem deltakernes ferdigheter innen musikk, dans eller andre felt. I motsetning til sosial reality som fokuserer p\u00e5 relasjoner og drama.',
    },
    {
      id: 'mi-6-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### N\u00f8kkelpunkter

- Et **TV-format** er en mal for et program som kan gjentas og selges internasjonalt
- **Nyheter** er line\u00e6re, flerkameraproduksjoner med fast struktur og saklig tone
- **Talkshow** bygger p\u00e5 programlederens samtaler med gjester
- **Reality-TV** viser virkelige mennesker i konstruerte situasjoner (konkurranse, sosial, talent, dokus\u00e5pe)
- **TV-serier** finnes som episodiske, fortl\u00f8pende og miniserier
- **Str\u00f8mmetjenester** har revolusjonert TV med on-demand, binge-watching og globalt innhold`,
    },
    {
      id: 'mi-6-3-exercise-4',
      type: 'exercise',
      title: 'Samleoppgave',
      task: 'Sammenlikn to ulike TV-formater (for eksempel nyheter og reality-TV). Beskriv kjennetegnene ved hvert format, og dr\u00f8ft hvilke virkemidler som brukes for \u00e5 engasjere seerne. Hvilke etiske sp\u00f8rsm\u00e5l reiser de ulike formatene?',
      difficulty: 'vanskelig',
      solution: 'Svaret b\u00f8r sammenligne formatene systematisk og dr\u00f8fte b\u00e5de virkemidler og etikk. For eksempel: Nyheter bruker saklighet, n\u00f8ytralitet og troverdighet som virkemidler, mens reality bruker dramatisk klipping, konfesjonaler og konfliktskapende situasjoner. Etisk sett m\u00e5 nyheter ivareta objektivitet og kildekritikk, mens reality reiser sp\u00f8rsm\u00e5l om deltakernes personvern, psykiske helse og redigert fremstilling av virkeligheten.',
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.4: Dokumentar
// ============================================================================

export const CHAPTER_MEDIEINFO_1_6_4: TextbookChapter = {
  id: 'medieinfo-1-6-4',
  courseId: 'medieinfo-1',
  chapterNumber: '6.4',
  title: 'Dokumentar',
  description: 'Dokumentarsjangre som observerende, deltakende og poetisk dokumentar. Du l\u00e6rer om forholdet mellom virkelighet og fremstilling i dokumentarfilm.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gj\u00f8re rede for ulike dokumentarsjangre og deres kjennetegn',
    'dr\u00f8fte forholdet mellom virkelighet og fremstilling i dokumentarfilm',
    'analysere virkemidler i dokumentarfilm',
  ],
  keyTerms: [
    { term: 'Dokumentarfilm', definition: 'Film som tar utgangspunkt i virkeligheten og bruker autentisk materiale for \u00e5 skildre hendelser, personer eller temaer.' },
    { term: 'Observerende dokumentar', definition: 'Dokumentarstil der filmskaperen observerer uten \u00e5 gripe inn, ogs\u00e5 kalt \u00abflue p\u00e5 veggen\u00bb.' },
    { term: 'Deltakende dokumentar', definition: 'Dokumentarstil der filmskaperen deltar aktivt i handlingen og interagerer med personene.' },
    { term: 'Poetisk dokumentar', definition: 'Dokumentarstil som vektlegger estetikk, stemning og visuelle uttrykk framfor informasjon.' },
    { term: 'Performativ dokumentar', definition: 'Dokumentar der filmskaperens personlige opplevelse og subjektivitet st\u00e5r sentralt.' },
  ],
  content: [
    {
      id: 'mi-6-4-intro',
      type: 'text',
      content: `## Dokumentarfilm \u2013 virkeligheten p\u00e5 film

Dokumentarfilm skiller seg fra fiksjonsfilm ved \u00e5 ta utgangspunkt i den virkelige verden. Men det betyr ikke at dokumentar er \u00abobjektiv sannhet\u00bb. Enhver dokumentar er formet av filmskaperens valg: hva som filmes, hva som klippes bort, hvilken musikk som legges p\u00e5, og hvordan historien struktureres.

Den britiske dokumentarfilmpioneren John Grierson definerte dokumentarfilm som \u00abden kreative behandlingen av virkeligheten\u00bb. Denne definisjonen fanger essensen: dokumentaren bruker virkeligheten som r\u00e5materiale, men former det til en fortelling.

I dette kapittelet skal du l\u00e6re:
- Hva som kjennetegner dokumentarfilm
- De viktigste dokumentarsjangrene
- Forholdet mellom virkelighet og fremstilling
- Etiske utfordringer i dokumentarfilm`,
    },
    {
      id: 'mi-6-4-def-dokumentar',
      type: 'definition',
      title: 'Dokumentarfilm',
      content: 'En **dokumentarfilm** er en film som tar utgangspunkt i virkeligheten. Den bruker autentisk materiale som intervjuer, arkivbilder og observasjoner for \u00e5 skildre virkelige hendelser, personer eller temaer. Til forskjell fra fiksjonsfilm bygger dokumentaren p\u00e5 det som faktisk har skjedd eller eksisterer, selv om den er formet av filmskaperens kunstneriske og redaksjonelle valg.',
    },
    {
      id: 'mi-6-4-sjangre',
      type: 'text',
      content: `### Dokumentarsjangre etter Bill Nichols

Filmteoretikeren Bill Nichols har identifisert seks moduser (former) for dokumentarfilm:

**1. Observerende modus (\u00abflue p\u00e5 veggen\u00bb)**
- Kameraet observerer uten \u00e5 gripe inn
- Ingen voiceover, ingen intervjuer
- Gir inntrykk av umanipulert virkelighet
- Eksempel: *Salesman* (Maysles, 1969)

**2. Deltakende modus**
- Filmskaperen interagerer med personene
- Intervjuer og samtaler st\u00e5r sentralt
- Filmskaperens tilstedev\u00e6relse er synlig
- Eksempel: Michael Moores dokumentarer

**3. Forklarende modus**
- Voiceover forklarer og argumenterer
- Bilder illustrerer det fortellerstemmen sier
- Tradisjonell \u00abgud-stemme\u00bb fra oven
- Eksempel: Naturprogrammer som *Planet Earth*

**4. Poetisk modus**
- Vektlegger stemning, rytme og visuelle uttrykk
- Kunstnerisk og eksperimentell
- Mer opptatt av f\u00f8lelser enn fakta
- Eksempel: *Koyaanisqatsi* (Reggio, 1982)

**5. Refleksiv modus**
- Stiller sp\u00f8rsm\u00e5l ved selve dokumentarformen
- Viser produksjonsprosessen
- Kritisk til mediets evne til \u00e5 gjengi virkeligheten

**6. Performativ modus**
- Filmskaperens personlige opplevelse st\u00e5r sentralt
- Subjektiv og f\u00f8lelsesmessig
- Blander personlig erfaring med bredere temaer`,
    },
    {
      id: 'mi-6-4-example-observerende',
      type: 'example',
      title: 'Observerende vs. deltakende dokumentar',
      content: `**Observerende:** I den norske dokumentaren \u00abPyromaniac\u00bb (tenkt eksempel) f\u00f8lger kameraet en brannetterforsker p\u00e5 jobb uten \u00e5 gripe inn. Vi ser hverdagen, h\u00f8rer samtalene og opplever presset \u2013 men filmskaperen er usynlig.

**Deltakende:** I Michael Moores \u00abBowling for Columbine\u00bb konfronterer Moore v\u00e5penindustrien, intervjuer politikere og stiller provoserende sp\u00f8rsm\u00e5l. Filmskaperen er en aktiv karakter i sin egen film.

**N\u00f8kkelforskjellen:** I observerende dokumentar er filmskaperen usynlig og lar hendelsene utfolde seg. I deltakende dokumentar er filmskaperen synlig, stiller sp\u00f8rsm\u00e5l og p\u00e5virker situasjonene.`,
    },
    {
      id: 'mi-6-4-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      exerciseType: 'multiple-choice',
      task: 'Hva kjennetegner observerende dokumentar?',
      options: [
        { id: 'a', text: 'Filmskaperen deltar aktivt og stiller sp\u00f8rsm\u00e5l', isCorrect: false },
        { id: 'b', text: 'En fortellerstemme forklarer det vi ser', isCorrect: false },
        { id: 'c', text: 'Kameraet observerer uten at filmskaperen griper inn', isCorrect: true },
        { id: 'd', text: 'Filmskaperens personlige opplevelse st\u00e5r sentralt', isCorrect: false },
      ],
      solution: 'Observerende dokumentar (\u00abflue p\u00e5 veggen\u00bb) kjennetegnes av at kameraet observerer hendelser uten at filmskaperen griper inn. Det er ingen voiceover, ingen intervjuer og ingen synlig p\u00e5virkning av det som skjer.',
    },
    {
      id: 'mi-6-4-virkelighet',
      type: 'text',
      content: `### Virkelighet vs. fremstilling

Et sentralt sp\u00f8rsm\u00e5l i dokumentarfilm er: **Hvor \u00absann\u00bb er dokumentaren?**

**Alle dokumentarer er konstruerte:**
- Filmskaperen velger hva som filmes og hva som klippes bort
- Rekkef\u00f8lgen p\u00e5 hendelsene kan endres i klipperommet
- Musikk og lyddesign styrer stemning og tolkning
- Intervjusp\u00f8rsm\u00e5l leder svarene i bestemte retninger
- Kameravinkler og komposisjon former publikums oppfatning

**Etiske utfordringer:**
- Samtykke: Forst\u00e5r personene i filmen hvordan de fremstilles?
- Redigeringsmakt: Klipping kan gi et skjevt bilde
- Iscenesetting: Noen dokumentarer gjenskaper hendelser
- S\u00e5rbare personer: Barn, syke eller mennesker i krise krever s\u00e6rlig varsomhet
- Sannhetsforpliktelse: Dokumentaren har en kontrakt med publikum om at den bygger p\u00e5 virkeligheten`,
    },
    {
      id: 'mi-6-4-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      task: 'John Grierson definerte dokumentarfilm som \u00abden kreative behandlingen av virkeligheten\u00bb. Forklar hva han mente med dette, og dr\u00f8ft om en dokumentar noensinne kan v\u00e6re helt objektiv.',
      difficulty: 'vanskelig',
      solution: 'Grierson mente at dokumentarfilm tar virkeligheten som utgangspunkt, men former den gjennom kreative valg som klipping, vinkling og fortelling. En dokumentar kan ikke v\u00e6re helt objektiv fordi filmskaperen alltid gj\u00f8r valg som p\u00e5virker fremstillingen: hva som filmes, hva som utelates, rekkef\u00f8lge, musikk og vinkling. Likevel kan dokumentarer strebe etter \u00e6rlighet og transparens om sine valg.',
    },
    {
      id: 'mi-6-4-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      task: 'Beskriv tre etiske utfordringer en dokumentarfilmskaper kan m\u00f8te, og forklar hvordan disse kan h\u00e5ndteres.',
      difficulty: 'medium',
      solution: 'Tre etiske utfordringer: (1) Samtykke \u2013 personene b\u00f8r forst\u00e5 hvordan de fremstilles, og gi informert samtykke. (2) Redigeringsmakt \u2013 klipping kan gi skjevt bilde; filmskaperen b\u00f8r v\u00e6re \u00e6rlig om kontekst. (3) S\u00e5rbare personer \u2013 barn og mennesker i krise trenger s\u00e6rlig beskyttelse; filmskaperen m\u00e5 vurdere om filmingen kan skade.',
    },
    {
      id: 'mi-6-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### N\u00f8kkelpunkter

- **Dokumentarfilm** tar utgangspunkt i virkeligheten, men er formet av filmskaperens valg
- Bill Nichols identifiserer seks moduser: observerende, deltakende, forklarende, poetisk, refleksiv og performativ
- **Observerende** dokumentar observerer uten inngrep, **deltakende** inneb\u00e6rer aktiv interaksjon
- Alle dokumentarer er konstruerte gjennom valg av klipping, vinkling og lyd
- Etiske sp\u00f8rsm\u00e5l om samtykke, redigeringsmakt og s\u00e5rbare personer er sentrale`,
    },
    {
      id: 'mi-6-4-exercise-4',
      type: 'exercise',
      title: 'Samleoppgave',
      task: 'Se en kort dokumentar (eller et utdrag p\u00e5 10\u201315 minutter). Identifiser hvilken dokumentarmodus som brukes. Analyser tre virkemidler filmskaperen bruker, og dr\u00f8ft hvordan disse p\u00e5virker fremstillingen av virkeligheten.',
      difficulty: 'vanskelig',
      solution: 'Et godt svar identifiserer modus korrekt med begrunnelse, analyserer konkrete virkemidler (for eksempel kamerabruk, klipping, musikk, intervjuform) og reflekterer kritisk over hvordan valgene former publikums oppfatning. Eleven b\u00f8r vise forst\u00e5else for at dokumentaren er en konstruksjon, ikke en n\u00f8ytral gjengivelse.',
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.5: Audiovisuell analyse
// ============================================================================

export const CHAPTER_MEDIEINFO_1_6_5: TextbookChapter = {
  id: 'medieinfo-1-6-5',
  courseId: 'medieinfo-1',
  chapterNumber: '6.5',
  title: 'Audiovisuell analyse',
  description: 'Systematisk analyse av film og TV med begreper som mise-en-sc\u00e8ne, narrasjon og dramaturgisk oppbygging. Du l\u00e6rer \u00e5 analysere audiovisuelt innhold metodisk.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjennomf\u00f8re systematisk analyse av audiovisuelle produksjoner',
    'bruke fagbegreper fra filmspr\u00e5ket i analyse og dr\u00f8fting',
    'dr\u00f8fte hvordan form og innhold virker sammen i audiovisuell kommunikasjon',
  ],
  keyTerms: [
    { term: 'Mise-en-sc\u00e8ne', definition: 'Alt som finnes i filmbildet: scenografi, kostymer, skuespillernes plassering, belysning og komposisjon.' },
    { term: 'Narrasjon', definition: 'M\u00e5ten en historie fortelles p\u00e5 i film, inkludert fortellerperspektiv, tidsstruktur og informasjonsfordeling.' },
    { term: 'Dramaturgi', definition: 'Den dramatiske oppbyggingen av en fortelling, fra eksposisjon via konfliktopptrapping til klimaks og avslutning.' },
    { term: 'Diegetisk verden', definition: 'Filmens handlingsunivers \u2013 den fiktive verdenen der handlingen foreg\u00e5r.' },
    { term: 'Montasje', definition: 'Sammenstilling av bilder for \u00e5 skape mening som ikke finnes i hvert enkelt bilde alene.' },
  ],
  content: [
    {
      id: 'mi-6-5-intro',
      type: 'text',
      content: `## Hvordan analysere film og TV

Audiovisuell analyse handler om \u00e5 unders\u00f8ke hvordan form og innhold samvirker i film og TV. Det er ikke nok \u00e5 gjenfortelle handlingen \u2013 du m\u00e5 forklare **hvordan** filmen kommuniserer og **hvorfor** filmskaperen har gjort bestemte valg.

En god analyse kombinerer n\u00e6rlesning av enkeltscener med en helhetlig forst\u00e5else av verkets budskap. Du trenger fagbegreper som verkt\u00f8y for \u00e5 beskrive det du ser og h\u00f8rer presist.

I dette kapittelet skal du l\u00e6re:
- Hva mise-en-sc\u00e8ne er og hvordan du analyserer det
- Ulike narrasjonsformer i film
- En systematisk metode for filmanalyse
- Hvordan du skriver en audiovisuell analyse`,
    },
    {
      id: 'mi-6-5-def-mise',
      type: 'definition',
      title: 'Mise-en-sc\u00e8ne',
      content: '**Mise-en-sc\u00e8ne** (fransk for \u00absatt i scene\u00bb) omfatter alt som er synlig i filmbildet: scenografi og rekvisitter, skuespillernes plassering og bevegelse, kostymer og sminke, belysning og fargebruk, samt komposisjon i bildet. Mise-en-sc\u00e8ne er et av de viktigste analyseverkt\u00f8yene fordi det avsl\u00f8rer bevisste valg filmskaperen har gjort for \u00e5 formidle stemning, tema og karakter.',
    },
    {
      id: 'mi-6-5-mise-detaljer',
      type: 'text',
      content: `### Elementene i mise-en-sc\u00e8ne

**Scenografi og rekvisitter**
- Hvor foreg\u00e5r handlingen? Hva forteller omgivelsene?
- Rekvisitter kan ha symbolsk betydning (en klokke som tikker = tidspres)

**Skuespill og plassering**
- Hvordan er karakterene plassert i bildet?
- Kroppsspr\u00e5k, ansiktsuttrykk og bevegelsesm\u00f8nster

**Kostymer og sminke**
- Hva forteller kl\u00e6rne om karakteren? Sosial klasse, personlighet, tid
- Sminke kan v\u00e6re realistisk eller stilisert

**Belysning**
- **High key:** Jevnt, lyst \u2013 komedie, rom-com
- **Low key:** M\u00f8rkt med sterke kontraster \u2013 thriller, film noir
- Retningen p\u00e5 lyset p\u00e5virker stemningen (underlys = uhyggelig)

**Fargebruk**
- Fargepaletten setter stemningen for hele filmen
- Varme farger (r\u00f8dt, gult) vs. kalde farger (bl\u00e5tt, gr\u00f8nt)
- Enkelte farger kan ha symbolsk funksjon`,
    },
    {
      id: 'mi-6-5-example-mise',
      type: 'example',
      title: 'Mise-en-sc\u00e8ne i \u00abThe Grand Budapest Hotel\u00bb',
      content: `Wes Andersons film er kjent for gjennomkomponert mise-en-sc\u00e8ne:

- **Scenografi:** Hotellet er pastellfarget og symmetrisk, nesten som et dukkehus. Det formidler nostalgi og eventyr.
- **Kostymer:** Hovedpersonen b\u00e6rer alltid en lilla uniform som markerer hans profesjonalitet og eksentrisitet.
- **Komposisjon:** Nesten alle bilder er symmetrisk komponert, noe som gir en stilisert, eventyrlig f\u00f8lelse.
- **Farger:** Rosa, lilla og pastellfarger dominerer og skaper en varm, nostalgisk stemning.
- **Belysning:** Jevn, varm belysning forsterker den eventyraktige tonen.

**Konklusjon:** Mise-en-sc\u00e8ne-valgene bygger opp under filmens tema om en tapt, elegant verden.`,
    },
    {
      id: 'mi-6-5-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      exerciseType: 'multiple-choice',
      task: 'Hva inkluderer begrepet mise-en-sc\u00e8ne?',
      options: [
        { id: 'a', text: 'Bare kamerainnstillinger og klipping', isCorrect: false },
        { id: 'b', text: 'Alt som er synlig i filmbildet: scenografi, kostymer, belysning, plassering og komposisjon', isCorrect: true },
        { id: 'c', text: 'Kun skuespillernes prestasjoner', isCorrect: false },
        { id: 'd', text: 'Filmens lyd og musikk', isCorrect: false },
      ],
      solution: 'Mise-en-sc\u00e8ne omfatter alt som er synlig i filmbildet: scenografi, rekvisitter, skuespillernes plassering, kostymer, sminke, belysning og bildekomposisjon. Det er et fransk begrep som betyr \u00absatt i scene\u00bb.',
    },
    {
      id: 'mi-6-5-narrasjon',
      type: 'text',
      content: `### Narrasjon \u2013 hvordan historien fortelles

Narrasjon handler om **m\u00e5ten** historien formidles p\u00e5, ikke bare hva som skjer.

**Fortellerperspektiv:**
- **Allvitende:** Vi f\u00e5r tilgang til alle karakterers tanker og viten
- **Begrenset:** Vi f\u00f8lger \u00e9n karakter og vet bare det denne vet
- **F\u00f8rsteperson:** En karakter forteller sin egen historie (voiceover)

**Tidsstruktur:**
- **Kronologisk:** Hendelsene presenteres i rekkef\u00f8lge
- **Ikke-kronologisk:** Filmen hopper i tid (flashback, flashforward)
- **Parallellhandling:** To eller flere handlingstråder veksles mellom

**Dramaturgi \u2013 den klassiske modellen:**
1. **Eksposisjon** \u2013 presentasjon av karakterer og setting
2. **Konfliktopptrapping** \u2013 problemet utvikler seg og eskalerer
3. **Klimaks** \u2013 det avgjørende vendepunktet
4. **Fallende handling** \u2013 konsekvensene av klimaks
5. **Avslutning** \u2013 konflikten l\u00f8ses (eller forblir ul\u00f8st)`,
    },
    {
      id: 'mi-6-5-def-narrasjon',
      type: 'definition',
      title: 'Narrasjon',
      content: '**Narrasjon** er m\u00e5ten en historie fortelles p\u00e5 i film. Det omfatter fortellerperspektiv (hvem vet hva), tidsstruktur (rekkef\u00f8lgen hendelsene presenteres i), informasjonsfordeling (hva publikum f\u00e5r vite og n\u00e5r) og dramaturgisk oppbygging (spenningskurve og vendepunkter).',
    },
    {
      id: 'mi-6-5-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      task: 'Forklar forskjellen mellom allvitende og begrenset fortellerperspektiv i film. Gi et eksempel p\u00e5 hver.',
      difficulty: 'medium',
      solution: 'Ved allvitende fortellerperspektiv f\u00e5r publikum tilgang til flere karakterers tanker, f\u00f8lelser og handlinger \u2013 for eksempel i \u00abGame of Thrones\u00bb der vi f\u00f8lger mange ulike karakterer. Ved begrenset perspektiv f\u00f8lger vi \u00e9n karakter og vet bare det denne vet \u2013 for eksempel i \u00abDunkirk\u00bb der vi opplever krigen fra enkeltpersoners synsvinkel uten oversikt.',
    },
    {
      id: 'mi-6-5-metode',
      type: 'text',
      content: `### Systematisk filmanalyse \u2013 en metode

N\u00e5r du skal analysere en film eller en filmsekvens, kan du f\u00f8lge denne strukturen:

**Steg 1: Beskriv**
- Hva skjer i scenen? Gjenfortell kort.
- Hvilke karakterer er involvert?

**Steg 2: Analyser filmspr\u00e5ket**
- Kamerainnstillinger og vinkler
- Klipping og tempo
- Lyd og musikk
- Mise-en-sc\u00e8ne (scenografi, belysning, farger)

**Steg 3: Analyser narrasjonen**
- Fortellerperspektiv
- Tidsstruktur
- Dramaturgisk plassering i filmen

**Steg 4: Tolk og dr\u00f8ft**
- Hva formidler scenen? Hva er temaet?
- Hvordan virker form og innhold sammen?
- Hvilken effekt har virkemidlene p\u00e5 publikum?

**Tips:** Bruk alltid fagbegreper. Skriv ikke \u00abkameraet g\u00e5r n\u00e6rmere\u00bb, men \u00abdet klippes fra halvtotalt til n\u00e6rbilde, noe som forsterker intimiteten\u00bb.`,
    },
    {
      id: 'mi-6-5-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      exerciseType: 'multiple-choice',
      task: 'Hva er riktig rekkef\u00f8lge i den klassiske dramaturgiske modellen?',
      options: [
        { id: 'a', text: 'Klimaks \u2192 Eksposisjon \u2192 Konfliktopptrapping \u2192 Avslutning', isCorrect: false },
        { id: 'b', text: 'Eksposisjon \u2192 Konfliktopptrapping \u2192 Klimaks \u2192 Fallende handling \u2192 Avslutning', isCorrect: true },
        { id: 'c', text: 'Konfliktopptrapping \u2192 Eksposisjon \u2192 Avslutning \u2192 Klimaks', isCorrect: false },
        { id: 'd', text: 'Eksposisjon \u2192 Klimaks \u2192 Konfliktopptrapping \u2192 Avslutning', isCorrect: false },
      ],
      solution: 'Den klassiske dramaturgiske modellen f\u00f8lger rekkef\u00f8lgen: eksposisjon (presentasjon), konfliktopptrapping (problemet eskalerer), klimaks (vendepunktet), fallende handling (konsekvenser) og avslutning (l\u00f8sning).',
    },
    {
      id: 'mi-6-5-exercise-4',
      type: 'exercise',
      title: 'Oppgave 4',
      task: 'Velg en kort filmscene (2\u20134 minutter). Analyser scenens mise-en-sc\u00e8ne ved \u00e5 beskrive scenografi, belysning, fargebruk og karakterenes plassering. Forklar hva disse valgene formidler.',
      difficulty: 'medium',
      solution: 'Et godt svar beskriver konkrete observasjoner med riktige fagbegreper. For eksempel: \u00abScenen foreg\u00e5r i et m\u00f8rkt, trangt rom (low key-belysning) som forsterker f\u00f8lelsen av innestengthet. Hovedpersonen er plassert i hjørnet av bildet, noe som visuelt kommuniserer avmakt. Den bl\u00e5-gr\u00e5 fargepaletten understreker den kalde, tr\u00f8stesl\u00f8se stemningen.\u00bb',
    },
    {
      id: 'mi-6-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### N\u00f8kkelpunkter

- **Mise-en-sc\u00e8ne** omfatter alt synlig i filmbildet: scenografi, kostymer, belysning, plassering og komposisjon
- **Narrasjon** beskriver hvordan historien fortelles: perspektiv, tidsstruktur og dramaturgi
- Den klassiske dramaturgien g\u00e5r fra eksposisjon via konfliktopptrapping til klimaks og avslutning
- En systematisk filmanalyse f\u00f8lger stegene: beskriv, analyser filmspr\u00e5k, analyser narrasjon, tolk og dr\u00f8ft
- Bruk alltid presise **fagbegreper** n\u00e5r du analyserer film`,
    },
    {
      id: 'mi-6-5-exercise-5',
      type: 'exercise',
      title: 'Samleoppgave',
      task: 'Gjennomf\u00f8r en kort audiovisuell analyse av en selvvalgt filmscene (3\u20135 minutter). Bruk den systematiske metoden: beskriv handlingen, analyser filmspr\u00e5ket (kamera, klipping, lyd), analyser narrasjonen (perspektiv, dramaturgi), og tolk hva scenen formidler. Bruk fagbegreper gjennomg\u00e5tt i dette kapittelet.',
      difficulty: 'vanskelig',
      solution: 'Et fullstendig svar f\u00f8lger fire-stegs-metoden: (1) Kort beskrivelse av handlingen. (2) Analyse av kamerainnstillinger, klipping, lyd (diegetisk/ikke-diegetisk) og mise-en-sc\u00e8ne. (3) Analyse av fortellerperspektiv, tidsstruktur og dramaturgisk plassering. (4) Tolkning av tema og budskap, med refleksjon over hvordan form og innhold virker sammen. Fagbegreper som n\u00e6rbilde, low key, kronologisk narrasjon og mise-en-sc\u00e8ne b\u00f8r brukes presist.',
    },
  ],
  exercises: [],
};

// ============================================================================
// Samle alle Del 6-kapitler
// ============================================================================

export const MEDIEINFO_1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MEDIEINFO_1_6_1,
  CHAPTER_MEDIEINFO_1_6_2,
  CHAPTER_MEDIEINFO_1_6_3,
  CHAPTER_MEDIEINFO_1_6_4,
  CHAPTER_MEDIEINFO_1_6_5,
];

export function getMedieinfo1Del6Chapter(chapterId: string): TextbookChapter | undefined {
  return MEDIEINFO_1_DEL6_CHAPTERS.find(chapter => chapter.id === chapterId);
}
