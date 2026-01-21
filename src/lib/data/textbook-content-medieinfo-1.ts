/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 1 (VG2 valgfag)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Introduksjon til medier
// ============================================================================

export const CHAPTER_MEDIEINFO_1_1: TextbookChapter = {
  id: 'medieinfo-1-1',
  courseId: 'medieinfo-1',
  chapterNumber: '1',
  title: 'Introduksjon til medier',
  description: 'En innføring i mediebegrepet, medietyper og medienes rolle i samfunnet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for hva medier er og hvilke funksjoner de har',
    'beskrive ulike medietyper og deres kjennetegn',
    'reflektere over medienes betydning i eget liv og samfunnet',
  ],
  content: [
    {
      id: 'medieinfo-1-1-intro',
      type: 'text',
      content: `## Velkommen til medie- og informasjonskunnskap

Medier er overalt rundt oss. Fra det øyeblikket vi våkner og sjekker mobilen, til vi ser en film eller leser nyheter før vi legger oss, er vi omgitt av medieinnhold. Men hva er egentlig medier, og hvorfor er de så viktige?

**Hva er et medium?**
Ordet "medium" kommer fra latin og betyr "midten" eller "det som er i mellom". Et medium er altså noe som formidler - et bindeledd mellom avsender og mottaker. Medier gjør det mulig å kommunisere over tid og rom.

**Medienes funksjoner:**
- Informere om hendelser og forhold i samfunnet
- Underholde og skape opplevelser
- Skape fellesskap og identitet
- Muliggjøre kommunikasjon mellom mennesker
- Bevare og formidle kultur og kunnskap`,
    },
    {
      id: 'medieinfo-1-1-def-1',
      type: 'definition',
      title: 'Medietyper',
      content: `**Tradisjonelle medier:**
- *Trykte medier:* Aviser, bøker, tidsskrifter, plakater
- *Audiovisuelle medier:* TV, radio, film
- *Analoge medier:* Vinyl, kassetter, fotografier

**Digitale medier:**
- *Nettaviser og nettsider*
- *Sosiale medier:* Facebook, Instagram, TikTok, Snapchat
- *Strømmetjenester:* Netflix, Spotify, YouTube
- *Spill og interaktive medier*
- *Podcaster og digitale lydmedier*

**Massemedier vs. personlige medier:**
- *Massemedier:* Når mange mottakere samtidig (TV, radio, aviser)
- *Personlige medier:* En-til-en-kommunikasjon (telefon, e-post)
- *Sosiale medier:* Kombinerer begge - både masse og personlig`,
    },
    {
      id: 'medieinfo-1-1-def-2',
      type: 'definition',
      title: 'Medienes samfunnsfunksjoner',
      content: `**Informasjonsfunksjonen:**
Mediene formidler nyheter og fakta om samfunnet. De holder oss oppdatert om politikk, økonomi, kultur og hendelser lokalt og globalt.

**Vakthundfunksjonen:**
Mediene overvåker makthavere og avslører kritikkverdige forhold. Journalister etterforsker og stiller spørsmål ved makten.

**Arenafunksjonen:**
Mediene skaper en offentlig arena for debatt og meningsutveksling. Her kan ulike stemmer og synspunkter komme til uttrykk.

**Underholdningsfunksjonen:**
Mediene tilbyr avkobling, glede og kulturelle opplevelser gjennom musikk, film, serier, spill og annet innhold.

**Sosialiseringsfunksjonen:**
Mediene påvirker hvordan vi lærer normer, verdier og forståelse av verden. De bidrar til kulturell identitet og fellesskap.`,
    },
    {
      id: 'medieinfo-1-1-tip-1',
      type: 'tip',
      title: 'Refleksjon: Ditt mediebruk',
      content: `Tenk over ditt eget mediebruk i løpet av en vanlig dag:
- Hvilke medier bruker du mest tid på?
- Hva bruker du mediene til? (informasjon, underholdning, kommunikasjon)
- Hvordan ville livet ditt vært uten tilgang til medier?
- Hvilke medier bruker foreldre/besteforeldre som du ikke bruker?`,
    },
    {
      id: 'medieinfo-1-1-example-1',
      type: 'example',
      title: 'Eksempel: En nyhetshendelse på tvers av medier',
      problem: 'Hvordan dekkes en stor nyhetshendelse på ulike medieplattformer?',
      solution: `**Tenk deg en stor politisk begivenhet, som et stortingsvalg:**

**Avis (papir):** Grundig analyse, bakgrunnsstoff, kommentarer fra eksperter. Kommer dagen etter med dybde og kontekst.

**Nettavis:** Direkteoppdateringer, løpende resultater, videoklipp, interaktive grafer. Umiddelbar dekning.

**TV:** Livesending med programledere, reportere på stedet, grafikk med tall, intervjuer med politikere og kommentatorer.

**Radio:** Lydrapporter, intervjuer, analyser. Kan følges mens man gjør andre ting.

**Sosiale medier:** Politikeres egne meldinger, meninger fra folk, memer, diskusjoner, deling av klipp. Ufiltrert og mangfoldig.

**Podcast:** Dybdeanalyse og diskusjon i etterkant, lengre samtaler med eksperter.

Hver medietype bidrar med sin styrke til den totale dekningen.`,
    },
    {
      id: 'medieinfo-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-1-ex-1',
        number: '1.1',
        type: 'multiple-choice',
        task: 'Hva betyr ordet "medium" opprinnelig?',
        options: [
          { id: 'a', text: 'Det som er i mellom / midten', isCorrect: true },
          { id: 'b', text: 'Informasjon', isCorrect: false },
          { id: 'c', text: 'Kommunikasjon', isCorrect: false },
          { id: 'd', text: 'Teknologi', isCorrect: false },
        ],
        hints: ['Ordet kommer fra latin'],
        solution: 'Medium kommer fra latin og betyr "det som er i mellom" eller "midten". Et medium er et bindeledd som formidler mellom avsender og mottaker.',
      },
    },
    {
      id: 'medieinfo-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-1-ex-2',
        number: '1.2',
        type: 'multiple-choice',
        task: 'Hvilken funksjon har mediene når de avslører kritikkverdige forhold hos makthavere?',
        options: [
          { id: 'a', text: 'Vakthundfunksjonen', isCorrect: true },
          { id: 'b', text: 'Informasjonsfunksjonen', isCorrect: false },
          { id: 'c', text: 'Underholdningsfunksjonen', isCorrect: false },
          { id: 'd', text: 'Arenafunksjonen', isCorrect: false },
        ],
        hints: ['Tenk på et dyr som vokter og varsler'],
        solution: 'Vakthundfunksjonen innebærer at mediene overvåker makthavere, avslører kritikkverdige forhold og stiller maktapparatet til ansvar.',
      },
    },
    {
      id: 'medieinfo-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-1-ex-3',
        number: '1.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom massemedier og personlige medier, og gi eksempler på begge.',
        hints: ['Tenk på hvem som mottar budskapet'],
        solution: 'Massemedier når mange mottakere samtidig (TV, radio, aviser, film). Personlige medier brukes til kommunikasjon mellom enkeltpersoner (telefon, e-post, SMS). Sosiale medier kombinerer begge typer - man kan nå mange eller kommunisere en-til-en.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-1-ex-4',
        number: '1.4',
        type: 'classic',
        task: 'Beskriv de fem hovedfunksjonene mediene har i samfunnet.',
        hints: ['Informasjon, vakthund, arena, underholdning, sosialisering'],
        solution: '1) Informasjonsfunksjonen - formidler nyheter og fakta. 2) Vakthundfunksjonen - overvåker makthavere og avslører kritikkverdige forhold. 3) Arenafunksjonen - skaper rom for offentlig debatt. 4) Underholdningsfunksjonen - tilbyr avkobling og kulturelle opplevelser. 5) Sosialiseringsfunksjonen - påvirker normer, verdier og kulturell identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-1-ex-5',
        number: '1.5',
        type: 'classic',
        task: 'Lag en mediedagbok for en dag. Noter hvilke medier du bruker, når du bruker dem, og hva du bruker dem til.',
        hints: ['Start fra du våkner til du legger deg'],
        solution: 'En typisk mediedagbok kan inneholde: Morgen - sjekke sosiale medier på mobil, høre podcast/radio. Skole - bruke PC/nettbrett til oppgaver. Ettermiddag - strømme musikk, se YouTube. Kveld - se TV/strømmetjeneste, spille spill, chatte med venner. Reflekter over tid brukt og formål (informasjon, underholdning, kommunikasjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Mediehistorie
// ============================================================================

export const CHAPTER_MEDIEINFO_1_2: TextbookChapter = {
  id: 'medieinfo-1-2',
  courseId: 'medieinfo-1',
  chapterNumber: '2',
  title: 'Mediehistorie',
  description: 'En reise gjennom medienes utvikling fra trykkekunsten til dagens digitale medier.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for viktige milepæler i mediehistorien',
    'forklare hvordan nye medier har endret samfunnet',
    'reflektere over sammenhengen mellom teknologisk utvikling og medier',
  ],
  content: [
    {
      id: 'medieinfo-1-2-intro',
      type: 'text',
      content: `## Fra trykkekunst til algoritmer

Mediehistorien er historien om hvordan mennesker har kommunisert og delt informasjon. Hver ny medieteknologi har forandret samfunnet på grunnleggende måter.

**Hvorfor studere mediehistorie?**
- Forstå hvordan mediene har formet samfunnet
- Se mønstre i hvordan nye medier tas i bruk
- Forstå dagens medielandskap bedre
- Lære av fortiden for å forstå fremtiden

**Medierevolusjoner:**
Mediehistorien preges av store gjennombrudd som har endret hvordan mennesker kommuniserer og lever. Fra skriftspråket til internett - hver revolusjon har skapt nye muligheter og utfordringer.`,
    },
    {
      id: 'medieinfo-1-2-def-1',
      type: 'definition',
      title: 'Trykkekunsten og dens betydning',
      content: `**Johannes Gutenberg (ca. 1450):**
Den tyske gullsmeden Gutenberg utviklet trykkepressen med løse, gjenbrukbare typer. Dette gjorde masseproduksjon av tekst mulig.

**Før trykkekunsten:**
- Bøker ble kopiert for hånd av munker
- Svært tidkrevende og kostbart
- Bare kirken og eliten hadde tilgang til bøker
- Begrenset spredning av kunnskap

**Etter trykkekunsten:**
- Bøker ble billigere og mer tilgjengelige
- Kunnskap kunne spres raskere
- Reformasjonen muliggjort (Luther kunne spre sine ideer)
- Vitenskapelig revolusjon akselerert
- Standardisering av språk
- Grunnlag for aviser og tidsskrifter

"Trykkekunsten er den største oppfinnelse siden hjulet" - har blitt hevdet av mange.`,
    },
    {
      id: 'medieinfo-1-2-def-2',
      type: 'definition',
      title: 'Avisenes fremvekst',
      content: `**De første avisene (1600-tallet):**
- Regelmessige, trykte publikasjoner med nyheter
- Først i Tyskland og Nederland
- Spredte seg raskt i Europa

**Norske aviser:**
- *Norske Intelligenz-Seddeler* (1763) - Norges første avis
- *Morgenbladet* (1819) - viktig i nasjonsbyggingen
- *Aftenposten* (1860) - en av Norges største

**Avisenes glanstid (1900-tallet):**
- Parti-pressen: Aviser tilknyttet politiske partier
- Store opplag og bred dekning
- Viktig for demokrati og offentlig debatt

**Utfordringer i dag:**
- Konkurranse fra digitale medier
- Fallende opplag og annonseinntekter
- Overgang til nettaviser og digitale abonnementer`,
    },
    {
      id: 'medieinfo-1-2-def-3',
      type: 'definition',
      title: 'Audiovisuelle medier',
      content: `**Fotografiet (1839):**
Daguerreotypi - den første praktiske fotografimetoden. Dokumentasjon og kunst smeltet sammen.

**Filmen (1895):**
Brødrene Lumière viste de første filmene i Paris. Filmen ble raskt populær underholdning og kunstform.

**Radioen (1920-tallet):**
- NRK startet i 1933
- Samlet nasjonen rundt felles programmer
- Viktig under andre verdenskrig
- Kringkasting - én avsender, mange mottakere

**Fjernsynet (1950-60-tallet):**
- NRK TV startet 1960
- "Det felles samtaleemnet" - alle så det samme
- TV2 (1992) brøt NRK-monopolet
- Endret familieliv og fritid dramatisk

**Kabel-TV og satellitt (1980-90-tallet):**
Flere kanaler, mer valgfrihet, internasjonal påvirkning.`,
    },
    {
      id: 'medieinfo-1-2-def-4',
      type: 'definition',
      title: 'Den digitale revolusjonen',
      content: `**Internett (1990-tallet):**
- World Wide Web (1991) - Tim Berners-Lee
- E-post, nettsider, søkemotorer
- Grunnleggende endring av informasjonstilgang

**Web 2.0 (2000-tallet):**
- Brukerskapt innhold
- Blogger, wikier, sosiale medier
- Fra passive mottakere til aktive deltakere

**Sosiale medier (2004-):**
- Facebook (2004), YouTube (2005), Twitter (2006)
- Instagram (2010), Snapchat (2011), TikTok (2016)
- Endret kommunikasjon, nyhetsformidling, markedsføring

**Smarttelefonen (2007-):**
- iPhone lansert 2007
- Medier alltid tilgjengelig i lomma
- Apps og mobilt innhold dominerer

**Strømming (2010-tallet):**
- Netflix, Spotify, YouTube
- On-demand - se/høre hva du vil, når du vil
- Endret TV- og musikkindustrien fundamentalt`,
    },
    {
      id: 'medieinfo-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Hvordan nye medier møtes med skepsis',
      problem: 'Hvordan har nye medier blitt mottatt gjennom historien?',
      solution: `**Et gjentakende mønster:**
Nesten alle nye medier har blitt møtt med bekymring og skepsis.

**Bøker:** Sokrates (ca. 400 f.Kr.) advarte mot skrift - den ville ødelegge hukommelsen og erstatte ekte kunnskap med overfladisk informasjon.

**Aviser:** Ble ansett som useriøse og sensasjonelle. Ville fylle hodene med unyttig informasjon.

**Radio:** Fryktet at den ville ødelegge samtalen i familien og isolere folk.

**TV:** "Idiotboksen" - ville gjøre barn dumme og passive. Ødelegge leseferdighetene.

**Videospill:** Ville skape voldelige barn og avhengighet.

**Internett og sosiale medier:** Bekymring for avhengighet, falske nyheter, personvern og mental helse.

**Lærdommen:** Vi bør være kritiske til nye medier, men også åpne for mulighetene. Bekymringene er ofte overdrevne, men ikke alltid ubegrunnet.`,
    },
    {
      id: 'medieinfo-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-2-ex-1',
        number: '2.1',
        type: 'multiple-choice',
        task: 'Hvem utviklet trykkepressen med løse typer rundt 1450?',
        options: [
          { id: 'a', text: 'Johannes Gutenberg', isCorrect: true },
          { id: 'b', text: 'Tim Berners-Lee', isCorrect: false },
          { id: 'c', text: 'Brødrene Lumière', isCorrect: false },
          { id: 'd', text: 'Guglielmo Marconi', isCorrect: false },
        ],
        hints: ['Han var en tysk gullsmed'],
        solution: 'Johannes Gutenberg utviklet trykkepressen med løse, gjenbrukbare typer rundt 1450. Dette regnes som en av historiens viktigste oppfinnelser.',
      },
    },
    {
      id: 'medieinfo-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-2-ex-2',
        number: '2.2',
        type: 'multiple-choice',
        task: 'Når startet NRK radio?',
        options: [
          { id: 'a', text: '1933', isCorrect: true },
          { id: 'b', text: '1920', isCorrect: false },
          { id: 'c', text: '1960', isCorrect: false },
          { id: 'd', text: '1945', isCorrect: false },
        ],
        hints: ['Det var på 1930-tallet'],
        solution: 'NRK (Norsk rikskringkasting) startet radiovirksomhet i 1933. NRK TV startet først i 1960.',
      },
    },
    {
      id: 'medieinfo-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-2-ex-3',
        number: '2.3',
        type: 'classic',
        task: 'Forklar hvilke konsekvenser trykkekunsten fikk for samfunnet.',
        hints: ['Tenk på tilgang til kunnskap, reformasjonen, vitenskap'],
        solution: 'Trykkekunsten gjorde bøker billigere og mer tilgjengelige. Den muliggjorde spredning av kunnskap til flere, bidro til reformasjonen (Luther kunne spre sine ideer), akselererte den vitenskapelige revolusjonen, standardiserte språk, og la grunnlaget for aviser og tidsskrifter. Kunnskap var ikke lenger forbeholdt eliten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-2-ex-4',
        number: '2.4',
        type: 'classic',
        task: 'Beskriv utviklingen fra Web 1.0 til Web 2.0 og hvilken betydning dette hadde.',
        hints: ['Tenk på brukernes rolle - fra passive til aktive'],
        solution: 'Web 1.0 var preget av statiske nettsider der brukerne var passive mottakere av informasjon. Web 2.0 (fra ca. 2004) introduserte brukerskapt innhold, interaktivitet og sosiale medier. Brukerne ble aktive deltakere som kunne lage, dele og kommentere innhold. Dette ga opphav til blogger, wikier, sosiale nettverk og delingsplattformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-2-ex-5',
        number: '2.5',
        type: 'classic',
        task: 'Lag en tidslinje med de viktigste milepælene i mediehistorien fra 1450 til i dag.',
        hints: ['Inkluder trykkekunst, avis, foto, film, radio, TV, internett, sosiale medier'],
        solution: 'Tidslinje: 1450 - Gutenbergs trykkepresse. 1763 - Første norske avis. 1839 - Fotografiet oppfinnes. 1895 - Filmens fødsel (Lumière). 1933 - NRK radio starter. 1960 - NRK TV starter. 1991 - World Wide Web lanseres. 2004 - Facebook grunnlegges. 2005 - YouTube lanseres. 2007 - iPhone lanseres. 2010-tallet - Strømmetjenester dominerer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Medietekster og sjangre
// ============================================================================

export const CHAPTER_MEDIEINFO_1_3: TextbookChapter = {
  id: 'medieinfo-1-3',
  courseId: 'medieinfo-1',
  chapterNumber: '3',
  title: 'Medietekster og sjangre',
  description: 'Lær om ulike medietekster, sjangre og hvordan man analyserer medieinnhold.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for ulike mediesjangre og deres kjennetegn',
    'analysere medietekster med relevante begreper',
    'reflektere over forholdet mellom form og innhold',
  ],
  content: [
    {
      id: 'medieinfo-1-3-intro',
      type: 'text',
      content: `## Hva er en medietekst?

I medievitenskap bruker vi begrepet "tekst" om alle typer medieinnhold - ikke bare skrift. En film er en tekst, et bilde er en tekst, en reklame er en tekst. Alt som formidler mening, kan analyseres som tekst.

**Hvorfor analyse av medietekster?**
- Forstå hvordan medier kommuniserer
- Gjennomskue virkemidler og påvirkning
- Bli en mer kritisk mediebruker
- Kunne skape bedre medieinnhold selv

**Tekstens tre nivåer:**
1. *Hva* - innholdet, budskapet
2. *Hvordan* - formen, virkemidlene
3. *Hvorfor* - hensikten, konteksten`,
    },
    {
      id: 'medieinfo-1-3-def-1',
      type: 'definition',
      title: 'Sjangerbegrepet',
      content: `**Hva er en sjanger?**
En sjanger er en kategori eller type tekst med felles kjennetegn. Sjangre hjelper oss å forstå og kategorisere medieinnhold.

**Hvorfor har vi sjangre?**
- Skaper forventninger hos publikum
- Gir skapere rammer å arbeide innenfor
- Letter kommunikasjon og markedsføring
- Gjør det lettere å sammenligne tekster

**Sjangerkjennetegn:**
- Form og struktur
- Tema og innhold
- Stil og tone
- Konvensjoner (forventede elementer)

**Sjangerblanding:**
Moderne medietekster blander ofte sjangre. En film kan være både komedie og romantikk ("romkom"), en artikkel kan være både nyhetsreportasje og personlig essay.`,
    },
    {
      id: 'medieinfo-1-3-def-2',
      type: 'definition',
      title: 'Journalistiske sjangre',
      content: `**Nyhetsartikkel:**
- Formidler nylig inntrufne hendelser
- Objektivt språk, nøytralt
- Svarer på spørsmålene hvem, hva, hvor, når, hvorfor, hvordan
- Omvendt pyramide-struktur (viktigst først)

**Reportasje:**
- Mer utdypende enn nyhetsartikkel
- Journalisten er ofte til stede
- Skildringer, stemninger, detaljer
- Kan ha personlig vinkling

**Feature:**
- Bakgrunnsstoff, ikke tidsavhengig
- Portrett, tema, fenomen
- Mer litterær stil
- Underholdende og informerende

**Kommentar/kronikk:**
- Meninger og synspunkter
- Subjektiv tekst
- Tydelig avsender
- Argumenterende

**Leder:**
- Avisens offisielle standpunkt
- Unsigned (uten byline)
- Kommenterer aktuelle saker`,
    },
    {
      id: 'medieinfo-1-3-def-3',
      type: 'definition',
      title: 'Fiksjonssjangre',
      content: `**Film og TV-drama:**
- *Action:* Spenning, fysiske konfrontasjoner
- *Komedie:* Humor, lette temaer
- *Drama:* Seriøse temaer, følelser
- *Thriller:* Spenning, mysterier
- *Grøsser/horror:* Skremme publikum
- *Romantikk:* Kjærlighetshistorier
- *Science fiction:* Fremtid, teknologi
- *Fantasy:* Overnaturlige elementer

**TV-serier:**
- *Dramaserie:* Løpende handling
- *Sitcom:* Situasjonskomedie
- *Miniserie:* Begrenset antall episoder
- *Dokumentarserie:* Virkelighetsbasert

**Undersjangre og hybrider:**
Dramedy (drama + komedie), romkom (romantisk komedie), dokudrama (dokumentar + drama)`,
    },
    {
      id: 'medieinfo-1-3-def-4',
      type: 'definition',
      title: 'Virkemidler i medietekster',
      content: `**Visuelle virkemidler:**
- *Komposisjon:* Hvordan elementer er plassert
- *Farger:* Stemning, symbolikk
- *Lys:* Atmosfære, fokus
- *Kameravinkler:* Perspektiv, maktforhold
- *Klipping:* Tempo, sammenheng

**Auditive virkemidler:**
- *Musikk:* Stemning, følelser
- *Lydeffekter:* Realisme, dramatikk
- *Stemme/dialog:* Karakterisering
- *Stillhet:* Spenning, ettertanke

**Språklige virkemidler:**
- *Ordvalg:* Tone, holdning
- *Metaforer:* Sammenligning, betydning
- *Retoriske spørsmål:* Involvering
- *Gjentakelse:* Forsterking

**Narrative virkemidler:**
- *Fortellerperspektiv:* Hvem forteller?
- *Tidshåndtering:* Kronologi, tilbakeblikk
- *Spenningskurve:* Oppbygging, klimaks`,
    },
    {
      id: 'medieinfo-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av en nyhetsartikkel',
      problem: 'Hvordan analyserer vi en nyhetsartikkel?',
      solution: `**Steg for analyse:**

**1. Identifiser sjangeren:**
Nyhetsartikkel - informerende, objektivt språk, omvendt pyramide.

**2. Analyser innholdet:**
- Hva handler teksten om?
- Hvilke fakta presenteres?
- Hvem er kildene?

**3. Analyser formen:**
- Tittel/overskrift: Fanger den oppmerksomhet? Objektiv eller ladet?
- Ingress: Oppsummerer den saken?
- Brødtekst: Omvendt pyramide - viktigst først?
- Bilder: Hva viser de? Bildetekst?

**4. Vurder virkemidler:**
- Ordvalg: Nøytrale eller ladede ord?
- Kildebruk: Flere sider representert?
- Vinkling: Hvilken historie fortelles?

**5. Reflekter over kontekst:**
- Hvem er avsender/avis?
- Hvem er målgruppen?
- Hva kan være utelatt?`,
    },
    {
      id: 'medieinfo-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-3-ex-1',
        number: '3.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en nyhetsartikkel?',
        options: [
          { id: 'a', text: 'Objektiv, omvendt pyramide-struktur, svarer på hvem/hva/hvor/når/hvorfor/hvordan', isCorrect: true },
          { id: 'b', text: 'Subjektiv, argumenterende, tydelige meninger', isCorrect: false },
          { id: 'c', text: 'Litterær stil, stemningsskildringer, personlig vinkling', isCorrect: false },
          { id: 'd', text: 'Fiksjon, oppdiktede karakterer, dramatisk struktur', isCorrect: false },
        ],
        hints: ['Tenk på hva som er viktigst i en nyhet'],
        solution: 'En nyhetsartikkel kjennetegnes av objektivt språk, omvendt pyramide-struktur (viktigst først), og at den svarer på spørsmålene hvem, hva, hvor, når, hvorfor og hvordan.',
      },
    },
    {
      id: 'medieinfo-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-3-ex-2',
        number: '3.2',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom en reportasje og en feature?',
        options: [
          { id: 'a', text: 'Reportasje er knyttet til aktuelle hendelser, feature er tidløs bakgrunnsstoff', isCorrect: true },
          { id: 'b', text: 'Reportasje er objektiv, feature er subjektiv', isCorrect: false },
          { id: 'c', text: 'Reportasje bruker bilder, feature bruker bare tekst', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
        ],
        hints: ['Tenk på tidsaspektet'],
        solution: 'Reportasjen er ofte knyttet til aktuelle hendelser der journalisten er til stede. Feature er tidløst bakgrunnsstoff som portrett, tema eller fenomen, og er ikke avhengig av aktualitet.',
      },
    },
    {
      id: 'medieinfo-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-3-ex-3',
        number: '3.3',
        type: 'classic',
        task: 'Velg en nyhetsartikkel og analyser den. Beskriv sjangerkjennetegn, virkemidler og vinkling.',
        hints: ['Bruk analysemodellen: Hva, hvordan, hvorfor'],
        solution: 'En god analyse inneholder: 1) Identifisering av sjanger og typiske trekk. 2) Analyse av overskrift, ingress, struktur. 3) Vurdering av kildebruk og balanse. 4) Analyse av ordvalg og eventuelle ladede ord. 5) Diskusjon av vinkling - hva er fremhevet, hva er tonet ned? 6) Bilder og bildetekst. 7) Refleksjon over hvem som er avsender og målgruppe.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-3-ex-4',
        number: '3.4',
        type: 'classic',
        task: 'Forklar hva sjangerblanding er og gi tre eksempler.',
        hints: ['Tenk på filmer eller TV-serier som kombinerer sjangre'],
        solution: 'Sjangerblanding betyr at en medietekst kombinerer elementer fra flere sjangre. Eksempler: 1) Romkom (romantisk komedie) - kombinerer romantikk og komedie. 2) Dokudrama - blander dokumentar og drama, ofte med rekonstruksjoner. 3) Infotainment - kombinerer informasjon og underholdning, som mange YouTube-kanaler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-3-ex-5',
        number: '3.5',
        type: 'classic',
        task: 'Analyser en filmtrailer eller en reklamefilm. Hvilke virkemidler brukes for å påvirke seeren?',
        hints: ['Se på visuelle, auditive og narrative virkemidler'],
        solution: 'Analyse bør inkludere: Visuelle virkemidler (farger, lys, kameravinkler, klipping). Auditive virkemidler (musikk, lydeffekter, voiceover). Narrative virkemidler (hvilken historie fortelles, spenningsoppbygging). Målgruppe og appell. Hva skal seeren føle/tenke/gjøre? Hvordan skaper de interesse uten å røpe for mye (trailer) eller hvordan kobles produktet til følelser (reklame)?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Informasjonssamfunnet
// ============================================================================

export const CHAPTER_MEDIEINFO_1_4: TextbookChapter = {
  id: 'medieinfo-1-4',
  courseId: 'medieinfo-1',
  chapterNumber: '4',
  title: 'Informasjonssamfunnet',
  description: 'Utforsk det moderne informasjonssamfunnet, digitalisering og dens konsekvenser.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for kjennetegn ved informasjonssamfunnet',
    'drøfte konsekvenser av digitalisering',
    'reflektere over informasjonsmengde og oppmerksomhetsøkonomi',
  ],
  content: [
    {
      id: 'medieinfo-1-4-intro',
      type: 'text',
      content: `## Velkommen til informasjonssamfunnet

Vi lever i et informasjonssamfunn - et samfunn der informasjon og kunnskap er den viktigste ressursen. Produksjon, bearbeiding og formidling av informasjon er blitt sentrale økonomiske aktiviteter.

**Fra jordbruk til informasjon:**
- Jordbrukssamfunnet: Jord og arbeidskraft var viktigst
- Industrisamfunnet: Maskiner og kapital dominerte
- Informasjonssamfunnet: Kunnskap og informasjon er nøkkelen

**Kjennetegn ved informasjonssamfunnet:**
- Enorm informasjonsmengde tilgjengelig
- Rask kommunikasjon over hele verden
- Digitalisering av stadig flere områder
- Kunnskapsintensivt arbeidsliv
- Økt betydning av utdanning`,
    },
    {
      id: 'medieinfo-1-4-def-1',
      type: 'definition',
      title: 'Digitalisering',
      content: `**Hva er digitalisering?**
Digitalisering innebærer at informasjon omgjøres til digitalt format (nuller og enere), og at digitale teknologier tas i bruk på stadig flere områder.

**Konsekvenser av digitalisering:**
- *Konvergens:* Ulike medier smelter sammen på digitale plattformer
- *Mobilitet:* Tilgang til informasjon overalt, alltid
- *Interaktivitet:* Brukere kan delta og påvirke
- *Personalisering:* Innhold tilpasset den enkelte
- *Global rekkevidde:* Ingen geografiske begrensninger

**Digitaliseringens paradoks:**
- Mer tilgjengelig, men vanskeligere å finne det relevante
- Flere muligheter, men også flere valg
- Mer kontakt, men kanskje mindre dype relasjoner
- Mer demokratisk, men også mer fragmentert`,
    },
    {
      id: 'medieinfo-1-4-def-2',
      type: 'definition',
      title: 'Informasjonsoverflod og filtrering',
      content: `**Informasjonseksplosjon:**
Det produseres mer informasjon enn noen gang. I 2020 ble det skapt mer data på to dager enn i hele menneskehetens historie frem til 2003.

**Konsekvenser:**
- Vanskelig å skille viktig fra uviktig
- Fare for overveldelse og stress
- Behov for filtrering og kuratoring

**Filtermekanismer:**
- *Redaktører:* Tradisjonell portvokterrolle
- *Søkemotorer:* Google bestemmer hva du finner
- *Algoritmer:* Sosiale medier kuraterer innhold
- *Venner:* Deling i nettverk

**Filterbobler:**
Algoritmer viser oss innhold basert på tidligere atferd. Vi ser mest det vi allerede er enig i eller interessert i. Dette kan begrense perspektiver og forsterke eksisterende holdninger.

**Ekkokamre:**
Grupper der meninger bekreftes og forsterkes uten motforestillinger.`,
    },
    {
      id: 'medieinfo-1-4-def-3',
      type: 'definition',
      title: 'Oppmerksomhetsøkonomi',
      content: `**Oppmerksomhet som ressurs:**
I en verden med uendelig informasjon blir menneskelig oppmerksomhet den knappe ressursen. Medier og plattformer konkurrerer om vår oppmerksomhet.

**Forretningsmodellen:**
Mange digitale tjenester er "gratis" fordi brukernes oppmerksomhet selges til annonsører. Jo mer tid vi bruker, jo mer annonseinntekter.

**Designet for avhengighet:**
- Uendelig scrolling
- Push-varsler
- Likes og belønningssystemer
- Autoavspilling

**Konsekvenser:**
- Fragmentert oppmerksomhet
- Vanskeligere med dypkonsentrasjon
- Bekymring for mental helse, særlig blant unge
- Demokratiske utfordringer (overfladisk debatt)

**Motstrategier:**
- Digital detox
- Skjermtidsbegrensning
- Bevisste medievaner
- "Slow media"-bevegelsen`,
    },
    {
      id: 'medieinfo-1-4-tip-1',
      type: 'tip',
      title: 'Tips: Håndtere informasjonsoverflod',
      content: `**Praktiske strategier:**
- Velg noen få, pålitelige nyhetskilder
- Begrens tid på sosiale medier
- Bruk "ikke forstyrr"-funksjoner
- Prioriter kvalitet over kvantitet
- Ta pauser fra skjerm
- Les lengre tekster/bøker
- Vær bevisst på algoritmer - søk aktivt etter andre perspektiver`,
    },
    {
      id: 'medieinfo-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Hvordan algoritmer former virkelighetsoppfatningen',
      problem: 'Hvordan påvirker algoritmene hva vi ser og tror?',
      solution: `**Tenk deg to ungdommer med ulike interesser:**

**Person A:** Interessert i klimaspørsmål, følger miljøorganisasjoner.
- Algoritmen viser: Klimaartikler, miljøaktivisme, reportasjer om naturødeleggelser
- Vennenes delinger: Klimastreik, vegetarmat, bærekraft
- Oppfatning: Klimakrisen er det viktigste problemet

**Person B:** Interessert i økonomi og næringsliv, følger finansnyheter.
- Algoritmen viser: Økonomisk vekst, innovasjon, arbeidsplasser
- Vennenes delinger: Karrieretips, investeringer, teknologi
- Oppfatning: Økonomisk utvikling er viktigst

**Begge lever i sin filterboble:**
- De ser sjelden det andre perspektivet
- Begge tror deres verdensbilde er "normalt"
- Vanskelig å forstå hverandre

**Konsekvens:** Polarisering - folk lever i ulike "virkeligheter" basert på hva algoritmene viser dem.`,
    },
    {
      id: 'medieinfo-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-4-ex-1',
        number: '4.1',
        type: 'multiple-choice',
        task: 'Hva menes med "oppmerksomhetsøkonomi"?',
        options: [
          { id: 'a', text: 'At menneskelig oppmerksomhet er en knapp ressurs som medier konkurrerer om', isCorrect: true },
          { id: 'b', text: 'At vi må betale for å få oppmerksomhet i mediene', isCorrect: false },
          { id: 'c', text: 'At økonomiske nyheter får mest oppmerksomhet', isCorrect: false },
          { id: 'd', text: 'At oppmerksomme mennesker tjener mer penger', isCorrect: false },
        ],
        hints: ['Tenk på hva som er begrenset når informasjon er ubegrenset'],
        solution: 'Oppmerksomhetsøkonomi beskriver hvordan menneskelig oppmerksomhet har blitt den knappe ressursen i en verden med uendelig informasjon. Medier og plattformer konkurrerer om å fange og holde på vår oppmerksomhet.',
      },
    },
    {
      id: 'medieinfo-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-4-ex-2',
        number: '4.2',
        type: 'multiple-choice',
        task: 'Hva er en filterboble?',
        options: [
          { id: 'a', text: 'Når algoritmer viser oss innhold basert på tidligere atferd, så vi hovedsakelig ser det vi allerede er interessert i', isCorrect: true },
          { id: 'b', text: 'Et program som blokkerer uønsket reklame', isCorrect: false },
          { id: 'c', text: 'Et sosialt nettverk for likesinnede', isCorrect: false },
          { id: 'd', text: 'En type nettlesertillegg', isCorrect: false },
        ],
        hints: ['Tenk på hvordan personalisering kan begrense perspektiver'],
        solution: 'En filterboble oppstår når algoritmer personaliserer innholdet vi ser basert på tidligere atferd, preferanser og nettverk. Vi ender opp med å se mest av det vi allerede er enig i eller interessert i, noe som kan begrense perspektivene våre.',
      },
    },
    {
      id: 'medieinfo-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-4-ex-3',
        number: '4.3',
        type: 'classic',
        task: 'Forklar hva som menes med digitalisering og nevn tre konsekvenser av denne utviklingen.',
        hints: ['Tenk på konvergens, mobilitet, interaktivitet'],
        solution: 'Digitalisering innebærer at informasjon omgjøres til digitalt format og at digitale teknologier tas i bruk på stadig flere områder. Konsekvenser: 1) Konvergens - ulike medier smelter sammen på digitale plattformer. 2) Mobilitet - vi har tilgang til informasjon overalt. 3) Interaktivitet - brukere kan delta og påvirke innhold. Andre: personalisering, global rekkevidde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-4-ex-4',
        number: '4.4',
        type: 'classic',
        task: 'Drøft positive og negative sider ved informasjonssamfunnet.',
        hints: ['Tenk på tilgang til kunnskap, men også overflod og filterbobler'],
        solution: 'Positive sider: Enkel tilgang til kunnskap og informasjon, mulighet for læring og selvutvikling, demokratisering av informasjon, global kommunikasjon, nye jobbmuligheter. Negative sider: Informasjonsoverflod og stress, filterbobler og ekkokamre, spredning av feilinformasjon, utfordringer for personvern, oppmerksomhetsproblemer, digital ulikhet mellom grupper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-4-ex-5',
        number: '4.5',
        type: 'classic',
        task: 'Undersøk dine egne filterbobler. Logg inn på sosiale medier og noter hva slags innhold du ser. Reflekter over hvorfor akkurat dette innholdet vises til deg.',
        hints: ['Tenk på hva du har søkt etter, likt, delt tidligere'],
        solution: 'God besvarelse inkluderer: Beskrivelse av innholdet man ser (temaer, kilder, format). Refleksjon over egen atferd som kan ha påvirket algoritmen (tidligere søk, likes, delinger, tid brukt). Vurdering av hva man IKKE ser - hvilke perspektiver er fraværende? Refleksjon over hvordan dette kan påvirke ens verdensbilde. Forslag til hvordan man kan utvide perspektivene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Medieproduksjon
// ============================================================================

export const CHAPTER_MEDIEINFO_1_5: TextbookChapter = {
  id: 'medieinfo-1-5',
  courseId: 'medieinfo-1',
  chapterNumber: '5',
  title: 'Medieproduksjon',
  description: 'Lær om prosessen bak medieproduksjon, fra idé til ferdig produkt.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for ulike faser i en medieproduksjon',
    'forstå grunnleggende prinsipper for bilde, lyd og redigering',
    'planlegge og gjennomføre enkle medieproduksjoner',
  ],
  content: [
    {
      id: 'medieinfo-1-5-intro',
      type: 'text',
      content: `## Fra idé til ferdig produkt

Medieproduksjon handler om å skape medieinnhold - enten det er en film, en podcast, et nettmagasin eller en sosial medie-kampanje. Uansett format følger produksjonsprosessen lignende faser.

**Hvorfor lære medieproduksjon?**
- Forstå mediene fra innsiden
- Bli en mer kritisk mediebruker
- Praktiske ferdigheter for fremtiden
- Kreativ utfoldelse og problemløsning

**De tre hovedfasene:**
1. Pre-produksjon (planlegging)
2. Produksjon (opptak/innhenting)
3. Post-produksjon (redigering/ferdigstilling)`,
    },
    {
      id: 'medieinfo-1-5-def-1',
      type: 'definition',
      title: 'Pre-produksjon',
      content: `**Idéutvikling:**
- Brainstorming og konseptutvikling
- Definere målgruppe og formål
- Research og informasjonsinnhenting

**Manus/manuskript:**
- Skriftlig beskrivelse av innholdet
- Dialog, handlinger, scener
- Formatering varierer med medietypen

**Storyboard:**
- Visuell plan, bilde for bilde
- Skisser av kameravinkler og komposisjon
- Notater om lyd og bevegelse

**Produksjonsplan:**
- Tidsplan og fremdrift
- Budsjett
- Utstyr som trengs
- Lokasjoner
- Medvirkende personer

**Forberedelser:**
- Rekvisitter og kostymer
- Booking av steder og folk
- Teknisk rigging`,
    },
    {
      id: 'medieinfo-1-5-def-2',
      type: 'definition',
      title: 'Produksjon - Grunnleggende bildeprinsipper',
      content: `**Bildeutsnitt:**
- *Totalbilde:* Viser hele personen/scenen, kontekst
- *Halvtotalt:* Person fra knærne og opp
- *Halvnært:* Person fra livet og opp
- *Nært:* Ansikt og skuldre
- *Ultranært:* Detaljer (øyne, hender)

**Komposisjon:**
- *Tredjedelsregelen:* Plasser viktige elementer langs delelinjene
- *Headroom:* Plass over hodet
- *Noseroom:* Plass i blikkretningen
- *Symmetri vs. asymmetri*

**Kamerabevegelser:**
- *Pan:* Horisontal dreining
- *Tilt:* Vertikal dreining
- *Zoom:* Inn/ut med optikk
- *Dolly/tracking:* Kamera flyttes

**Kameravinkler:**
- *Normalperspektiv:* Øyenhøyde
- *Froskeperspektiv:* Nedenfra, gjør motivet mektig
- *Fugleperspektiv:* Ovenfra, gir oversikt`,
    },
    {
      id: 'medieinfo-1-5-def-3',
      type: 'definition',
      title: 'Produksjon - Lyd og lys',
      content: `**Lyd:**
- *Dialoglyd:* Stemmer, samtaler
- *Reallyd:* Naturlige omgivelseslyder
- *Effektlyd:* Tilførte lydeffekter
- *Musikk:* Stemning, følelser, tempo

**Lydkvalitet:**
- Bruk ekstern mikrofon når mulig
- Vær oppmerksom på bakgrunnsstøy
- Vindbeskyttelse utendørs
- Test lydnivået før opptak

**Lys:**
- *Naturlig lys:* Sol, diffust lys
- *Kunstig lys:* Lamper, blitzere

**Trepunktslys (klassisk oppsett):**
1. *Hovedlys:* Primær lyskilde
2. *Fylllys:* Myker opp skygger
3. *Bakgrunnslys:* Skiller motiv fra bakgrunn

**Fargetemperatur:**
- Dagslys er blålig (5600K)
- Innendørslys er gulaktig (3200K)
- Viktig med konsistent fargetemperatur`,
    },
    {
      id: 'medieinfo-1-5-def-4',
      type: 'definition',
      title: 'Post-produksjon',
      content: `**Redigering:**
- Organisere og velge materiale
- Klippe sammen i rekkefølge
- Fjerne feil og "luft"
- Skape flyt og rytme

**Klippeprinsipper:**
- *Kontinuitetsklipp:* Glidende overganger
- *Match cut:* Lignende elementer i neste bilde
- *Jump cut:* Brå hopp i tid
- *Cross cutting:* Veksle mellom parallelle handlinger

**Lydmiksing:**
- Balansere dialog, musikk og effekter
- Nivåjustering
- Fjerning av støy

**Fargekorrigering:**
- Korrigere feil i eksponering/hvitbalanse
- Skape visuell konsistens
- Fargegrading for stemning

**Grafikk og tekst:**
- Titler og undertekster
- Informasjonsgrafikk
- Logo og krediteringer

**Eksport:**
- Velge riktig format og kvalitet
- Tilpasse til plattform (TV, nett, mobil)`,
    },
    {
      id: 'medieinfo-1-5-tip-1',
      type: 'tip',
      title: 'Tips for smarttelefonproduksjon',
      content: `**Filming med mobil:**
- Hold telefonen horisontalt (landskapsmodus) for de fleste produksjoner
- Bruk begge hender, eller stativ
- Lås fokus og eksponering
- Film flere tagninger enn du tror du trenger
- Ikke bruk digital zoom

**Lyd:**
- Ekstern mikrofon forbedrer kvaliteten dramatisk
- Film nær lydkilden
- Unngå steder med mye bakgrunnsstøy
- Ta opp "romtone" (stillhet) for redigering

**Redigering:**
- Mange gode gratisapper finnes
- Start enkelt, lær grunnleggende først
- Husk å sikkerhetskopiere materialet`,
    },
    {
      id: 'medieinfo-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Planlegging av en kort dokumentarfilm',
      problem: 'Hvordan planlegger man en kort dokumentarfilm om et lokalt tema?',
      solution: `**Konsept:** En 5-minutters dokumentar om en lokal kunstner.

**Pre-produksjon:**
1. Research: Les om kunstneren, besøk utstilling
2. Vinkling: Fokusere på kreativ prosess
3. Intervjuguide: 10-15 spørsmål
4. Storyboard: Intervjuklipp, kunstverker, arbeidsprosess
5. Utstyr: Kamera, mikrofon, lys, stativ
6. Tidsplan: Intervju (1t), b-roll (2t), redigering (4t)

**Produksjon:**
- Intervju med kunstneren (halvnært utsnitt)
- B-roll: Kunstverker, arbeid i atelier, detaljer
- Reallyd fra atelieret

**Post-produksjon:**
- Velge beste intervjusvar
- Legge b-roll over intervjulyden
- Legge til rolig bakgrunnsmusikk
- Tittel og krediteringer
- Eksportere til riktig format

**Levering:** Publisere på YouTube eller vise i klassen.`,
    },
    {
      id: 'medieinfo-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-5-ex-1',
        number: '5.1',
        type: 'multiple-choice',
        task: 'Hva er de tre hovedfasene i en medieproduksjon?',
        options: [
          { id: 'a', text: 'Pre-produksjon, produksjon, post-produksjon', isCorrect: true },
          { id: 'b', text: 'Planlegging, filming, visning', isCorrect: false },
          { id: 'c', text: 'Idé, opptak, publisering', isCorrect: false },
          { id: 'd', text: 'Research, intervju, redigering', isCorrect: false },
        ],
        hints: ['Tenk på før, under og etter'],
        solution: 'De tre hovedfasene er pre-produksjon (planlegging), produksjon (opptak/innhenting) og post-produksjon (redigering/ferdigstilling).',
      },
    },
    {
      id: 'medieinfo-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-5-ex-2',
        number: '5.2',
        type: 'multiple-choice',
        task: 'Hva er et storyboard?',
        options: [
          { id: 'a', text: 'En visuell plan med skisser av hvert bilde/scene', isCorrect: true },
          { id: 'b', text: 'En liste over alt utstyr som trengs', isCorrect: false },
          { id: 'c', text: 'Et dokument med all dialog', isCorrect: false },
          { id: 'd', text: 'En tidslinje for redigering', isCorrect: false },
        ],
        hints: ['Tenk på en tegneserie av produksjonen'],
        solution: 'Et storyboard er en visuell plan som viser produksjonen bilde for bilde, med skisser av kameravinkler og komposisjon, samt notater om lyd og bevegelse.',
      },
    },
    {
      id: 'medieinfo-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-5-ex-3',
        number: '5.3',
        type: 'classic',
        task: 'Forklar tredjedelsregelen og hvorfor den er nyttig i bildekomposisjon.',
        hints: ['Tenk på et rutenett med ni felt'],
        solution: 'Tredjedelsregelen innebærer at bildet deles i ni like store deler med to horisontale og to vertikale linjer. Viktige elementer plasseres langs disse linjene eller i krysningspunktene. Dette skaper mer dynamiske og interessante bilder enn å plassere motivet midt i bildet, og følger naturlige mønstre for hvordan øyet beveger seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-5-ex-4',
        number: '5.4',
        type: 'classic',
        task: 'Beskriv trepunktslys-oppsettet og hva de tre lysene gjør.',
        hints: ['Hovedlys, fyllys, bakgrunnslys'],
        solution: 'Trepunktslys består av: 1) Hovedlys (key light) - den primære lyskilden som belyser motivet, plasseres gjerne 45 grader til siden. 2) Fylllys (fill light) - myker opp skyggene som hovedlyset skaper, plasseres på motsatt side. 3) Bakgrunnslys (back light/rim light) - skiller motivet fra bakgrunnen og skaper dybde, plasseres bak motivet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-5-ex-5',
        number: '5.5',
        type: 'classic',
        task: 'Praktisk oppgave: Lag en kort video (30-60 sekunder) med mobilen din. Planlegg med storyboard, film minst tre ulike bildeutsnitt, og rediger ferdig.',
        hints: ['Bruk tredjedelsregelen, tenk på lyd, varier utsnitt'],
        solution: 'Vurderingskriterier: 1) Pre-produksjon: Tydelig konsept/idé, storyboard med minst 5 bilder. 2) Produksjon: Varierte bildeutsnitt, god komposisjon, stabil filming, akseptabel lyd. 3) Post-produksjon: Logisk rekkefølge, god klipperytme, eventuell musikk passer stemningen. 4) Totalinntrykk: Sammenhengende produkt som kommuniserer noe til seeren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Journalistikk
// ============================================================================

export const CHAPTER_MEDIEINFO_1_6: TextbookChapter = {
  id: 'medieinfo-1-6',
  courseId: 'medieinfo-1',
  chapterNumber: '6',
  title: 'Journalistikk',
  description: 'Utforsk journalistikkens rolle, metoder og etiske prinsipper.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for journalistikkens samfunnsoppdrag',
    'forklare journalistiske arbeidsmetoder',
    'reflektere over presseetikk og Vær Varsom-plakaten',
  ],
  content: [
    {
      id: 'medieinfo-1-6-intro',
      type: 'text',
      content: `## Journalistikk - den fjerde statsmakt

Journalistikk handler om å innhente, vurdere og formidle nyheter og informasjon til publikum. Journalister har en viktig rolle i demokratiet som "den fjerde statsmakt" - de overvåker de tre andre statsmaktene (Storting, regjering, domstoler).

**Journalistikkens hovedoppgaver:**
- Informere borgerne om viktige hendelser og saker
- Avdekke kritikkverdige forhold (gravejournalistikk)
- Skape forum for offentlig debatt
- Forklare komplekse saker forståelig

**Typer journalistikk:**
- Nyhetsjournalistikk
- Gravejournalistikk/undersøkende journalistikk
- Featurejournalistikk
- Kulturjournalistikk
- Sportsjournalistikk
- Vitenskapsjournalistikk`,
    },
    {
      id: 'medieinfo-1-6-def-1',
      type: 'definition',
      title: 'Journalistiske arbeidsmetoder',
      content: `**Nyhetskriterier (KVISA):**
- *Konflikt:* Uenighet, motsetninger
- *Vesentlighet:* Betydning for mange
- *Identifikasjon:* Nærhet, gjenkjennelse
- *Sensasjon:* Det uvanlige, overraskende
- *Aktualitet:* Nylig skjedd

**Kildearbeid:**
- Primærkilder: Førstehåndskunnskap
- Sekundærkilder: Andrehåndskunnskap
- Kildekritikk: Vurdere kildens troverdighet
- Kildevern: Beskytte anonyme kilder

**Intervjuteknikk:**
- Forberedelse og research
- Åpne og lukkede spørsmål
- Oppfølgingsspørsmål
- Aktiv lytting

**Faktasjekk:**
- Verifisere informasjon
- Kryssjekke med flere kilder
- Kontakte berørte parter`,
    },
    {
      id: 'medieinfo-1-6-def-2',
      type: 'definition',
      title: 'Presseetikk og Vær Varsom-plakaten',
      content: `**Vær Varsom-plakaten:**
Norsk presses etiske retningslinjer, vedtatt av Norsk Presseforbund. Gjelder for alle mediefolk.

**Hovedprinsipper:**
1. *Pressens samfunnsrolle:* Verne ytringsfrihet, avdekke kritikkverdige forhold
2. *Integritet og uavhengighet:* Ikke la seg påvirke av utenforliggende interesser
3. *Journalistisk atferd og forholdet til kildene:* Kildevern, identifisering, sitatsjekk
4. *Publiseringsregler:* Saklighet, kildekritikk, rett til samtidig imøtegåelse

**Viktige punkter:**
- Vern om barns identitet
- Forsiktighet ved omtale av selvmord
- Rett til å vite hvem du snakker med
- Rett til samtidig imøtegåelse ved sterke beskyldninger
- Skille mellom fakta og kommentar
- Rett til tilsvar

**Pressens Faglige Utvalg (PFU):**
Klageinstans som behandler brudd på god presseskikk.`,
    },
    {
      id: 'medieinfo-1-6-def-3',
      type: 'definition',
      title: 'Vinkling og objektivitet',
      content: `**Vinkling:**
Hvordan en sak presenteres - hvilken inngang, fokus og perspektiv som velges. Samme hendelse kan vinkles på mange måter.

**Eksempel på ulik vinkling:**
En ny bro bygges:
- Positivt: "Ny bro gir kortere reisetid"
- Negativt: "Ny bro koster skattebetalerne milliarder"
- Miljø: "Bro truer naturreservat"
- Lokalt: "Endelig god forbindelse for bygda"

**Objektivitet i journalistikk:**
- Total objektivitet er umulig - alle valg innebærer vinkling
- Men: Streben etter saklighet, balanse og ærlighet
- Viktig å skille mellom nyhet (fakta) og kommentar (mening)

**Balanse:**
- Flere sider av saken representert
- Samtidig imøtegåelse (tilsvar fra de som kritiseres)
- Men: Falsk balanse kan være misvisende (f.eks. klimadebatten)

**Kildebalanse:**
Hvem får uttale seg? Maktpersoner får ofte mest plass. Viktig å også høre "vanlige folk" og kritiske stemmer.`,
    },
    {
      id: 'medieinfo-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av vinkling i nyhetsdekning',
      problem: 'Hvordan kan vi analysere vinkling i nyheter?',
      solution: `**Tenk deg en sak om økte strømpriser:**

**Avis A (NTB-basert):**
"Strømprisene stiger kraftig"
- Nøytral, faktabasert
- Siterer statistikk
- Flere kilder

**Avis B (borgerlig):**
"Regjeringens avgiftspolitikk gir strømsjokk"
- Vinkling: Regjeringen har skylden
- Kilde: Opposisjonspolitiker

**Avis C (rødgrønn):**
"Strømkrise rammer lavinntektsfamilier hardest"
- Vinkling: Sosial urettferdighet
- Kilde: Fattigdomsforsker, berørt familie

**Avis D (lokalavis):**
"Lokale bedrifter frykter konkurs"
- Vinkling: Lokale konsekvenser
- Kilde: Lokal næringsdrivende

**Analyse:**
- Alle sakene er sanne, men forteller ulike historier
- Kildevalg påvirker vinklingen
- Leserens forståelse påvirkes av hvilken avis de leser`,
    },
    {
      id: 'medieinfo-1-6-tip-1',
      type: 'tip',
      title: 'Tips: Bli en kritisk nyhetsleser',
      content: `**Spørsmål å stille:**
- Hvem er kildene? Er flere sider representert?
- Hva er vinklingen? Hvilke andre vinklinger er mulige?
- Hva kan være utelatt?
- Er fakta og meninger tydelig skilt?
- Hvem eier mediet? Kan det påvirke dekningen?
- Finnes det interesse- eller maktkonflikter?

**Sammenlign:**
- Les samme sak i flere aviser
- Se hvordan ulike medier vinkler
- Vær oppmerksom på hvilke kilder som brukes`,
    },
    {
      id: 'medieinfo-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-6-ex-1',
        number: '6.1',
        type: 'multiple-choice',
        task: 'Hva står KVISA for i journalistikken?',
        options: [
          { id: 'a', text: 'Konflikt, Vesentlighet, Identifikasjon, Sensasjon, Aktualitet', isCorrect: true },
          { id: 'b', text: 'Kilde, Vinkling, Intervju, Sannhet, Analyse', isCorrect: false },
          { id: 'c', text: 'Kontroll, Verifisering, Integritet, Saklighet, Ansvar', isCorrect: false },
          { id: 'd', text: 'Kritikk, Varsling, Informasjon, Sikkerhet, Anmeldelse', isCorrect: false },
        ],
        hints: ['Det handler om hva som gjør noe til en nyhet'],
        solution: 'KVISA er en huskeregel for nyhetskriterier: Konflikt (uenighet), Vesentlighet (viktig for mange), Identifikasjon (nærhet/gjenkjennelse), Sensasjon (det uvanlige), Aktualitet (nylig skjedd).',
      },
    },
    {
      id: 'medieinfo-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-6-ex-2',
        number: '6.2',
        type: 'multiple-choice',
        task: 'Hva er Vær Varsom-plakaten?',
        options: [
          { id: 'a', text: 'Norsk presses etiske retningslinjer', isCorrect: true },
          { id: 'b', text: 'En lov om ytringsfrihet', isCorrect: false },
          { id: 'c', text: 'En pris for god journalistikk', isCorrect: false },
          { id: 'd', text: 'Et program for pressestøtte', isCorrect: false },
        ],
        hints: ['Det handler om etikk i mediene'],
        solution: 'Vær Varsom-plakaten er norsk presses etiske retningslinjer, vedtatt av Norsk Presseforbund. Den angir prinsipper for god presseskikk og gjelder for alle mediefolk.',
      },
    },
    {
      id: 'medieinfo-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-6-ex-3',
        number: '6.3',
        type: 'classic',
        task: 'Forklar hva "samtidig imøtegåelse" betyr og hvorfor det er viktig.',
        hints: ['Tenk på den som blir kritisert i en sak'],
        solution: 'Samtidig imøtegåelse betyr at personer som utsettes for sterke beskyldninger skal få mulighet til å svare i samme artikkel/sending. Det er viktig fordi: 1) Det sikrer balanse og rettferdighet. 2) Leseren/seeren får høre begge sider. 3) Det forhindrer ensidig fremstilling. 4) Det beskytter mot uriktige anklager. Dette er nedfelt i Vær Varsom-plakatens punkt 4.14.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-6-ex-4',
        number: '6.4',
        type: 'classic',
        task: 'Finn en nyhetssak og analyser vinklingen. Hvordan kunne saken vært vinklet annerledes?',
        hints: ['Se på overskrift, kilder, fokus'],
        solution: 'En god analyse inneholder: 1) Identifisering av den valgte vinklingen (overskrift, ingress, fokus). 2) Analyse av kildebruk - hvem uttaler seg? 3) Vurdering av hva som er fremhevet og hva som er tonet ned. 4) Minst to alternative vinklinger med konkrete forslag til overskrifter. 5) Refleksjon over hvorfor redaksjonen kan ha valgt denne vinklingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-6-ex-5',
        number: '6.5',
        type: 'classic',
        task: 'Praktisk oppgave: Lag en kort nyhetsartikkel (300-400 ord) om noe som skjer på skolen eller i lokalsamfunnet. Bruk intervju som kilde.',
        hints: ['Bruk KVISA, omvendt pyramide, husk samtid imøtegåelse'],
        solution: 'Vurderingskriterier: 1) Oppfyller nyhetskriterier (KVISA). 2) Omvendt pyramide-struktur (viktigst først). 3) God overskrift og ingress. 4) Minst én intervjukilde sitert korrekt. 5) Faktasjekket informasjon. 6) Objektivt språk (skille mellom fakta og mening). 7) God rettskriving og språk. Bonus: Flere kilder, bilder, infoboks.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Reklame og markedsføring
// ============================================================================

export const CHAPTER_MEDIEINFO_1_7: TextbookChapter = {
  id: 'medieinfo-1-7',
  courseId: 'medieinfo-1',
  chapterNumber: '7',
  title: 'Reklame og markedsføring',
  description: 'Lær om reklame, markedsføring og hvordan de påvirker oss.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for reklamens virkemidler og appeller',
    'analysere reklame kritisk',
    'reflektere over reklamens påvirkning på individ og samfunn',
  ],
  content: [
    {
      id: 'medieinfo-1-7-intro',
      type: 'text',
      content: `## Reklame - overtalelsens kunst

Reklame er overalt. Vi eksponeres for tusenvis av reklamebeskjeder hver dag - på TV, nett, sosiale medier, i byrommet, på klærne våre. Reklame er en kommunikasjonsform med ett hovedmål: å påvirke oss til å kjøpe, stemme, handle eller tenke på en bestemt måte.

**Hva er reklame?**
Betalt kommunikasjon fra en identifiserbar avsender, med formål å påvirke mottakernes holdninger eller atferd.

**Reklamens funksjoner:**
- Informere om produkter og tjenester
- Skape behov og ønsker
- Bygge merkevarer og image
- Påvirke holdninger og verdier
- Finansiere medier`,
    },
    {
      id: 'medieinfo-1-7-def-1',
      type: 'definition',
      title: 'Reklamens appeller',
      content: `**Ethos - troverdighetsappell:**
Bygger på avsenderens troverdighet og autoritet.
- Eksperter: "9 av 10 tannleger anbefaler..."
- Kjendiser: Idrettsutøvere, skuespillere
- Vanlige folk: "Ekte kunder" som ligner målgruppen

**Pathos - følelsesappell:**
Appellerer til følelser for å påvirke.
- Glede, humor, latter
- Frykt, bekymring (forsikring, sikkerhet)
- Nostalgi, minner
- Kjærlighet, tilhørighet, samhold
- Prestisje, status, suksess

**Logos - fornuftsappell:**
Appellerer til logikk og fornuft.
- Fakta og tall: "50% raskere"
- Sammenligning med konkurrenter
- Pris og verdi: "Best i test"
- Problemløsning: Produktet løser et konkret problem

De fleste reklamer kombinerer flere appeller.`,
    },
    {
      id: 'medieinfo-1-7-def-2',
      type: 'definition',
      title: 'Reklamens virkemidler',
      content: `**Språklige virkemidler:**
- *Slagord:* Kort, minneverdig ("Just Do It")
- *Gjentakelse:* Forsterker budskapet
- *Retoriske spørsmål:* Engasjerer mottaker
- *Ordspill:* Skaper oppmerksomhet
- *Superlativ:* Best, størst, billigst

**Visuelle virkemidler:**
- Farger: Assosiasjoner, stemning
- Bilder: Idealiserte fremstillinger
- Mennesker: Vakre, vellykkede, lykkelige
- Produktplassering: Produktet i sentrum

**Lydlige virkemidler:**
- Musikk: Stemning, gjenkjennelse
- Stemmer: Autoritet, nærhet
- Jingle: Melodisk slagord

**Tekniske virkemidler:**
- Kameravinkler: Produktet sett nedenfra virker stort
- Lyseffekter: Glamorøst lys
- Retusjering: Perfekte bilder`,
    },
    {
      id: 'medieinfo-1-7-def-3',
      type: 'definition',
      title: 'Digital markedsføring',
      content: `**Målrettet reklame:**
Annonsører bruker data om deg til å vise relevant reklame:
- Søkehistorikk
- Nettleseratferd
- Geografisk posisjon
- Demografi (alder, kjønn)
- Interesser og hobbyer

**Native advertising:**
Reklame som ligner redaksjonelt innhold. Kan være vanskelig å skille fra nyheter/artikler.

**Influencer-markedsføring:**
Kjendiser eller "vanlige folk" på sosiale medier promoterer produkter. Skal merkes som reklame.

**Retargeting:**
Du ser reklame for produkter du har sett på tidligere. "Følger deg" rundt på nettet.

**Personalisering:**
Reklamen tilpasses deg basert på dataene som samles inn.

**Utfordringer:**
- Personvern og overvåkning
- Skjult reklame
- Manipulasjon
- Filterbobler også i reklame`,
    },
    {
      id: 'medieinfo-1-7-def-4',
      type: 'definition',
      title: 'Reklame og etikk',
      content: `**Markedsføringsloven:**
Regulerer markedsføring i Norge:
- Forbud mot villedende reklame
- Krav om å merke reklame
- Særlig beskyttelse av barn

**Reklame rettet mot barn:**
- Strengere regler
- Forbud mot å utnytte barns godtroenhet
- Forbud mot direkte kjøpsoppfordringer til barn

**Merking av reklame:**
- Reklame skal være tydelig merket
- Gjelder også influencere på sosiale medier
- "Annonse", "Betalt samarbeid", "Reklame"

**Kroppspress og skjønnhetsidealer:**
- Retusjerte bilder skaper urealistiske idealer
- Kan føre til dårlig selvbilde
- Krav om merking av retusjering i Norge

**Reklamekritikk:**
- Skaper falske behov
- Forsterker stereotypier
- Bidrar til forbrukssamfunnet
- Miljøkonsekvenser av overforbruk`,
    },
    {
      id: 'medieinfo-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av en reklame',
      problem: 'Hvordan analyserer vi en reklame systematisk?',
      solution: `**Steg for reklameanalyse:**

**1. Beskriv reklamen:**
- Hva ser vi? (bilde, tekst, lyd)
- Hva er produktet/tjenesten?
- Hvem er avsender?

**2. Identifiser målgruppen:**
- Hvem henvender reklamen seg til?
- Alder, kjønn, interesser, livsstil?

**3. Analyser appeller:**
- Ethos: Brukes eksperter, kjendiser?
- Pathos: Hvilke følelser appelleres til?
- Logos: Brukes fakta og fornuft?

**4. Identifiser virkemidler:**
- Språk: Slagord, ordvalg, tone
- Visuelt: Farger, bilder, komposisjon
- Lyd: Musikk, stemmer

**5. Vurder budskapet:**
- Hva er det eksplisitte budskapet (sies direkte)?
- Hva er det implisitte budskapet (ligger mellom linjene)?
- Hvilke verdier formidles?

**6. Refleksjon:**
- Virker reklamen? Hvorfor/hvorfor ikke?
- Er den etisk forsvarlig?
- Hvem kan den påvirke negativt?`,
    },
    {
      id: 'medieinfo-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-7-ex-1',
        number: '7.1',
        type: 'multiple-choice',
        task: 'Hva er pathos i reklamesammenheng?',
        options: [
          { id: 'a', text: 'Følelsesappell - reklamen appellerer til følelser', isCorrect: true },
          { id: 'b', text: 'Troverdighetsappell - reklamen bruker eksperter', isCorrect: false },
          { id: 'c', text: 'Fornuftsappell - reklamen bruker fakta og tall', isCorrect: false },
          { id: 'd', text: 'Prisappell - reklamen fokuserer på god pris', isCorrect: false },
        ],
        hints: ['Tenk på følelser'],
        solution: 'Pathos er følelsesappell - reklamen forsøker å påvirke gjennom følelser som glede, frykt, nostalgi, kjærlighet eller prestisje.',
      },
    },
    {
      id: 'medieinfo-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-7-ex-2',
        number: '7.2',
        type: 'multiple-choice',
        task: 'Hva er "native advertising"?',
        options: [
          { id: 'a', text: 'Reklame som ligner redaksjonelt innhold', isCorrect: true },
          { id: 'b', text: 'Reklame fra norske annonsører', isCorrect: false },
          { id: 'c', text: 'Reklame uten musikk', isCorrect: false },
          { id: 'd', text: 'Reklame på naturlige materialer', isCorrect: false },
        ],
        hints: ['Tenk på reklame som er vanskelig å skille fra annet innhold'],
        solution: 'Native advertising er reklame som er utformet for å ligne det redaksjonelle innholdet rundt. Det kan være vanskelig å skille fra vanlige artikler eller innlegg.',
      },
    },
    {
      id: 'medieinfo-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-7-ex-3',
        number: '7.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom ethos, pathos og logos og gi eksempler på hver.',
        hints: ['Troverdighet, følelser, fornuft'],
        solution: 'Ethos (troverdighet): Reklamen bruker troverdige kilder som eksperter, kjendiser eller "vanlige folk" - f.eks. "Anbefalt av hudleger". Pathos (følelser): Reklamen appellerer til følelser - f.eks. en familiesamling rundt bordet (varme, tilhørighet). Logos (fornuft): Reklamen bruker fakta, tall og logiske argumenter - f.eks. "50% raskere enn konkurrentene" eller "Best i test".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-7-ex-4',
        number: '7.4',
        type: 'classic',
        task: 'Drøft positive og negative sider ved reklame i samfunnet.',
        hints: ['Tenk på informasjon, finansiering, men også forbruk og påvirkning'],
        solution: 'Positive sider: Informerer om produkter/tjenester, finansierer medier og gratistjenester, skaper arbeidsplasser, kan drive innovasjon. Negative sider: Skaper kunstige behov, bidrar til forbrukssamfunnet, kan forsterke stereotypier og kroppspress, personvernutfordringer ved målrettet reklame, barn er sårbare for påvirkning, kan være villedende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-7-ex-5',
        number: '7.5',
        type: 'classic',
        task: 'Velg en reklame (TV, nett, sosiale medier) og gjennomfør en fullstendig analyse. Bruk analysemodellen fra kapittelet.',
        hints: ['Beskriv, målgruppe, appeller, virkemidler, budskap, refleksjon'],
        solution: 'Vurderingskriterier: 1) Tydelig beskrivelse av reklamen. 2) Målgruppe identifisert med begrunnelse. 3) Analyse av appeller (ethos, pathos, logos) med konkrete eksempler. 4) Identifisering av språklige, visuelle og eventuelt lydlige virkemidler. 5) Tydelig skille mellom eksplisitt og implisitt budskap. 6) Kritisk refleksjon over virkning og etiske aspekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Sosiale medier
// ============================================================================

export const CHAPTER_MEDIEINFO_1_8: TextbookChapter = {
  id: 'medieinfo-1-8',
  courseId: 'medieinfo-1',
  chapterNumber: '8',
  title: 'Sosiale medier',
  description: 'Utforsk sosiale medier, deres funksjoner, muligheter og utfordringer.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for kjennetegn ved ulike sosiale medier',
    'drøfte muligheter og utfordringer med sosiale medier',
    'reflektere over eget bruk av sosiale medier',
  ],
  content: [
    {
      id: 'medieinfo-1-8-intro',
      type: 'text',
      content: `## Sosiale medier - en revolusjon i kommunikasjon

Sosiale medier har fundamentalt endret hvordan vi kommuniserer, får nyheter, underholder oss og presenterer oss selv. For mange unge er sosiale medier en naturlig del av hverdagen - men hva er egentlig sosiale medier?

**Definisjon:**
Sosiale medier er nettbaserte tjenester som lar brukere skape, dele og interagere med innhold og hverandre.

**Kjennetegn:**
- Brukerskapt innhold
- Nettverksbygging og sosial interaksjon
- Deling og viral spredning
- Sanntidskommunikasjon
- Personlige profiler`,
    },
    {
      id: 'medieinfo-1-8-def-1',
      type: 'definition',
      title: 'Typer sosiale medier',
      content: `**Sosiale nettverk:**
- Facebook: Vennenettverk, grupper, arrangementer
- LinkedIn: Profesjonelt nettverk, karriere

**Bildedelingstjenester:**
- Instagram: Bilder, stories, reels
- Pinterest: Ideer og inspirasjon
- Snapchat: Bilder/video som forsvinner

**Videoplattformer:**
- YouTube: Lange videoer, abonnement
- TikTok: Korte videoer, viral spredning
- Twitch: Direktesendt strømming

**Mikroblogging/meldinger:**
- Twitter/X: Korte meldinger, debatt
- Reddit: Forum, interessegrupper
- Discord: Chat, communities

**Meldingstjenester:**
- Messenger, WhatsApp, iMessage
- Telegram, Signal

**Plattformenes ulike logikk:**
Hver plattform har sin egen kultur, algoritme og bruksmønster. Det som fungerer på TikTok fungerer ikke nødvendigvis på LinkedIn.`,
    },
    {
      id: 'medieinfo-1-8-def-2',
      type: 'definition',
      title: 'Muligheter med sosiale medier',
      content: `**Kommunikasjon og nettverk:**
- Holde kontakt med venner og familie
- Finne likesinnede og fellesskap
- Bygge profesjonelt nettverk
- Organisere aktiviteter og arrangementer

**Informasjon og kunnskap:**
- Rask tilgang til nyheter
- Lære nye ting (tutorials, kurs)
- Følge eksperter og temaer
- Få innsikt i andres erfaringer

**Kreativitet og uttrykk:**
- Dele egen kreativitet
- Få tilbakemeldinger og inspirasjon
- Bygge publikum og følgere
- Mulighet for inntekt (influencere)

**Demokrati og ytringsfrihet:**
- Flere stemmer i offentligheten
- Organisering av bevegelser (#MeToo, klimastreik)
- Holde maktpersoner ansvarlige
- Direktekontakt med politikere`,
    },
    {
      id: 'medieinfo-1-8-def-3',
      type: 'definition',
      title: 'Utfordringer med sosiale medier',
      content: `**Mental helse:**
- Sammenligningsspiral ("alle andre har det bedre")
- FOMO (fear of missing out)
- Avhengighet og tidsbruk
- Kroppspress og urealistiske idealer
- Nettmobbing og hatefulle ytringer

**Personvern og data:**
- Plattformene samler enorme mengder data
- Målrettet reklame basert på atferd
- Dataene kan misbrukes
- Vanskelig å slette spor

**Desinformasjon og manipulasjon:**
- Falske nyheter spres raskt
- Ekkokamre forsterker ensidige syn
- Utenlandsk påvirkning i valg
- Manipulerte bilder og deepfakes

**Sosiale utfordringer:**
- Polarisering av debatter
- Overflate vs. dybde i relasjoner
- Avhengighet av likes og validering
- Digital ulikhet

**Algoritmenes makt:**
- Algoritmer bestemmer hva du ser
- Sensasjonelt innhold prioriteres
- Filterbobler begrenser perspektiver`,
    },
    {
      id: 'medieinfo-1-8-def-4',
      type: 'definition',
      title: 'Algoritmene og oppmerksomhet',
      content: `**Hvordan algoritmer fungerer:**
Sosiale medier bruker algoritmer for å bestemme hva som vises i din feed. Algoritmen optimaliserer for engasjement - det som får deg til å bli lenger.

**Faktorer som påvirker algoritmen:**
- Hva du liker, kommenterer, deler
- Hvem du følger og interagerer med
- Hvor lenge du ser på innhold
- Hva som er populært akkurat nå
- Din lokasjon og demografi

**Konsekvenser:**
- Ekstremt og følelsesladet innhold prioriteres
- "Rabbithole"-effekt: Algoritmen drar deg dypere inn
- Vanskeligere å få oversikt
- Innhold som bekrefter eksisterende syn prioriteres

**Varslingssystemer:**
- Push-varsler holder deg engasjert
- Designet for å skape vaner
- "Variable reward" - som spilleautomat

**Tips for bevisst bruk:**
- Slå av unødvendige varsler
- Sett skjermtid-begrensninger
- Følg aktivt varierte kilder
- Vær bevisst på hva du "liker"`,
    },
    {
      id: 'medieinfo-1-8-example-1',
      type: 'example',
      title: 'Eksempel: Virale fenomener og sosiale mediers dynamikk',
      problem: 'Hvorfor går noe "viralt" på sosiale medier?',
      solution: `**Kjennetegn ved viralt innhold:**

**Følelsesaktivering:**
Innhold som utløser sterke følelser (latter, sinne, overraskelse, beundring) deles oftere.

**Identifikasjon:**
"Dette er så meg!" - folk deler det de kjenner seg igjen i.

**Sosial valuta:**
Dele noe først, se smart/morsom/informert ut. Det gir status.

**Praktisk verdi:**
Tips, life hacks, nyttig informasjon deles fordi det hjelper andre.

**Historiefortelling:**
Gode historier med overraskende vendinger engasjerer.

**Eksempel: Ice Bucket Challenge (2014):**
- Sterke følelser (moro, fellesskap)
- Sosial valuta (alle gjør det)
- Enkel handling (nominer andre)
- Godt formål (ALS-forskning)
- Kjendiser deltok
- Resultat: Over 100 millioner dollar til forskning

**Algoritmens rolle:**
Når noe begynner å spre seg, viser algoritmen det til flere, som igjen øker spredningen - en selvforsterkende effekt.`,
    },
    {
      id: 'medieinfo-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-8-ex-1',
        number: '8.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner sosiale medier?',
        options: [
          { id: 'a', text: 'Brukerskapt innhold, nettverksbygging og sosial interaksjon', isCorrect: true },
          { id: 'b', text: 'Profesjonelt produsert innhold fra mediehus', isCorrect: false },
          { id: 'c', text: 'Enveiskommunikasjon fra avsender til mottaker', isCorrect: false },
          { id: 'd', text: 'Innhold som bare kan leses, ikke deles', isCorrect: false },
        ],
        hints: ['Tenk på hva som skiller sosiale medier fra tradisjonelle medier'],
        solution: 'Sosiale medier kjennetegnes av brukerskapt innhold, nettverksbygging og sosial interaksjon. Brukerne er både produsenter og konsumenter av innhold.',
      },
    },
    {
      id: 'medieinfo-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-8-ex-2',
        number: '8.2',
        type: 'multiple-choice',
        task: 'Hva menes med FOMO?',
        options: [
          { id: 'a', text: 'Fear of missing out - angst for å gå glipp av noe', isCorrect: true },
          { id: 'b', text: 'For ofte mobil-overforbruk', isCorrect: false },
          { id: 'c', text: 'Fokusert online media-observasjon', isCorrect: false },
          { id: 'd', text: 'Frykten for mange online-meldinger', isCorrect: false },
        ],
        hints: ['Det handler om å gå glipp av noe'],
        solution: 'FOMO står for "Fear of missing out" - angsten for å gå glipp av opplevelser, hendelser eller informasjon som andre har tilgang til, særlig via sosiale medier.',
      },
    },
    {
      id: 'medieinfo-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-8-ex-3',
        number: '8.3',
        type: 'classic',
        task: 'Drøft tre positive og tre negative sider ved sosiale medier for unge mennesker.',
        hints: ['Tenk på kommunikasjon, kreativitet, mental helse, personvern'],
        solution: 'Positive: 1) Kommunikasjon og nettverksbygging - holde kontakt, finne likesinnede. 2) Kreativitet og læring - dele innhold, lære nye ting. 3) Demokratisering - flere stemmer, organisering av bevegelser. Negative: 1) Mental helse - sammenligning, kroppspress, avhengighet. 2) Personvern - omfattende datainnsamling og sporing. 3) Desinformasjon - falske nyheter, ekkokamre, manipulasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-8-ex-4',
        number: '8.4',
        type: 'classic',
        task: 'Forklar hvordan algoritmer på sosiale medier fungerer og hvilke konsekvenser dette kan ha.',
        hints: ['Tenk på hva algoritmene optimaliserer for og hvordan det påvirker oss'],
        solution: 'Algoritmer analyserer din atferd (likes, kommentarer, tid brukt) for å vise innhold som holder deg engasjert lengst mulig. Konsekvenser: 1) Sensasjonelt innhold prioriteres. 2) Filterbobler - du ser mest det du allerede er enig i. 3) Rabbithole-effekt - dras dypere inn i temaer. 4) Ekstreme syn kan forsterkes. 5) Avhengighet - designet for å holde deg på plattformen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-8-ex-5',
        number: '8.5',
        type: 'classic',
        task: 'Refleksjon: Analyser ditt eget bruk av sosiale medier. Hvilke plattformer bruker du, hvor mye tid, og hvilke positive/negative effekter opplever du?',
        hints: ['Vær ærlig, tenk på tidsbruk, følelser, påvirkning'],
        solution: 'En god refleksjon inneholder: 1) Oversikt over hvilke plattformer som brukes og omtrentlig tidsbruk. 2) Hva brukes plattformene til (kommunikasjon, underholdning, informasjon). 3) Positive effekter som oppleves (kontakt med venner, inspirasjon, læring). 4) Negative effekter som oppleves (tidstyv, sammenligning, stress). 5) Konkrete tiltak for å forbedre eget bruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Medierett og etikk
// ============================================================================

export const CHAPTER_MEDIEINFO_1_9: TextbookChapter = {
  id: 'medieinfo-1-9',
  courseId: 'medieinfo-1',
  chapterNumber: '9',
  title: 'Medierett og etikk',
  description: 'Forstå lover og etiske retningslinjer som regulerer mediene.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for sentrale lover og regler for mediene',
    'forstå opphavsrett og personvern i digital kontekst',
    'reflektere over etiske dilemmaer i mediene',
  ],
  content: [
    {
      id: 'medieinfo-1-9-intro',
      type: 'text',
      content: `## Mediene og loven

Mediene opererer innenfor et rammeverk av lover og etiske retningslinjer. Disse skal balansere ulike hensyn: ytringsfrihet, personvern, opphavsrett og samfunnets behov for informasjon.

**Hvorfor medieregler?**
- Beskytte enkeltpersoner mot overgrep
- Sikre rettferdig konkurranse
- Verne om opphavsrettigheter
- Balansere ytringsfrihet mot andre rettigheter
- Sikre pressens uavhengighet

**Viktige prinsipper:**
- Ytringsfrihet er grunnleggende, men ikke absolutt
- Mediene har ansvar for det de publiserer
- Personvern må veies mot offentlig interesse
- Barn og unge har særlig beskyttelse`,
    },
    {
      id: 'medieinfo-1-9-def-1',
      type: 'definition',
      title: 'Ytringsfrihet og dens grenser',
      content: `**Ytringsfrihet i Norge:**
Grunnlovens paragraf 100 verner ytringsfriheten. Den gir rett til å ytre seg og motta informasjon.

**Begrunnelser for ytringsfrihet:**
- Sannhetssøken: Fri debatt finner sannheten
- Demokrati: Borgere trenger informasjon
- Selvrealisering: Uttrykke seg er grunnleggende

**Grenser for ytringsfriheten:**
- *Ærekrenkelser:* Usanne påstander som skader omdømmet
- *Privatlivets fred:* Spre private opplysninger
- *Hatefulle ytringer:* Diskriminerende ytringer mot grupper
- *Trusler:* Alvorlige trusler er straffbart
- *Taushetsplikt:* Visse opplysninger kan ikke deles

**Balanse:**
Ytringsfriheten må veies mot andre rettigheter. I Norge har vi tradisjonelt hatt vid ytringsfrihet, men grensene diskuteres stadig.`,
    },
    {
      id: 'medieinfo-1-9-def-2',
      type: 'definition',
      title: 'Personvern og GDPR',
      content: `**Hva er personvern?**
Retten til kontroll over informasjon om seg selv. Beskytter mot overvåkning og misbruk av personopplysninger.

**Personvernforordningen (GDPR):**
EU-forordning som gjelder i Norge fra 2018. Styrker individets rettigheter.

**Viktige prinsipper:**
- *Samtykke:* Du må samtykke til behandling av data
- *Formål:* Data kan bare brukes til oppgitt formål
- *Minimering:* Bare samle nødvendige data
- *Innsyn:* Du kan kreve å se hvilke data som lagres
- *Sletting:* Du kan kreve at data slettes

**Personopplysninger:**
Alt som kan identifisere deg: navn, fødselsnummer, bilder, IP-adresse, lokasjon, osv.

**Sensitive personopplysninger:**
Helse, politisk syn, religion, seksuell legning - strengere regler.

**Utfordringer i dag:**
- Sosiale medier samler enorme mengder data
- Vanskelig å forstå hva man samtykker til
- Dataene kan selges videre
- Global infrastruktur, lokale lover`,
    },
    {
      id: 'medieinfo-1-9-def-3',
      type: 'definition',
      title: 'Opphavsrett',
      content: `**Hva er opphavsrett?**
Eneretten til å råde over eget åndsverk - f.eks. tekst, musikk, bilder, film.

**Hovedregler:**
- Opphavsretten oppstår automatisk ved skapelse
- Varer i 70 år etter opphavsmannens død
- Gir enerett til kopiering, fremføring, bearbeiding
- Andre må få tillatelse (lisens) for å bruke verket

**Digitale utfordringer:**
- Enkel å kopiere og dele
- Strømming vs. nedlasting
- Brukergenerert innhold (remikser, memer)
- Hvem eier innhold på sosiale medier?

**Sitatretten:**
Du kan sitere fra andre verk i samsvar med god skikk, til kritikk, undervisning eller debatt.

**Creative Commons:**
Fleksible lisenser der opphavspersoner gir tillatelse på forhånd. Ulike nivåer av frihet.

**Viktig å huske:**
- Bilder på nettet er ikke "gratis"
- Musikk i video krever tillatelse
- Alltid kreditere opphavspersonen`,
    },
    {
      id: 'medieinfo-1-9-def-4',
      type: 'definition',
      title: 'Etiske dilemmaer i mediene',
      content: `**Dilemma 1: Personvern vs. offentlig interesse**
- Når rettferdiggjør offentlig interesse inngrep i privatlivet?
- Politikere vs. privatpersoner
- "Kjendisstatus" - gir det mindre vern?

**Dilemma 2: Pressefrihet vs. nasjonale interesser**
- Publisere lekkasjer som kan skade rikets sikkerhet?
- WikiLeaks, Snowden-avsløringene
- Varslerens beskyttelse

**Dilemma 3: Hatytringer vs. ytringsfrihet**
- Hvor går grensen for hva som er lov?
- Plattformenes moderering - sensur eller ansvar?
- Ytre seg anonymt på nett

**Dilemma 4: Sannhet vs. skadevirkninger**
- Publisere informasjon som kan skade uskyldige?
- Identifisere mistenkte før dom
- Selvmord og smitteeffekt

**Dilemma 5: Kreativ frihet vs. opphavsrett**
- Remikser, parodier, memer
- Hvor mye kan man låne fra andre?
- AI-generert innhold`,
    },
    {
      id: 'medieinfo-1-9-example-1',
      type: 'example',
      title: 'Eksempel: Et etisk dilemma - publisering av bilder',
      problem: 'Hvordan vurderer man om et bilde kan publiseres?',
      solution: `**Situasjon:** En nyhetsredaksjon har et bilde av en ulykke der et offer er synlig.

**Vurderinger:**

**For publisering:**
- Dokumenterer en viktig hendelse
- Offentlig interesse i å vite hva som skjedde
- Bildet viser konsekvensene (kan virke preventivt)

**Mot publisering:**
- Offerets verdighet og respekt
- Pårørendes belastning
- Etiske retningslinjer i Vær Varsom-plakaten
- Sjokkvirkningsfare for lesere

**Sjekkliste:**
1. Er personens ansikt synlig? Kan man identifisere vedkommende?
2. Er bildet nødvendig for å fortelle historien?
3. Finnes alternativer som ivaretar personvernet?
4. Har pårørende gitt samtykke?
5. Er allmenn interesse stor nok til å rettferdiggjøre publisering?

**Vanlig løsning:**
- Sladde/anonymisere
- Bruke oversiktsbilde uten identifikasjon
- Vente med publisering til pårørende er varslet
- Vurdere om tekst kan erstatte bilde`,
    },
    {
      id: 'medieinfo-1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-9-ex-1',
        number: '9.1',
        type: 'multiple-choice',
        task: 'Hva innebærer opphavsrett?',
        options: [
          { id: 'a', text: 'Eneretten til å råde over eget åndsverk', isCorrect: true },
          { id: 'b', text: 'Retten til å kopiere andres verk fritt', isCorrect: false },
          { id: 'c', text: 'Plikten til å dele sine verk', isCorrect: false },
          { id: 'd', text: 'Retten til å oppheve andres rettigheter', isCorrect: false },
        ],
        hints: ['Tenk på eierskapet til det du skaper'],
        solution: 'Opphavsrett er eneretten til å råde over eget åndsverk, som tekst, musikk, bilder og film. Den oppstår automatisk ved skapelse og gir skaperen kontroll over kopiering og bruk av verket.',
      },
    },
    {
      id: 'medieinfo-1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-9-ex-2',
        number: '9.2',
        type: 'multiple-choice',
        task: 'Hva er GDPR?',
        options: [
          { id: 'a', text: 'EUs personvernforordning som beskytter personopplysninger', isCorrect: true },
          { id: 'b', text: 'En amerikansk lov om ytringsfrihet', isCorrect: false },
          { id: 'c', text: 'Et internasjonalt samarbeid om opphavsrett', isCorrect: false },
          { id: 'd', text: 'En bransjenorm for reklame', isCorrect: false },
        ],
        hints: ['Det handler om personvern i Europa'],
        solution: 'GDPR (General Data Protection Regulation) er EUs personvernforordning som gjelder i Norge fra 2018. Den styrker individets rettigheter over egne personopplysninger.',
      },
    },
    {
      id: 'medieinfo-1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-9-ex-3',
        number: '9.3',
        type: 'classic',
        task: 'Forklar hva ytringsfrihet innebærer og nevn tre begrensninger som finnes.',
        hints: ['Tenk på Grunnloven paragraf 100 og hva som er forbudt'],
        solution: 'Ytringsfrihet er retten til å ytre seg og motta informasjon, vernet av Grunnloven paragraf 100. Begrensninger: 1) Ærekrenkelser - usanne påstander som skader omdømmet. 2) Hatefulle ytringer - diskriminerende ytringer mot grupper. 3) Trusler - alvorlige trusler er straffbart. 4) Privatlivets fred - spre private opplysninger uten samtykke. 5) Taushetsplikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-9-ex-4',
        number: '9.4',
        type: 'classic',
        task: 'Drøft dilemmaet mellom personvern og offentlig interesse. Gi et eksempel på en situasjon der disse hensynene kommer i konflikt.',
        hints: ['Tenk på politikere, kjendiser, kriminalsaker'],
        solution: 'Personvern beskytter individets rett til privatliv, mens offentlig interesse kan rettferdiggjøre inngrep i denne retten. Eksempel: En politiker har en privat helseutfordring. Personvern tilsier at dette er privat. Men hvis det påvirker utøvelsen av vervet, kan offentligheten ha interesse av å vite. Balansen avgjøres av relevans for stillingen, alvorlighetsgrad, og om det påvirker offentlige beslutninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-9-ex-5',
        number: '9.5',
        type: 'classic',
        task: 'Forklar hva Creative Commons-lisenser er og hvorfor de kan være nyttige for medieproduksjon.',
        hints: ['Tenk på lovlig bruk av andres verk'],
        solution: 'Creative Commons er et system med fleksible lisenser der opphavspersoner gir forhåndstillatelse til visse typer bruk av verkene sine. Ulike nivåer: CC BY (navngivelse), CC BY-SA (del likt), CC BY-NC (ikke-kommersiell). Nyttig fordi: 1) Man vet på forhånd hva som er tillatt. 2) Enklere å finne lovlig materiale. 3) Fremmer deling og gjenbruk. 4) Man slipper å kontakte hver enkelt opphavsmann.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Kildekritikk og informasjonssøk
// ============================================================================

export const CHAPTER_MEDIEINFO_1_10: TextbookChapter = {
  id: 'medieinfo-1-10',
  courseId: 'medieinfo-1',
  chapterNumber: '10',
  title: 'Kildekritikk og informasjonssøk',
  description: 'Lær å vurdere kilder kritisk og finne pålitelig informasjon.',
  estimatedMinutes: 75,
  competenceGoals: [
    'anvende kildekritiske metoder',
    'vurdere troverdigheten til ulike kilder',
    'søke effektivt etter informasjon',
  ],
  content: [
    {
      id: 'medieinfo-1-10-intro',
      type: 'text',
      content: `## Kildekritikk - viktigere enn noensinne

I en verden med uendelig tilgang til informasjon er evnen til å vurdere kilder kritisk helt avgjørende. Falske nyheter, propaganda og feilinformasjon spres raskt på nettet. Hvordan skiller vi det pålitelige fra det upålitelige?

**Hvorfor kildekritikk?**
- Unngå å tro på usannheter
- Unngå å spre feilinformasjon
- Ta informerte beslutninger
- Forstå verden bedre

**Kildekritikk er ikke mistro:**
Å være kildekritisk betyr ikke å mistro alt. Det handler om å vurdere informasjon systematisk før man aksepterer den som sann.`,
    },
    {
      id: 'medieinfo-1-10-def-1',
      type: 'definition',
      title: 'Grunnleggende kildekritikk',
      content: `**Kildetypene:**
- *Primærkilder:* Førstehåndsinformasjon (øyenvitner, originaldokumenter)
- *Sekundærkilder:* Andrehånds gjengivelse (artikler om hendelser)
- *Tertiærkilder:* Samlinger og oppslagsverk (Wikipedia, leksikon)

**De klassiske spørsmålene:**
1. **Hvem?** Hvem står bak informasjonen?
2. **Hva?** Hva slags kilde er dette?
3. **Når?** Når ble informasjonen produsert?
4. **Hvor?** Hvor kommer informasjonen fra?
5. **Hvorfor?** Hva kan være formålet?

**TONE-kriteriene:**
- **T**rolig - Rolig og saklig tone?
- **O**riginal - Er dette originalkilden?
- **N**øyaktig - Stemmer detaljene?
- **E**kspert - Har avsenderen kompetanse?`,
    },
    {
      id: 'medieinfo-1-10-def-2',
      type: 'definition',
      title: 'Vurdering av nettkilder',
      content: `**Sjekk avsenderen:**
- Hvem står bak nettsiden?
- Er det en kjent aktør (mediehus, institusjon)?
- Finnes kontaktinformasjon?
- Hva er formålet med siden?

**Sjekk innholdet:**
- Er påstander dokumentert med kilder?
- Skilles det mellom fakta og mening?
- Er teksten godt skrevet og uten feil?
- Stemmer informasjonen med andre kilder?

**Sjekk aktualitet:**
- Når er siden oppdatert?
- Er informasjonen fortsatt relevant?
- Virker lenkene?

**Røde flagg:**
- Sensasjonelle overskrifter
- Ingen forfatter oppgitt
- Manglende kilder
- Mange skrivefeil
- Ekstreme påstander
- Sterk følelsesmessig appell
- Oppfordring til å dele raskt`,
    },
    {
      id: 'medieinfo-1-10-def-3',
      type: 'definition',
      title: 'Falske nyheter og desinformasjon',
      content: `**Begrepsavklaring:**
- *Misinformasjon:* Feil informasjon spredt uten ond hensikt
- *Desinformasjon:* Bevisst falsk informasjon spredt for å villede
- *Falske nyheter:* Usanne historier presentert som nyheter

**Typer falske nyheter:**
- Fullstendig oppspinn
- Manipulerte bilder/video (deepfakes)
- Virkelig innhold tatt ut av kontekst
- Overdrivelse og forenkling
- Satire misforstått som fakta

**Hvorfor tror folk på falske nyheter?**
- Bekreftelsesbias: Vi tror det som bekrefter våre syn
- Tillit til avsender/deler
- Følelsesmessig aktivering
- Informasjonsoverflod - vi orker ikke sjekke alt
- Gjentakelseseffekten: Jo oftere vi hører noe, jo mer troverdig virker det

**Konsekvenser:**
- Påvirker valg og demokrati
- Skaper frykt og hat
- Undergraver tillit til institusjoner
- Vanskeliggjør offentlig debatt`,
    },
    {
      id: 'medieinfo-1-10-def-4',
      type: 'definition',
      title: 'Effektivt informasjonssøk',
      content: `**Søketeknikker:**
- *Bruk presise søkeord:* "klimaendringer Norge 2024" bedre enn "klima"
- *Anførselstegn:* "eksakt frase" søker etter ordene sammen
- *Minus:* jaguar -bil utelukker biler
- *Nettsted:* site:aftenposten.no søker bare på Aftenposten
- *Filtype:* filetype:pdf finner PDF-dokumenter

**Vurder søkeresultatene:**
- Ikke bare klikk på første treff
- Se på URL-en - er det en pålitelig kilde?
- Les utdraget før du klikker
- Sammenlign flere kilder

**Gode kilder for faktasjekk:**
- Store, etablerte nyhetsbyrå (NTB, Reuters, AP)
- Faktasjekk-tjenester (Faktisk.no)
- Akademiske kilder (forskning, universiteter)
- Offentlige institusjoner

**Bilder og video:**
- Omvendt bildesøk i Google
- Sjekk når bildet først dukket opp
- Vær skeptisk til viralt innhold
- Deepfakes blir stadig bedre - vær kritisk`,
    },
    {
      id: 'medieinfo-1-10-tip-1',
      type: 'tip',
      title: 'Praktisk sjekkliste for kildekritikk',
      content: `**SIFT-metoden (rask faktasjekk):**
- **S**top: Stopp opp før du deler
- **I**nvestigate the source: Hvem står bak?
- **F**ind better coverage: Finn andre kilder
- **T**race claims: Spor påstander til opprinnelsen

**Ved usikkerhet:**
1. Google påstanden + "faktasjekk" eller "debunked"
2. Sjekk Faktisk.no eller Snopes.com
3. Søk etter originalkilden
4. Vent - de beste avsløringene kommer ofte raskt
5. Ikke del før du vet!`,
    },
    {
      id: 'medieinfo-1-10-example-1',
      type: 'example',
      title: 'Eksempel: Faktasjekk av en påstand',
      problem: 'Hvordan faktasjekker vi en påstand vi ser i sosiale medier?',
      solution: `**Situasjon:** Du ser et innlegg: "Studie viser at kaffe kurerer kreft!"

**Steg 1: Stop**
Ikke del med en gang. Virker det for godt til å være sant?

**Steg 2: Investigate the source**
- Hvem har lagt ut innlegget?
- Er det en kjent helseinstitusjon eller tilfeldig konto?
- Lenker de til studien?

**Steg 3: Find better coverage**
- Google "kaffe kreft studie"
- Sjekk hva etablerte medier skriver
- Se etter vitenskapelige tidsskrifter

**Steg 4: Trace claims**
- Finn originalstudien
- Hva sier den egentlig?
- Er det korrelasjon eller kausalitet?
- Hvor mange deltakere?

**Funn:**
Ofte viser det seg at:
- Studien var på mus, ikke mennesker
- Den fant bare korrelasjon, ikke årsakssammenheng
- Overskriften overdriver kraftig
- "Kan ha positiv effekt" blir til "kurerer"

**Konklusjon:**
Påstanden er sterkt overdrevet. Del ikke videre.`,
    },
    {
      id: 'medieinfo-1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-10-ex-1',
        number: '10.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom misinformasjon og desinformasjon?',
        options: [
          { id: 'a', text: 'Misinformasjon er utilsiktet feil, desinformasjon er bevisst løgn', isCorrect: true },
          { id: 'b', text: 'Misinformasjon kommer fra medier, desinformasjon fra myndigheter', isCorrect: false },
          { id: 'c', text: 'Misinformasjon er mindre alvorlig enn desinformasjon', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
        ],
        hints: ['Tenk på intensjonen bak spredningen'],
        solution: 'Misinformasjon er feil informasjon som spres uten ond hensikt - avsenderen tror selv det er sant. Desinformasjon er bevisst falsk informasjon spredt for å villede.',
      },
    },
    {
      id: 'medieinfo-1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-10-ex-2',
        number: '10.2',
        type: 'multiple-choice',
        task: 'Hva står SIFT for i kildekritikk?',
        options: [
          { id: 'a', text: 'Stop, Investigate the source, Find better coverage, Trace claims', isCorrect: true },
          { id: 'b', text: 'Search, Identify, Filter, Test', isCorrect: false },
          { id: 'c', text: 'Source, Information, Facts, Truth', isCorrect: false },
          { id: 'd', text: 'Study, Interview, Follow, Track', isCorrect: false },
        ],
        hints: ['Det er en metode for rask faktasjekk'],
        solution: 'SIFT står for Stop (stopp opp før du deler), Investigate the source (undersøk kilden), Find better coverage (finn andre kilder), Trace claims (spor påstander til opprinnelsen).',
      },
    },
    {
      id: 'medieinfo-1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-10-ex-3',
        number: '10.3',
        type: 'classic',
        task: 'Forklar hva bekreftelsesbias er og hvordan det påvirker vår evne til kildekritikk.',
        hints: ['Tenk på hvordan vi vurderer informasjon som passer våre eksisterende syn'],
        solution: 'Bekreftelsesbias er tendensen til å søke etter, tolke og huske informasjon som bekrefter våre eksisterende oppfatninger, og ignorere eller avvise informasjon som motsier dem. Dette påvirker kildekritikk ved at: 1) Vi aksepterer informasjon ukritisk hvis vi er enige. 2) Vi er ekstra kritiske til det som utfordrer oss. 3) Vi velger kilder som støtter vårt syn. 4) Vi kan ende i ekkokamre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-10-ex-4',
        number: '10.4',
        type: 'classic',
        task: 'Nevn fem "røde flagg" som kan indikere at en nettkilde er upålitelig.',
        hints: ['Tenk på overskrifter, forfatter, kilder, språk, appell'],
        solution: '1) Sensasjonelle overskrifter - overdrevne, følelsesladede. 2) Ingen forfatter eller kontaktinfo oppgitt. 3) Manglende kilder - påstander uten dokumentasjon. 4) Mange skrivefeil og uprofesjonelt utseende. 5) Ekstreme påstander som "alle leger tier". 6) Sterk følelsesmessig appell - frykt, sinne. 7) Oppfordring til å dele raskt. 8) Informasjon som bare finnes på denne ene siden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-1-10-ex-5',
        number: '10.5',
        type: 'classic',
        task: 'Praktisk oppgave: Finn tre kilder om et selvvalgt tema - en pålitelig, en tvilsom og en useriøs. Forklar hvordan du vurderte hver kilde.',
        hints: ['Bruk kildekritiske kriterier systematisk'],
        solution: 'Vurderingskriterier for besvarelsen: 1) Tre ulike kilder er funnet. 2) Systematisk vurdering med kildekritiske kriterier. 3) For den pålitelige: Identifiser hva som gjør den troverdig (kjent avsender, dokumentasjon, balanse). 4) For den tvilsomme: Påpek svakheter (manglende kilder, uklar avsender). 5) For den useriøse: Identifiser røde flagg. 6) Konkret begrunnelse for klassifiseringen.',
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

export const MEDIEINFO_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MEDIEINFO_1_1,
  CHAPTER_MEDIEINFO_1_2,
  CHAPTER_MEDIEINFO_1_3,
  CHAPTER_MEDIEINFO_1_4,
  CHAPTER_MEDIEINFO_1_5,
  CHAPTER_MEDIEINFO_1_6,
  CHAPTER_MEDIEINFO_1_7,
  CHAPTER_MEDIEINFO_1_8,
  CHAPTER_MEDIEINFO_1_9,
  CHAPTER_MEDIEINFO_1_10,
];
