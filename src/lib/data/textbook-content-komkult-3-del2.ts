/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Intern og ekstern kommunikasjon
// ============================================================================

export const CHAPTER_KOMKULT3_2_1: TextbookChapter = {
  id: 'komkult3-2-1',
  courseId: 'komkult-3',
  chapterNumber: '2.1',
  title: 'Intern og ekstern kommunikasjon',
  description: 'Kommunikasjonskanaler i organisasjoner, intranet, pressemeldinger og omdømmebygging som strategisk verktøy.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for ulike kommunikasjonskanaler i organisasjoner',
    'drøfte sammenhengen mellom intern kommunikasjon og omdømme',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk3-2-1-intro',
      type: 'text',
      content: `## Intern og ekstern kommunikasjon

Alle organisasjoner kommuniserer - både innover mot egne ansatte og utover mot kunder, samarbeidspartnere og samfunnet. Måten en organisasjon kommuniserer på, påvirker trivsel, effektivitet og omdømme. En godt planlagt kommunikasjonsstrategi kan være forskjellen mellom suksess og fiasko.

I dette kapittelet skal du lære:
- Forskjellen mellom intern og ekstern kommunikasjon
- Hvilke kanaler organisasjoner bruker for å nå ulike målgrupper
- Hvordan pressemeldinger og mediekontakt fungerer
- Hva omdømme betyr og hvordan det bygges`,
    },
    {
      id: 'kk3-2-1-def-1',
      type: 'definition',
      title: 'Intern kommunikasjon',
      content: `**Intern kommunikasjon** er all kommunikasjon som foregår innenfor en organisasjon - mellom ledelse og ansatte, mellom avdelinger, og mellom kolleger. Formålet er å dele informasjon, koordinere arbeid, bygge fellesskap og sikre at alle jobber mot felles mål. Internkommunikasjon kan være **formell** (møter, e-post fra ledelsen, intranett) eller **uformell** (lunsj­samtaler, chat, kaffepraten).`,
    },
    {
      id: 'kk3-2-1-text-1',
      type: 'text',
      content: `### Kanaler for intern kommunikasjon

Moderne organisasjoner bruker en rekke kanaler for å nå sine ansatte:

| Kanal | Egenskaper | Egnet til |
|-------|-----------|-----------|
| Intranett | Sentralt nettsted kun for ansatte | Nyheter, rutiner, dokumenter |
| E-post | Skriftlig, asynkron | Formell informasjon, vedtak |
| Teams/Slack | Chat og videomøter | Daglig samarbeid, raske spørsmål |
| Allmøter | Fysisk samling | Store beskjeder, strategi, fellesskap |
| Nyhetsbrev | Periodisk oppdatering | Oppsummeringer, suksesshistorier |
| Oppslagstavle | Fysisk eller digital | Praktisk info, påminnelser |

**Intranettet** er ofte navet i internkommunikasjonen. Her finner ansatte alt fra strategidokumenter og personalreglement til kantinemenyen og bursdagshilsener. Et godt intranett er brukervennlig, oppdatert og tilgjengelig fra ulike enheter.`,
    },
    {
      id: 'kk3-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Intern kommunikasjon ved omorganisering',
      problem: 'En stor bedrift skal omorganisere og slå sammen to avdelinger. Hvordan bør ledelsen kommunisere dette internt?',
      solution: `**God intern kommunikasjon ved endring:**

1. **Tidlig varsling:** Ledelsen informerer de berørte avdelingene før rykter sprer seg, helst i et fysisk allmøte der ansatte kan stille spørsmål.

2. **Tydelig begrunnelse:** Forklar *hvorfor* endringen skjer - for eksempel bedre samarbeid, kostnadsbesparelser eller ny strategi.

3. **Åpen dialog:** Gi rom for spørsmål og bekymringer. Opprett gjerne en egen Teams-kanal eller e-postadresse for spørsmål.

4. **Skriftlig oppfølging:** Send oppsummering på e-post og legg informasjon på intranettet, slik at alle har tilgang til de samme faktaene.

5. **Løpende oppdateringer:** Hold ansatte informert om fremdriften gjennom ukentlige oppdateringer.

Dårlig intern kommunikasjon (for eksempel at ansatte leser om endringen i avisen først) skaper mistillit og motstand.`,
    },
    {
      id: 'kk3-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken kanal er best egnet for å informere alle ansatte om en ny sikkerhetsrutine som krever umiddelbar oppmerksomhet?',
        options: [
          { id: 'a', text: 'Oppslagstavle i kantina', isCorrect: false },
          { id: 'b', text: 'Nyhetsbrev neste måned', isCorrect: false },
          { id: 'c', text: 'E-post til alle kombinert med oppslag på intranettets forside', isCorrect: true },
          { id: 'd', text: 'Uformell beskjed fra avdelingsleder til nærmeste kolleger', isCorrect: false },
        ],
        solution: 'Når informasjon haster og gjelder alle, bør man kombinere e-post (som når alle direkte) med intranett (som fungerer som permanent referanse). Oppslagstavle og nyhetsbrev er for trege, mens uformell beskjed ikke sikrer at alle nås.',
      },
    },
    {
      id: 'kk3-2-1-def-2',
      type: 'definition',
      title: 'Ekstern kommunikasjon',
      content: `**Ekstern kommunikasjon** er all kommunikasjon rettet mot omverdenen - kunder, leverandører, myndigheter, medier og allmennheten. Formålet er å informere, markedsføre, bygge relasjoner og ivareta organisasjonens omdømme. Ekstern kommunikasjon omfatter alt fra reklame og pressemeldinger til årsrapporter, nettsider og sosiale medier.`,
    },
    {
      id: 'kk3-2-1-text-2',
      type: 'text',
      content: `### Pressemeldinger og mediekontakt

En **pressemelding** er en skriftlig melding fra en organisasjon til mediene. Formålet er å informere om nyheter, hendelser eller standpunkter som organisasjonen ønsker mediedekning av.

**Kjennetegn ved en god pressemelding:**
- **Tydelig overskrift** som fanger oppmerksomheten
- **Ingress** som oppsummerer det viktigste (hvem, hva, når, hvor, hvorfor)
- **Brødtekst** med utdypende informasjon og sitater
- **Kontaktinformasjon** til talsperson
- Objektiv og nøktern tone (ikke reklame­språk)
- Kort og konsis - helst under én side

Mange organisasjoner har en **kommunikasjonsavdeling** eller **informasjonsansvarlig** som håndterer mediekontakten. Store organisasjoner har ofte en **talsperson** som uttaler seg på vegne av virksomheten.`,
    },
    {
      id: 'kk3-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-1-ex-2',
        number: '2.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort pressemelding (ca. 150 ord) for en fiktiv bedrift som lanserer et nytt miljøvennlig produkt. Husk å inkludere overskrift, ingress, brødtekst og kontaktinformasjon.',
        hints: ['Bruk den omvendte pyramiden: det viktigste først', 'Hold tonen saklig og profesjonell - unngå reklamespråk'],
        solution: 'En god pressemelding inneholder: 1) En tydelig overskrift som forteller nyheten (f.eks. «NordTech lanserer Norges første karbonnøytrale smarttelefon»). 2) En ingress som oppsummerer hvem, hva, når og hvorfor. 3) Brødtekst med detaljer om produktet, gjerne med et sitat fra daglig leder. 4) Kontaktinformasjon med navn, telefon og e-post til mediakontakt. Tonen skal være saklig og informativ, ikke reklameprega.',
      },
    },
    {
      id: 'kk3-2-1-def-3',
      type: 'definition',
      title: 'Omdømme',
      content: `**Omdømme** (eller «renommé») er summen av omverdenens oppfatninger av en organisasjon over tid. Omdømmet bygges gjennom det organisasjonen *gjør* (handlinger), det den *sier* (kommunikasjon) og det andre *sier om den* (medieomtale, jungeltelegraf, anmeldelser). Et godt omdømme tiltrekker kunder, ansatte og investorer. Et dårlig omdømme kan ta år å reparere. **Omdømmehåndtering** (reputation management) er det strategiske arbeidet med å bygge og beskytte omdømmet.`,
    },
    {
      id: 'kk3-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Omdømmekrise',
      problem: 'En matvareprodusent oppdager at ett av produktene kan inneholde spor av allergener som ikke er merket. Hvordan bør bedriften håndtere situasjonen kommunikasjonsmessig?',
      solution: `**Krisekommunikasjon for å beskytte omdømmet:**

1. **Rask respons:** Gå ut med informasjon umiddelbart - ikke vent til mediene tar kontakt.
2. **Ta ansvar:** Vis at bedriften tar saken alvorlig og beklager overfor berørte kunder.
3. **Konkrete tiltak:** Informer om tilbakekalling av produktet, opplys om hvor kunder kan henvende seg.
4. **Åpenhet:** Forklar hva som har skjedd og hva som gjøres for å hindre gjentakelse.
5. **Tilgjengelig talsperson:** Sørg for at en tydelig talsperson svarer medier og kunder.
6. **Oppfølging:** Kommuniser jevnlig om status og tiltak.

Bedrifter som håndterer kriser åpent og ansvarlig, kan faktisk styrke omdømmet sitt på sikt. Det verste er å forsøke å skjule problemet.`,
    },
    {
      id: 'kk3-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-1-ex-3',
        number: '2.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste forskjellen mellom intern og ekstern kommunikasjon?',
        options: [
          { id: 'a', text: 'Intern kommunikasjon er alltid muntlig, ekstern er skriftlig', isCorrect: false },
          { id: 'b', text: 'Intern kommunikasjon retter seg mot ansatte, ekstern mot omverdenen', isCorrect: true },
          { id: 'c', text: 'Ekstern kommunikasjon er viktigere enn intern kommunikasjon', isCorrect: false },
          { id: 'd', text: 'Intern kommunikasjon handler kun om sosiale arrangementer', isCorrect: false },
        ],
        solution: 'Hovedforskjellen ligger i målgruppen: intern kommunikasjon retter seg mot organisasjonens egne ansatte og medlemmer, mens ekstern kommunikasjon er rettet mot omverdenen (kunder, medier, myndigheter osv.). Begge kan være muntlig eller skriftlig, og begge er viktige.',
      },
    },
    {
      id: 'kk3-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-1-ex-4',
        number: '2.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en organisasjon du kjenner til (en bedrift, en kommune, en idrettsklubb e.l.). Beskriv tre eksempler på intern kommunikasjon og tre eksempler på ekstern kommunikasjon som denne organisasjonen bruker. Forklar hvorfor de har valgt akkurat disse kanalene.',
        hints: ['Tenk på hvem som er målgruppen for hver kanal', 'Vurder om kanalene dekker behovene for både rask informasjon og langsiktig relasjonsbygging'],
        solution: 'Et godt svar nevner konkrete kanaler (f.eks. intranett, personalblad, Teams for intern; nettside, Instagram, pressemelding for ekstern) og forklarer valget ut fra målgruppe, formål og kanalens egenskaper. For eksempel: «Kommunen bruker intranett for interne rutiner fordi alle ansatte har tilgang, og Facebook for å nå innbyggere fordi det er der de fleste er.»',
      },
    },
    {
      id: 'kk3-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-1-ex-5',
        number: '2.1.5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Et selskap får negativ medieomtale etter en miljøskandale. Hva er den beste strategien for omdømmehåndtering?',
        options: [
          { id: 'a', text: 'Ignorere mediene og håpe saken går over av seg selv', isCorrect: false },
          { id: 'b', text: 'Gå til rettssak mot journalisten som skrev saken', isCorrect: false },
          { id: 'c', text: 'Være åpen, ta ansvar, iverksette konkrete tiltak og kommunisere løpende', isCorrect: true },
          { id: 'd', text: 'Publisere så mye positiv reklame som mulig for å overdøve negativiteten', isCorrect: false },
        ],
        solution: 'Forskning på krisekommunikasjon viser at åpenhet, ansvarlighet og handlekraft er den mest effektive strategien. Å ignorere problemet forverrer situasjonen, rettssak skaper mer negativ oppmerksomhet, og overdreven reklame fremstår som uærlig. Ved å ta ansvar og vise konkrete tiltak bygger organisasjonen tillit på ny.',
      },
    },
    {
      id: 'kk3-2-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Intern kommunikasjon** foregår innad i organisasjonen og omfatter kanaler som intranett, e-post, Teams og allmøter.
- **Ekstern kommunikasjon** retter seg utover og omfatter pressemeldinger, nettsider, sosiale medier og reklame.
- Et **intranett** er et lukket nettsted for ansatte som fungerer som nav for intern informasjon.
- **Pressemeldinger** er strukturerte meldinger til mediene med tydelig overskrift, ingress og kontaktinformasjon.
- **Omdømme** er omverdenens samlede oppfatning av organisasjonen og bygges gjennom handlinger, kommunikasjon og medieomtale.
- God **krisekommunikasjon** handler om åpenhet, ansvar og rask respons.`,
    },
    {
      id: 'kk3-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-1-ex-6',
        number: '2.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand: «Intern og ekstern kommunikasjon henger uløselig sammen - dårlig internkommunikasjon fører til dårlig omdømme.» Bruk eksempler for å underbygge argumentene dine.',
        hints: ['Tenk på hva som skjer når ansatte ikke er informert om endringer og media spør dem', 'Vurder hvordan ansattes tilfredshet påvirker kundeopplevelsen'],
        solution: 'Et godt svar argumenterer for sammenhengen: misfornøyde ansatte (pga. dårlig internkommunikasjon) gir dårligere kundeservice, kan lekke negativ informasjon til medier/sosiale medier, og mangler motivasjon til å være gode ambassadører. Eksempel: Ansatte som leser om oppsigelser i avisen før de hører det internt, mister tillit. Samtidig bør svaret nyansere: god ekstern kommunikasjon kan ikke kompensere for dårlig intern, men dårlig intern undergraver alltid den eksterne.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Organisasjonskultur og kommunikasjon
// ============================================================================

export const CHAPTER_KOMKULT3_2_2: TextbookChapter = {
  id: 'komkult3-2-2',
  courseId: 'komkult-3',
  chapterNumber: '2.2',
  title: 'Organisasjonskultur og kommunikasjon',
  description: 'Cameron og Quinns rammeverk for organisasjonskultur, klankultur, adhokrati, hierarki og markedskultur - og hvordan kultur påvirker kommunikasjon.',
  estimatedMinutes: 24,
  competenceGoals: [
    'beskrive ulike typer organisasjonskultur og hvordan de påvirker kommunikasjon',
    'analysere sammenhengen mellom organisasjonskultur og kommunikasjonsmønstre',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk3-2-2-intro',
      type: 'text',
      content: `## Organisasjonskultur og kommunikasjon

Har du noen gang merket at noen arbeidsplasser føles helt forskjellige? I én bedrift er det uformelt og alle bruker fornavn, mens i en annen er det stivt og hierarkisk. Denne «stemningen» kalles organisasjonskultur, og den påvirker hvordan mennesker kommuniserer på jobben i enorm grad.

I dette kapittelet skal du lære:
- Hva organisasjonskultur er og hvorfor den er viktig
- Cameron og Quinns fire kulturtyper
- Hvordan ulike kulturer skaper ulike kommunikasjonsmønstre
- Hvordan du kan analysere en organisasjons kultur`,
    },
    {
      id: 'kk3-2-2-def-1',
      type: 'definition',
      title: 'Organisasjonskultur',
      content: `**Organisasjonskultur** er det settet av verdier, normer, antakelser og praksiser som preger en organisasjon. Edgar Schein definerer organisasjonskultur som «et mønster av grunnleggende antakelser som en gruppe har utviklet for å mestre sine problemer». Kulturen viser seg i alt fra kleskode og omgangstone til beslutningsprosesser og hvordan konflikter håndteres. Organisasjonskultur beskrives ofte som «måten vi gjør ting på her».`,
    },
    {
      id: 'kk3-2-2-text-1',
      type: 'text',
      content: `### Cameron og Quinns rammeverk (Competing Values Framework)

Organisasjonsforskerne Kim Cameron og Robert Quinn utviklet et innflytelsesrikt rammeverk for å kategorisere organisasjonskulturer. Rammeverket bygger på to dimensjoner:

- **Fleksibilitet vs. stabilitet:** Verdsetter organisasjonen frihet og tilpasningsevne, eller forutsigbarhet og kontroll?
- **Internt fokus vs. eksternt fokus:** Er organisasjonen primært opptatt av sine egne ansatte og prosesser, eller av markedet og konkurrentene?

Disse to dimensjonene gir fire kulturtyper:

|  | **Internt fokus** | **Eksternt fokus** |
|--|-------------------|-------------------|
| **Fleksibilitet** | Klankultur | Adhokratikultur |
| **Stabilitet** | Hierarkikultur | Markedskultur |

De fleste organisasjoner har trekk fra flere kulturtyper, men én er gjerne dominerende.`,
    },
    {
      id: 'kk3-2-2-def-2',
      type: 'definition',
      title: 'De fire kulturtypene',
      content: `**Klankultur:** Organisasjonen fungerer som en utvidet familie. Fokus på samarbeid, lojalitet, mentoring og medarbeiderutvikling. Ledere er som «foreldrefigurer». Kommunikasjonen er åpen, uformell og inkluderende. Eksempel: Et lite konsulentfirma der alle kjenner alle.

**Adhokratikultur:** Organisasjonen verdsetter innovasjon, kreativitet og risikovilje. Fokus på å være først ute med nye løsninger. Ledere er visjonære og entreprenører. Kommunikasjonen er dynamisk, ustrukturert og idédrevet. Eksempel: Et teknologi-startup.

**Hierarkikultur:** Organisasjonen preges av klare strukturer, regler og prosedyrer. Fokus på effektivitet, stabilitet og forutsigbarhet. Ledere er koordinatorer og organisatorer. Kommunikasjonen er formell og følger tjenestevei. Eksempel: Et departement eller en stor bank.

**Markedskultur:** Organisasjonen er resultatorientert og konkurransepreget. Fokus på å nå mål, vinne markedsandeler og slå konkurrentene. Ledere er tøffe pådrivere. Kommunikasjonen er direkte, målrettet og resultatorientert. Eksempel: Et meglerhus eller et salgsselskap.`,
    },
    {
      id: 'kk3-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Kulturtyper i praksis',
      problem: 'Hvordan vil en intern e-post om en ny idé se ut i de fire ulike kulturtypene?',
      solution: `**Klankultur:**
«Hei alle sammen! Har hatt en idé som jeg gjerne vil lufte med dere. Kan vi ta en prat over lunsj? Synes det hadde vært fint å høre hva alle tenker 😊»

**Adhokratikultur:**
«Team - sjekk dette: Jeg har prototypet en ny løsning i natt. Tror dette kan disrumpere hele markedet. Hvem vil hacke videre på dette i morgen?»

**Hierarkikultur:**
«Til: Avdelingsleder. Kopi: Prosjektleder. Viser til møte 14.01. Vedlagt finner du forslag til nytt initiativ i henhold til gjeldende prosedyre for innovasjonsforslag (ref. §4.2 i kvalitetshåndboken).»

**Markedskultur:**
«Ny mulighet identifisert. Estimert inntektspotensial: 2M. Konkurransefordel: 6 mnd forsprang. Ber om go/no-go innen fredag.»

Legg merke til forskjellene i tone, formalitet, fokus og tempo.`,
    },
    {
      id: 'kk3-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-2-ex-1',
        number: '2.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken kulturtype kjennetegnes av fokus på innovasjon, kreativitet og risikovilje?',
        options: [
          { id: 'a', text: 'Klankultur', isCorrect: false },
          { id: 'b', text: 'Adhokratikultur', isCorrect: true },
          { id: 'c', text: 'Hierarkikultur', isCorrect: false },
          { id: 'd', text: 'Markedskultur', isCorrect: false },
        ],
        solution: 'Adhokratikultur kjennetegnes av innovasjon, kreativitet og risikovilje. Navnet kommer fra «ad hoc» og beskriver en kultur som er fleksibel, dynamisk og eksternt orientert. Typiske eksempler er teknologi-startups og kreative byråer.',
      },
    },
    {
      id: 'kk3-2-2-text-2',
      type: 'text',
      content: `### Kultur og kommunikasjonsmønstre

Organisasjonskulturen former kommunikasjonen på flere måter:

**Kommunikasjonsretning:**
- I **hierarkikulturer** går informasjon primært ovenfra og ned (top-down).
- I **klankulturer** flyter informasjon fritt i alle retninger.
- I **markedskulturer** er kommunikasjonen målrettet - informasjon deles bare når det tjener et formål.
- I **adhokratikulturer** oppstår kommunikasjon spontant rundt ideer og prosjekter.

**Formalitetsnivå:**
- Hierarki- og markedskulturer tenderer mot formell kommunikasjon.
- Klan- og adhokratikulturer tenderer mot uformell kommunikasjon.

**Kommunikasjonshastighet:**
- Adhokrati- og markedskulturer har rask kommunikasjon (tempo er viktig).
- Hierarki- og klankulturer kan ha tregere kommunikasjon (grundighet/konsensus er viktig).

Det er viktig å forstå at ingen kulturtype er objektivt «best». Den ideelle kulturen avhenger av organisasjonens formål, bransje og kontekst.`,
    },
    {
      id: 'kk3-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-2-ex-2',
        number: '2.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I hvilken kulturtype vil du mest sannsynlig finne at informasjon primært går fra ledelsen og nedover i organisasjonen (top-down)?',
        options: [
          { id: 'a', text: 'Klankultur', isCorrect: false },
          { id: 'b', text: 'Adhokratikultur', isCorrect: false },
          { id: 'c', text: 'Hierarkikultur', isCorrect: true },
          { id: 'd', text: 'Markedskultur', isCorrect: false },
        ],
        solution: 'Hierarkikulturen er preget av formelle strukturer, tjenestevei og klare linjer for hvem som kommuniserer hva til hvem. Informasjon flyter primært ovenfra og ned gjennom definerte kanaler, og det forventes at ansatte følger tjenestevei.',
      },
    },
    {
      id: 'kk3-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-2-ex-3',
        number: '2.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tenk på en organisasjon du kjenner til (skolen din, en arbeidsplass, en idrettsklubb). Analyser organisasjonskulturen ved hjelp av Cameron og Quinns rammeverk. Hvilken kulturtype dominerer? Gi minst tre konkrete eksempler på hvordan kulturen viser seg i kommunikasjonen.',
        hints: ['Se på hvordan ledelsen kommuniserer med ansatte/medlemmer', 'Vurder om tonen er formell eller uformell, om beslutninger tas raskt eller sakte'],
        solution: 'Et godt svar identifiserer den dominerende kulturtypen med begrunnelse, og gir konkrete eksempler. For eksempel: «Skolen min har trekk av hierarkikultur fordi: 1) Informasjon fra ledelsen sendes som formelle skriv via It\'s Learning, 2) Det er klare regler for hvem som tar beslutninger, 3) All kommunikasjon med foreldre går gjennom kontaktlærer (tjenestevei). Men det finnes også klankulturelementer i teamsamarbeidet mellom lærere.»',
      },
    },
    {
      id: 'kk3-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-2-ex-4',
        number: '2.2.4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilke to dimensjoner bruker Cameron og Quinn i sitt rammeverk for organisasjonskultur?',
        options: [
          { id: 'a', text: 'Fleksibilitet vs. stabilitet og internt vs. eksternt fokus', isCorrect: true },
          { id: 'b', text: 'Individuell vs. kollektiv og formell vs. uformell', isCorrect: false },
          { id: 'c', text: 'Liten vs. stor organisasjon og gammel vs. ny organisasjon', isCorrect: false },
          { id: 'd', text: 'Profitt vs. ideell og nasjonal vs. internasjonal', isCorrect: false },
        ],
        solution: 'Cameron og Quinns Competing Values Framework bygger på dimensjonene fleksibilitet vs. stabilitet (verdsetter organisasjonen endring eller kontroll?) og internt vs. eksternt fokus (er man primært opptatt av egne ansatte eller av markedet?). Disse to aksene gir fire kulturtyper: klan, adhokrati, hierarki og marked.',
      },
    },
    {
      id: 'kk3-2-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Organisasjonskultur** er de verdier, normer og praksiser som preger en organisasjon.
- Cameron og Quinns rammeverk skiller mellom fire kulturtyper basert på aksene **fleksibilitet/stabilitet** og **internt/eksternt fokus**.
- **Klankultur** er familiær og samarbeidsorientert med åpen kommunikasjon.
- **Adhokratikultur** er innovativ og dynamisk med ustrukturert, idédrevet kommunikasjon.
- **Hierarkikultur** er regelbasert og forutsigbar med formell, top-down kommunikasjon.
- **Markedskultur** er resultatorientert og konkurransepreget med direkte, målrettet kommunikasjon.
- De fleste organisasjoner har trekk fra flere kulturtyper.`,
    },
    {
      id: 'kk3-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-2-ex-5',
        number: '2.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: Kan en organisasjon bevisst endre sin kultur? Hva kreves i så fall av kommunikasjonen? Bruk minst to av Cameron og Quinns kulturtyper i drøftingen din.',
        hints: ['Tenk på hva som skjer når en startup vokser og trenger mer struktur', 'Vurder ledelsens rolle som kulturell endringsagent'],
        solution: 'Et godt svar drøfter at kulturendring er mulig, men vanskelig og tidkrevende. Det krever bevisst kommunikasjon fra ledelsen: nye verdier må kommuniseres tydelig, ledere må «walk the talk», og belønningssystemer må endres. Eksempel: En bedrift som går fra adhokrati til hierarki (vokser fra startup til stor bedrift) må innføre nye kommunikasjonskanaler, formalisere prosesser og forklare hvorfor endringen er nødvendig. Motstand er naturlig fordi kultur sitter dypt.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Møtekultur og forhandlinger
// ============================================================================

export const CHAPTER_KOMKULT3_2_3: TextbookChapter = {
  id: 'komkult3-2-3',
  courseId: 'komkult-3',
  chapterNumber: '2.3',
  title: 'Møtekultur og forhandlinger',
  description: 'Møtetyper, dagsorden, referat, forhandlingsteknikker og hvordan du leder og deltar i profesjonelle møter.',
  estimatedMinutes: 20,
  competenceGoals: [
    'planlegge og gjennomføre ulike typer møter',
    'beskrive og anvende forhandlingsteknikker',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk3-2-3-intro',
      type: 'text',
      content: `## Møtekultur og forhandlinger

Møter er en av de vanligste kommunikasjonsformene i arbeidslivet - og en av de mest omdiskuterte. «Enda et møte som kunne vært en e-post» er et vanlig sukk på mange arbeidsplasser. Gode møter er effektive, engasjerende og fører til konkrete resultater. Dårlige møter stjeler tid og energi.

I dette kapittelet skal du lære:
- Hvilke møtetyper som finnes og når de brukes
- Hvordan man lager en god dagsorden
- Hvordan man skriver et nyttig referat
- Grunnleggende forhandlingsteknikker`,
    },
    {
      id: 'kk3-2-3-def-1',
      type: 'definition',
      title: 'Møtetyper',
      content: `De vanligste møtetypene i arbeidslivet er:

**Informasjonsmøte:** Ledelsen eller en prosjektgruppe informerer om noe. Kommunikasjonen er primært enveis. Eksempel: Allmøte om nye retningslinjer.

**Diskusjonsmøte:** Deltakerne diskuterer saker for å belyse dem fra ulike sider, uten at det nødvendigvis fattes vedtak. Eksempel: Idédugnad om ny strategi.

**Besluttningsmøte:** Det skal fattes konkrete vedtak. Krever gjerne votering eller konsensus. Eksempel: Styremøte som vedtar budsjett.

**Statusmøte:** Deltakerne rapporterer fremdrift på oppgaver eller prosjekter. Eksempel: Ukentlig prosjektmøte.

**Kreativt møte (workshop):** Fokus på idégenerering og problemløsning gjennom samarbeid. Eksempel: Design-thinking-workshop.`,
    },
    {
      id: 'kk3-2-3-text-1',
      type: 'text',
      content: `### Dagsorden og møtestruktur

En **dagsorden** (saksliste) er et dokument som sendes ut før møtet og inneholder:

1. **Møteinformasjon:** Tid, sted, deltakere
2. **Godkjenning av innkalling og dagsorden**
3. **Godkjenning av referat fra forrige møte**
4. **Saker til behandling** (nummerert, med ansvarlig og tidsramme)
5. **Eventuelt** (saker som ikke stod på dagsorden)

**Tips for en god dagsorden:**
- Send den ut i god tid (minst 2-3 dager i forveien)
- Prioriter de viktigste sakene først
- Angi tidsramme for hver sak
- Spesifiser om saken er til informasjon, diskusjon eller beslutning
- Hold antall saker realistisk i forhold til tilgjengelig tid

Et godt gjennomført møte følger dagsorden, begynner og slutter til avtalt tid, og gir alle deltakere mulighet til å bidra.`,
    },
    {
      id: 'kk3-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Dagsorden for avdelingsmøte',
      problem: 'Lag en dagsorden for et avdelingsmøte i en markedsføringsavdeling som skal diskutere lansering av et nytt produkt.',
      solution: `**DAGSORDEN - Avdelingsmøte Markedsføring**
Dato: Tirsdag 15. mars kl. 09:00-10:30
Sted: Møterom Bryggen, 3. etasje
Deltakere: Hele avdelingen (8 personer)
Møteleder: Avdelingsleder Kari Nilsen
Referent: Ole Pettersen

1. Godkjenning av innkalling og dagsorden (5 min)
2. Godkjenning av referat fra møte 01.03 (5 min)
3. **Orientering:** Status ny nettside - til informasjon (10 min) - v/Erik
4. **Diskusjon:** Kampanjestrategi for produktlansering (30 min) - v/Kari
5. **Beslutning:** Valg av byrå for sosiale medier (15 min) - v/Kari
6. **Orientering:** Budsjettoppdatering Q2 (10 min) - v/Lise
7. Eventuelt (5 min)
8. Oppsummering og aksjonspunkter (10 min)

Legg merke til at hver sak har tidsramme, ansvarlig og merking (informasjon/diskusjon/beslutning).`,
    },
    {
      id: 'kk3-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-1-ex-1-ref',
        number: '2.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedformålet med en dagsorden?',
        options: [
          { id: 'a', text: 'Å dokumentere hva som ble bestemt i møtet', isCorrect: false },
          { id: 'b', text: 'Å gi deltakerne oversikt over sakene som skal behandles og forberede seg', isCorrect: true },
          { id: 'c', text: 'Å erstatte behovet for et fysisk møte', isCorrect: false },
          { id: 'd', text: 'Å evaluere møtets kvalitet i etterkant', isCorrect: false },
        ],
        solution: 'Dagsordenen sendes ut før møtet og gir deltakerne mulighet til å forberede seg på sakene som skal behandles. Den sikrer struktur og fokus under møtet. Det er referatet som dokumenterer hva som ble besluttet.',
      },
    },
    {
      id: 'kk3-2-3-def-2',
      type: 'definition',
      title: 'Møtereferat',
      content: `Et **møtereferat** er en skriftlig oppsummering av det som ble diskutert og besluttet i et møte. Et godt referat inneholder: **møteinformasjon** (dato, tid, deltakere), **saker som ble behandlet**, **vedtak** som ble fattet, **aksjonspunkter** (hvem gjør hva innen når), og eventuelt **uenigheter** som ble protokollert. Referenten har ansvar for å skrive referatet og sende det ut til deltakerne så raskt som mulig etter møtet. Det finnes to hovedtyper: **beslutningsreferat** (kun vedtak) og **diskusjonsreferat** (også hovedpunkter fra diskusjon).`,
    },
    {
      id: 'kk3-2-3-text-2',
      type: 'text',
      content: `### Forhandlingsteknikker

**Forhandlinger** er en prosess der to eller flere parter med ulike interesser forsøker å nå en avtale. I arbeidslivet forhandler vi om alt fra lønn og kontrakter til prosjektprioriteringer og ansvarsfordeling.

**To hovedtilnærminger:**

**Fordelingsforhandling (win-lose):**
Partene konkurrerer om en fast «kake». Det den ene vinner, taper den andre. Brukes typisk i lønnsforhandlinger og prisforhandlinger. Teknikker: åpningstilbud, ankring, innrømmelser.

**Integrasjonsforhandling (win-win):**
Partene samarbeider om å «utvide kaken» slik at begge oppnår mer. Fokus på å forstå den andre partens interesser og finne kreative løsninger. Teknikker: aktiv lytting, interessekartlegging, pakkeløsninger.

**BATNA (Best Alternative To a Negotiated Agreement):**
Ditt beste alternativ dersom forhandlingene bryter sammen. Å kjenne sin BATNA gir forhandlingsstyrke - du vet når det er bedre å gå fra forhandlingsbordet enn å akseptere en dårlig avtale.`,
    },
    {
      id: 'kk3-2-3-example-2',
      type: 'example',
      title: 'Eksempel: BATNA i lønnsforhandling',
      problem: 'Maria har fått et jobbtilbud fra Firma A med lønn på 550 000 kr. Hun skal nå forhandle med Firma B, der hun helst vil jobbe. Hva er Marias BATNA, og hvordan kan hun bruke det?',
      solution: `**Marias BATNA:** Tilbudet fra Firma A på 550 000 kr. Det er hennes beste alternativ dersom forhandlingene med Firma B ikke fører frem.

**Hvordan hun kan bruke det:**
- Maria vet at hun ikke bør akseptere mindre enn 550 000 kr fra Firma B (hennes «smertegrense»).
- Hun kan åpne forhandlingen med et høyere krav, for eksempel 620 000 kr.
- Hun kan nevne (diplomatisk) at hun har et annet tilbud, uten nødvendigvis å oppgi beløpet.
- Vissheten om at hun har et alternativ gir henne trygghet og styrke i forhandlingen.
- Dersom Firma B tilbyr 530 000 kr, bør hun avslå og velge Firma A.

En sterk BATNA gir forhandlingsstyrke. Derfor bør du alltid ha alternativer klare før viktige forhandlinger.`,
    },
    {
      id: 'kk3-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-3-ex-2',
        number: '2.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva står BATNA for, og hvorfor er det viktig i forhandlinger?',
        options: [
          { id: 'a', text: 'Basic Approach To Negotiation Agreements - en grunnleggende forhandlingsmetode', isCorrect: false },
          { id: 'b', text: 'Best Alternative To a Negotiated Agreement - ditt beste alternativ om forhandlingen bryter sammen', isCorrect: true },
          { id: 'c', text: 'Balanced And Transparent Negotiation Agenda - en dagsorden for forhandlingsmøter', isCorrect: false },
          { id: 'd', text: 'Business Association for Trade and Negotiation Affairs - en interesseorganisasjon', isCorrect: false },
        ],
        solution: 'BATNA står for Best Alternative To a Negotiated Agreement og er ditt beste alternativ dersom forhandlingene ikke fører til enighet. Å kjenne sin BATNA er viktig fordi det gir deg forhandlingsstyrke, setter en smertegrense for hva du bør akseptere, og gir trygghet i prosessen.',
      },
    },
    {
      id: 'kk3-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-3-ex-3',
        number: '2.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en dagsorden for et møte i en elevorganisasjon som skal planlegge skoleball. Møtet varer i 45 minutter og har 6 deltakere. Inkluder minst fire saker, og merk hver sak som informasjon, diskusjon eller beslutning.',
        hints: ['Tenk på hvilke saker som er viktigst og bør prioriteres først', 'Husk tidsramme for hver sak'],
        solution: 'En god dagsorden inneholder møteinformasjon (tid, sted, deltakere), godkjenning av dagsorden, og saker som f.eks.: 1) Orientering: Status økonomi (info, 5 min), 2) Diskusjon: Tema og dekorasjon (diskusjon, 15 min), 3) Beslutning: Valg av lokale (beslutning, 10 min), 4) Beslutning: Billettpriser (beslutning, 10 min), 5) Eventuelt (5 min). Totaltiden bør stemme med de 45 minuttene.',
      },
    },
    {
      id: 'kk3-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-3-ex-4',
        number: '2.3.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner integrasjonsforhandling (win-win) sammenlignet med fordelingsforhandling (win-lose)?',
        options: [
          { id: 'a', text: 'Partene konkurrerer om en fast ressurs og den ene partens gevinst er den andres tap', isCorrect: false },
          { id: 'b', text: 'Partene samarbeider om å finne kreative løsninger som gir begge parter mer', isCorrect: true },
          { id: 'c', text: 'Forhandlingen avsluttes alltid med at en nøytral tredjepart bestemmer utfallet', isCorrect: false },
          { id: 'd', text: 'Partene unngår direkte kommunikasjon og forhandler gjennom advokater', isCorrect: false },
        ],
        solution: 'Integrasjonsforhandling handler om å «utvide kaken» - finne løsninger som tilfredsstiller begge parters interesser. I motsetning til fordelingsforhandling (der den ene vinner det den andre taper) fokuserer integrasjonsforhandling på samarbeid, kreativitet og gjensidig gevinst.',
      },
    },
    {
      id: 'kk3-2-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- Det finnes flere **møtetyper**: informasjonsmøte, diskusjonsmøte, besluttningsmøte, statusmøte og workshop.
- En god **dagsorden** inneholder saksliste med tidsramme, ansvarlig og merking av sakstype.
- Et **møtereferat** dokumenterer diskusjoner, vedtak og aksjonspunkter.
- **Fordelingsforhandling** (win-lose) handler om å fordele en fast ressurs.
- **Integrasjonsforhandling** (win-win) handler om å finne kreative løsninger som gir begge parter mer.
- **BATNA** er ditt beste alternativ om forhandlingen ikke lykkes, og gir forhandlingsstyrke.`,
    },
    {
      id: 'kk3-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-3-ex-5',
        number: '2.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du skal forhandle med rektor om å innføre senere skolestart for VG3-elever. Forbered forhandlingen: Hva er dine interesser? Hva tror du er rektors interesser? Hva er din BATNA? Lag en forhandlingsstrategi som tar sikte på en win-win-løsning.',
        hints: ['Kartlegg begge parters interesser, ikke bare posisjoner', 'Tenk kreativt - finnes det løsninger som ivaretar begge parter?'],
        solution: 'Et godt svar kartlegger begge parters interesser (elever: mer søvn, bedre konsentrasjon; rektor: god timeplandekning, faglige resultater, fornøyde foreldre). BATNA kan være å foreslå en prøveperiode eller å ta saken videre til elevrådet/FAU. Win-win-strategi: foreslå en pilotordning der man måler effekten på fravær og resultater, eller foreslå fleksitid for VG3 der de kan velge mellom tidlig og sen start.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Presentasjonsteknikk
// ============================================================================

export const CHAPTER_KOMKULT3_2_4: TextbookChapter = {
  id: 'komkult3-2-4',
  courseId: 'komkult-3',
  chapterNumber: '2.4',
  title: 'Presentasjonsteknikk',
  description: 'Muntlig fremføring, bruk av presentasjonsverktøy, kroppsspråk på scenen og teknikker for å håndtere nervøsitet.',
  estimatedMinutes: 18,
  competenceGoals: [
    'planlegge og gjennomføre en profesjonell presentasjon',
    'reflektere over samspillet mellom verbal og nonverbal kommunikasjon i presentasjoner',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk3-2-4-intro',
      type: 'text',
      content: `## Presentasjonsteknikk

Evnen til å holde gode presentasjoner er en av de mest verdifulle kommunikasjonsferdighetene du kan ha - både i skolen, på studier og i arbeidslivet. Mange opplever det som skremmende å stå foran et publikum, men presentasjonsteknikk er noe alle kan lære.

I dette kapittelet skal du lære:
- Hvordan du planlegger og strukturerer en presentasjon
- Effektiv bruk av PowerPoint og andre visuell støtte
- Hvordan kroppsspråk og stemmebruk påvirker budskapet
- Teknikker for å mestre nervøsitet`,
    },
    {
      id: 'kk3-2-4-def-1',
      type: 'definition',
      title: 'Presentasjonens struktur',
      content: `En god presentasjon følger en klar **tredelt struktur**:

**Innledning** (ca. 10-15 % av tiden): Fang publikums oppmerksomhet med en «krok» (et spørsmål, en historie, et overraskende fakta), presenter temaet og gi et veikart over hva du skal snakke om.

**Hoveddel** (ca. 75-80 % av tiden): Presenter hovedpoengene dine i en logisk rekkefølge. Bruk eksempler, illustrasjoner og overganger mellom punktene. Begrens deg til 3-5 hovedpunkter - publikum husker ikke mer.

**Avslutning** (ca. 10-15 % av tiden): Oppsummer de viktigste poengene, kom med en konklusjon eller oppfordring til handling, og avslutt med en sterk slutt (ikke «ja, det var det jeg hadde»).`,
    },
    {
      id: 'kk3-2-4-text-1',
      type: 'text',
      content: `### Visuell støtte: PowerPoint og alternativer

Presentasjonsverktøy som PowerPoint, Google Slides eller Keynote er hjelpemidler - ikke manus. De skal **støtte** budskapet ditt, ikke erstatte det.

**Gode prinsipper for lysbilder:**
- **Én idé per lysbilde** - unngå overfylte slides
- **Lite tekst** - bruk stikkord, ikke hele setninger. Publikum skal lytte til deg, ikke lese
- **Store bilder** som forsterker budskapet
- **Konsekvent design** - bruk samme skrifttype, farger og layout
- **Lesbar tekst** - minimum 24pt skriftstørrelse
- **Ingen animasjoner** som distraherer (flyvende tekst, lydeffekter)

**Alternativer til PowerPoint:**
- **Prezi** - dynamiske, zoombare presentasjoner
- **Whiteboard/tavle** - engasjerende for mindre grupper
- **Rekvisitter** - fysiske gjenstander som illustrerer poenget
- **Ingen slides** - for korte, personlige presentasjoner kan det være kraftfullt å stå uten visuell støtte`,
    },
    {
      id: 'kk3-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Dårlig vs. godt lysbilde',
      problem: 'Vurder disse to tilnærmingene til et lysbilde om klimaendringer:',
      solution: `**Dårlig lysbilde:**
Overskrift: «Klimaendringer». Deretter 12 kulepunkter med full tekst, liten skrift (12pt), en tabell med tall og et lite bilde presset inn i hjørnet. Alt på samme side.

**Hvorfor det er dårlig:** Publikum bruker all energi på å lese i stedet for å lytte. Informasjonsoverbelastning. Bildet drukner.

**Godt lysbilde:**
Et stort, emosjonelt bilde av en isbjørn på et smeltende isflak. Overskriften: «2°C». Ingenting annet.

**Hvorfor det er godt:** Bildet fanger oppmerksomheten og skaper følelser. Tallet vekker nysgjerrighet. Presentatøren forklarer muntlig at 2°C er grensen verden har satt, og hva som skjer om vi passerer den. Lysbildet forsterker budskapet uten å konkurrere med det.

**Regelen:** Hvis publikum kan forstå presentasjonen bare ved å lese lysbildene, trenger de ikke deg.`,
    },
    {
      id: 'kk3-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste regelen for bruk av tekst på lysbilder?',
        options: [
          { id: 'a', text: 'Skriv hele manus på lysbildene slik at du ikke glemmer noe', isCorrect: false },
          { id: 'b', text: 'Bruk kun stikkord og la publikum lytte til deg', isCorrect: true },
          { id: 'c', text: 'Unngå tekst helt og bruk bare bilder', isCorrect: false },
          { id: 'd', text: 'Skriv teksten med så liten skrift som mulig for å få plass til alt', isCorrect: false },
        ],
        solution: 'Hovedregelen er å bruke stikkord fremfor hele setninger. Lysbildene skal støtte budskapet ditt, ikke erstatte det. Hvis alt står på lysbildene, har publikum ingen grunn til å lytte til deg. Stikkord fungerer som knagger for deg og visuelle holdepunkter for publikum.',
      },
    },
    {
      id: 'kk3-2-4-def-2',
      type: 'definition',
      title: 'Kroppsspråk i presentasjoner',
      content: `**Kroppsspråk** i presentasjoner omfatter alt det nonverbale du kommuniserer fra scenen: kroppsholdning, bevegelser, gester, blikkontakt og ansiktsuttrykk. Forskning viser at kroppsspråk kan utgjøre opptil 55 % av det inntrykket publikum sitter igjen med (Mehrabians kommunikasjonsmodell - med forbehold om at denne gjelder spesifikke kontekster). God kroppsspråkbevissthet forsterker troverdigheten og engasjementet i presentasjonen din.`,
    },
    {
      id: 'kk3-2-4-text-2',
      type: 'text',
      content: `### Kroppsspråk og stemmebruk på scenen

**Kroppsholdning:**
- Stå stødig med vekten jevnt fordelt
- Unngå å lene deg på talerstolen eller svaie
- Åpen kroppsholdning signaliserer trygghet

**Gester:**
- Bruk naturlige håndbevegelser for å understreke poenger
- Unngå repetitive bevegelser (fikle med kulepenn, vippe på føttene)
- Hold hendene synlige - ikke i lommene eller bak ryggen

**Blikkontakt:**
- Se på publikum, ikke på skjermen eller notatene
- Fordel blikket utover hele rommet
- Hold øyekontakt med enkeltpersoner i 2-3 sekunder

**Stemmebruk:**
- **Volum:** Snakk høyt nok til at alle hører
- **Tempo:** Varier tempoet - senk farten ved viktige poeng
- **Pauser:** Bruk bevisste pauser for å la poenger synke inn
- **Toneleie:** Varier tonen - monoton stemme er søvndyssende`,
    },
    {
      id: 'kk3-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-4-ex-2',
        number: '2.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er pauser viktige i en presentasjon?',
        options: [
          { id: 'a', text: 'De gir presentatøren tid til å lese manus', isCorrect: false },
          { id: 'b', text: 'De lar viktige poenger synke inn hos publikum og skaper spenning', isCorrect: true },
          { id: 'c', text: 'De viser at presentatøren er nervøs og trenger tid', isCorrect: false },
          { id: 'd', text: 'De er ikke viktige og bør unngås for å holde tempoet oppe', isCorrect: false },
        ],
        solution: 'Bevisste pauser er et av de kraftigste virkemidlene en presentatør har. De gir publikum tid til å fordøye informasjon, skaper spenning før viktige poenger, og signaliserer at presentatøren er trygg og i kontroll. Mange nybegynnere snakker for fort uten pauser fordi stillhet føles ubehagelig.',
      },
    },
    {
      id: 'kk3-2-4-text-3',
      type: 'text',
      content: `### Håndtering av nervøsitet

De fleste mennesker opplever nervøsitet før presentasjoner - selv erfarne foredragsholdere. En viss grad av nervøsitet er faktisk gunstig: adrenalin skjerper oppmerksomheten og gir energi.

**Teknikker for å håndtere nervøsitet:**

1. **Forberedelse:** Øv presentasjonen flere ganger - helst foran noen. Jo bedre forberedt du er, jo tryggere føler du deg.
2. **Pusteøvelser:** Dyp, rolig pusting senker hjertefrekvensen og demper stressresponsen.
3. **Positiv visualisering:** Se for deg at presentasjonen går bra - hjernen skiller ikke skarpt mellom reelle og visualiserte opplevelser.
4. **Omdefinering:** Si til deg selv «Jeg er spent» i stedet for «Jeg er nervøs». Forskning viser at denne reframeringen faktisk hjelper.
5. **Fokusering utover:** Flytt fokus fra deg selv til budskapet og publikum. Du er der for å gi dem noe verdifullt.
6. **Anerkjenn nervøsiteten:** Det er normalt å være nervøs, og publikum ser det sjelden like tydelig som du tror.`,
    },
    {
      id: 'kk3-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-4-ex-3',
        number: '2.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Planlegg en 5-minutters presentasjon om et selvvalgt tema. Skriv ned: 1) Innledningskroken din, 2) De tre hovedpoengene du vil dekke, 3) Avslutningen din. Beskriv også hvilken visuell støtte du ville brukt.',
        hints: ['Velg noe du kan mye om - det gjør det lettere å snakke fritt', 'Husk: én idé per lysbilde'],
        solution: 'Et godt svar inneholder en konkret innledningskrok (spørsmål, historie eller overraskende fakta), tre tydelige hovedpunkter i logisk rekkefølge, og en avslutning som oppsummerer eller gir en oppfordring til handling. Visuell støtte bør beskrives med noen få lysbilder (5-7) med bilder og stikkord, ikke fullpakket tekst.',
      },
    },
    {
      id: 'kk3-2-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- En god presentasjon har tredelt struktur: **innledning** med krok, **hoveddel** med 3-5 hovedpunkter, og **avslutning** med oppsummering.
- Lysbilder skal **støtte** budskapet med stikkord og bilder, ikke erstatte presentatøren med manus.
- **Kroppsspråk** (holdning, gester, blikkontakt) og **stemmebruk** (volum, tempo, pauser) forsterker troverdigheten.
- **Nervøsitet** er normalt og kan håndteres gjennom forberedelse, pusteøvelser, positiv visualisering og omdefinering.
- Det viktigste er å flytte fokus fra deg selv til budskapet og publikum.`,
    },
    {
      id: 'kk3-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-4-ex-4',
        number: '2.4.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den anbefalte strukturen for en presentasjon?',
        options: [
          { id: 'a', text: 'Start med konklusjonen, deretter argumenter, og avslutt med spørsmål', isCorrect: false },
          { id: 'b', text: 'Innledning med krok, hoveddel med 3-5 hovedpunkter, avslutning med oppsummering', isCorrect: true },
          { id: 'c', text: 'Les direkte fra manuskriptet fra start til slutt', isCorrect: false },
          { id: 'd', text: 'Improviser hele presentasjonen for å virke naturlig', isCorrect: false },
        ],
        solution: 'Den klassiske tredelte strukturen er innledning (10-15 %), hoveddel (75-80 %) og avslutning (10-15 %). Innledningen fanger oppmerksomheten, hoveddelen presenterer 3-5 hovedpunkter, og avslutningen oppsummerer og gir en sterk slutt.',
      },
    },
    {
      id: 'kk3-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-4-ex-5',
        number: '2.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Se for deg at du holder en presentasjon og merker at publikum ser ned på telefonene sine og virker uengasjerte. Beskriv minst fire konkrete tiltak du kan gjøre der og da for å gjenvinne oppmerksomheten, og forklar hvorfor hvert tiltak kan fungere.',
        hints: ['Tenk på hva som bryter opp monotoni', 'Vurder å involvere publikum aktivt'],
        solution: 'Gode tiltak inkluderer: 1) Still et spørsmål til publikum (aktiverer deltakelse og bryter mønsteret). 2) Fortell en personlig historie eller anekdote (historier fanger oppmerksomheten). 3) Endre tempo og stemmebruk - senk stemmen eller ta en lang pause (overraskelsen vekker oppmerksomhet). 4) Beveg deg - gå ut fra talerstolen, gå mot publikum (fysisk bevegelse tiltrekker blikk). 5) Vis et sterkt visuelt element - bilde, video eller rekvisitt. 6) Anerkjenn elefanten i rommet: «Jeg ser at dere begynner å fade - la meg komme til det mest spennende.»',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Digital profesjonell kommunikasjon
// ============================================================================

export const CHAPTER_KOMKULT3_2_5: TextbookChapter = {
  id: 'komkult3-2-5',
  courseId: 'komkult-3',
  chapterNumber: '2.5',
  title: 'Digital profesjonell kommunikasjon',
  description: 'E-post-etikette, bruk av Teams og samarbeidsverktøy, LinkedIn, nettetikette og digital omdømmebygging i profesjonelle sammenhenger.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte hvordan digitale medier endrer profesjonell kommunikasjon',
    'vurdere eget digitalt fotavtrykk og omdømme',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk3-2-5-intro',
      type: 'text',
      content: `## Digital profesjonell kommunikasjon

I dagens arbeidsliv foregår mesteparten av kommunikasjonen digitalt. E-post, Teams, Slack, LinkedIn og andre plattformer har endret måten vi samarbeider på fundamentalt. Men med digitale kanaler følger også nye utfordringer: misforståelser oppstår lettere uten kroppsspråk, grensen mellom jobb og fritid viskes ut, og det digitale fotavtrykket ditt kan følge deg i årevis.

I dette kapittelet skal du lære:
- Regler for profesjonell e-post
- Effektiv bruk av samarbeidsverktøy som Teams
- Hvordan du bygger profesjonelt omdømme på LinkedIn
- Nettetikette i profesjonelle sammenhenger
- Bevissthet om digitalt fotavtrykk`,
    },
    {
      id: 'kk3-2-5-def-1',
      type: 'definition',
      title: 'Profesjonell e-post',
      content: `**Profesjonell e-post** skiller seg fra privat e-post ved å følge bestemte konvensjoner for tone, struktur og innhold. Kjennetegn: tydelig **emnefelt** som oppsummerer innholdet, høflig men konsis **innledning**, strukturert **hoveddel** med det viktigste først, klar **avslutning** med eventuell handlingsoppfordring, og **profesjonell signatur** med kontaktinformasjon. Hovedregelen er: skriv som om e-posten kan videresendes til hvem som helst - for det kan den.`,
    },
    {
      id: 'kk3-2-5-text-1',
      type: 'text',
      content: `### E-post-etikette i arbeidslivet

**Emnefelt:**
- Skriv alltid et tydelig emnefelt: «Referat fra prosjektmøte 15.03» (bra) vs. «Hei» (dårlig)
- Oppdater emnefeltet når temaet i en e-posttråd endrer seg

**Mottakere:**
- **Til:** De som forventes å handle eller svare
- **Kopi (Cc):** De som bør vite, men ikke trenger å handle
- **Blindkopi (Bcc):** Bruk med forsiktighet - mottakeren er usynlig for andre

**Tone og språk:**
- Vær høflig men ikke overdrevent formell
- Unngå ironi og sarkasme - de fungerer dårlig skriftlig
- Les gjennom e-posten før du sender - ville du sagt dette ansikt til ansikt?
- Unngå STORE BOKSTAVER (oppfattes som roping)

**Svartid:**
- Svar innen 24 timer på arbeidsdager, selv om det bare er en bekreftelse
- «Mottatt, jeg svarer utfyllende innen fredag» er bedre enn ingen respons

**Vedlegg:**
- Referer til vedlegg i brødteksten
- Hold filstørrelsene rimelige
- Bruk PDF-format for dokumenter som ikke skal redigeres`,
    },
    {
      id: 'kk3-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Profesjonell e-post',
      problem: 'Skriv en e-post til en potensiell praksisplass der du presenterer deg selv og spør om muligheter.',
      solution: `**Emne:** Søknad om praksisplass vår 2026 - VG3-elev med interesse for kommunikasjon

Hei [Navn],

Mitt navn er [Ditt navn], og jeg er elev på VG3 ved [Skole] med fordypning i kommunikasjon og kultur. Jeg skriver for å forhøre meg om muligheten for praksisplass hos [Bedrift] i perioden [dato].

Jeg har fulgt [Bedrift] med stor interesse, spesielt [noe konkret om bedriften]. Gjennom studiene mine har jeg utviklet ferdigheter i [relevant kompetanse], og jeg tror jeg kan bidra positivt hos dere.

Kunne det passe med et kort møte eller en telefonsamtale for å diskutere mulighetene?

Jeg legger ved CV-en min for mer informasjon.

Med vennlig hilsen
[Ditt navn]
[Telefonnummer]
[E-postadresse]

---
**Hvorfor denne e-posten fungerer:**
- Tydelig emnefelt som sier hvem du er og hva du vil
- Kort og strukturert - lett å skanne
- Viser at du har satt deg inn i bedriften
- Konkret forespørsel med enkel handling for mottaker
- Profesjonell avslutning med kontaktinfo`,
    },
    {
      id: 'kk3-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-5-ex-1',
        number: '2.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du gjøre hvis du mottar en viktig e-post på jobben som du ikke rekker å svare ordentlig på med en gang?',
        options: [
          { id: 'a', text: 'La den ligge til du har tid til å skrive et grundig svar', isCorrect: false },
          { id: 'b', text: 'Sende en kort bekreftelse på at du har mottatt den og si når du kan svare utfyllende', isCorrect: true },
          { id: 'c', text: 'Videresende den til en kollega uten å kommentere', isCorrect: false },
          { id: 'd', text: 'Slette den og håpe avsenderen sender en ny påminnelse', isCorrect: false },
        ],
        solution: 'Det er alltid bedre å sende en kort bekreftelse enn ingen respons. En enkel melding som «Takk for e-posten. Jeg ser på dette og kommer tilbake med et grundig svar innen [dag]» viser profesjonalitet og respekt for avsenderens tid.',
      },
    },
    {
      id: 'kk3-2-5-def-2',
      type: 'definition',
      title: 'Nettetikette (netiquette)',
      content: `**Nettetikette** (nettiquette) er de uskrevne reglene for god oppførsel i digital kommunikasjon. I profesjonelle sammenhenger innebærer det å tilpasse tonen til kanalen (e-post er mer formelt enn chat), respektere andres tid (korte meldinger, relevante mottakere), unngå å dele konfidensiell informasjon i feil kanal, og tenke over at skriftlig kommunikasjon lett misforstås uten nonverbale signaler.`,
    },
    {
      id: 'kk3-2-5-text-2',
      type: 'text',
      content: `### Samarbeidsverktøy: Teams, Slack og digitale møter

Verktøy som Microsoft Teams og Slack har blitt sentrale i moderne arbeidsplasser, spesielt etter at fjernarbeid ble vanligere.

**Chat vs. e-post - når bruker du hva?**
- **Chat (Teams/Slack):** Raske spørsmål, uformell dialog, korte oppdateringer. «Har du 5 min til en prat?»
- **E-post:** Formell kommunikasjon, lengre beskjeder, dokumentasjon, ekstern kommunikasjon. «Vedlagt finner du prosjektrapporten.»

**Gode vaner for Teams/Slack:**
- Bruk kanaler/tråder for å holde samtaler organisert
- @-tag bare de som trenger å se meldingen
- Hold statusen oppdatert (tilgjengelig, opptatt, i møte)
- Respekter andres «stille timer» - ikke forvent umiddelbart svar
- Bruk emojis med måte i profesjonelle sammenhenger

**Digitale møter (video):**
- Ha kameraet på - det bygger tillit og tilstedeværelse
- Mute mikrofonen når du ikke snakker
- Sørg for god belysning og ryddig bakgrunn
- Unngå multitasking - det synes mer enn du tror`,
    },
    {
      id: 'kk3-2-5-text-3',
      type: 'text',
      content: `### LinkedIn og digital omdømmebygging

**LinkedIn** er verdens største profesjonelle nettverk med over 900 millioner brukere. For mange er det det første stedet en potensiell arbeidsgiver eller samarbeidspartner sjekker deg ut.

**Bygge en god LinkedIn-profil:**
- **Profilbilde:** Profesjonelt foto med nøytral bakgrunn
- **Overskrift:** Mer enn bare stillingstittel - vis hva du kan og interesserer deg for
- **Om-seksjon:** Kort og engasjerende tekst om hvem du er profesjonelt
- **Erfaring og utdanning:** Hold oppdatert med relevante detaljer
- **Ferdigheter og anbefalinger:** Vis kompetanse gjennom bekreftelser fra andre

**Digitalt fotavtrykk og omdømme:**
Alt du legger ut, liker, kommenterer og deler på nett er del av ditt digitale fotavtrykk. Arbeidsgivere googler kandidater, og det som finnes kan påvirke jobbmuligheter.

**Tommelfingerregel:** Før du legger ut noe, spør deg selv: Ville jeg vært komfortabel med at en fremtidig arbeidsgiver ser dette? Ville mormor godkjent dette?`,
    },
    {
      id: 'kk3-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Digitalt fotavtrykk',
      problem: 'Sara søker drømmejobben i et PR-byrå. Rekruttereren googler henne og finner følgende: 1) En profesjonell LinkedIn-profil, 2) Festbilder fra Snapchat som er delt på Instagram, 3) En blogg med gjennomtenkte innlegg om kommunikasjon, 4) En sint kommentar på en avisartikkel. Hva er effekten av hvert funn?',
      solution: `**1. LinkedIn-profil (positivt):** Viser at Sara tar karrieren seriøst og forstår profesjonell nettverksbygging. PR-byrået ser at hun kjenner digitale plattformer.

**2. Festbilder (potensielt negativt):** Avhenger av konteksten, men i en konservativ bransje kan det skape et uprofesjonelt inntrykk. Sara bør gjennomgå personverninnstillingene sine.

**3. Blogg om kommunikasjon (svært positivt):** Viser faglig interesse, skriveferdigheter og engasjement. For et PR-byrå er dette gull - det demonstrerer relevant kompetanse.

**4. Sint kommentar (negativt):** Viser dårlig impulskontroll og kan skape tvil om Saras evne til diplomatisk kommunikasjon - en kjernekompetanse i PR.

**Lærdom:** Det digitale fotavtrykket er sammensatt. Det positive veier tungt, men det negative kan overskygge alt annet.`,
    },
    {
      id: 'kk3-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-5-ex-2',
        number: '2.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfør en «digital selvsøk»: Google ditt eget navn og undersøk hvilke sosiale medier-profiler som dukker opp. Skriv en kort vurdering (ca. 150 ord) av ditt eget digitale fotavtrykk: Hva finner en potensiell arbeidsgiver? Er det noe du bør endre?',
        hints: ['Sjekk personverninnstillinger på sosiale medier', 'Tenk som en rekrutterer - hva er førsteinntrykket?'],
        solution: 'Et godt svar viser at eleven har reflektert over eget digitalt fotavtrykk. Det kan inneholde: hvilke profiler som dukker opp (eller ikke), om bildene er passende i profesjonell sammenheng, om personverninnstillingene er gode nok, og konkrete tiltak for forbedring (oppdatere LinkedIn, slette gamle innlegg, justere personvern).',
      },
    },
    {
      id: 'kk3-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-5-ex-3',
        number: '2.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Når er det mest passende å bruke chat (Teams/Slack) i stedet for e-post i profesjonell sammenheng?',
        options: [
          { id: 'a', text: 'Når du skal sende en offisiell kontrakt til en kunde', isCorrect: false },
          { id: 'b', text: 'Når du vil stille et raskt spørsmål til en kollega om et pågående prosjekt', isCorrect: true },
          { id: 'c', text: 'Når du skal informere hele organisasjonen om en strategiendring', isCorrect: false },
          { id: 'd', text: 'Når du skal sende en klage til en leverandør', isCorrect: false },
        ],
        solution: 'Chat egner seg best for rask, uformell kommunikasjon med kjente kolleger - korte spørsmål, oppdateringer og daglig samarbeid. E-post er bedre for formell, ekstern og dokumenterbar kommunikasjon som kontrakter, klager og viktige beskjeder til mange mottakere.',
      },
    },
    {
      id: 'kk3-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-5-ex-4',
        number: '2.5.4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'En kollega sender en kort melding på Teams: «Ok.» som svar på en detaljert plan du har jobbet lenge med. Hva er den mest sannsynlige forklaringen, og hva bør du gjøre?',
        options: [
          { id: 'a', text: 'Kollegaen er sannsynligvis sint - du bør konfrontere vedkommende umiddelbart', isCorrect: false },
          { id: 'b', text: 'Kort digital kommunikasjon mangler nonverbale signaler, så du bør unngå å overtolke og eventuelt be om en kort prat', isCorrect: true },
          { id: 'c', text: 'Kollegaen er ikke interessert i prosjektet ditt og du bør finne en annen samarbeidspartner', isCorrect: false },
          { id: 'd', text: 'Du bør sende en lang e-post der du forklarer hvor mye arbeid du la ned', isCorrect: false },
        ],
        solution: 'Digital kommunikasjon mangler nonverbale signaler som tonefall, kroppsspråk og ansiktsuttrykk. Et kort «Ok.» kan bety alt fra «Flott, godkjent!» til «Mottatt, jeg ser på det senere» - vi vet ikke. Den beste tilnærmingen er å ikke overtolke, og eventuelt be om en kort samtale hvis du trenger tydeligere tilbakemelding.',
      },
    },
    {
      id: 'kk3-2-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Profesjonell e-post** krever tydelig emnefelt, strukturert innhold, høflig tone og rask respons.
- **Chat-verktøy** (Teams/Slack) brukes for rask, uformell kollegakommunikasjon, mens e-post brukes for formell og ekstern kommunikasjon.
- **Nettetikette** handler om å tilpasse tone og atferd til den digitale kanalen og konteksten.
- **LinkedIn** er det viktigste profesjonelle nettverket og krever en gjennomtenkt profil.
- **Digitalt fotavtrykk** er summen av alt du har gjort og sagt på nett - og det kan følge deg i årevis.
- Hovedregel: Tenk før du poster. Ville du vært komfortabel med at en fremtidig arbeidsgiver ser dette?`,
    },
    {
      id: 'kk3-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-2-5-ex-5',
        number: '2.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand: «I fremtidens arbeidsliv vil det å ha en sterk digital profesjonell tilstedeværelse være like viktig som en god CV.» Bruk eksempler fra ulike bransjer og vurder fordeler og ulemper med økt digital synlighet.',
        hints: ['Tenk på bransjer der digital tilstedeværelse allerede er viktig (media, markedsføring) vs. bransjer der det er mindre relevant', 'Vurder personvernaspektet'],
        solution: 'Et godt svar drøfter for (synlighet for rekrutterere, nettverksbygging, demonstrert kompetanse gjennom innhold) og mot (personvern, press om selvpromotering, digitalt klasseskille). Eksempler: I PR og markedsføring er digital profil nesten obligatorisk, mens i håndverksbransjer teller praktisk erfaring mer. Nyansering: digital tilstedeværelse kan utfylle, men bør ikke erstatte, reell kompetanse.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT3_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT3_2_1,
  CHAPTER_KOMKULT3_2_2,
  CHAPTER_KOMKULT3_2_3,
  CHAPTER_KOMKULT3_2_4,
  CHAPTER_KOMKULT3_2_5,
];
