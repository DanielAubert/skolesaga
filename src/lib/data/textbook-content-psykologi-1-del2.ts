/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Psykologi 1 - Del 2: Biologisk psykologi
 * Seksjon 2: Biologisk psykologi (2.1-2.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_PSYKOLOGI_1_2_1: TextbookChapter = {
  id: 'psykologi-1-2-1',
  courseId: 'psykologi-1',
  chapterNumber: '2.1',
  title: 'Nervesystemet',
  curriculum: 'LK20',
  subject: 'psykologi',
  level: 'VG3',
  estimatedMinutes: 22,
  content: [
    {
      id: 'psy1-2-1-intro',
      type: 'text' as const,
      content: `# Nervesystemet

Nervesystemet er kroppens kommunikasjonssentral. Det mottar informasjon fra omgivelsene, behandler denne informasjonen, og sender ut kommandoer til kroppen. Uten nervesystemet ville vi ikke kunne tenke, foele, bevege oss eller overleve.

Nervesystemet er bygget opp av milliarder av nerveceller, kalt **nevroner**. Disse cellene kommuniserer med hverandre gjennom elektriske og kjemiske signaler. Sammen danner de et komplekst nettverk som styrer alt fra aandedrett og hjerteslag til tanker og foelelser.`
    },
    {
      id: 'psy1-2-1-divisions',
      type: 'text' as const,
      content: `## Nervesystemets inndeling

Nervesystemet deles inn i to hoveddeler:

### Sentralnervesystemet (CNS)
Sentralnervesystemet bestaaar av **hjernen** og **ryggmargen**. Dette er kontrollsentralen som mottar informasjon, behandler den, og sender ut kommandoer.

- **Hjernen** er senteret for tanker, foelelser, minner og bevisst kontroll
- **Ryggmargen** viderefører signaler mellom hjernen og resten av kroppen, og styrer reflekser

### Perifert nervesystem (PNS)
Det perifere nervesystemet bestaaar av alle nervene som forgreiner seg ut fra sentralnervesystemet til resten av kroppen. Det fungerer som "kablene" som forbinder hjernen og ryggmargen med organer, muskler og sanseorganer.

Det perifere nervesystemet deles videre inn i:

**1. Somatisk nervesystem** (vilkaarlig nervesystem)
- Styrer vilkaarlige bevegelser av skjelettmuskulatur
- Overfører sanseinformasjon til CNS
- Eksempel: Naar du bestemmer deg for aa lofte haanden

**2. Autonomt nervesystem** (ufrivillig nervesystem)
- Styrer ufrivillige funksjoner som hjerteslag, aandedrett, fordoyelse
- Fungerer automatisk uten bevisst kontroll
- Deles i to deler: sympatisk og parasympatisk`
    },
    {
      id: 'psy1-2-1-autonomic',
      type: 'text' as const,
      content: `## Det autonome nervesystemet

Det autonome nervesystemet har to deler som ofte jobber motsatt av hverandre:

### Sympatisk nervesystem
Det sympatiske nervesystemet forbereder kroppen paa **handling og stress**. Det aktiveres i farlige situasjoner og kalles ofte "kjemp-eller-flykt"-systemet.

**Effekter av sympatisk aktivering:**
- Oekning i hjertefrekvens og blodtrykk
- Utvidelse av pupillene
- Oekning i aandedrett
- Frigjoring av energi (glukose og fett)
- Reduksjon i fordoyelsesaktivitet
- Frigjoring av stresshormoner

### Parasympatisk nervesystem
Det parasympatiske nervesystemet fremmer **hvile og restitusjon**. Det aktiveres naar vi er i en trygg og avslappet tilstand, og kalles ofte "hvil-og-fordoy"-systemet.

**Effekter av parasympatisk aktivering:**
- Reduksjon i hjertefrekvens
- Stimulering av fordoyelse
- Opptil energi (lagring av naeringsstoffer)
- Avslapping av muskler
- Bedre immunforsvar`
    },
    {
      id: 'psy1-2-1-example-1',
      type: 'example' as const,
      title: 'Eksamen-stress',
      content: `**Situasjon:** Du sitter paa eksamen og faar utdelt oppgavesettet. Plutselig foeler du hjertet dunke, hendene blir svette, og du merker at du aander raskere.

**Forklaring:** Det sympatiske nervesystemet aktiveres fordi hjernen din oppfatter eksamen som en "trussel". Kroppen mobiliserer ressurser for aa prestere optimalt. Naar eksamen er over og du slapper av hjemme, tar det parasympatiske nervesystemet over - hjertefrekvensen senkes og kroppen begynner aa hvile.`
    },
    {
      id: 'psy1-2-1-neurons',
      type: 'text' as const,
      content: `## Nevroner - nervecellene

Et **nevron** er den grunnleggende byggestenen i nervesystemet. Hvert nevron kan kommunisere med tusenvis av andre nevroner, og sammen danner de komplekse nettverk.

### Nevronets struktur

Et typisk nevron bestaaar av tre hoveddeler:

**1. Cellekropp (soma)**
- Inneholder cellekjernen med DNA
- Holder cellens stoffskifte i gang
- Integrerer signaler fra andre nevroner

**2. Dendritter**
- Forgrenede utspring fra cellekroppen
- Mottar signaler fra andre nevroner
- Jo flere dendritter, jo flere forbindelser kan nevronet ha

**3. Akson**
- Lang, tynn utloeper fra cellekroppen
- Sender signaler videre til andre nevroner
- Kan vaere opptil en meter lang
- Dekket av **myelinskjede** som isolerer og oeker signalhastigheten
- Ender i **aksonterminaler** som frigjør nevrotransmittere

### Typer nevroner

**Sensoriske nevroner:** Sender informasjon fra sanseorganer til CNS
**Motoriske nevroner:** Sender kommandoer fra CNS til muskler og kjoertler
**Interneuroner:** Forbinder nevroner med hverandre i CNS`
    },
    {
      id: 'psy1-2-1-action-potential',
      type: 'text' as const,
      content: `## Aksjonspotensial - nervesignalets natur

Nervesignalet som sendes langs aksonet kalles et **aksjonspotensial**. Dette er et elektrisk signal som oppstaar naar nevronet aktiveres.

### Hvordan oppstaar et aksjonspotensial?

**1. Hviletilstand**
- Nevronet er negativt ladet innvendig (-70 mV)
- Positivt ladet utvendig
- Natrium (Na+) holdes ute, kalium (K+) holdes inne

**2. Depolarisering**
- Stimulering aapner natriumkanaler
- Natrium stroammer inn i cellen
- Spenningen endres fra negativ til positiv

**3. Repolarisering**
- Kaliumkanaler aapnes
- Kalium stroammer ut av cellen
- Spenningen gaar tilbake til negativ

**4. Refraktorperiode**
- Nevronet kan ikke fyres av igjen med en gang
- "Hvileperiode" foer nytt signal kan sendes

### Alt-eller-intet-prinsippet

Aksjonspotensial foelger **alt-eller-intet-prinsippet**: Hvis stimuleringen er sterk nok, fyres nevronet av med full styrke. Hvis stimuleringen er for svak, skjer det ingenting. Det finnes ingen "halve" aksjonspotensial.`
    },
    {
      id: 'psy1-2-1-synapse',
      type: 'text' as const,
      content: `## Synapser - kommunikasjon mellom nevroner

En **synapse** er kontaktpunktet mellom to nevroner. Her overfores signalet fra ett nevron til et annet.

### Synaptisk overfoering

**1. Elektrisk signal når aksonterminalen**
- Aksjonspotensial ankommer enden av aksonet

**2. Frigjoring av nevrotransmittere**
- Små vesikler i aksonterminalen aapner seg
- Kjemiske signalstoffer (nevrotransmittere) slippes ut i det synaptiske spalten

**3. Binding til reseptorer**
- Nevrotransmitterne krysser det synaptiske spalten
- De binder seg til reseptorer paa det neste nevronets dendritter

**4. Ny elektrisk respons**
- Hvis nok nevrotransmittere binder seg, aktiveres det neste nevronet
- Prosessen gjentar seg

### Eksitatoriske og inhibitoriske signaler

- **Eksitatoriske synapser:** Oeker sannsynligheten for at neste nevron fyres av
- **Inhibitoriske synapser:** Reduserer sannsynligheten for at neste nevron fyres av

Hvert nevron mottar tusenvis av signaler samtidig - noen eksitatoriske, noen inhibitoriske. Nevronet "summerer" disse signalene og bestemmer om det skal fyre av eller ikke.`
    },
    {
      id: 'psy1-2-1-example-2',
      type: 'example' as const,
      title: 'Refleksbuen',
      content: `**Situasjon:** Du tar i en varm komfyrplate og trekker haanden unna oeblikkelig, foer du i det hele tatt tenker over det.

**Forklaring:** Dette er en **refleks** som styres av ryggmargen uten involvering av hjernen:
1. Sensoriske nevroner i huden registrerer smerte og varme
2. Signalet sendes til ryggmargen
3. Interneuroner i ryggmargen viderefører signalet direkte til motoriske nevroner
4. Motoriske nevroner sender kommando til muskler i armen om aa trekke seg unna
5. Samtidig sendes signalet videre til hjernen, saa du blir bevisst smerten litt senere

Refleksen skjer saa raskt fordi signalet ikke trenger aa gaa via hjernen foerst.`
    }
  ],
  exercises: [
    {
      id: 'psy1-2-1-ex-1',
      number: 1,
      type: 'multiple-choice' as const,
      task: `Hva er hovedforskjellen mellom det somatiske og det autonome nervesystemet?`,
      options: [
        {
          id: 'a',
          text: 'Det somatiske nervesystemet styrer sansene, det autonome styrer bevegelser',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Det somatiske nervesystemet styrer vilkaarlige bevegelser, det autonome styrer ufrivillige funksjoner',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'Det somatiske nervesystemet er i hjernen, det autonome er i ryggmargen',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'Det somatiske nervesystemet er aktiv om dagen, det autonome om natten',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

Det somatiske nervesystemet styrer vilkaarlige bevegelser av skjelettmuskulatur - bevegelser vi bevisst kontrollerer. Det autonome nervesystemet styrer ufrivillige funksjoner som hjerteslag, aandedrett og fordoyelse - funksjoner som skjer automatisk.`
    },
    {
      id: 'psy1-2-1-ex-2',
      type: 'multiple-choice' as const,
      task: `Hvilken del av det autonome nervesystemet aktiveres naar du ser en farlig situasjon?`,
      options: [
        {
          id: 'a',
          text: 'Det parasympatiske nervesystemet',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Det sympatiske nervesystemet',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'Det somatiske nervesystemet',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'Sentralnervesystemet',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

Det sympatiske nervesystemet aktiveres i stressituasjoner og forbereder kroppen paa "kjemp eller flykt". Det oekar hjertefrekvens, aandedrett og energifrigjoring for aa haandtere faren.`
    },
    {
      id: 'psy1-2-1-ex-3',
      type: 'classic' as const,
      task: `Forklar de tre hoveddelene av et nevron og deres funksjoner.`,
      hints: [
        'Tenk paa hvordan signalet beveger seg gjennom nevronet',
        'Hva er funksjonen til dendritter, cellekropp og akson?'
      ],
      solution: `**De tre hoveddelene av et nevron:**

**1. Dendritter:**
- Forgrenede utspring fra cellekroppen
- Mottar signaler fra andre nevroner
- Jo flere dendritter, jo flere forbindelser

**2. Cellekropp (soma):**
- Inneholder cellekjernen
- Integrerer signaler fra dendritter
- Holder cellens stoffskifte i gang

**3. Akson:**
- Lang utloeper som sender signaler videre
- Dekket av myelinskjede for raskere overfoering
- Ender i aksonterminaler som frigjør nevrotransmittere

Signalet gaار fra dendritter → cellekropp → akson → neste nevron.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-1-ex-4',
      type: 'classic' as const,
      task: `Hva menes med "alt-eller-intet-prinsippet" i forhold til aksjonspotensial?`,
      hints: [
        'Kan et nevron fyre av med "halv styrke"?',
        'Hva skjer hvis stimuleringen er for svak?'
      ],
      solution: `**Alt-eller-intet-prinsippet:**

Et aksjonspotensial foelger alt-eller-intet-prinsippet, som betyr:

- Hvis stimuleringen er sterk nok (naar terskelverdi), fyres nevronet av med **full styrke**
- Hvis stimuleringen er for svak, skjer det **ingenting**
- Det finnes ingen "halve" eller "svake" aksjonspotensial

Dette er som en lysbryter: Enten er lyset paa (fullt), eller av. Det finnes ikke halvveis.

Styrken i nervesignalet bestemmes derfor ikke av hvor sterkt hvert aksjonspotensial er, men av **hvor mange** nevroner som fyres av og **hvor ofte** de fyres av.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-1-ex-5',
      type: 'multiple-choice' as const,
      task: `Hva skjer i det synaptiske spalten?`,
      options: [
        {
          id: 'a',
          text: 'Elektriske signaler hopper direkte fra ett nevron til et annet',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Nevrotransmittere frigjores og binder seg til reseptorer',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'Nevroner deler DNA med hverandre',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'Myelinskjede produseres',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

I det synaptiske spalten frigjores nevrotransmittere fra det foerste nevronets aksonterminaler. Disse kjemiske signalstoffene krysser spalten og binder seg til reseptorer paa det neste nevronets dendritter. Dette gjor om det kjemiske signalet tilbake til et elektrisk signal i det neste nevronet.`
    },
    {
      id: 'psy1-2-1-ex-6',
      type: 'classic' as const,
      task: `Beskriv forskjellen mellom det sympatiske og parasympatiske nervesystemet. Gi eksempler paa naar hver av dem aktiveres.`,
      hints: [
        'Tenk paa "kjemp eller flykt" versus "hvil og fordoy"',
        'Hva skjer med kroppen i stress versus avslapping?'
      ],
      solution: `**Sympatisk versus parasympatisk nervesystem:**

**Sympatisk nervesystem (kjemp-eller-flykt):**
- Aktiveres i stress- og faresituasjoner
- Oekar hjertefrekvens og blodtrykk
- Utvider pupiller
- Frigjoer energi
- Reduserer fordoyelse
- Eksempel: Naar du skal holde presentasjon eller flykter fra fare

**Parasympatisk nervesystem (hvil-og-fordoy):**
- Aktiveres naar vi er trygge og avslappet
- Reduserer hjertefrekvens
- Stimulerer fordoyelse
- Lagrer energi
- Styrker immunforsvaret
- Eksempel: Naar du slapper av etter middag eller ligger i sengen om kvelden

Disse to systemene balanserer hverandre for aa holde kroppen i likevekt.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-1-ex-7',
      type: 'classic' as const,
      task: `Forklar hvordan en refleks fungerer, og hvorfor reflekser skjer saa raskt.`,
      hints: [
        'Hvor behandles signalet i en refleks?',
        'Maa signalet via hjernen foerst?'
      ],
      solution: `**Hvordan en refleks fungerer:**

En refleks er en rask, automatisk respons paa en stimulus. Eksempel: Aa trekke haanden unna noe varmt.

**Prosessen:**
1. Sensoriske nevroner registrerer stimulus (f.eks. varme)
2. Signalet sendes til ryggmargen
3. Interneuroner i ryggmargen viderefører signalet direkte til motoriske nevroner
4. Motoriske nevroner sender kommando til muskler om aa reagere
5. Samtidig sendes signalet videre til hjernen (bevisst opplevelse kommer litt senere)

**Hvorfor saa rask?**
Refleksen skjer raskt fordi signalet bare gaار til ryggmargen og tilbake - det trenger ikke via hjernen foerst. Dette sparer tid og kan redde oss fra skade. Naar hjernen faar beskjed om hva som skjedde, har kroppen allerede reagert.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-1-ex-8',
      type: 'multiple-choice' as const,
      task: `Hva er funksjonen til myelinskjeden som dekker aksoner?`,
      options: [
        {
          id: 'a',
          text: 'Aa produsere nevrotransmittere',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Aa isolere aksonet og oeke signalhastigheten',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'Aa motta signaler fra andre nevroner',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'Aa lagre minner',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

Myelinskjeden fungerer som et isolerende lag rundt aksonet. Dette forhindrer at det elektriske signalet "lekker ut" og gjor at aksjonspotensial kan "hoppe" mellom aamme steder i myelinskjeden. Dette oekar signalhastigheten dramatisk - fra ca. 1 m/s til over 100 m/s.`
    }
  ]
};

export const CHAPTER_PSYKOLOGI_1_2_2: TextbookChapter = {
  id: 'psykologi-1-2-2',
  courseId: 'psykologi-1',
  chapterNumber: '2.2',
  title: 'Hjernen',
  curriculum: 'LK20',
  subject: 'psykologi',
  level: 'VG3',
  estimatedMinutes: 24,
  content: [
    {
      id: 'psy1-2-2-intro',
      type: 'text' as const,
      content: `# Hjernen

Hjernen er den mest komplekse strukturen vi kjenner til i universet. Den veier bare rundt 1,4 kg, men inneholder omtrent 86 milliarder nevroner med billioner av synaptiske forbindelser. Hjernen er senteret for alt vi tenker, foeler, husker og opplever.

Selv naar du sover, jobber hjernen paa spreng. Den regulerer aandedrett, hjerteslag, kroppstemeratur, og prosesserer minner fra dagen. Hjernen bruker 20% av kroppens energi, selv om den bare utgjor 2% av kroppsvekten.`
    },
    {
      id: 'psy1-2-2-structure',
      type: 'text' as const,
      content: `## Hjernens hovedstrukturer

Hjernen kan deles inn i flere hoveddeler, hver med spesifikke funksjoner:

### 1. Hjernestammen (brainstem)
Hjernestammen er den eldste og mest primitive delen av hjernen. Den kontrollerer grunnleggende overlevingsfunksjoner:

- **Medulla oblongata:** Styrer hjerteslag, aandedrett og blodtrykk
- **Pons:** Viderefører signaler og bidrar til soevn-vaaken-regulering
- **Retikulaere formasjon:** Regulerer vaakenhetsgrad og oppmerksomhet

Skade paa hjernestammen kan vaere dødelig fordi den styrer livsnodvendige funksjoner.

### 2. Lillehjernen (cerebellum)
Lillehjernen ligger bakerst i hjernen, under storhjernen. Den har flere funksjoner:

- Koordinerer bevegelser og balanse
- Finjusterer motorikk (f.eks. naar du skriver eller spiller piano)
- Bidrar til laering av motoriske faerdigheter
- Involvert i timing og presisjon av bevegelser

Skade paa lillehjernen fører til problemer med koordinasjon og balanse, men ikke lammelse.

### 3. Det limbiske systemet
Det limbiske systemet er en gruppe strukturer dypt inne i hjernen som styrer emosjoner og motivasjon:

**Hippocampus:**
- Avgjorende for dannelse av nye minner
- Konverterer korttidsminner til langtidsminner
- Viktig for romlig navigasjon
- Skade: Personer med hippocampus-skade kan ikke danne nye minner (anterogr amnesi)

**Amygdala:**
- Prosesserer emosjoner, spesielt frykt og aggresjon
- Aktiveres ved trusler og fare
- Viktig for emosjonelle minner
- Kobler sammen sanseinntrykk med emosjonelle reaksjoner

**Hypothalamus:**
- Regulerer sultfoelelse, toerste, kroppstemeratur
- Styrer hormonproduksjon via hypofysen
- Kontrollerer soevn-vaaken-syklus
- Viktig for seksualitet og aggresjon

**Thalamus:**
- "Relestasjon" for sanseinformasjon
- Alle sanser (bortsett fra lukt) gaার gjennom thalamus før de naar hjernebark
- Filtrerer og prioriterer informasjon`
    },
    {
      id: 'psy1-2-2-cortex',
      type: 'text' as const,
      content: `## Hjernebarken (korteks)

Hjernebarken, eller **korteks**, er det ytre laget av storhjernen. Dette er den "nye" hjernen som er mest utviklet hos mennesker. Korteks er bare 2-4 mm tykk, men er foldet mange ganger for aa faa plass til mer overflateareal.

Hjernebarken er delt i to **hjernehalvdeler** (hemisfaerer) som er forbundet av **corpus callosum**, en stor bunt med nervefibre.

### De fire hjernelappene

Hver hjernehalvdel er delt inn i fire lapper:

**1. Frontalloppen (pannelappen)**
Den stoerste lappen, ligger bak pannen:

- **Motorisk korteks:** Styrer vilkaarlige bevegelser
- **Brocas omraade:** Viktig for taleproduksjon
- **Prefrontal korteks:** Eksekutive funksjoner som planlegging, beslutningstaking, impulskontroll, arbeidsmemory
- Personlighet og sosialt samspill

**2. Parietallappen (isselhullslappen)**
Ligger oeverst paa hodet, bak frontalloppen:

- **Somatosensorisk korteks:** Prosesserer berorings-, smerte- og temperaturinformasjon
- Romlig oppfatning og orientering
- Integrerer sanseinformasjon
- Kroppsbilde og bevissthet om egen kropp

**3. Temporalloppen (tinninglappen)**
Ligger paa siden av hjernen, ved tinnningene:

- **Auditorisk korteks:** Prosesserer lydinformasjon
- **Wernickes omraade:** Viktig for spraaکforståelse
- Langtidsminne for fakta og hendelser
- Ansiktsgjenkjenning
- Emosjonell prosessering

**4. Oksipitalloppen (nakkelappen)**
Ligger bakerst i hjernen:

- **Visuell korteks:** Prosesserer synsinformasjon
- Fargeoppfatning, bevegelse, form
- Tolking av visuell informasjon`
    },
    {
      id: 'psy1-2-2-example-1',
      type: 'example' as const,
      title: 'Sprogets to sentre',
      content: `**Brocas omraade** og **Wernickes omraade** er to viktige spraaksentre i hjernen:

**Brocas omraade** (i frontalloppen):
- Styrer taleproduksjon
- Skade: Personen forstaaರ spraak, men sliter med aa snakke. Talen blir stakket og moeysommelig.

**Wernickes omraade** (i temporalloppen):
- Styrer spraakforståelse
- Skade: Personen kan snakke flytende, men ordene gir ikke mening. De forstaaರ heller ikke hva andre sier.

Disse omraadene er vanligvis i **venstre hemisfaere** hos ca. 95% av hoyrehendte og 70% av venstrehendte.`
    },
    {
      id: 'psy1-2-2-lateralization',
      type: 'text' as const,
      content: `## Lateralisering - hjernens to sider

De to hjernehalvdelene har delvis ulike funksjoner. Dette kalles **lateralisering**.

### Venstre hemisfaere
Hos de fleste mennesker er venstre hemisfaere spesialisert paa:

- Spraak (tale og forståelse)
- Logisk tenkning
- Matematikk og analytiske oppgaver
- Sekvensiell prosessering
- Detaljer

### Hoyre hemisfaere
Hoyre hemisfaere er bedre paa:

- Romlig oppfatning
- Ansiktsgjenkjenning
- Musikkoppfatning
- Kreativitet og intuisjon
- Helhetsperspektiv
- Emosjonell prosessering

**Viktig:** Dette er generelle tendenser. Begge hjernehalvdeler jobber sammen paa de fleste oppgaver. Myten om "venstre-hjerne-mennesker" og "hoyre-hjerne-mennesker" er en overforenkling.

### Krysset kontroll
Hjernen har **krysset kontroll** over kroppen:
- Venstre hemisfaere styrer hoyre side av kroppen
- Hoyre hemisfaere styrer venstre side av kroppen

Dette gjelder baade motorikk og sanseinntrykk.`
    },
    {
      id: 'psy1-2-2-plasticity',
      type: 'text' as const,
      content: `## Hjernens plastisitet

Tidligere trodde man at hjernen var "ferdig utviklet" i voksen alder. I dag vet vi at hjernen har enorm **plastisitet** - evnen til aa endre seg gjennom hele livet.

### Typer neuroplastisitet

**1. Strukturell plastisitet**
- Nye nevroner kan dannes (nevrogenese), spesielt i hippocampus
- Eksisterende nevroner danner nye forbindelser (synapser)
- Dendritter vokser og forgrener seg ved laering

**2. Funksjonell plastisitet**
- Omraader av hjernen kan overta funksjoner fra skadede omraader
- Barn har stoerre plastisitet enn voksne
- Trening og laering styrker nevrale nettverk

### Faktorer som fremmer plastisitet

- **Laering og stimulering:** Nye faerdigheter styrker og bygger nevrale forbindelser
- **Fysisk aktivitet:** Oeker blodtilfoersel til hjernen og fremmer nevrogenese
- **Soevn:** Konsoliderer laering og "rydder opp" i hjernen
- **Ernering:** Naeringsstoffer som omega-3 stoetter hjernens funksjon
- **Sosial interaksjon:** Stimulerer flere deler av hjernen samtidig

### Kritiske perioder

Visse faerdigheter er lettere aa laere i bestemte perioder:

- **Spraak:** Barn laerer spraak lett foer puberteten
- **Syn:** Synsutvikling skjer foerste leveaarene
- **Musikk:** Tidlig trening gir stoerst effekt paa musikalitet

Men hjernen kan laere og tilpasse seg hele livet, bare i noe saktere tempo.`
    },
    {
      id: 'psy1-2-2-phineas-gage',
      type: 'example' as const,
      title: 'Phineas Gage - frontallopp-skade',
      content: `**Historien om Phineas Gage** er et av de mest kjente tilfellene i nevrovitenskap.

**Hva skjedde:**
I 1848 jobbet Phineas Gage som anleggsleder ved jernbanebygging i USA. Under en sprengning gikk noe galt, og en jernstang paa over 1 meter ble skutt gjennom kinnet hans, gjennom hjernen, og ut gjennom toppen av hodet. Utrolig nok overlevde han.

**Forandringene:**
Foer ulykken: Phineas var ansvarsfull, paalitelig og godt likt.

Etter ulykken: Han gjennomgikk en dramatisk personlighetsforandring:
- Ble impulsiv og uforutsigbar
- Kunne ikke planlegge eller ta gode beslutninger
- Mistet impulskontroll
- Ble uhoflig og upassende i sosiale settinger

**Hva laerte vi:**
Jernstangen ødela deler av hans **prefrontale korteks** i frontalloppen. Dette viste at frontalloppen er avgjorende for:
- Personlighet
- Impulskontroll
- Planlegging og beslutningstaking
- Sosialt passende oppfoersel

Phineas Gage-casen demonstrerte at ulike deler av hjernen har spesifikke funksjoner, og at skade paa visse omraader kan forandre hvem vi er som personer.`
    },
    {
      id: 'psy1-2-2-methods',
      type: 'text' as const,
      content: `## Hvordan studerer vi hjernen?

Moderne nevrovitenskap bruker flere metoder for aa studere hjernen:

### Bildeteknikker

**1. fMRI (funksjonell MR)**
- Viser hvilke omraader av hjernen som er aktive under ulike oppgaver
- Maaler blodtilfoersel (mer aktivitet = mer blod)
- Utmerket romlig opplosning
- Brukes til aa kartlegge hjernefunksjoner

**2. EEG (elektroencefalografi)**
- Maaler elektrisk aktivitet i hjernen via elektroder paa hodet
- Utmerket tidsopplosning (millisekunder)
- Brukes til aa studere soevn, epilepsi, kognitive prosesser

**3. PET-scan**
- Bruker radioaktive markører for aa vise hjerneaktivitet
- Kan maale stoffskifte og nevrotransmitteraktivitet

### Kliniske studier
- Studier av pasienter med hjerneskader
- Sammenligner oppfoersel foer og etter skade
- Viktig for aa forstaa funksjonene til ulike omraader

### Dyrestudier
- Gir detaljert informasjon om nevrale mekanismer
- Etiske begrensninger paa hva vi kan gjore med mennesker`
    }
  ],
  exercises: [
    {
      id: 'psy1-2-2-ex-1',
      type: 'multiple-choice' as const,
      task: `Hvilken del av hjernen er mest kritisk for overlevelse fordi den styrer aandedrett og hjerteslag?`,
      options: [
        {
          id: 'a',
          text: 'Lillehjernen',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Hjernestammen',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'Frontalloppen',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'Hippocampus',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

Hjernestammen styrer livsnodvendige funksjoner som aandedrett, hjerteslag og blodtrykk. Disse funksjonene er automatiske og kritiske for overlevelse. Skade paa hjernestammen kan derfor vaere dodelig.`
    },
    {
      id: 'psy1-2-2-ex-2',
      type: 'classic' as const,
      task: `Forklar forskjellen mellom Brocas omraade og Wernickes omraade. Hva skjer hvis hver av dem blir skadet?`,
      hints: [
        'Tenk paa produksjon versus forståelse av spraak',
        'Hvor i hjernen ligger de?'
      ],
      solution: `**Brocas omraade versus Wernickes omraade:**

**Brocas omraade:**
- Ligger i frontalloppen (venstre hemisfaere)
- Ansvarlig for **taleproduksjon**
- Skade: Personen forstaaರ spraak, men sliter med aa tale. Talen blir stakket, moeysommelig og grammatisk feil. Dette kalles Brocas afasi.

**Wernickes omraade:**
- Ligger i temporalloppen (venstre hemisfaere)
- Ansvarlig for **spraakforståelse**
- Skade: Personen snakker flytende, men innholdet gir ikke mening. De forstaaರ ikke hva andre sier. Dette kalles Wernickes afasi.

Eksempel: En person med Brocas afasi kan tenke "Jeg vil ha vann" men bare klarer aa si "Vann... jeg... vil". En person med Wernickes afasi kan si "Jeg trenger den der tingesten som er vaataktig" uten aa skjonne at det ikke gir mening.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-2-ex-3',
      type: 'multiple-choice' as const,
      task: `Hvilken struktur i det limbiske systemet er mest viktig for dannelse av nye minner?`,
      options: [
        {
          id: 'a',
          text: 'Amygdala',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Hypothalamus',
          isCorrect: false
        },
        {
          id: 'c',
          text: 'Hippocampus',
          isCorrect: true
        },
        {
          id: 'd',
          text: 'Thalamus',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: c**

Hippocampus er avgjorende for aa danne nye minner. Den konverterer korttidsminner til langtidsminner. Personer med skade paa hippocampus kan ikke lagre nye minner (anterogr amnesi), men kan fortsatt huske hendelser fra foer skaden.`
    },
    {
      id: 'psy1-2-2-ex-4',
      type: 'classic' as const,
      task: `Beskriv funksjonene til de fire hjernelappene: frontallopp, parietallopp, temporallopp og oksipitallopp.`,
      hints: [
        'Tenk paa hvor i hjernen hver lapp ligger',
        'Hvilke sanser og funksjoner er knyttet til hver lapp?'
      ],
      solution: `**De fire hjernelappene:**

**1. Frontalloppen (pannelappen):**
- Motorisk kontroll (vilkaarlige bevegelser)
- Taleproduksjon (Brocas omraade)
- Planlegging og beslutningstaking
- Impulskontroll og personlighet
- Eksekutive funksjoner

**2. Parietallappen (isselhullslappen):**
- Somatosensorisk korteks (beroring, smerte, temperatur)
- Romlig oppfatning og orientering
- Integrering av sanseinformasjon
- Kroppsbilde

**3. Temporalloppen (tinninglappen):**
- Auditorisk korteks (lydinformasjon)
- Spraakforståelse (Wernickes omraade)
- Langtidsminne
- Ansiktsgjenkjenning

**4. Oksipitalloppen (nakkelappen):**
- Visuell korteks (synsinformasjon)
- Prosessering av farger, bevegelse, form
- Tolking av det vi ser`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-2-ex-5',
      type: 'multiple-choice' as const,
      task: `Hva viste casen med Phineas Gage?`,
      options: [
        {
          id: 'a',
          text: 'At hjernen ikke kan overleve alvorlige skader',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'At frontalloppen er viktig for personlighet og impulskontroll',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'At man ikke kan snakke uten frontallopp',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'At lillehjernen styrer emosjoner',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

Phineas Gage overlevde en alvorlig skade hvor en jernstang gikk gjennom hans prefrontale korteks i frontalloppen. Han endret personlighet dramatisk - fra ansvarsfull og paalitelig til impulsiv og sosialt upassende. Dette viste at frontalloppen er kritisk for personlighet, impulskontroll, planlegging og sosialt passende oppfoersel.`
    },
    {
      id: 'psy1-2-2-ex-6',
      type: 'classic' as const,
      task: `Hva betyr "hjernens plastisitet"? Gi eksempler paa faktorer som fremmer plastisitet.`,
      hints: [
        'Kan hjernen endre seg gjennom livet?',
        'Hva kan vi gjore for aa stoette hjernens utvikling?'
      ],
      solution: `**Hjernens plastisitet:**

Plastisitet er hjernens evne til aa endre seg og tilpasse seg gjennom hele livet. Dette inkluderer:

- Dannelse av nye nevroner (nevrogenese)
- Nye synaptiske forbindelser mellom nevroner
- Omraader som overtar funksjoner fra skadede deler
- Styrking av nevrale nettverk ved bruk

**Faktorer som fremmer plastisitet:**

1. **Laering og mental stimulering:** Nye faerdigheter bygger nye nevrale forbindelser
2. **Fysisk aktivitet:** Oekar blodtilfoersel og fremmer nevrogenese
3. **Soevn:** Konsoliderer minner og "rydder" i hjernen
4. **God ernering:** Omega-3 og andre naeringsstoffer stoetter hjernefunksjon
5. **Sosial interaksjon:** Stimulerer flere omraader samtidig

Hjernen har stoerst plastisitet i barne- og ungdomsaarene, men beholder evnen til aa laere og endre seg hele livet.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-2-ex-7',
      type: 'multiple-choice' as const,
      task: `Hva er funksjonen til corpus callosum?`,
      options: [
        {
          id: 'a',
          text: 'Aa produsere cerebrospinalvaske',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Aa forbinde de to hjernehalvdelene',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'Aa beskytte hjernen mot slag',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'Aa kontrollere balanse',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

Corpus callosum er en stor bunt med nervefibre som forbinder venstre og hoyre hemisfaere. Den sørger for at de to hjernehalvdelene kan kommunisere og dele informasjon med hverandre.`
    },
    {
      id: 'psy1-2-2-ex-8',
      type: 'classic' as const,
      task: `Forklar lateralisering. Hvilke funksjoner er typisk i venstre versus hoyre hemisfaere? Er det sant at noen mennesker er "venstre-hjerne" og andre "hoyre-hjerne"?`,
      hints: [
        'Tenk paa spraak versus romlig oppfatning',
        'Er det en absolutt arbeidsdeling?'
      ],
      solution: `**Lateralisering:**

Lateralisering betyr at de to hjernehalvdelene har delvis spesialiserte funksjoner.

**Venstre hemisfaere (hos de fleste):**
- Spraak (tale og forståelse)
- Logisk og analytisk tenkning
- Matematikk
- Sekvensiell prosessering
- Detaljer

**Hoyre hemisfaere:**
- Romlig oppfatning
- Ansiktsgjenkjenning
- Musikkoppfatning
- Kreativitet og intuisjon
- Helhetsperspektiv
- Emosjonell prosessering

**"Venstre-hjerne" versus "hoyre-hjerne" myten:**

Nei, dette er en overforenkling. De fleste oppgaver krever samarbeid mellom begge hemisfaerer. Selv om det er visse spesialiseringer, er det ikke slik at noen mennesker "bare bruker venstre hjerne" eller "bare bruker hoyre hjerne". Begge sider jobber sammen hele tiden, forbundet via corpus callosum.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    }
  ]
};

export const CHAPTER_PSYKOLOGI_1_2_3: TextbookChapter = {
  id: 'psykologi-1-2-3',
  courseId: 'psykologi-1',
  chapterNumber: '2.3',
  title: 'Nevrotransmittere og hormoner',
  curriculum: 'LK20',
  subject: 'psykologi',
  level: 'VG3',
  estimatedMinutes: 23,
  content: [
    {
      id: 'psy1-2-3-intro',
      type: 'text' as const,
      content: `# Nevrotransmittere og hormoner

Kommunikasjon i kroppen skjer paa to hovedmaater: raskt via nervesignaler og saktere via hormoner. **Nevrotransmittere** er kjemiske budbringere som overfører signaler mellom nevroner, mens **hormoner** er kjemiske budbringere som transporteres via blodbanen til ulike deler av kroppen.

Begge disse systemene paavirker vaar atferd, tanker og foelelser paa avgjorende maater. Ubalanse i nevrotransmittere og hormoner kan føre til psykiske lidelser og fysiske problemer.`
    },
    {
      id: 'psy1-2-3-neurotransmitters',
      type: 'text' as const,
      content: `## Nevrotransmittere

Nevrotransmittere er kjemiske stoffer som frigjores fra et nevrons aksonterminaler og binder seg til reseptorer paa neste nevron. Det finnes over 100 ulike nevrotransmittere, men noen er spesielt viktige for psykologisk funksjon.

### Dopamin
**Funksjoner:**
- Belonning og motivasjon
- Bevegelseskontroll
- Laering og oppmerksomhet
- Glaede og lystfoelelse

**For mye dopamin:**
- Kan bidra til psykoser og hallusinasjoner
- Paranoia
- Schizofreni (delvis)

**For lite dopamin:**
- Parkinsons sykdom (bevegelsesprobleम)
- Depresjon
- Mangel paa motivasjon og initiativ

**Eksempel:** Naar du oppnaar et maal eller faar ros, frigjores dopamin. Dette gir en lystfoelelse som motiverer deg til aa gjenta atferden. Mange rusmidler (kokain, amfetamin) virker ved aa oeke dopaminnivaaene.

### Serotonin
**Funksjoner:**
- Regulerer humør
- Soevn-vaaken-syklus
- Appetitt
- Impulskontroll
- Smertehemming

**For mye serotonin:**
- Serotonergt syndrom (farlig tilstand)
- Uro og angst

**For lite serotonin:**
- Depresjon
- Angst
- Tvangslidelser (OCD)
- Soevnproblemer

**Eksempel:** SSRI-medisiner (Selective Serotonin Reuptake Inhibitors) som brukes mot depresjon, virker ved aa oeke serotoninnivaaene i hjernen. Sollys oeker ogsaa serotoninproduksjonen, derfor er "vinterdepresjon" vanlig i maorketiden.

### Noradrenalin (Norepinefrin)
**Funksjoner:**
- Vaakenhetsgrad og oppmerksomhet
- Stressrespons
- Kampvillje
- Regulerer humør

**For mye noradrenalin:**
- Angst og stress
- Hoeyt blodtrykk
- Rastloeshet

**For lite noradrenalin:**
- Traetthet og utmattelse
- Depresjon
- Konsentrasjonsproblemer

**Eksempel:** Noradrenalin frigjores i farlige situasjoner. Det gjor deg vaaken, fokusert og klar til aa handle. ADHD-medisiner oeker ofte noradrenalin for aa bedre konsentrasjon.

### GABA (Gamma-aminobutyric acid)
**Funksjon:**
- Den viktigste **inhibitoriske** nevrotransmitteren
- Dempende effekt paa nervesystemet
- Reduserer angst og stress
- Fremmer soevn
- Forebygger overstimulering av nevroner

**For mye GABA:**
- Sederthet og doezighet
- Traeg tenkning

**For lite GABA:**
- Angst og panikk
- Soevnloeshet
- Epileptiske anfall (ukontrollert nevronaktivitet)

**Eksempel:** Benzodiazepiner (roeberoligende medisiner) virker ved aa oeke GABAs effekt. Alkohol aktiverer ogsaa GABA-reseptorer, derfor faar man en beroligende effekt.

### Glutamat
**Funksjon:**
- Den viktigste **eksitatoriske** nevrotransmitteren
- Sentral for laering og minne
- Aktiverer nevroner
- Hjernens "gasspedal"

**For mye glutamat:**
- Kan vaere giftig for nevroner (eksitotoksisitet)
- Migrene
- Nevrodegenerative sykdommer

**For lite glutamat:**
- Laerings- og hukommelsesproblemer
- Psykoser

**Eksempel:** Glutamat er avgjorende for dannelse av nye minner. Naar du laerer noe nytt, styrkes glutamatbaserte synaptiske forbindelser gjennom en prosess kalt langtidspotensering (LTP).

### Acetylkolin
**Funksjoner:**
- Muskelkontraksjon
- Laering og minne
- Oppmerksomhet
- Vaakenhetsgrad

**For mye acetylkolin:**
- Muskelkramper
- Oeked spyttutskillelse
- Kvalme

**For lite acetylkolin:**
- Muskelsvakhet
- Hukommelsesproblemer
- Alzheimers sykdom

**Eksempel:** Alzheimers sykdom er preget av nedbrytning av nevroner som produserer acetylkolin. Dette fører til alvorlige hukommelsesproblemer.`
    },
    {
      id: 'psy1-2-3-example-1',
      type: 'example' as const,
      title: 'Balansen mellom GABA og glutamat',
      content: `Tenk paa hjernen som en bil:
- **Glutamat** er gasspedalen - den aktiverer nevroner
- **GABA** er bremsepedalen - den demper nevronaktivitet

Begge er nodvendige for normal funksjon. For mye gass uten bremser (glutamat uten GABA) fører til overstimulering, angst og potensielt epileptiske anfall. For mye bremse uten gass (GABA uten glutamat) fører til traetthet og problemer med laering og hukommelse.

En sunn hjerne balanserer disse to kontinuerlig.`
    },
    {
      id: 'psy1-2-3-hormones',
      type: 'text' as const,
      content: `## Hormoner

Mens nevrotransmittere virker raskt og lokalt mellom nevroner, virker **hormoner** saktere men mer utbredt. Hormoner produseres i endokrine kjoertler og transporteres via blodbanen til celler over hele kroppen.

### Det endokrine systemet

Det endokrine systemet bestaார av flere kjoertler:

- **Hypofysen:** "Masterkjoertelen" som kontrollerer andre kjoertler
- **Hypothalamus:** Forbinder nervesystemet og hormonystemet
- **Skjoldbruskkjoertelen:** Regulerer stoffskifte
- **Binyrene:** Produserer stresshormoner
- **Bukspyttkjoertelen:** Regulerer blodsukkeret
- **Kjønnskjøertlene:** Produserer kjøennshormoner`
    },
    {
      id: 'psy1-2-3-stress-hormones',
      type: 'text' as const,
      content: `## Viktige hormoner for atferd og psykologi

### Kortisol - stresshormonet
**Produseres:** I binyrene
**Funksjoner:**
- Mobiliserer energi ved stress
- Oekar blodsukkeret
- Undertrykker immunforsvaret midlertidig
- Hjelper kroppen aa haandtere stress

**Kronisk hoeyt kortisol:**
- Depresjon og angst
- Soevnproblemer
- Svekket immunforsvar
- Vektoekning (spesielt rundt magen)
- Hukommelsesproblemer
- Redusert hippocampus-volum

**Eksempel:** Kortisol folger en døgnrytme - hoyest om morgenen (for aa vaekke oss) og lavest om kvelden. Ved kronisk stress blir kortisol hoyere gjennom hele døgnet, noe som forstyrrer soevn og helse.

### Adrenalin (Epinefrin)
**Produseres:** I binyrene
**Funksjoner:**
- Rask stressrespons ("kjemp eller flykt")
- Oekar hjertefrekvens
- Utvider pupiller
- Frigjor energi
- Skjerper sanser

**Eksempel:** Naar du plutselig blir skremt, frigjores adrenalin paa sekunder. Du faar hjertebank, aander raskere, og blir supervaaکen. Dette er kroppens maate aa forberede deg paa handling.

### Oksytocin - "kjærlighetshormonet"
**Produseres:** I hypothalamus, frigjores fra hypofysen
**Funksjoner:**
-Sosial tilknytning og bonding
- Tillit og empati
- Mor-barn-binding
- Romantisk kjaerlighet
- Reduserer stress og angst

**Eksempel:** Oksytocin frigjores ved kos, kraammer, sex, amming og positive sosiale interaksjoner. Det styrker foelelsen av tilknytning og tillit. Personer med hoyere oksy tocinnivaaer er ofte mer tillitsfulle og sosiale.

### Testosteron
**Produseres:** Hovedsakelig i testiklene (menn), men ogsaa i eggstokker (kvinner)
**Funksjoner:**
- Utvikling av mannlige kjoennskarak teristikker
- Libido (seksualdrift) hos begge kjoen
- Muskelmasse og styrke
- Energinivaa
- Selvtillit og dominansatferd

**For hoeyt testosteron:**
- Kan oeke aggresjon (omstridt)
- Risikovillig atferd
- Impulsitvitet

**For lavt testosteron:**
- Redusert libido
- Depresjon
- Traetthet
- Tap av muskelmasse

**Eksempel:** Testosteronnivaaer varierer. Det er hoeyest om morgenen og synker gjennom dagen. Konkurranseaktiviteter (sport, videospill, debatter) kan midlertidig oeke testosteron hos vinnere og redusere det hos tapere.

### Østrogen og progesteron
**Produseres:** Hovedsakelig i eggstokker (kvinner)
**Funksjoner:**
- Utvikling av kvinnelige kjo onnsk arakteristikker
- Menstruasjonssyklus
- Graviditet
- Regulerer humør
- Beskytter hjernen

**Hormonelle svingninger:**
- PMS (prem enstruelt syndrom) kan paavirkke humør
- Menopause (opphør av mensen) kan føre til humørsvingninger, hetetokter, soevnproblemer

**Eksempel:** Østrogen og progesteron varierer gjennom menstruasjonssyklusen. Noen kvinner merker humorsvingninger, energinivaa og konsentrasjon som paavirkes av disse hormonene.`
    },
    {
      id: 'psy1-2-3-hpa-axis',
      type: 'text' as const,
      content: `## HPA-aksen - kroppens stresssystem

**HPA-aksen** (Hypothalamus-Pituitary-Adrenal axis) er kroppens hovedsystem for aa haandtere langvarig stress.

### Hvordan HPA-aksen virker:

**1. Hypothalamus** registrerer stress
- Frigjor CRH (corticotropin-releasing hormone)

**2. Hypofysen** responderer
- Frigjor ACTH (adrenocorticotropic hormone)

**3. Binyrene** produserer hormoner
- Frigjor kortisol

**4. Negativ feedback**
- Kortisol signaliserer tilbake til hypothalamus og hypofysen
- Dette stopper videre produksjon

### Kronisk stress og HPA-aksen

Ved kronisk stress kan feedback-systemet svikte:
- Kortisol forblir hoeyt
- Hippocampus skades (den har mange kortisolreseptorer)
- Forhoeyet risiko for depresjon, angst, hukommelsesproblemer
- Svekket immunforsvar

**Eksempel:** Personer med PTSD (posttraumatisk stresslidelse) har ofte forstyrret HPA-akse-funksjon, med unormale kortisol mønstre.`
    },
    {
      id: 'psy1-2-3-example-2',
      type: 'example' as const,
      title: 'Nevrotransmittere vs. Hormoner',
      content: `**Situasjon:** Du skal holde en viktig presentasjon.

**Kort foer (sekunder-minutter):**
- **Adrenalin** (hormon) frigjores → rask hjertergang, svette hender
- **Noradrenalin** (nevrotransmitter OG hormon) → skjerpet oppmerksomhet

**Under presentasjonen:**
- **Dopamin** (nevrotransmitter) → motivasjon til aa gjore det bra
- **Kortisol** (hormon) → mobiliserer energi for vedvarende stresshaandtering

**Etter (hvis det gikk bra):**
- **Dopamin** oekar → foelelse av mestring og glaede
- **Oksytocin** frigjores ved positiv sosial respons → foelelse av tilknytning

**Timer/dager senere:**
- **Kortisol** synker tilbake til normalt
- **Serotonin** bidrar til bedre humør og soevn

Dette viser hvordan nevrotransmittere og hormoner samarbeider for aa haandtere stress og regulere atferd.`
    }
  ],
  exercises: [
    {
      id: 'psy1-2-3-ex-1',
      type: 'multiple-choice' as const,
      task: `Hvilken nevrotransmitter er mest forbundet med belonning og motivasjon?`,
      options: [
        {
          id: 'a',
          text: 'Serotonin',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Dopamin',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'GABA',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'Acetylkolin',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

Dopamin er sentral for belonning, motivasjon og lystfoelelse. Det frigjores naar vi opplever noe positivt eller oppnaar et maal. Mange rusmidler virker ved aa oeke dopaminnivaaene.`
    },
    {
      id: 'psy1-2-3-ex-2',
      type: 'classic' as const,
      task: `Forklar forskjellen mellom eksitatoriske og inhibitoriske nevrotransmittere. Gi eksempler paa hver type.`,
      hints: [
        'Tenk paa gasspedal versus bremsepedal',
        'Hvilke nevrotransmittere aktiverer versus demper nevroner?'
      ],
      solution: `**Eksitatoriske versus inhibitoriske nevrotransmittere:**

**Eksitatoriske nevrotransmittere:**
- **Aktiverer** neste nevron
- Oekar sannsynligheten for at nevronet fyres av
- Eksempel: **Glutamat** - hjernens viktigste eksitatoriske nevrotransmitter, sentral for laering og minne
- Andre eksempler: Acetylkolin (i visse sammenhenger), noradrenalin

**Inhibitoriske nevrotransmittere:**
- **Demper** neste nevron
- Reduserer sannsynligheten for at nevronet fyres av
- Eksempel: **GABA** - hjernens viktigste inhibitoriske nevrotransmitter, reduserer angst og fremmer soevn
- Andre eksempler: Serotonin (i visse sammenhenger), glycin

**Balansen:**
Hjernen trenger begge typer. Glutamat er "gasspedalen" og GABA er "bremsepedalen". Sammen regulerer de nevronaktivitet og forebygger over- eller understimulering.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-3-ex-3',
      type: 'multiple-choice' as const,
      task: `Hvilket hormon kalles ofte "stresshormonet" og produseres i binyrene?`,
      options: [
        {
          id: 'a',
          text: 'Oksytocin',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Testosteron',
          isCorrect: false
        },
        {
          id: 'c',
          text: 'Kortisol',
          isCorrect: true
        },
        {
          id: 'd',
          text: 'Østrogen',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: c**

Kortisol produseres i binyrene og er kroppens hovedstresshormon. Det mobiliserer energi, oekar blodsukkeret og hjelper kroppen aa haandtere langvarig stress. Kronisk hoeyt kortisol kan føre til helseproblem er som depresjon, soevnproblemer og svekket immunforsvar.`
    },
    {
      id: 'psy1-2-3-ex-4',
      type: 'classic' as const,
      task: `Beskriv rollen til serotonin i hjernen. Hva kan skje hvis serotoninivaaene er for lave?`,
      hints: [
        'Hva regulerer serotonin?',
        'Hvilke lidelser er forbundet med lav serotonin?'
      ],
      solution: `**Serotoninens rolle:**

Serotonin er en nevrotransmitter med flere viktige funksjoner:

**Funksjoner:**
- Regulerer humør (foelelse av velvære)
- Soevn-vaaken-syklus
- Appetitt og matinntak
- Impulskontroll
- Smertehemming

**For lite serotonin kan føre til:**
- **Depresjon:** Vedvarende nedtrykthet og tap av interesse
- **Angst:** Bekymring og uro
- **Tvangslidelser (OCD):** Repeterende tanker og handlinger
- **Soevnproblemer:** Vansker med aa sovne og faa dyp soevn
- **Impulskontrollproblemer:** Vansker med aa kontrollere atferd

**Behandling:**
SSRI-medisiner (som Sertralin, Fluoxetin) virker ved aa oeke serotoninnivaaene i hjernen. De blokkerer gjenopptak av serotonin, slik at mer blir tilgjengelig i det synaptiske spalten.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-3-ex-5',
      type: 'multiple-choice' as const,
      task: `Hva er hovedforskjellen mellom hvordan nevrotransmittere og hormoner virker?`,
      options: [
        {
          id: 'a',
          text: 'Nevrotransmittere er kjemiske, hormoner er elektriske',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Nevrotransmittere virker raskt og lokalt, hormoner virker saktere og mer utbredt',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'Nevrotransmittere produseres i blodet, hormoner i hjernen',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'Det er ingen forskjell, det er to navn paa samme ting',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

**Nevrotransmittere:**
- Virker raskt (millisekunder)
- Lokalt mellom nevroner
- Overfører signaler over det synaptiske spalten

**Hormoner:**
- Virker saktere (minutter til timer)
- Transporteres via blodbanen
- Paavirker celler over hele kroppen

Begge er kjemiske budbringere, men de virker paa ulike maater og i ulike tidsskalaer.`
    },
    {
      id: 'psy1-2-3-ex-6',
      type: 'classic' as const,
      task: `Forklar HPA-aksen og hvordan den reagerer paa stress. Hva kan skje ved kronisk stress?`,
      hints: [
        'Hvilke tre organer/strukturer er involvert?',
        'Hva er rollen til kortisol og negativ feedback?'
      ],
      solution: `**HPA-aksen (Hypothalamus-Pituitary-Adrenal axis):**

HPA-aksen er kroppens hovedsystem for aa haandtere langvarig stress.

**Slik virker den:**

1. **Hypothalamus** registrerer stress → frigjor CRH
2. **Hypofysen** (pituitary) responderer → frigjor ACTH
3. **Binyrene** (adrenal glands) → produserer kortisol
4. **Negativ feedback:** Kortisol signaliserer tilbake og stopper videre produksjon

**Ved akutt stress:**
- Systemet fungerer som det skal
- Kortisol mobiliserer energi
- Feedback-systemet gjenopretter balanse

**Ved kronisk stress:**
- Feedback-systemet kan svikte
- Kortisol forblir hoeyt
- Hippocampus skades (har mange kortisolreseptorer)
- Forhoeyet risiko for:
  - Depresjon og angst
  - Hukommelsesproblemer
  - Svekket immunforsvar
  - Soevnforstyrrelser
  - Metabolske problemer

Dette viser hvor skadelig langvarig stress kan vaere for baade fysisk og psykisk helse.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-3-ex-7',
      type: 'multiple-choice' as const,
      task: `Hvilket hormon kalles "kjaerlighetshormonet" og fremmer sosial bonding?`,
      options: [
        {
          id: 'a',
          text: 'Testosteron',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Kortisol',
          isCorrect: false
        },
        {
          id: 'c',
          text: 'Oksytocin',
          isCorrect: true
        },
        {
          id: 'd',
          text: 'Adrenalin',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: c**

Oksytocin kalles ofte "kjaerlighetshormonet" fordi det fremmer sosial tilknytning, tillit og empati. Det frigjores ved positive sosiale interaksjoner som kraammer, kos, sex og amming. Oksytocin styrker baade romantiske forhold, vennskap og mor-barn-binding.`
    },
    {
      id: 'psy1-2-3-ex-8',
      type: 'classic' as const,
      task: `Sammenlign dopamin og serotonin. Hvilke funksjoner har de, og hva skjer hvis nivaaene er ubalansert?`,
      hints: [
        'Tenk paa belonning versus humør',
        'Hvilke lidelser er knyttet til hver nevrotransmitter?'
      ],
      solution: `**Dopamin versus Serotonin:**

**Dopamin:**

Funksjoner:
- Belonning og motivasjon
- Glaede og lystfoelelse
- Bevegelseskontroll
- Laering og oppmerksomhet

For mye:
- Psykoser, hallusinasjoner
- Paranoia
- Schizofreni (delvis)

For lite:
- Parkinsons sykdom
- Depresjon
- Mangel paa motivasjon

**Serotonin:**

Funksjoner:
- Regulerer humør og velvære
- Soevn-vaaken-syklus
- Appetitt
- Impulskontroll

For mye:
- Serotonergt syndrom
- Uro og angst

For lite:
- Depresjon
- Angst og tvangslidelser
- Soevnproblemer

**Hovedforskjell:**
- Dopamin = motivasjon, drivkraft, belonning
- Serotonin = humør, velvære, stabilitet

Begge er viktige for mental helse, og mange antidepressiva paavirker en eller begge disse nevrotransmitterne.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    }
  ]
};

export const CHAPTER_PSYKOLOGI_1_2_4: TextbookChapter = {
  id: 'psykologi-1-2-4',
  courseId: 'psykologi-1',
  chapterNumber: '2.4',
  title: 'Evolusjon og atferd',
  curriculum: 'LK20',
  subject: 'psykologi',
  level: 'VG3',
  estimatedMinutes: 22,
  content: [
    {
      id: 'psy1-2-4-intro',
      type: 'text' as const,
      content: `# Evolusjon og atferd

Hvorfor handlet mennesker som vi gjor? Hvorfor er vi sosiale? Hvorfor foeler vi frykt, sjalusi og kjaerlighet? **Evolusjonspsykologi** soeker aa forklare menneskelig atferd, tanker og foelelser ved aa se paa hvordan disse egenskapene har utviklet seg gjennom evolusjon.

Evolusjonspsykologien bygger paa Charles Darwins teori om naturlig utvalg: Egenskaper som oeker sjansen for overlevelse og reproduksjon blir vanligere i befolkningen over tid. Vaart sinn - akkurat som vaare kropper - er formet av millioner av aar med evolusjon.`
    },
    {
      id: 'psy1-2-4-natural-selection',
      type: 'text' as const,
      content: `## Naturlig utvalg

**Naturlig utvalg** er mekanismen bak evolusjon. Slik fungerer det:

### De tre hovedprinsippene:

**1. Variasjon**
- Individer i en populasjon er ulike (genetisk variasjon)
- Eksempel: Noen mennesker er naturlig mer impulsive, andre mer forsiktige

**2. Arv**
- Egenskaper kan arves fra foreldre til barn
- Genetisk informasjon fores videre gjennom DNA

**3. Utvalg**
- Individer med egenskaper som gir overlevelsesfordel faar flere barn
- Disse egenskapene blir mer vanlige i neste generasjon

### Tilpasning
En **tilpasning** (adaptation) er en egenskap som har utviklet seg fordi den oekar overlevelse eller reproduksjon.

**Eksempler paa fysiske tilpasninger:**
- Motsatte tommelfingre for aa gripe
- Bipedalisme (gaaende paa to bein) for aa se over gress
- Stort hjerneomfang for problem solving

**Eksempler paa psykologiske tilpasninger:**
- Frykt for edderkopper og slanger
- Preferanse for soett mat (energirik)
- Foelelsesmessig tilknytning til barn`
    },
    {
      id: 'psy1-2-4-eea',
      type: 'text' as const,
      content: `## EEA - Environment of Evolutionary Adaptedness

Et viktig konsept i evolusjonspsykologi er **EEA** (Environment of Evolutionary Adaptedness) - det evolusjonaere tilpasningsmiljøet.

Dette refererer til de forholdene vaare forfedre levde under i mesteparten av menneskehetens historie:

- **Tidsperiode:** Ca. 2 millioner til 10,000 aar siden
- **Livsstil:** Jeger-sankere i smaa grupper (20-100 personer)
- **Utfordringer:** Rovdyr, matmangel, gruppekonflikter, sykdommer
- **Sosial struktur:** Naere slektskapsbaand, gjensidig avhengighet

### Moderne uoverensstemmelse (mismatch)

Vaare hjerner er tilpasset EEA, men vi lever i et helt annet miljø. Dette skaper **evolusjonaere mismatcher**:

**Eksempel 1: Mat**
- EEA: Mat var knapp, soetter og fett var sjeldent
- I dag: Ubegrenset tilgang paa soett og fett
- Resultat: Overvekt, diabetes, helseproblemer

**Eksempel 2: Sosial gruppe**
- EEA: 20-100 personer aa forholde seg til
- I dag: Tusenvis av "venner" paa sosiale medier
- Resultat: Sosial utmattelse, sammenligning, lavere selvfoelelse

**Eksempel 3: Trusler**
- EEA: Umiddelbare fysiske farer (rovdyr, fiender)
- I dag: Abstrakte trusler (eksamen, økonomи, fremtidsutsikter)
- Resultat: Kronisk stress og angst`
    },
    {
      id: 'psy1-2-4-example-1',
      type: 'example' as const,
      title: 'Frykt for edderkopper',
      content: `**Hvorfor er saa mange redde for edderkopper?**

Edderkopp-fobi er mye vanligere enn for eksempel bil-fobi, selv om biler dreper langt flere mennesker enn edderkopper.

**Evolusjonsforklaring:**
- Vaare forfedre levde i miljøer hvor giftige edderkopper og slanger var reelle trusler
- De som raskt oppdaget og unngikk disse dyrene hadde stoerre sjanse for aa overleve
- Denne frykten er "hardwired" i hjernen vaар

**Hvorfor ikke bil-fobi?**
- Biler er en ny oppfinnelse (ca. 100 aar)
- Dette er for kort tid til at evolusjon skal utvikle en medfodt frykt
- Vi maa laere oss aa vaere forsiktige med biler

Dette viser at hjernen vaар er tilpasset faarer fra EEA, ikke moderne trusler.`
    },
    {
      id: 'psy1-2-4-parental-investment',
      type: 'text' as const,
      content: `## Foreldresinvestering og partnervalg

**Foreldresinvestering** (parental investment) refererer til den tiden, energien og ressursene en forelder investerer i et barn.

### Kjoennsforskjeller i investering

**Kvinner:**
- Hoeय foreldresinvestering (graviditet, amming)
- Begrens et antall barn (ca. 15-20 i teorien)
- Kritiske til partnervalg ("kvalitet over kvantitet")

**Menn:**
- Lavere minimal investering (kun befruktning)
- Ubegrenset antall barn i teorien
- Mindre kritiske til kortsiktige partnere

### Partnervalg - hva soeker vi?

**Kvinner soeker ofte:**
- Ressurser og status (evne til aa forsорge)
- Ambisjon og arbeidsomhet
- Alder (litt eldre partnere)
- Paalitelighet og stabilitet

**Menn soeker ofte:**
- Unge, fysisk attraktive partnere (indikatorer paa fruktbarhet)
- Hofte-midje-ratio rundt 0.7 (indikerer helse og fruktbarhet)
- Ansiktstrekk som symmetri (indikerer genetisk kvalitet)

**Viktig:** Dette er statistiske tendenser, ikke absolutte regler. Individuell variasjon er stor, og kultur paavirker partnervalg betydelig.

### Langsiktig versus kortsiktig parring

**Langsiktige forhold:**
- Begge kjønn soeker paalitelighet, varme, intelligens
- Lignende verdier og interesser
- Emosjonell tilknytning

**Kortsiktige forhold:**
- Fysisk tiltrekning viktigere
- Kjoennsforskjeller mer markerte
- Mindre krav til ressurser/status`
    },
    {
      id: 'psy1-2-4-emotions',
      type: 'text' as const,
      content: `## Universelle emosjoner

Paul Ekman identifiserte seks **universelle emosjoner** som gjenkjennes paa tvers av kulturer:

**1. Glaede (Happiness)**
- Signaliserer sikkerhet og velvære
- Fremmer sosial tilknytning
- Smittsomt (sosialt lim)

**2. Tristhet (Sadness)**
- Signaliserer tap eller nederlag
- Trekker empati og stoette fra andre
- Motiverer til aa trekke seg tilbake og reflektere

**3. Frykt (Fear)**
- Varsler om fare
- Aktiverer "kjemp-eller-flykt"
- Beskytter mot trusler

**4. Sinne (Anger)**
- Respons paa hindringer eller urettferdighet
- Motiverer til aa kjempe for rettigheter
- Kan løse konflikter eller forsvare ressurser

**5. Avsky (Disgust)**
- Beskytter mot giftige/forurenset mat
- Sosial avsky (mot normbrudd)
- Forebygger sykdom

**6. Overraskelse (Surprise)**
- Retter oppmerksomhet mot uventet hendelse
- Forbereder rask respons

### Hvorfor er emosjoner universelle?

Evolusjonspsykologisk forklaring:
- Emosjoner lost konkrete problemer vaare forfedre møtte
- De kommuniserer viktig informasjon raskt
- Ansiktsuttrykk signaliserer intensjoner og tilstander
- Evne til aa lese andres emosjoner ga overlevelsesfordel`
    },
    {
      id: 'psy1-2-4-fight-flight',
      type: 'text' as const,
      content: `## Kjemp-eller-flykt-responsen

**Kjemp-eller-flykt** (fight-or-flight) er kroppens automatiske respons paa fare. Den er et arketypisk eksempel paa en evolusjonspsykologisk tilpasning.

### Hva skjer i kroppen?

**Sympatisk aktivering:**
- Adrenalin og noradrenalin frigjores
- Hjertefrekvens oekar
- Blod stroemmer til muskler
- Pupiller utvides (bedre syn)
- Aandedrett oekar
- Fordoyelse stopper
- Smertefølsomhet reduseres

### Hvorfor har vi denne responsen?

I EEA møtte vaare forfedre fysiske trusler (rovdyr, fiendtlige grupper):
- **Kjemp:** Hvis de kunne vinne, sto de og sloss
- **Flykt:** Hvis trusselen var for stor, flyktet de

Denne responsen oekar dramatisk sjansene for aa overleve en fysisk konfrontasjon.

### Problemet i dag

I moderne samfunn møter vi sjelden fysiske trusler, men hjernen aktiverer fortsatt kjemp-eller-flykt ved:
- Eksamen
- Jobbintervju
- Sosial prestasjon
- Økonomiske bekymringer

Kroppen forbereder seg paa fysisk kamp, men vi maa sitte stille og tenke. Dette skaper:
- Rastloeshet og uro
- Vansker med aa konsentrere seg
- Kronisk stress ved gjentatte aktiveringer`
    },
    {
      id: 'psy1-2-4-example-2',
      type: 'example' as const,
      title: 'Sjalusi - en evolusjonspsykologisk forklaring',
      content: `**Hvorfor føelе vi sjalusi?**

Sjalusi er en ubehagelig foelelse, men evolusjonspsykologer mener den tjente en viktig funksjon:

**Hos kvinner:**
- Mest opptatt av **emosjonell utroskap**
- Frykt for at partner investerer ressurser i andre
- Risiko: Miste foersorging til barn

**Hos menn:**
- Mest opptatt av **seksuell utroskap**
- Usikkerhet om farskap (paternal uncertainty)
- Risiko: Investere ressurser i andres barn

**Forskning:**
- Studier viser systematiske kjoennsforskjeller i hva som utloser mest sjalusi
- Dette moensteret finnes paa tvers av kulturer

**Kritikk:**
- Kulturelle faktorer paavirker ogsaa sjalusi
- Individuelle forskjeller er store
- Moderne prevensjon og DNA-tester endrer forutsetningene`
    },
    {
      id: 'psy1-2-4-nature-nurture',
      type: 'text' as const,
      content: `## Natur versus kultur (Nature vs. Nurture)

En klassisk debatt i psykologi er hvor mye av vår atferd som skyldes **arv** (nature) versus **miljø** (nurture).

### Natur (Nature) - Biologiske faktorer
- Genetikk
- Hjernens struktur
- Hormoner
- Evolusjonspaaikninger
- Medfodte reaksjoner

### Kultur (Nurture) - Miljofaktorer
- Oppvekst og erfaringer
- Kultur og samfunn
- Laering og sosialis ering
- Traumatiske hendelser
- Utdanning

### Moderne syn: Interaksjon

I dag forstaaर vi at det ikke er enten-eller, men et komplekst samspill:

**Gen-miljø-interaksjon:**
- Gener paavirker hvordan vi reagerer paa miljøet
- Miljøet paavirker hvilke gener som "slaaर paa"
- Epigenetikk: Miljøfaktorer kan endre genekspresjon

**Eksempel: Intelligens**
- Arvelighet: Ca. 50-80% (oekar med alderen)
- Men: Stimulerende miljø, utdanning, ernering paavirker utvikling
- Gener setter et "potensial", miljø bestemmer hvor mye som realiseres

**Eksempel: Aggresjon**
- Genetiske faktorer paavirker temperament
- Men: Oppvekstmiljø, rollemodeller, traumer paavirker atferd
- MAOA-genet ("warrior gene") oekar kun aggresjon hvis personen ogsaa har opplevd mishandling

### Menneskelig natur

Evolusjonspsykologer mener vi har en "menneskelig natur" - universelle psykologiske mekanismer - men at kulturen lar disse komme til uttrykk paa forskjellige maater.`
    }
  ],
  exercises: [
    {
      id: 'psy1-2-4-ex-1',
      type: 'multiple-choice' as const,
      task: `Hva er de tre hovedprinsippene i naturlig utvalg?`,
      options: [
        {
          id: 'a',
          text: 'Mutasjon, adaptasjon, ekstinksjon',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Variasjon, arv, utvalg',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'Reproduksjon, konkurranse, overlevelse',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'Genotype, fenotype, evolusjon',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

De tre hovedprinsippene i naturlig utvalg er:
1. **Variasjon:** Individer i en populasjon er ulike
2. **Arv:** Egenskaper kan arves fra foreldre til barn
3. **Utvalg:** Individer med gunstige egenskaper faar flere barn, og disse egenskapene blir vanligere

Sammen driver disse tre prinsippene evolusjonen fremover.`
    },
    {
      id: 'psy1-2-4-ex-2',
      type: 'classic' as const,
      task: `Forklar hva EEA (Environment of Evolutionary Adaptedness) betyr, og gi eksempler paa "evolusjonaere mismatcher" mellom EEA og moderne samfunn.`,
      hints: [
        'Naar levde vaare forfedre som jeger-sankere?',
        'Hvilke moderne problemer skyldes at hjernen er tilpasset et annet miljø?'
      ],
      solution: `**EEA (Environment of Evolutionary Adaptedness):**

EEA refererer til de forholdene vaare forfedre levde under i mesteparten av menneskehetens historie:
- Tidsperiode: Ca. 2 millioner til 10,000 aar siden
- Livsstil: Jeger-sankare i smaa grupper (20-100 personer)
- Utfordringer: Rovdyr, matmangel, sykdommer, gruppekonflikter

**Evolusjonaere mismatcher:**

Vaare hjerner er tilpasset EEA, men vi lever i et helt annet miljø:

**1. Mat:**
- EEA: Mat var knapp, soett og fett var sjeldent
- I dag: Ubegrenset tilgang paa soett og fett
- Problem: Overvekt, diabetes

**2. Sosial gruppe:**
- EEA: 20-100 personer aa forholde seg til
- I dag: Tusenvis paa sosiale medier
- Problem: Sosial utmattelse, sammenligning

**3. Trusler:**
- EEA: Umiddelbare fysiske farer
- I dag: Abstrakte trusler (eksamen, økonomi)
- Problem: Kronisk stress, angst

Disse mismatchene forklarer mange moderne helseproblemer.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-4-ex-3',
      type: 'multiple-choice' as const,
      task: `Hvorfor er frykt for edderkopper mer vanlig enn frykt for biler, selv om biler er farligere?`,
      options: [
        {
          id: 'a',
          text: 'Fordi edderkopper er ekle',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Fordi hjernen er tilpasset aa frykte edderkopper fra EEA, mens biler er for nye',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'Fordi biler ikke er farlige',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'Fordi foreldre laerer barn aa vaere redd for edderkopper',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

Edderkopp-fobi er vanligere fordi hjernen vaार har en medfodt tendens til aa frykte edderkopper og slanger. Vaare forfedre som raskt unngikk giftige dyr hadde stoerre sjanse for aa overleve. Biler er en ny oppfinnelse (ca. 100 aar), som er for kort tid til aa utvikle en medfodt frykt. Vi maa laere oss aa vaere forsiktige med biler.`
    },
    {
      id: 'psy1-2-4-ex-4',
      type: 'classic' as const,
      task: `Beskriv de seks universelle emosjonene identifisert av Paul Ekman. Hvorfor er disse emosjonene universelle fra et evolusjonspsykologisk perspektiv?`,
      hints: [
        'Hvilke problemer lost hver emosjon?',
        'Hva var fordelene med aa ha disse emosjonene i EEA?'
      ],
      solution: `**De seks universelle emosjonene:**

1. **Glaede:** Signaliserer sikkerhet, fremmer sosial tilknytning
2. **Tristhet:** Signaliserer tap, trekker empati fra andre
3. **Frykt:** Varsler om fare, aktiverer beskyttelse
4. **Sinne:** Respons paa hindringer, motiverer aa kjempe
5. **Avsky:** Beskytter mot giftig mat og sykdom
6. **Overraskelse:** Retter oppmerksomhet mot uventet

**Hvorfor universelle?**

Fra et evolusjonspsykologisk perspektiv:
- Hver emosjon lost konkrete overlevelsesproblemer vaare forfedre møtte
- Ansiktsuttrykk kommuniserer raskt intensjoner og tilstander
- Evne til aa lese andres emosjoner ga overlevelsesfordel
- Emosjoner er "hardwired" i hjernen fordi de var saa viktige

Disse emosjonene finnes paa tvers av kulturer fordi alle mennesker har samme evolusjonshistorie og møtte lignende utfordringer.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-4-ex-5',
      type: 'multiple-choice' as const,
      task: `Hva er kjemp-eller-flykt-responsen?`,
      options: [
        {
          id: 'a',
          text: 'En laert atferd for aa haandtere konflikter',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'En automatisk kroppslig respons paa fare som forbereder oss paa aa kjempe eller flykte',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'En sosial strategi for aa unngaa problemer',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'En moderne stressrespons',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

Kjemp-eller-flykt er en automatisk kroppslig respons paa fare. Sympatisk nervesystem aktiveres, adrenalin frigjøres, hjertefrekvens oekar, blod stroemmer til muskler, og kroppen forberedes paa fysisk handling. I EEA var dette livsviktig for aa overleve fysiske trusler. I dag aktiveres den samme responsen ved psykologiske stressorer (eksamen, sosiale situasjoner), noe som kan skape problemer.`
    },
    {
      id: 'psy1-2-4-ex-6',
      type: 'classic' as const,
      task: `Forklar evolusjonspsykologiske forskjeller i partnervalg mellom menn og kvinner. Hva skyldes disse forskjellene?`,
      hints: [
        'Tenk paa foreldresinvestering',
        'Hvilke utfordringer møtte kvinner versus menn i EEA?'
      ],
      solution: `**Evolusjonspsykologiske forskjeller i partnervalg:**

**Kvinner soeker ofte:**
- Ressurser og status (evne til aa forsørge)
- Ambisjon og arbeidsomhet
- Paalitelighet og stabilitet
- Litt eldre partnere

**Menn soeker ofte:**
- Unge, fysisk attraktive partnere
- Fruktbarhetsindikatorer (hofte-midje-ratio, symmetri)
- Fysisk helse

**Hvorfor disse forskjellene?**

Forskjellene skyldes **foreldresinvestering:**

- **Kvinner:** Hoeय investering (graviditet 9 maan., amming, omsorg). Begrenset antall barn. Dette gjor kvinner kritiske i partnervalg - de trenger en partner som kan bidra til barnets overlevelse.

- **Menn:** Minimal investering (kun befruktning). Ubegrenset antall barn i teorien. Menn som valgte unge, friske partnere fikk flere barn som overlevde.

**Viktig:** Dette er statistiske tendenser, ikke absolutte regler. Kultur, individuell variasjon og moderne samfunnsforhold paavirker partnervalg betydelig.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-4-ex-7',
      type: 'multiple-choice' as const,
      task: `Hva er moderne syn paa natur versus kultur (nature vs. nurture) debatten?`,
      options: [
        {
          id: 'a',
          text: 'Alt er bestemt av gener (natur)',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Alt er bestemt av oppvekst og miljø (kultur)',
          isCorrect: false
        },
        {
          id: 'c',
          text: 'Det er et komplekst samspill mellom gener og miljø',
          isCorrect: true
        },
        {
          id: 'd',
          text: 'Natur og kultur er helt uavhengige',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: c**

Moderne forskning viser at det ikke er enten-eller, men et komplekst samspill mellom arv og miljø. Gener paavirker hvordan vi reagerer paa miljøet, og miljøet paavirker hvilke gener som aktiveres (epigenetikk). Eksempel: Intelligens har ca. 50-80% arvelighet, men stimulerende miljø, utdanning og ernering paavirker sterkt hvor mye av potensialet som realiseres.`
    },
    {
      id: 'psy1-2-4-ex-8',
      type: 'classic' as const,
      task: `Diskuter styrker og svakheter ved den evolusjonspsykologiske tilnaermingen til aa forstaa menneskelig atferd.`,
      hints: [
        'Hva kan evolusjonspsykologi forklare godt?',
        'Hvilke kritikker er rettet mot evolusjonspsykologi?'
      ],
      solution: `**Styrker ved evolusjonspsykologi:**

1. **Forklarer universelle moenstre:** Hvorfor visse atferder og emosjoner finnes paa tvers av kulturer
2. **Integrerer biologi og psykologi:** Gir en ramme for aa forstaa hjerne og atferd
3. **Genererer testbare hypoteser:** Forutsigelser om kjoennsforskjeller, partnervalg, etc.
4. **Forklarer "irrasjonell" atferd:** F.eks. fobi for edderkopper, preferanse for soett mat

**Svakheter og kritikk:**

1. **Vanskelig aa teste:** Vi kan ikke gaา tilbake og observere EEA
2. **"Just-so stories":** Risiko for aa lage plausible, men ubeviste forklaringer i ettertid
3. **Overser kultur:** Kulturelle faktorer paavirker atferd sterkt
4. **Deterministisk?** Kan feiltolkes som at atferd er "hardwired" og uforanderlig
5. **Etiske bekymringer:** Kan brukes til aa rettferdiggjore status quo (f.eks. kjoennsroller)

**Konklusjon:**
Evolusjonspsykologi gir verdifulle innsikter, men maa kombineres med andre perspektiver (kulturelt, sosialt, utviklingspsykologisk) for en full forståelse av menneskelig atferd.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    }
  ]
};

export const CHAPTER_PSYKOLOGI_1_2_5: TextbookChapter = {
  id: 'psykologi-1-2-5',
  courseId: 'psykologi-1',
  chapterNumber: '2.5',
  title: 'Hjernen og rusmidler',
  curriculum: 'LK20',
  subject: 'psykologi',
  level: 'VG3',
  estimatedMinutes: 25,
  content: [
    {
      id: 'psy1-2-5-intro',
      type: 'text' as const,
      content: `# Hjernen og rusmidler

Rusmidler er stoffer som paavirker hjernens funksjon og forandrer tanker, foelelser og atferd. De virker ved aa endre balansen av nevrotransmittere i hjernen. Mens noen bruker rusmidler rekreasjonsvist, kan de ha alvorlige konsekvenser - spesielt for ungdom og unge voksne hvis hjerner fortsatt utvikles.

Forståelse av hvordan rusmidler paavirker hjernen er viktig for aa kunne ta informerte valg om egen helse.`
    },
    {
      id: 'psy1-2-5-how-drugs-work',
      type: 'text' as const,
      content: `## Hvordan rusmidler paavirker hjernen

Rusmidler virker ved aa forstyrre normal nevrotransmitterfunksjon. De kan gjore dette paa flere maater:

### Mekanismer

**1. Oeke frigjoring av nevrotransmittere**
- Eksempel: Amfetamin oekar frigjoring av dopamin og noradrenalin
- Mer nevrotransmitter i det synaptiske spalten

**2. Blokkere gjenopptak**
- Eksempel: Kokain blokkerer gjenopptak av dopamin
- Nevrotransmitteren forblir lenger i synapsen

**3. Etterligne nevrotransmittere**
- Eksempel: Nikotin etterligner acetylkolin
- Binder seg til reseptorer og aktiverer dem

**4. Blokkere reseptorer**
- Eksempel: Alkohol paavirker GABA- og glutamat-reseptorer
- Endrer balansen mellom eksitatoriske og inhibitoriske signaler

**5. Forstyrre nedbrytning**
- Noen stoffer hindrer nedbrytning av nevrotransmittere
- Forlenget effekt`
    },
    {
      id: 'psy1-2-5-reward-system',
      type: 'text' as const,
      content: `## Belonningssystemet

Alle misbruksgivende rusmidler paavirker hjernens **belonningssystem** - et nettverk av strukturer som involverer dopamin.

### Normale belonninger

Belonningssystemet utviklet seg for aa motivere oss til aa gjore ting som fremmer overlevelse:
- Spise mat → dopaminfrigjoring → lystfoelelse → motivasjon til aa gjenta
- Sosialt samvaer → dopamin → glaede → ønske om mer sosial kontakt
- Sex → dopamin → nytelse → reproduksjon

### Rusmidlers effekt paa belonningssystemet

Rusmidler "kaprer" dette systemet:
- De oekar dopamin mye mer enn naturlige belonninger
- Kokain kan oeke dopamin 10 ganger mer enn mat
- Hjernen "laerer" at rusmiddelet er ekstremt viktig
- Naturlige belonninger virker mindre attraktive

**Viktige strukturer i belonningssystemet:**
- **VTA (ventral tegmental area):** Produserer dopamin
- **Nucleus accumbens:** Mottar dopamin, sentral for lystfoelelse
- **Prefrontal korteks:** Beslutningstaking og impulskontroll
- **Amygdala:** Emosjonelle minner knyttet til rusmiddelet`
    },
    {
      id: 'psy1-2-5-tolerance-dependence',
      type: 'text' as const,
      content: `## Toleranse, avhengighet og abstinens

### Toleranse

**Toleranse** betyr at kroppen tilpasser seg rusmiddelet, saa det trengs mer for aa oppnaa samme effekt.

**Hvorfor oppstaar toleranse?**
- Nevroner reduserer antall reseptorer (downregulation)
- Kroppen produserer mindre nevrotransmittere
- Metabolismen av stoffet oekar

**Konsekvens:** Personen maa ta stoerre doser, noe som oekar risiko for overdose og skade.

### Avhengighet

**Fysisk avhengighet:**
- Kroppen trenger stoffet for aa fungere "normalt"
- Abstinens oppstaar naar stoffet fjernes

**Psykologisk avhengighet:**
- Foelelsesmessig behov for stoffet
- Craving (intens lyst/lengsel)
- Bruk av stoffet for aa haandtere stress eller negative foelelser

### Abstinens

**Abstinens** er ubehagelige symptomer som oppstaar naar man slutter med et rusmiddel etter langvarig bruk.

**Symptomer varierer, men kan inkludere:**
- Angst og depresjon
- Soevnloeshet
- Rastloeshet og irritabilitet
- Fysisk ubehag (skjelving, svetting, smerter)
- Intens craving

**Hvorfor abstinens?**
Hjernen har tilpasset seg stoffet. Naar stoffet fjernes, er balansen forstyrret - det tar tid for hjernen aa gjenoprette normal funksjon.`
    },
    {
      id: 'psy1-2-5-example-1',
      type: 'example' as const,
      title: 'Dopamin og avhengighet',
      content: `**Normal situasjon:**
Naar du spiser god mat, oekar dopamin med ca. 50-100% i nucleus accumbens. Dette gir en lystfoelelse som motiverer deg til aa spise igjen.

**Med kokain:**
Kokain blokkerer gjenopptak av dopamin, saa dopaminnivaaet oekar med 200-400% - mange ganger mer enn naturlige belonninger.

**Konsekvens:**
- Hjernen "laerer" at kokain er ekstremt viktig (mer enn mat, sex, sosial kontakt)
- Naturlige belonninger foles mindre tilfredsstillende
- Personen utvikler intense cravings
- Prefrontal korteks (impulskontroll) svekkes, saa det blir vanskeligere aa motstaa

Dette forklarer hvorfor avhengighet er saa kraftig - hjernen er "omprogrammert" til aa prioritere rusmiddelet over alt annet.`
    },
    {
      id: 'psy1-2-5-alcohol',
      type: 'text' as const,
      content: `## Alkohol

Alkohol er det mest brukte rusmiddelet i Norge. Det paavirker flere nevrotransmittersystemer samtidig.

### Hvordan alkohol virker

**Kortsiktige effekter:**
- **Oekar GABA-aktivitet:** Dempende, beroligende effekt, redusert angst
- **Reduserer glutamat-aktivitet:** Saktere tenkning, koordinasjonsproblemer
- **Oekar dopamin:** Lystfoelelse (i moderate doser)
- **Paavirker serotonin:** Humørforandringer

**Ved lave doser:**
- Beroligende, eufori
- Redusert hemninger
- Foelelse av avslapping

**Ved hoeye doser:**
- Koordinasjonsproblemer
- Sløret tale
- Hukommelsestap (blackout)
- Kvalme
- Bevissthetsløeshet (farlig!)

### Langsiktige effekter av alkohol

**Hjerneskader:**
- Skade paa hippocampus → hukommelsesproblemer
- Reduksjon i prefrontal korteks → vansker med planlegging og impulskontroll
- Wernicke-Korsakoffs syndrom (hos kroniske alkoholikere): Alvorlige hukommelsesproblemer

**Fysiske helseproblemer:**
- Leverskade (cirrhose)
- Forhoeyet kreftrisiko
- Hjerteproblemer
- Svekket immunforsvar

**Psykisk helse:**
- Depresjon og angst
- Oeket selvmordsrisiko
- Soevnforstyrrelser

### Alkohol og ungdomshjernen

Ungdomshjernen er spesielt saarbar for alkohol:
- Prefrontal korteks er ikke ferdig utviklet (ferdig rundt 25 aar)
- Hippocampus er saarbar → langvarige hukommelsesproblemer
- Oeket risiko for utvikling av avhengighet senere
- Binge drinking (fyll) er spesielt skadelig

**Forskning viser:**
Personer som begynner aa drikke foer 15 aar har 5 ganger hoyere risiko for aa utvikle alkoholavhengighet enn de som begynner etter 21 aar.`
    },
    {
      id: 'psy1-2-5-cannabis',
      type: 'text' as const,
      content: `## Cannabis (marihuana, hasj)

Cannabis inneholder THC (tetrahydrocannabinol) som er det viktigste psykoaktive stoffet.

### Hvordan cannabis virker

THC binder seg til **cannabinoidreseptorer** i hjernen. Disse reseptorene er del av kroppens eget endocannabinoidsystem som regulerer:
- Humør
- Appetitt
- Smerte
- Hukommelse
- Laering

**Kortsiktige effekter:**
- Eufori og avslapping
- Endret tids- og romoppfatning
- Oeket appetitt ("munchies")
- Røde øeyne
- Redusert korttidshukommelse
- Saktere reaksjonstid
- Paranoia og angst (hos noen)

### Langsiktige effekter

**Kognitive effekter:**
- Redusert hukommelse og laering
- Vansker med oppmerksomhet og konsentrasjon
- Redusert motivasjon ("amotivational syndrome")

**Psykisk helse:**
- Oeket risiko for psykoser hos disponerte
- Cannabis-indusert psykose
- Angst og depresjon

**Avhengighet:**
- Ca. 9% av brukere utvikler avhengighet
- Risiko oekar til 17% hvis start i tenaarene
- Abstinens: Irritabilitet, soevnloeshet, redusert appetitt

### Cannabis og ungdomshjernen

Ungdom er spesielt saarbare:
- Hjernen utvikles aktivt (synaptic pruning, myelinering)
- Cannabis forstyrrer denne utviklingen
- Studier viser IQ-reduksjon ved regelmessig bruk i tenaarene
- Reduksjon i hippocampus-volum
- Oeket risiko for psykoser

**Viktig:** Cannabis i dag er ofte mye sterkere (hoeyt THC-innhold) enn for 20-30 aar siden, noe som oekar risikoen.`
    },
    {
      id: 'psy1-2-5-stimulants',
      type: 'text' as const,
      content: `## Sentralstimulerende midler

Sentralstimulerende midler oekar aktivitet i sentralnervesystemet. De paavirker hovedsakelig dopamin og noradrenalin.

### Amfetamin og metamfetamin

**Hvordan de virker:**
- Oekar frigjoring av dopamin og noradrenalin
- Blokkerer gjenopptak
- Dopaminnivaaene blir ekstremt hoeye

**Kortsiktige effekter:**
- Eufori og energi
- Oeket vaakenhetsgrad og fokus
- Redusert appetitt
- Oekt selvtillit
- Hoeyt blodtrykk og hjertefrekvens

**Langsiktige effekter:**
- Alvorlig avhengighet (svært misbruksgivende)
- Kognitiv svikt
- Psykoser (hallusinasjoner, paranoia)
- Aggressivitet
- Alvorlig tannforfar ("meth mouth")
- Hjerteskader

**Metamfetamin:**
Enda mer potent og misbruksgivende enn amfetamin. Kan føre til rask og alvorlig avhengighet.

### Kokain

**Hvordan det virker:**
- Blokkerer gjenopptak av dopamin, noradrenalin og serotonin
- Kortvarig, men intens rus (15-30 minutter)

**Effekter:**
- Intens eufori
- Oekt energi og selvtillit
- Snakkelysten
- Redusert trøetthet

**Farer:**
- Svært misbruksgivende
- Hjerteinfarkt og hjerneslag (selv hos unge)
- Psykoser
- Alvorlig crash etter rus (utmattelse, depresjon)

### Nikotin

**Hvordan det virker:**
- Etterligner acetylkolin
- Oekar dopamin i belonningssystemet

**Effekter:**
- Oekt vaakenhetsgrad
- Bedre konsentrasjon (kortsiktig)
- Appetittreduserende

**Avhengighet:**
- Ekstremt misbruksgivende (likeสå vanedannende som heroin)
- Rask utvikling av toleranse
- Kraftig abstinens (irritabilitet, rastloeshet, craving)

**Helsefare:**
- Lungk reft
- Hjerte- og karsykdommer
- KOLS (kronisk obstruktiv lungesykdom)
- Kreft i flere organer

Nikotin i seg selv er mindre skadelig, men administrering via roeyking tilfører tusenvis av giftige stoffer.`
    },
    {
      id: 'psy1-2-5-adolescent-brain',
      type: 'text' as const,
      content: `## Hvorfor er ungdomshjernen saa saarbar?

Ungdomsaarene (ca. 12-25 aar) er en kritisk periode for hjerneutvikling. Dette gjor ungdom spesielt saarbare for rusmidler.

### Hjerneutvikling i ungdomsaarene

**Hva skjer i hjernen:**

**1. Synaptic pruning**
- "Beskjaering" av ubrukte synaptiske forbindelser
- "Use it or lose it" - ofte brukte forbindelser styrkes, sjeldne fjernes
- Gjor hjernen mer effektiv

**2. Myelinering**
- Aksonene dekkes med mer myelinskjede
- Oekar signalhastighet
- Bedre kommunikasjon mellom hjerneomraader

**3. Prefrontal korteks modnes sist**
- Ferdig rundt 25 aar
- Ansvarlig for impulskontroll, planlegging, beslutningstaking
- Før den er ferdig: Mer impulsiv, søeker spenning, tar flere risker

**4. Belonningssystemet er svært aktivt**
- Dopaminsystemet er svært sensitivt
- Soekar intense opplevelser
- Mindre impulskontroll + aktivt belonningssystem = hoyrisikoadferd

### Konsekvenser av rusmiddelbruk

**Rusmidler forstyrrer normal hjerneutvikling:**

- **Endret synaptic pruning:** Feil forbindelser styrkes/fjernes
- **Forstyrret myelinering:** Redusert hjerneffektivitet
- **Skade paa hippocampus:** Varige hukommelsesproblemer
- **Redusert prefrontal funksjon:** Problemer med impulskontroll og planlegging
- **Sensitivisering av belonningssystemet:** Oeket avhengighetsrisiko

**Forskning viser:**
- Tidlig rusmiddelbruk (foer 15 aar) gir hoyere risiko for avhengighet
- Ungdom som bruker cannabis regelmessig viser IQ-reduksjon
- Alkohol-binge drinking skader hippocampus mer hos ungdom enn voksne
- Jo tidligere debut, jo stoerre langsiktige skader

### Samtidig paavirkning paa psykisk helse

Ungdomsaarene er ogsaa en saarbar periode for psykisk helse:
- Mange psykiske lidelser (depresjon, angst, psykoser) debuterer i ungdomsaarene
- Rusmidler kan:
  - Utloese psykiske lidelser hos disponerte
  - Forverre eksisterende psykiske problemer
  - Maskere symptomer (selvmedisinering) som vedvarer

**Eksempel: Cannabis og psykose**
Ungdom med genetisk disponering for schizofreni har betydelig oekt risiko for aa utvikle psykose hvis de bruker cannabis.`
    },
    {
      id: 'psy1-2-5-example-2',
      type: 'example' as const,
      title: 'Binge drinking og ungdomshjernen',
      content: `**Hva er binge drinking?**
Aa drikke store mengder alkohol paa kort tid (typisk 5+ enheter for menn, 4+ for kvinner paa en anledning).

**Effekter paa ungdomshjernen:**

**Kortsiktig:**
- Blackouts (hukommelsestap) - hippocampus "slaar av"
- Nedsatt doemmekraft og impulskontroll
- Risikofylt atferd (uhelligheter, vold, usikker sex)

**Langsiktig ved gjentatt binge drinking:**
- Permanent reduksjon i hippocampus-volum
- Varige hukommelsesproblemer
- Redusert prestasjon i skole/studier
- Endret prefrontal funksjon → impulskontrollproblemer
- Oeket risiko for alkoholavhengighet som voksen

**Forskning:**
En studie viste at ungdom som hadde binge drinking regelmessig presterte 10% daarligere paa hukommelsestester sammenlignet med ikke-drikkende jevnaldrende - selv flere aარ etter at de sluttet aa drikke.

Dette viser at rusmiddelbruk i ungdomsaarene kan ha varige konsekvenser, selv etter at bruken opphører.`
    },
    {
      id: 'psy1-2-5-addiction-model',
      type: 'text' as const,
      content: `## Avhengighet - en hjernesy kdom

Moderne nevrovi tenskap ser paa avhengighet som en **kronisk hjernesy kdom**, ikke bare som et valg eller moralsk svikter.

### Hjernens forandringer ved avhengighet

**1. Belonningssystemet:**
- Kraftig sensitivering for rusmiddelet
- Redusert respons paa naturlige belonninger
- "Hijacking" av dopaminsystemet

**2. Prefrontal korteks:**
- Redusert funksjon (hypofrontalitet)
- Svekket impulskontroll og beslutningstaking
- Vansker med aa motstaa craving

**3. Amygdala og stresssystemer:**
- Forhoeyet stressresponsivitet
- Negative emosjoner ved abstinens
- Stressutloest tilbakefall

**4. Hukommelse og laering:**
- Sterke assosiasjoner mellom omgivelser og rusmiddelet
- "Cue-induced craving" - visse steder, personer eller situasjoner utloser lyst

### Hvorfor er det saa vanskelig aa slutte?

Avhengighet endrer hjernen fundamentalt:
- Rusmiddelet føles like nodvendig som mat og vann
- Prefrontal korteks (som skal stoppe impulsiv atferd) fungerer daarlig
- Abstinens er smertefull baade fysisk og psykisk
- Craving kan vaere overveldende

**Dette betyr IKKE at avhengighet er umulig aa overvinne**, men at det krever behandling, stoette og tid for hjernen aa "heles".`
    },
    {
      id: 'psy1-2-5-prevention',
      type: 'text' as const,
      content: `## Forebygging og behandling

### Forebygging

**Individnivaa:**
- Utsette debut: Jo senere start, jo lavere risiko
- Kunns kap om risiko
- Utvikle gode mestringstrategier for stress
- Bygge selvfoelelse og tilhøerighet

**Skolenivaa:**
- Rusforebyggende programmer
- Skape et miljoة hvor det er akseptert aa si nei
- Tidlig intervensjon ved risikoadferd

**Samfunnsnivaa:**
- Aldersgrenser
- Tilgjengelighet (pris, salgssted)
- Regulering av markedsfoering

### Behandling av avhengighet

**1. Avgiftning (detox)**
- Medisinsk oppfoelging ved alvorlig abstinens
- Trygg nedtrapping

**2. Psykologisk behandling:**
- Kognitiv atferdsterapi (CBT)
- Motiverende samtale (MI)
- Laere aa identifisere triggere
- Utvikle mestringsstrategier

**3. Medikamentell behandling:**
- Legemiddelassistert behandling (f.eks. metadon, buprenorfin for opioidavhengighet)
- Medisiner som reduserer craving

**4. Sosial stoette:**
- Selvhjelpsgrupper (AA, NA)
- Familie- og paaroerende involvert
- Stabilt miljø uten tilgang til rusmidler

**5. Rehabilitering:**
- Langsiktig oppfoelging
- Hjelp til aa bygge et rusfritt liv
- Skole, jobb, sosiale aktiviteter

### Tilbakefall er vanlig

Avhengighet er en kronisk tilstand:
- Tilbakefall er vanlig (50-90% innen foerste aar)
- Dette betyr IKKE at behandling har feilet
- Laering av hver episode
- Vedvarende stoette og behandling oekar suksessrate`
    }
  ],
  exercises: [
    {
      id: 'psy1-2-5-ex-1',
      type: 'multiple-choice' as const,
      task: `Hvordan virker rusmidler generelt i hjernen?`,
      options: [
        {
          id: 'a',
          text: 'De erstatter hjerneceller',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'De forstyrrer normal nevrotransmitterfunksjon',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'De oekar blodfoersel til hjernen',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'De lager nye synaptiske forbindelser',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

Rusmidler virker ved aa forstyrre normal nevrotransmitterfunksjon. De kan oeke frigjoring av nevrotransmittere, blokkere gjenopptak, etterligne nevrotransmittere, eller blokkere reseptorer. Dette endrer balansen i hjernens kommunikasjonssystemer.`
    },
    {
      id: 'psy1-2-5-ex-2',
      type: 'classic' as const,
      task: `Forklar hvordan rusmidler "kaprer" hjernens belonningssystem. Hvorfor fører dette til avhengighet?`,
      hints: [
        'Hva er belonningssystemets normale funksjon?',
        'Hvordan paavirker rusmidler dopaminnivaaer sammenlignet med naturlige belonninger?'
      ],
      solution: `**Hvordan rusmidler kaprer belonningssystemet:**

**Normal funksjon:**
Belonningssystemet bruker dopamin for aa motivere oss til aa gjore ting som fremmer overlevelse (mat, sosial kontakt, sex). Disse aktivitetene oekar dopamin med 50-100%, noe som gir lystfoelelse.

**Rusmidlers effekt:**
- Rusmidler oekar dopamin mye mer - kokain kan oeke det med 200-400%
- Hjernen "laerer" at rusmiddelet er ekstremt viktig (mer enn mat eller sosial kontakt)
- Naturlige belonninger foles mindre tilfredsstillende
- Sterke assosiasjoner dannes (personer, steder → craving)

**Hvorfor dette fører til avhengighet:**
- Belonningssystemet er "omprogrammert" til aa prioritere rusmiddelet
- Prefrontal korteks (impulskontroll) svekkes
- Craving blir overveldende
- Personen fortsetter aa bruke til tross for negative konsekvenser

Dette er derfor avhengighet betraktes som en hjernesy kdom - hjernen er fundamentalt forandret.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-5-ex-3',
      type: 'multiple-choice' as const,
      task: `Hva betyr "toleranse" i forhold til rusmidler?`,
      options: [
        {
          id: 'a',
          text: 'At man aksepterer andre menneskers rusmiddelbruk',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'At kroppen tilpasser seg rusmiddelet saa det trengs mer for samme effekt',
          isCorrect: true
        },
        {
          id: 'c',
          text: 'At man laerer aa haandtere ruset bedre',
          isCorrect: false
        },
        {
          id: 'd',
          text: 'At man ikke lenger paavirkes av rusmiddelet',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: b**

Toleranse betyr at kroppen tilpasser seg rusmiddelet. Nevroner reduserer antall reseptorer (downregulation), og det produseres mindre nevrotransmittere. Derfor trengs stoerre doser for aa oppnaa samme effekt. Dette oekar risiko for overdose og gjor det vanskeligere aa slutte.`
    },
    {
      id: 'psy1-2-5-ex-4',
      type: 'classic' as const,
      task: `Beskriv hvordan alkohol paavirker hjernen, og hvorfor ungdomshjernen er spesielt saarbar for alkohol.`,
      hints: [
        'Hvilke nevrotransmittersystemer paavirkes?',
        'Hva skjer i hjernen under ungdomsaarene?'
      ],
      solution: `**Alkoholens effekt paa hjernen:**

**Kortsiktig:**
- Oekar GABA-aktivitet → dempende, beroligende effekt
- Reduserer glutamat → saktere tenkning, koordinasjonsproblemer
- Oekar dopamin → lystfoelelse (moderate doser)
- Ved hoeye doser: Hukommelsestap (blackout), bevisstløeshet

**Langsiktig:**
- Skade paa hippocampus → hukommelsesproblemer
- Redusert prefrontal korteks → impulskontrollproblemer
- Wernicke-Korsakoffs syndrom hos kroniske brukere

**Hvorfor ungdom er saarbare:**

1. **Prefrontal korteks ikke ferdig utviklet:** Impulskontroll og doemmekraft er daarligere
2. **Hippocampus er saarbar:** Alkohol skader hippocampus mer hos ungdom, gir varige hukommelsesproblemer
3. **Aktiv hjerneutvikling:** Synaptic pruning og myelinering forstyrres
4. **Oeket avhengighetsrisiko:** De som starter foer 15 aar har 5x hoyere risiko for alkoholavhengighet

Binge drinking (fyll) er spesielt skadelig for ungdomshjernen.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-5-ex-5',
      type: 'multiple-choice' as const,
      task: `Hvilken av foelgende paastander om cannabis er korrekt?`,
      options: [
        {
          id: 'a',
          text: 'Cannabis er helt ufarlig fordi det er naturlig',
          isCorrect: false
        },
        {
          id: 'b',
          text: 'Cannabis kan ikke føre til avhengighet',
          isCorrect: false
        },
        {
          id: 'c',
          text: 'Regelmessig cannabisbruk i ungdomsaarene kan føre til IQ-reduksjon og oeket psykoserisiko',
          isCorrect: true
        },
        {
          id: 'd',
          text: 'Cannabis har ingen effekt paa hukommelse',
          isCorrect: false
        }
      ],
      solution: `**Riktig svar: c**

Forskning viser at regelmessig cannabisbruk i tenaarene er forbundet med IQ-reduksjon, redusert hippocampus-volum, og oeket risiko for psykoser hos disponerte individer. Ca. 17% av de som starter i tenaarene utvikler avhengighet. Cannabis paavirker korttidshukommelse og laering betydelig.`
    },
    {
      id: 'psy1-2-5-ex-6',
      type: 'classic' as const,
      task: `Hvorfor er ungdomsaarene en spesielt saarbar periode for rusmiddelbruk? Forklar hvilke hjerneprosesser som paagaaр og hvordan rusmidler forstyrrer disse.`,
      hints: [
        'Hva skjer med synaptiske forbindelser og myelinering?',
        'Hvilken del av hjernen utvikles sist?'
      ],
      solution: `**Ungdomsaarene som saarbar periode:**

**Hjerneprosesser i ungdomsaarene (12-25 aar):**

1. **Synaptic pruning:**
   - Ubrukte synaptiske forbindelser fjernes
   - Ofte brukte forbindelser styrkes
   - Gjor hjernen mer effektiv
   - Rusmidler forstyrrer denne prosessen → feil forbindelser styrkes/fjernes

2. **Myelinering:**
   - Aksonene dekkes med mer myelinskjede
   - Oekar signalhastighet
   - Bedre kommunikasjon mellom hjerneomraader
   - Rusmidler forstyrrer myelinering → redusert hjerneffektivitet

3. **Prefrontal korteks modnes sist:**
   - Ferdig rundt 25 aar
   - Ansvarlig for impulskontroll, planlegging
   - Før ferdig utvikling: Mer impulsiv, soeker spenning
   - Rusmidler skader prefrontal funksjon → varige impulskontrollproblemer

4. **Aktivt belonningssystem:**
   - Dopaminsystemet svært sensitivt
   - Mindre impulskontroll + aktivt belonningssystem = hoyrisikoadferd
   - Rusmidler sensitiviserer systemet → oeket avhengighetsrisiko

**Konsekvens:**
Jo tidligere rusmiddeldebut, jo stoerre skade paa hjerneutvikling og hoyere risiko for avhengighet og psykiske problemer.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-5-ex-7',
      type: 'classic' as const,
      task: `Forklar hvorfor avhengighet betraktes som en hjernesy kdom. Hvilke deler av hjernen endres, og hvordan paavirker dette atferd?`,
      hints: [
        'Hva skjer med belonningssystemet og prefrontal korteks?',
        'Hvorfor er det saa vanskelig aa slutte?'
      ],
      solution: `**Avhengighet som hjernesy kdom:**

Avhengighet er ikke bare manglende viljestyrke, men en kronisk hjernesy kdom hvor hjernen er fundamentalt forandret.

**Hjernens forandringer:**

**1. Belonningssystemet:**
- Kraftig sensitivering for rusmiddelet
- Redusert respons paa naturlige belonninger (mat, sex, sosial kontakt)
- Rusmiddelet føles like nodvendig som mat og vann

**2. Prefrontal korteks:**
- Redusert funksjon (hypofrontalitet)
- Svekket impulskontroll og beslutningstaking
- Vansker med aa motstaa craving

**3. Amygdala og stresssystemer:**
- Forhoeyet stressresponsivitet
- Negative emosjoner ved abstinens
- Stressutloest tilbakefall

**4. Hukommelse:**
- Sterke assosiasjoner mellom omgivelser og rusmiddelet
- Visse steder/personer/situasjoner utløser craving

**Hvorfor vanskelig aa slutte:**
- Rusmiddelet føles eksistensielt viktig (belonningssystemet)
- Impulskontroll fungerer daarlig (prefrontal korteks)
- Abstinens er smertefull
- Craving er overveldende

Dette betyr at behandling krever mer enn "bare aa slutte" - det krever medisinsk og psykologisk stoette for aa hjelpe hjernen aa "heles".`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'psy1-2-5-ex-8',
      type: 'classic' as const,
      task: `Diskuter hvordan rusmiddelbruk kan paavirke psykisk helse hos ungdom og unge voksne. Gi konkrete eksempler.`,
      hints: [
        'Naar debuterer mange psykiske lidelser?',
        'Kan rusmidler utloese eller forverre psykiske problemer?'
      ],
      solution: `**Rusmidler og psykisk helse hos ungdom:**

Ungdomsaarene er en saarbar periode for psykisk helse. Mange lidelser (depresjon, angst, psykoser) debuterer i denne perioden.

**Hvordan rusmidler paavirker psykisk helse:**

**1. Utloese psykiske lidelser:**
- **Cannabis og psykose:** Ungdom med genetisk disponering for schizofreni har betydelig oeket risiko for aa utvikle psykose ved cannabisbruk
- **Alkohol og depresjon:** Alkohol er et depressivt middel; langvarig bruk oekar risiko for depresjon
- **Stimulanter og angst:** Amfetamin og kokain kan utloese angstlidelser og paranoiaა

**2. Forverre eksisterende problemer:**
- Rusmidler maskerer symptomer kortsiktig (selvmedisinering)
- Langsiktig forverres problemene
- Vanskeligere aa faa effekt av behandling

**3. Abstinens og psykisk helse:**
- Depresjon og angst er vanlige abstinensymptomer
- Oeket selvmordsrisiko ved abstinens og avhengighet

**4. Nevrobiologiske effekter:**
- Skade paa hippocampus (hukommelse)
- Redusert prefrontal funksjon (impulskontroll, emosjonregulering)
- Forstyrret dopamin- og serotoninsystem

**Konkrete eksempler:**
- En ungdom med underliggende angst begynner aa drikke for aa roene nervene. Langvarig bruk forverrer angsten.
- En tenaring med disponering for schizofreni bruker cannabis regelmessig og utvikler psykose.
- Binge drinking fører til blackouts og panikkanfall dagen etter.

**Konklusjon:**
Rusmiddelbruk i ungdomsaarene kan ha alvorlige og varige konsekvenser for psykisk helse.`,
      allowsUpload: true,
      allowsCanvasDrawing: true
    }
  ]
};

export const PSYKOLOGI_1_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_PSYKOLOGI_1_2_1,
  CHAPTER_PSYKOLOGI_1_2_2,
  CHAPTER_PSYKOLOGI_1_2_3,
  CHAPTER_PSYKOLOGI_1_2_4,
  CHAPTER_PSYKOLOGI_1_2_5,
];
