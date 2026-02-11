/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 1 (VG2)
 * Seksjon 7: Sosiale medier og digital kultur
 * Kapittel 7.1-7.5
 *
 * Dekker LK20-kompetansemål for medie- og informasjonskunnskap 1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Plattformer og forretningsmodeller
// ============================================================================

export const CHAPTER_MEDIEINFO_1_7_1: TextbookChapter = {
  id: 'medieinfo-1-7-1',
  courseId: 'medieinfo-1',
  chapterNumber: '7.1',
  title: 'Plattformer og forretningsmodeller',
  description: 'Plattformøkonomi, annonsefinansiering og datainnsamling i sosiale medier.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for forretningsmodellene til sentrale sosiale medieplattformer',
    'drøfte sammenhengen mellom gratis tjenester og datainnsamling',
    'analysere plattformøkonomiens betydning for medielandskapet',
  ],
  keyTerms: [
    { term: 'Plattformøkonomi', definition: 'Økonomisk modell der digitale plattformer kobler sammen brukere, annonsører og innholdsprodusenter og tjener penger på å legge til rette for disse forbindelsene.' },
    { term: 'Annonsefinansiering', definition: 'Inntektsmodell der tjenester tilbys gratis til brukere, mens inntektene kommer fra annonsører som betaler for å nå brukerne med målrettet reklame.' },
    { term: 'Brukerdata', definition: 'Informasjon som samles inn om brukernes atferd, preferanser, plassering og sosiale nettverk, og som brukes til å målrette annonser og tilpasse innhold.' },
    { term: 'Nettverkseffekt', definition: 'Fenomenet der en tjeneste blir mer verdifull jo flere som bruker den, noe som gjør det vanskelig for konkurrenter å utfordre etablerte plattformer.' },
  ],
  content: [
    {
      id: 'mi-7-1-intro',
      type: 'text',
      content: `## Sosiale medier som forretning

Sosiale medier som Instagram, TikTok, Snapchat og YouTube er blant de mest brukte tjenestene på nettet. De fleste av dem er gratis for brukerne. Likevel er selskapene bak noen av verdens mest verdifulle. Hvordan er det mulig?

Svaret ligger i forretningsmodellen: Brukerne betaler ikke med penger, men med oppmerksomhet og data. I dette kapittelet skal du lære hvordan plattformene tjener penger, hvilke data de samler inn, og hva dette betyr for mediesamfunnet.`,
    },
    {
      id: 'mi-7-1-def-plattformokonomi',
      type: 'definition',
      title: 'Plattformøkonomi',
      content: 'Plattformøkonomi er en økonomisk modell der digitale plattformer fungerer som mellomledd mellom ulike brukergrupper. Plattformen skaper verdi ved å koble sammen innholdsprodusenter, forbrukere og annonsører. Eksempler er Meta (Facebook, Instagram), Alphabet (YouTube, Google) og ByteDance (TikTok).',
    },
    {
      id: 'mi-7-1-text-forretningsmodeller',
      type: 'text',
      content: `### Forretningsmodeller i sosiale medier

**Annonsefinansiering (dominerende modell):**
- Brukerne får tilgang gratis
- Annonsører betaler for å vise reklame
- Plattformen samler inn data for å målrette annonser
- Eksempler: Facebook, Instagram, TikTok, YouTube, Snapchat

**Abonnementsmodell:**
- Brukerne betaler en fast månedspris
- Ofte færre eller ingen annonser
- Eksempler: Spotify Premium, YouTube Premium

**Freemium:**
- Grunnleggende tjeneste er gratis
- Ekstra funksjoner koster penger
- Eksempler: LinkedIn Premium, Discord Nitro

**Transaksjonsbasert:**
- Plattformen tar en andel av handel mellom brukere
- Eksempler: App Store, Google Play, Twitch-donasjoner

De fleste store plattformer kombinerer flere modeller, men annonseinntekter er den viktigste inntektskilden for de største.`,
    },
    {
      id: 'mi-7-1-def-nettverkseffekt',
      type: 'definition',
      title: 'Nettverkseffekt',
      content: 'En nettverkseffekt oppstår når verdien av en tjeneste øker jo flere som bruker den. Sosiale medier er verdiløse med null brukere, men stadig mer attraktive etter hvert som venner, familie og interessegrupper kommer til. Nettverkseffekten skaper en sterk «innlåsing» som gjør det vanskelig for nye konkurrenter å etablere seg, fordi brukerne allerede har nettverkene sine på eksisterende plattformer.',
    },
    {
      id: 'mi-7-1-text-datainnsamling',
      type: 'text',
      content: `### Datainnsamling og overvåkingskapitalisme

Plattformene samler inn enorme mengder data om brukerne:

**Direkte data:**
- Profil: Navn, alder, kjønn, bosted, utdanning
- Innhold: Hva du poster, liker, kommenterer, deler
- Sosiale forbindelser: Hvem du er venn med, hvem du kommuniserer med

**Atferdsdata:**
- Hva du søker etter og klikker på
- Hvor lenge du ser på ulike innhold
- Hvilke apper du bruker og når
- Geografisk plassering og bevegelsesmønstre

**Utledet data:**
- Politiske holdninger (basert på interaksjoner)
- Kjøpekraft og kjøpsinteresser
- Personlighetstrekk og følelsestilstander
- Fremtidig atferd (prediksjon)

Denne informasjonen brukes til å lage detaljerte brukerprofiler som selges til annonsører. Forskere kaller dette **overvåkingskapitalisme** - et økonomisk system der personlig data er den viktigste råvaren.`,
    },
    {
      id: 'mi-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Metas annonsesystem',
      problem: 'Hvordan tjener Meta (Facebook/Instagram) penger på gratis tjenester?',
      solution: `**Metas forretningsmodell:**

1. **Brukerne** registrerer seg gratis og deler innhold, liker poster og følger sider.
2. **Meta samler data** om alt brukerne gjør: hva de liker, hvem de følger, hva de klikker på, hvor lenge de ser på ulike poster.
3. **Annonsører** bruker Metas annonseringsverktøy for å velge hvem de vil nå: «kvinner mellom 18-25 i Oslo som er interessert i trening og helsekost».
4. **Annonsen vises** til akkurat de brukerne som passer profilen.
5. **Meta fakturerer** annonsøren per visning eller klikk.

**Tallenes tale (2024):**
- Meta hadde ca. 3 milliarder aktive brukere
- Reklameinntekter utgjorde over 95 % av totalinntektene
- Gjennomsnittlig inntekt per bruker i Nord-Amerika: ca. 250 kr per kvartal

**Konklusjon:** Når tjenesten er gratis, er du ikke kunden - du er produktet. Brukernes oppmerksomhet og data er det Meta selger til annonsørene.`,
    },
    {
      id: 'mi-7-1-ex-1',
      type: 'exercise',
      title: 'Oppgave 7.1.1',
      exercise: {
        id: 'mi-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste inntektskilden for sosiale medieplattformer som Facebook og TikTok?',
        options: [
          { id: 'a', text: 'Abonnementsavgifter fra brukerne', isCorrect: false },
          { id: 'b', text: 'Salg av annonseplass basert på brukerdata', isCorrect: true },
          { id: 'c', text: 'Statsstøtte til medieselskaper', isCorrect: false },
          { id: 'd', text: 'Salg av programvare til bedrifter', isCorrect: false },
        ],
        solution: 'De fleste store sosiale medieplattformer tjener hovedinntektene sine på å selge målrettet annonseplass. Annonsørene betaler for å nå bestemte brukergrupper basert på data plattformen har samlet inn om brukerne.',
      },
    },
    {
      id: 'mi-7-1-ex-2',
      type: 'exercise',
      title: 'Oppgave 7.1.2',
      exercise: {
        id: 'mi-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        task: 'Forklar hva en nettverkseffekt er og hvorfor den gjør det vanskelig for nye sosiale medier å konkurrere med etablerte plattformer.',
        solution: 'En nettverkseffekt betyr at en tjeneste blir mer verdifull jo flere som bruker den. For sosiale medier er verdien å kunne nå venner, familie og interessegrupper. Når alle man kjenner allerede er på en plattform, er det lite fristende å bytte til en ny der ingen er. Dette skaper en «innlåsing» som beskytter etablerte plattformer mot konkurranse, selv om nye tjenester teknisk sett kan være bedre.',
      },
    },
    {
      id: 'mi-7-1-ex-3',
      type: 'exercise',
      title: 'Oppgave 7.1.3',
      exercise: {
        id: 'mi-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        task: 'Uttrykket «Hvis tjenesten er gratis, er du produktet» brukes ofte om sosiale medier. Forklar hva dette betyr og drøft om du synes det er en rettferdig byttehandel.',
        solution: 'Uttrykket betyr at brukerne betaler med sine data og sin oppmerksomhet i stedet for penger. Plattformene samler inn informasjon om brukernes atferd og interesser, og selger tilgangen til disse brukerne til annonsører. Argumenter for: Brukerne får tilgang til nyttige tjenester gratis. Argumenter mot: Mange er ikke klar over omfanget av datainnsamlingen, og dataene kan brukes på måter brukerne ikke forventer eller ønsker.',
      },
    },
    {
      id: 'mi-7-1-summary',
      type: 'text',
      content: `## Oppsummering

- **Plattformøkonomien** er bygget på å koble sammen brukere og annonsører
- De fleste sosiale medier er **annonsefinansiert** og tilbys gratis til brukerne
- Plattformene samler inn omfattende **brukerdata** for å målrette annonser
- **Nettverkseffekter** gjør at etablerte plattformer er vanskelige å utfordre
- Begrepet **overvåkingskapitalisme** beskriver et system der personlige data er den viktigste råvaren`,
    },
    {
      id: 'mi-7-1-samleoppgave',
      type: 'exercise',
      title: 'Samleoppgave 7.1',
      exercise: {
        id: 'mi-7-1-samle',
        number: '7.1.S',
        type: 'classic',
        task: 'Velg en sosial medieplattform du bruker jevnlig. Beskriv forretningsmodellen, hvilke data plattformen samler om deg, og diskuter fordeler og ulemper med denne modellen for brukerne og for samfunnet.',
        hints: ['Tenk på hvordan plattformen tjener penger, hva du «betaler» med, og hva konsekvensene er.'],
        solution: 'Et godt svar beskriver den konkrete plattformens inntektsmodell (annonser, abonnement, freemium), lister opp hvilke typer data som samles inn (profil, atferd, plassering), og drøfter fordeler (gratis tilgang, kontakt med andre) og ulemper (personvern, manipulasjon, maktkonsentrasjon) for både individ og samfunn.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Algoritmer og filterbobler
// ============================================================================

export const CHAPTER_MEDIEINFO_1_7_2: TextbookChapter = {
  id: 'medieinfo-1-7-2',
  courseId: 'medieinfo-1',
  chapterNumber: '7.2',
  title: 'Algoritmer og filterbobler',
  description: 'Personalisering av innhold, ekkokamre, polarisering og algoritmenes makt over informasjonsstrømmen.',
  estimatedMinutes: 24,
  competenceGoals: [
    'forklare hvordan algoritmer styrer innholdet brukere ser i sosiale medier',
    'drøfte konsekvensene av personalisering for demokrati og meningsdannelse',
    'vurdere sammenhengen mellom filterbobler, ekkokamre og politisk polarisering',
  ],
  keyTerms: [
    { term: 'Algoritme', definition: 'Et sett med regler og instruksjoner som en datamaskin følger for å løse en oppgave. I sosiale medier bestemmer algoritmer hvilket innhold som vises til hvilke brukere.' },
    { term: 'Filterboble', definition: 'Et personalisert informasjonsunivers som oppstår når algoritmer filtrerer bort innhold som ikke matcher brukerens tidligere preferanser, slik at brukeren ikke eksponeres for andre perspektiver.' },
    { term: 'Ekkokammer', definition: 'En situasjon der personer hovedsakelig eksponeres for informasjon og meninger som bekrefter det de allerede tror, ofte forsterket av algoritmisk personalisering og sosiale nettverk.' },
    { term: 'Polarisering', definition: 'En prosess der motsetninger mellom grupper i samfunnet forsterkes, og meningene beveger seg mot mer ekstreme posisjoner. Algoritmisk innholdsforsterkning kan bidra til dette.' },
  ],
  content: [
    {
      id: 'mi-7-2-intro',
      type: 'text',
      content: `## Hvem bestemmer hva du ser?

Hver gang du åpner TikTok, Instagram eller YouTube, møtes du av et utvalg innhold. Men dette utvalget er ikke tilfeldig. Kraftige algoritmer analyserer din tidligere atferd og velger innhold som de tror vil holde deg på plattformen lengst mulig.

I dette kapittelet skal du lære hvordan disse algoritmene fungerer, og hvilke konsekvenser personaliseringen kan ha for den enkelte og for samfunnet.`,
    },
    {
      id: 'mi-7-2-def-algoritme',
      type: 'definition',
      title: 'Algoritme i sosiale medier',
      content: 'En algoritme er et sett med regler og beregninger som bestemmer hva en bruker ser i sin feed. Algoritmen vurderer faktorer som brukerens tidligere interaksjoner, hva venner liker, hva som er populært, hvor nytt innholdet er, og hva som sannsynligvis vil skape engasjement. Målet er å maksimere tiden brukeren tilbringer på plattformen.',
    },
    {
      id: 'mi-7-2-text-personalisering',
      type: 'text',
      content: `### Hvordan personaliseringen fungerer

**Signaler algoritmen bruker:**
- Hva du har likt, kommentert og delt tidligere
- Hvor lenge du ser på ulike typer innhold
- Hvem du følger og samhandler med
- Hva lignende brukere engasjeres av
- Tid på døgnet, enhet og plassering

**Anbefalingssystemet:**
1. Algoritmen lager en profil av dine interesser
2. Den finner innhold som ligner på det du har engasjert deg med før
3. Den rangerer innholdet etter sannsynlighet for engasjement
4. De mest «engasjerende» postene vises øverst

**Hva skaper engasjement?**
Forskning viser at innhold som vekker sterke følelser (sinne, beundring, frykt, glede) får mest engasjement. Dette betyr at algoritmene systematisk prioriterer følelsesladet innhold fremfor nøkternt og nyansert innhold.`,
    },
    {
      id: 'mi-7-2-def-filterboble',
      type: 'definition',
      title: 'Filterboble',
      content: 'Begrepet filterboble ble lansert av Eli Pariser i 2011 og beskriver det personaliserte informasjonsuniverset som oppstår når algoritmer filtrerer informasjon basert på brukerens tidligere atferd. I en filterboble ser du hovedsakelig innhold som bekrefter dine eksisterende interesser og synspunkter, mens alternative perspektiver filtreres bort.',
    },
    {
      id: 'mi-7-2-text-ekkokamre',
      type: 'text',
      content: `### Ekkokamre og polarisering

**Fra filterboble til ekkokammer:**
1. Algoritmen viser deg innhold du sannsynligvis liker
2. Du engasjerer deg med dette innholdet
3. Algoritmen registrerer engasjementet og gir mer av det samme
4. Du eksponeres for stadig smalere innhold
5. Andre perspektiver forsvinner fra synsfeltet

**Hvordan ekkokamre forsterkes:**
- Du følger folk som mener det samme som deg
- Venner deler innhold dere er enige om
- Gruppedynamikk forsterker felles oppfatninger
- Avvikende stemmer blir ignorert eller angrepet

**Konsekvenser for samfunnsdebatten:**
- **Polarisering**: Grupper beveger seg mot mer ekstreme posisjoner
- **Misforståelser**: Man forstår ikke motpartens argumenter
- **Mistillit**: Andre grupper oppfattes som dumme eller ondskapsfulle
- **Fragmentering**: Felles virkelighetsforståelse forvitrer

**Viktig nyanse:**
Forskningen er ikke entydig. Noen studier viser at folk faktisk eksponeres for mer mangfoldig innhold på nett enn i tradisjonelle medier. Det er forskjell mellom algoritmiske filterbobler og selvvalgte ekkokamre. Temaet er omdiskutert blant forskere.`,
    },
    {
      id: 'mi-7-2-example-1',
      type: 'example',
      title: 'Eksempel: TikToks anbefalingsalgoritme',
      problem: 'Forklar hvordan TikToks «For deg»-side fungerer og hvorfor den er spesielt effektiv til å fange oppmerksomhet.',
      solution: `**TikToks algoritme:**

1. **Korte videoer**: Formatet gjør at algoritmen raskt får mange datapunkter om hva brukeren liker.
2. **Atferdsmåling**: Algoritmen registrerer om du ser ferdig, ser om igjen, liker, kommenterer, deler, eller scroller videre.
3. **Rask tilpasning**: Allerede etter noen minutter begynner feeden å tilpasse seg.
4. **Innholdsbasert**: I motsetning til Facebook vekter TikTok innholdets egenskaper mer enn sosiale forbindelser.

**Hvorfor den er effektiv:**
- Den trenger ikke at du følger noen for å anbefale innhold
- Korte videoer gir mange interaksjoner per minutt
- Den oppdager nisjeinteresser andre plattformer ville brukt lengre tid på
- «Rabbit holes»: Brukeren kan havne i stadig dypere nisjer

**Potensielle problemer:**
- Svært effektiv til å skape avhengighet
- Kan lede brukere mot stadig mer ekstremt innhold
- Vanskelig for brukeren å styre hva de eksponeres for`,
    },
    {
      id: 'mi-7-2-ex-1',
      type: 'exercise',
      title: 'Oppgave 7.2.1',
      exercise: {
        id: 'mi-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        task: 'Hva er en filterboble?',
        options: [
          { id: 'a', text: 'Et verktøy for å blokkere uønsket reklame', isCorrect: false },
          { id: 'b', text: 'Et personalisert informasjonsunivers der algoritmer filtrerer bort innhold som ikke matcher brukerens preferanser', isCorrect: true },
          { id: 'c', text: 'En type kryptering som beskytter personvernet', isCorrect: false },
          { id: 'd', text: 'En funksjon for å sortere innhold etter dato', isCorrect: false },
        ],
        solution: 'En filterboble er et personalisert informasjonsunivers som oppstår når algoritmer filtrerer informasjon basert på brukerens tidligere atferd, slik at brukeren hovedsakelig ser innhold som bekrefter eksisterende interesser og synspunkter.',
      },
    },
    {
      id: 'mi-7-2-ex-2',
      type: 'exercise',
      title: 'Oppgave 7.2.2',
      exercise: {
        id: 'mi-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom en filterboble og et ekkokammer.',
        solution: 'En filterboble skapes av algoritmene selv, som automatisk filtrerer innhold basert på brukerens data. Et ekkokammer er et bredere fenomen der man hovedsakelig omgir seg med likesinnede og kun hører meninger som bekrefter ens egen. Ekkokamre kan forsterkes av algoritmer, men oppstår også gjennom bevisste valg av venner, grupper og medier. Begge fenomenene kan redusere eksponering for andre perspektiver.',
      },
    },
    {
      id: 'mi-7-2-ex-3',
      type: 'exercise',
      title: 'Oppgave 7.2.3',
      exercise: {
        id: 'mi-7-2-ex-3',
        number: '7.2.3',
        type: 'multiple-choice',
        task: 'Hvilken type innhold prioriterer algoritmene typisk?',
        options: [
          { id: 'a', text: 'Nøkternt og balansert innhold', isCorrect: false },
          { id: 'b', text: 'Det nyeste innholdet uavhengig av tema', isCorrect: false },
          { id: 'c', text: 'Innhold som vekker sterke følelser og skaper engasjement', isCorrect: true },
          { id: 'd', text: 'Innhold fra offentlige myndigheter', isCorrect: false },
        ],
        solution: 'Forskning viser at algoritmene prioriterer innhold som skaper engasjement, og sterke følelser som sinne, beundring og frykt er mest effektivt for å skape engasjement. Dette betyr at følelsesladet og provoserende innhold systematisk prioriteres over nøkternt, nyansert innhold.',
      },
    },
    {
      id: 'mi-7-2-summary',
      type: 'text',
      content: `## Oppsummering

- **Algoritmer** bestemmer hvilket innhold du ser i sosiale medier
- Personaliseringen er designet for å maksimere **engasjement og tidsbruk**
- **Filterbobler** kan begrense tilgangen til informasjon og alternative perspektiver
- **Ekkokamre** forsterkes av algoritmer og selvvalgte nettverk
- Konsekvensene kan inkludere **polarisering** og fragmentering av den offentlige samtalen
- Forskningen er nyansert, og det er viktig å unngå å overdrive algoritmenes makt`,
    },
    {
      id: 'mi-7-2-samleoppgave',
      type: 'exercise',
      title: 'Samleoppgave 7.2',
      exercise: {
        id: 'mi-7-2-samle',
        number: '7.2.S',
        type: 'classic',
        task: 'Undersøk din egen «For deg»-side på TikTok eller Utforsk-siden på Instagram. Beskriv hva du ser, og analyser hvordan algoritmen kan ha formet dette utvalget basert på din tidligere atferd. Diskuter om du opplever at du er i en filterboble.',
        hints: ['Legg merke til gjentakende temaer, hva slags innhold som dominerer, og om du ser synspunkter du er uenig med.'],
        solution: 'Et godt svar inneholder en konkret beskrivelse av innholdstyper og temaer som dominerer, refleksjon over egne brukervaner som kan ha formet algoritmen, vurdering av om man eksponeres for andre perspektiver, og en kritisk diskusjon av om man opplever filterboble-effekter.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Influensere og innholdsmarkedsføring
// ============================================================================

export const CHAPTER_MEDIEINFO_1_7_3: TextbookChapter = {
  id: 'medieinfo-1-7-3',
  courseId: 'medieinfo-1',
  chapterNumber: '7.3',
  title: 'Influensere og innholdsmarkedsføring',
  description: 'Influenserkultur, sponsing, skillet mellom redaksjonelt innhold og reklame, autentisitet og regulering.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere influenseres rolle i dagens medielandskap',
    'gjøre rede for regler om merking av reklame i sosiale medier',
    'drøfte grensen mellom autentisk innhold og kommersiell påvirkning',
  ],
  keyTerms: [
    { term: 'Influenser', definition: 'En person som har bygget opp en følgerbase i sosiale medier og som har innflytelse over følgernes meninger, holdninger og kjøpsbeslutninger.' },
    { term: 'Innholdsmarkedsføring', definition: 'Markedsføring som er utformet for å ligne redaksjonelt eller personlig innhold snarere enn tradisjonell reklame, ofte gjennom samarbeid med influensere.' },
    { term: 'Markedsføringsloven', definition: 'Norsk lov som regulerer reklame og markedsføring, og som blant annet krever at reklame skal være tydelig merket og gjenkjennelig som reklame.' },
    { term: 'Skjult reklame', definition: 'Reklame som fremstår som redaksjonelt innhold eller personlige anbefalinger uten å være tydelig merket, noe som er ulovlig i Norge.' },
  ],
  content: [
    {
      id: 'mi-7-3-intro',
      type: 'text',
      content: `## Influensere som mediefenomen

Influensere er blitt en sentral del av medielandskapet. Fra YouTube-stjerner til TikTok-profiler, Instagram-influensere og podkastverter - mennesker som har bygget store følgerskarer har fått en unik posisjon mellom underholdning, journalistikk og reklame.

I dette kapittelet skal du lære om influenserøkonomien, regelverket for merking av reklame, og den pågående debatten om autentisitet og ansvar.`,
    },
    {
      id: 'mi-7-3-def-influenser',
      type: 'definition',
      title: 'Influenser',
      content: 'En influenser er en person som har bygget opp en følgerbase i sosiale medier og som kan påvirke følgernes meninger, holdninger eller handlinger. Influensere kategoriseres ofte etter størrelse: nano (under 10 000 følgere), mikro (10 000-100 000), makro (100 000-1 million) og mega (over 1 million). Mange influensere lever av sponsorsamarbeid med merkevarer.',
    },
    {
      id: 'mi-7-3-text-okonomi',
      type: 'text',
      content: `### Influenserøkonomien

**Inntektskilder for influensere:**
- Sponsede poster og samarbeid med merkevarer
- Affiliate-lenker (provisjon ved salg)
- Egne produkter (merch, kurs, bøker)
- Annonseinntekter fra plattformen (YouTube, TikTok)
- Direkte støtte fra følgere (Patreon, donasjoner)

**Hvorfor bruker bedrifter influensere?**
- Følgerne har tillit til influenseren
- Budskapet oppleves mer autentisk enn tradisjonell reklame
- Målrettet: Influenseren når en bestemt målgruppe
- Høyt engasjement sammenlignet med tradisjonelle annonser
- Mikroinfluensere kan ha høyere troverdighet enn store profiler

**Utfordringer:**
- Grensen mellom personlig innhold og reklame er uklar
- Følgere kan bli påvirket uten å være bevisst på det
- Barn og unge er spesielt sårbare
- Influensere kan fremme urealistiske forventninger`,
    },
    {
      id: 'mi-7-3-def-markedsforingsloven',
      type: 'definition',
      title: 'Merking av reklame',
      content: 'Markedsføringsloven krever at reklame skal være tydelig merket og umiddelbart gjenkjennelig som reklame. Forbrukertilsynet håndhever reglene og krever at ord som «annonse» eller «reklame» skal brukes tydelig. Merking med kun hashtags som #ad eller #samarbeid er ikke tilstrekkelig etter norsk lov. Reglene gjelder uavhengig av om influenseren har fått betaling, gratis produkter eller andre fordeler.',
    },
    {
      id: 'mi-7-3-text-autentisitet',
      type: 'text',
      content: `### Autentisitet og troverdighet

**Autentisitetsparadokset:**
Influenseres verdi ligger i at de oppleves som ekte og ærlige. Men jo mer kommersielt innholdet blir, jo vanskeligere er det å opprettholde inntrykket av autentisitet. Dette skaper et paradoks: Influensere må fremstå som ekte for å ha verdi for annonsørene, men selve reklameavtalen undergraver opplevelsen av ekthet.

**Strategier for å opprettholde autentisitet:**
- Velge samarbeid som «passer» med egen profil
- Være åpen om sponsing og betalte samarbeid
- Gi ærlige vurderinger, også av sponsede produkter
- Begrense antall kommersielle samarbeid

**Kritiske perspektiver:**
- Er det mulig å gi en ærlig vurdering av et produkt du er betalt for å promotere?
- Hvordan påvirker det følgerne når forbilder anbefaler produkter for betaling?
- Har influensere et redaktøransvar for innholdet de deler?
- Hvem beskytter barn og unge mot urimelig påvirkning?`,
    },
    {
      id: 'mi-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Merking av reklame i praksis',
      problem: 'En influenser med 50 000 følgere får tilsendt en gratis hudkrem fra et kosmetikkselskap. Hun lager en Instagram-story der hun sier at hun elsker produktet, men merker ikke innholdet som reklame. Hva sier loven?',
      solution: `**Analyse:**

**Situasjonen:** Influenseren har mottatt en fordel (gratis produkt) fra en kommersiell aktør og omtaler produktet positivt. Dette er markedsføring etter loven.

**Regelverket:**
- Markedsføringsloven krever at all reklame skal merkes tydelig
- Forbrukertilsynets veileder slår fast at også gratisprodukter utløser merkeplikten
- Merkingen må være umiddelbart synlig (ikke gjemt i hashtags nederst)
- Ordet «annonse» eller «reklame» bør brukes tydelig

**Hva hun burde gjort:**
- Merket storyen med «Annonse» eller «Reklame» øverst i bildet
- Sagt muntlig at produktet er tilsendt gratis
- Alternativt: Latt være å omtale produktet, eller returnert det

**Konsekvenser ved brudd:**
- Forbrukertilsynet kan gi pålegg om å fjerne innholdet
- Ved gjentatte brudd kan det ilegges overtredelsesgebyr
- Tilsynet har de siste årene trappet opp håndhevingen`,
    },
    {
      id: 'mi-7-3-ex-1',
      type: 'exercise',
      title: 'Oppgave 7.3.1',
      exercise: {
        id: 'mi-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        task: 'Når er en influenser pliktig til å merke innholdet som reklame?',
        options: [
          { id: 'a', text: 'Bare når de har fått direkte betaling i penger', isCorrect: false },
          { id: 'b', text: 'Når de har fått betaling, gratis produkter eller andre fordeler', isCorrect: true },
          { id: 'c', text: 'Bare når de har over 100 000 følgere', isCorrect: false },
          { id: 'd', text: 'Bare når de legger ut på YouTube, ikke på Instagram', isCorrect: false },
        ],
        solution: 'Merkeplikten gjelder når influenseren har mottatt noen form for fordel fra en kommersiell aktør - enten det er penger, gratisprodukter, rabattkoder, reiser eller andre fordeler. Det spiller ingen rolle hvor mange følgere man har eller hvilken plattform som brukes.',
      },
    },
    {
      id: 'mi-7-3-ex-2',
      type: 'exercise',
      title: 'Oppgave 7.3.2',
      exercise: {
        id: 'mi-7-3-ex-2',
        number: '7.3.2',
        type: 'classic',
        task: 'Forklar «autentisitetsparadokset» som influensere står overfor og diskuter hvordan det påvirker troverdigheten deres.',
        solution: 'Autentisitetsparadokset handler om at influenseres verdi for annonsører er avhengig av at de fremstår som ekte og troverdige. Men når innholdet blir kommersielt, undergraves nettopp denne ekte opplevelsen. Jo flere betalte samarbeid, desto vanskeligere er det for følgerne å vite hva som er en genuin anbefaling og hva som er betalt. Dette kan over tid svekke tilliten til influenseren.',
      },
    },
    {
      id: 'mi-7-3-ex-3',
      type: 'exercise',
      title: 'Oppgave 7.3.3',
      exercise: {
        id: 'mi-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        task: 'Drøft om influensere bør ha et redaktøransvar for innholdet de deler med følgerne sine.',
        solution: 'Argumenter for: Influensere har stor påvirkningskraft, spesielt overfor unge. De bør ha ansvar for at informasjonen de deler er korrekt og ikke skadelig. Argumenter mot: Influensere er privatpersoner som deler sine meninger, ikke journalister. Det er vanskelig å regulere hva privatpersoner sier. Midt imellom: Graden av ansvar kan avhenge av antall følgere, tema og målgruppe. Reklame er allerede regulert, men kanskje bør det stilles strengere krav til andre typer innhold også.',
      },
    },
    {
      id: 'mi-7-3-summary',
      type: 'text',
      content: `## Oppsummering

- **Influensere** er blitt en viktig del av medielandskapet og reklamebransjen
- **Innholdsmarkedsføring** gjennom influensere fungerer fordi det oppleves mer autentisk enn tradisjonell reklame
- Norsk lov krever **tydelig merking** av alt kommersielt innhold i sosiale medier
- **Autentisitetsparadokset** viser spenningen mellom å fremstå ekte og å tjene penger
- Det pågår en viktig debatt om influenseres **ansvar** overfor følgerne og samfunnet`,
    },
    {
      id: 'mi-7-3-samleoppgave',
      type: 'exercise',
      title: 'Samleoppgave 7.3',
      exercise: {
        id: 'mi-7-3-samle',
        number: '7.3.S',
        type: 'classic',
        task: 'Velg en norsk influenser og analyser fem nylige poster. Undersøk om det finnes kommersiell innhold, om det er tydelig merket, og vurder hvor godt influenseren balanserer mellom personlig innhold og reklame.',
        hints: ['Se etter merking som «annonse», «samarbeid», «gifted» og lignende.'],
        solution: 'Et godt svar identifiserer konkrete poster, vurderer om merkeplikten er oppfylt, diskuterer om merkingen er tydelig nok, og reflekterer over forholdet mellom kommersielt og ikke-kommersielt innhold hos den valgte influenseren.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Nettkultur og deltakelseskultur
// ============================================================================

export const CHAPTER_MEDIEINFO_1_7_4: TextbookChapter = {
  id: 'medieinfo-1-7-4',
  courseId: 'medieinfo-1',
  chapterNumber: '7.4',
  title: 'Nettkultur og deltakelseskultur',
  description: 'Memer, viralitet, fandom, digital aktivisme og internettkultur som kulturelt uttrykk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere ulike former for deltakelseskultur på nett',
    'forklare hvordan memer og viralitet fungerer som kulturelle uttrykk',
    'drøfte potensialet og begrensningene ved digital aktivisme',
  ],
  keyTerms: [
    { term: 'Deltakelseskultur', definition: 'En kultur der forbrukerne ikke bare konsumerer medieinnhold, men også skaper, deler og remikser innhold. Terskelen for deltakelse er lav, og fellesskapet verdsetter bidrag fra medlemmene.' },
    { term: 'Mem (meme)', definition: 'En idé, et bilde, en video eller en tekst som spres og endres gjennom deling på internett. Memer er ofte humoristiske og kommenterer aktuelle hendelser eller kulturelle fenomener.' },
    { term: 'Viralitet', definition: 'Fenomenet der innhold spres raskt og bredt gjennom sosiale nettverk, ofte drevet av at mange brukere deler det videre i kort tid.' },
    { term: 'Slacktivisme', definition: 'Kritisk begrep for lavterskel digital aktivisme som likes, delinger og underskriftskampanjer, der deltakelsen har liten reell effekt utover å gi deltakerne en følelse av å ha bidratt.' },
  ],
  content: [
    {
      id: 'mi-7-4-intro',
      type: 'text',
      content: `## Internett som kulturarena

Internett og sosiale medier har ikke bare endret hvordan vi kommuniserer, men også hvordan kultur skapes. Memer sprer seg på sekunder, hvem som helst kan publisere innhold, og digitale fellesskap oppstår rundt felles interesser. Medieviteren Henry Jenkins kaller dette en **deltakelseskultur** - en kultur der skillet mellom produsent og konsument er visket ut.

I dette kapittelet skal du lære om de viktigste kulturelle fenomenene som preger nettet.`,
    },
    {
      id: 'mi-7-4-def-deltakelseskultur',
      type: 'definition',
      title: 'Deltakelseskultur',
      content: 'Deltakelseskultur, et begrep utviklet av medieforskeren Henry Jenkins, beskriver en kultur der vanlige mennesker er aktive medskapere av medieinnhold, ikke bare passive mottakere. Kjennetegn er lav terskel for kreativt uttrykk, støtte for deling, uformell opplæring mellom erfarne og nybegynnere, og en opplevelse av at bidragene betyr noe.',
    },
    {
      id: 'mi-7-4-text-memer',
      type: 'text',
      content: `### Memer som kulturelt uttrykk

**Hva er et mem?**
Et mem er en kulturell enhet som spres og endres gjennom deling. Begrepet ble opprinnelig brukt av biologen Richard Dawkins i 1976 om kulturell «arv», men har i dag fått en spesifikk nettbetydning: bilder, videoer eller tekster som spres og remikses på internett.

**Kjennetegn ved memer:**
- De spres gjennom imitasjon og variasjon
- De bygger på felles referanserammer
- De kommenterer ofte aktuelle hendelser
- De er som regel humoristiske eller satiriske
- De utvikler seg over tid gjennom remiks

**Typer memer:**
- **Bildememer**: Bilde med tekst som varieres (f.eks. «Drake-memet»)
- **Videomemer**: Korte klipp som remikses og deles (dansetrender, lydtrender)
- **Tekstmemer**: Kopier-og-lim-tekster, interne vitser i nettsamfunn
- **Format-memer**: Et gjenkjennelig format som fylles med nytt innhold

**Memer som kommunikasjon:**
Memer er ikke bare underholdning. De fungerer som et eget kommunikasjonsspråk som kan uttrykke politiske holdninger, kulturkritikk og fellesskapstilhørighet. Å forstå og bruke memer er en form for digital kompetanse.`,
    },
    {
      id: 'mi-7-4-text-viralitet',
      type: 'text',
      content: `### Viralitet og spredning

**Hva gjør innhold viralt?**
Forskning viser at innhold som spres bredt ofte har disse egenskapene:
- Vekker **sterke følelser** (glede, overraskelse, sinne, ærefrykt)
- Er **enkelt å forstå** og dele videre
- Gir **sosial valuta** (man fremstår som morsom, informert eller engasjert)
- Har en **praktisk nytteverdi** (tips, livshacks)
- Er knyttet til en **aktuell hendelse** eller trend

**Viralitetens mekanismer:**
1. En person lager eller deler innhold
2. Noen i nettverket liker og deler videre
3. Algoritmene registrerer engasjement og sprer innholdet bredere
4. Nye nettverk eksponeres, og delingen akselererer
5. Tradisjonelle medier kan plukke opp innholdet

**Fandom og nettsamfunn:**
Internett har gjort det mulig for mennesker med nisjeinteresser å finne hverandre. Fandom-kulturer rundt TV-serier, spill, artister og bøker skaper aktive fellesskap der deltakerne skriver fan-fiksjon, lager kunst, diskuterer teorier og organiserer seg.`,
    },
    {
      id: 'mi-7-4-def-slacktivisme',
      type: 'definition',
      title: 'Digital aktivisme og slacktivisme',
      content: 'Digital aktivisme bruker sosiale medier og nettverktøy for å fremme politiske eller sosiale saker gjennom kampanjer, underskrifter, hashtags og informasjonsdeling. Kritikere bruker begrepet slacktivisme om lavterskel digitale handlinger (likes, delinger) som gir deltakeren en følelse av å ha bidratt uten å skape reell endring. Tilhengere mener digital aktivisme senker terskelen for engasjement og kan mobilisere store grupper raskt.',
    },
    {
      id: 'mi-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Fra hashtag til handling',
      problem: 'Kan digital aktivisme føre til reelle endringer, eller er det bare slacktivisme? Analyser et eksempel.',
      solution: `**Eksempel: #MeToo-bevegelsen**

**Bakgrunn:** I oktober 2017 oppfordret skuespiller Alyssa Milano folk til å dele sine erfaringer med seksuell trakassering under hashtagen #MeToo. Begrepet var opprinnelig skapt av aktivisten Tarana Burke i 2006.

**Digital spredning:**
- Hashtagen ble brukt over 12 millioner ganger de første 24 timene
- Spredde seg globalt og på tvers av plattformer
- I Norge ble kampanjen tilpasset ulike bransjer (#stilleansen, #nårmusikkenstilner)

**Reelle konsekvenser:**
- Mektige personer ble stilt til ansvar
- Lovendringer i flere land
- Endrede normer og rutiner i arbeidslivet
- Debatt om trakassering ble normalisert

**Kritikk:**
- Fare for unyansert «dømming» i sosiale medier
- Ikke alle anklager ble etterprøvd
- Noen mente det gikk for langt

**Konklusjon:** #MeToo viser at digital aktivisme kan skape reell endring, men det krever at den digitale mobiliseringen kobles til konkrete handlinger og institusjoner utenfor nettet.`,
    },
    {
      id: 'mi-7-4-ex-1',
      type: 'exercise',
      title: 'Oppgave 7.4.1',
      exercise: {
        id: 'mi-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en deltakelseskultur ifølge Henry Jenkins?',
        options: [
          { id: 'a', text: 'At profesjonelle medier har full kontroll over innholdet', isCorrect: false },
          { id: 'b', text: 'At vanlige mennesker aktivt skaper, deler og remikser medieinnhold', isCorrect: true },
          { id: 'c', text: 'At algoritmer bestemmer alt innhold', isCorrect: false },
          { id: 'd', text: 'At bare eksperter kan publisere på nett', isCorrect: false },
        ],
        solution: 'Deltakelseskultur kjennetegnes av at vanlige mennesker er aktive medskapere av medieinnhold, med lav terskel for deltakelse og kreativt uttrykk. Skillet mellom produsent og konsument er visket ut.',
      },
    },
    {
      id: 'mi-7-4-ex-2',
      type: 'exercise',
      title: 'Oppgave 7.4.2',
      exercise: {
        id: 'mi-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        task: 'Velg et mem du kjenner til og analyser det: Hva kommenterer det? Hvilke kulturelle referanser bygger det på? Hvorfor spres det?',
        solution: 'Et godt svar identifiserer et konkret mem, forklarer hva det handler om eller kommenterer, beskriver de kulturelle referansene man trenger for å forstå det, og diskuterer hva som gjør det delbart (humor, gjenkjennelighet, aktualitet, sosial valuta).',
      },
    },
    {
      id: 'mi-7-4-ex-3',
      type: 'exercise',
      title: 'Oppgave 7.4.3',
      exercise: {
        id: 'mi-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        task: 'Drøft om digital aktivisme er effektiv eller bare slacktivisme. Bruk minst ett konkret eksempel i svaret ditt.',
        solution: 'Et godt svar presenterer argumenter for begge sider. For effektivitet: Lav terskel mobiliserer mange, kan skape oppmerksomhet og press, eksempler som #MeToo og klimastreiker som startet digitalt. For slacktivisme: Å like en post krever lite innsats, kan erstatte reell handling, mange kampanjer fører ikke til endring. En balansert konklusjon anerkjenner at digital aktivisme kan være et startpunkt som må kobles til handling utenfor nettet for å ha varig effekt.',
      },
    },
    {
      id: 'mi-7-4-summary',
      type: 'text',
      content: `## Oppsummering

- **Deltakelseskultur** betyr at alle kan være medskapere av medieinnhold
- **Memer** er et eget kulturelt språk som spres og remikses på nettet
- **Viralitet** drives av følelser, enkel deling og algoritmisk forsterkning
- **Fandom** og nettsamfunn skaper aktive fellesskap rundt felles interesser
- **Digital aktivisme** kan mobilisere store grupper, men kritiseres som slacktivisme når den ikke fører til konkret handling`,
    },
    {
      id: 'mi-7-4-samleoppgave',
      type: 'exercise',
      title: 'Samleoppgave 7.4',
      exercise: {
        id: 'mi-7-4-samle',
        number: '7.4.S',
        type: 'classic',
        task: 'Velg et nettsamfunn eller en fandom du kjenner til. Beskriv fellesskapet og analyser det som et eksempel på deltakelseskultur: Hvem deltar? Hva skapes? Hvordan deles det? Hva motiverer deltakerne?',
        hints: ['Det kan være et subreddit, en Discord-server, en fandom på Tumblr, et gaming-fellesskap eller lignende.'],
        solution: 'Et godt svar gir en konkret beskrivelse av fellesskapet, analyserer det ved hjelp av Jenkins begrep om deltakelseskultur, identifiserer typene innhold som skapes og deles, og reflekterer over motivasjonen bak deltakelsen (tilhørighet, kreativitet, læring, status).',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5: Digital kompetanse og nettvett
// ============================================================================

export const CHAPTER_MEDIEINFO_1_7_5: TextbookChapter = {
  id: 'medieinfo-1-7-5',
  courseId: 'medieinfo-1',
  chapterNumber: '7.5',
  title: 'Digital kompetanse og nettvett',
  description: 'Digitalt medborgerskap, personvern, nettmobbing, kildekritikk og ansvarlig bruk av sosiale medier.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for sentrale prinsipper for digitalt medborgerskap',
    'drøfte personvernets betydning i en digital hverdag',
    'analysere utfordringer knyttet til nettmobbing og digital trakassering',
    'vurdere egen og andres digitale kompetanse kritisk',
  ],
  keyTerms: [
    { term: 'Digitalt medborgerskap', definition: 'Evnen til å delta aktivt, ansvarlig og kritisk i det digitale samfunnet. Inkluderer kunnskap om rettigheter, personvern, kildekritikk, nettvett og etisk bruk av teknologi.' },
    { term: 'Personvern', definition: 'Retten til å kontrollere informasjon om seg selv. I digital sammenheng handler det om beskyttelse av personopplysninger, samtykke til databehandling, og retten til å vite hva som lagres om en.' },
    { term: 'GDPR', definition: 'EUs personvernforordning (General Data Protection Regulation) som gir innbyggere rett til innsyn, sletting og kontroll over egne persondata. Gjelder i Norge gjennom EØS-avtalen.' },
    { term: 'Nettmobbing', definition: 'Gjentatt trakassering, utestengelse eller krenkelse av en person gjennom digitale kanaler som sosiale medier, chat og meldingstjenester.' },
    { term: 'Digitalt fotavtrykk', definition: 'Summen av alle data og spor man legger igjen på nett gjennom aktivitet i sosiale medier, søk, netthandel og annen digital bruk.' },
  ],
  content: [
    {
      id: 'mi-7-5-intro',
      type: 'text',
      content: `## Å leve i et digitalt samfunn

De fleste av oss bruker sosiale medier daglig, og det meste av informasjon, kommunikasjon og underholdning skjer gjennom digitale kanaler. Med denne digitaliseringen følger nye muligheter, men også nye utfordringer: Hvordan beskytter vi personvernet vårt? Hvordan oppfører vi oss ansvarlig på nett? Og hva gjør vi når noen bruker digitale verktøy til å skade andre?

I dette kapittelet lærer du om digitalt medborgerskap - å være en ansvarlig, kritisk og trygg deltaker i det digitale samfunnet.`,
    },
    {
      id: 'mi-7-5-def-medborgerskap',
      type: 'definition',
      title: 'Digitalt medborgerskap',
      content: 'Digitalt medborgerskap handler om å kunne delta i det digitale samfunnet på en kompetent, trygg og ansvarlig måte. Det inkluderer tekniske ferdigheter, kildekritikk, forståelse av personvern, etisk bevissthet, kunnskap om rettigheter og plikter, og evne til å bruke digitale verktøy til å delta i demokratiet.',
    },
    {
      id: 'mi-7-5-text-personvern',
      type: 'text',
      content: `### Personvern i den digitale hverdagen

**Hva er personvern?**
Personvern er retten til å kontrollere informasjon om deg selv. I en digital verden der enorme mengder data samles inn, er dette en stadig viktigere rettighet.

**GDPR og dine rettigheter:**
EUs personvernforordning (GDPR) gir deg blant annet:
- **Rett til innsyn**: Du kan be om å se hva et selskap lagrer om deg
- **Rett til sletting**: Du kan kreve at data om deg slettes
- **Rett til samtykke**: Selskaper må ha ditt samtykke for å bruke dataene
- **Rett til dataportabilitet**: Du kan flytte dataene dine mellom tjenester
- **Rett til å protestere**: Du kan si nei til profilering og automatiserte beslutninger

**Digitalt fotavtrykk:**
Alt du gjør på nett etterlater spor:
- Poster og kommentarer i sosiale medier
- Søkehistorikk og nettleserdata
- Handelshistorikk og betalingsinformasjon
- Bilder og videoer du deler
- Plasseringsdata fra telefonen

Disse sporene kan være vanskelige å fjerne helt og kan dukke opp igjen i uventede sammenhenger, for eksempel ved jobbsøking.`,
    },
    {
      id: 'mi-7-5-def-nettmobbing',
      type: 'definition',
      title: 'Nettmobbing',
      content: 'Nettmobbing (også kalt digital mobbing eller cybermobbing) er gjentatte negative handlinger mot en person gjennom digitale kanaler. Det kan ta form av utestenging fra grupper, spredning av rykterbilde eller skjermbilder, hatefulle meldinger, identitetstyveri, og offentlig ydmykelse. Nettmobbing skiller seg fra tradisjonell mobbing ved at den kan skje når som helst, nå et stort publikum raskt, og være vanskelig å unnslippe.',
    },
    {
      id: 'mi-7-5-text-nettmobbing',
      type: 'text',
      content: `### Nettmobbing og digital trakassering

**Former for nettmobbing:**
- **Utestenging**: Bevisst ekskludering fra grupper, samtaler eller arrangementer
- **Trakassering**: Gjentatte krenkende meldinger, kommentarer eller henvendelser
- **Deling av privat innhold**: Spredning av bilder, skjermbilder eller informasjon uten samtykke
- **Identitetskrenkelser**: Opprette falske profiler eller hacke andres kontoer
- **Offentlig ydmykelse**: Legge ut ydmykende innhold som mange kan se

**Hvorfor nettmobbing er alvorlig:**
- Offeret har ingen fristed - mobilen er alltid på
- Innhold kan spres raskt til mange
- Det kan være vanskelig å identifisere mobberne (anonymitet)
- Digitalt innhold kan være vanskelig å fjerne permanent
- Konsekvenser for psykisk helse kan være alvorlige

**Hva kan du gjøre?**
- **Hvis du blir utsatt**: Ikke svar, ta skjermbilder som dokumentasjon, blokker personen, snakk med en voksen du stoler på, meld fra til plattformen
- **Hvis du ser det skje**: Si fra at det ikke er greit, støtt den som rammes, meld fra til voksne
- **Forebygging**: Tenk over hva du deler og hvordan du oppfører deg på nett`,
    },
    {
      id: 'mi-7-5-text-kildekritikk',
      type: 'text',
      content: `### Kildekritikk og desinformasjon

I en tid med enorme mengder informasjon er kildekritikk viktigere enn noen gang.

**Sjekkliste for kildekritikk:**
- **Hvem** står bak innholdet? Er det en troverdig avsender?
- **Hva** er formålet? Informere, overbevise, selge, underholde?
- **Når** er det publisert? Er det oppdatert?
- **Hvorfor** deles dette med deg? Hvem tjener på at du tror på det?
- **Hvor** er dokumentasjonen? Finnes det andre kilder som bekrefter det?

**Vanlige former for feilinformasjon:**
- **Desinformasjon**: Bevisst falsk informasjon laget for å villede
- **Misinformasjon**: Feilaktig informasjon som spres uten ond hensikt
- **Manipulert innhold**: Ekte innhold som er tatt ut av kontekst eller endret
- **Satire misforstått som fakta**: Humoristisk innhold som tas bokstavelig

**Tips for å unngå å bli lurt:**
- Sjekk kilden og avsenderen
- Les hele saken, ikke bare overskriften
- Vær ekstra kritisk til innhold som vekker sterke følelser
- Bruk faktasjekkingstjenester
- Vent med å dele til du har verifisert innholdet`,
    },
    {
      id: 'mi-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Digitalt fotavtrykk ved jobbsøking',
      problem: 'En 25-åring søker drømmejobben, men oppdager at en arbeidsgiver har googlet henne og funnet gamle festbilder og umodne kommentarer fra da hun var 16. Hva kan hun lære av dette?',
      solution: `**Situasjonen:**
En nyutdannet søker sin første jobb. Arbeidsgiveren søker opp kandidater på nett som del av rekrutteringsprosessen og finner innhold fra tenårene.

**Læringspunkter:**

1. **Internett glemmer ikke**: Innhold som legges ut kan bli værende i årevis, selv om man sletter det fra sin egen profil (andre kan ha delt eller lagret det).

2. **Kontekst forsvinner**: Noe som var morsomt mellom venner som 16-åring kan se helt annerledes ut for en fremtidig arbeidsgiver.

3. **Tiltak i ettertid:**
   - Be om sletting fra plattformene (GDPR gir rett til dette)
   - Google seg selv jevnlig for å se hva som er synlig
   - Kontakte nettsteder direkte og be om fjerning
   - Bygge opp positivt digitalt innhold som «overdøver» det gamle

4. **Forebygging:**
   - Tenk over hva du deler og hvem som kan se det
   - Bruk personverninnstillinger aktivt
   - Husk at arbeidsgivere, skoler og andre kan søke deg opp
   - Spør deg selv: Vil jeg være komfortabel med at alle ser dette om fem år?`,
    },
    {
      id: 'mi-7-5-ex-1',
      type: 'exercise',
      title: 'Oppgave 7.5.1',
      exercise: {
        id: 'mi-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        task: 'Hvilken rettighet gir GDPR deg?',
        options: [
          { id: 'a', text: 'Rett til ubegrenset gratis internett', isCorrect: false },
          { id: 'b', text: 'Rett til innsyn i og sletting av persondata selskaper lagrer om deg', isCorrect: true },
          { id: 'c', text: 'Rett til å publisere hva som helst på nett uten konsekvenser', isCorrect: false },
          { id: 'd', text: 'Rett til å være anonym i alle digitale tjenester', isCorrect: false },
        ],
        solution: 'GDPR gir deg blant annet rett til innsyn i hva selskaper lagrer om deg, rett til å kreve sletting av dataene, rett til å samtykke før data samles inn, og rett til å flytte dataene dine mellom tjenester.',
      },
    },
    {
      id: 'mi-7-5-ex-2',
      type: 'exercise',
      title: 'Oppgave 7.5.2',
      exercise: {
        id: 'mi-7-5-ex-2',
        number: '7.5.2',
        type: 'classic',
        task: 'Forklar hva et digitalt fotavtrykk er og gi tre konkrete råd for hvordan man kan beskytte sitt eget.',
        solution: 'Et digitalt fotavtrykk er summen av alle spor man legger igjen på nett: poster, søk, kjøp, bilder, kommentarer og lignende. Råd: 1) Bruk strenge personverninnstillinger på sosiale medier og begrens hvem som kan se innholdet ditt. 2) Tenk deg om før du deler - spør om du vil at alle kan se dette om fem år. 3) Google deg selv jevnlig for å se hva som er offentlig tilgjengelig, og be om sletting av uønsket innhold.',
      },
    },
    {
      id: 'mi-7-5-ex-3',
      type: 'exercise',
      title: 'Oppgave 7.5.3',
      exercise: {
        id: 'mi-7-5-ex-3',
        number: '7.5.3',
        type: 'multiple-choice',
        task: 'Hva skiller nettmobbing fra tradisjonell mobbing?',
        options: [
          { id: 'a', text: 'Nettmobbing er ikke like alvorlig', isCorrect: false },
          { id: 'b', text: 'Nettmobbing kan skje når som helst, nå mange raskt, og er vanskelig å unnslippe', isCorrect: true },
          { id: 'c', text: 'Nettmobbing forekommer bare mellom ukjente', isCorrect: false },
          { id: 'd', text: 'Nettmobbing er alltid anonym', isCorrect: false },
        ],
        solution: 'Nettmobbing skiller seg fra tradisjonell mobbing ved at den kan skje hele døgnet (man kan ikke bare «gå hjem» fra den), innhold kan spres til et stort publikum svært raskt, og digitalt innhold kan være vanskelig å fjerne permanent. Nettmobbing kan være minst like alvorlig som tradisjonell mobbing.',
      },
    },
    {
      id: 'mi-7-5-ex-4',
      type: 'exercise',
      title: 'Oppgave 7.5.4',
      exercise: {
        id: 'mi-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom desinformasjon og misinformasjon og gi et eksempel på hver.',
        solution: 'Desinformasjon er bevisst falsk informasjon som lages og spres med hensikt å villede, for eksempel propaganda eller fabrikkerte nyheter designet for å påvirke valg. Misinformasjon er feilaktig informasjon som spres uten ond hensikt, for eksempel når noen deler en artikkel med feil faktaopplysninger fordi de tror den er sann. Forskjellen ligger altså i intensjonen: Desinformasjon er bevisst, misinformasjon er utilsiktet.',
      },
    },
    {
      id: 'mi-7-5-summary',
      type: 'text',
      content: `## Oppsummering

- **Digitalt medborgerskap** handler om å være en ansvarlig og kompetent deltaker i det digitale samfunnet
- **Personvern** og GDPR gir deg rettigheter over egne data
- **Digitalt fotavtrykk** kan ha langsiktige konsekvenser
- **Nettmobbing** er et alvorlig problem som krever forebygging og håndtering
- **Kildekritikk** er avgjørende for å skille fakta fra feilinformasjon
- Bevisst og ansvarlig bruk av digitale medier er en kompetanse alle trenger`,
    },
    {
      id: 'mi-7-5-samleoppgave',
      type: 'exercise',
      title: 'Samleoppgave 7.5',
      exercise: {
        id: 'mi-7-5-samle',
        number: '7.5.S',
        type: 'classic',
        task: 'Lag en veileder for digital kompetanse rettet mot elever på ungdomsskolen. Veilederen skal inneholde minst fem konkrete råd og dekke temaene personvern, nettmobbing og kildekritikk.',
        hints: ['Tenk på hva du selv skulle ønske du visste da du begynte å bruke sosiale medier.'],
        solution: 'Et godt svar inneholder minst fem konkrete, forståelige råd tilpasset ungdomsskoleelever, dekker alle tre temaene, og forklarer hvorfor rådene er viktige. Eksempler: Tenk over personverninnstillinger, del aldri passord, vær kritisk til det du leser, si fra til voksne om nettmobbing, og sjekk kilder før du deler videre.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const MEDIEINFO_1_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MEDIEINFO_1_7_1,
  CHAPTER_MEDIEINFO_1_7_2,
  CHAPTER_MEDIEINFO_1_7_3,
  CHAPTER_MEDIEINFO_1_7_4,
  CHAPTER_MEDIEINFO_1_7_5,
];

export function getMedieinfo1Del7Chapter(chapterId: string): TextbookChapter | undefined {
  return MEDIEINFO_1_DEL7_CHAPTERS.find(chapter => chapter.id === chapterId);
}
