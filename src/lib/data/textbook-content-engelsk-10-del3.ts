/**
 * Tekstbok innhold for Engelsk 10. klasse - Del 3 (Kapittel 8-9)
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 * Fokus på globale utfordringer, identitet og tilhørighet.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8: Global Challenges
// ============================================================================

export const CHAPTER_ENGELSK_10_8: TextbookChapter = {
  id: 'engelsk-10-8',
  courseId: 'engelsk-10',
  chapterNumber: '8',
  title: 'Global Challenges',
  description: 'Utforsk globale utfordringer som klimaendringer, migrasjon, ulikhet og teknologi, og lær å drøfte disse temaene på engelsk med faglig dybde.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske og beskrive levemåter, samfunnsforhold og verdier i ulike engelskspråklige land og sammenligne med eget samfunn',
    'uttrykke seg med flyt og sammenheng tilpasset formål og situasjon',
    'bruke variert ordforråd og idiomatiske uttrykk i skriftlig og muntlig kommunikasjon',
    'diskutere og drøfte ulike emner knyttet til samfunn, politikk og etikk på engelsk',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-8-intro',
      type: 'text',
      content: `## Global Challenges — Utfordringer som angår oss alle

Verden står overfor en rekke store utfordringer som krever internasjonalt samarbeid. Klimaendringer, migrasjon, økonomisk ulikhet og teknologiens rolle i samfunnet er temaer som påvirker mennesker overalt — og som du forventes å kunne drøfte på engelsk.

I 2015 vedtok FN **17 Sustainable Development Goals (SDGs)** — bærekraftsmålene — som skal nås innen 2030. Disse målene dekker alt fra fattigdom og sult til klimahandling og rettferdige samfunn. Å forstå disse målene er nøkkelen til å delta i den globale samtalen.

**Hvorfor er dette viktig for engelskfaget?**
- Engelsk er det viktigste internasjonale kommunikasjonsspråket
- FN, klimatoppmøter og internasjonale organisasjoner opererer på engelsk
- Du skal kunne lese, analysere og drøfte engelskspråklige kilder om globale temaer
- Eksamen kan inneholde oppgaver om globale utfordringer

**I dette kapittelet skal du:**
1. Lære viktig fagvokabular knyttet til globale utfordringer
2. Forstå klimadebatten og kunne argumentere på engelsk
3. Drøfte migrasjon, ulikhet og teknologiens rolle
4. Skrive og diskutere om disse temaene med faglig dybde`,
    },

    // ========== DEFINISJON 1: CLIMATE CHANGE ==========
    {
      id: 'engelsk-10-8-def-1',
      type: 'definition',
      title: 'Climate Change — Nøkkelbegreper og fagspråk',
      content: `**Climate change** (klimaendringer) refererer til langsiktige endringer i temperatur og værmønstre, primært forårsaket av menneskelig aktivitet siden den industrielle revolusjonen.

**Viktige begreper:**
- **Global warming** — Den generelle oppvarmingen av jordens klima
- **Greenhouse effect** — Drivhuseffekten: gasser som CO₂ og metan fanger varme i atmosfæren
- **Carbon footprint** — Karbonfotavtrykk: mengden CO₂ en person, bedrift eller aktivitet forårsaker
- **Fossil fuels** — Fossilt brensel (kull, olje, gass) som frigjør CO₂ ved forbrenning
- **Renewable energy** — Fornybar energi (sol, vind, vann, geotermisk)
- **Deforestation** — Avskoging: felling av skog som absorberer CO₂
- **Net zero** — Netto null: når et land eller selskap fjerner like mye CO₂ som det slipper ut
- **COP** — Conference of the Parties: FNs årlige klimatoppmøte

**Nyttige setningsstrukturer:**
- "According to the IPCC, global temperatures have risen by..."
- "One of the most pressing challenges facing humanity is..."
- "Unless we take immediate action, the consequences will be..."
- "The transition to renewable energy is essential because..."`,
    },

    // ========== EKSEMPEL 1: KLIMAARGUMENTASJON ==========
    {
      id: 'engelsk-10-8-example-1',
      type: 'example',
      title: 'Eksempel: Argumentere om klimatiltak på engelsk',
      problem: 'Skriv et avsnitt der du argumenterer for at rike land bør betale mer for klimatiltak i utviklingsland.',
      solution: `**Modellavsnitt:**

"Wealthy nations have a moral and historical obligation to fund climate action in developing countries. First of all, industrialised countries such as the United States, the United Kingdom, and Germany are responsible for the majority of cumulative greenhouse gas emissions since the Industrial Revolution. For instance, the US alone accounts for approximately 25% of all historical CO₂ emissions, while the entire African continent has contributed less than 4%. Furthermore, climate change disproportionately affects the world's poorest communities, who lack the resources to adapt. Small island nations like Tuvalu and the Maldives face the existential threat of rising sea levels, despite having contributed almost nothing to the problem. The UN's principle of 'common but differentiated responsibilities' recognises this imbalance. Therefore, it is both just and necessary for wealthy nations to provide financial support through mechanisms such as the Green Climate Fund."

**Analyse:**
- **Thesis:** Tydelig standpunkt i første setning
- **Evidence:** Konkrete tall og eksempler (USA 25%, Afrika 4%)
- **Transitions:** "First of all", "For instance", "Furthermore", "Therefore"
- **Academic tone:** Formelt språk, referanse til FN-prinsipper
- **Ethical argument:** Moralsk og historisk ansvar kobles til fakta

*Note: This is an example of how to structure an argument essay. A strong counter-essay could argue that all countries must take responsibility for their own emissions, or that market-based solutions are more effective than international redistribution. The essay above represents ONE perspective, chosen to demonstrate essay technique.*`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-1',
        number: '8.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "carbon footprint"?',
        options: [
          {
            id: 'a',
            text: 'Mengden CO₂ en person, bedrift eller aktivitet forårsaker',
            isCorrect: true,
            feedback: 'Riktig! Carbon footprint måler den totale mengden drivhusgasser som genereres av våre handlinger.',
          },
          {
            id: 'b',
            text: 'Et fotavtrykk laget av karbon i bakken',
            isCorrect: false,
            feedback: 'Feil. "Carbon footprint" er et bildespråk — det handler om klimapåvirkning, ikke fysiske avtrykk.',
          },
          {
            id: 'c',
            text: 'Antall trær som er plantet for å kompensere for utslipp',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver ligner mer på "carbon offsetting". Footprint måler selve utslippet.',
          },
          {
            id: 'd',
            text: 'En internasjonal avtale om å redusere forurensning',
            isCorrect: false,
            feedback: 'Feil. En internasjonal klimaavtale kalles f.eks. "The Paris Agreement". Footprint er et mål på personlig eller kollektiv klimapåvirkning.',
          },
        ],
        solution: 'Carbon footprint er den totale mengden drivhusgasser (målt i CO₂-ekvivalenter) som en person, organisasjon eller aktivitet produserer direkte og indirekte.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-2',
        number: '8.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble hvert FN bærekraftsmål (SDG) til riktig beskrivelse på engelsk.',
        subTasks: [
          {
            label: 'a',
            task: 'SDG 13: Climate Action',
            solution: 'Take urgent action to combat climate change and its impacts. Dette målet handler om å redusere utslipp, tilpasse seg klimaendringer og styrke motstandskraften mot klimarelaterte farer.',
            multipleChoiceOptions: ['Take urgent action to combat climate change', 'Ensure access to clean water and sanitation', 'Promote inclusive and sustainable economic growth', 'Reduce inequality within and among countries'],
          },
          {
            label: 'b',
            task: 'SDG 10: Reduced Inequalities',
            solution: 'Reduce inequality within and among countries. Målet fokuserer på å minske forskjellene mellom rike og fattige — både innad i land og mellom land.',
            multipleChoiceOptions: ['Reduce inequality within and among countries', 'End hunger and achieve food security', 'Ensure inclusive quality education', 'Take urgent action to combat climate change'],
          },
          {
            label: 'c',
            task: 'SDG 4: Quality Education',
            solution: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. Alle barn og unge skal ha tilgang til god utdanning.',
            multipleChoiceOptions: ['Ensure inclusive and equitable quality education', 'Promote peaceful and inclusive societies', 'Achieve gender equality', 'End poverty in all its forms everywhere'],
          },
        ],
        solution: 'a) Climate Action = bekjempe klimaendringer, b) Reduced Inequalities = redusere ulikhet, c) Quality Education = sikre inkluderende utdanning. FNs bærekraftsmål gir et felles rammeverk for å diskutere globale utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: MIGRATION ==========
    {
      id: 'engelsk-10-8-def-2',
      type: 'definition',
      title: 'Migration — Typer, årsaker og konsekvenser',
      content: `**Migration** (migrasjon) er forflytning av mennesker fra ett sted til et annet, enten innenfor et land eller på tvers av landegrenser.

**Typer migrasjon:**
- **Immigration** — Å flytte til et nytt land (innvandring)
- **Emigration** — Å forlate hjemlandet (utvandring)
- **Internal migration** — Flytting innenfor et land (f.eks. fra bygd til by)
- **Forced migration** — Tvungen migrasjon på grunn av krig, forfølgelse eller naturkatastrofer
- **Voluntary migration** — Frivillig migrasjon for bedre muligheter

**Viktige begreper:**
- **Refugee** — Flyktning: en person som har flyktet fra krig eller forfølgelse (beskyttet av FN-konvensjonen)
- **Asylum seeker** — Asylsøker: en person som har søkt om beskyttelse i et annet land
- **Displaced person** — Fordrevet person: en som er tvunget til å forlate hjemmet sitt
- **Diaspora** — Spredningen av et folk utenfor hjemlandet
- **Integration** — Prosessen der innvandrere blir en del av det nye samfunnet
- **Brain drain** — Hjerneflukt: når høyt utdannede forlater hjemlandet

**Push and pull factors:**
- **Push factors** (faktorer som driver folk bort): krig, fattigdom, naturkatastrofer, forfølgelse, mangel på muligheter
- **Pull factors** (faktorer som trekker folk til): sikkerhet, jobber, utdanning, frihet, familiereunion`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-3',
        number: '8.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom en "refugee" og en "asylum seeker"?',
        options: [
          {
            id: 'a',
            text: 'En refugee har fått innvilget beskyttelse, mens en asylum seeker venter på svar på søknaden sin',
            isCorrect: true,
            feedback: 'Riktig! En refugee er offisielt anerkjent som flyktning, mens en asylum seeker er i prosessen med å søke om denne statusen.',
          },
          {
            id: 'b',
            text: 'En refugee kommer fra krig, mens en asylum seeker kommer fra fattigdom',
            isCorrect: false,
            feedback: 'Feil. Begge kan flykte fra krig eller forfølgelse. Forskjellen handler om juridisk status, ikke årsaken til flukten.',
          },
          {
            id: 'c',
            text: 'Det er ingen forskjell — ordene betyr det samme',
            isCorrect: false,
            feedback: 'Feil. Det er en viktig juridisk forskjell. En refugee har offisiell flyktningestatus, en asylum seeker har søkt men ikke fått svar ennå.',
          },
          {
            id: 'd',
            text: 'En refugee bor i en leir, mens en asylum seeker bor i et vanlig hjem',
            isCorrect: false,
            feedback: 'Feil. Boforhold varierer for begge grupper. Forskjellen handler om juridisk status, ikke hvor man bor.',
          },
        ],
        solution: 'En refugee har fått formell flyktningestatus og beskyttelse under FNs flyktningkonvensjon. En asylum seeker har søkt om slik beskyttelse, men venter fortsatt på avgjørelsen.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-4',
        number: '8.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kategoriser følgende faktorer som enten "push factors" eller "pull factors" for migrasjon, og skriv en kort forklaring på engelsk for hver.',
        subTasks: [
          {
            label: 'a',
            task: 'A civil war has been raging in the country for five years.',
            solution: 'Push factor. War and armed conflict are among the strongest push factors, forcing people to flee for their lives. "Civil war is a major push factor because it threatens people\'s safety and destroys infrastructure."',
            multipleChoiceOptions: ['Push factor', 'Pull factor'],
          },
          {
            label: 'b',
            task: 'The neighbouring country offers free university education.',
            solution: 'Pull factor. Access to education is a pull factor that attracts people to new countries. "Free university education is a pull factor because it offers opportunities for personal and professional development."',
            multipleChoiceOptions: ['Pull factor', 'Push factor'],
          },
          {
            label: 'c',
            task: 'A severe drought has destroyed all the crops in the region.',
            solution: 'Push factor. Natural disasters and climate-related events push people away from affected areas. "Drought is a push factor because it destroys livelihoods and threatens food security."',
            multipleChoiceOptions: ['Push factor', 'Pull factor'],
          },
          {
            label: 'd',
            task: 'A tech company in Silicon Valley is recruiting skilled workers from abroad.',
            solution: 'Pull factor. Job opportunities and economic prospects attract migrants. "Recruitment by international companies is a pull factor because it promises employment and higher wages."',
            multipleChoiceOptions: ['Pull factor', 'Push factor'],
          },
        ],
        solution: 'a) Push (krig), b) Pull (utdanning), c) Push (naturkatastrofe), d) Pull (jobbmuligheter). Push- og pull-faktorer virker ofte sammen og forklarer hvorfor mennesker migrerer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 3: INEQUALITY AND TECHNOLOGY ==========
    {
      id: 'engelsk-10-8-def-3',
      type: 'definition',
      title: 'Inequality and Technology — Ulikhet i en digital verden',
      content: `**Inequality** (ulikhet) finnes i mange former: økonomisk, sosial, digital og global. Teknologi kan både redusere og forsterke ulikhet.

**Typer ulikhet:**
- **Economic inequality** — Forskjeller i inntekt og formue mellom individer og land
- **Social inequality** — Ulik tilgang til utdanning, helse, bolig og rettigheter
- **Digital divide** — Det digitale skillet: ulik tilgang til teknologi og internett
- **Gender inequality** — Kjønnsbasert ulikhet i muligheter, rettigheter og representasjon
- **Global inequality** — Forskjellene mellom rike og fattige land

**Teknologi som løsning:**
- Telemedisin gir helsetjenester til avsidesliggende områder
- E-learning gir tilgang til utdanning uavhengig av geografi
- Mobilbank (f.eks. M-Pesa i Kenya) gir finansielle tjenester til folk uten bankkonto
- Sosiale medier gir marginaliserte grupper en stemme

**Teknologi som utfordring:**
- **AI bias** — Kunstig intelligens kan forsterke eksisterende fordommer
- **Surveillance** — Overvåkningsteknologi kan true personvern og frihet
- **Automation** — Automatisering truer lavtlønnede arbeidsplasser
- **Misinformation** — Falsk informasjon spres raskt via digitale plattformer
- **Data exploitation** — Teknologiselskaper utnytter brukernes data for profitt`,
    },

    // ========== EKSEMPEL 2: DRØFTINGSAVSNITT ==========
    {
      id: 'engelsk-10-8-example-2',
      type: 'example',
      title: 'Eksempel: Drøfte teknologiens rolle i global ulikhet',
      problem: 'Skriv et drøftingsavsnitt der du diskuterer om teknologi reduserer eller forsterker global ulikhet.',
      solution: `**Modellavsnitt:**

"The relationship between technology and global inequality is complex and contradictory. On the one hand, technological innovation has the power to level the playing field. For example, the mobile banking service M-Pesa has transformed the economy in Kenya, allowing millions of people without traditional bank accounts to send money, pay bills, and access loans through their mobile phones. Similarly, platforms like Khan Academy and Coursera provide free world-class education to anyone with an internet connection, regardless of their geographical location or socioeconomic background.

On the other hand, technology can also deepen existing inequalities. The digital divide remains a significant barrier: according to the United Nations, approximately 2.7 billion people — roughly one third of the world's population — still lack access to the internet. Furthermore, the benefits of artificial intelligence and automation tend to concentrate in wealthy nations and corporations, while the jobs displaced by these technologies are often in developing countries. As a result, the gap between the technology 'haves' and 'have-nots' risks widening further.

Ultimately, technology is neither inherently good nor bad — its impact depends on who controls it, who benefits from it, and whether policies are in place to ensure equitable access."

**Analyse:**
- **Balansert drøfting:** Begge sider presenteres med "On the one hand... On the other hand..."
- **Konkrete eksempler:** M-Pesa, Khan Academy, FN-statistikk
- **Nyansert konklusjon:** Unngår sort-hvitt tenkning
- **Overganger:** "Similarly", "Furthermore", "As a result", "Ultimately"`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-5',
        number: '8.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr "the digital divide"?',
        options: [
          {
            id: 'a',
            text: 'Ulik tilgang til teknologi og internett mellom ulike grupper og regioner',
            isCorrect: true,
            feedback: 'Riktig! The digital divide handler om at noen har tilgang til moderne teknologi mens andre ikke har det, noe som forsterker eksisterende ulikheter.',
          },
          {
            id: 'b',
            text: 'Forskjellen mellom analog og digital teknologi',
            isCorrect: false,
            feedback: 'Feil. "The digital divide" handler ikke om teknologityper, men om ulik tilgang til digitale ressurser mellom mennesker og samfunn.',
          },
          {
            id: 'c',
            text: 'Konflikten mellom teknologiselskaper og myndigheter',
            isCorrect: false,
            feedback: 'Feil. Selv om det finnes spenninger mellom tech-selskaper og myndigheter, handler "the digital divide" om ulikhet i tilgang til teknologi.',
          },
          {
            id: 'd',
            text: 'Oppdelingen av internett i ulike nasjonale nettverk',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver ligner mer på "splinternet" eller "internet fragmentation". The digital divide handler om tilgangsulikhet.',
          },
        ],
        solution: 'The digital divide er gapet mellom de som har tilgang til moderne informasjons- og kommunikasjonsteknologi og de som ikke har det. Skillet kan være geografisk, økonomisk, aldersbasert eller kjønnsbasert.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-6',
        number: '8.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg én av de tre globale utfordringene (climate change, migration, inequality) og skriv et kort avsnitt (80-120 ord) på engelsk der du forklarer utfordringen og foreslår én løsning.',
        hints: [
          'Start med en topic sentence som introduserer utfordringen',
          'Bruk minst to fagbegreper fra kapittelet',
          'Inkluder ett konkret eksempel',
          'Avslutt med løsningsforslaget ditt',
        ],
        solution: 'Avsnittet vurderes etter: Topic sentence (klar?), Fagvokabular (minst 2 begreper?), Eksempel (konkret og relevant?), Løsningsforslag (realistisk?), og Språk (variert og korrekt?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-8-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-7',
        number: '8.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les påstanden under og skriv et kort motargument (50-80 ord) på engelsk. Bruk overgangsfaser og fagspråk.',
        subTasks: [
          {
            label: 'a',
            task: '"Climate change is not a real problem — the Earth\'s climate has always changed naturally."',
            solution: 'Motargument bør inkludere: Forskjellen mellom naturlige klimasykluser og menneskeskapt oppvarming, tempo på endringene, vitenskapelig konsensus (97% av klimaforskere), og referanse til IPCC eller konkrete data.',
          },
          {
            label: 'b',
            task: '"Rich countries should not help developing nations with climate change — every country should solve its own problems."',
            solution: 'Motargument bør inkludere: Historisk ansvar for utslipp, at klimaendringer ikke respekterer landegrenser, "common but differentiated responsibilities", og at utviklingsland rammes hardest uten å ha forårsaket problemet.',
          },
        ],
        hints: [
          'Start med "While it is true that..." for å anerkjenne motpartens poeng',
          'Bruk fakta og eksempler for å underbygge ditt motargument',
          'Bruk fagbegreper som "greenhouse effect", "historical emissions", "IPCC"',
        ],
        solution: 'Gode motargumenter anerkjenner motpartens synspunkt før de presenterer sin egen posisjon med fakta og logikk. Bruk "concession + rebuttal"-strukturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-8-summary',
      type: 'text',
      content: `## Oppsummering: Globale utfordringer på engelsk

### Nøkkelbegreper du har lært:

| Tema | Viktige begreper | Nyttig setningsstruktur |
|------|-----------------|------------------------|
| **Climate change** | Carbon footprint, greenhouse effect, net zero, renewable energy | "According to the IPCC..." |
| **Migration** | Push/pull factors, refugee, asylum seeker, diaspora, integration | "One of the main push factors is..." |
| **Inequality** | Digital divide, economic inequality, AI bias, automation | "The gap between... and... continues to widen" |
| **Technology** | Surveillance, misinformation, data exploitation | "Technology has the potential to..." |

### Slik argumenterer du godt om globale temaer:
1. **Bruk fagvokabular** — Vis at du kan de engelske begrepene
2. **Vis til konkrete eksempler** — Land, organisasjoner, tall og statistikk
3. **Drøft balansert** — Presenter begge sider før du konkluderer
4. **Koble til FNs bærekraftsmål** — Vis at du kjenner det internasjonale rammeverket
5. **Bruk gode overgangsfaser** — "On the one hand...", "Furthermore...", "However..."`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-8-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-8',
        number: '8.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en artikkel (250-350 ord) for en engelskspråklig skoleavis om én global utfordring du mener er spesielt viktig. Følg artikkelstrukturen du lærte i kapittel 1.',
        hints: [
          'Lag en fengende headline som trekker leseren inn',
          'Start med en lead paragraph som svarer på de 5 W-ene',
          'Bruk minst fem fagbegreper fra dette kapittelet',
          'Inkluder minst ett "sitat" fra en relevant kilde (kan være konstruert)',
          'Koble til minst ett av FNs bærekraftsmål',
          'Avslutt med en call to action — hva kan leserne gjøre?',
        ],
        solution: 'Artikkelen vurderes etter: Headline (fengende og relevant?), Struktur (lead + body + conclusion?), Fagvokabular (minst 5 begreper?), Argumentasjon (logisk og velbegrunnet?), Kobling til SDG (relevant?), og Språk (variert, korrekt, engasjerende?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-8-ex-9',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-9',
        number: '8.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbered en kort tale (2-3 minutter) til FNs ungdomsforsamling der du presenterer en løsning på en global utfordring. Skriv manuskriptet på engelsk.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg én utfordring: climate change, migration, inequality eller technology. Skriv en fengende åpning som fanger publikums oppmerksomhet.',
            solution: 'En god åpning kan bruke et retorisk spørsmål, en overraskende statistikk, en personlig historie, eller et sitat. F.eks.: "Imagine a world where your hometown is underwater. For millions of people, this is not a hypothetical — it is their reality."',
          },
          {
            label: 'b',
            task: 'Presenter problemet med fakta og eksempler, forklar løsningen din, og avslutt med en sterk oppfordring til handling.',
            solution: 'Hoveddelen bør inneholde 2-3 konkrete fakta, en tydelig løsning med begrunnelse, og en avslutning som appellerer til følelser og handling. Bruk retoriske virkemidler som gjentakelse, trepartsliste og direkte henvendelse.',
          },
        ],
        hints: [
          'Bruk retoriske virkemidler: rhetorical questions, repetition, rule of three',
          'Henvend deg direkte til publikum: "You have the power to..."',
          'Kombiner fakta (logos) med følelser (pathos) og troverdighet (ethos)',
          'Øv på å fremføre talen — tidsbruk, kontakt med publikum, stemmebruk',
        ],
        solution: 'Talen vurderes etter: Åpning (engasjerende?), Innhold (fakta + løsning?), Retoriske virkemidler (brukt effektivt?), Fagvokabular (relevant?), Avslutning (sterk oppfordring?), og Språk (flytende og korrekt?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Identity and Belonging
// ============================================================================

export const CHAPTER_ENGELSK_10_9: TextbookChapter = {
  id: 'engelsk-10-9',
  courseId: 'engelsk-10',
  chapterNumber: '9',
  title: 'Identity and Belonging',
  description: 'Utforsk temaene identitet, tilhørighet og selvuttrykk gjennom litteratur, refleksjon og personlige tekster på engelsk.',
  estimatedMinutes: 85,
  competenceGoals: [
    'lese, diskutere og reflektere over innhold og virkemidler i engelskspråklige tekster fra ulike kilder',
    'uttrykke seg med flyt og sammenheng tilpasset formål og situasjon',
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden og sammenligne med egne erfaringer',
    'skrive kreative, informative og argumenterende tekster med struktur og sammenheng',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-9-intro',
      type: 'text',
      content: `## Identity and Belonging — Hvem er du, og hvor hører du til?

"Who am I?" er et av de mest grunnleggende spørsmålene vi stiller oss selv. I tenårene er dette spørsmålet spesielt intenst — du former din identitet, tester grenser og søker etter din plass i verden.

Identitet handler ikke bare om hvem du er på innsiden, men også om hvordan du forholder deg til andre mennesker, kulturer og steder. **Belonging** — følelsen av tilhørighet — er et grunnleggende menneskelig behov: vi trenger å føle at vi passer inn et sted, at noen forstår oss, og at vi har en plass i fellesskapet.

**Identitet er sammensatt av mange lag:**
- **Personal identity** — Personlighet, verdier, drømmer og erfaringer
- **Cultural identity** — Språk, tradisjoner, matkultur, religion og skikker
- **Social identity** — Gruppetilhørighet, venner, familie, klasse, kjønn
- **National identity** — Tilhørighet til et land, nasjonale verdier og historie
- **Digital identity** — Hvem du er på nett, sosiale medier, online personas

**Litteraturen som speil og vindu:**
Engelskspråklig litteratur er full av tekster som utforsker identitet og tilhørighet. Gjennom å lese om andres erfaringer kan vi:
- **Speile** våre egne følelser og opplevelser (mirror)
- **Se inn i** andres virkelighet og utvide perspektivet vårt (window)
- **Bygge empati** og forståelse for mennesker som er forskjellige fra oss

I dette kapittelet skal du lese, reflektere og skrive om identitet — både din egen og andres.`,
    },

    // ========== DEFINISJON 1: COMING-OF-AGE ==========
    {
      id: 'engelsk-10-9-def-1',
      type: 'definition',
      title: 'Coming-of-Age — Oppvekstfortellinger i litteraturen',
      content: `**Coming-of-age** er en sjanger (også kalt *Bildungsroman*) som handler om en ung persons reise mot voksenlivet. Hovedpersonen går gjennom erfaringer som forandrer dem — de mister uskyld, møter motgang og utvikler en dypere forståelse av seg selv og verden.

**Typiske kjennetegn:**
- **Loss of innocence** — Karakteren opplever noe som endrer deres verdenssyn
- **Identity crisis** — Karakteren stiller spørsmål ved hvem de er
- **Conflict with authority** — Konflikter med foreldre, lærere eller samfunnet
- **First love** — Forelskelse og romantiske erfaringer
- **Moral growth** — Moralsk utvikling gjennom vanskelige valg
- **Self-discovery** — Oppdagelsen av hvem man virkelig er

**Klassiske eksempler:**
- *To Kill a Mockingbird* (Harper Lee) — Scout lærer om rasisme og rettferdighet i Sør-USA
- *The Catcher in the Rye* (J.D. Salinger) — Holden Caulfield kjemper mot det voksne samfunnets hykleri
- *The Perks of Being a Wallflower* (Stephen Chbosky) — Charlie navigerer vennskap, tap og tilhørighet
- *The Absolutely True Diary of a Part-Time Indian* (Sherman Alexie) — Junior balanserer urfolksidentitet og livet på en "hvit" skole
- *The Hate U Give* (Angie Thomas) — Starr finner sin stemme etter en politivoldsopplevelse`,
    },

    // ========== EKSEMPEL 1: TEKSTANALYSE ==========
    {
      id: 'engelsk-10-9-example-1',
      type: 'example',
      title: 'Eksempel: Analysere identitetstematikk i en litterær tekst',
      problem: 'Les utdraget nedenfor og analyser hvordan forfatteren utforsker temaet identitet.\n\n*"I am not what happened to me. I am what I choose to become. But sometimes, late at night, when the house is quiet and the world feels too big, I wonder if I\'m just performing a version of myself that everyone expects to see. At school I\'m the funny one. At home I\'m the responsible one. Online I\'m whoever gets the most likes. But alone, in the dark, I\'m just a girl trying to figure out which version is real."*',
      solution: `**Modellanalyse:**

Utdraget utforsker identitet som noe **fragmentert og kontekstavhengig**. Fortelleren beskriver hvordan hun har ulike "versjoner" av seg selv avhengig av situasjonen — noe som er svært gjenkjennelig for tenåringer.

**Identitetsproblematikk:**
Teksten begynner med en sterk påstand — "I am not what happened to me. I am what I choose to become" — som uttrykker **agency** (handlekraft). Men denne selvtilliten brytes ned av tvilen som følger: "I wonder if I'm just performing a version of myself." Dette viser **konflikten mellom den identiteten vi viser utad og den vi føler innad**.

**Litterære virkemidler:**
- **Kontrast:** "At school... At home... Online... But alone" — fire ulike kontekster settes opp mot hverandre
- **Gjentakelse:** Bruken av "I'm" i fire ulike setninger understreker fragmenteringen
- **Imagery:** "late at night, when the house is quiet and the world feels too big" — skaper en stemning av sårbarhet og ensomhet
- **Retorisk spørsmål (implisitt):** "which version is real?" — spørsmålet blir stående ubesvart, noe som gjenspeiler usikkerheten

**Kobling til tematikk:**
Utdraget illustrerer det sosiologiske begrepet **"social performance"** (Erving Goffman) — ideen om at vi alle spiller roller tilpasset ulike situasjoner. For tenåringer, som er i ferd med å forme sin identitet, kan dette føles spesielt intenst og forvirrende.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-1',
        number: '9.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en "coming-of-age story"?',
        options: [
          {
            id: 'a',
            text: 'En fortelling om en ung persons reise mot voksenlivet, med fokus på selvutvikling og identitet',
            isCorrect: true,
            feedback: 'Riktig! Coming-of-age handler om overgangen fra barndom til voksenlivet, med erfaringer som former hvem man blir.',
          },
          {
            id: 'b',
            text: 'En biografi om en gammel person som ser tilbake på livet sitt',
            isCorrect: false,
            feedback: 'Feil. Det er en memoar eller selvbiografi. Coming-of-age fokuserer på ungdomstiden og identitetsdannelse.',
          },
          {
            id: 'c',
            text: 'En eventyrfortelling med magiske elementer',
            isCorrect: false,
            feedback: 'Feil. Eventyr er en annen sjanger. Coming-of-age er mer realistisk og handler om personlig utvikling.',
          },
          {
            id: 'd',
            text: 'En spenningsroman der hovedpersonen løser en kriminalgåte',
            isCorrect: false,
            feedback: 'Feil. Det er en krimroman. Coming-of-age handler om moralsk vekst og selvoppdagelse, ikke etterforskning.',
          },
        ],
        solution: 'En coming-of-age story (Bildungsroman) følger en ung persons utvikling fra barn til voksen, med fokus på erfaringer som former identiteten — tap av uskyld, konflikter, selvoppdagelse og moralsk vekst.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-2',
        number: '9.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble hvert coming-of-age-kjennetegn til riktig beskrivelse.',
        subTasks: [
          {
            label: 'a',
            task: 'Loss of innocence',
            solution: 'Karakteren opplever noe som for alltid endrer deres verdenssyn — de forstår at verden ikke er så enkel eller rettferdig som de trodde.',
            multipleChoiceOptions: ['Opplever noe som endrer verdenssynet', 'Forelsker seg for første gang', 'Oppdager en skjult talenter', 'Flytter til et nytt land'],
          },
          {
            label: 'b',
            task: 'Conflict with authority',
            solution: 'Karakteren utfordrer foreldre, lærere eller samfunnets regler, ofte fordi de begynner å tenke selvstendig og stille spørsmål ved etablerte normer.',
            multipleChoiceOptions: ['Utfordrer foreldre, lærere eller samfunnets regler', 'Opplever noe som endrer verdenssynet', 'Stiller spørsmål ved hvem de er', 'Tar et vanskelig moralsk valg'],
          },
          {
            label: 'c',
            task: 'Self-discovery',
            solution: 'Karakteren oppdager hvem de virkelig er — deres verdier, styrker, svakheter og plass i verden. Dette er ofte resultatet av hele reisen.',
            multipleChoiceOptions: ['Oppdager hvem de virkelig er', 'Forelsker seg for første gang', 'Utfordrer foreldre eller lærere', 'Mister noen de er glad i'],
          },
        ],
        solution: 'a) Loss of innocence = verdenssyn endres, b) Conflict with authority = utfordrer normer og regler, c) Self-discovery = finner ut hvem man er. Disse elementene henger ofte sammen i en coming-of-age fortelling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: CULTURAL IDENTITY ==========
    {
      id: 'engelsk-10-9-def-2',
      type: 'definition',
      title: 'Cultural Identity — Kulturell identitet og flerkulturell tilhørighet',
      content: `**Cultural identity** (kulturell identitet) er den delen av identiteten som formes av kulturen du vokser opp i og tilhører — språk, tradisjoner, verdier, mat, musikk, religion og sosiale normer.

**Viktige begreper:**
- **Heritage** — Kulturarv: tradisjoner og verdier som videreføres mellom generasjoner
- **Multicultural** — Flerkulturell: et samfunn med mange ulike kulturer
- **Bicultural** — Tokulturell: å tilhøre to kulturer samtidig (f.eks. norsk-pakistansk)
- **Code-switching** — Å bytte mellom ulike språk eller væremåter avhengig av kontekst
- **Assimilation** — Å tilpasse seg dominerende kultur (ofte på bekostning av egen)
- **Acculturation** — Å ta til seg elementer fra en ny kultur mens man beholder sin egen
- **Third culture kid (TCK)** — Barn som vokser opp i en annen kultur enn foreldrenes

**Utfordringer ved flerkulturell identitet:**
- Å føle seg "for norsk" i foreldrenes hjemland og "for utenlandsk" i Norge
- Å navigere mellom ulike forventninger fra familie og venner
- Å føle at du må velge mellom kulturer istedenfor å favne begge
- Å oppleve rasisme eller fordommer som setter spørsmålstegn ved din tilhørighet

**Styrker ved flerkulturell identitet:**
- Bredere perspektiv og flerspråklighet
- Evne til å forstå og kommunisere med ulike grupper
- Kulturell rikdom og fleksibilitet
- Empati og forståelse for forskjellighet`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-3',
        number: '9.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "code-switching" i sammenheng med kulturell identitet?',
        options: [
          {
            id: 'a',
            text: 'Å bytte mellom ulike språk eller væremåter avhengig av kontekst og situasjon',
            isCorrect: true,
            feedback: 'Riktig! Code-switching er vanlig for flerkulturelle og flerspråklige personer som tilpasser oppførselen sin til ulike sosiale sammenhenger.',
          },
          {
            id: 'b',
            text: 'Å lære seg programmering og koding på datamaskinen',
            isCorrect: false,
            feedback: 'Feil. I denne sammenhengen handler "code" om sosiale og språklige koder, ikke datakoder.',
          },
          {
            id: 'c',
            text: 'Å bytte nasjonalitet og statsborgerskap',
            isCorrect: false,
            feedback: 'Feil. Code-switching handler om hverdagslig tilpasning av språk og atferd, ikke formelle juridiske endringer.',
          },
          {
            id: 'd',
            text: 'Å skjule sin kulturelle bakgrunn for andre',
            isCorrect: false,
            feedback: 'Feil. Code-switching er ikke det samme som å skjule noe — det handler om naturlig tilpasning til ulike sosiale kontekster.',
          },
        ],
        solution: 'Code-switching er å veksle mellom ulike språk, dialekter eller sosiale væremåter avhengig av situasjonen. Det er en vanlig og helt naturlig del av flerkulturell og flerspråklig identitet.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-4',
        number: '9.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflekter over din egen identitet ved å svare på disse spørsmålene på engelsk (3-5 setninger per spørsmål).',
        subTasks: [
          {
            label: 'a',
            task: 'Which aspects of your identity are most important to you? Think about your personal, cultural, social, and digital identity.',
            solution: 'Svaret bør vise refleksjon og selvbevissthet. Bruk fagbegreper som "personal identity", "cultural heritage", "social belonging" etc. Gi konkrete eksempler fra eget liv.',
          },
          {
            label: 'b',
            task: 'Do you ever feel like you have different "versions" of yourself in different situations? How and why?',
            solution: 'Svaret bør koble til begrepet code-switching eller social performance. Beskriv konkrete situasjoner der du opptrer ulikt (f.eks. med venner vs. familie vs. online).',
          },
          {
            label: 'c',
            task: 'What does "belonging" mean to you? Where or with whom do you feel you belong the most?',
            solution: 'Svaret bør reflektere over hva tilhørighet betyr personlig — det kan handle om sted, mennesker, aktiviteter eller fellesskap. Vis evne til å uttrykke følelser og tanker på engelsk.',
          },
        ],
        solution: 'Denne oppgaven handler om personlig refleksjon. Vurder om eleven bruker fagbegreper, uttrykker seg med dybde, gir konkrete eksempler, og skriver sammenhengende og korrekt engelsk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 3: SELF-EXPRESSION ==========
    {
      id: 'engelsk-10-9-def-3',
      type: 'definition',
      title: 'Self-Expression — Å uttrykke seg selv gjennom språk og litteratur',
      content: `**Self-expression** (selvuttrykk) er måten vi kommuniserer hvem vi er til omverdenen — gjennom ord, kunst, klær, musikk, skriving og handlinger.

**Litterære former for selvuttrykk:**
- **Personal narrative** — En personlig fortelling om en viktig opplevelse som har formet deg
- **Reflective essay** — Et reflekterende essay der du utforsker dine tanker og følelser om et tema
- **Poetry** — Dikt som uttrykker følelser, stemninger og observasjoner gjennom kreativt språk
- **Diary/journal entry** — Dagbok som gir ærlig innsikt i tanker og opplevelser
- **Monologue** — En karakters indre tanker eller tale, som gir dybde til en persons opplevelse

**Virkemidler for å skrive om identitet:**
- **Voice** — Stemmen i teksten: formell, uformell, sårbar, humoristisk, sint?
- **Imagery** — Sanseinntykk som gjør opplevelsen levende for leseren
- **Metaphor/Simile** — Sammenligninger som uttrykker abstrakte følelser konkret
- **Anecdote** — En kort, personlig historie som illustrerer et poeng
- **Rhetorical question** — Spørsmål som inviterer leseren til refleksjon
- **Stream of consciousness** — Fri tankestrøm som viser en persons indre liv

**Tips for å skrive autentisk:**
- Vær spesifikk, ikke generell — "The smell of cardamom in my grandmother's kitchen" er sterkere enn "food from my culture"
- Vis sårbarhet — ærlighet gjør teksten mer engasjerende
- Bruk din egen stemme — ikke prøv å høres ut som noen du ikke er
- Koble det personlige til det universelle — din historie kan speile andres`,
    },

    // ========== EKSEMPEL 2: PERSONAL NARRATIVE ==========
    {
      id: 'engelsk-10-9-example-2',
      type: 'example',
      title: 'Eksempel: Skrive en personlig fortelling om tilhørighet',
      problem: 'Skriv åpningen av en personal narrative (100-120 ord) om et øyeblikk der du følte sterk tilhørighet — eller mangel på tilhørighet.',
      solution: `**Modellåpning:**

"The first day at my new school, I stood in the corridor like a ghost — visible but unseen. Everyone seemed to move in pairs or groups, their laughter a language I didn't yet speak. I clutched my timetable like a map of foreign territory, trying to decode the room numbers and the unwritten rules that no one had bothered to explain. Where do the new kids sit at lunch? Is it okay to smile at strangers here? My old school had been like a worn-in jacket — comfortable, familiar, mine. This place felt like wearing someone else's clothes."

**Analyse av virkemidlene:**
- **Simile:** "like a ghost", "like a map of foreign territory", "like wearing someone else's clothes" — sammenligningene gjør følelsene konkrete
- **Imagery:** "clutched my timetable", "their laughter a language" — sanseinntrykkene skaper stemning
- **Metaphor:** "a language I didn't yet speak" — tilhørighet beskrives som et språk man må lære
- **Rhetorical questions:** "Where do the new kids sit?" — viser usikkerheten innenfra
- **Contrast:** Den gamle skolen (trygg) vs. den nye (fremmed) — forsterker følelsen av tap og forvirring`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-5',
        number: '9.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket litterært virkemiddel brukes i følgende setning? "My anxiety was a heavy stone sitting on my chest, pressing down on every breath."',
        options: [
          {
            id: 'a',
            text: 'Metaphor — angsten sammenlignes direkte med en tung stein',
            isCorrect: true,
            feedback: 'Riktig! Dette er en metafor fordi angsten beskrives som en stein direkte (uten "like" eller "as"). Metaforer gjør abstrakte følelser konkrete og håndgripelige.',
          },
          {
            id: 'b',
            text: 'Simile — det brukes "like" for å sammenligne angst med en stein',
            isCorrect: false,
            feedback: 'Nesten! Det er riktig at det er en sammenligning, men det brukes IKKE "like" eller "as" — derfor er det en metafor, ikke en simile.',
          },
          {
            id: 'c',
            text: 'Personification — steinen gis menneskelige egenskaper',
            isCorrect: false,
            feedback: 'Feil. Selv om "pressing" kan virke som en handling, er det angsten (beskrevet som stein) som er subjektet. Personifikasjon ville vært å gi steinen menneskelige følelser eller tanker.',
          },
          {
            id: 'd',
            text: 'Alliteration — gjentakelse av samme lyd i begynnelsen av ord',
            isCorrect: false,
            feedback: 'Feil. Alliterasjon handler om gjentatt lyd i begynnelsen av ord (f.eks. "Peter Piper picked"). Her er det en sammenligning som gjør en følelse konkret.',
          },
        ],
        solution: 'Det er en metafor. Angsten beskrives direkte som "a heavy stone" uten å bruke "like" eller "as". Metaforer er kraftfulle fordi de gjør abstrakte følelser fysiske og håndgripelige for leseren.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-6',
        number: '9.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en metafor eller simile for hver av følgende følelser på engelsk. Bruk sanseinntykk og vær kreativ.',
        subTasks: [
          {
            label: 'a',
            task: 'Loneliness (ensomhet)',
            solution: 'Eksempler: "Loneliness was an empty room with no doors" (metafor), "I felt like the last leaf on a winter tree" (simile). Det viktigste er at sammenligningen gjør følelsen konkret og visuell.',
          },
          {
            label: 'b',
            task: 'Belonging (tilhørighet)',
            solution: 'Eksempler: "Belonging was a warm blanket wrapped around my shoulders" (metafor), "Being with them felt like finding my way home after being lost for hours" (simile).',
          },
          {
            label: 'c',
            task: 'Confusion about identity (forvirring om identitet)',
            solution: 'Eksempler: "My identity was a jigsaw puzzle with pieces from different boxes" (metafor), "I felt like an actor who had forgotten which play they were in" (simile).',
          },
        ],
        hints: [
          'Bruk sanseinntykk: hva ser, hører, føler, lukter du?',
          'Simile bruker "like" eller "as" — metafor gjør sammenligningen direkte',
          'Vær spesifikk og original — unngå klisjeer som "happy as a clam"',
        ],
        solution: 'Gode metaforer/similer er spesifikke, sanselige og originale. De gjør abstrakte følelser konkrete og hjelper leseren å forstå opplevelsen innenfra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-9-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-7',
        number: '9.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les de to sitatene nedenfor og sammenlign dem. Hvordan uttrykker de ulike perspektiver på identitet? Skriv svaret på engelsk (100-150 ord).',
        subTasks: [
          {
            label: 'a',
            task: 'Sitat 1: "I am not what you see. I am what time and effort and love have made me." — Et dikt av en ung flyktning.\nSitat 2: "My identity is not a box to be checked. It is a garden that I tend and grow." — Fra en tale av en flerkulturell student.',
            solution: 'Sammenligningen bør diskutere: Begge sitatene avviser enkle definisjoner av identitet. Det første fokuserer på identitet som noe usynlig og formet av erfaring — det du IKKE kan se utenfra. Det andre bruker metaforen om en hage, der identitet er noe aktivt og levende som krever omsorg. Begge uttrykker at identitet er kompleks og personlig, men med ulike vinklinger: erfaring vs. aktiv forming.',
          },
        ],
        hints: [
          'Analyser metaforene i begge sitatene — hva uttrykker de?',
          'Sammenlign: Hva har de til felles? Hva er forskjellig?',
          'Koble til begreper som cultural identity, self-expression, belonging',
        ],
        solution: 'Svaret vurderes etter: Analyse av metaforer (forstått?), Sammenligning (både likheter og forskjeller?), Kobling til fagbegreper (brukt relevante termer?), og Språk (korrekt og sammenhengende?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-9-summary',
      type: 'text',
      content: `## Oppsummering: Identitet og tilhørighet i engelskfaget

### Nøkkelbegreper du har lært:

| Tema | Viktige begreper | Litterære verktøy |
|------|-----------------|-------------------|
| **Coming-of-age** | Loss of innocence, moral growth, self-discovery | Karakterutvikling, konflikt |
| **Cultural identity** | Heritage, code-switching, bicultural, assimilation | Personlige fortellinger, kontrast |
| **Belonging** | Community, social identity, inclusion, exclusion | Imagery, metafor, stemme |
| **Self-expression** | Personal narrative, reflective essay, voice | Simile, anecdote, stream of consciousness |

### Slik skriver du godt om identitet:
1. **Vær spesifikk og konkret** — Detaljer gjør teksten levende og ekte
2. **Bruk litterære virkemidler** — Metaforer og similer gjør følelser håndgripelige
3. **Vis, ikke fortell** — "Show, don't tell" gjelder spesielt for identitetstekster
4. **Koble det personlige til det universelle** — Din opplevelse kan speile andres
5. **Bruk din autentiske stemme** — Skriv som deg selv, med ærlighet og sårbarhet`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-9-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-8',
        number: '9.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en personal narrative (250-350 ord) på engelsk om et øyeblikk som har påvirket din identitet eller følelse av tilhørighet. Det kan handle om å flytte, miste noen, oppdage noe nytt, eller et vendepunkt i livet ditt.',
        hints: [
          'Start in medias res — hopp rett inn i handlingen, ikke begynn med bakgrunnsinfo',
          'Bruk minst tre litterære virkemidler (imagery, metaphor, simile, anecdote, etc.)',
          'Vis følelser gjennom handlinger og sanseinntykk — "show, don\'t tell"',
          'Avslutt med en refleksjon som kobler opplevelsen til hvem du er i dag',
          'Bruk en autentisk stemme — skriv som deg selv',
        ],
        solution: 'Personal narrative vurderes etter: Åpning (engasjerende?), Virkemidler (minst 3?), Show don\'t tell (viser følelser gjennom detaljer?), Refleksjon (kobler til identitet?), Stemme (autentisk og personlig?), og Språk (variert og korrekt?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-9-ex-9',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-9',
        number: '9.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg én av oppgavene nedenfor og skriv et reflekterende essay (300-400 ord) på engelsk.',
        subTasks: [
          {
            label: 'a',
            task: '"The person I am online is not the person I am in real life." Discuss whether digital identity is a real part of who we are, or just a performance.',
            solution: 'Essayet bør drøfte: Forholdet mellom digital og "ekte" identitet, code-switching mellom online/offline, sosiale mediers påvirkning på selvbilde, og om online selvuttrykk er autentisk eller iscenesatt. Bruk eksempler og fagbegreper.',
          },
          {
            label: 'b',
            task: '"You cannot truly belong to two cultures at the same time — you will always have to choose." Do you agree or disagree? Use examples to support your argument.',
            solution: 'Essayet bør drøfte: Begrepene bicultural og code-switching, eksempler på mennesker som lever mellom kulturer, utfordringer og styrker ved flerkulturell identitet. Ta et tydelig standpunkt men vis nyansert forståelse.',
          },
        ],
        hints: [
          'Skriv en tydelig innledning med en thesis statement',
          'Bruk fagbegreper fra kapittelet: identity, belonging, code-switching, cultural identity',
          'Inkluder minst ett personlig eksempel eller anekdote',
          'Drøft begge sider av saken før du konkluderer',
          'Bruk gode overgangsfaser for flyt mellom avsnittene',
        ],
        solution: 'Essayet vurderes etter: Thesis statement (tydelig?), Argumentasjon (balansert drøfting?), Fagbegreper (brukt korrekt?), Personlige eksempler (relevante?), Struktur (innledning, hoveddel, avslutning?), og Språk (variert, korrekt, engasjerende?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Samlet array for del 3
// ============================================================================

export const ENGELSK_10_DEL3_CHAPTERS = [
  CHAPTER_ENGELSK_10_8,
  CHAPTER_ENGELSK_10_9,
];
