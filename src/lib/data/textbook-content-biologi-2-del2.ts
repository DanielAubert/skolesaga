/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 2 VG3
 *
 * Seksjon 2: Fysiologi I – Fordøyelse, sirkulasjon og respirasjon (Kapittel 2.1–2.7)
 * Denne filen inneholder kapittel 2.1–2.7.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIOLOGI_2_2_1: TextbookChapter = {
  id: 'biologi-2-2-1',
  courseId: 'biologi-2',
  chapterNumber: '2.1',
  title: 'Fordøyelsessystemet',
  description: 'Munnhule, magesekk, tynntarm, tykktarm og enzymer.',
  estimatedTime: 25,
  competenceGoals: ['forklare fordøyelsessystemets oppbygning og funksjon'],
  content: [
    {
      id: 'bio2-2-1-intro',
      type: 'text',
      title: 'Fordøyelsessystemet',
      content: `# Fordøyelsessystemet

Fordøyelsessystemet har som hovedoppgave å bryte ned maten vi spiser til næringsstoffer som kroppen kan ta opp og bruke. Systemet strekker seg fra munnhulen til endetarmen og utgjør en sammenhengende kanal kalt fordøyelseskanalen. I tillegg bidrar flere kjertler og organer med enzymer og andre stoffer som er nødvendige for fordøyelsen.

I dette kapittelet skal vi se nærmere på de ulike delene av fordøyelsessystemet, hvilke prosesser som foregår i hver del, og hvilke enzymer som er involvert i nedbrytningen av næringsstoffer.`
    },
    {
      id: 'bio2-2-1-teori-1',
      type: 'text',
      title: 'Munnhulen og spiserøret',
      content: `## Munnhulen og spiserøret

Fordøyelsen starter allerede i munnhulen. Her blir maten mekanisk brutt ned ved tygging, samtidig som den blandes med spytt fra spyttkjertlene. Spyttet inneholder enzymet **amylase** (ptyalin), som starter nedbrytningen av stivelse til maltose.

Tungen former maten til en bolus (matklump) som svelges ned i spiserøret. Spiserøret transporterer maten videre til magesekken ved hjelp av **peristaltiske bevegelser** – rytmiske sammentrekninger av glatt muskulatur som presser maten fremover.

Overgangen mellom spiserøret og magesekken kontrolleres av en ringmuskel kalt **cardia** (øvre lukkemuskel). Denne hindrer normalt at mageinnholdet strømmer tilbake til spiserøret.`
    },
    {
      id: 'bio2-2-1-def-1',
      type: 'definition',
      title: 'Peristaltikk',
      content: `**Peristaltikk** er rytmiske, bølgelignende sammentrekninger av glatt muskulatur i fordøyelseskanalens vegg. Disse bevegelsene transporterer maten gjennom hele fordøyelseskanalen, fra spiserøret til endetarmen. Peristaltikken styres av det enteriske nervesystemet og det autonome nervesystemet.`
    },
    {
      id: 'bio2-2-1-eks-1',
      type: 'example',
      title: 'Eksempel: Stivelsesnedbrytning i munnen',
      content: `**Eksempel: Stivelsesnedbrytning i munnen**

Hvis du tygger på et stykke brød i lengre tid uten å svelge, vil du etter hvert merke at brødet begynner å smake søtt. Dette skyldes at enzymet amylase i spyttet bryter ned stivelse (polysakkarid) til maltose (disakkarid), som har en søt smak.

Reaksjonen kan skrives slik:

Stivelse → (amylase) → maltose + dekstriner

Denne enzymatiske nedbrytningen er et eksempel på **kjemisk fordøyelse**, i motsetning til den **mekaniske fordøyelsen** som skjer ved tygging. Amylasen fungerer optimalt ved nøytral pH (rundt 6,8), som er typisk for spyttet.`
    },
    {
      id: 'bio2-2-1-oppg-1',
      type: 'exercise',
      title: 'Oppgave: Fordøyelse i munnhulen',
      content: `Forklar forskjellen mellom mekanisk og kjemisk fordøyelse, og gi eksempler på begge prosesser som foregår i munnhulen.`
    },
    {
      id: 'bio2-2-1-teori-2',
      type: 'text',
      title: 'Magesekken',
      content: `## Magesekken

Magesekken (ventrikkel) er en muskelsekk som kan romme opptil 1,5 liter. Her blandes maten med **magesaft**, som inneholder saltsyre (HCl) og enzymet **pepsin**.

**Saltsyren** har flere funksjoner:
- Senker pH til 1,5–2,5, som er optimalt for pepsin
- Dreper de fleste mikroorganismer i maten
- Denaturerer proteiner slik at de blir lettere tilgjengelige for enzymatisk nedbrytning

**Pepsin** er en protease som bryter ned proteiner til kortere peptidkjeder. Pepsin skilles ut som det inaktive forstadiet **pepsinogen** fra hovedcellene i mageslimhinnen. Pepsinogen aktiveres til pepsin av saltsyren.

Mageslimhinnen er beskyttet av et tykt lag med **slim (mukus)** som hindrer at saltsyren og pepsin bryter ned mageslimhinnen selv. Cellene som produserer dette slimet kalles **slimceller**.

Maten blandes grundig i magesekken og omdannes til en halvflytende masse kalt **chymus**. Chymus slippes gradvis inn i tynntarmen gjennom **pylorus** (nedre lukkemuskel).`
    },
    {
      id: 'bio2-2-1-def-2',
      type: 'definition',
      title: 'Chymus',
      content: `**Chymus** er den halvflytende massen av delvis fordøyd mat som dannes i magesekken etter at maten er blandet med magesaft. Chymus har en sur pH (rundt 2) og slippes i små porsjoner inn i tolvfingertarmen, der den nøytraliseres av bikarbonat fra bukspyttkjertelen.`
    },
    {
      id: 'bio2-2-1-eks-2',
      type: 'example',
      title: 'Eksempel: Pepsinogenaktivering',
      content: `**Eksempel: Pepsinogenaktivering**

Hovedcellene i mageslimhinnen produserer pepsinogen, som er en inaktiv forløper (zymogen) av enzymet pepsin. Når pepsinogen kommer i kontakt med saltsyre (HCl) fra parietalcellene, kløyves en del av peptidkjeden av, og det aktive enzymet pepsin dannes.

Pepsinogen → (HCl, pH < 3) → Pepsin

Pepsin kan deretter aktivere mer pepsinogen, noe som gir en **positiv tilbakekoblingssløyfe**. Denne mekanismen sikrer at pepsin bare er aktivt inne i magesekken, der pH er lav. I tynntarmen, der pH er høyere, inaktiveres pepsin.

At enzymet skilles ut som et inaktivt forstadium er en viktig beskyttelsesmekanisme som hindrer at cellene som produserer enzymet, selv blir brutt ned.`
    },
    {
      id: 'bio2-2-1-oppg-2',
      type: 'exercise',
      title: 'Oppgave: Magesekken',
      content: `Forklar hvorfor pepsin skilles ut som pepsinogen og ikke som aktivt pepsin. Beskriv aktiveringsprosessen.`
    },
    {
      id: 'bio2-2-1-teori-3',
      type: 'text',
      title: 'Tynntarmen og tykktarmen',
      content: `## Tynntarmen og tykktarmen

**Tynntarmen** er den lengste delen av fordøyelseskanalen (ca. 6 meter) og deles inn i tre deler: **tolvfingertarmen** (duodenum), **jejunum** og **ileum**. Det er her hoveddelen av fordøyelsen og næringsopptaket skjer.

I tolvfingertarmen blandes chymus med:
- **Galle** fra leveren/galleblæren, som emulgerer fett (bryter det ned til små dråper)
- **Bukspytt** fra bukspyttkjertelen (pankreas), som inneholder:
  - **Trypsin** og **chymotrypsin** – bryter ned proteiner
  - **Pankreatisk lipase** – bryter ned fett
  - **Pankreatisk amylase** – bryter ned stivelse
  - **Bikarbonat** – nøytraliserer den sure chymusen

Tynntarmens slimhinne har **tarmtotter (villi)** og **mikrovilli** som gir en enorm overflate for næringsopptak. Overflatearealet er estimert til ca. 250 m². Næringsstoffene tas opp gjennom tarmepitelet og transporteres videre via blodet og lymfen.

**Tykktarmen** (ca. 1,5 meter) har som hovedoppgave å absorbere vann og mineraler fra det ufordøyde materialet. Tykktarmen inneholder et rikt bakteriesamfunn (**tarmfloraen**) som bryter ned fiber og produserer vitaminer som vitamin K og vitamin B12. Det gjenværende materialet formes til avføring som lagres i endetarmen før det skilles ut.`
    },
    {
      id: 'bio2-2-1-def-3',
      type: 'definition',
      title: 'Tarmtotter (villi)',
      content: `**Tarmtotter (villi)** er fingerformede utposninger av tynntarmens slimhinne som øker overflaten for næringsopptak betraktelig. Hver tarmtott inneholder blodkapillærer for opptak av aminosyrer, monosakkarider og vannløselige vitaminer, samt et lymfekar (lakteal) for opptak av fett og fettløselige vitaminer. Cellene på overflaten av tarmtottene har i tillegg mikrovilli (børstesøm) som øker overflaten ytterligere.`
    },
    {
      id: 'bio2-2-1-eks-3',
      type: 'example',
      title: 'Eksempel: Fettnedbrytning i tynntarmen',
      content: `**Eksempel: Fettnedbrytning i tynntarmen**

Fett er ikke vannløselig og danner store dråper i tarmen. For at lipase skal kunne bryte ned fettet effektivt, må det først **emulgeres** av gallesalter.

Prosessen foregår i flere trinn:

1. **Emulgering**: Gallesalter fra leveren bryter de store fettdråpene ned til mange små dråper (miceller). Dette øker det totale overflatearealet enormt.
2. **Enzymatisk nedbrytning**: Pankreatisk lipase bryter ned triglyserider til glyserol og fettsyrer.
3. **Opptak**: Glyserol og fettsyrer tas opp av tarmepitelcellene, der de settes sammen igjen til triglyserider.
4. **Transport**: Triglyseridene pakkes inn i **kylomikroner** (lipoproteiner) som transporteres via lymfesystemet til blodet.

Uten galle ville fettfordøyelsen vært svært ineffektiv fordi lipase bare virker på overflaten av fettdråpene.`
    },
    {
      id: 'bio2-2-1-oppg-3',
      type: 'exercise',
      title: 'Oppgave: Tynntarmens funksjon',
      content: `Forklar hvorfor tynntarmen er så godt egnet til næringsopptak. Beskriv minst tre strukturelle tilpasninger som øker opptaksevnen.`
    },
    {
      id: 'bio2-2-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

Fordøyelsessystemet bryter ned maten vi spiser til næringsstoffer kroppen kan ta opp:

- **Munnhulen**: Mekanisk nedbrytning (tygging) og kjemisk nedbrytning av stivelse (amylase)
- **Spiserøret**: Transport via peristaltikk
- **Magesekken**: Proteinnedbrytning (pepsin) i surt miljø (HCl), danner chymus
- **Tynntarmen**: Hoveddelen av fordøyelse og opptak – galle emulgerer fett, bukspytt inneholder flere enzymer, tarmtotter og mikrovilli gir stor overflate
- **Tykktarmen**: Opptak av vann og mineraler, bakteriell nedbrytning av fiber

Enzymer er spesialiserte proteiner som katalyserer nedbrytningsreaksjonene. Hvert enzym har et optimalt pH-område og virker spesifikt på bestemte substrater.`
    }
  ],
  exercises: [
    {
      id: 'bio2-2-1-ex-1',
      type: 'multiple-choice',
      number: '2.1.1',
      title: 'Enzym i munnhulen',
      content: 'Hvilket enzym starter nedbrytningen av stivelse i munnhulen?',
      options: [
        { id: 'a', text: 'Pepsin', isCorrect: false },
        { id: 'b', text: 'Lipase', isCorrect: false },
        { id: 'c', text: 'Amylase', isCorrect: true },
        { id: 'd', text: 'Trypsin', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-1-ex-2',
      type: 'multiple-choice',
      number: '2.1.2',
      title: 'Magesekken',
      content: 'Hva er hovedfunksjonen til saltsyre (HCl) i magesekken?',
      options: [
        { id: 'a', text: 'Bryte ned karbohydrater', isCorrect: false },
        { id: 'b', text: 'Emulgere fett', isCorrect: false },
        { id: 'c', text: 'Aktivere pepsinogen og drepe mikroorganismer', isCorrect: true },
        { id: 'd', text: 'Nøytralisere chymus', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-1-ex-3',
      type: 'multiple-choice',
      number: '2.1.3',
      title: 'Gallens funksjon',
      content: 'Hva er gallens rolle i fordøyelsen?',
      options: [
        { id: 'a', text: 'Bryte ned proteiner til aminosyrer', isCorrect: false },
        { id: 'b', text: 'Emulgere fett til små dråper slik at lipase kan virke effektivt', isCorrect: true },
        { id: 'c', text: 'Nøytralisere den sure chymusen fra magesekken', isCorrect: false },
        { id: 'd', text: 'Produsere vitaminer i tykktarmen', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-1-ex-4',
      type: 'classic',
      number: '2.1.4',
      title: 'Fordøyelsesenzymene',
      content: 'Lag en oversiktstabell over de viktigste fordøyelsesenzymene. For hvert enzym skal du oppgi: navn, hvor det produseres, hva det bryter ned, og hva produktene er.',
      hints: [
        'Tenk på de tre hovedgruppene næringsstoffer: karbohydrater, proteiner og fett.',
        'Husk at noen enzymer skilles ut som inaktive forstadier (zymogener).',
        'Inkluder enzymer fra munnhulen, magesekken og tynntarmen.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'bio2-2-1-ex-5',
      type: 'classic',
      number: '2.1.5',
      title: 'Næringsopptak i tynntarmen',
      content: 'Beskriv hvordan tynntarmens struktur er tilpasset effektivt næringsopptak. Forklar hva som skjer med karbohydrater, proteiner og fett etter at de er tatt opp gjennom tarmveggen.',
      hints: [
        'Beskriv tarmtotter, mikrovilli og overflatearealet.',
        'Vannløselige næringsstoffer tas opp i blodet via kapillærer, mens fett transporteres via lymfen.',
        'Tenk på portvenen som fører næringsstoffene til leveren for videre prosessering.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    }
  ]
};

export const CHAPTER_BIOLOGI_2_2_2: TextbookChapter = {
  id: 'biologi-2-2-2',
  courseId: 'biologi-2',
  chapterNumber: '2.2',
  title: 'Næringsstoffer og ernæring',
  description: 'Karbohydrater, lipider, proteiner, vitaminer og mineraler.',
  estimatedTime: 25,
  competenceGoals: ['gjøre rede for næringsstoffenes funksjon'],
  content: [
    {
      id: 'bio2-2-2-intro',
      type: 'text',
      title: 'Næringsstoffer og ernæring',
      content: `# Næringsstoffer og ernæring

Kroppen trenger en rekke ulike næringsstoffer for å fungere optimalt. Næringsstoffene gir oss energi, byggematerialer til vekst og vedlikehold av celler, og stoffer som er nødvendige for å regulere biokjemiske prosesser.

De viktigste næringsstoffgruppene er **karbohydrater**, **lipider** (fett), **proteiner**, **vitaminer** og **mineraler**. I tillegg er vann et essensielt næringsstoff. I dette kapittelet skal vi se nærmere på hvert av disse næringsstoffenes oppbygning, funksjon og betydning for helsen.`
    },
    {
      id: 'bio2-2-2-teori-1',
      type: 'text',
      title: 'Karbohydrater',
      content: `## Karbohydrater

Karbohydrater er den viktigste energikilden for kroppen. De består av karbon, hydrogen og oksygen, og har den generelle formelen Cₙ(H₂O)ₙ. Karbohydrater deles inn i tre hovedgrupper etter størrelse:

**Monosakkarider** (enkle sukkerarter):
- **Glukose** – kroppens viktigste energikilde, brukes direkte i cellerespirasjonen
- **Fruktose** – finnes i frukt og honning
- **Galaktose** – inngår i laktose (melkesukker)

**Disakkarider** (to monosakkarider bundet sammen):
- **Sukrose** (glukose + fruktose) – vanlig bordsukker
- **Laktose** (glukose + galaktose) – melkesukker
- **Maltose** (glukose + glukose) – dannes ved stivelsesnedbrytning

**Polysakkarider** (lange kjeder av monosakkarider):
- **Stivelse** – plantenes energilager, brytes ned til glukose
- **Glykogen** – kroppens energilager, lagres i lever og muskler
- **Cellulose** – plantefiber, kan ikke brytes ned av menneskelige enzymer, men er viktig som kostfiber

Karbohydrater gir **17 kJ/g** (ca. 4 kcal/g) energi. Anbefalingen er at 45–60 % av det daglige energiinntaket skal komme fra karbohydrater, fortrinnsvis fra fullkornsprodukter, frukt og grønnsaker.`
    },
    {
      id: 'bio2-2-2-def-1',
      type: 'definition',
      title: 'Glykogen',
      content: `**Glykogen** er et sterkt forgrenet polysakkarid bygd opp av glukoseenheter. Det fungerer som kroppens korttidslager for energi og finnes hovedsakelig i leveren og skjelettmuskulaturen. Leveren kan lagre ca. 100 g glykogen som brukes til å opprettholde stabilt blodsukkernivå, mens musklene kan lagre ca. 400 g som brukes til muskelarbeid. Glykogensyntese stimuleres av hormonet insulin.`
    },
    {
      id: 'bio2-2-2-eks-1',
      type: 'example',
      title: 'Eksempel: Blodsukkerregulering',
      content: `**Eksempel: Blodsukkerregulering**

Etter et karbohydratrikt måltid stiger blodsukkerkonsentrasjonen. Kroppen regulerer blodsukkeret gjennom et hormonsystem med to motstående hormoner fra bukspyttkjertelen:

**Ved høyt blodsukker:**
1. Betaceller i de langerhanske øyer registrerer økt glukosenivå
2. Betacellene skiller ut **insulin**
3. Insulin stimulerer cellene til å ta opp glukose fra blodet
4. Glukose lagres som glykogen i lever og muskler
5. Blodsukkeret synker tilbake til normalt nivå (ca. 4–6 mmol/L)

**Ved lavt blodsukker:**
1. Alfaceller i de langerhanske øyer registrerer lavt glukosenivå
2. Alfacellene skiller ut **glukagon**
3. Glukagon stimulerer nedbrytning av glykogen til glukose i leveren
4. Glukose frigjøres til blodet
5. Blodsukkeret stiger tilbake til normalt nivå

Dette er et eksempel på **negativ tilbakekobling** – en viktig reguleringsmekanisme i kroppen.`
    },
    {
      id: 'bio2-2-2-oppg-1',
      type: 'exercise',
      title: 'Oppgave: Karbohydrater',
      content: `Forklar forskjellen mellom monosakkarider, disakkarider og polysakkarider. Gi eksempler på hver gruppe og beskriv deres funksjon i kroppen.`
    },
    {
      id: 'bio2-2-2-teori-2',
      type: 'text',
      title: 'Lipider',
      content: `## Lipider

Lipider (fett) er en samlebetegnelse for en gruppe organiske molekyler som er uløselige i vann. De viktigste typene lipider i kosten er:

**Triglyserider** (nøytralfett):
- Består av ett glyserolmolekyl bundet til tre fettsyrer
- Fettsyrene kan være **mettede** (ingen dobbeltbindinger), **enumettede** (én dobbeltbinding) eller **flerumettede** (flere dobbeltbindinger)
- Mettede fettsyrer finnes i animalske produkter (smør, kjøtt) og er faste ved romtemperatur
- Umettede fettsyrer finnes i planteolje og fisk og er flytende ved romtemperatur

**Fosfolipider**:
- Har en hydrofil (vannelskende) fosfatgruppe og to hydrofobe (vannfrastøtende) fettsyrehaler
- Er hovedkomponenten i cellemembraner (fosfolipiddoppellaget)

**Steroider**:
- Inkluderer kolesterol, som er byggestein for cellemembraner, gallesalter og steroidhormoner (østrogen, testosteron, kortisol)

Lipider gir **37 kJ/g** (ca. 9 kcal/g) energi – mer enn dobbelt så mye som karbohydrater og proteiner. Anbefalingen er at 25–40 % av energiinntaket skal komme fra fett, med vekt på umettede fettsyrer.

**Essensielle fettsyrer** som omega-3 og omega-6 kan ikke kroppen produsere selv og må tilføres gjennom kosten. De er viktige for blant annet hjerneutvikling, immunforsvar og betennelsesregulering.`
    },
    {
      id: 'bio2-2-2-def-2',
      type: 'definition',
      title: 'Essensielle fettsyrer',
      content: `**Essensielle fettsyrer** er flerumettede fettsyrer som kroppen ikke kan syntetisere selv og som derfor må tilføres gjennom kosten. De to viktigste er **linolsyre** (omega-6) og **alfalinolensyre** (omega-3). Disse fettsyrene er forløpere for signalmolekyler som prostaglandiner og leukotriener, som regulerer betennelsesreaksjoner, blodtrykk og immunrespons. Gode kilder til omega-3-fettsyrer er fet fisk, linfrø og valnøtter.`
    },
    {
      id: 'bio2-2-2-eks-2',
      type: 'example',
      title: 'Eksempel: Kolesterolets roller i kroppen',
      content: `**Eksempel: Kolesterolets roller i kroppen**

Kolesterol har ofte et dårlig rykte, men det er faktisk et livsviktig molekyl med mange funksjoner:

1. **Cellemembranstruktur**: Kolesterol er innleiret i fosfolipiddoppellaget i cellemembraner, der det regulerer membranens fluiditet – gjør den mer stabil ved høye temperaturer og mer fleksibel ved lave temperaturer.

2. **Gallesaltproduksjon**: Leveren omdanner kolesterol til gallesalter som er nødvendige for fettemulgering og fettfordøyelse.

3. **Hormonsyntese**: Kolesterol er utgangsstoffet for syntese av steroidhormoner som kortisol, aldosteron, østrogen og testosteron.

4. **Vitamin D-syntese**: Kolesterol i huden omdannes til vitamin D3 ved hjelp av UV-stråling.

Kolesterol transporteres i blodet bundet til lipoproteiner. **LDL** (low-density lipoprotein) transporterer kolesterol fra leveren til cellene, mens **HDL** (high-density lipoprotein) transporterer overskuddskolesterol tilbake til leveren. Høye nivåer av LDL-kolesterol øker risikoen for åreforkalkning.`
    },
    {
      id: 'bio2-2-2-oppg-2',
      type: 'exercise',
      title: 'Oppgave: Lipider',
      content: `Forklar forskjellen mellom mettede og umettede fettsyrer, og beskriv hvorfor sammensetningen av fett i kosten har betydning for helsen.`
    },
    {
      id: 'bio2-2-2-teori-3',
      type: 'text',
      title: 'Proteiner, vitaminer og mineraler',
      content: `## Proteiner, vitaminer og mineraler

**Proteiner** er store molekyler bygd opp av aminosyrer. Kroppen bruker 20 ulike aminosyrer, hvorav **9 er essensielle** – de kan ikke syntetiseres i kroppen og må tilføres gjennom kosten. Proteiner gir **17 kJ/g** energi.

Proteinenes funksjoner i kroppen:
- **Enzymer** – katalyserer biokjemiske reaksjoner
- **Strukturproteiner** – keratin (hår, negler), kollagen (bindevev)
- **Transportproteiner** – hemoglobin (oksygentransport), albumin
- **Immunforsvar** – antistoffer (immunglobuliner)
- **Hormoner** – insulin, veksthormon
- **Muskelproteiner** – aktin og myosin

**Vitaminer** er organiske stoffer kroppen trenger i små mengder. De deles inn i:
- **Vannløselige vitaminer** (B-vitaminer og C-vitamin) – tas opp direkte i blodet, overskudd skilles ut via nyrene
- **Fettløselige vitaminer** (A, D, E, K) – tas opp sammen med fett i tynntarmen, kan lagres i kroppen

**Mineraler** er uorganiske stoffer med viktige funksjoner:
- **Kalsium (Ca)** – beinbygning, muskelkontraksjon, nerveimpulsoverføring
- **Jern (Fe)** – del av hemoglobin og myoglobin, oksygentransport
- **Natrium (Na) og kalium (K)** – opprettholder membranpotensialet, væskebalanse
- **Fosfor (P)** – del av ATP, DNA og beinvev
- **Jod (I)** – nødvendig for syntese av skjoldbruskkjertelhormonene T3 og T4`
    },
    {
      id: 'bio2-2-2-def-3',
      type: 'definition',
      title: 'Essensielle aminosyrer',
      content: `**Essensielle aminosyrer** er aminosyrer som kroppen ikke kan syntetisere selv og som må tilføres gjennom kosten. Hos mennesker er det 9 essensielle aminosyrer: histidin, isoleucin, leucin, lysin, metionin, fenylalanin, treonin, tryptofan og valin. Animalske proteinkilder (kjøtt, fisk, egg, melk) inneholder alle essensielle aminosyrer i tilstrekkelige mengder, mens vegetabilske kilder ofte mangler én eller flere. Ved å kombinere ulike vegetabilske proteinkilder kan man likevel dekke behovet.`
    },
    {
      id: 'bio2-2-2-eks-3',
      type: 'example',
      title: 'Eksempel: Vitamin D og kalsiumopptak',
      content: `**Eksempel: Vitamin D og kalsiumopptak**

Vitamin D er et godt eksempel på hvordan vitaminer og mineraler samvirker:

1. **Vitamin D-syntese**: Når UV-B-stråling treffer huden, omdannes 7-dehydrokolesterol (et kolesterolderivat) til vitamin D3 (kolekalsiferol).

2. **Aktivering**: Vitamin D3 transporteres til leveren, der det omdannes til 25-hydroksyvitamin D. Deretter transporteres det til nyrene, der det aktiveres til **kalsitriol** (1,25-dihydroksyvitamin D) – den aktive formen.

3. **Funksjon**: Kalsitriol øker opptaket av kalsium og fosfat fra tynntarmen. Uten tilstrekkelig vitamin D kan kroppen bare ta opp ca. 10–15 % av kalsiumet i kosten, mens normalt opptak er 30–40 %.

4. **Konsekvens av mangel**: Vitamin D-mangel fører til redusert kalsiumopptak, som kan gi **rakitt** (bløte bein) hos barn og **osteomalasi** hos voksne. I Norge er vitamin D-mangel relativt vanlig om vinteren på grunn av lite sollys.

Dette eksempelet viser at vitaminer og mineraler ofte fungerer sammen, og at mangel på ett næringsstoff kan påvirke opptaket eller funksjonen til et annet.`
    },
    {
      id: 'bio2-2-2-oppg-3',
      type: 'exercise',
      title: 'Oppgave: Proteiner og vitaminer',
      content: `Forklar hvorfor proteiner er viktige for kroppen, og beskriv minst fire ulike funksjoner proteiner har. Gi eksempler på spesifikke proteiner for hver funksjon.`
    },
    {
      id: 'bio2-2-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

Kroppen trenger ulike næringsstoffer for å fungere:

- **Karbohydrater** (17 kJ/g): Hovedenergikilde, deles inn i monosakkarider, disakkarider og polysakkarider. Glykogen er kroppens korttidslager.
- **Lipider** (37 kJ/g): Energirik lagring, bygger cellemembraner (fosfolipider), forløper for hormoner (kolesterol). Essensielle fettsyrer må tilføres via kosten.
- **Proteiner** (17 kJ/g): Bygd opp av aminosyrer, har mangfoldige funksjoner (enzymer, strukturproteiner, antistoffer, hormoner). 9 essensielle aminosyrer.
- **Vitaminer**: Vannløselige (B, C) og fettløselige (A, D, E, K), trengs i små mengder for ulike biokjemiske prosesser.
- **Mineraler**: Uorganiske stoffer (Ca, Fe, Na, K, P, I) med viktige strukturelle og regulerende funksjoner.

Et balansert kosthold bør inneholde riktige mengder av alle næringsstoffgrupper for optimal helse.`
    }
  ],
  exercises: [
    {
      id: 'bio2-2-2-ex-1',
      type: 'multiple-choice',
      number: '2.2.1',
      title: 'Energiinnhold',
      content: 'Hvilket næringsstoff gir mest energi per gram?',
      options: [
        { id: 'a', text: 'Karbohydrater', isCorrect: false },
        { id: 'b', text: 'Proteiner', isCorrect: false },
        { id: 'c', text: 'Lipider (fett)', isCorrect: true },
        { id: 'd', text: 'Vitaminer', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-2-ex-2',
      type: 'multiple-choice',
      number: '2.2.2',
      title: 'Glykogen',
      content: 'Hvor i kroppen lagres glykogen primært?',
      options: [
        { id: 'a', text: 'I nyrene og hjernen', isCorrect: false },
        { id: 'b', text: 'I leveren og skjelettmuskulaturen', isCorrect: true },
        { id: 'c', text: 'I fettvevet og huden', isCorrect: false },
        { id: 'd', text: 'I blodet og lymfen', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-2-ex-3',
      type: 'multiple-choice',
      number: '2.2.3',
      title: 'Fosfolipider',
      content: 'Hva er fosfolipidenes hovedfunksjon i kroppen?',
      options: [
        { id: 'a', text: 'Energilagring i fettvev', isCorrect: false },
        { id: 'b', text: 'Hovedkomponent i cellemembraner', isCorrect: true },
        { id: 'c', text: 'Transport av oksygen i blodet', isCorrect: false },
        { id: 'd', text: 'Produksjon av gallesalter', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-2-ex-4',
      type: 'classic',
      number: '2.2.4',
      title: 'Blodsukkerregulering',
      content: 'Beskriv hvordan blodsukkerkonsentrasjonen reguleres etter et karbohydratrikt måltid og under faste. Inkluder hormonene insulin og glukagon i forklaringen, og forklar hvorfor dette er et eksempel på negativ tilbakekobling.',
      hints: [
        'Start med hva som skjer rett etter et måltid – blodsukkeret stiger.',
        'Beskriv rollen til betaceller og alfaceller i de langerhanske øyer.',
        'Negativ tilbakekobling betyr at responsen motvirker den opprinnelige forstyrrelsen.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'bio2-2-2-ex-5',
      type: 'classic',
      number: '2.2.5',
      title: 'Næringsstoffenes samspill',
      content: 'Gi et eksempel på hvordan ulike næringsstoffer samvirker i kroppen. Forklar hvorfor et variert og balansert kosthold er viktig for helsa.',
      hints: [
        'Tenk på samspillet mellom vitamin D og kalsium som et konkret eksempel.',
        'Forklar hva som kan skje ved mangel på ett næringsstoff.',
        'Drøft hvorfor både makronæringsstoffer (karbohydrater, fett, proteiner) og mikronæringsstoffer (vitaminer, mineraler) er nødvendige.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    }
  ]
};

export const CHAPTER_BIOLOGI_2_2_3: TextbookChapter = {
  id: 'biologi-2-2-3',
  courseId: 'biologi-2',
  chapterNumber: '2.3',
  title: 'Hjertets oppbygning og funksjon',
  description: 'Hjertekamre, klaffer, hjertesyklus og EKG.',
  estimatedTime: 25,
  competenceGoals: ['beskrive hjertets oppbygning og funksjon'],
  content: [
    {
      id: 'bio2-2-3-intro',
      type: 'text',
      title: 'Hjertets oppbygning og funksjon',
      content: `# Hjertets oppbygning og funksjon

Hjertet er kroppens pumpe og driver blodet gjennom hele sirkulasjonssystemet. Det slår omtrent 100 000 ganger i døgnet og pumper rundt 7 000 liter blod daglig. Hjertet er en muskel på størrelse med en knyttneve, og det ligger i brysthulen mellom lungene, litt forskjøvet mot venstre side.

I dette kapittelet skal vi se på hjertets anatomiske oppbygning, hvordan hjertesyklusen fungerer, og hvordan hjertets elektriske aktivitet kan måles med EKG.`
    },
    {
      id: 'bio2-2-3-teori-1',
      type: 'text',
      title: 'Hjertets anatomi',
      content: `## Hjertets anatomi

Hjertet er delt inn i fire kamre: to **forkamre** (atrier) og to **hjertekamre** (ventrikler).

**Høyre side av hjertet** mottar oksygenfattig blod fra kroppen og pumper det til lungene:
- **Høyre forkammer (atrium)**: Mottar blod fra øvre og nedre hulvene (vena cava superior og inferior)
- **Høyre hjertekammer (ventrikkel)**: Pumper blodet til lungene via lungearterie (arteria pulmonalis)

**Venstre side av hjertet** mottar oksygenrikt blod fra lungene og pumper det ut i kroppen:
- **Venstre forkammer (atrium)**: Mottar blod fra lungevenene (venae pulmonales)
- **Venstre hjertekammer (ventrikkel)**: Pumper blodet ut i aorta og videre til hele kroppen

Venstre hjertekammer har en betydelig tykkere vegg enn høyre fordi det må generere et høyere trykk for å pumpe blod gjennom hele det store kretsløpet (systemkretsløpet).

**Hjerteklaffer** sørger for at blodet bare strømmer i én retning:
- **Trikuspidalklappen**: Mellom høyre forkammer og høyre hjertekammer (tre flipper)
- **Mitralklappen** (bikuspidal): Mellom venstre forkammer og venstre hjertekammer (to flipper)
- **Pulmonalklappen**: Mellom høyre ventrikkel og lungearterien (tre halvmåneformede flipper)
- **Aortaklappen**: Mellom venstre ventrikkel og aorta (tre halvmåneformede flipper)

Hjerteveggen består av tre lag:
- **Endokardiet** – det innerste laget som dekker hjertets hulrom
- **Myokardiet** – hjertemuskellaget, det tykkeste laget
- **Perikardiet** – den ytre hinnesekken som omgir hjertet`
    },
    {
      id: 'bio2-2-3-def-1',
      type: 'definition',
      title: 'Hjerteklaffer',
      content: `**Hjerteklaffer** er strukturer i hjertet som sikrer enveis blodstrøm. Det finnes fire klaffer: to atrioventrikulære klaffer (trikuspidal- og mitralklappen) mellom forkamrene og hjertekamrene, og to semilunarklapper (pulmonal- og aortaklappen) mellom hjertekamrene og de store arteriene. Klaffene åpner og lukker seg passivt som respons på trykkforskjeller. Lyden av hjerteslagene skyldes i hovedsak klaffenes lukking.`
    },
    {
      id: 'bio2-2-3-eks-1',
      type: 'example',
      title: 'Eksempel: Blodets vei gjennom hjertet',
      content: `**Eksempel: Blodets vei gjennom hjertet**

La oss følge en blodcelle gjennom hele kretsløpet, med start i høyre forkammer:

1. Oksygenfattig blod ankommer **høyre forkammer** via hulvenene
2. Blodet strømmer gjennom **trikuspidalklappen** til **høyre hjertekammer**
3. Høyre hjertekammer pumper blodet gjennom **pulmonalklappen** til **lungearterien**
4. Blodet fordeler seg i lungenes kapillærnett, der det avgir CO₂ og tar opp O₂ (**gassutveksling**)
5. Oksygenrikt blod returnerer via **lungevenene** til **venstre forkammer**
6. Blodet strømmer gjennom **mitralklappen** til **venstre hjertekammer**
7. Venstre hjertekammer pumper blodet gjennom **aortaklappen** ut i **aorta**
8. Blodet fordeles til hele kroppen via arterier og kapillærer
9. I kapillærene avgir blodet O₂ og næringsstoffer og tar opp CO₂ og avfallsstoffer
10. Oksygenfattig blod samles i vener og returnerer til **høyre forkammer** via hulvenene

Legg merke til at det er to kretsløp som arbeider i serie:
- **Det lille kretsløpet** (lungekretsløpet): Høyre hjertekammer → lunger → venstre forkammer
- **Det store kretsløpet** (systemkretsløpet): Venstre hjertekammer → kroppen → høyre forkammer`
    },
    {
      id: 'bio2-2-3-oppg-1',
      type: 'exercise',
      title: 'Oppgave: Hjertets anatomi',
      content: `Tegn en skjematisk tegning av hjertet som viser de fire kamrene, de fire klaffene og de store blodkarene (hulvener, lungearterier, lungevener og aorta). Marker retningen blodstrømmen med piler.`
    },
    {
      id: 'bio2-2-3-teori-2',
      type: 'text',
      title: 'Hjertesyklusen',
      content: `## Hjertesyklusen

Hjertesyklusen beskriver hendelsene som skjer fra ett hjerteslag til det neste. Hver syklus varer ca. 0,8 sekunder ved en hjertefrekvens på 75 slag per minutt. Syklusen deles inn i to hovedfaser:

**Systole (sammentrekningsfasen)**:
- **Atriell systole** (0,1 s): Forkamrene trekker seg sammen og presser det siste blodet inn i hjertekamrene. Hjertekamrene er avslappet (diastole).
- **Ventrikulær systole** (0,3 s): Hjertekamrene trekker seg sammen. Trykket stiger raskt, AV-klaffene (trikuspidal og mitral) lukkes (gir 1. hjertelyd – «lubb»), og blodet pumpes ut gjennom pulmonal- og aortaklaffene.

**Diastole (avslapningsfasen)** (0,4 s):
- Hjertekamrene slapper av, trykket synker
- Semilunarklaffene (pulmonal og aorta) lukkes når trykket i kamrene faller under trykket i arteriene (gir 2. hjertelyd – «dubb»)
- AV-klaffene åpnes, og blodet begynner å strømme passivt fra forkamrene til hjertekamrene
- Ca. 70 % av fyllingen skjer passivt i denne fasen

**Hjertets minuttvolum** er mengden blod hjertet pumper per minutt:

Minuttvolum = slagvolum × hjertefrekvens

I hvile er slagvolumet ca. 70 mL og hjertefrekvensen ca. 70 slag/min, noe som gir et minuttvolum på ca. 5 L/min. Under fysisk aktivitet kan minuttvolumet øke til 20–25 L/min hos trente personer.`
    },
    {
      id: 'bio2-2-3-def-2',
      type: 'definition',
      title: 'Hjertesyklusen',
      content: `**Hjertesyklusen** er den gjentatte sekvensen av sammentrekninger (systole) og avslapning (diastole) som driver blodstrømmen gjennom hjertet og kroppen. Én komplett syklus varer ca. 0,8 sekunder i hvile og omfatter atriell systole, ventrikulær systole og diastole. Hjertets arbeid kan beskrives ved minuttvolumet, som er produktet av slagvolum og hjertefrekvens.`
    },
    {
      id: 'bio2-2-3-eks-2',
      type: 'example',
      title: 'Eksempel: Beregning av minuttvolum',
      content: `**Eksempel: Beregning av minuttvolum**

En person har et slagvolum på 70 mL og en hvilepuls på 72 slag/min.

**Minuttvolum i hvile:**
MV = slagvolum × hjertefrekvens
MV = 70 mL × 72 slag/min
MV = 5 040 mL/min ≈ 5,0 L/min

Under hard fysisk aktivitet øker både slagvolumet (til ca. 120 mL) og hjertefrekvensen (til ca. 180 slag/min):

**Minuttvolum under trening:**
MV = 120 mL × 180 slag/min
MV = 21 600 mL/min ≈ 21,6 L/min

Dette betyr at minuttvolumet øker med mer enn fire ganger fra hvile til hard aktivitet. Økningen skyldes:
- **Økt slagvolum**: Hjertekamrene fylles mer (Frank-Starling-mekanismen) og trekker seg kraftigere sammen
- **Økt hjertefrekvens**: Styres av det sympatiske nervesystemet og hormonet adrenalin

En godt trent utholdenhetsidretsutøver har et større hjerte med større slagvolum, noe som gir lavere hvilepuls for å opprettholde samme minuttvolum.`
    },
    {
      id: 'bio2-2-3-oppg-2',
      type: 'exercise',
      title: 'Oppgave: Hjertesyklusen',
      content: `Beskriv de ulike fasene i hjertesyklusen. Forklar hva som forårsaker de to hjertelydene vi kan høre med stetoskop.`
    },
    {
      id: 'bio2-2-3-teori-3',
      type: 'text',
      title: 'Hjertets elektriske system og EKG',
      content: `## Hjertets elektriske system og EKG

Hjertet har sitt eget elektriske ledningssystem som sørger for at hjertekamrene trekker seg sammen i riktig rekkefølge og med riktig timing.

**Ledningssystemet består av:**
1. **Sinusknuten (SA-knuten)**: Ligger i veggen av høyre forkammer. Fungerer som hjertets naturlige pacemaker og genererer elektriske impulser med en frekvens på 60–100 per minutt.
2. **Atrioventrikulærknuten (AV-knuten)**: Ligger i skilleveggen mellom forkamrene og hjertekamrene. Forsinker impulsen ca. 0,1 sekund, slik at forkamrene rekker å tømmes før hjertekamrene kontraherer.
3. **His' bunt**: Leder impulsen fra AV-knuten ned gjennom skilleveggen mellom hjertekamrene.
4. **Venstre og høyre grenblokk**: Forgreninger av His' bunt som fordeler impulsen til hver side.
5. **Purkinje-fibre**: Finfordelte fibre som sprer impulsen raskt til hele hjertemuskulaturen i begge hjertekamre, slik at de trekker seg sammen tilnærmet samtidig.

**EKG (elektrokardiogram)** er en registrering av hjertets elektriske aktivitet, målt med elektroder på huden. Et normalt EKG viser følgende bølger og takker:

- **P-bølgen**: Representerer depolarisering (elektrisk aktivering) av forkamrene → forkamrene kontraherer
- **QRS-komplekset**: Representerer depolarisering av hjertekamrene → hjertekamrene kontraherer. Repolarisering av forkamrene skjules av QRS-komplekset.
- **T-bølgen**: Representerer repolarisering (elektrisk tilbakestilling) av hjertekamrene → hjertekamrene slapper av

**PQ-intervallet** (fra P-bølgens start til Q) representerer tiden impulsen bruker fra sinusknuten gjennom AV-knuten til hjertekamrene begynner å depolarisere. Normal varighet er 0,12–0,20 sekunder.

**QT-intervallet** representerer den totale tiden for depolarisering og repolarisering av hjertekamrene.`
    },
    {
      id: 'bio2-2-3-def-3',
      type: 'definition',
      title: 'Elektrokardiogram (EKG)',
      content: `**Elektrokardiogram (EKG)** er en grafisk fremstilling av hjertets elektriske aktivitet over tid, registrert ved hjelp av elektroder plassert på huden. EKG-kurven viser P-bølgen (forkamrenes depolarisering), QRS-komplekset (hjertekamrenes depolarisering) og T-bølgen (hjertekamrenes repolarisering). EKG er et viktig diagnostisk verktøy som kan avsløre rytmeforstyrrelser (arytmier), hjerteinfarkt, og andre hjertelidelser.`
    },
    {
      id: 'bio2-2-3-eks-3',
      type: 'example',
      title: 'Eksempel: Tolking av EKG',
      content: `**Eksempel: Tolking av EKG**

Et normalt EKG i hviletilstand viser en regelmessig sekvens av P-QRS-T-komplekser. La oss se på hva de ulike komponentene forteller oss:

**Normalt EKG-mønster:**
- Regelmessig avstand mellom R-takkene (R-R-intervall) → normal sinusrytme
- P-bølge foran hvert QRS-kompleks → impulsen starter i sinusknuten
- PQ-intervall 0,12–0,20 s → normal overledning gjennom AV-knuten
- Smalt QRS-kompleks (< 0,12 s) → normal impulsspredning i hjertekamrene

**Eksempler på unormale funn:**
- **Atrieflimmer**: Ingen tydelige P-bølger, uregelmessig R-R-intervall. Forkamrene «flimrer» med over 300 impulser per minutt, og AV-knuten slipper gjennom impulser uregelmessig.
- **AV-blokk grad I**: Forlenget PQ-intervall (> 0,20 s). Impulsen forsinkes unormalt mye i AV-knuten.
- **Hjerteinfarkt**: ST-segment-elevasjon (hevet over grunnlinjen). Tyder på akutt skade av hjertemuskelvev på grunn av blokkert koronararterie.

EKG er derfor et uvurderlig verktøy for å diagnostisere hjertesykdommer og overvåke hjertets funksjon.`
    },
    {
      id: 'bio2-2-3-oppg-3',
      type: 'exercise',
      title: 'Oppgave: EKG',
      content: `Forklar hva P-bølgen, QRS-komplekset og T-bølgen i et EKG representerer. Beskriv hvordan en forstyrrelse i hjertets ledningssystem kan påvirke EKG-kurven.`
    },
    {
      id: 'bio2-2-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

Hjertet er en effektiv muskulær pumpe med fire kamre:

- **Høyre side** pumper oksygenfattig blod til lungene (det lille kretsløpet), **venstre side** pumper oksygenrikt blod til kroppen (det store kretsløpet).
- **Fire hjerteklaffer** (trikuspidal, mitral, pulmonal, aorta) sikrer enveis blodstrøm.
- **Hjertesyklusen** består av systole (sammentrekning) og diastole (avslapning). Minuttvolumet beregnes som slagvolum × hjertefrekvens.
- **Ledningssystemet** (SA-knute → AV-knute → His' bunt → Purkinje-fibre) koordinerer hjertets sammentrekninger.
- **EKG** registrerer hjertets elektriske aktivitet: P-bølgen (forkamrenes depolarisering), QRS-komplekset (hjertekamrenes depolarisering) og T-bølgen (hjertekamrenes repolarisering).`
    }
  ],
  exercises: [
    {
      id: 'bio2-2-3-ex-1',
      type: 'multiple-choice',
      number: '2.3.1',
      title: 'Hjertets kamre',
      content: 'Hvilket hjertekammer pumper oksygenrikt blod ut i aorta?',
      options: [
        { id: 'a', text: 'Høyre forkammer', isCorrect: false },
        { id: 'b', text: 'Høyre hjertekammer', isCorrect: false },
        { id: 'c', text: 'Venstre forkammer', isCorrect: false },
        { id: 'd', text: 'Venstre hjertekammer', isCorrect: true }
      ]
    },
    {
      id: 'bio2-2-3-ex-2',
      type: 'multiple-choice',
      number: '2.3.2',
      title: 'Hjertets pacemaker',
      content: 'Hvilken struktur fungerer som hjertets naturlige pacemaker?',
      options: [
        { id: 'a', text: 'AV-knuten', isCorrect: false },
        { id: 'b', text: 'Sinusknuten (SA-knuten)', isCorrect: true },
        { id: 'c', text: 'His\' bunt', isCorrect: false },
        { id: 'd', text: 'Purkinje-fibrene', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-3-ex-3',
      type: 'multiple-choice',
      number: '2.3.3',
      title: 'EKG-komponenter',
      content: 'Hva representerer QRS-komplekset i et EKG?',
      options: [
        { id: 'a', text: 'Depolarisering av forkamrene', isCorrect: false },
        { id: 'b', text: 'Repolarisering av hjertekamrene', isCorrect: false },
        { id: 'c', text: 'Depolarisering av hjertekamrene', isCorrect: true },
        { id: 'd', text: 'Overledning gjennom AV-knuten', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-3-ex-4',
      type: 'classic',
      number: '2.3.4',
      title: 'Hjertets ledningssystem',
      content: 'Beskriv hjertets elektriske ledningssystem, fra sinusknuten til Purkinje-fibrene. Forklar hvorfor det er viktig at impulsen forsinkes i AV-knuten.',
      hints: [
        'Følg impulsens vei: SA-knute → AV-knute → His\' bunt → grenblokk → Purkinje-fibre.',
        'Forsinkelsen i AV-knuten gir forkamrene tid til å tømmes før hjertekamrene kontraherer.',
        'Tenk på hva som ville skjedd dersom forkamrene og hjertekamrene kontraherte samtidig.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'bio2-2-3-ex-5',
      type: 'classic',
      number: '2.3.5',
      title: 'Minuttvolum og trening',
      content: 'En utholdenhetsidretsutøver har et slagvolum på 100 mL og en hvilepuls på 50 slag/min. Beregn minuttvolumet i hvile. Forklar hvorfor trente personer ofte har lavere hvilepuls enn utrente, og diskuter hvordan minuttvolumet endres under fysisk aktivitet.',
      hints: [
        'Bruk formelen: minuttvolum = slagvolum × hjertefrekvens.',
        'Sammenlign med en utrent person som har slagvolum 70 mL og hvilepuls 72 slag/min.',
        'Trening fører til et større og sterkere hjerte som pumper mer blod per slag.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    }
  ]
};

// ============================================================================
// Kapittel 2.4: Blodet og blodkretsløpet
// ============================================================================

export const CHAPTER_BIOLOGI_2_2_4: TextbookChapter = {
  id: 'biologi-2-2-4',
  courseId: 'biologi-2',
  chapterNumber: '2.4',
  title: 'Blodet og blodkretsløpet',
  description: 'Blodceller, plasma, det store og lille kretsløpet.',
  estimatedTime: 25,
  competenceGoals: ['forklare blodets sammensetning og kretsløpet'],
  content: [
    {
      id: 'bio2-2-4-intro',
      type: 'text',
      title: 'Blodet og blodkretsløpet',
      content: `# Blodet og blodkretsløpet

Blodet er kroppens transportmedium og binder sammen alle organer og vev. Det frakter oksygen fra lungene til cellene, karbondioksid fra cellene til lungene, næringsstoffer fra tarmen til vevene, og avfallsstoffer til nyrene for utskillelse. I tillegg spiller blodet en viktig rolle i immunforsvaret, temperaturregulering og opprettholdelse av kroppens indre miljø.

En voksen person har ca. 5 liter blod, noe som utgjør omtrent 7–8 % av kroppsvekten. I dette kapittelet skal vi se på blodets sammensetning, de ulike blodcellenes funksjoner, og hvordan det store og lille kretsløpet sørger for en kontinuerlig blodsirkulasjon.`
    },
    {
      id: 'bio2-2-4-teori-1',
      type: 'text',
      title: 'Blodets sammensetning',
      content: `## Blodets sammensetning

Blod består av to hoveddeler: **blodplasma** (den flytende delen) og **blodceller** (de faste elementene). Dersom man sentrifugerer en blodprøve, vil blodcellene synke til bunnen og plasmaet samle seg på toppen.

**Blodplasma** (ca. 55 % av blodvolumet):
- Består av ca. 90 % vann
- Inneholder **plasmaproteiner**: albumin (opprettholder osmotisk trykk), globuliner (inkludert antistoffer), og fibrinogen (blodlevring)
- Transporterer næringsstoffer (glukose, aminosyrer, fettsyrer), hormoner, avfallsstoffer (urea, kreatinin) og elektrolytter (Na⁺, K⁺, Ca²⁺, Cl⁻)
- Fungerer som buffer og opprettholder blodets pH på ca. 7,4

**Blodceller** (ca. 45 % av blodvolumet):
- **Røde blodceller (erytrocytter)**: Utgjør det overveldende flertallet av blodcellene. Inneholder hemoglobin som transporterer oksygen. Mangler cellekjerne hos pattedyr, lever ca. 120 dager.
- **Hvite blodceller (leukocytter)**: Del av immunforsvaret. Inkluderer nøytrofile, lymfocytter, monocytter, eosinofile og basofile granulocytter.
- **Blodplater (trombocytter)**: Cellefragmenter som spiller en nøkkelrolle i hemostase (blodstansing) og koagulasjon (blodlevring).

Andelen røde blodceller av det totale blodvolumet kalles **hematokrit**. Normal hematokrit er ca. 42 % for kvinner og ca. 47 % for menn.`
    },
    {
      id: 'bio2-2-4-def-1',
      type: 'definition',
      title: 'Hematokrit',
      content: `**Hematokrit** er et mål på andelen røde blodceller av det totale blodvolumet, uttrykt i prosent. Verdien bestemmes ved å sentrifugere en blodprøve slik at de røde blodcellene samler seg i bunnen. Normal hematokrit er ca. 42 % hos kvinner og ca. 47 % hos menn. Lav hematokrit kan tyde på anemi (blodmangel), mens høy hematokrit kan ses ved dehydrering eller ved økt produksjon av røde blodceller (for eksempel ved opphold i store høyder).`
    },
    {
      id: 'bio2-2-4-eks-1',
      type: 'example',
      title: 'Eksempel: Røde blodcellers tilpasninger',
      content: `**Eksempel: Røde blodcellers tilpasninger**

Røde blodceller (erytrocytter) er svært godt tilpasset sin funksjon som oksygentransportører:

1. **Bikonkav skiveform**: Den karakteristiske formen gir et stort overflate-til-volum-forhold, som maksimerer diffusjonsoverflaten for gassutveksling. Formen gjør også cellene fleksible, slik at de kan presse seg gjennom trange kapillærer.

2. **Ingen cellekjerne**: Modne erytrocytter hos pattedyr har mistet kjernen under modningen i beinmargen. Dette gir mer plass til hemoglobin – hver celle inneholder ca. 280 millioner hemoglobinmolekyler.

3. **Hemoglobin (Hb)**: Hvert hemoglobinmolekyl består av fire polypeptidkjeder (to alfa og to beta), hver med en hemgruppe som inneholder et jernion (Fe²⁺). Hvert jernion kan binde ett O₂-molekyl, slik at ett hemoglobinmolekyl kan transportere opptil 4 O₂-molekyler.

4. **Kort levetid og kontinuerlig produksjon**: Erytrocytter lever i ca. 120 dager. Gamle celler brytes ned i milten og leveren, mens nye celler produseres kontinuerlig i beinmargen (erytropoiese). Produksjonen stimuleres av hormonet **erytropoietin (EPO)** fra nyrene.

Kroppen produserer ca. 2 millioner nye røde blodceller per sekund for å erstatte de som brytes ned.`
    },
    {
      id: 'bio2-2-4-oppg-1',
      type: 'exercise',
      title: 'Oppgave: Blodets sammensetning',
      content: `Beskriv blodets sammensetning og forklar funksjonen til de tre typene blodceller (erytrocytter, leukocytter og trombocytter). Hvorfor er det viktig at erytrocytter mangler cellekjerne?`
    },
    {
      id: 'bio2-2-4-teori-2',
      type: 'text',
      title: 'Blodkar og sirkulasjonen',
      content: `## Blodkar og sirkulasjonen

Blodet transporteres gjennom et lukket system av blodkar som kan deles inn i tre hovedtyper:

**Arterier** (pulsårer):
- Fører blod **bort fra hjertet**
- Har tykke, elastiske vegger som tåler det høye trykket fra hjertets pumping
- Den største arterien er **aorta**, som mottar blod direkte fra venstre hjertekammer
- Arteriene forgreiner seg til stadig mindre **arterioler** som kan regulere blodstrømmen til ulike vev ved å utvide (vasodilatasjon) eller trekke seg sammen (vasokonstriksjon)

**Kapillærer** (hårrørsårer):
- Mikroskopisk tynne kar med vegger som kun består av ett cellelag (endotel)
- Her foregår **utvekslingen** av oksygen, karbondioksid, næringsstoffer og avfallsstoffer mellom blod og vev
- Det totale kapillærnettet har et enormt overflatereal som sikrer effektiv utveksling
- Blodstrømmen i kapillærene er langsom, noe som gir tid til diffusjon

**Vener** (blodårer):
- Fører blod **tilbake til hjertet**
- Har tynnere vegger og lavere trykk enn arterier
- Inneholder **veneklaffer** som hindrer tilbakestrømning av blodet
- Blodet drives fremover av skjelettmuskulaturens «muskelpumpe» og trykkforandringer i brysthulen ved pusting
- De to store hulvenene (vena cava superior og inferior) tømmer blodet i høyre forkammer`
    },
    {
      id: 'bio2-2-4-def-2',
      type: 'definition',
      title: 'Kapillærer',
      content: `**Kapillærer** er de tynneste blodkarene i kroppen, med en diameter på bare 5–10 μm. Veggen består av et enkelt lag endotelceller, noe som muliggjør effektiv utveksling av gasser, næringsstoffer og avfallsstoffer mellom blodet og det omkringliggende vevet. Kapillærene forbinder arterioler med venoler og danner et tett nettverk i nesten alle kroppens vev. Det totale kapillærnettet har en lengde på over 100 000 km.`
    },
    {
      id: 'bio2-2-4-eks-2',
      type: 'example',
      title: 'Eksempel: Blodtrykk i ulike kar',
      content: `**Eksempel: Blodtrykk i ulike kar**

Blodtrykket varierer betydelig gjennom sirkulasjonssystemet:

- **Aorta**: ca. 120/80 mmHg (systolisk/diastolisk). Det pulserende trykket skyldes hjertets rytmiske pumping.
- **Store arterier**: Trykket er fortsatt høyt, men de elastiske veggene demper pulseringene noe.
- **Arterioler**: Trykket faller kraftig (til ca. 40 mmHg) fordi arteriolene har stor motstand. Arteriolene er det viktigste stedet for regulering av blodtrykk og blodfordeling.
- **Kapillærer**: ca. 20–30 mmHg ved den arterielle enden, synkende til ca. 10–15 mmHg ved den venøse enden. Dette trykkfallet driver væske ut i vevet (filtrering) ved den arterielle enden.
- **Venoler og vener**: ca. 5–15 mmHg. Det lave trykket er grunnen til at venene trenger klaffer og muskelpumpen for å returnere blodet til hjertet.
- **Hulvenene**: ca. 0–5 mmHg idet blodet ankommer høyre forkammer.

Blodtrykket måles vanligvis i overarmsarterien. Et normalt blodtrykk er ca. 120/80 mmHg. Vedvarende høyt blodtrykk (**hypertensjon**, >140/90 mmHg) øker risikoen for hjerte- og karsykdommer.`
    },
    {
      id: 'bio2-2-4-oppg-2',
      type: 'exercise',
      title: 'Oppgave: Blodkar',
      content: `Sammenlign strukturen og funksjonen til arterier, kapillærer og vener. Forklar hvorfor kapillærene er best egnet til utveksling av stoffer mellom blod og vev.`
    },
    {
      id: 'bio2-2-4-teori-3',
      type: 'text',
      title: 'Det store og lille kretsløpet',
      content: `## Det store og lille kretsløpet

Sirkulasjonssystemet består av to kretsløp som arbeider i serie, drevet av hjertet:

**Det lille kretsløpet (lungekretsløpet)**:
- Blodet pumpes fra **høyre hjertekammer** til lungene via **lungearteriene**
- I lungenes kapillærnett skjer **gassutveksling**: CO₂ diffunderer fra blodet til alveolene, og O₂ diffunderer fra alveolene til blodet
- Det oksygenrike blodet returnerer til **venstre forkammer** via **lungevenene**
- Merk: Lungearteriene fører oksygenfattig blod (unntaket fra regelen om at arterier fører oksygenrikt blod), og lungevenene fører oksygenrikt blod
- Trykket i det lille kretsløpet er lavt (ca. 25/10 mmHg) for å unngå å skade de tynne alveolveggene

**Det store kretsløpet (systemkretsløpet)**:
- Blodet pumpes fra **venstre hjertekammer** ut i **aorta** og videre til hele kroppen
- Arterier forgreiner seg til arterioler og kapillærer i alle vev og organer
- I kapillærene skjer utveksling av gasser, næringsstoffer og avfallsstoffer
- Det oksygenfattige blodet samles i venoler og vener
- Blodet returnerer til **høyre forkammer** via **øvre og nedre hulvene**
- Trykket er betydelig høyere enn i det lille kretsløpet (ca. 120/80 mmHg i aorta)

**Spesialtilpasninger i sirkulasjonen**:
- **Koronararteriene** forsyner selve hjertemuskelen med blod
- **Portåresystemet** leder blod fra tarmen direkte til leveren for prosessering av næringsstoffer
- **Nyrenes sirkulasjon** filtrerer blodet og regulerer blodvolum og blodtrykk`
    },
    {
      id: 'bio2-2-4-def-3',
      type: 'definition',
      title: 'Portåresystemet',
      content: `**Portåresystemet** (vena portae-systemet) er et spesielt venøst system der blod fra kapillærer i ett organ ledes direkte til kapillærer i et annet organ, uten først å passere gjennom hjertet. Det viktigste eksempelet er **lever-portåren** (vena portae hepatis), som samler opp næringsrikt blod fra mage, tarm, milt og bukspyttkjertel og fører det til leveren. I leveren prosesseres næringsstoffene, giftstoffer fjernes, og medisiner metaboliseres før blodet går videre til hjertet via levervenene.`
    },
    {
      id: 'bio2-2-4-eks-3',
      type: 'example',
      title: 'Eksempel: Koronarkretsløpet og hjerteinfarkt',
      content: `**Eksempel: Koronarkretsløpet og hjerteinfarkt**

Hjertemuskelen trenger selv en kontinuerlig tilførsel av oksygen og næringsstoffer for å opprettholde sin pumpefunksjon. Denne forsyningen skjer gjennom **koronarkretsløpet**:

1. **Venstre og høyre koronararterie** utgår fra aorta like over aortaklappen og forgreiner seg over hjertets overflate.
2. Koronararteriene forsyner hele hjertemuskulaturen med oksygenrikt blod.
3. Det brukte blodet dreneres via koronarvenene til sinus coronarius, som tømmer seg i høyre forkammer.

**Åreforkalkning (aterosklerose)** i koronararteriene er den vanligste årsaken til hjerteinfarkt:
- Fettavleiringer (plakk) bygger seg opp i arterieveggen over tid
- Plakket innsnevrer arteriens lumen og reduserer blodstrømmen
- Hvis plakket sprekker, kan en blodpropp (trombe) blokkere arterien fullstendig
- Vevet nedstrøms for blokkeringen får ikke oksygen og begynner å dø (**infarkt**)
- Symptomer: Brystsmerter, utstråling til venstre arm, pustebesvær, kvalme

Rask behandling med blodproppløsende medisin eller utblokking (PCI – perkutan koronar intervensjon) er avgjørende for å begrense skaden.`
    },
    {
      id: 'bio2-2-4-oppg-3',
      type: 'exercise',
      title: 'Oppgave: De to kretsløpene',
      content: `Beskriv det store og lille kretsløpet. Forklar hvorfor lungearterien fører oksygenfattig blod selv om det er en arterie, og drøft betydningen av at de to kretsløpene er koblet i serie.`
    },
    {
      id: 'bio2-2-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

Blodet og blodkretsløpet utgjør kroppens transportsystem:

- **Blodplasma** (55 %) inneholder vann, plasmaproteiner, næringsstoffer, hormoner og avfallsstoffer. **Blodceller** (45 %) omfatter erytrocytter (O₂-transport), leukocytter (immunforsvar) og trombocytter (blodlevring).
- **Arterier** fører blod bort fra hjertet med høyt trykk, **kapillærer** muliggjør stoffutveksling, og **vener** returnerer blodet til hjertet med lavt trykk.
- **Det lille kretsløpet** transporterer blod mellom hjertet og lungene for gassutveksling, mens **det store kretsløpet** transporterer blod mellom hjertet og resten av kroppen.
- Spesialtilpasninger som koronarkretsløpet og portåresystemet sikrer at spesifikke organer får den blodforsyningen de trenger.`
    }
  ],
  exercises: [
    {
      id: 'bio2-2-4-ex-1',
      type: 'multiple-choice',
      number: '2.4.1',
      title: 'Blodets sammensetning',
      content: 'Hva er hematokrit et mål på?',
      options: [
        { id: 'a', text: 'Mengden plasmaproteiner i blodet', isCorrect: false },
        { id: 'b', text: 'Andelen røde blodceller av det totale blodvolumet', isCorrect: true },
        { id: 'c', text: 'Antall hvite blodceller per liter blod', isCorrect: false },
        { id: 'd', text: 'Blodets evne til å levere oksygen', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-4-ex-2',
      type: 'multiple-choice',
      number: '2.4.2',
      title: 'Erytrocytter',
      content: 'Hvor mange oksygenmolekyler kan ett hemoglobinmolekyl maksimalt transportere?',
      options: [
        { id: 'a', text: '1', isCorrect: false },
        { id: 'b', text: '2', isCorrect: false },
        { id: 'c', text: '4', isCorrect: true },
        { id: 'd', text: '8', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-4-ex-3',
      type: 'multiple-choice',
      number: '2.4.3',
      title: 'Det lille kretsløpet',
      content: 'Hvilken påstand om det lille kretsløpet er korrekt?',
      options: [
        { id: 'a', text: 'Lungearteriene fører oksygenrikt blod til lungene', isCorrect: false },
        { id: 'b', text: 'Lungevenene fører oksygenfattig blod til venstre forkammer', isCorrect: false },
        { id: 'c', text: 'Lungearteriene fører oksygenfattig blod til lungene', isCorrect: true },
        { id: 'd', text: 'Blodet pumpes fra venstre hjertekammer til lungene', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-4-ex-4',
      type: 'classic',
      number: '2.4.4',
      title: 'Blodkarenes struktur',
      content: 'Sammenlign oppbygningen av arterier, kapillærer og vener. Forklar hvordan strukturen til hvert kar er tilpasset dets funksjon i sirkulasjonssystemet.',
      hints: [
        'Beskriv veggtykkelse, elastisitet og spesielle strukturer for hvert kartype.',
        'Tenk på trykket blodet utsettes for i de ulike karene.',
        'Kapillærer har spesielt tynne vegger – hvorfor er dette viktig for funksjonen?'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'bio2-2-4-ex-5',
      type: 'classic',
      number: '2.4.5',
      title: 'Koronarkretsløpet',
      content: 'Beskriv koronarkretsløpet og forklar dets betydning for hjertets funksjon. Drøft hvordan åreforkalkning kan føre til hjerteinfarkt og hvilke risikofaktorer som øker sannsynligheten for dette.',
      hints: [
        'Koronararteriene utgår fra aorta og forsyner selve hjertemuskelen.',
        'Åreforkalkning er en gradvis prosess der plakk bygges opp i arterieveggen.',
        'Risikofaktorer inkluderer røyking, høyt blodtrykk, høyt kolesterol, diabetes og fysisk inaktivitet.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    }
  ]
};

// ============================================================================
// Kapittel 2.5: Gassutveksling i lungene
// ============================================================================

export const CHAPTER_BIOLOGI_2_2_5: TextbookChapter = {
  id: 'biologi-2-2-5',
  courseId: 'biologi-2',
  chapterNumber: '2.5',
  title: 'Gassutveksling i lungene',
  description: 'Lungenes oppbygning, alveoler, diffusjon og ventilasjon.',
  estimatedTime: 25,
  competenceGoals: ['beskrive gassutveksling'],
  content: [
    {
      id: 'bio2-2-5-intro',
      type: 'text',
      title: 'Gassutveksling i lungene',
      content: `# Gassutveksling i lungene

Respirasjonssystemet sørger for at kroppen får tilført oksygen (O₂) og kvitter seg med karbondioksid (CO₂). Lungene er det sentrale organet i dette systemet, og det er her gassutvekslingen mellom luft og blod finner sted. Prosessen er avhengig av en effektiv ventilasjon (pusting) som fornyer luften i lungene, og en stor overflate for diffusjon av gasser mellom alveoler og blodkapillærer.

I dette kapittelet skal vi se på lungenes oppbygning, mekanismene bak ventilasjon, og hvordan gassutvekslingen foregår på molekylært nivå.`
    },
    {
      id: 'bio2-2-5-teori-1',
      type: 'text',
      title: 'Lungenes oppbygning',
      content: `## Lungenes oppbygning

Luftveiene kan deles inn i øvre og nedre luftveier:

**Øvre luftveier**: Nese/munn, svelg og strupehodet (larynx). Luften varmes opp, fuktes og renses for partikler av slimhinnen og flimmerhårene her.

**Nedre luftveier** og lungene:
- **Luftrøret (trakea)**: Et ca. 12 cm langt rør forsterket med C-formede bruskringer som holder det åpent.
- **Bronkier**: Luftrøret deler seg i to **hovedbronkier** (én til hver lunge), som videre forgreiner seg til stadig mindre **bronkier** og **bronkioler**.
- **Alveoler (lungeblærer)**: De minste bronkiolene (terminale og respiratoriske bronkioler) ender i tynne, drueklaseformede utposninger kalt alveoler. Det er i alveolene gassutvekslingen skjer.

Lungene inneholder ca. **300–500 millioner alveoler**, som til sammen gir en gassutvekslingsflate på ca. **70–100 m²** – omtrent på størrelse med en halv tennisbane.

Hver alveole er omgitt av et tett nettverk av **kapillærer**. Barrieren mellom luften i alveolen og blodet i kapillæren – kalt den **alveolokapillære membranen** – er ekstremt tynn (ca. 0,5 μm). Denne barrieren består av:
1. Alveolepitelet (type I-pneumocytter) – svært flate celler
2. En felles basalmembran
3. Kapillærendotelet

Alveolenes innside er dekket av et tynt lag **surfaktant**, et fosfolipidholdig stoff som reduserer overflatespenningen og hindrer alveolene i å kollapse under utpust. Surfaktant produseres av **type II-pneumocytter**.`
    },
    {
      id: 'bio2-2-5-def-1',
      type: 'definition',
      title: 'Alveoler',
      content: `**Alveoler** (lungeblærer) er små, tynnveggede, drueklaseformede utposninger i enden av de respiratoriske bronkiolene. De utgjør gassutvekslingsflatene i lungene. Hver alveole er omgitt av kapillærer, og den ekstremt tynne alveolokapillære membranen (ca. 0,5 μm) muliggjør rask diffusjon av O₂ og CO₂. Lungene inneholder ca. 300–500 millioner alveoler med en samlet overflate på 70–100 m².`
    },
    {
      id: 'bio2-2-5-eks-1',
      type: 'example',
      title: 'Eksempel: Premature barn og surfaktantmangel',
      content: `**Eksempel: Premature barn og surfaktantmangel**

Surfaktant begynner å produseres av type II-pneumocytter fra ca. uke 24 i svangerskapet, men tilstrekkelige mengder er normalt ikke til stede før uke 34–36.

Barn født for tidlig (premature) kan derfor ha **surfaktantmangel**, noe som fører til tilstanden **respiratory distress syndrome (RDS)**:

1. Uten surfaktant øker overflatespenningen i alveolene kraftig.
2. Alveolene har en tendens til å kollapse under utpust (**atelektase**).
3. Det kreves mye større kraft for å blåse alveolene opp igjen ved neste innpust.
4. Barnet bruker enorme mengder energi på å puste, og gassutvekslingen blir svært ineffektiv.
5. Resultatet er oksygenmangel (hypoksi) og opphopning av CO₂.

**Behandling**: Premature barn med RDS kan behandles med kunstig surfaktant som tilføres direkte i lungene gjennom et trakealrør. I tillegg gis ofte respiratorstøtte med positivt luftveistrykk (CPAP) for å holde alveolene åpne. Kvinner med truende prematur fødsel kan også behandles med kortikosteroider, som stimulerer fosterets egenproduksjon av surfaktant.`
    },
    {
      id: 'bio2-2-5-oppg-1',
      type: 'exercise',
      title: 'Oppgave: Lungenes oppbygning',
      content: `Beskriv luftens vei fra nesehulen til alveolene. Forklar hvilke tilpasninger alveolene har for effektiv gassutveksling, og beskriv surfaktantens funksjon.`
    },
    {
      id: 'bio2-2-5-teori-2',
      type: 'text',
      title: 'Ventilasjon',
      content: `## Ventilasjon

**Ventilasjon** (pusting) er den mekaniske prosessen som fornyer luften i lungene. Den drives av trykkforskjeller mellom lungene og omgivelsene og styres av respirasjonsmuskulaturen.

**Innpust (inspirasjon)**:
- **Mellomgulvet (diafragma)** trekker seg sammen og flater ut, slik at brysthulen utvides nedover
- De **ytre mellomribbeinsmusklene** løfter ribbeina utover og oppover, slik at brysthulen utvides til sidene og fremover
- Volumet i brysthulen øker, og trykket i lungene (intrapulmonalt trykk) synker under atmosfæretrykket
- Luft strømmer inn i lungene fordi luften beveger seg fra høyere til lavere trykk
- Normal innpust er en **aktiv prosess** som krever muskelarbeid

**Utpust (ekspirasjon)**:
- I hvile er utpust en **passiv prosess**: mellomgulvet og de ytre mellomribbeinsmusklene slapper av
- De elastiske lungene og brystveggen trekker seg tilbake til hvilestilling (som en utstrakt strikk)
- Volumet i brysthulen minsker, trykket i lungene øker over atmosfæretrykket, og luft presses ut
- Ved aktiv (tvungen) utpust bidrar **de indre mellomribbeinsmusklene** og **bukmuskler** til å presse luft ut raskere

**Lungevolumer og -kapasiteter**:
- **Tidalvolum**: Mengden luft som pustes inn og ut ved normal rolig pusting (ca. 0,5 L)
- **Inspiratorisk reservevolum**: Ekstra luft som kan pustes inn etter normal innpust (ca. 3,0 L)
- **Ekspiratorisk reservevolum**: Ekstra luft som kan presses ut etter normal utpust (ca. 1,1 L)
- **Residualvolum**: Luft som alltid blir igjen i lungene og ikke kan pustes ut (ca. 1,2 L)
- **Vitalkapasitet**: Maksimal mengde luft som kan pustes ut etter maksimal innpust (ca. 4,6 L)`
    },
    {
      id: 'bio2-2-5-def-2',
      type: 'definition',
      title: 'Vitalkapasitet',
      content: `**Vitalkapasitet** er den maksimale mengden luft en person kan puste ut etter en maksimal innpust. Den beregnes som summen av tidalvolum, inspiratorisk reservevolum og ekspiratorisk reservevolum. Normal vitalkapasitet er ca. 4,6 L for voksne menn og ca. 3,1 L for voksne kvinner, men varierer med alder, kjønn, kroppsstørrelse og fysisk form. Vitalkapasiteten måles med spirometri og brukes i diagnostikk av lungesykdommer.`
    },
    {
      id: 'bio2-2-5-eks-2',
      type: 'example',
      title: 'Eksempel: Trykkendringer under pusting',
      content: `**Eksempel: Trykkendringer under pusting**

Ventilasjon drives av trykkforskjeller. La oss se på de nøyaktige trykkendringene under en normal pustesyklus:

**Atmosfæretrykket** ved havnivå er ca. 760 mmHg (101,3 kPa). Vi bruker dette som referansepunkt.

**Under innpust:**
1. Diafragma og ytre mellomribbeinsmuskulatur kontraherer
2. Volumet i brysthulen øker med ca. 0,5 L (tidalvolum)
3. Intrapulmonalt trykk synker til ca. 758 mmHg (−2 mmHg relativt til atmosfæren)
4. Trykkgradienten driver luft inn i lungene
5. Når lungene er fylt, utjevnes trykket til 760 mmHg igjen

**Under utpust:**
1. Respirasjonsmusklene slapper av
2. Elastiske krefter i lungevev og brystveggen komprimerer lungene
3. Intrapulmonalt trykk stiger til ca. 762 mmHg (+2 mmHg)
4. Luft strømmer ut av lungene
5. Trykket utjevnes igjen

Selv om trykkforskjellene er små (bare ±2 mmHg), er de tilstrekkelige til å flytte ca. 0,5 L luft inn og ut av lungene ca. 12–15 ganger per minutt i hvile. Det gir en **ventilasjon** på ca. 6–7,5 L/min.`
    },
    {
      id: 'bio2-2-5-oppg-2',
      type: 'exercise',
      title: 'Oppgave: Ventilasjon',
      content: `Forklar mekanismene bak innpust og utpust. Beskriv hvilke muskler som er involvert, og forklar hvorfor innpust er en aktiv prosess mens normal utpust er passiv.`
    },
    {
      id: 'bio2-2-5-teori-3',
      type: 'text',
      title: 'Gassutveksling ved diffusjon',
      content: `## Gassutveksling ved diffusjon

Gassutvekslingen i lungene skjer ved **diffusjon** – gasser beveger seg fra et område med høyt partialtrykk til et område med lavt partialtrykk. Diffusjonen drives av trykkforskjeller (partialtrykksgradienter) mellom alveolluften og blodet i kapillærene.

**Partialtrykk** er det trykket en enkelt gass utøver i en gassblanding. I alveolluften er forholdene omtrent slik:
- Partialtrykket for O₂ (pO₂) ≈ 105 mmHg
- Partialtrykket for CO₂ (pCO₂) ≈ 40 mmHg

I blodet som ankommer lungene fra det store kretsløpet (oksygenfattig):
- pO₂ ≈ 40 mmHg
- pCO₂ ≈ 46 mmHg

**Oksygentransport inn i blodet**:
- Trykkgradient for O₂: 105 − 40 = 65 mmHg (fra alveol til blod)
- O₂ diffunderer raskt gjennom den alveolokapillære membranen og inn i blodet
- I blodet binder O₂ seg til hemoglobin i erytrocyttene

**Karbondioksidtransport ut av blodet**:
- Trykkgradient for CO₂: 46 − 40 = 6 mmHg (fra blod til alveol)
- Selv om gradienten er mindre enn for O₂, diffunderer CO₂ ca. 20 ganger raskere fordi det er mer løselig i vann/vev
- CO₂ frigjøres fra blodet og pustes ut med utåndingsluften

**Faktorer som påvirker diffusjonsraten** (Ficks lov):
- **Overflatearealet**: Større areal → raskere diffusjon (alveolenes enorme overflate)
- **Membrantykkelse**: Tynnere membran → raskere diffusjon (den alveolokapillære membranen er bare 0,5 μm)
- **Partialtrykksgradienten**: Større gradient → raskere diffusjon
- **Gassens løselighet**: Mer løselig gass → raskere diffusjon (CO₂ > O₂)`
    },
    {
      id: 'bio2-2-5-def-3',
      type: 'definition',
      title: 'Partialtrykk',
      content: `**Partialtrykk** er det trykket en enkelt gasskomponent utøver i en gassblanding, og det er proporsjonalt med gassens andel av blandingen. I henhold til Daltons lov er totaltrykket lik summen av alle gassenes partialtrykk. For eksempel utgjør O₂ ca. 21 % av atmosfæren, og ved atmosfæretrykk 760 mmHg er partialtrykknet for O₂ ca. 160 mmHg. Partialtrykksgradienten mellom to områder er drivkraften for diffusjon av gasser.`
    },
    {
      id: 'bio2-2-5-eks-3',
      type: 'example',
      title: 'Eksempel: Gassutveksling i store høyder',
      content: `**Eksempel: Gassutveksling i store høyder**

Luftens sammensetning er den samme i alle høyder (21 % O₂), men totaltrykket – og dermed partialtrykkene – synker med økende høyde. La oss sammenligne:

**Ved havnivå (0 m)**:
- Atmosfæretrykk: 760 mmHg
- pO₂ i luft: 760 × 0,21 = 160 mmHg
- pO₂ i alveoler: ca. 105 mmHg
- Gradient alveol → blod: 105 − 40 = 65 mmHg

**På toppen av Mount Everest (8 849 m)**:
- Atmosfæretrykk: ca. 253 mmHg
- pO₂ i luft: 253 × 0,21 = 53 mmHg
- pO₂ i alveoler: ca. 35 mmHg
- Gradient alveol → blod: svært liten eller negativ

**Konsekvenser i store høyder:**
- Lavere pO₂ i alveolene gir dårligere oksygendiffusjon til blodet
- Kroppen kompenserer ved å øke ventilasjonen (hyperventilering)
- Over tid produseres mer erytropoietin (EPO), som stimulerer produksjonen av røde blodceller
- Økt hemoglobinkonsentrasjon forbedrer blodets oksygenbærende kapasitet
- Denne tilpasningsprosessen kalles **akklimatisering** og tar dager til uker

Fjellklatrere på svært store høyder kan oppleve **høydesyke** (akutt fjellsyke) med hodepine, kvalme og forvirring dersom de stiger for raskt uten tilstrekkelig akklimatisering.`
    },
    {
      id: 'bio2-2-5-oppg-3',
      type: 'exercise',
      title: 'Oppgave: Diffusjon',
      content: `Forklar hvordan gassutvekslingen i alveolene drives av partialtrykksgradienter. Beskriv de fire faktorene i Ficks lov som påvirker diffusjonsraten, og gi eksempler på hvordan lungene er tilpasset for å maksimere gassutvekslingen.`
    },
    {
      id: 'bio2-2-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

Gassutveksling i lungene er avhengig av effektiv ventilasjon og diffusjon:

- **Lungenes oppbygning**: Luftveiene forgreiner seg fra luftrøret til bronkier, bronkioler og ender i ca. 300–500 millioner alveoler med en samlet overflate på 70–100 m². Surfaktant reduserer overflatespenningen.
- **Ventilasjon** drives av trykkforskjeller skapt av respirasjonsmuskulaturen (diafragma og mellomribbeinsmusklene). Innpust er aktivt, normal utpust er passivt.
- **Gassutveksling** skjer ved diffusjon over den alveolokapillære membranen. O₂ diffunderer fra alveoler (pO₂ ≈ 105 mmHg) til blodet (pO₂ ≈ 40 mmHg), og CO₂ diffunderer motsatt vei.
- **Ficks lov** viser at diffusjonsraten avhenger av overflatereal, membrantykkelse, partialtrykksgradienten og gassens løselighet. Lungene er optimalt tilpasset alle disse faktorene.`
    }
  ],
  exercises: [
    {
      id: 'bio2-2-5-ex-1',
      type: 'multiple-choice',
      number: '2.5.1',
      title: 'Antall alveoler',
      content: 'Omtrent hvor mange alveoler inneholder lungene?',
      options: [
        { id: 'a', text: 'Ca. 30 000', isCorrect: false },
        { id: 'b', text: 'Ca. 3 millioner', isCorrect: false },
        { id: 'c', text: 'Ca. 300–500 millioner', isCorrect: true },
        { id: 'd', text: 'Ca. 3 milliarder', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-5-ex-2',
      type: 'multiple-choice',
      number: '2.5.2',
      title: 'Ventilasjon',
      content: 'Hva skjer med trykket i lungene under innpust?',
      options: [
        { id: 'a', text: 'Det øker over atmosfæretrykket', isCorrect: false },
        { id: 'b', text: 'Det synker under atmosfæretrykket', isCorrect: true },
        { id: 'c', text: 'Det forblir likt atmosfæretrykket', isCorrect: false },
        { id: 'd', text: 'Det svinger uregelmessig', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-5-ex-3',
      type: 'multiple-choice',
      number: '2.5.3',
      title: 'Partialtrykk',
      content: 'Hva er partialtrykkgradienten for O₂ fra alveoler til det innkommende blodet under normale forhold?',
      options: [
        { id: 'a', text: 'Ca. 6 mmHg', isCorrect: false },
        { id: 'b', text: 'Ca. 25 mmHg', isCorrect: false },
        { id: 'c', text: 'Ca. 65 mmHg', isCorrect: true },
        { id: 'd', text: 'Ca. 105 mmHg', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-5-ex-4',
      type: 'classic',
      number: '2.5.4',
      title: 'Lungevolumer',
      content: 'Forklar hva tidalvolum, vitalkapasitet og residualvolum er. En person har et tidalvolum på 0,5 L og en pustefrekvens på 14 per minutt. Beregn ventilasjon per minutt. Forklar hvorfor ikke all innpustet luft deltar i gassutveksling (anatomisk dødrom).',
      hints: [
        'Ventilasjon per minutt = tidalvolum × pustefrekvens.',
        'Anatomisk dødrom er ca. 150 mL – luft som fyller luftveiene der det ikke skjer gassutveksling.',
        'Alveolær ventilasjon = (tidalvolum − dødrom) × pustefrekvens.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'bio2-2-5-ex-5',
      type: 'classic',
      number: '2.5.5',
      title: 'Høydetilpasning',
      content: 'Forklar hvorfor gassutvekslingen i lungene blir dårligere i store høyder. Beskriv de fysiologiske tilpasningene kroppen gjør under akklimatisering, og forklar rollen til erytropoietin (EPO).',
      hints: [
        'I store høyder er atmosfæretrykket lavere, noe som gir lavere pO₂ i alveolene.',
        'Kroppen kompenserer på kort sikt med hyperventilering og økt hjertefrekvens.',
        'EPO fra nyrene stimulerer beinmargen til å produsere flere røde blodceller.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    }
  ]
};

// ============================================================================
// Kapittel 2.6: Transport av O₂ og CO₂
// ============================================================================

export const CHAPTER_BIOLOGI_2_2_6: TextbookChapter = {
  id: 'biologi-2-2-6',
  courseId: 'biologi-2',
  chapterNumber: '2.6',
  title: 'Transport av O₂ og CO₂',
  description: 'Hemoglobin, oksygenbindingskurve og Bohr-effekten.',
  estimatedTime: 25,
  competenceGoals: ['forklare gasstransport i blodet'],
  content: [
    {
      id: 'bio2-2-6-intro',
      type: 'text',
      title: 'Transport av O₂ og CO₂',
      content: `# Transport av O₂ og CO₂

Etter at oksygen har diffundert fra alveolene inn i blodet og karbondioksid fra blodet til alveolene, må gassene transporteres effektivt gjennom sirkulasjonssystemet. Oksygen må fraktes fra lungene til alle kroppens celler, mens karbondioksid – et avfallsprodukt fra cellerespirasjonen – må fraktes fra cellene tilbake til lungene for utskillelse.

Transporten av disse gassene involverer spesialiserte mekanismer. O₂ transporteres hovedsakelig bundet til hemoglobin, mens CO₂ fraktes på tre ulike måter. I dette kapittelet skal vi se nærmere på hemoglobinets egenskaper, oksygenbindingskurven og den viktige Bohr-effekten.`
    },
    {
      id: 'bio2-2-6-teori-1',
      type: 'text',
      title: 'Oksygentransport og hemoglobin',
      content: `## Oksygentransport og hemoglobin

Oksygen transporteres i blodet på to måter:
- **Løst i plasma** (ca. 1,5 %): Kun en liten mengde O₂ er fysisk løst i plasmaet fordi O₂ har lav løselighet i vann.
- **Bundet til hemoglobin** (ca. 98,5 %): Hemoglobin (Hb) i de røde blodcellene er den viktigste oksygentransportøren.

**Hemoglobinets struktur**:
- Et hemoglobinmolekyl er et protein som består av **fire polypeptidkjeder** – to alfa-kjeder (α) og to beta-kjeder (β)
- Hver kjede inneholder en **hemgruppe** med et sentralt **jernion (Fe²⁺)**
- Hvert Fe²⁺-ion kan reversibelt binde ett O₂-molekyl
- Hvert hemoglobinmolekyl kan dermed binde maksimalt **4 O₂-molekyler**

**Bindingsreaksjonen:**

Hb + 4 O₂ ⇌ Hb(O₂)₄

Hemoglobin som har bundet oksygen kalles **oksyhemoglobin** (HbO₂) og har en klar rød farge. Hemoglobin uten oksygen kalles **deoksyhemoglobin** og har en mørkere, blårød farge.

**Kooperativ binding**: Hemoglobin viser **kooperativ binding** – når det første O₂-molekylet binder seg, endres hemoglobinets konformasjon slik at det blir lettere for de neste O₂-molekylene å binde seg. Tilsvarende, når det første O₂ frigjøres, blir det lettere å frigjøre de resterende. Denne egenskapen er avgjørende for effektiv O₂-levering.

**Metningsprosent** angir hvor stor andel av hemoglobinets bindingsseter som er besatt av O₂. Ved 100 % metning er alle fire seter besatt.`
    },
    {
      id: 'bio2-2-6-def-1',
      type: 'definition',
      title: 'Kooperativ binding',
      content: `**Kooperativ binding** er en egenskap ved hemoglobin der binding av det første oksygenmolekylet til en av de fire underenhetene forårsaker en konformasjonsendring som øker affiniteten (bindingsevnen) til de øvrige underenhetene for oksygen. Tilsvarende reduserer frigjøring av det første oksygenmolekylet affiniteten til de gjenværende underenhetene. Kooperativ binding gir hemoglobinets oksygenbindingskurve sin karakteristiske S-form (sigmoid kurve) og gjør hemoglobin til en svært effektiv oksygentransportør.`
    },
    {
      id: 'bio2-2-6-eks-1',
      type: 'example',
      title: 'Eksempel: Oksygenmetning i ulike vev',
      content: `**Eksempel: Oksygenmetning i ulike vev**

Hemoglobinets oksygenmetning varierer avhengig av pO₂ i det omkringliggende vevet:

**I lungene (pO₂ ≈ 105 mmHg):**
- Hemoglobinet er ca. 98 % mettet med oksygen
- Nesten alle bindingsseter er besatt
- Blodet forlater lungene fulladet med O₂

**I hvilemuskulatur (pO₂ ≈ 40 mmHg):**
- Hemoglobinmetningen synker til ca. 75 %
- Hemoglobin har avgitt ca. 25 % av sin oksygenlast
- Vevene tar opp det de trenger i hvile

**I aktivt arbeidende muskulatur (pO₂ ≈ 20 mmHg):**
- Hemoglobinmetningen synker til ca. 35 %
- Hemoglobin har avgitt ca. 65 % av sin oksygenlast
- Mye mer O₂ leveres til vev med høyt forbruk

Forskjellen mellom oksygeninnholdet i arterielt og venøst blod kalles **arteriovenøs oksygenforskjell**. I hvile er denne ca. 5 mL O₂ per 100 mL blod, men under hard fysisk aktivitet kan den øke til ca. 15 mL O₂ per 100 mL blod.`
    },
    {
      id: 'bio2-2-6-oppg-1',
      type: 'exercise',
      title: 'Oppgave: Hemoglobin',
      content: `Beskriv hemoglobinets struktur og forklar hvordan kooperativ binding bidrar til at hemoglobin er en effektiv oksygentransportør. Hvorfor er det gunstig at hemoglobinets affinitet for O₂ endrer seg?`
    },
    {
      id: 'bio2-2-6-teori-2',
      type: 'text',
      title: 'Oksygenbindingskurven',
      content: `## Oksygenbindingskurven

Oksygenbindingskurven (dissosiasjonskurven) viser forholdet mellom pO₂ og hemoglobinets oksygenmetning. Kurven har en karakteristisk **S-form (sigmoid form)** som skyldes hemoglobinets kooperative binding.

**Kurven kan deles inn i tre områder:**

1. **Bratt del (pO₂ 10–40 mmHg)**: Små endringer i pO₂ gir store endringer i oksygenmetning. Dette er det området som er relevant for vevene – det betyr at hemoglobin effektivt frigjør O₂ selv ved moderate fall i pO₂.

2. **Flatere del (pO₂ 40–70 mmHg)**: Overgangsområdet der hemoglobinet begynner å nærme seg full metning.

3. **Platå (pO₂ > 70 mmHg)**: Hemoglobinet er nesten fullstendig mettet. Selv ved store økninger i pO₂ (f.eks. ved O₂-tilskudd) øker metningen bare marginalt. Platået sikrer at hemoglobinet er godt mettet i lungene selv om pO₂ varierer noe.

**Den fysiologiske betydningen av S-formen:**
- I lungene (pO₂ ≈ 105 mmHg) befinner vi oss på platået – hemoglobinet laster opp oksygen effektivt og er nesten fullt mettet
- I vevene (pO₂ 20–40 mmHg) befinner vi oss på den bratte delen – hemoglobinet avgir oksygen effektivt
- Vev med høyt oksygenforbruk (lav pO₂) får levert proporsjonalt mer oksygen

Til sammenligning ville et transportmolekyl med en lineær (rett) bindingskurve vært mye dårligere – det ville lastet opp oksygen like godt i lungene, men avgitt det mye mindre effektivt i vevene.`
    },
    {
      id: 'bio2-2-6-def-2',
      type: 'definition',
      title: 'Oksygenbindingskurven',
      content: `**Oksygenbindingskurven** (oksygen-hemoglobin-dissosiasjonskurven) er en grafisk fremstilling av forholdet mellom oksygenens partialtrykk (pO₂, x-aksen) og hemoglobinets prosentvise oksygenmetning (y-aksen). Kurven har en sigmoid (S-formet) profil som skyldes hemoglobinets kooperative binding. Kurvens form sikrer effektiv opplasting av oksygen i lungene (platådelen) og effektiv frigjøring av oksygen i vevene (den bratte delen).`
    },
    {
      id: 'bio2-2-6-eks-2',
      type: 'example',
      title: 'Eksempel: Karbonmonoksidforgiftning',
      content: `**Eksempel: Karbonmonoksidforgiftning**

Karbonmonoksid (CO) er en fargeløs, luktfri gass som er et godt eksempel på hvorfor hemoglobinets egenskaper er livsviktige – og hva som skjer når de forstyrres.

**CO har ca. 200–250 ganger høyere affinitet for hemoglobin enn O₂.** Når CO binder seg til et hemoglobins jernion, dannes **karboksyhemoglobin (HbCO)**:

Hb + CO → HbCO

**Problemer med CO-binding:**
1. CO besetter O₂-bindingsseter og reduserer hemoglobinets oksygentransportkapasitet direkte.
2. Enda verre: CO-binding til én underenhet øker affiniteten til de gjenværende underenhetene for O₂. Hemoglobinet holder altså hardere på det resterende oksy- genet og avgir det dårligere i vevene.
3. Oksygenbindingskurven forskyves til **venstre** – hemoglobinet metter seg ved lavere pO₂, men frigjør O₂ dårligere.

**Konsekvenser:**
- Allerede 0,1 % CO i innåndingsluften kan gi en HbCO-konsentrasjon på 50 %
- Symptomer: hodepine, svimmelhet, forvirring, bevisstløshet
- Behandling: Høy konsentrasjon av O₂ (100 % oksygen) eller hyperbar oksygenbehandling for å fortrenge CO fra hemoglobin

CO-forgiftning er en viktig årsak til forgiftningsdødsfall, ofte forbundet med dårlig ventilerte peisovner eller eksponering for bileksos i lukkede rom.`
    },
    {
      id: 'bio2-2-6-oppg-2',
      type: 'exercise',
      title: 'Oppgave: Oksygenbindingskurven',
      content: `Beskriv oksygenbindingskurven og forklar hvorfor dens S-form er fysiologisk gunstig. Hva ville konsekvensene vært dersom kurven var lineær i stedet for sigmoid?`
    },
    {
      id: 'bio2-2-6-teori-3',
      type: 'text',
      title: 'Bohr-effekten og CO₂-transport',
      content: `## Bohr-effekten og CO₂-transport

**Bohr-effekten** beskriver hvordan endringer i pH og CO₂-konsentrasjon påvirker hemoglobinets affinitet for oksygen. Den er oppkalt etter den danske fysiologen Christian Bohr.

**Mekanisme:**
- Økt CO₂-konsentrasjon og/eller lavere pH (surere miljø) **reduserer** hemoglobinets affinitet for O₂
- Oksygenbindingskurven forskyves **til høyre**
- Hemoglobin frigjør mer oksygen ved et gitt pO₂-nivå
- Omvendt gir lavere CO₂ og høyere pH økt affinitet – kurven forskyves til venstre

**Fysiologisk betydning:**
- I **aktivt vev** (muskler, hjerne) produseres mye CO₂ fra cellerespirasjonen. CO₂ reagerer med vann og danner karbonsyre, som senker pH:

CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻

- Den lokale økningen i CO₂ og fallet i pH gjør at hemoglobinet frigjør mer O₂ nettopp der det trengs mest
- I **lungene** er CO₂-konsentrasjonen lav og pH høyere – hemoglobinet tar opp O₂ mer effektivt

**Temperatur og 2,3-BPG** påvirker også kurven:
- **Økt temperatur** (f.eks. i arbeidende muskler) forskyver kurven til høyre → mer O₂ frigjøres
- **2,3-bisfosfoglyserat (2,3-BPG)** i erytrocyttene binder til deoksyhemoglobin og stabiliserer den oksygenfrigjørende formen → kurven forskyves til høyre

**CO₂-transport i blodet** skjer på tre måter:
1. **Løst i plasma** (ca. 7–10 %): CO₂ er mer løselig i vann enn O₂
2. **Som bikarbonat (HCO₃⁻)** (ca. 70 %): CO₂ omdannes til HCO₃⁻ i erytrocyttene av enzymet **karbanhydrase**. HCO₃⁻ transporteres ut i plasmaet (mot Cl⁻ – «kloridskiftet»)
3. **Bundet til hemoglobin** (ca. 20–23 %): CO₂ binder seg til aminogrupper på hemoglobinkjedene og danner **karbaminohemoglobin** (HbCO₂) – merk at dette er forskjellig fra CO-bindingsstedet`
    },
    {
      id: 'bio2-2-6-def-3',
      type: 'definition',
      title: 'Bohr-effekten',
      content: `**Bohr-effekten** er det fenomenet at økt CO₂-konsentrasjon og/eller lavere pH reduserer hemoglobinets affinitet for oksygen, noe som forskyver oksygenbindingskurven til høyre. Effekten sikrer at hemoglobin frigjør mer oksygen til vev med høy metabolsk aktivitet, der CO₂-produksjonen er stor og pH er lavere. I lungene, der CO₂-nivået er lavt og pH er høyere, fremmes oksygenopplasting. Bohr-effekten er dermed en viktig mekanisme for å tilpasse oksygenleveransen til vevenes behov.`
    },
    {
      id: 'bio2-2-6-eks-3',
      type: 'example',
      title: 'Eksempel: Bohr-effekten under trening',
      content: `**Eksempel: Bohr-effekten under trening**

Under hard fysisk trening illustreres Bohr-effektens betydning tydelig:

**I hvile:**
- Muskelcellenes pO₂ ≈ 40 mmHg, pCO₂ ≈ 46 mmHg, pH ≈ 7,40
- Hemoglobinmetning i venøst blod ≈ 75 %
- Ca. 25 % av oksygenet er frigjort til vevene

**Under hard trening:**
- Økt cellerespirasjon produserer mer CO₂ → pCO₂ i arbeidende muskler stiger til ca. 60–70 mmHg
- Melkesyre produseres ved anaerob glykolyse → pH faller til ca. 7,2
- Temperaturen i musklene øker til ca. 40–41 °C
- 2,3-BPG-nivåene øker i erytrocyttene

**Kombinert effekt:**
- Alle disse faktorene forskyver oksygenbindingskurven kraftig til høyre
- Hemoglobinmetningen i venøst blod fra arbeidende muskler kan falle til ca. 20–25 %
- Ca. 75 % av oksygenet frigjøres til muskulaturen – tre ganger mer enn i hvile!

**I lungene** er forholdene omvendt:
- CO₂ er blåst ut, pH er normalisert, temperaturen er lavere
- Oksygenbindingskurven forskyves tilbake mot venstre
- Hemoglobinet tar effektivt opp ny O₂

Bohr-effekten er altså en elegant autoregulering: vev som forbruker mye oksygen og produserer mye CO₂ får automatisk levert mer oksygen.`
    },
    {
      id: 'bio2-2-6-oppg-3',
      type: 'exercise',
      title: 'Oppgave: Bohr-effekten',
      content: `Forklar Bohr-effekten og dens fysiologiske betydning. Beskriv hvordan endringer i CO₂, pH og temperatur påvirker oksygenbindingskurven, og forklar hvorfor dette er gunstig for oksygenleveransen under fysisk aktivitet.`
    },
    {
      id: 'bio2-2-6-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

Transport av O₂ og CO₂ i blodet er avhengig av hemoglobinets spesielle egenskaper:

- **O₂-transport**: Ca. 98,5 % av oksygenet transporteres bundet til hemoglobin (Hb). Hvert Hb-molekyl kan binde 4 O₂. Kooperativ binding gjør opplasting og frigjøring effektiv.
- **Oksygenbindingskurven** er sigmoid (S-formet): Platået sikrer god opplasting i lungene, den bratte delen sikrer effektiv frigjøring i vevene.
- **Bohr-effekten**: Økt CO₂, lavere pH og høyere temperatur forskyver kurven til høyre → mer O₂ frigjøres i aktivt vev. Omvendt i lungene.
- **CO₂-transport**: Ca. 70 % som bikarbonat (HCO₃⁻), ca. 20–23 % som karbaminohemoglobin, ca. 7–10 % løst i plasma. Enzymet karbanhydrase katalyserer omdanningen av CO₂ til HCO₃⁻.
- CO har 200–250× høyere affinitet for Hb enn O₂, noe som gjør karbonmonoksidforgiftning svært farlig.`
    }
  ],
  exercises: [
    {
      id: 'bio2-2-6-ex-1',
      type: 'multiple-choice',
      number: '2.6.1',
      title: 'Oksygentransport',
      content: 'Hvor stor andel av oksygenet i blodet transporteres bundet til hemoglobin?',
      options: [
        { id: 'a', text: 'Ca. 50 %', isCorrect: false },
        { id: 'b', text: 'Ca. 70 %', isCorrect: false },
        { id: 'c', text: 'Ca. 98,5 %', isCorrect: true },
        { id: 'd', text: 'Ca. 100 %', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-6-ex-2',
      type: 'multiple-choice',
      number: '2.6.2',
      title: 'Bohr-effekten',
      content: 'Hva skjer med oksygenbindingskurven når CO₂-konsentrasjonen øker?',
      options: [
        { id: 'a', text: 'Kurven forskyves til venstre – hemoglobin binder O₂ sterkere', isCorrect: false },
        { id: 'b', text: 'Kurven forskyves til høyre – hemoglobin frigjør O₂ lettere', isCorrect: true },
        { id: 'c', text: 'Kurven endres ikke – CO₂ påvirker ikke hemoglobin', isCorrect: false },
        { id: 'd', text: 'Kurven blir lineær i stedet for sigmoid', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-6-ex-3',
      type: 'multiple-choice',
      number: '2.6.3',
      title: 'CO₂-transport',
      content: 'Hva er den viktigste formen for CO₂-transport i blodet?',
      options: [
        { id: 'a', text: 'Løst i plasma', isCorrect: false },
        { id: 'b', text: 'Bundet til hemoglobin som karbaminohemoglobin', isCorrect: false },
        { id: 'c', text: 'Som bikarbonat (HCO₃⁻) i plasmaet', isCorrect: true },
        { id: 'd', text: 'Bundet til albumin i plasmaet', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-6-ex-4',
      type: 'classic',
      number: '2.6.4',
      title: 'Oksygenbindingskurven',
      content: 'Tegn en skjematisk oksygenbindingskurve og merk av lungene og vevene på kurven. Forklar hvorfor kurvens S-form er fysiologisk gunstig, og beskriv hvordan kurven forskyves ved Bohr-effekten.',
      hints: [
        'X-aksen er pO₂ (mmHg) og y-aksen er prosentvis hemoglobinmetning.',
        'Lungene befinner seg ved høyt pO₂ (platået), vevene ved lavt pO₂ (bratt del).',
        'Bohr-effekten forskyver kurven til høyre ved økt CO₂, lavere pH og høyere temperatur.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'bio2-2-6-ex-5',
      type: 'classic',
      number: '2.6.5',
      title: 'CO₂-transport og karbanhydrase',
      content: 'Beskriv de tre måtene CO₂ transporteres i blodet. Forklar rollen til enzymet karbanhydrase og beskriv kloridskiftet. Hvorfor er det viktig at CO₂ omdannes til bikarbonat?',
      hints: [
        'Karbanhydrase katalyserer reaksjonen CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻.',
        'HCO₃⁻ transporteres ut av erytrocytten i bytte mot Cl⁻ (kloridskiftet).',
        'Bikarbonat fungerer også som en viktig buffer i blodet.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    }
  ]
};

// ============================================================================
// Kapittel 2.7: Immunsystemet
// ============================================================================

export const CHAPTER_BIOLOGI_2_2_7: TextbookChapter = {
  id: 'biologi-2-2-7',
  courseId: 'biologi-2',
  chapterNumber: '2.7',
  title: 'Immunsystemet',
  description: 'Medfødt og ervervet immunitet, antistoffer og vaksinasjon.',
  estimatedTime: 30,
  competenceGoals: ['gjøre rede for immunsystemet'],
  content: [
    {
      id: 'bio2-2-7-intro',
      type: 'text',
      title: 'Immunsystemet',
      content: `# Immunsystemet

Kroppen er konstant utsatt for potensielt skadelige mikroorganismer – bakterier, virus, sopp og parasitter. Immunsystemet er kroppens forsvarssystem som beskytter oss mot infeksjoner og sykdom. Det er et komplekst nettverk av celler, vev og organer som samarbeider for å gjenkjenne og eliminere fremmede stoffer (antigener).

Immunsystemet deles tradisjonelt inn i to hoveddeler: det **medfødte** (uspesifikke) immunforsvaret og det **ervervede** (spesifikke, adaptive) immunforsvaret. Disse to systemene samarbeider tett og utfyller hverandre. I dette kapittelet skal vi se på begge delene, samt hvordan vaksinasjon utnytter immunsystemets egenskaper for å beskytte mot sykdom.`
    },
    {
      id: 'bio2-2-7-teori-1',
      type: 'text',
      title: 'Det medfødte immunforsvaret',
      content: `## Det medfødte immunforsvaret

Det medfødte immunforsvaret er kroppens førstelinjeforsvar. Det reagerer raskt (minutter til timer), er uspesifikt (reagerer likt uavhengig av patogenet) og har ingen immunologisk hukommelse.

**Fysiske og kjemiske barrierer (1. forsvarslinje)**:
- **Huden**: En effektiv fysisk barriere. Det ytterste laget (epidermis) består av døde keratiniserte celler som er vanskelige for mikroorganismer å trenge gjennom. Svette og talg inneholder antimikrobielle stoffer.
- **Slimhinner**: Dekker innvendige overflater (luftveier, fordøyelseskanal, urinveier). Produserer slim som fanger mikroorganismer. Flimmerhår i luftveiene transporterer slim og partikler oppover mot svelget.
- **Kjemiske forsvarsstoffer**: Magesyre (pH 1,5–2,5), lysozymer i tårer og spytt (bryter ned bakterievegger), defensiner (antimikrobielle peptider), samt den normale bakteriefloraen som konkurrerer med patogene mikroorganismer.

**Cellulært forsvar (2. forsvarslinje)**:
- **Fagocytter** – celler som «spiser» og bryter ned patogener:
  - **Nøytrofile granulocytter**: De vanligste hvite blodcellene, første cellene som ankommer et infeksjonssted. Kort levetid (timer til dager).
  - **Makrofager**: Store fagocytter som utvikles fra monocytter. Finnes i vev over hele kroppen. Bryter ned patogener og presenterer antigener for T-celler (bindeledd til det ervervede immunforsvaret).
  - **Dendrittiske celler**: Spesialiserte antigenpresenterende celler som aktiverer T-celler i lymfeknutene.
- **Naturlige drepeceller (NK-celler)**: Dreper virusinfiserte celler og kreftceller ved å utløse programmert celledød (apoptose).

**Betennelsesreaksjonen (inflammasjon)**:
Når vev skades eller infiseres, utløses en betennelsesreaksjon karakterisert av rødhet, varme, hevelse og smerte. Skadede celler og makrofager frigjør signalstoffer (cytokiner og histamin) som utvider blodkarene, øker gjennomblødningen og rekrutterer flere immunceller til området.

**Komplementsystemet**: Et system av over 30 plasmaproteiner som aktiveres i en kaskade. Komplementproteinene kan drepe bakterier direkte (ved å danne porer i membranen), merke patogener for fagocytose (opsonisering), og forsterke betennelsesreaksjonen.`
    },
    {
      id: 'bio2-2-7-def-1',
      type: 'definition',
      title: 'Fagocytose',
      content: `**Fagocytose** er prosessen der spesialiserte immunceller (fagocytter) omslutter, internaliserer og bryter ned fremmede partikler, mikroorganismer eller cellerester. Prosessen foregår i flere trinn: gjenkjenning og binding til patogenet, omslutting ved at cellemembranen danner utløpere (pseudopodier) rundt partikkelen, internalisering i en fagosom, fusjon med lysosomer (som inneholder nedbrytende enzymer og reaktive oksygenforbindelser), og nedbrytning av det inntatte materialet. De viktigste fagocyttene er nøytrofile granulocytter og makrofager.`
    },
    {
      id: 'bio2-2-7-eks-1',
      type: 'example',
      title: 'Eksempel: Betennelsesreaksjonen ved en splint',
      content: `**Eksempel: Betennelsesreaksjonen ved en splint**

Når du får en splint i fingeren, kan du observere det medfødte immunforsvaret i aksjon:

1. **Vevsskade**: Splinten bryter hudbarrieren og skader celler. Bakterier fra overflaten kan trenge inn i vevet.

2. **Alarmfasen**: Skadede celler frigjør signalstoffer. Mastceller i vevet frigjør **histamin**, som utvider lokale blodkar.

3. **Betennelsesreaksjon**:
   - **Rødhet og varme**: Blodkarene utvides (vasodilatasjon), og blodtilførselen til området øker
   - **Hevelse**: Kapillærene blir mer gjennomtrengelige, og plasmaproterer og væske lekker ut i vevet (ødem)
   - **Smerte**: Signalstoffene stimulerer smertereseptorer

4. **Rekruttering av immunceller**:
   - **Nøytrofile granulocytter** ankommer først (innen minutter) og begynner å fagocytere bakterier
   - **Monocytter** strømmer til og modnes til **makrofager** i vevet
   - Makrofagene bryter ned bakterier og døde celler, og rydder opp i området

5. **Puss**: Hvis infeksjonen er betydelig, dannes puss – en blanding av døde nøytrofile, døde bakterier, vevsvæske og cellerester

6. **Tilheling**: Når infeksjonen er kontrollert, avtar betennelsen, og vevet repareres

Denne prosessen er et eksempel på akutt inflammasjon – en beskyttende reaksjon som begrenser infeksjonen og setter i gang tilheling.`
    },
    {
      id: 'bio2-2-7-oppg-1',
      type: 'exercise',
      title: 'Oppgave: Det medfødte immunforsvaret',
      content: `Beskriv de fysiske og kjemiske barrierene i det medfødte immunforsvaret. Forklar hva som skjer under en betennelsesreaksjon, og beskriv rollen til nøytrofile granulocytter og makrofager.`
    },
    {
      id: 'bio2-2-7-teori-2',
      type: 'text',
      title: 'Det ervervede immunforsvaret',
      content: `## Det ervervede immunforsvaret

Det ervervede (adaptive) immunforsvaret er den tredje forsvarslinjen. Det kjennetegnes av **spesifisitet** (reagerer på bestemte antigener), **diversitet** (kan gjenkjenne millioner av ulike antigener) og **hukommelse** (gir raskere og sterkere respons ved gjentatt eksponering).

De sentrale cellene er **lymfocytter** – en type hvite blodceller som modnes i beinmargen og thymus:

**B-lymfocytter (B-celler)**:
- Modnes i **beinmargen** (bone marrow)
- Ansvarlige for den **humorale immuniteten** (antistoffmediert)
- Hver B-celle har unike **B-cellereseptorer** (BCR) på overflaten som gjenkjenner ett spesifikt antigen
- Når en B-celle aktiveres av sitt antigen (med hjelp fra T-hjelpeceller), deler den seg og differensierer til:
  - **Plasmaceller**: Produserer store mengder **antistoffer** (immunglobuliner) som sirkulerer i blodet og kroppsvæskene
  - **Hukommelses-B-celler**: Lever i årevis og gir rask respons ved ny eksponering for samme antigen

**T-lymfocytter (T-celler)**:
- Modnes i **thymus** (brissel)
- Ansvarlige for den **cellemedierte immuniteten**
- Gjenkjenner antigener som presenteres av antigenpresenterende celler (APC) via **MHC-molekyler** (major histocompatibility complex)
- Viktige typer:
  - **T-hjelpeceller (CD4⁺)**: Koordinerer immunresponsen ved å frigjøre cytokiner som aktiverer B-celler, cytotoksiske T-celler og makrofager. Er helt sentrale i immunforsvaret.
  - **Cytotoksiske T-celler (CD8⁺)**: Dreper virusinfiserte celler og kreftceller direkte ved å utløse apoptose
  - **Regulatoriske T-celler**: Demper immunresponsen etter at infeksjonen er bekjempet og forhindrer autoimmune reaksjoner
  - **Hukommelses-T-celler**: Gir langvarig immunologisk hukommelse

**Primær vs. sekundær immunrespons**:
- **Primær respons**: Første gang kroppen møter et antigen. Tar 7–14 dager å utvikle. Produserer hovedsakelig IgM-antistoffer.
- **Sekundær respons**: Ved gjentatt eksponering for samme antigen. Hukommelsesceller aktiveres raskt (1–3 dager). Responsen er sterkere, raskere og produserer hovedsakelig IgG-antistoffer med høyere affinitet.`
    },
    {
      id: 'bio2-2-7-def-2',
      type: 'definition',
      title: 'Antistoffer',
      content: `**Antistoffer** (immunglobuliner, Ig) er Y-formede proteiner produsert av plasmaceller (aktiverte B-lymfocytter). Hvert antistoff har to **antigenbindingsseter** i de variable regionene (Fab) som spesifikt gjenkjenner og binder et bestemt antigen, og en **konstantregion** (Fc) som bestemmer antistoffets klasse og funksjon. Det finnes fem hovedklasser: **IgG** (vanligst i blodet, krysser placenta), **IgA** (i slimhinnesekret og morsmelk), **IgM** (første antistofftype som produseres), **IgE** (involvert i allergier og parasittforsvar) og **IgD** (fungerer som B-cellereseptor). Antistoffer nøytraliserer patogener, merker dem for fagocytose og aktiverer komplementsystemet.`
    },
    {
      id: 'bio2-2-7-eks-2',
      type: 'example',
      title: 'Eksempel: HIV og immunsvikt',
      content: `**Eksempel: HIV og immunsvikt**

Humant immunsviktvirus (HIV) er et alvorlig eksempel på hva som skjer når immunsystemet selv blir angrepet:

1. **Infeksjon**: HIV er et retrovirus som infiserer celler med CD4-reseptorer, primært **T-hjelpeceller (CD4⁺ T-celler)**.

2. **Virusets syklus**: HIV bruker enzymet revers transkriptase til å omdanne sitt RNA-genom til DNA, som integreres i vertscellens DNA. Vertscellen begynner å produsere nye viruspartikler.

3. **Gradvis ødeleggelse**: Over tid dreper viruset stadig flere T-hjelpeceller. Normalt har en frisk person ca. 800–1 200 CD4⁺-celler per μL blod.

4. **AIDS**: Når CD4⁺-tallet faller under 200 celler/μL, har personen utviklet **AIDS** (acquired immunodeficiency syndrome). Immunforsvaret er så svekket at personen er utsatt for **opportunistiske infeksjoner** – infeksjoner som normalt kontrolleres av et friskt immunsystem (f.eks. Pneumocystis-pneumoni, Kaposis sarkom).

**Hvorfor er T-hjelpecellene så viktige?**
- Uten T-hjelpeceller kan B-celler ikke aktiveres effektivt → redusert antistoffproduksjon
- Cytotoksiske T-celler aktiveres dårligere → redusert drap av virusinfiserte celler
- Makrofager stimuleres ikke → svekket fagocytose
- Hele det ervervede immunforsvaret kollapser

**Behandling**: Antiretroviral behandling (ART) kombinerer flere medikamenter som hemmer ulike trinn i HIV-virusets replikasjonssyklus. Behandlingen kan holde virusmengden under kontroll, men kurerer ikke infeksjonen.`
    },
    {
      id: 'bio2-2-7-oppg-2',
      type: 'exercise',
      title: 'Oppgave: Det ervervede immunforsvaret',
      content: `Sammenlign B-celler og T-celler med hensyn til modningssted, funksjon og effektormekanismer. Forklar forskjellen mellom humoral og cellemediert immunitet.`
    },
    {
      id: 'bio2-2-7-teori-3',
      type: 'text',
      title: 'Vaksinasjon og immunologisk hukommelse',
      content: `## Vaksinasjon og immunologisk hukommelse

**Vaksinasjon** er en metode for å gi kroppen immunitet mot en sykdom uten at man trenger å gjennomgå selve sykdommen. Prinsippet utnytter immunsystemets evne til å danne hukommelsesceller.

**Vaksinetyper**:
- **Levende, svekkede vaksiner**: Inneholder levende mikroorganismer som er svekket (attenuert) slik at de ikke kan forårsake sykdom, men fortsatt kan stimulere en sterk immunrespons. Eksempler: MMR-vaksinen (meslinger, kusma, røde hunder), BCG (tuberkulose).
- **Inaktiverte (drepte) vaksiner**: Inneholder drepte mikroorganismer eller deler av dem. Gir ofte svakere immunrespons og krever gjerne boosterdoser. Eksempler: influensavaksine, poliovaksine (IPV).
- **Subunit-/konjugatvaksiner**: Inneholder kun bestemte proteinkomponenter (antigener) fra patogenet. Eksempler: hepatitt B-vaksine, HPV-vaksine.
- **Toksoidvaksiner**: Inneholder inaktiverte toksiner (giftstoffer) produsert av bakterier. Eksempler: vaksiner mot difteri og tetanus.
- **mRNA-vaksiner**: Inneholder mRNA som koder for et antigen fra patogenet. Kroppens egne celler produserer antigenet, som så stimulerer immunresponsen. Eksempler: Pfizer-BioNTech og Moderna COVID-19-vaksiner.

**Hvordan vaksinasjon virker**:
1. Vaksinen inneholder et antigen (eller instruksjoner for å lage det) som kroppen gjenkjenner som fremmed
2. Det medfødte immunforsvaret reagerer først og aktiverer antigenpresenterende celler
3. Det ervervede immunforsvaret aktiveres: B-celler produserer antistoffer, T-celler aktiveres
4. Etter at immunresponsen har roet seg, er det dannet **hukommelses-B-celler** og **hukommelses-T-celler**
5. Ved senere eksponering for det ekte patogenet gir hukommelsescellene en rask og kraftig **sekundær immunrespons** som eliminerer patogenet før det rekker å forårsake sykdom

**Flokkimmunitet**: Når en tilstrekkelig andel av en befolkning er vaksinert (eller immun), reduseres smittespredningen så mye at også uvaksinerte individer er indirekte beskyttet. Terskelen for flokkimmunitet varierer mellom sykdommer (f.eks. ca. 95 % for meslinger, ca. 80 % for polio).`
    },
    {
      id: 'bio2-2-7-def-3',
      type: 'definition',
      title: 'Flokkimmunitet',
      content: `**Flokkimmunitet** (besetningsimmunitet) oppnås når en tilstrekkelig andel av en populasjon er immun mot en smittsom sykdom, slik at smittespredningen begrenses kraftig og også uvaksinerte individer indirekte beskyttes. Immunitet kan oppnås gjennom vaksinasjon eller etter gjennomgått infeksjon. Terskelen for flokkimmunitet avhenger av smittens reproduksjonstall (R₀) – jo mer smittsom sykdommen er, desto høyere andel av befolkningen må være immun. For svært smittsomme sykdommer som meslinger (R₀ ≈ 12–18) kreves ca. 92–95 % immunitet i befolkningen.`
    },
    {
      id: 'bio2-2-7-eks-3',
      type: 'example',
      title: 'Eksempel: mRNA-vaksiner mot COVID-19',
      content: `**Eksempel: mRNA-vaksiner mot COVID-19**

COVID-19-pandemien førte til rask utvikling av en ny type vaksine – mRNA-vaksiner. La oss se på hvordan de virker:

1. **Utvikling**: Forskere identifiserte **spike-proteinet** på SARS-CoV-2-viruset som et egnet vaksinantigen. Spike-proteinet er det viruset bruker til å binde seg til og infisere menneskeceller.

2. **Vaksinens innhold**: Vaksinen inneholder syntetisk mRNA som koder for spike-proteinet, innkapslet i lipidnanopartikler (små fettbobler) som beskytter mRNA-et og hjelper det inn i cellene.

3. **Etter injeksjon**:
   - Lipidnanopartiklene tas opp av celler (hovedsakelig muskelceller og immunceller) nær injeksjonsstedet
   - Cellenes ribosomer bruker mRNA-et som oppskrift til å produsere spike-proteinet
   - Spike-proteinet presenteres på celleoverflaten og frigjøres i vevet
   - mRNA-et brytes raskt ned (innen timer til dager) og integreres IKKE i cellenes DNA

4. **Immunrespons**:
   - Immunsystemet gjenkjenner spike-proteinet som fremmed
   - B-celler produserer antistoffer mot spike-proteinet
   - T-celler aktiveres og bidrar til immunresponsen
   - Hukommelsesceller dannes

5. **Beskyttelse**: Når personen senere eksponeres for det ekte viruset, gjenkjenner hukommelsescellene spike-proteinet og starter en rask, effektiv immunrespons som hindrer eller begrenser infeksjonen.

**Fordeler med mRNA-vaksiner:**
- Rask utvikling (uker i stedet for måneder/år)
- Ingen risiko for infeksjon (inneholder ikke levende virus)
- Kan enkelt modifiseres for nye virusvarianter
- Stimulerer både humoral og cellemediert immunitet`
    },
    {
      id: 'bio2-2-7-oppg-3',
      type: 'exercise',
      title: 'Oppgave: Vaksinasjon',
      content: `Forklar prinsippet bak vaksinasjon og beskriv minst tre ulike vaksinetyper. Drøft betydningen av flokkimmunitet og forklar hvorfor det er viktig at en stor andel av befolkningen vaksineres mot smittsomme sykdommer.`
    },
    {
      id: 'bio2-2-7-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

Immunsystemet beskytter kroppen mot infeksjoner gjennom flere forsvarslinjer:

- **Det medfødte immunforsvaret** reagerer raskt og uspesifikt: fysiske barrierer (hud, slimhinner), kjemiske forsvarsstoffer, fagocytter (nøytrofile, makrofager), NK-celler, betennelsesreaksjonen og komplementsystemet.
- **Det ervervede immunforsvaret** er spesifikt og har hukommelse: B-celler produserer antistoffer (humoral immunitet), T-hjelpeceller koordinerer immunresponsen, cytotoksiske T-celler dreper infiserte celler (cellemediert immunitet), og hukommelsesceller gir langvarig beskyttelse.
- **Antistoffer** (IgG, IgA, IgM, IgE, IgD) er Y-formede proteiner som nøytraliserer patogener, merker dem for fagocytose og aktiverer komplement.
- **Vaksinasjon** stimulerer immunsystemet til å danne hukommelsesceller uten at man trenger å gjennomgå sykdommen. Ulike vaksinetyper inkluderer levende svekkede, inaktiverte, subunit-, toksoid- og mRNA-vaksiner.
- **Flokkimmunitet** beskytter hele befolkningen når en tilstrekkelig andel er immun.`
    }
  ],
  exercises: [
    {
      id: 'bio2-2-7-ex-1',
      type: 'multiple-choice',
      number: '2.7.1',
      title: 'Medfødt immunforsvar',
      content: 'Hvilken celetype er den første som ankommer et infeksjonssted som del av det medfødte immunforsvaret?',
      options: [
        { id: 'a', text: 'B-lymfocytter', isCorrect: false },
        { id: 'b', text: 'Cytotoksiske T-celler', isCorrect: false },
        { id: 'c', text: 'Nøytrofile granulocytter', isCorrect: true },
        { id: 'd', text: 'Plasmaceller', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-7-ex-2',
      type: 'multiple-choice',
      number: '2.7.2',
      title: 'T-hjelpeceller',
      content: 'Hvorfor er T-hjelpeceller (CD4⁺) så sentrale i immunforsvaret?',
      options: [
        { id: 'a', text: 'De dreper virusinfiserte celler direkte', isCorrect: false },
        { id: 'b', text: 'De produserer antistoffer', isCorrect: false },
        { id: 'c', text: 'De koordinerer immunresponsen ved å aktivere B-celler, cytotoksiske T-celler og makrofager', isCorrect: true },
        { id: 'd', text: 'De utfører fagocytose av bakterier', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-7-ex-3',
      type: 'multiple-choice',
      number: '2.7.3',
      title: 'Vaksinasjon',
      content: 'Hva er hovedprinsippet bak vaksinasjon?',
      options: [
        { id: 'a', text: 'Tilføre kroppen ferdige antistoffer mot sykdommen', isCorrect: false },
        { id: 'b', text: 'Drepe alle patogener i kroppen med kjemiske stoffer', isCorrect: false },
        { id: 'c', text: 'Stimulere immunsystemet til å danne hukommelsesceller mot et bestemt antigen', isCorrect: true },
        { id: 'd', text: 'Styrke det medfødte immunforsvaret generelt', isCorrect: false }
      ]
    },
    {
      id: 'bio2-2-7-ex-4',
      type: 'classic',
      number: '2.7.4',
      title: 'Medfødt vs. ervervet immunitet',
      content: 'Lag en sammenlignende oversikt over det medfødte og det ervervede immunforsvaret. Inkluder aspekter som responstid, spesifisitet, hukommelse og viktige celletyper. Forklar hvordan de to systemene samarbeider.',
      hints: [
        'Det medfødte immunforsvaret reagerer raskt (minutter til timer), mens det ervervede trenger dager til uker ved førstegangseksponering.',
        'Makrofager og dendrittiske celler er et viktig bindeledd – de presenterer antigener for T-celler.',
        'Tenk på samarbeidet mellom antigenpresenterende celler, T-hjelpeceller og B-celler.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    },
    {
      id: 'bio2-2-7-ex-5',
      type: 'classic',
      number: '2.7.5',
      title: 'Vaksinetyper og flokkimmunitet',
      content: 'Beskriv minst fire ulike vaksinetyper og gi eksempler på hver. Forklar hva flokkimmunitet er, og drøft hvorfor det er viktig med høy vaksinasjonsdekning for å beskytte hele befolkningen – inkludert de som ikke kan vaksineres.',
      hints: [
        'De viktigste vaksinetypene er levende svekkede, inaktiverte, subunit-, toksoid- og mRNA-vaksiner.',
        'Flokkimmunitetsterskelen avhenger av sykdommens smittsomhet (R₀).',
        'Noen individer kan ikke vaksineres (f.eks. spedbarn, immunsvekkede pasienter) og er avhengige av at andre er vaksinert.'
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true
    }
  ]
};

// ============================================================================
// Eksport alle kapitler i Seksjon 2
// ============================================================================

export const BIOLOGI_2_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_2_2_1,
  CHAPTER_BIOLOGI_2_2_2,
  CHAPTER_BIOLOGI_2_2_3,
  CHAPTER_BIOLOGI_2_2_4,
  CHAPTER_BIOLOGI_2_2_5,
  CHAPTER_BIOLOGI_2_2_6,
  CHAPTER_BIOLOGI_2_2_7,
];
