/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 2 (VG3) - Del 5: Globale medier og informasjonsflyt
 *
 * Kapittel 5.1–5.5: Det globale medielandskapet, medieimperialisme og kulturell globalisering,
 * medier i ulike politiske systemer, desinformasjon og informasjonskrig, digital kløft og medietilgang.
 *
 * LK20-kompetansemål:
 * - drøfte korleis globalisering påverkar medielandskapet og informasjonsflyten
 * - analysere korleis medier fungerer i ulike politiske system
 * - vurdere korleis desinformasjon og propaganda blir brukt som verkemiddel
 * - drøfte digitale skiljelinjer og ulik tilgang til informasjon globalt
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Det globale medielandskapet
// ============================================================================

export const CHAPTER_MEDIEINFO_2_5_1: TextbookChapter = {
  id: 'medieinfo-2-5-1',
  courseId: 'medieinfo-2',
  chapterNumber: '5.1',
  title: 'Det globale medielandskapet',
  description: 'En innføring i internasjonale medieaktører, nyhetsbyråer og den globale informasjonsflyten. Du lærer hvordan medier opererer på tvers av landegrenser og hvem som kontrollerer den internasjonale nyhetsstrømmen.',
  estimatedMinutes: 20,
  competenceGoals: ['drøfte korleis globalisering påverkar medielandskapet og informasjonsflyten'],
  content: [
    {
      id: 'mi2-5-1-intro',
      type: 'text',
      content: `## Et globalt medielandskap i endring

Nyheter reiser raskere enn noensinne. Når noe skjer et sted i verden, kan milliarder av mennesker få vite om det i løpet av sekunder. Men hvem bestemmer hvilke nyheter som når oss? Hvilke stemmer dominerer den globale informasjonsstrømmen, og hvem blir utelatt?

I dette kapittelet skal du lære:
- Hva det globale medielandskapet består av
- Hvilken rolle internasjonale nyhetsbyråer spiller
- Hvordan store mediekonglomerater påvirker informasjonsflyten
- Konsekvenser av at mediene er konsentrert på få hender`,
    },
    {
      id: 'mi2-5-1-def-1',
      type: 'definition',
      title: 'Det globale medielandskapet',
      content: `**Det globale medielandskapet** refererer til summen av alle medieaktører, plattformer, kanaler og informasjonsstrømmer som opererer på tvers av landegrenser. Det omfatter internasjonale nyhetsbyråer, globale TV-kanaler, sosiale medieplattformer, strømmetjenester og digitale nyhetsmedier som til sammen former hvordan verdens befolkning mottar informasjon og underholdning.`,
    },
    {
      id: 'mi2-5-1-text-1',
      type: 'text',
      content: `### Internasjonale nyhetsbyråer

Nyhetsbyråer er organisasjoner som samler inn nyheter og selger dem videre til medier over hele verden. De er grunnpilarer i den globale informasjonsstrømmen og avgjør i stor grad hvilke hendelser som blir til nyheter.

**De tre store nyhetsbyråene:**

**Associated Press (AP)** – grunnlagt i USA i 1846
- Verdens største nyhetsbyrå med journalister i over 250 lokasjoner
- Samvirkeforetak eid av amerikanske medier
- Leverer tekst, bilder og video til tusenvis av medier globalt

**Reuters (Thomson Reuters)** – grunnlagt i Storbritannia i 1851
- Spesielt sterke på finans- og økonominyheter
- Eid av det kanadiske konsernet Thomson Reuters
- Tilbyr også datatjenester til finansbransjen

**Agence France-Presse (AFP)** – grunnlagt i Frankrike i 1835
- Verdens eldste nyhetsbyrå
- Delvis statlig finansiert, men redaksjonelt uavhengig
- Sterk dekning av franskspråklige land og Europa

Disse tre byråene dominerer den internasjonale nyhetsstrømmen. Det innebærer at perspektivet og utvalget av nyheter i stor grad formes av vestlige organisasjoner.`,
    },
    {
      id: 'mi2-5-1-example-1',
      type: 'example',
      title: 'Fra nyhetsbyrå til lokalavis',
      problem: 'Hvordan når en nyhet fra et nyhetsbyrå frem til en leser i Norge?',
      solution: `**Nyhetens reise:**

1. **Hendelse:** En jordskjelv rammer Tyrkia.
2. **Byråjournalist:** En Reuters-korrespondent i Istanbul rapporterer fra stedet og sender tekst, bilder og video til Reuters' sentralredaksjon.
3. **Redaksjon og distribusjon:** Reuters redigerer og kvalitetssikrer materialet, merker det med prioritet og sender det ut via sin nyhetstjeneste.
4. **Norsk redaksjon:** NTB (Norges nyhetsbyrå) mottar materialet fra Reuters og oversetter/tilpasser det for norske medier.
5. **Publisering:** VG, NRK, Dagbladet og lokalaviser mottar NTB-meldingen og publiserer den – ofte med identisk tekst, supplert med egne kommentarer eller ekspertvurderinger.

**Poenget:** En enkelt byråjournalists vinkling kan forme hvordan millioner av mennesker oppfatter en hendelse. De færreste norske medier har egne korrespondenter i Tyrkia, og er derfor avhengige av nyhetsbyrået.`,
    },
    {
      id: 'mi2-5-1-def-2',
      type: 'definition',
      title: 'Mediekonglomerat',
      content: `Et **mediekonglomerat** er et stort selskap som eier og kontrollerer en rekke ulike medieselskaper på tvers av bransjer og landegrenser. Konglomerater kan eie TV-kanaler, filmstudioer, forlag, aviser, strømmetjenester og digitale plattformer samtidig. Eksempler er Disney, Comcast, Warner Bros. Discovery og News Corp. Mediekonsentrasjon reiser spørsmål om mangfold og uavhengighet i informasjonsstrømmen.`,
    },
    {
      id: 'mi2-5-1-text-2',
      type: 'text',
      content: `### Mediekonsentrasjon – makt i få hender

Et lite antall selskaper kontrollerer store deler av verdens medieinnhold:

**Globale mediekjemper:**
- **Alphabet (Google):** YouTube, Google Nyheter, verdens største søkemotor
- **Meta:** Facebook, Instagram, WhatsApp, Threads
- **Disney:** ABC, ESPN, Hulu, Disney+, Marvel, Pixar, 20th Century Studios
- **Comcast (NBCUniversal):** NBC, Universal Pictures, Sky, Peacock
- **News Corp/Fox:** Fox News, Wall Street Journal, HarperCollins, Sky News Australia

**Konsekvenser av konsentrasjon:**
- Færre uavhengige stemmer i medielandskapet
- Kommersielle interesser kan påvirke redaksjonelle valg
- Ensretting av innhold og perspektiver
- Vanskelig for mindre medier å konkurrere
- Plattformmakt: Google og Meta kontrollerer størstedelen av digitale annonseinntekter

**Motargumenter:**
- Internett har gjort det lettere enn noensinne å starte egne medier
- Bloggere, podkastere og uavhengige journalister utfordrer de store aktørene
- Regulering og konkurransetilsyn kan begrense konsentrasjon`,
    },
    {
      id: 'mi2-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse er IKKE et av de tre store internasjonale nyhetsbyråene?',
        options: [
          { id: 'a', text: 'Associated Press (AP)', isCorrect: false },
          { id: 'b', text: 'Reuters', isCorrect: false },
          { id: 'c', text: 'BBC World Service', isCorrect: true },
          { id: 'd', text: 'Agence France-Presse (AFP)', isCorrect: false },
        ],
        solution: 'BBC World Service er en internasjonal kringkaster, ikke et nyhetsbyrå. De tre store nyhetsbyråene er AP (USA), Reuters (Storbritannia) og AFP (Frankrike). Nyhetsbyråer selger nyheter til andre medier, mens BBC produserer og publiserer egne sendinger.',
      },
    },
    {
      id: 'mi2-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva et mediekonglomerat er, og gi to eksempler på hvordan konsentrasjon av medieeierskap kan påvirke innholdet vi mottar.',
        hints: ['Tenk på mangfold, kommersielle interesser og redaksjonell uavhengighet'],
        solution: 'Et mediekonglomerat er et stort selskap som eier mange ulike medieselskaper på tvers av bransjer og land. Eksempler på påvirkning: 1) Kommersiell prioritering – et konglomerat kan velge å nedprioritere kritisk journalistikk om egne annonsører eller samarbeidspartnere for å beskytte inntektsgrunnlaget. 2) Ensretting av perspektiver – når ett selskap eier mange medier, kan de samme vinklingene, verdiene og prioriteringene prege innholdet i alle kanalene, slik at publikum får mindre mangfold i informasjonen de mottar.',
      },
    },
    {
      id: 'mi2-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-1-ex-3',
        number: '5.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er det problematisk at de store nyhetsbyråene er vestlige?',
        options: [
          { id: 'a', text: 'Fordi de ikke bruker moderne teknologi', isCorrect: false },
          { id: 'b', text: 'Fordi nyhetsutvalg og perspektiver kan bli preget av vestlig verdenssyn', isCorrect: true },
          { id: 'c', text: 'Fordi de bare rapporterer om vestlige land', isCorrect: false },
          { id: 'd', text: 'Fordi vestlige nyheter er mindre pålitelige enn andre', isCorrect: false },
        ],
        solution: 'Når de dominerende nyhetsbyråene er vestlige, vil nyhetsutvalget og perspektivene tendere til å gjenspeile et vestlig verdenssyn. Hendelser i vestlige land dekkes oftere og grundigere, mens nyheter fra det globale sør kan bli ignorert eller fremstilt fra et vestlig perspektiv. Det betyr ikke at de er upålitelige, men at informasjonsstrømmen er ubalansert.',
      },
    },
    {
      id: 'mi2-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv hvordan en nyhet reiser fra en hendelse et sted i verden til at du leser om den på en norsk nettavis. Hvilke ledd er involvert, og hvem gjør utvalg underveis?',
        hints: ['Tenk på nyhetsbyråer, NTB og norske redaksjoner'],
        solution: 'Reisen starter med at en byråjournalist (f.eks. fra Reuters) rapporterer fra stedet. Byrået redigerer og prioriterer saken, og sender den ut til sine abonnenter. NTB (Norges nyhetsbyrå) mottar saken, oversetter og tilpasser den for norske medier. Den norske redaksjonen (f.eks. NRK eller VG) velger om saken er relevant for norske lesere, og publiserer den eventuelt med egen vinkling. I hvert ledd gjøres det utvalg: Byråjournalisten velger vinkel, byrået velger prioritet, NTB velger hva som oversettes, og den norske redaksjonen velger hva som publiseres. Leseren ser bare sluttresultatet.',
      },
    },
    {
      id: 'mi2-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Sosiale medier har demokratisert den globale informasjonsflyten og gjort nyhetsbyråene overflødige.» Presenter argumenter for og mot.',
        hints: ['Tenk på tilgang, kvalitetssikring og algoritmestyring'],
        solution: 'For: Sosiale medier gjør det mulig for hvem som helst å dele informasjon med hele verden uten å gå gjennom tradisjonelle portvoktere. Øyenvitner kan rapportere direkte fra hendelser, og marginaliserte stemmer kan nå et publikum de aldri hadde hatt tilgang til gjennom tradisjonelle medier. Mot: Nyhetsbyråene er langt fra overflødige fordi de tilbyr kvalitetssikret, faktasjekket journalistikk med klare etiske standarder. Sosiale medier er fulle av feilinformasjon, og algoritmene styrer hva vi ser basert på engasjement, ikke relevans. Dessuten eies plattformene av store selskaper som utgjør nye portvoktere. Konklusjon: Sosiale medier har supplert, men ikke erstattet nyhetsbyråene.',
      },
    },
    {
      id: 'mi2-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-1-ex-6',
        number: '5.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg et globalt mediekonglomerat (f.eks. Disney, Comcast eller Alphabet). Undersøk hvilke mediemerkevarer det eier, og diskuter hvilken makt konglomeratet har over informasjons- og underholdningstilbudet globalt.',
        solution: 'Eksempel med Disney: Disney eier filmstudioene Walt Disney Pictures, Pixar, Marvel Studios, Lucasfilm og 20th Century Studios, TV-kanalene ABC og ESPN, strømmetjenestene Disney+ og Hulu, samt en rekke fornøyelsesparker og merchandiserettigheter. Denne makten innebærer at Disney kontrollerer en betydelig andel av verdens underholdningsinnhold, fra barnefilmer til superhelter til sport. De påvirker hvilke historier som blir fortalt, hvilke verdier som formidles, og kan forme kulturen til milliarder av mennesker. Samtidig kan et slikt konglomerat bruke sin markedsmakt til å begrense konkurransen og favorisere egne produkter.',
      },
    },
    {
      id: 'mi2-5-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Det globale medielandskapet** består av internasjonale nyhetsbyråer, mediekonglomerater, sosiale plattformer og digitale nyhetsmedier
- De tre store nyhetsbyråene **AP, Reuters og AFP** dominerer den internasjonale nyhetsstrømmen
- **Mediekonglomerater** som Disney, Alphabet og Meta kontrollerer store deler av verdens medieinnhold
- **Mediekonsentrasjon** kan føre til mindre mangfold og ensretting av perspektiver

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Nyhetsbyrå | Organisasjon som samler inn nyheter og selger dem til medier |
| Mediekonglomerat | Stort selskap som eier mange medieselskaper på tvers av bransjer |
| Mediekonsentrasjon | At få aktører kontrollerer store deler av mediemarkedet |
| Informasjonsflyt | Hvordan nyheter og informasjon beveger seg gjennom ulike kanaler |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Det globale medielandskapet', definition: 'Summen av alle medieaktører, plattformer og informasjonsstrømmer som opererer på tvers av landegrenser' },
    { term: 'Nyhetsbyrå', definition: 'Organisasjon som samler inn nyheter og selger dem videre til medier over hele verden' },
    { term: 'Mediekonglomerat', definition: 'Stort selskap som eier og kontrollerer mange ulike medieselskaper på tvers av bransjer og land' },
    { term: 'Mediekonsentrasjon', definition: 'At et lite antall selskaper kontrollerer store deler av mediemarkedet' },
    { term: 'NTB', definition: 'Norsk Telegrambyrå – Norges nasjonale nyhetsbyrå som formidler nyheter til norske medier' },
  ],
};

// ============================================================================
// Kapittel 5.2: Medieimperialisme og kulturell globalisering
// ============================================================================

export const CHAPTER_MEDIEINFO_2_5_2: TextbookChapter = {
  id: 'medieinfo-2-5-2',
  courseId: 'medieinfo-2',
  chapterNumber: '5.2',
  title: 'Medieimperialisme og kulturell globalisering',
  description: 'En gjennomgang av vestlig dominans i globale medier, kulturimperialisme-debatten og lokale motkrefter. Du lærer hvordan globalisering påvirker kulturelt mangfold og identitet gjennom mediene.',
  estimatedMinutes: 20,
  competenceGoals: ['drøfte korleis globalisering påverkar medielandskapet og informasjonsflyten'],
  content: [
    {
      id: 'mi2-5-2-intro',
      type: 'text',
      content: `## Hvem former verdens kultur?

Hollywood-filmer, amerikanske TV-serier, engelskspråklig musikk og vestlige sosiale medier dominerer kulturlivet i store deler av verden. Er dette et naturlig resultat av globalisering, eller er det en form for kulturell dominans? Og hva skjer med lokale kulturer når vestlig medieinnhold flommer inn?

I dette kapittelet skal du lære:
- Hva medieimperialisme betyr og hvordan teorien har utviklet seg
- Hvordan vestlige medier dominerer den globale informasjonsflyten
- Hva kulturell globalisering innebærer for lokale kulturer
- Eksempler på motstand og lokale alternativer til vestlig mediedominans`,
    },
    {
      id: 'mi2-5-2-def-1',
      type: 'definition',
      title: 'Medieimperialisme',
      content: `**Medieimperialisme** er en teori som hevder at vestlige land – særlig USA – dominerer den globale informasjonsstrømmen og bruker mediene til å spre sine verdier, sin kultur og sine kommersielle interesser til resten av verden. Teorien ble først formulert av forskere som Herbert Schiller på 1970-tallet og er knyttet til bredere kritikk av ulik maktfordeling mellom rike og fattige land.`,
    },
    {
      id: 'mi2-5-2-text-1',
      type: 'text',
      content: `### Vestlig dominans i mediene

Den globale informasjonsstrømmen er dypt ubalansert:

**Nyheter:**
- De tre store nyhetsbyråene (AP, Reuters, AFP) er alle vestlige
- Internasjonale nyhetskanalers dekning av det globale sør er begrenset og ofte krisefokusert
- Lokale stemmer og perspektiver fra utviklingsland når sjelden et globalt publikum

**Underholdning:**
- Hollywood produserer flertallet av verdens mest sette filmer
- Amerikanske TV-serier og strømmetjenester dominerer globalt
- Engelskspråklig musikk dominerer internasjonale hitlister

**Digitale plattformer:**
- Sosiale medier (Meta, Google, TikTok) er eid av vestlige eller kinesiske selskaper
- Plattformenes algoritmer og retningslinjer utformes i Silicon Valley eller Beijing
- Lokale digitale alternativer sliter med å konkurrere

**Enveiskommunikasjon:**
Historisk har informasjonsflyten i stor grad gått én vei: fra vestlige land til resten av verden. Utviklingsland har vært mottakere av medieinnhold, ikke produsenter. Denne ubalansen kalles ofte «en-vei-strømmen» av medieinnhold.`,
    },
    {
      id: 'mi2-5-2-example-1',
      type: 'example',
      title: 'Kulturell globalisering: Bollywood vs. Hollywood',
      problem: 'Er Hollywood den eneste kraften i global kulturproduksjon?',
      solution: `**Nei – det finnes viktige moteksempler:**

**Bollywood (India):**
- Produserer over 1 500 filmer årlig – langt flere enn Hollywood
- Dominerer i Sør-Asia, deler av Afrika og Midtøsten
- Har sin egen estetikk med sang, dans og melodrama
- Bevis på at lokale industrier kan konkurrere med vestlig dominans

**K-pop og koreansk kultur (Sør-Korea):**
- K-pop-grupper som BTS og Blackpink har et globalt publikum
- Koreanske TV-serier (K-drama) er blant verdens mest strømmede
- «Squid Game» ble Netflixs mest sette serie noensinne
- Den koreanske bølgen (hallyu) viser at kulturell innflytelse kan gå «den andre veien»

**Nollywood (Nigeria):**
- Verdens nest største filmindustri etter Bollywood i antall filmer
- Dominerer underholdningsmarkedet i Vest-Afrika
- Stadig mer synlig internasjonalt gjennom strømmetjenester

**Konklusjon:** Den globale medieflyten er ikke rent enveis, men vestlige selskaper kontrollerer fortsatt de viktigste distribusjonsplattformene. Bollywood når verden, men ofte gjennom Netflix og YouTube – som er vestlig-eide.`,
    },
    {
      id: 'mi2-5-2-def-2',
      type: 'definition',
      title: 'Kulturell globalisering',
      content: `**Kulturell globalisering** refererer til prosessen der kulturelle uttrykk, verdier, ideer og praksiser sprer seg på tvers av landegrenser, ofte drevet av medier, migrasjon og handel. Resultatet kan være både kulturell utveksling og berikelse på den ene siden, og kulturell ensretting og tap av lokal identitet på den andre. Begrepet er omdiskutert: noen ser det som positiv hybridisering, andre som kulturelt tap.`,
    },
    {
      id: 'mi2-5-2-text-2',
      type: 'text',
      content: `### Kulturell motstand og hybridisering

Reaksjonene på vestlig mediedominans er sammensatte:

**Proteksjonisme:**
- Mange land har kvoter for nasjonalt innhold i TV og radio
- Frankrike krever at minst 40 % av musikk på radio er franskspråklig
- EU har regler om at strømmetjenester skal tilby minst 30 % europeisk innhold
- Kina har strengt kontrollert tilgang til vestlige medier og plattformer

**Hybridisering:**
- Lokale kulturer tilpasser og blander vestlig innhold med egne tradisjoner
- McDonald's i India serverer paneer-burgere – et eksempel på «glokalisering»
- Lokale artister kombinerer vestlige musikksjangre med tradisjonelle elementer
- Resultatet er ofte noe nytt som verken er helt lokalt eller helt vestlig

**Ny informasjonsorden:**
- Allerede på 1970-tallet krevde utviklingsland en «New World Information and Communication Order» (NWICO) gjennom UNESCO
- Kravet var en mer balansert informasjonsflyt der utviklingsland også ble produsenter
- Debatten er fortsatt aktuell, men har endret karakter i den digitale tidsalderen

Spørsmålet er ikke om globalisering er bra eller dårlig, men hvem som har makt til å definere hva som er verdifullt og verdig oppmerksomhet.`,
    },
    {
      id: 'mi2-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva beskriver begrepet medieimperialisme?',
        options: [
          { id: 'a', text: 'At alle land produserer like mye medieinnhold', isCorrect: false },
          { id: 'b', text: 'At vestlige land dominerer den globale informasjonsstrømmen med sine verdier og interesser', isCorrect: true },
          { id: 'c', text: 'At utviklingsland kontrollerer de største medieselskapene', isCorrect: false },
          { id: 'd', text: 'At medier bare er tilgjengelig i land med imperiehistorie', isCorrect: false },
        ],
        solution: 'Medieimperialisme beskriver at vestlige land – særlig USA – dominerer den globale informasjonsstrømmen og sprer sine verdier, sin kultur og sine kommersielle interesser gjennom mediene. Teorien ble utviklet på 1970-tallet av blant andre Herbert Schiller.',
      },
    },
    {
      id: 'mi2-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med at den globale informasjonsstrømmen historisk har vært en «enveiskommunikasjon». Gi to konkrete eksempler.',
        hints: ['Tenk på retningen nyheter og underholdning har reist mellom rike og fattige land'],
        solution: 'Enveiskommunikasjon betyr at medieinnhold i stor grad har strømmet fra vestlige land til resten av verden, uten en tilsvarende strøm den andre veien. Eksempel 1: Hollywood-filmer vises i kinoer over hele verden, men filmer fra afrikanske eller asiatiske land når sjelden vestlige kinosaler. Eksempel 2: Internasjonale nyheter formidles hovedsakelig av vestlige byråer (AP, Reuters, AFP), som betyr at hendelser i utviklingsland dekkes fra et vestlig perspektiv – mens lokale medier i disse landene sjelden når et globalt publikum.',
      },
    },
    {
      id: 'mi2-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er «glokalisering»? Gi et eksempel på hvordan globalt medieinnhold tilpasses lokale kulturer.',
        hints: ['Tenk på kombinasjonen av globalt og lokalt'],
        solution: 'Glokalisering er en kombinasjon av globalisering og lokalisering – det beskriver prosessen der globale produkter, tjenester eller kulturuttrykk tilpasses lokale forhold og tradisjoner. Eksempel: Netflix produserer lokalt innhold i mange land, som den norske serien «Ragnarok» eller den koreanske «Squid Game». Innholdet bygger på lokale historier og kulturelle referanser, men distribueres globalt gjennom en amerikansk plattform. Et annet eksempel er lokale artister som rapper på eget språk over beats inspirert av amerikansk hip hop.',
      },
    },
    {
      id: 'mi2-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-2-ex-4',
        number: '5.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken filmindustri produserer flest filmer i året?',
        options: [
          { id: 'a', text: 'Hollywood (USA)', isCorrect: false },
          { id: 'b', text: 'Bollywood (India)', isCorrect: true },
          { id: 'c', text: 'Nollywood (Nigeria)', isCorrect: false },
          { id: 'd', text: 'Den kinesiske filmindustrien', isCorrect: false },
        ],
        solution: 'Bollywood (India) produserer over 1 500 filmer årlig og er verdens mest produktive filmindustri i antall filmer. Nollywood (Nigeria) kommer på andreplass. Hollywood produserer færre filmer, men dominerer i inntekter og global distribusjon.',
      },
    },
    {
      id: 'mi2-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om kulturell globalisering er en trussel mot eller en berikelse for lokale kulturer. Bruk eksempler fra medieverdenen i argumentasjonen din.',
        hints: ['Tenk på ensretting vs. hybridisering, og på hvem som tjener på globaliseringen'],
        solution: 'Trussel: Lokale språk, fortellinger og kulturuttrykk kan marginaliseres når vestlig innhold dominerer. Unge i mange land konsumerer mer engelsk innhold enn lokalt, og lokale medieindustrier sliter med å konkurrere med de store selskapenes budsjetter. Berikelse: Kulturell globalisering gir mennesker tilgang til et mangfold av kulturuttrykk fra hele verden. K-pop, Bollywood og afrikansk musikk når nye publikum. Hybridisering skaper nye uttrykk som kombinerer det beste fra ulike tradisjoner. Nyansert vurdering: Resultatet avhenger av maktforhold – er det en likeverdig utveksling, eller dominerer vestlige aktører? Lokalt innhold kan blomstre hvis det finnes infrastruktur og politisk vilje til å beskytte det.',
      },
    },
    {
      id: 'mi2-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-2-ex-6',
        number: '5.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Undersøk og beskriv et eksempel på kulturell proteksjonisme i mediepolitikken (f.eks. Frankrikes musikkvoter eller Kinas internettregulering). Diskuter fordeler og ulemper ved slik proteksjonisme.',
        solution: 'Eksempel: Frankrikes kvoter for franskspråklig musikk på radio (minst 40 %). Fordeler: Beskytter det franske språket og lokale artister mot å bli fortrengt av engelskspråklig musikk, sikrer at franske artister får sendetid og eksponering, bevarer kulturelt mangfold og nasjonal identitet. Ulemper: Begrenser lytternes valgfrihet, kan føre til at dårligere kvalitets lokalt innhold sendes fremfor bedre internasjonalt innhold, er vanskelig å håndheve i en strømmeverden der lytterne kan velge fritt på Spotify og YouTube, og kan virke proteksjonistisk og isolerende.',
      },
    },
    {
      id: 'mi2-5-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Medieimperialisme** er teorien om at vestlige land dominerer den globale informasjonsstrømmen
- Den globale medieflyten har historisk vært en **enveiskommunikasjon** fra vest til resten
- **Kulturell globalisering** kan både true lokale kulturer og skape nye hybridformer
- Eksempler som **Bollywood, K-pop og Nollywood** viser at motstrømmer finnes

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Medieimperialisme | Vestlig dominans over den globale informasjonsstrømmen |
| Kulturell globalisering | Spredning av kulturuttrykk på tvers av landegrenser |
| Glokalisering | Tilpasning av globalt innhold til lokale forhold |
| NWICO | New World Information and Communication Order – krav om balansert informasjonsflyt |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Medieimperialisme', definition: 'Teori om at vestlige land dominerer den globale informasjonsstrømmen med sine verdier og kommersielle interesser' },
    { term: 'Kulturell globalisering', definition: 'Prosessen der kulturelle uttrykk sprer seg på tvers av landegrenser, drevet av medier og handel' },
    { term: 'Glokalisering', definition: 'Tilpasning av globale produkter og kulturuttrykk til lokale forhold og tradisjoner' },
    { term: 'Hybridisering', definition: 'At lokale og globale kulturuttrykk blandes og skaper noe nytt' },
    { term: 'NWICO', definition: 'New World Information and Communication Order – UNESCO-initiativ for mer balansert global informasjonsflyt' },
  ],
};

// ============================================================================
// Kapittel 5.3: Medier i ulike politiske systemer
// ============================================================================

export const CHAPTER_MEDIEINFO_2_5_3: TextbookChapter = {
  id: 'medieinfo-2-5-3',
  courseId: 'medieinfo-2',
  chapterNumber: '5.3',
  title: 'Medier i ulike politiske systemer',
  description: 'En gjennomgang av forholdet mellom medier og politiske systemer, pressefrihet, statskontroll og sensur. Du lærer hvordan medienes rolle varierer dramatisk avhengig av det politiske systemet de opererer i.',
  estimatedMinutes: 20,
  competenceGoals: ['analysere korleis medier fungerer i ulike politiske system'],
  content: [
    {
      id: 'mi2-5-3-intro',
      type: 'text',
      content: `## Medienes rolle avhenger av politisk system

I Norge tar vi pressefrihet for gitt. Journalister kan kritisere regjeringen, grave frem skandaler og holde makthavere ansvarlige. Men slik er det langt fra overalt. I mange land risikerer journalister fengsling, tortur og død for å gjøre jobben sin. Medienes rolle avhenger i stor grad av det politiske systemet de opererer i.

I dette kapittelet skal du lære:
- Hvordan medier fungerer i demokratiske, autoritære og totalitære systemer
- Hva pressefrihet innebærer og hvorfor den er truet
- Ulike former for sensur og mediebegrensninger
- Hvordan vi måler pressefrihet internasjonalt`,
    },
    {
      id: 'mi2-5-3-def-1',
      type: 'definition',
      title: 'Pressefrihet',
      content: `**Pressefrihet** er medienes rett til å samle inn, bearbeide og formidle informasjon uten innblanding fra staten eller andre maktaktører. Pressefrihet er en forutsetning for demokratiet fordi det sikrer at borgerne har tilgang til uavhengig informasjon og at makthavere kan holdes ansvarlige. Pressefrihet er beskyttet i Norges Grunnlov paragraf 100 og i Den europeiske menneskerettskonvensjonen artikkel 10.`,
    },
    {
      id: 'mi2-5-3-text-1',
      type: 'text',
      content: `### Medier i tre politiske systemer

**1. Demokratiske systemer:**
- Mediene fungerer som «den fjerde statsmakt» – de overvåker de tre andre (Storting, regjering, domstoler)
- Pressefrihet er lovfestet og håndhevet
- Mediemangfold: Mange uavhengige aktører med ulike syn
- Redaksjonell uavhengighet fra stat og eiere
- Eksempler: Norge, Sverige, Danmark, Finland

**2. Autoritære systemer:**
- Staten kontrollerer de viktigste mediene, men tillater noe begrenset uavhengig presse
- Selvsensu: Journalister unngår visse temaer av frykt for konsekvenser
- Uavhengige medier kan eksistere, men møter hindringer (bøter, rettssaker, tilbaketrekking av lisenser)
- Sosiale medier kan sensureres delvis
- Eksempler: Russland, Tyrkia, Ungarn, Filippinene

**3. Totalitære systemer:**
- Staten har full kontroll over alle medier
- Mediene er propagandaverktøy for regimet
- Uavhengig journalistikk er forbudt og straffes hardt
- Internett er sterkt sensurert eller utilgjengelig
- Eksempler: Nord-Korea, Eritrea, Turkmenistan`,
    },
    {
      id: 'mi2-5-3-example-1',
      type: 'example',
      title: 'Kinas «Great Firewall»',
      problem: 'Hvordan kontrollerer Kina informasjonsflyten til og fra sine borgere?',
      solution: `**Kinas system for internettkontroll** er verdens mest avanserte og kalles ofte «The Great Firewall of China»:

**Blokkering:**
- Google, YouTube, Facebook, Instagram, WhatsApp og Twitter/X er blokkert
- Vestlige nyhetsmedier som New York Times og BBC er utilgjengelige
- VPN-tjenester som omgår blokkeringen er ulovlige for privatpersoner

**Kinesiske alternativer:**
- WeChat (i stedet for WhatsApp/Facebook) – over en milliard brukere
- Weibo (i stedet for Twitter) – mikrobloggplattform
- Baidu (i stedet for Google) – søkemotor
- Douyin (i stedet for TikTok) – kortvideoapp (TikTok er den internasjonale versjonen)

**Overvåking og selvsensur:**
- Innhold som kritiserer kommunistpartiet slettes automatisk av algoritmer
- Brukere som poster sensitivt innhold kan miste kontoer eller straffes
- Selvsensur: De fleste innbyggere unngår politisk sensitivt innhold av frykt

**Poenget:** Kina viser at det er mulig å ha et avansert digitalt samfunn med sosiale medier og e-handel, samtidig som staten opprettholder streng kontroll over informasjonsflyten.`,
    },
    {
      id: 'mi2-5-3-def-2',
      type: 'definition',
      title: 'Sensur',
      content: `**Sensur** er undertrykkelse av ytringer, informasjon eller medieinnhold som myndighetene eller andre maktaktører anser som uønsket. Sensur kan være **direkte** (forbud, blokkering, straff) eller **indirekte** (økonomisk press, trusler, selvsensur). Selvsensur – at journalister og medier unngår visse temaer av frykt – er den mest utbredte formen globalt og vanskeligst å dokumentere.`,
    },
    {
      id: 'mi2-5-3-text-2',
      type: 'text',
      content: `### Pressefrihet under press

**Reportere uten grenser (RSF)** publiserer en årlig pressefrihetsindeks som rangerer 180 land:

**Topp-land i 2024:**
1. Norge
2. Danmark
3. Sverige

**Bunnland i 2024:**
178. Kina
179. Eritrea
180. Nord-Korea

**Trusler mot pressefrihet globalt:**
- **Fengsling av journalister:** Hundrevis av journalister sitter fengslet for jobben sin. Kina, Myanmar og Iran er blant verstingene.
- **Drap på journalister:** Hvert år drepes journalister for å ha avslørt korrupsjon, organisert kriminalitet eller maktmisbruk.
- **Juridisk trakassering:** SLAPP-søksmål (strategiske søksmål for å kneble) brukes for å skremme journalister med dyre rettsprosesser.
- **Digitale trusler:** Overvåking av journalisters kommunikasjon, hacking av telefoner (Pegasus-skandalen) og DDoS-angrep mot uavhengige medier.
- **Populistiske angrep:** Politikere som kaller mediene «fiende av folket» og undergraver tilliten til journalistikk.

Selv i demokratiske land er pressefrihet ikke noe som kan tas for gitt. Den må forsvares kontinuerlig.`,
    },
    {
      id: 'mi2-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at mediene er «den fjerde statsmakt» i et demokrati?',
        options: [
          { id: 'a', text: 'At mediene styrer landet sammen med de tre andre statsmaktene', isCorrect: false },
          { id: 'b', text: 'At mediene overvåker og kontrollerer de andre maktorganer på vegne av folket', isCorrect: true },
          { id: 'c', text: 'At mediene er underlagt regjeringens kontroll', isCorrect: false },
          { id: 'd', text: 'At mediene har vetorett over lover vedtatt av Stortinget', isCorrect: false },
        ],
        solution: 'Begrepet «den fjerde statsmakt» betyr at mediene har en uformell rolle som overvåker av de tre offisielle statsmaktene (lovgivende, utøvende og dømmende makt). Mediene holder makthavere ansvarlige ved å informere borgerne og avsløre maktmisbruk.',
      },
    },
    {
      id: 'mi2-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom direkte sensur og selvsensur. Gi et eksempel på hver.',
        hints: ['Tenk på hvem som utøver sensuren og hvorfor'],
        solution: 'Direkte sensur er når myndigheter eller andre maktaktører aktivt forbyr, blokkerer eller straffer medieinnhold. Eksempel: Kinas «Great Firewall» som blokkerer vestlige nettsteder og automatisk sletter kritikk av kommunistpartiet. Selvsensur er når journalister og medier selv unngår visse temaer fordi de frykter konsekvenser. Eksempel: En journalist i Tyrkia som lar være å skrive om presidentens familie fordi hen vet at det kan føre til rettssak, tap av jobb eller fengsel. Selvsensur er vanskeligere å dokumentere fordi den skjer på individnivå og ofte er usynlig.',
      },
    },
    {
      id: 'mi2-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv tre kjennetegn ved medier i et autoritært system. Hvordan skiller dette seg fra medier i et demokrati?',
        hints: ['Tenk på kontroll, uavhengighet og mangfold'],
        solution: 'Tre kjennetegn: 1) Staten kontrollerer de viktigste mediene – statlig TV og aviser formidler regimets budskap, i motsetning til demokratier der mediene er uavhengige. 2) Uavhengige medier kan eksistere, men møter hindringer som bøter, tilbaketrekking av lisenser og trakassering – i demokratier er uavhengige medier beskyttet av lov. 3) Selvsensur er utbredt – journalister unngår sensitivt stoff, mens journalister i demokratier fritt kan undersøke alle temaer. Hovedforskjellen er at demokratier har lovfestet og reell pressefrihet, mens autoritære systemer bruker ulike mekanismer for å begrense medienes frihet.',
      },
    },
    {
      id: 'mi2-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-3-ex-4',
        number: '5.3.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er Reportere uten grenser (RSF) best kjent for?',
        options: [
          { id: 'a', text: 'Å produsere nyheter for fattige land', isCorrect: false },
          { id: 'b', text: 'Å publisere en årlig pressefrihetsindeks som rangerer 180 land', isCorrect: true },
          { id: 'c', text: 'Å drive sosiale medieplattformer for journalister', isCorrect: false },
          { id: 'd', text: 'Å utdanne journalister i utviklingsland', isCorrect: false },
        ],
        solution: 'Reportere uten grenser (Reporters Without Borders, RSF) er best kjent for sin årlige pressefrihetsindeks, som rangerer 180 land etter graden av pressefrihet. Indeksen er et viktig verktøy for å dokumentere og synliggjøre trusler mot pressefriheten globalt.',
      },
    },
    {
      id: 'mi2-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om det finnes situasjoner der begrensninger av pressefrihet kan være berettiget. Presenter argumenter for og mot, og gi konkrete eksempler.',
        hints: ['Tenk på nasjonal sikkerhet, personvern og hatytringer'],
        solution: 'For begrensninger: 1) Nasjonal sikkerhet – lekkasje av militære hemmeligheter kan true liv. 2) Personvern – medier bør ikke publisere identiteten til ofre eller mindreårige uten samtykke. 3) Hatytringer – ytringer som oppfordrer til vold mot grupper bør begrenses for å beskytte sårbare. Mot begrensninger: 1) «Nasjonal sikkerhet» brukes ofte som påskudd for å dekke over maktmisbruk – autoritære regimer bruker alltid dette argumentet. 2) Hvem bestemmer hva som er «farlig» informasjon? Hvis staten bestemmer, risikerer vi at kritikk av staten sensureres. 3) Ytringsfrihet er fundamentet for demokratiet og bør bare begrenses i helt ekstreme tilfeller. Konklusjon: Begrensninger kan være nødvendige i noen tilfeller, men må være klart definerte, proporsjonale og underlagt uavhengig kontroll.',
      },
    },
    {
      id: 'mi2-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-3-ex-6',
        number: '5.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvordan Kinas «Great Firewall» fungerer, og diskuter om et land kan ha et velfungerende digitalt samfunn uten fri tilgang til internett. Bruk Kina som eksempel.',
        solution: 'Kinas Great Firewall blokkerer tilgang til vestlige plattformer som Google, Facebook og YouTube, og erstatter dem med kinesiske alternativer som Baidu, WeChat og Weibo. Algoritmer sletter automatisk politisk sensitivt innhold, og VPN-bruk er ulovlig. Kina viser at det teknisk sett er mulig å ha et avansert digitalt samfunn med e-handel, mobilbetaling og sosiale medier uten vestlige plattformer. WeChat brukes til alt fra kommunikasjon til betaling. Samtidig er dette «digitale samfunnet» bygget på statlig overvåking og kontroll. Borgerne har tilgang til digitale tjenester, men ikke til fri informasjon. Spørsmålet er om et samfunn uten informasjonsfrihet kan kalles «velfungerende» i demokratisk forstand – det fungerer teknologisk, men mangler den åpenhet som kjennetegner frie samfunn.',
      },
    },
    {
      id: 'mi2-5-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Medienes rolle varierer dramatisk mellom **demokratiske, autoritære og totalitære** systemer
- **Pressefrihet** er en forutsetning for demokrati og beskyttes av Grunnloven
- **Sensur** kan være direkte (blokkering, straff) eller indirekte (selvsensur)
- **Pressefrihetsindeksen** til RSF dokumenterer pressefrihetens tilstand globalt

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Pressefrihet | Medienes rett til å formidle informasjon uten statlig innblanding |
| Den fjerde statsmakt | Medienes rolle som overvåker av de tre statsmaktene |
| Sensur | Undertrykkelse av uønskede ytringer og medieinnhold |
| Selvsensur | At medier unngår visse temaer av frykt for konsekvenser |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Pressefrihet', definition: 'Medienes rett til å samle inn og formidle informasjon uten innblanding fra staten' },
    { term: 'Den fjerde statsmakt', definition: 'Betegnelse for medienes uformelle rolle som overvåker av de tre statsmaktene i et demokrati' },
    { term: 'Sensur', definition: 'Undertrykkelse av ytringer eller medieinnhold som anses som uønsket av maktaktører' },
    { term: 'Selvsensur', definition: 'At journalister og medier selv unngår visse temaer av frykt for konsekvenser' },
    { term: 'Pressefrihetsindeksen', definition: 'Årlig rangering av 180 land etter grad av pressefrihet, publisert av Reportere uten grenser (RSF)' },
  ],
};

// ============================================================================
// Kapittel 5.4: Desinformasjon og informasjonskrig
// ============================================================================

export const CHAPTER_MEDIEINFO_2_5_4: TextbookChapter = {
  id: 'medieinfo-2-5-4',
  courseId: 'medieinfo-2',
  chapterNumber: '5.4',
  title: 'Desinformasjon og informasjonskrig',
  description: 'En gjennomgang av falske nyheter, trollfabrikker, statlig propaganda og hybride trusler. Du lærer å identifisere desinformasjon og forstå hvordan informasjon brukes som våpen i moderne konflikter.',
  estimatedMinutes: 20,
  competenceGoals: ['vurdere korleis desinformasjon og propaganda blir brukt som verkemiddel'],
  content: [
    {
      id: 'mi2-5-4-intro',
      type: 'text',
      content: `## Når informasjon blir et våpen

Desinformasjon er ikke nytt – propaganda har eksistert i tusenvis av år. Men digitaliseringen har gjort det enklere, billigere og raskere å spre falsk informasjon til millioner av mennesker. I dag bruker stater, organisasjoner og enkeltpersoner desinformasjon strategisk for å påvirke valg, skape uro og undergrave tillit til demokratiske institusjoner.

I dette kapittelet skal du lære:
- Forskjellen mellom desinformasjon, misinformasjon og propaganda
- Hvordan trollfabrikker og statlige aktører sprer desinformasjon
- Hva informasjonskrig er og hvordan det brukes i moderne konflikter
- Verktøy for å avsløre og beskytte seg mot desinformasjon`,
    },
    {
      id: 'mi2-5-4-def-1',
      type: 'definition',
      title: 'Desinformasjon, misinformasjon og propaganda',
      content: `**Desinformasjon** er bevisst feilaktig informasjon som spres med intensjon om å villede. **Misinformasjon** er feilaktig informasjon som spres uten bevisst villedende hensikt – avsenderen tror selv at det er sant. **Propaganda** er systematisk spredning av informasjon (som kan være sann, delvis sann eller usann) med hensikt å fremme en bestemt politisk agenda eller ideologi. Skillet mellom disse tre er avgjørende for å forstå omfanget og alvorligheten av informasjonspåvirkning.`,
    },
    {
      id: 'mi2-5-4-text-1',
      type: 'text',
      content: `### Trollfabrikker og koordinert påvirkning

**Trollfabrikker** er organisasjoner som ansetter mennesker til å opprette falske kontoer i sosiale medier og systematisk spre desinformasjon, skape polarisering og påvirke opinionen.

**Internet Research Agency (IRA) – Russland:**
- Mest kjente trollfabrikken, basert i St. Petersburg
- Ble avslørt for å ha forsøkt å påvirke det amerikanske presidentvalget i 2016
- Opererte tusenvis av falske kontoer på Facebook, Twitter og Instagram
- Spredde innhold som forsterket motsetninger i det amerikanske samfunnet
- Målrettet mot både venstre- og høyresiden for å øke polariseringen

**Hvordan trollfabrikker arbeider:**
1. **Kontoopprettelse:** Hundrevis av falske profiler med troverdige identiteter
2. **Relasjonsbygging:** Kontoene deler populært innhold for å bygge opp følgere og troverdighet
3. **Innholdsspredning:** Gradvis innføring av desinformasjon og splittende innhold
4. **Forsterkning:** Falske kontoer liker, deler og kommenterer hverandres innhold for å øke synligheten
5. **Utnytte algoritmer:** Kontroversielt innhold genererer engasjement, som algoritmene belønner med større rekkevidde

**Andre aktører:**
- Kina bruker «50 Cent Army» – personer som betales for å poste pro-regjerings-innhold
- Iran, Saudi-Arabia og mange andre stater har lignende operasjoner
- Også ikke-statlige aktører (terrorgrupper, politiske bevegelser) bruker tilsvarende taktikker`,
    },
    {
      id: 'mi2-5-4-def-2',
      type: 'definition',
      title: 'Informasjonskrig',
      content: `**Informasjonskrig** (eng. information warfare) er strategisk bruk av informasjon og desinformasjon for å oppnå politiske eller militære mål. Det kan inkludere cyberangrep, manipulering av medier, spredning av propaganda, hacking og lekkasjer av sensitiv informasjon. Informasjonskrig er en sentral del av moderne hybridkrigføring, der konvensjonell militær makt kombineres med digitale, økonomiske og informasjonsmessige virkemidler.`,
    },
    {
      id: 'mi2-5-4-example-1',
      type: 'example',
      title: 'Russlands informasjonskrig mot Ukraina',
      problem: 'Hvordan har Russland brukt informasjon som våpen i konflikten med Ukraina?',
      solution: `**Russlands informasjonsstrategi har flere lag:**

**Før invasjonen (2014–2022):**
- Spredning av narrativet om at Ukraina er en «kunstig stat» uten legitim identitet
- Støtte til pro-russiske medier og influensere i Ukraina og Vesten
- Bruk av RT (Russia Today) og Sputnik som internasjonale propagandakanaler
- Hacking og lekkasjer av ukrainske myndigheters dokumenter

**Under invasjonen (2022–):**
- Russiske statsmedier kaller krigen en «spesiell militær operasjon» – ordet «krig» er forbudt
- Sivile tap presenteres som «ukrainsk iscenesettelse» (f.eks. Butsja-massakren)
- Falske videoer og manipulerte bilder spres i sosiale medier
- Vestlige medier fremstilles som propagandister og løgnere

**Ukrainas informasjonsmotsvar:**
- President Zelenskyj bruker sosiale medier aktivt for å nå et globalt publikum
- Ukrainske innbyggere dokumenterer krigens virkelighet med mobilkameraer
- Faktasjekkere og åpen kildeinformasjon (OSINT) avslører russisk desinformasjon
- Bellingcat og andre uavhengige grupper verifiserer hendelser med satellittbilder og metadata

**Lærdom:** Informasjonskrig foregår parallelt med den fysiske krigen og er like viktig for å vinne støtte internasjonalt.`,
    },
    {
      id: 'mi2-5-4-text-2',
      type: 'text',
      content: `### Hvordan avsløre desinformasjon

**Kritisk vurdering av kilder:**
1. **Hvem er avsenderen?** Kjent medium, anonym konto eller tvilsom nettside?
2. **Hva er hensikten?** Informere, selge, provosere eller manipulere?
3. **Finnes det i andre kilder?** Rapporterer flere uavhengige medier det samme?
4. **Sjekk dato og kontekst:** Er bildet/videoen fra den påståtte hendelsen?
5. **Vurder følelsesappellen:** Desinformasjon spiller ofte på sterke følelser som frykt, sinne eller avsky

**Verktøy for faktasjekk:**
- **Faktisk.no** – Norsk faktasjekkportal
- **Snopes.com** – Internasjonal faktasjekking
- **Google omvendt bildesøk** – Sjekk om et bilde er brukt i annen kontekst
- **InVID/WeVerify** – Verifisering av videoer
- **Bellingcat** – Åpen kildeinformasjon (OSINT) for verifisering

**Mediekompetanse som forsvar:**
Den beste beskyttelsen mot desinformasjon er en informert og kritisk befolkning. Medieopplæring i skolen, en sunn skepsis til informasjon som virker for god eller for skremmende til å være sann, og evnen til å sjekke kilder er avgjørende i en verden der desinformasjon er blitt et hverdagsfenomen.`,
    },
    {
      id: 'mi2-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom desinformasjon og misinformasjon?',
        options: [
          { id: 'a', text: 'Desinformasjon er spredning av feil informasjon med vilje, misinformasjon er uten bevisst villedende hensikt', isCorrect: true },
          { id: 'b', text: 'Misinformasjon er farligere enn desinformasjon', isCorrect: false },
          { id: 'c', text: 'Det er ingen forskjell – begrepene betyr det samme', isCorrect: false },
          { id: 'd', text: 'Desinformasjon er bare digital, misinformasjon er bare analog', isCorrect: false },
        ],
        solution: 'Desinformasjon spres bevisst for å villede – avsenderen vet at informasjonen er feil. Misinformasjon spres uten villedende hensikt – avsenderen tror selv at det er sant. Skillet handler altså om intensjon. Begge kan gjøre skade, men desinformasjon er mer alvorlig fordi den er målrettet.',
      },
    },
    {
      id: 'mi2-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva en trollfabrikk er og beskriv hvordan den arbeider for å spre desinformasjon i sosiale medier. Bruk minst tre av stegene beskrevet i kapittelet.',
        hints: ['Tenk på falske kontoer, relasjonsbygging og algoritmeutnyttelse'],
        solution: 'En trollfabrikk er en organisasjon som ansetter mennesker til å opprette falske kontoer og systematisk spre desinformasjon. Arbeidsprosessen: 1) Kontoopprettelse – hundrevis av falske profiler med troverdige navn, bilder og bakgrunnshistorier lages. 2) Relasjonsbygging – kontoene deler populært og harmløst innhold for å få følgere og bygge troverdighet. 3) Innholdsspredning – gradvis introduseres desinformasjon og polariserende innhold som blandes med det harmløse. 4) Forsterkning – de falske kontoene interagerer med hverandre for å gi innholdet større synlighet. Algoritmene i sosiale medier belønner engasjement, slik at kontroversielt innhold får større rekkevidde.',
      },
    },
    {
      id: 'mi2-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-4-ex-3',
        number: '5.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er informasjonskrig?',
        options: [
          { id: 'a', text: 'Krig mellom konkurrerende nyhetsbyråer om å publisere nyheter først', isCorrect: false },
          { id: 'b', text: 'Strategisk bruk av informasjon og desinformasjon for å oppnå politiske eller militære mål', isCorrect: true },
          { id: 'c', text: 'Krig som bare utkjempes via internett uten fysisk konflikt', isCorrect: false },
          { id: 'd', text: 'Debatter mellom politikere i sosiale medier', isCorrect: false },
        ],
        solution: 'Informasjonskrig er strategisk bruk av informasjon og desinformasjon for å oppnå politiske eller militære mål. Det kan inkludere cyberangrep, manipulering av medier, propaganda og hacking. Det er en del av moderne hybridkrigføring der digitale og informasjonsmessige virkemidler kombineres med tradisjonelle.',
      },
    },
    {
      id: 'mi2-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-4-ex-4',
        number: '5.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du ser et oppsiktsvekkende nyhetsoppslag i sosiale medier om en dramatisk hendelse. Beskriv minst fire steg du kan ta for å vurdere om informasjonen er pålitelig.',
        hints: ['Bruk sjekklisten for kildekritikk fra kapittelet'],
        solution: '1) Sjekk avsenderen – er det et kjent og troverdig medium, eller en anonym konto? Undersøk kontoens historikk og alder. 2) Kryss-sjekk med andre kilder – rapporterer flere uavhengige medier det samme? Hvis bare én kilde har saken, bør du være skeptisk. 3) Sjekk dato og kontekst – er bildet/videoen faktisk fra den påståtte hendelsen, eller er det gjenbruk av gammelt materiale? Bruk Google omvendt bildesøk. 4) Vurder følelsesappellen – prøver innholdet å fremprovosere sterke følelser som sinne, frykt eller avsky? Desinformasjon spiller ofte på følelser. 5) Bruk faktasjekkverktøy – sjekk Faktisk.no, Snopes.com eller lignende tjenester.',
      },
    },
    {
      id: 'mi2-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft i hvilken grad sosiale mediers algoritmer bidrar til spredning av desinformasjon. Hvem har ansvar for å løse problemet – plattformene, myndighetene eller brukerne selv?',
        hints: ['Tenk på algoritmenes belønning av engasjement, ytringsfrihet og regulering'],
        solution: 'Algoritmenes rolle: Sosiale medier belønner innhold som skaper engasjement (klikk, delinger, kommentarer). Desinformasjon er ofte mer engasjerende enn sannhet fordi den spiller på sterke følelser. Algoritmene sprer derfor desinformasjon effektivt – ikke fordi de er designet for det, men fordi systemet belønner oppsiktsvekkende innhold. Plattformenes ansvar: De bør moderere innhold, merke desinformasjon og justere algoritmer til å nedprioritere villedende innhold. Men dette skaper dilemmaer om ytringsfrihet. Myndighetenes ansvar: Regulering kan pålegge plattformer større ansvar, men det er vanskelig å regulere globale selskaper, og sensurfare oppstår. Brukernes ansvar: Mediekompetanse og kritisk tenkning er den viktigste forsvarsmuren, men det er urealistisk å forvente at alle borgere er eksperter på kildekritikk. Konklusjon: Ansvaret må deles – alle tre aktørene har en rolle å spille.',
      },
    },
    {
      id: 'mi2-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-4-ex-6',
        number: '5.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser et konkret eksempel på hvordan desinformasjon eller informasjonskrig har blitt brukt i en nyere konflikt eller valgkamp. Beskriv hva som skjedde, hvilke virkemidler som ble brukt, og hvilken effekt det hadde.',
        solution: 'Eksempel: Russlands påvirkning av det amerikanske presidentvalget i 2016. Internet Research Agency i St. Petersburg opprettet tusenvis av falske kontoer på Facebook, Twitter og Instagram som utgav seg for å være amerikanske borgere. De spredde innhold som forsterket eksisterende motsetninger i det amerikanske samfunnet – rasemotsetninger, innvandringsdebatt og politisk polarisering. Virkemidler: Falske profiler, organisering av demonstrasjoner, målrettet annonsering og meme-kampanjer rettet mot bestemte velgergrupper. Effekt: Det er omdiskutert om det endret valgutfallet, men det sådde tvil om valgprosessens integritet og økte bevisstheten om at stater aktivt bruker sosiale medier som verktøy for informasjonskrig.',
      },
    },
    {
      id: 'mi2-5-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Desinformasjon** er bevisst villedende, mens **misinformasjon** spres uten vond hensikt
- **Trollfabrikker** bruker falske kontoer for systematisk å spre desinformasjon og skape polarisering
- **Informasjonskrig** er strategisk bruk av informasjon som våpen i moderne konflikter
- **Kildekritikk og faktasjekk** er avgjørende verktøy for å beskytte seg mot desinformasjon

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Desinformasjon | Bevisst feilaktig informasjon spredt med villedende hensikt |
| Misinformasjon | Feilaktig informasjon spredt uten bevisst villedende hensikt |
| Trollfabrikk | Organisasjon som systematisk sprer desinformasjon via falske kontoer |
| Informasjonskrig | Strategisk bruk av informasjon for politiske eller militære mål |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Desinformasjon', definition: 'Bevisst feilaktig informasjon som spres med intensjon om å villede' },
    { term: 'Misinformasjon', definition: 'Feilaktig informasjon som spres uten bevisst villedende hensikt' },
    { term: 'Propaganda', definition: 'Systematisk spredning av informasjon for å fremme en bestemt politisk agenda' },
    { term: 'Trollfabrikk', definition: 'Organisasjon som ansetter mennesker til å opprette falske kontoer og spre desinformasjon' },
    { term: 'Informasjonskrig', definition: 'Strategisk bruk av informasjon og desinformasjon for å oppnå politiske eller militære mål' },
  ],
};

// ============================================================================
// Kapittel 5.5: Digital kløft og medietilgang
// ============================================================================

export const CHAPTER_MEDIEINFO_2_5_5: TextbookChapter = {
  id: 'medieinfo-2-5-5',
  courseId: 'medieinfo-2',
  chapterNumber: '5.5',
  title: 'Digital kløft og medietilgang',
  description: 'En gjennomgang av ulik tilgang til medier og digital infrastruktur globalt. Du lærer om den digitale kløften, dens årsaker og konsekvenser, og hva som gjøres for å minske den.',
  estimatedMinutes: 20,
  competenceGoals: ['drøfte digitale skiljelinjer og ulik tilgang til informasjon globalt'],
  content: [
    {
      id: 'mi2-5-5-intro',
      type: 'text',
      content: `## En verden delt av teknologi

Du leser kanskje dette kapittelet på en bærbar datamaskin med rask internettilkobling. Men for nesten tre milliarder mennesker i verden er internett fortsatt utilgjengelig. Den digitale kløften – gapet mellom dem som har tilgang til digital teknologi og dem som ikke har det – er en av de viktigste ulikhetene i vår tid.

I dette kapittelet skal du lære:
- Hva den digitale kløften innebærer og hvem den rammer
- Årsaker til ulik medietilgang globalt
- Konsekvenser av den digitale kløften for demokrati, utdanning og økonomi
- Tiltak for å minske den digitale kløften`,
    },
    {
      id: 'mi2-5-5-def-1',
      type: 'definition',
      title: 'Den digitale kløften',
      content: `**Den digitale kløften** (eng. digital divide) refererer til gapet mellom individer, grupper og land som har tilgang til og kompetanse i å bruke digital informasjons- og kommunikasjonsteknologi, og dem som ikke har det. Kløften har flere dimensjoner: tilgang til infrastruktur (internett, strøm, enheter), digital kompetanse (evne til å bruke teknologien), og meningsfull bruk (evne til å dra nytte av teknologien i hverdagen).`,
    },
    {
      id: 'mi2-5-5-text-1',
      type: 'text',
      content: `### Den digitale kløften i tall

**Globalt:**
- Omtrent 2,6 milliarder mennesker er fortsatt uten internettilgang (ca. 33 % av verdens befolkning)
- I Afrika sør for Sahara har bare rundt 36 % av befolkningen internettilgang
- I Europa og Nord-Amerika er andelen over 90 %

**Interne kløfter:**
- **By vs. bygd:** Selv i land med høy internettdekning har landsbygda ofte dårligere tilgang
- **Kjønn:** I utviklingsland har kvinner 16 % lavere sannsynlighet for å bruke internett enn menn
- **Alder:** Eldre har ofte lavere digital kompetanse og tilgang
- **Økonomi:** Fattige husstander har mindre tilgang til enheter og dataabonnementer
- **Språk:** Over 60 % av alt innhold på internett er på engelsk, som bare 17 % av verdens befolkning snakker

**Norsk kontekst:**
Selv om Norge er blant verdens mest digitaliserte land, finnes det også her digitale kløfter. Eldre, mennesker med funksjonsnedsettelser og innvandrergrupper kan ha utfordringer med digital deltakelse.`,
    },
    {
      id: 'mi2-5-5-example-1',
      type: 'example',
      title: 'Covid-19 og den digitale kløften',
      problem: 'Hvordan ble den digitale kløften synliggjort under covid-19-pandemien?',
      solution: `**Covid-19 avslørte og forsterket den digitale kløften på flere områder:**

**Utdanning:**
- Da skoler stengte, ble undervisningen digital over natten
- I rike land hadde de fleste elever PC og internett hjemme
- I utviklingsland manglet hundretalls millioner barn tilgang til digital undervisning
- UNICEF anslår at minst 463 millioner barn ikke hadde tilgang til fjernundervisning
- Selv i Norge hadde noen familier problemer med mangel på enheter eller stabil internett

**Helseinformasjon:**
- Pålitelig helseinformasjon ble spredt digitalt, men nådde ikke dem uten tilgang
- Digitale vaksinasjonsbevis krevde smarttelefon
- Telemedisin ble viktigere, men utilgjengelig for mange

**Arbeidsliv:**
- Hjemmekontor var bare mulig for dem med digital tilgang og kompetanse
- Mennesker uten digital tilgang ble ekstra utsatt for arbeidsledighet

**Lærdom:** Pandemien viste at digital tilgang ikke bare er en luksus, men en nødvendighet for grunnleggende deltakelse i samfunnet.`,
    },
    {
      id: 'mi2-5-5-def-2',
      type: 'definition',
      title: 'Digital kompetanse',
      content: `**Digital kompetanse** (eng. digital literacy) er evnen til å finne, vurdere, bruke og skape digitalt innhold på en meningsfull og kritisk måte. Det omfatter tekniske ferdigheter (bruk av enheter og programvare), informasjonskompetanse (kritisk vurdering av kilder), kommunikasjonskompetanse (deltakelse i digitale fellesskap) og skaperkompetanse (produksjon av digitalt innhold). Tilgang til teknologi er ikke nok – man må også ha kompetansen til å bruke den.`,
    },
    {
      id: 'mi2-5-5-text-2',
      type: 'text',
      content: `### Årsaker og konsekvenser

**Årsaker til den digitale kløften:**
- **Infrastruktur:** Manglende bredbånd, ustabil strømtilgang og dårlig mobildekning i fattige land og områder
- **Økonomi:** Kostnaden for internettilkobling og enheter er for høy relativt til inntekt
- **Utdanning:** Manglende digital kompetanse og opplæring
- **Politikk:** Noen regimer begrenser bevisst tilgangen til internett
- **Språk:** Lite innhold på lokale språk gjør internett mindre relevant

**Konsekvenser:**
- **Demokrati:** Uten tilgang til informasjon kan borgere ikke delta fullt ut i demokratiske prosesser
- **Utdanning:** Barn uten digital tilgang faller etter i en verden der mer og mer læring er digital
- **Økonomi:** Digital kompetanse er en forutsetning for stadig flere jobber – den digitale kløften forsterker økonomisk ulikhet
- **Helse:** Tilgang til helseinformasjon og telemedisin avhenger av digital tilgang
- **Sosial deltakelse:** Sosiale medier og digitale tjenester er blitt sentrale for samfunnsdeltakelse

### Tiltak for å minske kløften

**Infrastruktur:**
- Utbygging av bredbånd og mobilnettverk i underutviklede områder
- Prosjekter som Starlink (satellittinternett) og Googles Project Loon (ballonger)
- FN har erklært internettilgang som en menneskerett

**Utdanning:**
- Digital opplæring i skoler globalt
- Programmer som «One Laptop per Child» og lignende initiativer
- Opplæring i digital kompetanse for voksne

**Politikk og regulering:**
- Subsidierte dataabonnementer for lavinntektsgrupper
- Offentlige wifi-tilbud på biblioteker og offentlige steder
- Internasjonalt samarbeid om digital inkludering`,
    },
    {
      id: 'mi2-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med den digitale kløften?',
        options: [
          { id: 'a', text: 'Forskjellen mellom analog og digital teknologi', isCorrect: false },
          { id: 'b', text: 'Gapet mellom dem som har og dem som ikke har tilgang til digital teknologi', isCorrect: true },
          { id: 'c', text: 'En fysisk sprekk i internettkabler', isCorrect: false },
          { id: 'd', text: 'Forskjellen mellom ulike sosiale medieplattformer', isCorrect: false },
        ],
        solution: 'Den digitale kløften refererer til gapet mellom dem som har tilgang til og kompetanse i digital teknologi, og dem som ikke har det. Kløften kan være mellom land, men også innad i land – mellom by og bygd, fattig og rik, ung og gammel.',
      },
    },
    {
      id: 'mi2-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-5-ex-2',
        number: '5.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor tilgang til internett ikke er nok for å minske den digitale kløften. Hva mer trengs?',
        hints: ['Tenk på kompetanse, språk og meningsfull bruk'],
        solution: 'Tilgang til internett er bare første steg. For å minske den digitale kløften trengs også: 1) Digital kompetanse – evnen til å bruke teknologien, vurdere informasjon kritisk og skape innhold. Mange har tilgang, men mangler ferdigheter. 2) Innhold på lokale språk – over 60 % av internettinnhold er på engelsk, noe som gjør det irrelevant for mange. 3) Økonomisk tilgjengelighet – enheter og datapakker må være rimelige nok til at folk har råd til dem. 4) Meningsfull bruk – folk må kunne bruke teknologien til ting som forbedrer livene deres: utdanning, helse, arbeid og samfunnsdeltakelse. Uten disse faktorene forblir tilgang til internett en tom mulighet.',
      },
    },
    {
      id: 'mi2-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-5-ex-3',
        number: '5.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tre eksempler på hvordan den digitale kløften ble synliggjort under covid-19-pandemien.',
        hints: ['Tenk på skole, helse og arbeidsliv'],
        solution: '1) Utdanning – Da skolene stengte, ble undervisningen digital. Barn uten PC eller internett hjemme falt utenfor. UNICEF anslår at minst 463 millioner barn ikke hadde tilgang til fjernundervisning. 2) Helseinformasjon – Pålitelig helseinformasjon om viruset ble spredt digitalt, men nådde ikke dem uten internettilgang. Digitale vaksinasjonsbevis krevde smarttelefon. 3) Arbeidsliv – Hjemmekontor var bare mulig for dem med digital tilgang. Mennesker uten digital kompetanse og utstyr ble ekstra utsatt for permitteringer og arbeidsledighet.',
      },
    },
    {
      id: 'mi2-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-5-ex-4',
        number: '5.5.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken region i verden har lavest andel av befolkningen med internettilgang?',
        options: [
          { id: 'a', text: 'Sør-Amerika', isCorrect: false },
          { id: 'b', text: 'Sørøst-Asia', isCorrect: false },
          { id: 'c', text: 'Afrika sør for Sahara', isCorrect: true },
          { id: 'd', text: 'Midtøsten', isCorrect: false },
        ],
        solution: 'Afrika sør for Sahara har den laveste andelen av befolkningen med internettilgang, med ca. 36 %. Årsaker inkluderer manglende infrastruktur, høye kostnader for dataabonnementer relativt til inntekt, og ustabil strømtilgang i mange områder.',
      },
    },
    {
      id: 'mi2-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'FN har erklært internettilgang som en menneskerett. Drøft om dette er rimelig. Bør internettilgang ha samme status som retten til mat, utdanning og helsehjelp?',
        hints: ['Tenk på hva tilgang til informasjon betyr for andre rettigheter'],
        solution: 'For: I en digital verden er internettilgang en forutsetning for å utøve andre rettigheter som ytringsfrihet, retten til informasjon, retten til utdanning og politisk deltakelse. Uten internett er det stadig vanskeligere å delta i samfunnet, søke jobb eller få tilgang til offentlige tjenester. Mot: Internett er et verktøy, ikke et grunnleggende behov på linje med mat og helse. Mange har overlevd uten internett i årtusener, og å kalle det en menneskerett kan utvanne begrepet. Dessuten kan det brukes av autoritære regimer til overvåking. Nyansert vurdering: Internettilgang er kanskje ikke en menneskerett i seg selv, men det er blitt en forutsetning for å realisere andre menneskerettigheter. I praksis fungerer det som en «tilgangsrett» – uten den er andre rettigheter vanskelig å utøve.',
      },
    },
    {
      id: 'mi2-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-5-5-ex-6',
        number: '5.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Også i Norge finnes det digitale kløfter. Hvilke grupper kan ha utfordringer med digital deltakelse i Norge, og hva kan gjøres for å inkludere dem bedre?',
        solution: 'Grupper med utfordringer: 1) Eldre – mange har begrenset erfaring med digital teknologi og kan slite med nettbank, digitale skjemaer og kommunikasjon. 2) Innvandrergrupper – språkbarrierer og manglende digital kompetanse kan hindre deltakelse. 3) Mennesker med funksjonsnedsettelser – nettsider og apper som ikke følger universell utforming-standarder ekskluderer brukere. 4) Lavtlønnede familier – barn i fattige familier kan mangle oppdatert utstyr og stabil internett hjemme. Tiltak: Digital opplæring for eldre gjennom biblioteker og frivillige organisasjoner, IKT-opplæring for innvandrere på eget språk, krav om universell utforming av alle offentlige digitale tjenester, og ordninger som sikrer at alle barn har tilgang til nødvendig digital utstyr for skolearbeid.',
      },
    },
    {
      id: 'mi2-5-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Den digitale kløften** er gapet mellom dem med og dem uten tilgang til digital teknologi
- Kløften rammer spesielt fattige land, kvinner, eldre og landsbygda
- **Digital kompetanse** er like viktig som tilgang – man må kunne bruke teknologien meningsfullt
- Covid-19 viste at digital tilgang er blitt en **nødvendighet** for samfunnsdeltakelse

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Digital kløft | Gapet mellom dem som har og ikke har tilgang til digital teknologi |
| Digital kompetanse | Evnen til å bruke digital teknologi kritisk og meningsfullt |
| Infrastruktur | Bredbånd, mobilnettverk og strøm som muliggjør digital tilgang |
| Digital inkludering | Tiltak for å sikre at alle kan delta i det digitale samfunnet |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Den digitale kløften', definition: 'Gapet mellom dem som har og dem som ikke har tilgang til og kompetanse i digital teknologi' },
    { term: 'Digital kompetanse', definition: 'Evnen til å finne, vurdere, bruke og skape digitalt innhold på en kritisk måte' },
    { term: 'Digital inkludering', definition: 'Tiltak for å sikre at alle mennesker kan delta i det digitale samfunnet' },
    { term: 'Universell utforming', definition: 'Prinsipp om at digitale tjenester skal være tilgjengelige for alle, uavhengig av funksjonsevne' },
    { term: 'Språklig kløft', definition: 'At dominansen av engelsk innhold på internett ekskluderer dem som ikke behersker språket' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const MEDIEINFO_2_DEL5_CHAPTERS = [
  CHAPTER_MEDIEINFO_2_5_1,
  CHAPTER_MEDIEINFO_2_5_2,
  CHAPTER_MEDIEINFO_2_5_3,
  CHAPTER_MEDIEINFO_2_5_4,
  CHAPTER_MEDIEINFO_2_5_5,
];
