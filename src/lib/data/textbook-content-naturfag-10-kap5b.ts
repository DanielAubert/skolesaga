/**
 * Tekstbok kapitler for Naturfag 10 - Seksjon 5b: Rusmidler, legemidler og doping (5.6)
 *
 * LK20-kompetansemål: sammenligne nervesystemet og hormonsystemet og beskrive
 * hvordan rusmidler, legemidler, miljøgifter og doping påvirker signalsystemene
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.6: Rusmidler, legemidler og doping
// ============================================================================

export const CHAPTER_NAT10_5_6: TextbookChapter = {
  id: 'naturfag-10-5-6',
  courseId: 'naturfag-10',
  chapterNumber: '5.6',
  title: 'Rusmidler, legemidler og doping',
  description: 'Lær om hvordan rusmidler, legemidler, miljøgifter og doping påvirker nervesystemet og hormonsystemet, og hvilke helsekonsekvenser dette kan ha.',
  estimatedMinutes: 50,
  competenceGoals: [
    'sammenligne nervesystemet og hormonsystemet og beskrive hvordan rusmidler, legemidler, miljøgifter og doping påvirker signalsystemene',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-5-6-intro',
      type: 'text',
      content: `## Rusmidler, legemidler og doping

Kroppen din har to store signalsystemer: **nervesystemet** og **hormonsystemet**. Nervesystemet sender raske elektriske signaler gjennom nerveceller og bruker kjemiske signalstoffer (nevrotransmittere) i synapsene. Hormonsystemet sender langsommere kjemiske signaler gjennom blodbanen ved hjelp av hormoner.

Mange stoffer kan påvirke disse signalsystemene. Noen stoffer er nyttige – som legemidler som lindrer smerte eller helbreder sykdom. Andre stoffer kan være skadelige – som rusmidler som forstyrrer hjernens naturlige signaloverføring, eller miljøgifter som etterligner kroppens egne hormoner.

I dette kapitlet lærer du:
- Hva psykoaktive stoffer er og hvordan de påvirker hjernen
- Hvordan legemidler virker og brukes riktig
- Hvordan alkohol, tobakk og narkotiske stoffer påvirker kroppen
- Hva doping er og hvilke helsekonsekvenser det har
- Hvordan miljøgifter kan forstyrre kroppens signalsystemer`,
    },

    // ========================================================================
    // BLOKK 1: STOFFER SOM PÅVIRKER KROPPEN
    // ========================================================================

    // ========== DEFINISJON: PSYKOAKTIVE STOFFER ==========
    {
      id: 'nat10-5-6-def-psykoaktive',
      type: 'definition',
      title: 'Psykoaktive stoffer',
      content: `**Psykoaktive stoffer:** Stoffer som påvirker hjernen og endrer hvordan vi tenker, føler eller oppfører oss. De virker ved å endre signaloverføringen mellom nerveceller.

**Eksempler:** Koffein, alkohol, nikotin, cannabis, legemidler som påvirker nervesystemet.

**Kategorier:**
- **Stimulerende stoffer** – øker aktiviteten i nervesystemet (f.eks. koffein, amfetamin)
- **Dempende stoffer** – senker aktiviteten i nervesystemet (f.eks. alkohol, opiater)
- **Hallusinogene stoffer** – forstyrrer sanseinntrykk og virkelighetsoppfatning (f.eks. LSD, psilocybin)`,
    },

    {
      id: 'nat10-5-6-stoffer-intro',
      type: 'text',
      content: `## Stoffer som påvirker kroppen

### Hvordan virker psykoaktive stoffer?

For å forstå hvordan ulike stoffer virker, må vi huske hvordan nervesignaler overføres. I synapsene mellom nerveceller frigjøres **nevrotransmittere** – kjemiske signalstoffer som binder seg til **reseptorer** på neste nervecelle. Denne bindingen kan enten sende signalet videre eller hemme det.

Psykoaktive stoffer påvirker denne prosessen på flere måter:

**1. Etterligne nevrotransmittere**
- Noen stoffer ligner på kroppens egne signalstoffer
- De binder seg til de samme reseptorene
- Eksempel: THC i cannabis ligner på kroppens egne endocannabinoider

**2. Øke mengden nevrotransmittere**
- Noen stoffer hindrer at nevrotransmittere fjernes fra synapsespalten
- Da forsterkes signalet
- Eksempel: Kokain blokkerer gjenopptak av dopamin

**3. Hemme frigjøring av nevrotransmittere**
- Noen stoffer reduserer mengden signalstoffer som frigjøres
- Da svekkes signalet
- Eksempel: Alkohol demper signaloverføring i deler av hjernen

**4. Blokkere reseptorer**
- Noen stoffer binder seg til reseptorer uten å aktivere dem
- De hindrer de naturlige nevrotransmitterne i å virke
- Eksempel: Nalokson blokkerer opioidreseptorer

### Viktige nevrotransmittere

| Nevrotransmitter | Funksjon | Stoffer som påvirker |
|------------------|----------|----------------------|
| **Dopamin** | Belønning, motivasjon, bevegelse | Amfetamin, kokain, nikotin |
| **Serotonin** | Humør, søvn, appetitt | MDMA, LSD, antidepressiva |
| **GABA** | Demper nerveaktivitet, ro | Alkohol, benzodiazepiner |
| **Noradrenalin** | Oppmerksomhet, «kamp eller flukt» | Amfetamin, koffein |
| **Endorfiner** | Smertelindring, velvære | Opioider (morfin, heroin) |

### Toleranse og avhengighet

Når hjernen gjentatte ganger utsettes for et stoff, tilpasser den seg:

**Toleranse:**
- Kroppen venner seg til stoffet
- Man trenger stadig mer for å oppnå samme virkning
- Hjernen produserer færre reseptorer eller mindre av sine egne nevrotransmittere

**Fysisk avhengighet:**
- Kroppen har tilpasset seg stoffet og trenger det for å fungere normalt
- **Abstinenssymptomer** oppstår når man slutter: uro, svetting, smerter, søvnproblemer
- Kroppen trenger tid til å gjenopprette normal signaloverføring

**Psykisk avhengighet:**
- Sterk trang til å bruke stoffet igjen
- Følelse av at man ikke klarer seg uten
- Vanedannende atferd – stoffet blir en del av dagliglivet

Avhengighet er en tilstand der hjernen er endret slik at den er avhengig av stoffet for å fungere som normalt. Det er viktig å vite at avhengighet kan behandles.`,
    },

    // ========== EKSEMPEL: KOFFEIN ==========
    {
      id: 'nat10-5-6-eks-koffein',
      type: 'example',
      title: 'Hvordan koffein påvirker nervesystemet',
      problem: `Koffein er verdens mest brukte psykoaktive stoff. Forklar mekanismen bak koffeinets virkning.`,
      solution: `**Koffeinets virkning:**

Gjennom dagen produserer hjernen et stoff som heter **adenosin**. Adenosin binder seg til adenosinreseptorer og gjør deg trøtt. Jo lenger du er våken, jo mer adenosin bygger seg opp.

**Hva gjør koffein?**
1. Koffein har en molekylstruktur som ligner på adenosin
2. Koffein binder seg til adenosinreseptorene, men **aktiverer dem ikke**
3. Dermed **blokkerer** koffein adenosin fra å virke
4. Resultatet: Du føler deg mer våken fordi tretthetssignalet blokkeres

**I tillegg:**
- Når adenosinreseptorene er blokkert, øker hjernen produksjonen av andre nevrotransmittere som dopamin og noradrenalin
- Dette gir økt oppmerksomhet, energi og årvåkenhet

**Toleranse:**
- Over tid produserer hjernen flere adenosinreseptorer for å kompensere
- Da trenger du mer koffein for å oppnå samme effekt
- Hvis du brått slutter med koffein, virker alle de ekstra reseptorene – og du kan få hodepine og bli ekstra trøtt (abstinens)

**Konklusjon:** Koffein virker ved å blokkere reseptorer – det er et eksempel på hvordan et stoff kan påvirke nervesystemet ved å hindre naturlige signalstoffer.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'nat10-5-6-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-1',
        number: '5.6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom stimulerende og dempende stoffer?',
        options: [
          'Stimulerende stoffer øker aktiviteten i nervesystemet, mens dempende stoffer senker den',
          'Stimulerende stoffer er lovlige, mens dempende stoffer er ulovlige',
          'Stimulerende stoffer gir avhengighet, mens dempende stoffer ikke gjør det',
          'Stimulerende stoffer virker på hormoner, mens dempende stoffer virker på nerver',
        ],
        answer: 0,
        solution: `**Riktig svar:** Stimulerende stoffer øker aktiviteten i nervesystemet, mens dempende stoffer senker den

**Forklaring:**

Psykoaktive stoffer deles inn etter hvordan de påvirker nervesystemet:

- **Stimulerende stoffer** (f.eks. koffein, amfetamin) øker signaloverføringen og gjør deg mer aktiv, våken og alert
- **Dempende stoffer** (f.eks. alkohol, opioider) reduserer signaloverføringen og gjør deg roligere, trøttere og mindre koordinert
- **Hallusinogene stoffer** (f.eks. LSD) forstyrrer sanseinntrykk

Lovlighet har ingenting med virkning å gjøre – koffein er stimulerende og lovlig, mens amfetamin er stimulerende og ulovlig. Både stimulerende og dempende stoffer kan gi avhengighet.`,
      },
    },

    // ========== OPPGAVE 2: KLASSISK ==========
    {
      id: 'nat10-5-6-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-2',
        number: '5.6.2',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar hva toleranse og avhengighet er. Bruk det du vet om nevrotransmittere og reseptorer til å forklare hvorfor toleranse oppstår.`,
        solution: `**Toleranse:**
Toleranse betyr at kroppen venner seg til et stoff slik at man trenger stadig høyere doser for å oppnå samme virkning.

**Forklaring med nevrotransmittere og reseptorer:**
Når et stoff gjentatte ganger øker mengden av en nevrotransmitter (f.eks. dopamin) i synapsene, reagerer hjernen ved å:
1. **Redusere antall reseptorer** på nervecellene (nedregulering) – da fanger cellene opp færre signaler
2. **Produsere mindre** av den naturlige nevrotransmitteren – fordi det allerede er «nok» i synapsespalten
3. Resultatet er at vanlig dose av stoffet ikke lenger gir like sterk effekt

**Avhengighet:**
- **Fysisk avhengighet:** Kroppen har tilpasset seg stoffet. Når stoffet tas bort, fungerer nervesystemet dårlig fordi det har for få reseptorer og for lite egenproduserte signalstoffer. Dette gir abstinenssymptomer.
- **Psykisk avhengighet:** Hjernens belønningssystem er endret slik at man føler sterk trang til stoffet. Belønningssystemet har «lært» at stoffet gir behag, og uten det føles ting tomme eller vanskelige.

**Sammenheng:** Toleranse er ofte et forvarsel om avhengighet. Når man trenger mer og mer av et stoff, er hjernen i ferd med å tilpasse seg – og det kan utvikle seg til avhengighet.`,
      },
    },

    // ========================================================================
    // BLOKK 2: LEGEMIDLER
    // ========================================================================

    // ========== DEFINISJON: LEGEMIDDEL ==========
    {
      id: 'nat10-5-6-def-legemiddel',
      type: 'definition',
      title: 'Legemiddel',
      content: `**Legemiddel:** Et stoff som brukes for å forebygge, diagnostisere, lindre eller behandle sykdom. Legemidler har gjennomgått vitenskapelig testing for å dokumentere at de virker og er trygge.

**Reseptfrie legemidler:** Kan kjøpes uten legebesøk (f.eks. paracetamol, ibuprofen). Brukes mot vanlige plager som hodepine og feber.

**Reseptbelagte legemidler:** Krever resept fra lege (f.eks. antibiotika, sterke smertestillende). Brukes mot mer alvorlige tilstander og kan ha større risiko for bivirkninger.`,
    },

    {
      id: 'nat10-5-6-legemidler',
      type: 'text',
      content: `## Legemidler

### Hva er legemidler?

Legemidler er stoffer som brukes for å behandle, lindre eller forebygge sykdom. De er utviklet gjennom vitenskapelig forskning og har gjennomgått strenge tester for å dokumentere virkning og sikkerhet. Legemidler virker ved å påvirke kjemiske prosesser i kroppen på en kontrollert måte.

### Typer legemidler og virkningsmekanismer

**1. Smertestillende (analgetika)**
- **Paracetamol:** Virker i hjernen og demper smertesignaler. Senker feber. Påvirker ikke betennelse.
- **Ibuprofen (NSAID):** Hemmer enzymet COX som produserer prostaglandiner – stoffer som gir smerte, betennelse og feber. Virker smertestillende, febernedsettende og betennelsesdempende.
- **Opioider** (f.eks. morfin, kodein): Binder seg til opioidreseptorer i hjernen og ryggmargen. Blokkerer smertesignaler svært effektivt. Kan gi avhengighet og brukes kun ved sterke smerter under nøye oppfølging.

**2. Antibiotika**
- Dreper eller hemmer veksten av bakterier
- Virker på ulike måter: ødelegger bakteriens cellevegg, hemmer proteinsyntese, eller hindrer DNA-kopiering
- Virker **kun mot bakterier** – ikke mot virus (som forkjølelse og influensa)
- Eksempler: penicillin, tetracyklin

**3. Antihistaminer**
- Blokkerer histaminreseptorer
- Histamin frigjøres ved allergiske reaksjoner og gir kløe, hevelse og rennende nese
- Antihistaminer hindrer histamin fra å binde seg til reseptorene, og lindrer dermed allergisymptomene

**4. Antidepressiva**
- Påvirker nevrotransmittere i hjernen, særlig serotonin
- SSRI (selektive serotoninreopptakshemmere) hindrer at serotonin fjernes fra synapsespalten
- Mer serotonin i synapsespalten kan bedre humør og redusere angst
- Krever ofte flere uker før full virkning

### Bivirkninger

Alle legemidler kan ha **bivirkninger** – uønskede virkninger i tillegg til den ønskede:
- Magesmerter, kvalme, tretthet, hodepine
- Noen bivirkninger er milde og forbigående
- Andre kan være alvorlige og krever legetilsyn
- Pakningsvedlegget (informasjonen i pakken) beskriver mulige bivirkninger

### Riktig bruk av legemidler

- Følg alltid dosering og bruksanvisning
- Ikke kombiner legemidler uten å sjekke med lege eller apotek
- Fullfør alltid en antibiotikakur, selv om du føler deg frisk
- Ikke del reseptbelagte legemidler med andre
- Oppbevar legemidler utilgjengelig for barn

### Antibiotikaresistens – et alvorlig problem

**Hva er antibiotikaresistens?**
Antibiotikaresistens oppstår når bakterier utvikler motstandskraft mot antibiotika slik at medisinene ikke lenger virker.

**Hvorfor oppstår det?**
- Naturlig utvalg: Noen bakterier har tilfeldig mutasjoner som gjør dem motstandsdyktige
- Feilbruk av antibiotika: Brukes mot virus (virker ikke), for korte kurer, unødvendig bruk
- De motstandsdyktige bakteriene overlever og formerer seg

**Konsekvenser:**
- Infeksjoner som før var lette å behandle, kan bli livstruende
- Færre virkende antibiotika tilgjengelig
- WHO kaller det en av de største truslene mot folkehelsen

**Hva kan du gjøre?**
- Bruk antibiotika kun når lege foreskriver det
- Fullfør alltid hele kuren
- Ikke press legen til å gi antibiotika mot forkjølelse eller influensa`,
    },

    // ========== EKSEMPEL: PARACETAMOL ==========
    {
      id: 'nat10-5-6-eks-paracetamol',
      type: 'example',
      title: 'Hvordan paracetamol virker på smertesignaler',
      problem: `Paracetamol (f.eks. Paracet og Panodil) er Norges mest brukte smertestillende legemiddel. Forklar hvordan det virker på nervesystemet.`,
      solution: `**Paracetamols virkningsmekanisme:**

Når du skader deg (f.eks. slår tåen mot et bordben), sender nerveceller smertesignaler til hjernen. I hjernen og ryggmargen finnes det stoffer som **forsterker** disse smertesignalene.

**Hva gjør paracetamol?**
1. Paracetamol tas opp i blodet fra tarmen og fraktes til hjernen
2. I hjernen hemmer paracetamol produksjonen av **prostaglandiner** – stoffer som forsterker smertesignaler
3. Med færre prostaglandiner oppfatter hjernen smerten som svakere
4. Paracetamol påvirker også et temperaturregulerende senter i hjernen, noe som senker feber

**Viktige poeng:**
- Paracetamol fjerner ikke årsaken til smerten – den demper kun signalene i hjernen
- Virker hovedsakelig i sentralnervesystemet (hjernen)
- Har liten betennelsesdempende virkning (i motsetning til ibuprofen)
- Normal dose er trygg, men overdose kan gi alvorlig leverskade

**Kobling til nervesystemet:** Paracetamol er et godt eksempel på et stoff som påvirker nervesystemets signaloverføring på en kontrollert og forutsigbar måte – nettopp det et legemiddel skal gjøre.`,
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE ==========
    {
      id: 'nat10-5-6-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-3',
        number: '5.6.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor virker ikke antibiotika mot forkjølelse?',
        options: [
          'Fordi forkjølelse forårsakes av virus, og antibiotika virker bare mot bakterier',
          'Fordi forkjølelsesviruset er for stort til at antibiotika kan nå det',
          'Fordi antibiotika bare virker i magen, og forkjølelsesviruset er i nesen',
          'Fordi forkjølelsesviruset er resistent mot all antibiotika',
        ],
        answer: 0,
        solution: `**Riktig svar:** Fordi forkjølelse forårsakes av virus, og antibiotika virker bare mot bakterier

**Forklaring:**

Antibiotika virker ved å angripe strukturer som er unike for **bakterier**, for eksempel:
- Celleveggen (penicillin ødelegger denne)
- Bakterienes ribosomer (tetracyklin hemmer disse)
- Bakterienes DNA-kopiering

**Virus** har ikke disse strukturene. Virus er ikke levende celler – de er mye enklere og formerer seg inne i vertscellene våre. Derfor har antibiotika ingen virkning mot virus.

Forkjølelse og influensa skyldes virus, og her må immunforsvaret gjøre jobben selv. Det er derfor det er viktig å ikke bruke antibiotika unødvendig – det bidrar bare til antibiotikaresistens uten å hjelpe mot virussykdommer.`,
      },
    },

    // ========== OPPGAVE 4: KLASSISK ==========
    {
      id: 'nat10-5-6-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-4',
        number: '5.6.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar hva antibiotikaresistens er, hvorfor det er et problem, og hva som kan gjøres for å bremse utviklingen. Bruk begrepet naturlig utvalg i forklaringen din.`,
        solution: `**Antibiotikaresistens:**

**Hva det er:**
Antibiotikaresistens betyr at bakterier har utviklet egenskaper som gjør at antibiotika ikke lenger dreper dem eller hemmer veksten deres.

**Naturlig utvalg – mekanismen bak:**
1. I en bakteriepopulasjon finnes det naturlig variasjon – noen bakterier har tilfeldig fått mutasjoner i sitt DNA
2. Når antibiotika brukes, dør de fleste bakteriene (de som er følsomme)
3. De bakteriene som tilfeldigvis har en mutasjon som gir motstandskraft, **overlever**
4. Disse resistente bakteriene formerer seg og danner en ny populasjon
5. Over tid dominerer de resistente bakteriene – dette er **naturlig utvalg**

**Hvorfor det er et problem:**
- Infeksjoner som før var enkle å behandle (f.eks. lungebetennelse), kan bli dødelige
- Vi risikerer å miste ett av medisinens viktigste verktøy
- Utvikling av nye antibiotika er dyrt og tar lang tid

**Tiltak for å bremse utviklingen:**
- Bruke antibiotika kun ved bakterielle infeksjoner (ikke mot virus)
- Alltid fullføre hele kuren slik at alle bakterier drepes
- God hygiene for å forebygge infeksjoner
- Begrense bruk av antibiotika i landbruket
- Forske på nye behandlingsmetoder`,
      },
    },

    // ========================================================================
    // BLOKK 3: ALKOHOL
    // ========================================================================

    // ========== DEFINISJON: ETANOL ==========
    {
      id: 'nat10-5-6-def-etanol',
      type: 'definition',
      title: 'Etanol som rusmiddel',
      content: `**Etanol (C₂H₅OH):** Det kjemiske stoffet i alkoholholdige drikker. Etanol er et **dempende** rusmiddel som senker aktiviteten i nervesystemet.

**Virkning:** Etanol forsterker effekten av den dempende nevrotransmitteren GABA og hemmer den stimulerende nevrotransmitteren glutamat. Dette gir nedsatt hemning, sløvere reaksjoner og redusert dømmekraft.

**Promille (‰):** Mål på mengden alkohol i blodet. 1 promille = 1 gram alkohol per liter blod.`,
    },

    {
      id: 'nat10-5-6-alkohol',
      type: 'text',
      content: `## Alkohol

### Alkoholens påvirkning på nervesystemet

Alkohol (etanol) er et **dempende** rusmiddel – det senker aktiviteten i hjernen. Virkningsmekanismen er sammensatt:

**GABA-reseptorer:**
- GABA er hjernens viktigste dempende nevrotransmitter
- Alkohol forsterker virkningen av GABA – det «åpner» GABA-reseptorene enda mer
- Resultatet er at nervesignaler dempes kraftig
- Dette forklarer den avslappende, sløvende effekten

**Glutamat-reseptorer:**
- Glutamat er hjernens viktigste stimulerende nevrotransmitter
- Alkohol blokkerer glutamatreseptorer slik at stimulerende signaler hemmes
- Dobbelt dempende effekt: mer GABA-virkning + mindre glutamat-virkning

**Dopamin:**
- Alkohol øker frigjøringen av dopamin i hjernens belønningssenter
- Dopamin gir en følelse av velvære og belønning
- Denne dopamineffekten bidrar til at alkohol kan være vanedannende

### Promille og beruselse

Promille (‰) er et mål på alkoholkonsentrasjon i blodet.

| Promille | Typiske symptomer |
|----------|-------------------|
| 0,2–0,5 ‰ | Lett avslappet, noe nedsatt reaksjonsevne |
| 0,5–1,0 ‰ | Nedsatt hemning, dårligere koordinasjon, sløvere |
| 1,0–1,5 ‰ | Tydelig beruset, ustø, utydelig tale |
| 1,5–2,5 ‰ | Kraftig beruset, kvalme, forvirring |
| 2,5–3,0 ‰ | Risiko for bevisstløshet |
| Over 3,0 ‰ | Livstruende – risiko for pustestopp |

### Kortsiktige helseeffekter

- Nedsatt reaksjonsevne og koordinasjon – økt ulykkesrisiko
- Nedsatt dømmekraft – dårligere beslutninger
- Kvalme og oppkast
- Dehydrering (alkohol øker urinproduksjonen)
- Risiko for alkoholforgiftning ved høye doser

### Langsiktige helseeffekter

Ved gjentatt og høyt alkoholforbruk over tid:
- **Leverskader:** Leveren bryter ned alkohol, men overbelastning gir fettlever, leverbetennelse og til slutt skrumplever (cirrhose)
- **Hjerneskade:** Tap av nerveceller, problemer med hukommelse og konsentrasjon
- **Kreft:** Økt risiko for kreft i munn, svelg, spiserør, lever og bryst
- **Hjerte-karsykdom:** Høyt blodtrykk, hjerterytmeforstyrrelser
- **Psykiske plager:** Depresjon, angst, avhengighet

### Hvordan leveren bryter ned alkohol

1. Enzymet **alkoholdehydrogenase (ADH)** i leveren omdanner etanol til **acetaldehyd** – et giftig stoff som gir kvalme
2. Enzymet **aldehyddehydrogenase (ALDH)** bryter ned acetaldehyd til eddiksyre
3. Eddiksyren brytes videre ned til CO₂ og vann

Leveren klarer å bryte ned ca. **0,1–0,15 promille per time**. Man kan ikke påskynde denne prosessen – det hjelper ikke å drikke kaffe, ta en kald dusj eller trene.

### Alkohol og ungdom

Hjernen er **ikke ferdig utviklet** før man er ca. 25 år gammel. Spesielt **pannelappen** (frontalcortex), som styrer planlegging, impulskontroll og dømmekraft, utvikler seg sent.

**Derfor er alkohol ekstra skadelig for ungdom:**
- Hjernen er mer sårbar for alkoholskader under utvikling
- Alkohol kan påvirke utviklingen av pannelappen negativt
- Økt risiko for å utvikle avhengighet hvis man begynner å drikke tidlig
- Ungdom tåler ofte mindre enn voksne (lavere kroppsvekt, færre enzymer)

**I Norge er det 18-årsgrense** for kjøp av øl og vin, og 20-årsgrense for brennevin.

### Sosiale konsekvenser

Alkohol er det rusmiddelet som forårsaker mest skade i samfunnet totalt sett:
- Mange trafikkulykker skyldes alkoholpåvirkning
- Vold og slagsmål skjer ofte i forbindelse med alkohol
- Familieproblemer og omsorgssvikt
- Alkoholrelaterte sykdommer belaster helsevesenet
- Fravær fra jobb og skole`,
    },

    // ========== EKSEMPEL: BEREGN PROMILLE ==========
    {
      id: 'nat10-5-6-eks-promille',
      type: 'example',
      title: 'Beregn promille',
      problem: `En voksen mann på 80 kg drikker to halvlitere med øl (4,7 % alkohol). Beregn omtrent hvilken promille han oppnår, og hvor lang tid det tar før alkoholen er ute av kroppen.

**Formelen for promille (forenklet):**
Promille = (alkohol i gram) ÷ (kroppsvekt × 0,7)

(Faktoren 0,7 er fordi ca. 70 % av kroppen er vann, og alkohol fordeles i kroppsvæsken.)`,
      solution: `**Steg 1: Beregn mengden ren alkohol**
- To halvlitere = 2 × 0,5 L = 1,0 liter øl
- 4,7 % alkohol betyr 4,7 gram per 100 ml = 47 gram per liter
- Total alkohol = 47 gram

**Steg 2: Beregn promille**
- Promille = alkohol (gram) ÷ (kroppsvekt × 0,7)
- Promille = 47 ÷ (80 × 0,7)
- Promille = 47 ÷ 56
- Promille ≈ **0,84 ‰**

**Steg 3: Beregn nedbrytningstid**
- Leveren bryter ned ca. 0,12–0,15 promille per time
- Vi bruker 0,13 ‰/time som gjennomsnitt
- Tid = 0,84 ÷ 0,13 ≈ **ca. 6,5 timer**

**Tolkning:**
- Med 0,84 promille er man tydelig påvirket: nedsatt reaksjonsevne, dårligere koordinasjon
- Det er ulovlig å kjøre bil med mer enn 0,2 promille i Norge
- Det tar over 6 timer før alkoholen er helt ute av kroppen
- Å sove noen timer og kjøre om morgenen kan fortsatt gi promille over lovlig grense

**Merk:** Dette er en forenklet beregning. I virkeligheten påvirkes promillen av mange faktorer: om man har spist, hvor raskt man drikker, muskelmasse, kjønn og individuelle forskjeller i enzymer.`,
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE ==========
    {
      id: 'nat10-5-6-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-5',
        number: '5.6.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor er alkohol klassifisert som et dempende rusmiddel?',
        options: [
          'Fordi det forsterker den dempende nevrotransmitteren GABA og hemmer den stimulerende nevrotransmitteren glutamat',
          'Fordi det gjør folk triste og deprimerte',
          'Fordi det senker kroppstemperaturen',
          'Fordi det demper immunforsvaret',
        ],
        answer: 0,
        solution: `**Riktig svar:** Fordi det forsterker den dempende nevrotransmitteren GABA og hemmer den stimulerende nevrotransmitteren glutamat

**Forklaring:**

Klassifiseringen «dempende» handler om virkningen på **nervesystemets aktivitet**:
- Alkohol forsterker GABA (som bremser nervesignaler) → enda mer demping
- Alkohol hemmer glutamat (som aktiverer nervesignaler) → enda mindre aktivering
- Nettoresultatet er kraftig nedsatt nerveaktivitet

Selv om noen opplever at alkohol gjør dem «løsslupne» eller mer energiske i starten, skyldes dette at alkoholen demper **hemningssentrene** i hjernen (pannelappen). Man mister impulskontroll, ikke fordi nervesystemet aktiveres, men fordi bremsene svikter.`,
      },
    },

    // ========== OPPGAVE 6: KLASSISK ==========
    {
      id: 'nat10-5-6-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-6',
        number: '5.6.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar hvorfor alkohol er ekstra skadelig for ungdom. Knytt svaret ditt til hjernens utvikling og nevrotransmittere.`,
        solution: `**Hvorfor alkohol er ekstra skadelig for ungdom:**

**1. Hjernen er under utvikling:**
- Hjernen utvikler seg helt til man er ca. 25 år
- Spesielt **pannelappen** (frontalcortex) modnes sent – denne styrer impulskontroll, planlegging og dømmekraft
- Under utviklingen er hjernen mer plastisk (formbar), noe som gjør den ekstra sårbar

**2. Påvirkning på nevrotransmittersystemene:**
- Alkohol forstyrrer balansen mellom GABA (dempende) og glutamat (stimulerende) i den umodne hjernen
- Dopaminsystemet (belønning) er mer følsomt i ungdomshjernen – alkohol kan «kapre» dette systemet og gjøre det vanskelig å finne glede i andre aktiviteter
- Serotoninsystemet (humør) kan også påvirkes negativt

**3. Risiko for varig skade:**
- Forskning viser at høyt alkoholforbruk i ungdomsårene kan gi dårligere hukommelse og konsentrasjon
- Nerveceller og forbindelser som er under utvikling kan bli skadet
- Hjernen kan bli «programmert» til å trenge alkohol for dopaminfrigjøring

**4. Høyere risiko for avhengighet:**
- Jo tidligere man begynner å drikke, desto større er risikoen for å utvikle alkoholavhengighet senere i livet
- Den umodne hjernen tilpasser seg lettere til alkoholens virkning (toleranse utvikles raskere)

**Konklusjon:** Fordi hjernen er under utvikling, er den ekstra sårbar. Alkohol kan forstyrre denne utviklingen og gi varige konsekvenser som man ikke ville fått hvis man ventet til hjernen var ferdig utviklet.`,
      },
    },

    // ========================================================================
    // BLOKK 4: TOBAKK OG NIKOTINPRODUKTER
    // ========================================================================

    {
      id: 'nat10-5-6-tobakk',
      type: 'text',
      content: `## Tobakk og nikotinprodukter

### Nikotin – et svært avhengighetsskapende stoff

**Nikotin** er det psykoaktive stoffet i tobakk. Det er et av de mest avhengighetsskapende stoffene vi kjenner.

**Hvordan nikotin virker i hjernen:**
1. Nikotin binder seg til **nikotinerge acetylkolinreseptorer** i hjernen
2. Disse reseptorene finnes normalt for nevrotransmitteren acetylkolin
3. Når nikotin binder seg, utløser det frigjøring av flere nevrotransmittere, spesielt **dopamin**
4. Dopaminfrigjøringen i hjernens belønningssenter gir en følelse av velvære, ro og skjerpet oppmerksomhet
5. Effekten er kortvarig (minutter) – hjernen vil raskt ha mer
6. Toleranse utvikles raskt, og etter kort tids bruk trenger man nikotin bare for å føle seg «normal»

**Avhengighet:**
- Nikotin gir avhengighet svært raskt – ofte etter bare noen ukers bruk
- Abstinenssymptomer: irritabilitet, uro, konsentrasjonsproblemer, sterk trang (craving)
- Mange som prøver å slutte med nikotin opplever at det er svært vanskelig

### Sigaretter

Sigaretter inneholder over **7 000 kjemiske stoffer**, hvorav minst **70 er kreftfremkallende**. Nikotin er det avhengighetsskapende stoffet, men det er de andre stoffene som gjør røyking særlig helsefarlig.

**Skadelige stoffer i sigarettrøyk:**
- **Tjærestoffer:** Partikler som legger seg i lungene. Inneholder kreftfremkallende stoffer (karsinogener).
- **Karbonmonoksid (CO):** Giftig gass som binder seg til hemoglobin i blodet. Hemoglobin binder CO sterkere enn oksygen, slik at blodet frakter mindre oksygen til kroppen.
- **Hydrogencyanid:** Giftig stoff som skader flimmerhårene i luftveiene. Flimmerhårene fjerner normalt slim og forurensning.
- **Formaldehyd, benzen, ammoniakk:** Diverse giftige og kreftfremkallende stoffer.

**Helsekonsekvenser av røyking:**
- **Lungekreft:** Røyking er årsak til ca. 85 % av alle lungekrefttilfeller
- **KOLS (kronisk obstruktiv lungesykdom):** Varig skade på lungene – trangere luftveier, ødelagte lungeblærer
- **Hjerte-karsykdom:** Røyking skader blodåreveggene, øker blodtrykket og fører til åreforkalkning
- **Andre kreftformer:** Munnhule, svelg, spiserør, blære, nyre
- **Nedsatt immunforsvar:** Flere infeksjoner, langsom sårheling
- **Redusert kondisjon:** Mindre oksygen til musklene

### Snus

Snus inneholder tobakk og nikotin, men ingen forbrenning.

- Nikotin tas opp gjennom munnslimhinnen
- Gir samme nikotinavhengighet som sigaretter
- Inneholder kreftfremkallende nitrosaminer, men i lavere doser enn sigaretter
- Kan gi skader i munnhulen: tilbaketrekking av tannkjøtt, hvite flekker (leukoplaki)
- Økt risiko for kreft i munnhulen og bukspyttkjertelen
- Snus er mindre skadelig enn røyking, men er ikke ufarlig

### E-sigaretter og vaping

E-sigaretter (vape) er elektroniske enheter som varmer opp en væske til damp.

**Innhold i e-sigarettvæske:**
- Nikotin (vanligvis)
- Propylenglykol og/eller glyserol (bærestoff)
- Smakstilsetninger
- Ikke tjærestoffer eller karbonmonoksid (ingen forbrenning)

**Helsekonsekvenser:**
- Nikotin gir samme avhengighet som andre nikotinprodukter
- Langtidsvirkninger er foreløpig usikre fordi produktene er relativt nye
- Noen smakstilsetninger kan gi lungeskade ved innånding
- Enkelte tilfeller av alvorlig lungeskade er rapportert (EVALI)
- Kan være inngangsport til nikotinavhengighet, særlig blant ungdom

**Ungdom og vaping:**
- Mange unge prøver e-sigaretter uten å forstå at de inneholder nikotin
- Søte smaker (mango, bær, tyggegummi) gjør produktene attraktive for unge
- Det er 18-årsgrense for kjøp av e-sigaretter i Norge
- I 2024 ble det innført strengere regler om smaksforbud for å beskytte unge`,
    },

    // ========== OPPGAVE 7: MULTIPLE CHOICE ==========
    {
      id: 'nat10-5-6-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-7',
        number: '5.6.7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan gir nikotin en følelse av velvære?',
        options: [
          'Nikotin binder seg til acetylkolinreseptorer og utløser dopaminfrigjøring i hjernens belønningssenter',
          'Nikotin øker oksygentilførselen til hjernen',
          'Nikotin blokkerer smertesignaler i ryggmargen',
          'Nikotin øker produksjonen av røde blodceller',
        ],
        answer: 0,
        solution: `**Riktig svar:** Nikotin binder seg til acetylkolinreseptorer og utløser dopaminfrigjøring i hjernens belønningssenter

**Forklaring:**

Nikotin etterligner nevrotransmitteren **acetylkolin** og binder seg til nikotinerge reseptorer i hjernen. Denne bindingen starter en kjedereaksjon som fører til frigjøring av **dopamin** i hjernens belønningssenter (nucleus accumbens).

Dopamin er hjernens «belønningsstoff» – det gir en følelse av tilfredshet og velvære. Denne dopaminfrigjøringen er det som gjør nikotin avhengighetsskapende: hjernen «husker» at nikotin ga en god følelse, og skaper en trang til å oppleve det igjen.

Det er verdt å merke seg at nikotin faktisk ikke øker oksygentilførselen – tvert imot gjør karbonmonoksid fra sigaretter at det blir *mindre* oksygen i blodet.`,
      },
    },

    // ========== OPPGAVE 8: KLASSISK ==========
    {
      id: 'nat10-5-6-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-8',
        number: '5.6.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Sammenlign sigaretter, snus og e-sigaretter. Hva har de til felles, og hva er forskjellene når det gjelder helserisiko? Presenter svaret i en tabell.`,
        solution: `**Felles for alle tre:** De inneholder nikotin og gir nikotinavhengighet. Nikotin binder seg til acetylkolinreseptorer og utløser dopaminfrigjøring.

| Egenskap | Sigaretter | Snus | E-sigaretter |
|----------|-----------|------|-------------|
| **Nikotin** | Ja | Ja | Vanligvis ja |
| **Forbrenning** | Ja | Nei | Nei |
| **Tjærestoffer** | Ja (over 70 kreftfremkallende) | Nei | Nei |
| **Karbonmonoksid** | Ja | Nei | Nei |
| **Lungekreftrisiko** | Svært høy | Lav | Usikker (for nye data) |
| **KOLS-risiko** | Høy | Lav | Usikker |
| **Kreft i munnhulen** | Økt risiko | Noe økt risiko | Usikker |
| **Hjerte-karsykdom** | Høy risiko | Noe økt risiko | Usikker |
| **Avhengighetsgrad** | Svært høy | Svært høy | Høy |
| **Skade på andre (passiv)** | Ja (passiv røyking) | Nei | Mulig (passiv damp) |

**Konklusjon:**
- Sigaretter er klart mest helseskadelig på grunn av forbrenningsprodukter
- Snus gir lavere risiko for lungesykdom, men er ikke ufarlig
- E-sigaretter mangler forbrenningsprodukter, men langtidsvirkningene er ukjente
- Felles problem: Alle tre gir nikotinavhengighet, som er svært vanskelig å bli kvitt`,
      },
    },

    // ========================================================================
    // BLOKK 5: NARKOTISKE STOFFER
    // ========================================================================

    {
      id: 'nat10-5-6-narkotika',
      type: 'text',
      content: `## Narkotiske stoffer

Narkotiske stoffer (narkotika) er rusmidler som er ulovlige å bruke, besitte eller selge i Norge. De er regulert fordi de har stort skadepotensial og avhengighetsrisiko.

### Cannabis (THC)

Cannabis (marihuana, hasj) er det mest brukte illegale rusmiddelet i verden.

**Virkestoff:** THC (tetrahydrocannabinol)

**Virkningsmekanisme:**
- THC ligner på kroppens egne **endocannabinoider** (anandamid)
- THC binder seg til **cannabinoidreseptorer** (CB1) i hjernen
- Disse reseptorene finnes i områder som styrer hukommelse, konsentrasjon, koordinasjon, tidsfølelse og belønning
- THC aktiverer belønningssystemet og frigjør dopamin

**Virkninger:**
- Avslappet, euforisk følelse
- Endret tidsoppfatning og sanseinntrykk
- Nedsatt korttidshukommelse og konsentrasjon
- Nedsatt koordinasjon og reaksjonsevne
- Økt appetitt

**Helserisiko:**
- **Hjernen:** Regelmessig bruk i ung alder kan gi varig nedsatt hukommelse og konsentrasjon fordi hjernen fortsatt er under utvikling
- **Psykisk helse:** Økt risiko for angstlidelser, depresjon og psykose hos sårbare personer
- **Lunger:** Røyking av cannabis gir mange av de samme skadelige stoffene som tobakksrøyk
- **Avhengighet:** Ca. 9 % av brukere utvikler avhengighet (høyere for de som begynner i ung alder)
- **Motivasjon:** Langvarig bruk kan gi nedsatt motivasjon og initiativ

### Amfetamin og metamfetamin

**Virkningsmekanisme:**
- Stimulerer frigjøring av dopamin, noradrenalin og serotonin
- Hemmer gjenopptak av disse nevrotransmitterne
- Resultatet er kraftig økt mengde signalstoffer i synapsene

**Virkninger:**
- Kraftig stimulerende – økt energi, våkenhet, selvtillit
- Nedsatt appetitt og søvnbehov
- Økt hjertefrekvens og blodtrykk

**Helserisiko:**
- Sterk avhengighet
- Hjerte-karsykdom (hjerteinfarkt, hjerneslag)
- Psykose (vrangforestillinger, hallusinasjoner)
- Vekttap, tannproblemer, hudproblemer
- Destruktiv atferd og aggresjon

### Kokain

**Virkningsmekanisme:**
- Blokkerer gjenopptak av dopamin, noradrenalin og serotonin i synapsene
- Dopamin hoper seg opp og gir intenst velvære
- Virkningen er kortvarig (15-30 minutter for sniffet kokain)

**Virkninger:**
- Intens eufori og selvtillit
- Økt energi
- Kraftig stimulering av nervesystemet

**Helserisiko:**
- Svært avhengighetsskapende – spesielt crack (røykbar kokain)
- Hjerteinfarkt, hjerneslag – selv hos unge
- Hulldannelse i neseskilleveggen (ved sniffing)
- Angst, paranoia, psykose
- Risiko for overdose

### Opioider (heroin, morfin, fentanyl)

**Virkningsmekanisme:**
- Binder seg til **opioidreseptorer** i hjernen og ryggmargen
- Samme reseptorer som kroppens egne smertestillende stoffer (endorfiner)
- Hemmer smertesignaler og gir kraftig velvære

**Virkninger:**
- Intens rusfølelse og smertelindring
- Kraftig avslappelse og trøtthet
- Redusert pustefrekvens

**Helserisiko:**
- Svært sterkt avhengighetsskapende – toleranse utvikles raskt
- **Overdoserisiko** er høy – særlig for fentanyl som er 50-100 ganger sterkere enn morfin
- Overdose kan føre til pustestopp og død
- Abstinenssymptomer er svært ubehagelige (smerter, frysninger, uro)
- Infeksjonsfare ved injisering (HIV, hepatitt)

### MDMA (ecstasy)

**Virkningsmekanisme:**
- Frigjør store mengder **serotonin**, dopamin og noradrenalin
- Særlig serotoninfrigjøringen gir empatifølelse og emosjonell nærhet

**Helserisiko:**
- Overoppheting (hypertermi) – kroppen klarer ikke regulere temperaturen
- Dehydrering eller vannforgiftning
- Nedstemt og utmattet i dagene etter bruk (serotonin er brukt opp)
- Mulig langtidsskade på serotoninsystemet ved gjentatt bruk

### LSD og psilocybin

**Virkningsmekanisme:**
- Hallusinogene stoffer som binder seg til **serotoninreseptorer** (5-HT2A)
- Forstyrrer normal signalbehandling i hjernen
- Endrer sanseinntrykk, tenking og virkelighetsoppfatning

**Helserisiko:**
- «Bad trip» – skremmende hallusinasjoner, angst, panikk
- Risiko for ulykker fordi virkelighetsoppfatningen er forstyrret
- Kan utløse psykiske lidelser hos sårbare personer
- Sjeldent fysisk avhengighetsskapende, men kan gi psykisk avhengighet

### Lovgivning og konsekvenser

I Norge er bruk, besittelse, salg og produksjon av narkotika ulovlig (Legemiddelloven og Straffeloven):
- Bruk og besittelse av små mengder kan gi bøter eller betinget straff
- Salg og distribusjon gir fengsel
- Formålet med lovgivningen er å beskytte folkehelsen og redusere skader
- I tillegg til juridiske konsekvenser har narkotikabruk ofte store sosiale konsekvenser: problemer med skole, jobb, familie og økonomi`,
    },

    // ========== ADVARSEL: NARKOTIKA ==========
    {
      id: 'nat10-5-6-warning-narkotika',
      type: 'warning',
      title: 'Viktig å vite',
      content: `Informasjonen om narkotiske stoffer i dette kapitlet er gitt for å gi deg **kunnskapsbasert forståelse** av hvordan stoffene virker på kroppen. Alle narkotiske stoffer er **ulovlige** i Norge og innebærer betydelig **helserisiko**.

Hvis du eller noen du kjenner sliter med rusproblemer, finnes det hjelp:
- **Rustelefonen:** 08588 (gratis, anonym rådgivning)
- **Alarmtelefonen for barn og unge:** 116 111
- **Helsesykepleier** på skolen din
- **Fastlegen** din kan hjelpe videre til riktig behandling`,
    },

    // ========== OPPGAVE 9: MULTIPLE CHOICE ==========
    {
      id: 'nat10-5-6-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-9',
        number: '5.6.9',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvordan virker kokain på nevrotransmittere i hjernen?',
        options: [
          'Kokain blokkerer gjenopptak av dopamin slik at dopamin hoper seg opp i synapsespalten',
          'Kokain etterligner serotonin og binder seg til serotoninreseptorer',
          'Kokain ødelegger nevrotransmittere slik at signalene stoppes helt',
          'Kokain øker produksjonen av GABA og demper nervesystemet',
        ],
        answer: 0,
        solution: `**Riktig svar:** Kokain blokkerer gjenopptak av dopamin slik at dopamin hoper seg opp i synapsespalten

**Forklaring:**

Under normal signaloverføring:
1. Dopamin frigjøres i synapsespalten og binder seg til reseptorer
2. Etter at signalet er sendt, **tas dopamin opp igjen** av den sendende nervecellen (gjenopptak)
3. Dette avslutter signalet

**Kokainets virkning:**
1. Kokain blokkerer transportproteinene som utfører gjenopptaket
2. Dopamin kan ikke fjernes fra synapsespalten
3. Dopamin hoper seg opp og stimulerer reseptorene gjentatte ganger
4. Resultatet er en unormalt sterk og langvarig dopaminsignal
5. Dette gir intens eufori og velvære

Kokain påvirker også gjenopptak av noradrenalin og serotonin, men den kraftige dopamineffekten er det som gjør stoffet så avhengighetsskapende.`,
      },
    },

    // ========== OPPGAVE 10: KLASSISK ==========
    {
      id: 'nat10-5-6-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-10',
        number: '5.6.10',
        type: 'classic',
        difficulty: 'medium',
        task: `Velg to narkotiske stoffer og sammenlign dem. Beskriv for hvert stoff: (a) hvilken nevrotransmitter det påvirker, (b) mekanismen for hvordan det virker, og (c) de viktigste helserisikoene.`,
        solution: `**Eksempel: Sammenligning av cannabis og heroin**

**Cannabis (THC):**
a) **Nevrotransmitter:** Påvirker endocannabinoidsystemet – THC etterligner kroppens egne endocannabinoider (anandamid). Øker også dopaminfrigjøring.
b) **Mekanisme:** THC binder seg til cannabinoidreseptorer (CB1) i hjernen. Disse reseptorene finnes i områder som styrer hukommelse, koordinasjon og belønning. THC aktiverer reseptorene og endrer normal signaloverføring.
c) **Helserisiko:** Nedsatt hukommelse og konsentrasjon (spesielt ved bruk i ung alder), økt risiko for psykiske lidelser hos sårbare, lungeskade ved røyking, motivasjonsproblemer, ca. 9 % utvikler avhengighet.

**Heroin (opioid):**
a) **Nevrotransmitter:** Påvirker endorfinsystemet – heroin binder seg til opioidreseptorer, de samme som kroppens egne smertestillende endorfiner.
b) **Mekanisme:** Heroin omdannes til morfin i kroppen og binder seg til opioidreseptorer i hjernen og ryggmargen. Det blokkerer smertesignaler og utløser kraftig dopaminfrigjøring i belønningssenteret.
c) **Helserisiko:** Svært avhengighetsskapende med rask toleranseutvikling, høy overdoserisiko (pustestopp), alvorlige abstinenssymptomer, infeksjonsrisiko ved injisering (HIV, hepatitt), sosial marginalisering.

**Forskjeller:**
- Cannabis virker på cannabinoidreseptorer, heroin på opioidreseptorer
- Heroin har mye høyere avhengighetsrisiko og overdosefare
- Cannabis-avhengighet er primært psykisk, heroin gir sterk fysisk avhengighet
- Begge påvirker dopaminsystemet, men heroin gir langt kraftigere dopaminfrigjøring`,
      },
    },

    // ========================================================================
    // BLOKK 6: DOPING
    // ========================================================================

    // ========== DEFINISJON: DOPING ==========
    {
      id: 'nat10-5-6-def-doping',
      type: 'definition',
      title: 'Doping',
      content: `**Doping:** Bruk av forbudte stoffer eller metoder for å forbedre idrettsprestasjoner. Doping er forbudt i organisert idrett og reguleres av WADA (World Anti-Doping Agency).

**Hovedtyper:**
- **Anabole steroider:** Syntetiske varianter av testosteron som øker muskelmasse
- **EPO (erytropoietin):** Hormon som øker produksjonen av røde blodceller
- **Veksthormon (HGH):** Stimulerer vekst og cellereparasjon
- **Stimulerende midler:** Øker energi og prestasjon (f.eks. amfetamin)

Doping er også et helseproblem utenfor idretten, da noen bruker dopingmidler for å endre utseende.`,
    },

    {
      id: 'nat10-5-6-doping',
      type: 'text',
      content: `## Doping

### Hva er doping?

Doping innebærer å bruke forbudte stoffer eller metoder for å øke fysisk prestasjon. Doping er forbudt i organisert idrett fordi det gir urettferdig fordel og kan skade helsen. Men doping er også et problem utenfor idretten – noen bruker dopingmidler for å bygge muskler eller endre utseende.

Dopingmidler virker i stor grad ved å påvirke **hormonsystemet**. Hormoner er kjemiske signalstoffer som fraktes i blodet og regulerer vekst, stoffskifte, reproduksjon og mange andre funksjoner.

### Typer dopingmidler

**1. Anabole androgene steroider (AAS)**

Syntetiske varianter av kjønnshormonet **testosteron**.

*Virkning:*
- Øker proteinsyntesen i muskelceller → raskere og større muskeloppbygning
- Øker treningsmotivasjon og aggresjon
- Forkorter restitusjonstid

*Helserisiko:*
- **Lever:** Leverskade, leverkreft
- **Hjerte:** Forstørret hjerte, hjerteinfarkt, hjerneslag, økt kolesterol
- **Hormonforstyrrelser:** Kroppen reduserer egen testosteronproduksjon (negativ tilbakekobling)
  - Hos menn: Krympede testikler, nedsatt fruktbarhet, brystvekst
  - Hos kvinner: Mannlig hårvekst, dypere stemme, menstruasjonsforstyrrelser
- **Psykisk:** Aggresjon («roid rage»), depresjon, psykose, søvnproblemer
- **Ungdom:** Vekstplatene i knokler kan lukkes for tidlig → kortere slutthøyde
- **Hud:** Akne, strekkmerker

**2. EPO (erytropoietin)**

Et hormon som normalt produseres i nyrene og stimulerer produksjon av røde blodceller i beinmargen.

*Virkning:*
- Flere røde blodceller → mer hemoglobin → bedre oksygentransport
- Økt utholdenhet, spesielt i utholdenhetsidretter

*Helserisiko:*
- Blodet blir tykkere (høyere hematokrit) → økt risiko for blodpropp
- Hjerneslag og hjerteinfarkt
- Flere idrettsutøvere har dødd av EPO-relaterte komplikasjoner

**3. Veksthormon (HGH – humant veksthormon)**

Hormon som normalt produseres i hypofysen.

*Virkning:*
- Stimulerer cellevekst og cellereparasjon
- Øker muskelmasse og reduserer fettmasse
- Styrker bein og sener

*Helserisiko:*
- Akromegali: Abnormal vekst av hender, føtter, kjeve og organer
- Økt risiko for diabetes type 2
- Ledd- og muskelsmerter
- Økt kreftrisiko

**4. Stimulerende midler**

F.eks. amfetamin, efedrin, koffein i høye doser.

*Virkning:*
- Øker energi, oppmerksomhet og aggressivitet
- Demper trøtthet og smerte
- Øker hjertefrekvens og blodtrykk

*Helserisiko:*
- Hjerteinfarkt, hjerneslag
- Overoppheting (kroppen registrerer ikke at den er utslitt)
- Avhengighet
- Plutselig hjertestans

### Hvordan doping påvirker hormonsystemet

Hormonsystemet styres av **tilbakekoblingsmekanismer**: Når nivået av et hormon er høyt nok, sender kroppen signaler om å redusere produksjonen.

**Eksempel med anabole steroider:**
1. Utøveren tilfører syntetisk testosteron
2. Kroppen registrerer unormalt høye testosteronnivåer
3. **Negativ tilbakekobling:** Hypotalamus og hypofysen sender signal om å stoppe egen testosteronproduksjon
4. Testiklene slutter å produsere testosteron og krymper
5. Når personen slutter med steroider, har kroppen svært lav egenproduksjon
6. Det kan ta måneder eller år å gjenopprette normal hormonproduksjon – og noen ganger normaliseres den aldri helt

Denne mekanismen viser hvorfor doping har konsekvenser langt utover selve bruken.

### Doping i idrett og WADA

**WADA (World Anti-Doping Agency):**
- Internasjonal organisasjon som koordinerer kampen mot doping
- Oppdaterer årlig en liste over forbudte stoffer og metoder
- Gjennomfører og koordinerer dopingtesting
- Straffer kan inkludere utestengelse i 2-4 år eller på livstid

**Antidoping Norge:**
- Norsk organisasjon som jobber mot doping i idretten
- Gjennomfører dopingkontroller av norske idrettsutøvere
- Driver forebyggende arbeid og informasjon

### Doping blant ungdom

Doping er ikke bare et problem i toppidrett. En del ungdommer, spesielt gutter, bruker anabole steroider for å bygge muskler og endre utseende.

**Risikofaktorer:**
- Kroppspress og ønske om å se muskuløs ut
- Miljøer der dopingbruk er normalisert
- Tilgjengelig gjennom netthandel (ulovlig import)

**Spesielt farlig for ungdom:**
- Hormonsystemet er under utvikling – forstyrrelser kan gi varige konsekvenser
- Vekstplater kan lukke seg for tidlig
- Høyere risiko for psykiske bivirkninger

Doping med anabole steroider er ulovlig i Norge uten resept fra lege, uavhengig av om det brukes i idrett eller ikke.`,
    },

    // ========== EKSEMPEL: ANABOLE STEROIDER ==========
    {
      id: 'nat10-5-6-eks-steroider',
      type: 'example',
      title: 'Hvordan anabole steroider påvirker hormonsystemet',
      problem: `Per (20 år) trener styrke og bestemmer seg for å bruke anabole steroider for å bygge muskler raskere. Forklar hva som skjer i hormonsystemet hans – både under bruk og etter at han slutter.`,
      solution: `**Under bruk av anabole steroider:**

1. **Tilførsel:** Per tilfører kroppen syntetisk testosteron (anabole steroider)
2. **Muskeloppbygning:** Testosteron binder seg til androgenreseptorer i muskelcellene og øker proteinsyntesen → musklene vokser raskere
3. **Negativ tilbakekobling:** Kroppen registrerer at testosteronnivået er unormalt høyt
4. **Hypotalamus** reduserer produksjonen av GnRH (gonadotropinfrigjørende hormon)
5. **Hypofysen** reduserer produksjonen av LH (luteiniserende hormon) og FSH (follikkelstimulerende hormon)
6. **Testiklene** mottar ikke lenger stimulering fra LH og FSH → de slutter å produsere testosteron og sædceller → testiklene krymper
7. Aromatase-enzymer omdanner noe av testosteronet til østrogen → mulig brystvekst (gynekomasti)

**Etter at Per slutter:**

1. Den tilførte testosteronen forsvinner fra kroppen
2. Men den naturlige produksjonslinjen (hypotalamus → hypofyse → testikler) er fortsatt nedregulert
3. Testosteronnivået faller dramatisk – ofte langt under normalt
4. Per opplever: tretthet, depresjon, nedsatt libido, muskeltap, nedstemthet
5. Det kan ta **6-12 måneder** eller lenger før kroppen gjenoppretter normal produksjon
6. I noen tilfeller normaliseres produksjonen aldri helt

**Lærdom:** Negativ tilbakekobling er en viktig reguleringsmekanisme. Når man tilfører hormoner utenfra, «skrur kroppen av» sin egen produksjon. Når tilførselen stopper, har kroppen mistet evnen til å produsere nok selv – med alvorlige konsekvenser.`,
    },

    // ========== OPPGAVE 11: MULTIPLE CHOICE ==========
    {
      id: 'nat10-5-6-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-11',
        number: '5.6.11',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor krymper testiklene hos menn som bruker anabole steroider?',
        options: [
          'Fordi negativ tilbakekobling gjør at kroppen stopper sin egen testosteronproduksjon, og testiklene mister stimulering',
          'Fordi steroidene er giftige for testiklene og ødelegger cellene direkte',
          'Fordi musklene tar opp all testosteronet slik at det ikke er noe igjen til testiklene',
          'Fordi anabole steroider inneholder østrogen som motvirker testosteron',
        ],
        answer: 0,
        solution: `**Riktig svar:** Fordi negativ tilbakekobling gjør at kroppen stopper sin egen testosteronproduksjon, og testiklene mister stimulering

**Forklaring:**

Dette er et klassisk eksempel på **negativ tilbakekobling** i hormonsystemet:

1. Når man tilfører syntetisk testosteron, stiger testosteronnivået i blodet
2. **Hypotalamus** registrerer det høye nivået og reduserer GnRH-produksjonen
3. **Hypofysen** produserer mindre LH og FSH
4. **Testiklene** trenger LH og FSH for å fungere:
   - LH stimulerer testosteronproduksjon i testiklene
   - FSH stimulerer sædcelleproduksjon
5. Uten LH og FSH stopper testiklene å jobbe og krymper (atrofi)

Steroidene ødelegger altså ikke testiklene direkte – det er kroppens egen reguleringsmekanisme som «skrur dem av» fordi den «tror» det allerede er nok testosteron.

Dette viser hvordan hormonsystemets tilbakekoblingsmekanismer kan få utilsiktede konsekvenser når man tilfører hormoner utenfra.`,
      },
    },

    // ========== OPPGAVE 12: KLASSISK ==========
    {
      id: 'nat10-5-6-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-12',
        number: '5.6.12',
        type: 'classic',
        difficulty: 'medium',
        task: `Drøft hvorfor doping er forbudt i organisert idrett. Ta med både helsemessige og etiske argumenter i svaret ditt.`,
        solution: `**Helsemessige argumenter:**

1. **Alvorlige helsekonsekvenser:** Dopingmidler kan gi hjerteinfarkt, hjerneslag, leverskade, hormonelle forstyrrelser og psykiske problemer. Å tillate doping ville utsette utøvere for stor helsefare.

2. **Press om å bruke:** Hvis doping var tillatt, ville utøvere som ønsker å konkurrere på toppnivå føle seg tvunget til å bruke helseskadelige stoffer for å holde følge med konkurrentene.

3. **Ungdom som forbilder:** Toppidrettsutøvere er rollemodeller. Hvis doping var akseptert i idretten, kunne det normalisere bruk av dopingmidler blant ungdom.

**Etiske argumenter:**

1. **Rettferdighet:** Idrett skal handle om talenter, trening og innsats. Doping gir urettferdig fordel basert på hvem som bruker mest/best stoffer – ikke hvem som er best trent.

2. **Like muligheter:** Ikke alle har lik tilgang til dopingmidler og medisinsk oppfølging. Doping ville forsterke ulikheter.

3. **Idrettens verdier:** Fair play, respekt og likeverd er grunnleggende verdier i idretten. Doping bryter med disse verdiene.

4. **Helsevern:** Samfunnet har et ansvar for å beskytte utøvere mot å skade seg selv under press om å prestere.

**Motargumenter (som kan diskuteres):**
- Noen mener at voksne bør få bestemme selv (autonomi)
- Grensen mellom lovlig trening/kosthold og doping kan være uklar
- Dopingregler kan være vanskelig å håndheve rettferdig

**Konklusjon:** De fleste mener at helserisikoen og rettferdighetsproblemet gjør det riktig å forby doping. Idretten skal fremme helse, ikke skade den.`,
      },
    },

    // ========================================================================
    // BLOKK 7: MILJØGIFTER
    // ========================================================================

    // ========== DEFINISJON: MILJØGIFT ==========
    {
      id: 'nat10-5-6-def-miljogift',
      type: 'definition',
      title: 'Miljøgift',
      content: `**Miljøgift:** Et stoff som er laget av mennesker (eller frigjort gjennom menneskelig aktivitet) og som er skadelig for levende organismer, brytes sakte ned i naturen, og kan hope seg opp i næringskjeder.

**Kjennetegn ved miljøgifter:**
- **Persistente** – brytes svært langsomt ned (kan vare i naturen i tiår eller hundreår)
- **Bioakkumulerende** – hoper seg opp i organismer over tid
- **Biomagnifiserende** – konsentrasjonen øker oppover i næringskjeden
- **Giftige** – skadelige selv i svært lave konsentrasjoner

**Eksempler:** Tungmetaller (kvikksølv, bly, kadmium), PCB, PFAS, DDT, dioksiner.`,
    },

    {
      id: 'nat10-5-6-miljogifter',
      type: 'text',
      content: `## Miljøgifter

### Hva er miljøgifter?

Miljøgifter er stoffer som er laget eller frigjort gjennom menneskelig aktivitet, som er skadelige for levende organismer, og som brytes svært langsomt ned i naturen. Mange miljøgifter kan forstyrre kroppens signalsystemer – både nervesystemet og hormonsystemet.

### Typer miljøgifter

**1. Tungmetaller**

- **Kvikksølv (Hg):**
  - Kilder: Kullkraftverk, gullgraving, industri
  - Omdannes til metylkvikksølv i naturen – svært giftig form
  - Skader nervesystemet (spesielt hjernen hos fostre og småbarn)
  - Hoper seg opp i fisk (særlig stor rovfisk som tunfisk og sverdfisk)

- **Bly (Pb):**
  - Kilder: Tidligere bensin, maling, batterier, gammel rørlegging
  - Skader nervesystemet, spesielt hos barn (redusert IQ, lærevansker)
  - Kan erstatte kalsium i kroppen og lagres i bein

- **Kadmium (Cd):**
  - Kilder: Sigarettrøyk, batterier, kunstgjødsel, industri
  - Skader nyrer, lunger og bein
  - Svært lang halveringstid i kroppen (10-30 år)

**2. PCB (polyklorerte bifenyler)**
- Menneskeskapt kjemikalie brukt i elektrisk utstyr og byggematerialer
- Forbudt siden 1980-tallet, men brytes så sakte ned at det fortsatt finnes overalt
- Hormonforstyrrende – etterligner og forstyrrer østrogen
- Kan påvirke reproduksjon, immunforsvar og nervesystemet
- Hoper seg opp i fett hos dyr og mennesker

**3. PFAS (per- og polyfluorerte stoffer) – «evighetskjemikalier»**
- Brukes i vannavstøtende klær, stekepanner med non-stick, brannskum, matemballasje
- Brytes nesten ikke ned i naturen – derav kallenavnet «evighetskjemikalier»
- Hoper seg opp i drikkevann og i blodet til mennesker og dyr
- Mistenkt for å forstyrre hormonsystemet, påvirke immunforsvaret og øke kreftrisikoen
- Er et aktivt forskningsfelt – stadig nye PFAS-stoffer oppdages

**4. Plantevernmidler (pesticider)**
- DDT, glyfosat, neonikotinoider og mange andre
- Designet for å drepe skadedyr, ugress eller sopp
- Kan påvirke nervesystemet hos mennesker og dyr
- Noen er hormonforstyrrende
- Neonikotinoider er knyttet til massedød av bier

### Bioakkumulering og biomagnifikasjon

**Bioakkumulering:**
- En organisme tar opp en miljøgift fra omgivelsene (mat, vann, luft)
- Giftstoffet brytes ikke ned og lagres i kroppen (ofte i fettvev)
- Over tid øker konsentrasjonen i organismen

**Biomagnifikasjon:**
- For hvert ledd i næringskjeden øker konsentrasjonen av miljøgiften
- Et rovdyr spiser mange byttedyr – og akkumulerer giftstoffene fra alle
- Toppredatorer (ørn, isbjørn, tunfisk, mennesker) får høyest konsentrasjon

**Eksempel med tall:**
- Vann: 0,001 ppm (parts per million) kvikksølv
- Planteplankton: 0,01 ppm (10× oppkonsentrering)
- Dyreplankton: 0,1 ppm (100×)
- Liten fisk: 1 ppm (1 000×)
- Stor rovfisk: 10 ppm (10 000×)
- Toppredator (ørn/menneske): kan nå svært høye nivåer

### Hormonforstyrrende stoffer

Mange miljøgifter kan forstyrre hormonsystemet fordi de ligner på kroppens egne hormoner:

**Hvordan de virker:**
- **Etterligne hormoner:** Stoffet binder seg til hormonreseptorer og aktiverer dem (f.eks. noen PCB-er etterligner østrogen)
- **Blokkere hormoner:** Stoffet binder seg til reseptorer uten å aktivere dem, og hindrer det ekte hormonet i å virke
- **Forstyrre hormonproduksjon:** Stoffet påvirker enzymer som lager eller bryter ned hormoner

**Konsekvenser:**
- Forstyrrelser i reproduksjon (f.eks. tynne eggeskall hos fugler, redusert fruktbarhet)
- Endret kjønnsutvikling (f.eks. feminisering av hannfisk)
- Tidlig eller forsinket pubertet
- Økt risiko for hormonfølsom kreft (bryst, prostata)
- Påvirkning av stoffskifte (skjoldbruskkjertelhormonene)

### Kilder i hverdagen

Miljøgifter kan finnes i:
- Mat (spesielt fisk, kjøtt, meieriprodukter – gjennom bioakkumulering)
- Drikkevann (PFAS, tungmetaller fra gamle rør)
- Luft (partikkelforurensning, industriutslipp)
- Produkter (plastikk, kosmetikk, klær, møbler)
- Gammel maling og bygningsmaterialer (PCB, bly)

### Tiltak mot miljøgifter

**Internasjonalt:**
- Stockholmkonvensjonen (2001): Forbyr de farligste miljøgiftene (persistent organic pollutants – POPs)
- Forbud mot PCB, DDT (med unntak for malaria-bekjempelse), enkelte pesticider
- EU-regulering av kjemikalier (REACH-forordningen)

**Nasjonalt:**
- Overvåkning av miljøgifter i mat, vann og natur
- Strenge grenseverdier for tungmetaller i drikkevann
- Kostholdsråd (f.eks. begrense inntak av lever fra stor rovfisk)
- Opprydding av forurenset grunn

**Personlig:**
- Følge kostholdsråd om fisk og sjømat
- Velge miljøvennlige produkter
- Resirkulere elektronikk og batterier riktig
- Ikke kaste kjemikalier i naturen`,
    },

    // ========== EKSEMPEL: DDT OG BIOMAGNIFIKASJON ==========
    {
      id: 'nat10-5-6-eks-ddt',
      type: 'example',
      title: 'DDT og biomagnifikasjon i næringskjeden',
      problem: `DDT var et mye brukt plantevernmiddel fra 1940-tallet. Forklar hvordan DDT førte til at bestanden av rovfugler (som vandrefalk og havørn) ble kraftig redusert, og bruk begrepene bioakkumulering og biomagnifikasjon.`,
      solution: `**DDTs vei gjennom næringskjeden:**

**1. Sprøyting og spredning:**
- DDT ble sprøytet over store jordbruksområder for å drepe insekter
- DDT er svært persistent – det brytes nesten ikke ned i naturen
- DDT spredde seg til jord, vann og sedimenter

**2. Bioakkumulering:**
- Alger og plankton i innsjøer og hav tok opp DDT fra vannet
- Fordi DDT er fettløselig, lagret det seg i fettvevet til organismene
- DDT ble ikke brutt ned – konsentrasjonen økte over tid i hver organisme

**3. Biomagnifikasjon:**
| Nivå i næringskjeden | Organisme | DDT-konsentrasjon |
|----------------------|-----------|-------------------|
| 1 (produsent) | Alger/plankton | Lav (0,04 ppm) |
| 2 (primærkonsument) | Smådyr, insekter | Høyere (0,5 ppm) |
| 3 (sekundærkonsument) | Liten fisk | Enda høyere (2 ppm) |
| 4 (tertiærkonsument) | Stor fisk | Høy (25 ppm) |
| 5 (toppredator) | Rovfugl (vandrefalk) | Svært høy (over 25 ppm) |

For hvert ledd i næringskjeden øker konsentrasjonen fordi rovdyret spiser mange byttedyr og akkumulerer giften fra alle.

**4. Konsekvensen for rovfuglene:**
- DDT ble omdannet til DDE i kroppen
- DDE forstyrret fuglenes **kalsiumstoffskifte** (hormonforstyrrende effekt)
- Eggeskallene ble så tynne at de knuste under ruging
- Vandrefalken og havørnen ble nesten utryddet

**5. Tiltak og resultat:**
- DDT ble forbudt i de fleste land på 1970-80-tallet
- Bestandene av rovfugler har siden hentet seg inn
- Et godt eksempel på at reguleringer virker – men også på at miljøgifter kan gjøre enorm skade

**Læringspunkt:** Biomagnifikasjon gjør at selv lave konsentrasjoner av en miljøgift i naturen kan bli farlige for toppredatorer, fordi giften konsentreres oppover i næringskjeden.`,
    },

    // ========== OPPGAVE 13: KLASSISK ==========
    {
      id: 'nat10-5-6-ex-13-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-13',
        number: '5.6.13',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar forskjellen mellom bioakkumulering og biomagnifikasjon. Gi et eksempel som viser begge prosessene.`,
        solution: `**Bioakkumulering:**
- Oppsamling av et stoff i **en enkelt organisme** over tid
- Organismen tar opp giftstoffet raskere enn den bryter det ned eller skiller det ut
- Konsentrasjonen i organismen øker over levetiden
- Eksempel: En fisk som lever i forurenset vann samler opp kvikksølv i fettvevet sitt over hele livet

**Biomagnifikasjon:**
- Økning av giftkonsentrasjon fra **ett ledd til neste i næringskjeden**
- Skjer fordi et rovdyr spiser mange byttedyr, og hvert byttedyr har allerede akkumulert gift
- Konsentrasjonen øker for hvert trinn oppover
- Eksempel: Mange småfisk med kvikksølv spises av én stor fisk → den store fisken får mye høyere konsentrasjon

**Eksempel som viser begge:**

I Mjøsa (Norges største innsjø) ble det på 2000-tallet funnet høye nivåer av miljøgiften kvikksølv i storørret:

1. **Bioakkumulering:** Alger tok opp kvikksølv fra vannet og samlet det opp i cellene over tid
2. **Bioakkumulering:** Dyreplankton spiste alger og samlet opp kvikksølv i kroppen
3. **Biomagnifikasjon:** Liten fisk spiste mye dyreplankton → fikk høyere konsentrasjon enn hvert enkelt byttedyr
4. **Biomagnifikasjon:** Storørret (toppredator) spiste mange småfisk → fikk enda høyere konsentrasjon
5. Resultatet: Storørreten hadde kvikksølvnivåer som var mange tusen ganger høyere enn i vannet

Begge prosessene virker sammen: bioakkumulering innenfor hver organisme, og biomagnifikasjon mellom nivåene i næringskjeden.`,
      },
    },

    // ========== OPPGAVE 14: MULTIPLE CHOICE ==========
    {
      id: 'nat10-5-6-ex-14-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-14',
        number: '5.6.14',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvordan kan en hormonforstyrrende miljøgift påvirke kroppen?',
        options: [
          'Den kan etterligne kroppens egne hormoner og binde seg til hormonreseptorer',
          'Den ødelegger hormonkjertlene slik at de ikke kan produsere hormoner',
          'Den gjør at kroppen produserer for mange hvite blodceller',
          'Den hindrer nerveceller fra å sende elektriske signaler',
        ],
        answer: 0,
        solution: `**Riktig svar:** Den kan etterligne kroppens egne hormoner og binde seg til hormonreseptorer

**Forklaring:**

Hormonforstyrrende miljøgifter (endokrine forstyrrere) virker ved å forstyrre hormonsystemets normale funksjon. Den vanligste mekanismen er:

1. **Etterligning:** Miljøgiften har en molekylstruktur som ligner på et naturlig hormon (f.eks. østrogen)
2. **Binding til reseptorer:** Miljøgiften binder seg til hormonreseptorene
3. **Feil signaler:** Reseptoren «tror» den har mottatt et ekte hormon og sender signal til cellen
4. **Forstyrrelser:** Cellen reagerer som om den fikk et hormonsignal, selv om det egentlige hormonet ikke ble sendt

Andre mekanismer inkluderer:
- Blokkering av reseptorer (hindrer ekte hormoner i å virke)
- Forstyrrelse av enzymer som produserer eller bryter ned hormoner

Eksempler: PCB og bisfenol A kan etterligne østrogen. DDT forstyrrer kalsiumstoffskiftet hos fugler.

Merk: Hormonforstyrrende stoffer ødelegger vanligvis ikke hormonkjertlene direkte, men forstyrrer signaloverføringen.`,
      },
    },

    // ========================================================================
    // OPPSUMMERING
    // ========================================================================

    {
      id: 'nat10-5-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Oversikt over stoffer og deres påvirkning

| Kategori | Eksempler | Påvirker | Hovedrisiko |
|----------|-----------|----------|-------------|
| **Legemidler** | Paracetamol, antibiotika, antidepressiva | Nervesystemet (smerte, infeksjoner, humør) | Bivirkninger, antibiotikaresistens |
| **Alkohol** | Etanol | GABA/glutamat i nervesystemet | Leverskade, hjerneskade, avhengighet |
| **Tobakk/nikotin** | Sigaretter, snus, e-sigaretter | Dopaminsystemet | Kreft, KOLS, hjerte-karsykdom, avhengighet |
| **Cannabis** | THC | Cannabinoidreseptorer | Hjerneeffekter hos unge, psykisk helse |
| **Stimulerende** | Amfetamin, kokain | Dopamin, noradrenalin | Hjerte-karsykdom, psykose, avhengighet |
| **Opioider** | Heroin, morfin, fentanyl | Opioidreseptorer, endorfiner | Overdose (pustestopp), sterk avhengighet |
| **Hallusinogener** | LSD, psilocybin | Serotoninreseptorer | Psykiske reaksjoner, ulykker |
| **Doping** | Anabole steroider, EPO, HGH | Hormonsystemet | Hjerte, lever, hormonforstyrrelser |
| **Miljøgifter** | Kvikksølv, PCB, PFAS, DDT | Nervesystem og hormonsystem | Bioakkumulering, hormonforstyrrelser |

### Viktigste poeng

1. **Psykoaktive stoffer** virker ved å endre signaloverføringen mellom nerveceller – de kan etterligne, forsterke, hemme eller blokkere nevrotransmittere

2. **Legemidler** er stoffer som er testet og godkjent for å behandle sykdom – de påvirker nervesystemet på en kontrollert måte

3. **Rusmidler** forstyrrer hjernens belønningssystem (dopamin) og kan føre til toleranse og avhengighet

4. **Ungdoms hjerne** er under utvikling og er ekstra sårbar for skade fra rusmidler – spesielt pannelappen som styrer impulskontroll

5. **Doping** forstyrrer hormonsystemets tilbakekoblingsmekanismer og kan gi varige hormonelle konsekvenser

6. **Miljøgifter** bioakkumulerer i organismer og biomagnifiserer i næringskjeder, og kan forstyrre hormonsystemet ved å etterligne kroppens egne hormoner

7. **Kunnskap er forebygging** – å forstå hvordan stoffer virker i kroppen er et viktig grunnlag for å ta informerte og gode valg`,
    },

    // ========================================================================
    // SAMLEOPPGAVER
    // ========================================================================

    {
      id: 'nat10-5-6-samleoppgaver-header',
      type: 'text',
      content: `## Samleoppgaver

Disse oppgavene dekker stoff fra hele kapitlet og krever at du kombinerer kunnskap fra flere delkapitler.`,
    },

    // ========== OPPGAVE 15: MEDIUM ==========
    {
      id: 'nat10-5-6-ex-15-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-15',
        number: '5.6.15',
        type: 'classic',
        difficulty: 'medium',
        task: `Sammenlign rusmidler og legemidler. Hva er likheter og forskjeller mellom dem? Bruk eksempler for å illustrere svaret ditt.`,
        solution: `**Likheter mellom rusmidler og legemidler:**

1. **Begge påvirker nervesystemet:** Både rusmidler og legemidler virker ved å endre signaloverføringen mellom nerveceller (nevrotransmittere og reseptorer)
2. **Begge kan gi bivirkninger:** Alle stoffer som påvirker kroppen kan ha uønskede virkninger
3. **Begge kan gi avhengighet:** Noen legemidler (f.eks. opioide smertestillende) kan gi avhengighet, akkurat som rusmidler
4. **Noen stoffer er begge deler:** Morfin er et legemiddel når det brukes medisinsk mot sterke smerter, men et rusmiddel når det misbrukes

**Forskjeller:**

| Egenskap | Legemidler | Rusmidler |
|----------|-----------|-----------|
| **Formål** | Behandle, lindre eller forebygge sykdom | Gi rus, endre sinnstilstand |
| **Testing** | Grundig testet for virkning og sikkerhet | Ikke testet – ukjent renhet og styrke |
| **Dosering** | Nøyaktig dosering angitt på pakning | Ukontrollert dosering |
| **Regulering** | Godkjent av legemiddelmyndigheter | Ulovlig (de fleste) |
| **Veiledning** | Brukes etter legens/apotekets råd | Ingen medisinsk veiledning |
| **Risikostyring** | Bivirkninger kartlagt, nytte veid mot risiko | Risiko ukjent eller ignorert |

**Eksempler:**
- **Paracetamol (legemiddel):** Testet dose, kjent virkningsmekanisme, trygg ved normal bruk, demper smertesignaler kontrollert
- **Amfetamin (kan være begge):** Brukes medisinsk mot ADHD (kontrollert dose under oppfølging), men er et rusmiddel når det misbrukes (ukontrollert dose, stor helserisiko)
- **Morfin (kan være begge):** Livsviktig legemiddel for smertelindring på sykehus, men svært avhengighetsskapende ved misbruk

**Hovedforskjell:** Den avgjørende forskjellen er at legemidler brukes kontrollert med et medisinsk formål, der nytten er veid mot risikoen. Rusmidler brukes ukontrollert med rus som formål, uten slik avveining.`,
      },
    },

    // ========== OPPGAVE 16: MEDIUM ==========
    {
      id: 'nat10-5-6-ex-16-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-16',
        number: '5.6.16',
        type: 'classic',
        difficulty: 'medium',
        task: `Diskuter hvorfor ungdom er en spesielt sårbar gruppe når det gjelder rusmidler. Trekk inn kunnskap om hjernens utvikling, dopamin og sosialt press. Foreslå minst to forebyggende tiltak.`,
        solution: `**Hvorfor ungdom er spesielt sårbar:**

**1. Biologiske faktorer – hjernens utvikling:**
- Hjernen er ikke ferdig utviklet før ca. 25 år
- **Pannelappen** (impulskontroll, planlegging, risikovurdering) modnes sist
- **Belønningssystemet** (dopamin) er derimot svært aktivt i ungdomsårene
- Ubalanse: Sterk belønningssøking + svak impulskontroll = økt risiko for å prøve rusmidler
- Hjernen er mer plastisk under utvikling → mer sårbar for varig endring ved rusbruk
- Toleranse kan utvikles raskere, og avhengighet kan oppstå lettere

**2. Dopaminsystemet:**
- I ungdomsårene er dopaminsystemet ekstra følsomt
- Rusmidler «kaprer» belønningssystemet ved å gi en unaturlig sterk dopaminfrigjøring
- Hjernen kan «lære» at rusmiddelet er den mest effektive kilden til belønning
- Andre aktiviteter (skole, hobbyer, sosialt) kan bli mindre givende i sammenligning

**3. Sosialt press:**
- Tilhørighet og aksept er svært viktig i ungdomsårene
- Gruppepress kan gjøre det vanskelig å si nei
- Sosiale medier og festkultur kan normalisere rusbruk
- Noen ungdommer bruker rusmidler for å håndtere stress, ensomhet eller psykiske vansker

**Forebyggende tiltak:**

**Tiltak 1 – Kunnskapsbasert undervisning:**
- Gi ungdom faktisk kunnskap om hvordan stoffer virker i hjernen
- Unngå skremselsstrategier som ikke virker – bruk vitenskapelig forklaring
- Fokuser på hjernens utvikling og hvorfor å vente har biologiske fordeler

**Tiltak 2 – Styrke sosiale ferdigheter:**
- Lære teknikker for å motstå gruppepress
- Bygge selvtillit og evne til å ta egne valg
- Tilby trygge sosiale arenaer uten ruspress

**Tiltak 3 – Tidlig hjelp:**
- God tilgang til helsesykepleier, rådgivere og psykologer
- Senke terskelen for å søke hjelp med psykiske utfordringer
- Ungdom som sliter psykisk har høyere risiko for rusproblemer`,
      },
    },

    // ========== OPPGAVE 17: VANSKELIG ==========
    {
      id: 'nat10-5-6-ex-17-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-17',
        number: '5.6.17',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Miljøgiften PFAS er funnet i drikkevannet i flere norske kommuner. Bruk kunnskapen din om bioakkumulering, biomagnifikasjon og hormonforstyrrende stoffer til å analysere hvorfor PFAS er et alvorlig miljø- og helseproblem. Forklar også hvorfor problemet er vanskelig å løse.`,
        solution: `**Analyse av PFAS som miljø- og helseproblem:**

**1. Persistens – «evighetskjemikalier»:**
- PFAS-forbindelser har ekstremt sterke karbon-fluor-bindinger
- Disse bindingene brytes nesten ikke ned av naturlige prosesser
- PFAS kan finnes i miljøet i hundrevis av år etter utslipp
- Selv om vi stopper all produksjon i dag, vil eksisterende PFAS bli liggende i naturen

**2. Bioakkumulering:**
- PFAS tas opp fra forurenset drikkevann og mat
- Kroppen skiller ut PFAS svært langsomt – halveringstiden i mennesker er 2-8 år
- Over tid bygger konsentrasjonen seg opp i blodet og organene
- Selv lave nivåer i drikkevann kan over år gi betydelig oppsamling i kroppen

**3. Biomagnifikasjon:**
- PFAS fra forurenset vann tas opp av vannlevende organismer
- Konsentrasjonen øker oppover i næringskjeden
- Fisk fra forurensede vassdrag kan ha høye PFAS-nivåer
- Mennesker som spiser mye fisk fra slike områder eksponeres for høyere doser

**4. Hormonforstyrrende effekter:**
- Noen PFAS-forbindelser kan forstyrre skjoldbruskkjertelens hormoner (viktige for stoffskifte og utvikling)
- Mistenkt for å påvirke reproduksjonshormoner
- Studier viser sammenheng med nedsatt immunrespons (dårligere effekt av vaksiner)
- Mulig økt risiko for enkelte kreftformer (nyre, testikkel)
- Barn og fostre kan være ekstra sårbare

**5. Utbredelse og kilder:**
- PFAS er brukt i tusenvis av produkter: tekstiler, stekepanner, matemballasje, brannskum
- Industriområder og branntreningsfelt er spesielt forurensede
- PFAS lekker ut til grunnvann og overflatevann
- Funnet i drikkevann i mange kommuner, blant annet ved militære flyplasser

**Hvorfor problemet er vanskelig å løse:**

1. **Ingen effektiv nedbryting:** Konvensjonelle renseanlegg fjerner ikke PFAS effektivt. Spesialrensing er dyrt.
2. **Enorm utbredelse:** PFAS er allerede spredt i hele det globale miljøet – det finnes i blodprøver fra mennesker over hele verden
3. **Tusenvis av varianter:** Over 4 700 ulike PFAS-forbindelser finnes – å regulere alle er en enorm oppgave
4. **Fortsatt i bruk:** Mange PFAS-stoffer brukes fortsatt fordi det mangler gode alternativer
5. **Lang nedbrytingstid:** Selv om utslippene stoppes, vil eksisterende PFAS forbli i miljøet i generasjoner
6. **Økonomiske interesser:** Store industrier er avhengige av PFAS, noe som gjør regulering politisk krevende

**Mulige tiltak:**
- Fase ut PFAS der alternativer finnes
- Investere i avansert vannrensing
- Strengere regulering av kjemikalieindustrien
- Internasjonalt samarbeid (miljøgifter kjenner ingen landegrenser)
- Mer forskning på helseeffekter og renseteknologi

**Konklusjon:** PFAS illustrerer alle de verste egenskapene ved miljøgifter: de er persistente, bioakkumulerende og hormonforstyrrende. I tillegg er de ekstremt utbredt, noe som gjør problemet til en global utfordring som krever langsiktige løsninger.`,
      },
    },

    // ========== OPPGAVE 18: VANSKELIG (PROSJEKTOPPGAVE) ==========
    {
      id: 'nat10-5-6-ex-18-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-5-6-oppg-18',
        number: '5.6.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Prosjektoppgave:** Velg ett av temaene under og lag en presentasjon (ca. 5-8 minutter) der du forklarer temaet med utgangspunkt i det du har lært om nervesystemet og hormonsystemet.

**Velg ett tema:**
a) Hvordan påvirker energidrikker kroppen? (Koffein, taurin, sukker – virkninger og risiko for ungdom)
b) E-sigaretter og vaping blant ungdom – hva vet vi om helsekonsekvensene?
c) Doping utenfor idretten – hvorfor bruker noen ungdommer anabole steroider, og hva er konsekvensene?
d) Miljøgifter i hverdagen – hvilke miljøgifter utsettes vi for, og hva kan vi gjøre for å redusere eksponeringen?

Presentasjonen skal inneholde:
1. Faglig forklaring med riktig bruk av begreper (nevrotransmittere, reseptorer, hormoner)
2. Minst to konkrete eksempler
3. Helsekonsekvenser – kort- og langsiktige
4. Dine egne refleksjoner rundt temaet`,
        solution: `**Vurderingskriterier for presentasjonen:**

**Høy måloppnåelse:**
- Presis bruk av fagbegreper (nevrotransmittere, reseptorer, hormoner, toleranse, avhengighet, bioakkumulering)
- Klar forklaring av virkningsmekanismer på molekylært nivå
- Godt underbygde eksempler med relevante fakta
- Balansert fremstilling av helsekonsekvenser (verken overdrevne eller bagatelliserte)
- Egne, gjennomtenkte refleksjoner
- God struktur og formidling

**Middels måloppnåelse:**
- Bruker de fleste fagbegreper riktig
- Forklarer virkningsmekanismer på et overordnet nivå
- Gir relevante eksempler
- Beskriver helsekonsekvenser
- Noen egne refleksjoner

**Lav måloppnåelse:**
- Få fagbegreper brukt
- Overfladisk forklaring av virkningsmekanismer
- Få eller irrelevante eksempler
- Ufullstendig beskrivelse av helsekonsekvenser

**Eksempel på disponering (tema b: E-sigaretter):**

1. **Innledning:** Hva er e-sigaretter, og hvorfor har de blitt populære blant unge?
2. **Nikotin og hjernen:** Forklar hvordan nikotin binder seg til acetylkolinreseptorer og utløser dopamin. Forklar toleranse og avhengighet.
3. **Sammenligning med sigaretter:** Forskjeller i innhold og helserisiko
4. **Eksempler:** EVALI-utbruddet i USA, tall på ungdomsbruk i Norge
5. **Helsekonsekvenser:** Nikotinavhengighet, mulige lungeskader, hjerneeffekter hos unge
6. **Refleksjon:** Hvorfor er smakstilsetninger problematiske? Er regulering nødvendig?`,
        isInvestigation: true,
      },
    },
  ],
  exercises: [], // Oppgavene er embedded i content
  keyTerms: [
    { term: 'Psykoaktive stoffer', definition: 'Stoffer som påvirker hjernen og endrer tanker, følelser eller atferd ved å endre signaloverføringen mellom nerveceller' },
    { term: 'Nevrotransmitter', definition: 'Kjemisk signalstoff som overfører nervesignaler mellom nerveceller i synapsene' },
    { term: 'Reseptor', definition: 'Protein på en nervecelle som binder et spesifikt signalstoff og starter en respons i cellen' },
    { term: 'Dopamin', definition: 'Nevrotransmitter involvert i belønning, motivasjon og bevegelse – mange rusmidler øker dopaminfrigjøring' },
    { term: 'GABA', definition: 'Hjernens viktigste dempende nevrotransmitter – alkohol forsterker GABA-virkningen' },
    { term: 'Serotonin', definition: 'Nevrotransmitter som regulerer humør, søvn og appetitt – påvirkes av MDMA, LSD og antidepressiva' },
    { term: 'Toleranse', definition: 'Tilstand der kroppen har vendt seg til et stoff slik at man trenger høyere doser for å oppnå samme virkning' },
    { term: 'Avhengighet', definition: 'Tilstand der kroppen og/eller psyken er avhengig av et stoff for å fungere normalt – gir abstinenssymptomer ved stopp' },
    { term: 'Legemiddel', definition: 'Stoff som er vitenskapelig testet og godkjent for å forebygge, diagnostisere, lindre eller behandle sykdom' },
    { term: 'Antibiotikaresistens', definition: 'Når bakterier utvikler motstandskraft mot antibiotika slik at medisinene ikke lenger virker' },
    { term: 'Promille', definition: 'Mål på alkoholkonsentrasjon i blodet – 1 promille betyr 1 gram alkohol per liter blod' },
    { term: 'Etanol', definition: 'Det kjemiske stoffet i alkoholholdige drikker (C₂H₅OH) – et dempende rusmiddel' },
    { term: 'Nikotin', definition: 'Svært avhengighetsskapende stoff i tobakk som binder seg til acetylkolinreseptorer og utløser dopaminfrigjøring' },
    { term: 'THC', definition: 'Tetrahydrocannabinol – det psykoaktive virkestoffet i cannabis som binder seg til cannabinoidreseptorer' },
    { term: 'Doping', definition: 'Bruk av forbudte stoffer eller metoder for å øke fysisk prestasjon – forstyrrer hormonsystemet' },
    { term: 'Anabole steroider', definition: 'Syntetiske varianter av testosteron som øker muskelvekst – gir hormonelle forstyrrelser via negativ tilbakekobling' },
    { term: 'Negativ tilbakekobling', definition: 'Reguleringsmekanisme der høyt hormonnivå fører til redusert produksjon – forklarer bivirkninger av hormontilførsel' },
    { term: 'Miljøgift', definition: 'Menneskeskapt stoff som er skadelig, brytes langsomt ned og kan hope seg opp i næringskjeder' },
    { term: 'Bioakkumulering', definition: 'Opphopning av et stoff i en organisme over tid fordi det tas opp raskere enn det brytes ned' },
    { term: 'Biomagnifikasjon', definition: 'Økning av giftkonsentrasjonen for hvert ledd oppover i næringskjeden' },
    { term: 'Hormonforstyrrende stoffer', definition: 'Stoffer som etterligner, blokkerer eller forstyrrer kroppens hormoner og deres signalveier' },
    { term: 'PFAS', definition: 'Per- og polyfluorerte stoffer – svært persistente miljøgifter kalt evighetskjemikalier' },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const NATURFAG_10_KAP5B_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NAT10_5_6,
];
