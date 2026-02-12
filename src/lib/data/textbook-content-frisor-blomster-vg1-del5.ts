/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Materialkunnskap i frisørfaget
// ============================================================================

export const CHAPTER_FB_VG1_5_1: TextbookChapter = {
  id: 'frisor-blomster-vg1-5-1',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '5.1',
  title: 'Materialkunnskap i frisørfaget',
  description: 'Oversikt over hårprodukter, kjemikalier og sikkerhetsdatablad som brukes i frisørfaget. Elevene lærer om produktenes egenskaper, bruksområder og hvordan de påvirker hår og hodebunn.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for materialer og produkter som brukes i frisørfaget', 'bruke sikkerhetsdatablad og HMS-rutiner'],
  content: [
    {
      id: 'fb-5-1-intro',
      type: 'text',
      content: `## Produkter og kjemikalier i frisørsalongen

En frisør bruker daglig et bredt utvalg av produkter og kjemikalier. Alt fra sjampo og balsam til permanentvæske og hårfarger krever god kunnskap om innhold, virkemåte og sikkerhet. Som frisør må du forstå hva produktene inneholder, hvordan de virker på håret, og hvordan du håndterer dem trygt.

I dette kapittelet skal du lære:
- Hvilke produktkategorier som finnes i frisørfaget
- Hvordan kjemikalier virker på hår og hodebunn
- Hva et sikkerhetsdatablad er og hvordan du leser det
- Viktigheten av riktig produktvalg for ulike hårtyper`,
    },
    {
      id: 'fb-5-1-def-1',
      type: 'definition',
      title: 'Sikkerhetsdatablad (SDS)',
      content: `Et **sikkerhetsdatablad** (SDS) er et standardisert dokument som følger med alle kjemiske produkter. Det inneholder informasjon om produktets sammensetning, faremerking, førstehjelptiltak, vernetiltak, lagring og avfallshåndtering. Frisørsalonger er pålagt å ha sikkerhetsdatablad tilgjengelig for alle kjemiske produkter som brukes.`,
    },
    {
      id: 'fb-5-1-text-1',
      type: 'text',
      title: 'Produktkategorier i frisørfaget',
      content: `### Hårpleieprodukter

**Rengjøring:**
- Sjampo (tilpasset ulike hårtyper og hodebunnstilstander)
- Dyprengjørende sjampo (fjerner produktrester og avleiringer)
- Tørrsjampo (absorberer overflødig talg)

**Pleie og behandling:**
- Balsam (gir fukt og gjør håret lettere å gre)
- Hårkur (intensiv pleie for skadet hår)
- Olje- og serumbehandlinger (tilførsel av glans og beskyttelse)
- Leave-in-produkter (hårbeskyttelse uten utskyld)

**Styling:**
- Voks, clay og pomade (form og tekstur)
- Mousse og volumspray (volum og hold)
- Hårspray og lakk (fiksering)
- Varmebeskyttende spray (beskytter mot føner og rettetang)`,
    },
    {
      id: 'fb-5-1-def-2',
      type: 'definition',
      title: 'pH-verdi',
      content: `**pH-verdien** angir hvor surt eller basisk et produkt er, på en skala fra 0 til 14. Hårets naturlige pH ligger rundt 4,5–5,5 (svakt surt). Sjampo bør ligge nær dette nivået. Permanentvæske og avfargingsmidler har høyere pH (basisk), mens syrebehandlinger har lavere pH. pH-balansen er avgjørende for hårets helse og struktur.`,
    },
    {
      id: 'fb-5-1-text-2',
      type: 'text',
      title: 'Kjemiske produkter',
      content: `### Farging og blondering

**Hårfarge:**
- Oksidativ farge (permanent farge som trenger inn i hårskaftet)
- Semibrilliant / toning (legger seg rundt hårskaftet, vaskes gradvis ut)
- Direkte farger (vegetabilske og syntetiske, ingen oksidant)

**Blondering:**
- Blekemiddel / blonderpulver (fjerner pigment fra håret)
- Hydrogenperoksid (oksidant som aktiverer blekemiddelet)
- Ulike styrker: 3 %, 6 %, 9 % og 12 % hydrogenperoksid

### Permanent og strukturendring

**Permanentvæske:**
- Bryter svovelbindingene i håret for å endre formen
- Alkalisk permanent (sterkere, for normalt og tykt hår)
- Sur permanent (mildere, for skadet eller farget hår)
- Nøytraliseringsvæske (fikser den nye formen)`,
    },
    {
      id: 'fb-5-1-text-3',
      type: 'text',
      title: 'Sikkerhetsdatablad i praksis',
      content: `### Slik leser du et sikkerhetsdatablad

Et sikkerhetsdatablad (SDS) består av 16 punkter:

1. **Identifikasjon** – Produktnavn og leverandør
2. **Fareidentifikasjon** – Faremerking og risikosetninger
3. **Sammensetning** – Innholdsstoffer
4. **Førstehjelptiltak** – Hva gjøres ved uhell
5. **Brannslokkingstiltak** – Ved brann
6. **Utilsiktet utslipp** – Opprydding
7. **Håndtering og lagring** – Riktig bruk og oppbevaring
8. **Eksponeringskontroll / personlig verneutstyr** – Hansker, ventilasjon
9. **Fysiske og kjemiske egenskaper** – pH, lukt, farge
10. **Stabilitet og reaktivitet** – Farlige reaksjoner
11. **Toksikologiske opplysninger** – Helsefare
12. **Økologiske opplysninger** – Miljøpåvirkning
13. **Avfallshåndtering** – Kildesortering
14. **Transportopplysninger** – Farlig gods
15. **Regelverksmessige opplysninger** – Lover og forskrifter
16. **Andre opplysninger** – Tilleggsinfo

Som frisør er punkt 2, 4, 7, 8 og 11 spesielt viktige å sette seg inn i.`,
    },
    {
      id: 'fb-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Valg av riktig oksidant',
      problem: 'En kunde ønsker å farge håret to nyanser lysere enn sin naturlige hårfarge. Hvilken styrke oksidant bør frisøren velge?',
      solution: `**Vurdering:**
- 3 % oksidant: For farge-på-farge (samme nyanse eller mørkere)
- 6 % oksidant: For å lysne 1–2 nyanser
- 9 % oksidant: For å lysne 2–3 nyanser
- 12 % oksidant: For maksimal lysning (kun med blonderpulver)

**Valg:** 6 % oksidant er riktig valg for å lysne to nyanser. Denne styrken gir tilstrekkelig løfting uten å skade håret unødvendig.

**Viktig:** Oksidant over 6 % skal aldri brukes direkte på hodebunnen, og 12 % brukes kun med blonderpulver og god avstand fra hodebunnen.`,
    },
    {
      id: 'fb-5-1-warning-1',
      type: 'warning',
      title: 'Allergitesting',
      content: `Før all farging skal det gjennomføres en **allergitest** (prikktest) minst 48 timer i forveien. Dette er spesielt viktig ved bruk av oksidative hårfarger som inneholder PPD (para-fenylendiamin). Allergisk reaksjon kan være alvorlig og i verste fall livstruende. Dokumenter alltid testresultatet i kundekortet.`,
    },
    {
      id: 'fb-5-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Produktkategorier** i frisørfaget inkluderer hårpleie, styling, farging og permanent
- **pH-verdien** er avgjørende for hårets helse og produktvalg
- **Sikkerhetsdatablad** gir viktig informasjon om sikker håndtering av kjemikalier
- **Oksidantstyrke** velges ut fra ønsket resultat og hårets tilstand
- **Allergitesting** er påkrevd før farging

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Sikkerhetsdatablad (SDS) | Standardisert dokument med sikkerhetsinformasjon om kjemiske produkter |
| pH-verdi | Mål på surhet/basiskhet, skala 0–14 |
| Oksidant | Hydrogenperoksid som aktiverer hårfarge eller blekemiddel |
| PPD | Para-fenylendiamin, allergen i oksidativ hårfarge |`,
    },
  ],
  exercises: [
    {
      id: 'fb-5-1-ex-1',
      type: 'multiple-choice',
      task: 'Hva er hårets naturlige pH-verdi?',
      options: [
        { id: 'a', text: '7,0 (nøytral)', isCorrect: false },
        { id: 'b', text: '4,5–5,5 (svakt surt)', isCorrect: true },
        { id: 'c', text: '8,0–9,0 (basisk)', isCorrect: false },
        { id: 'd', text: '2,0–3,0 (sterkt surt)', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Hårets naturlige pH ligger rundt 4,5–5,5, altså svakt surt. Produkter som ligger nær dette nivået er mest skånsomme for håret.',
    },
    {
      id: 'fb-5-1-ex-2',
      type: 'multiple-choice',
      task: 'Hvilket punkt i sikkerhetsdatabladet beskriver nødvendige vernetiltak?',
      options: [
        { id: 'a', text: 'Punkt 3 – Sammensetning', isCorrect: false },
        { id: 'b', text: 'Punkt 8 – Eksponeringskontroll og personlig verneutstyr', isCorrect: true },
        { id: 'c', text: 'Punkt 14 – Transportopplysninger', isCorrect: false },
        { id: 'd', text: 'Punkt 16 – Andre opplysninger', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Punkt 8 i sikkerhetsdatabladet handler om eksponeringskontroll og personlig verneutstyr. Her finner du informasjon om hansker, ventilasjon og annet verneutstyr.',
    },
    {
      id: 'fb-5-1-ex-3',
      type: 'classic',
      task: 'Forklar forskjellen mellom oksidativ hårfarge og toning. Nevn fordeler og ulemper med begge.',
      hints: ['Tenk på holdbarhet, dekning av grått hår og skade på håret'],
      solution: 'Oksidativ hårfarge trenger inn i hårskaftet og gir permanent farge som ikke vaskes ut. Den gir god dekning av grått hår og kan lysne håret, men den inneholder sterkere kjemikalier og kan skade håret. Toning legger seg rundt hårskaftet og vaskes gradvis ut etter 6–8 vask. Den er mildere for håret, men dekker ikke grått hår like godt og kan ikke lysne håret.',
    },
    {
      id: 'fb-5-1-ex-4',
      type: 'classic',
      task: 'Beskriv hvorfor allergitesting er viktig før farging, og forklar hvordan en prikktest gjennomføres.',
      solution: 'Allergitesting er viktig fordi hårfarger kan inneholde stoffer som PPD (para-fenylendiamin) som kan utløse alvorlige allergiske reaksjoner. En prikktest gjøres ved å påføre en liten mengde farge bak øret eller på innsiden av albuen minst 48 timer før behandling. Dersom det oppstår rødhet, kløe eller hevelse, skal farging ikke gjennomføres. Resultatet skal dokumenteres i kundekortet.',
    },
    {
      id: 'fb-5-1-ex-5',
      type: 'classic',
      task: 'Du skal farge en kunde med normalt, ubehandlet hår tre nyanser lysere. Hvilken oksidantstyrke velger du, og hvorfor? Hva må du ta hensyn til?',
      hints: ['Se tabellen for oksidantstyrker og lysningsgrad'],
      solution: 'For å lysne tre nyanser velger man 9 % oksidant. Denne styrken gir tilstrekkelig løfting for tre nyanser. Man må ta hensyn til: 1) Allergitesting minst 48 timer i forveien. 2) God ventilasjon i salongen. 3) Bruk av hansker. 4) Unngå direkte kontakt med hodebunnen i lengre tid. 5) Overvåke prosessen nøye for å unngå overprosessering. 6) Etterbehandling med sur balsam for å lukke hårets kutikula.',
    },
  ],
  keyTerms: [
    { term: 'Sikkerhetsdatablad', definition: 'Standardisert dokument med informasjon om kjemiske produkters egenskaper og sikkerhet' },
    { term: 'pH-verdi', definition: 'Mål på surhet eller basiskhet på en skala fra 0 til 14' },
    { term: 'Oksidant', definition: 'Hydrogenperoksid som brukes for å aktivere hårfarge eller blekemiddel' },
    { term: 'PPD', definition: 'Para-fenylendiamin, et allergiframkallende stoff i oksidative hårfarger' },
    { term: 'Permanent', definition: 'Kjemisk behandling som endrer hårets struktur ved å bryte svovelbindinger' },
  ],
};

// ============================================================================
// Kapittel 5.2: Materialer i blomsterdekorasjon
// ============================================================================

export const CHAPTER_FB_VG1_5_2: TextbookChapter = {
  id: 'frisor-blomster-vg1-5-2',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '5.2',
  title: 'Materialer i blomsterdekorasjon',
  description: 'Lær om tekniske materialer og dekorasjonsmaterialer som brukes i blomsterdekorasjon, inkludert oasis, ståltråd, tape og ulike typer tilbehør for profesjonelle arrangementer.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for materialer som brukes i blomsterdekorasjon', 'velge riktige materialer til ulike oppgaver'],
  content: [
    {
      id: 'fb-5-2-intro',
      type: 'text',
      content: `## Fra blomst til ferdig dekorasjon

En blomsterdekoratør trenger mer enn bare blomster og grønt. For å skape holdbare og estetiske arrangementer er det nødvendig med et bredt utvalg av tekniske materialer og dekorasjonsmaterialer. Riktig materialvalg er avgjørende for kvaliteten på det ferdige produktet.

I dette kapittelet skal du lære:
- Hva oasis er og hvordan det brukes
- Tekniske materialer som ståltråd, tape og festemidler
- Dekorasjonsmaterialer og tilbehør
- Bærekraftige alternativer i blomsterdekorasjon`,
    },
    {
      id: 'fb-5-2-def-1',
      type: 'definition',
      title: 'Oasis (blomsterskum)',
      content: `**Oasis** er et vannabsorberende skum som brukes som stikkemedium for snittblomster. Det finnes i to hovedtyper: **vått oasis** (grønt skum som suger til seg vann og holder blomstene friske) og **tørt oasis** (grått eller brunt skum for tørkede og kunstige blomster). Oasis formes lett med kniv og finnes i blokker, kuler, ringer og andre former.`,
    },
    {
      id: 'fb-5-2-text-1',
      type: 'text',
      title: 'Tekniske materialer',
      content: `### Festemidler og konstruksjon

**Ståltråd:**
- Dekorasjonstråd (0,3–0,5 mm): Til binding og dekorasjon
- Stikktråd (0,7–1,0 mm): Til forsterkning av stilker
- Rammetråd (1,2–2,0 mm): Til konstruksjoner og rammer

**Tape og teip:**
- Blomsterteip (floral tape): Selvklebende tape for dekning av tråd
- Krepptape: For dekorative formål
- Dobbeltsidig tape: For festing av materialer

**Stikkemedier:**
- Oasis i ulike former (blokk, kule, ring, hjerte)
- Pinnholder (kenzan): Metallplate med pigger
- Chicken wire (hønsenetting): For støtte i vaser

**Beholdere:**
- Oasisskåler og -former
- Vaser i glass, keramikk og metall
- Kurver og dekorative beholdere`,
    },
    {
      id: 'fb-5-2-text-2',
      type: 'text',
      title: 'Dekorasjonsmaterialer',
      content: `### Tilbehør og dekorasjon

**Naturmaterialer:**
- Mose (reinlav, flatmose, islandslav)
- Bark og grener
- Kongler, nøtter og frø
- Tørket strå og gress

**Bånd og stoff:**
- Satengbånd i ulike bredder
- Organzabånd (gjennomsiktig)
- Jutebånd (naturlig utseende)
- Sisal og raffia

**Dekorasjonselementer:**
- Perler og krystaller
- Fjær
- Dekorative pinner og picks
- Glitter og metalltråd

**Emballasje:**
- Cellofan og kreppapir
- Silkepapir og tissuepapir
- Jutestoff og lerret
- Bæreposer og esker`,
    },
    {
      id: 'fb-5-2-tip-1',
      type: 'tip',
      title: 'Riktig bruk av oasis',
      content: `Legg oasis i vann og la det synke ned av seg selv – press det aldri ned! Pressing skaper luftlommer inni skummet, og blomstene vil ikke få vann der det er luft. Bruk alltid rent, lunkent vann med blomstermat tilsatt. Klipp oasis med kniv – aldri med saks, da det kan knuses.`,
    },
    {
      id: 'fb-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Materialer til et borddekorasjon',
      problem: 'Hvilke materialer trenger du for å lage en rund borddekorasjon til et bryllup?',
      solution: `**Materialliste:**

1. **Stikkemedium:** Oasis-ring eller oasis i rund skål
2. **Beholdere:** Oasis-skål med sugekopp eller dekorativ skål
3. **Teknisk:** Blomsterteip, stikktråd for svake stilker
4. **Grønt:** Ulike typer bladgrønt for grunndekning
5. **Blomster:** Hovedblomster (roser, peoner) og fyllblomster (brudeslør, limonium)
6. **Dekorasjon:** Satengbånd i bryllupsfarger, eventuelt perler
7. **Emballasje:** Cellofan for transport

**Arbeidsrekkefølge:**
Bløtlegg oasis → plasser i skål → legg inn grønt → sett inn hovedblomster → fyll med småblomster → dekorer med bånd og perler.`,
    },
    {
      id: 'fb-5-2-text-3',
      type: 'text',
      title: 'Bærekraftige alternativer',
      content: `### Miljøbevisste materialvalg

Blomsterbransjen jobber stadig med å finne mer bærekraftige alternativer:

- **Oasis-alternativer:** Biologisk nedbrytbart blomsterskum, chicken wire, pinnholdere
- **Emballasje:** Papirbasert innpakning fremfor plast
- **Pynt:** Naturmaterialer fremfor plastdekorasjoner
- **Bæreposer:** Papirposer og gjenbrukbare bærenett
- **Lokale materialer:** Bruk av lokalt dyrket grønt og sesongbaserte blomster

Mange kunder etterspør nå miljøvennlige alternativer, og dette er en viktig trend i bransjen.`,
    },
    {
      id: 'fb-5-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Oasis** er det viktigste stikkemediet, men har bærekraftige alternativer
- **Tekniske materialer** som tråd, tape og festemidler er nødvendige for konstruksjon
- **Dekorasjonsmaterialer** gir personlighet og stil til arrangementene
- **Bærekraftige valg** er en viktig trend i blomsterbransjen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Oasis | Vannabsorberende blomsterskum for snittblomster |
| Kenzan | Pinnholder i metall for blomsterarrangering |
| Blomsterteip | Selvklebende tape for dekning av ståltråd |
| Chicken wire | Hønsenetting brukt som støtte i vaser |`,
    },
  ],
  exercises: [
    {
      id: 'fb-5-2-ex-1',
      type: 'multiple-choice',
      task: 'Hva er riktig måte å bløtlegge oasis på?',
      options: [
        { id: 'a', text: 'Press oasis ned i vannet for raskere oppsug', isCorrect: false },
        { id: 'b', text: 'Legg oasis i vann og la det synke ned av seg selv', isCorrect: true },
        { id: 'c', text: 'Hold oasis under rennende vann i fem minutter', isCorrect: false },
        { id: 'd', text: 'Bruk varmt vann for bedre vannoppsug', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Oasis skal legges i vann og synke ned av seg selv. Pressing skaper luftlommer inni skummet som hindrer vannoppsug. Bruk lunkent, rent vann med blomstermat.',
    },
    {
      id: 'fb-5-2-ex-2',
      type: 'classic',
      task: 'Forklar forskjellen mellom vått og tørt oasis, og beskriv bruksområdene for hver type.',
      solution: 'Vått oasis (grønt skum) absorberer vann og brukes til snittblomster som trenger vannforsyning. Det holder blomstene friske over tid. Tørt oasis (grått/brunt skum) brukes til tørkede blomster, kunstige blomster og varige dekorasjoner. Det absorberer ikke vann. Vått oasis er vanligst i daglig blomsterhandel, mens tørt oasis brukes mye til gravdekorasjoner og varige arrangementer.',
    },
    {
      id: 'fb-5-2-ex-3',
      type: 'classic',
      task: 'Lag en materialliste for en brudebukett. Beskriv hvilke tekniske materialer du trenger og hvorfor.',
      hints: ['Tenk på binding, forsterkning, dekning og emballasje'],
      solution: 'Materialliste for brudebukett: 1) Stikktråd – for å forsterke svake stilker (f.eks. ranunkler). 2) Blomsterteip – for å dekke tråd og gi et pent utseende. 3) Bindegrønt – for å ramme inn buketten. 4) Satengbånd – for å dekke stilkpartiet og gi et elegant uttrykk. 5) Nåler – for å feste båndet. 6) Fuktet bomull og cellofan – rundt stilkendene for å holde fuktigheten under seremonien. 7) Eventuelt mansjett eller krage for å beskytte kjolen.',
    },
    {
      id: 'fb-5-2-ex-4',
      type: 'classic',
      task: 'Diskuter fordeler og ulemper med tradisjonell oasis sammenlignet med bærekraftige alternativer som chicken wire og pinnholder.',
      solution: 'Oasis: Fordeler – lett å bruke, holder blomstene på plass i alle vinkler, gir vannforsyning. Ulemper – ikke biologisk nedbrytbart, avgir mikroplast, engangsbruk. Chicken wire: Fordeler – gjenbrukbart, ingen mikroplast, billig. Ulemper – gir ikke vannforsyning alene, vanskeligere å arbeide med, begrenset vinkelkontroll. Pinnholder (kenzan): Fordeler – gjenbrukbar, ingen avfall, passer til ikebana og enkle arrangementer. Ulemper – tung, begrenset bruk i komplekse arrangementer, dyr i innkjøp.',
    },
  ],
  keyTerms: [
    { term: 'Oasis', definition: 'Vannabsorberende blomsterskum som brukes som stikkemedium' },
    { term: 'Kenzan', definition: 'Pinnholder i metall brukt i blomsterarrangering' },
    { term: 'Blomsterteip', definition: 'Selvklebende tape for dekning av ståltråd på stilker' },
    { term: 'Chicken wire', definition: 'Hønsenetting brukt som alternativt støttemateriale i vaser' },
  ],
};

// ============================================================================
// Kapittel 5.3: Materialer i interiør og eksponering
// ============================================================================

export const CHAPTER_FB_VG1_5_3: TextbookChapter = {
  id: 'frisor-blomster-vg1-5-3',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '5.3',
  title: 'Materialer i interiør og eksponering',
  description: 'Oversikt over materialer som brukes i interiørdesign og eksponeringsdesign, inkludert tre, metall, glass, tekstil og komposittmaterialer. Elevene lærer om egenskaper, bruksområder og estetikk.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for ulike materialer brukt i interiør og eksponering', 'vurdere materialvalg ut fra funksjon og estetikk'],
  content: [
    {
      id: 'fb-5-3-intro',
      type: 'text',
      content: `## Materialenes verden

I interiør- og eksponeringsdesign spiller materialvalg en sentral rolle. Hvert materiale har sine egenskaper, sitt uttrykk og sine bruksområder. En god designer forstår materialenes kvaliteter og kan kombinere dem for å skape ønsket stemning og funksjonalitet.

I dette kapittelet skal du lære:
- Egenskaper ved de vanligste materialene
- Hvordan materialvalg påvirker uttrykk og stemning
- Kombinasjon av materialer for estetisk og funksjonell effekt
- Bærekraftige materialvalg i interiør og eksponering`,
    },
    {
      id: 'fb-5-3-def-1',
      type: 'definition',
      title: 'Materialkunnskap',
      content: `**Materialkunnskap** er kunnskap om ulike materialers egenskaper, bearbeidingsmuligheter og bruksområder. I interiør og eksponering handler det om å forstå hvordan materialer ser ut, føles, holder seg over tid, og hvordan de kan kombineres for å oppnå ønsket funksjon og estetikk.`,
    },
    {
      id: 'fb-5-3-text-1',
      type: 'text',
      title: 'Tre og trebaserte materialer',
      content: `### Tre – det levende materialet

**Massivt tre:**
- Furu, gran, eik, ask, bjørk, valnøtt
- Naturlig varme og levende overflate
- Kan behandles med olje, lakk, beis eller maling
- Påvirkes av fuktighet og temperatur

**Trebaserte plater:**
- Kryssfiner (laminert tre, sterk og formbar)
- MDF (middels tetthet fiberplate, glatt overflate)
- Sponplater (rimelig, brukes med laminat)
- OSB (grovt, industrielt utseende)

**Bruksområder i eksponering:**
- Butikkhyller og utstillingsmoduler
- Gulv og veggpaneler
- Møbler og innredning
- Skilt og informasjonstavler`,
    },
    {
      id: 'fb-5-3-text-2',
      type: 'text',
      title: 'Metall',
      content: `### Metall – styrke og eleganse

**Vanlige metaller i interiør:**
- Stål (sterkt, holdbart, moderne uttrykk)
- Aluminium (lett, rustfritt, enkelt å bearbeide)
- Messing (varmt, elegant, klassisk uttrykk)
- Kobber (varmt, utvikler patina over tid)
- Jernsmier (håndverkspreget, rustikk)

**Overflatebehandling:**
- Børstet (matt, moderne)
- Polert (skinnende, eksklusivt)
- Pulverlakkert (farget, holdbart)
- Anodisert (aluminium, korrosjonsbestandig)
- Patinert (naturlig eller kunstig aldret)

**Bruksområder:**
- Butikkinnredning og varehyllekonstruksjoner
- Lysarmaturer og belysningsoppheng
- Skilting og informasjonssystemer
- Dekorative elementer og skulpturer`,
    },
    {
      id: 'fb-5-3-text-3',
      type: 'text',
      title: 'Glass, tekstil og kompositt',
      content: `### Glass

- Klart glass (gjennomsiktig, rent uttrykk)
- Mattert/frostet glass (delvis gjennomsiktig, myk lysgjennomgang)
- Farget glass (dekorativt, stemningsskapende)
- Herdet glass (sikkerhetsklasse, sterkere)
- Akrylglass/plexiglass (lettere alternativ til glass)

### Tekstil

- Bomull og lin (naturlige, pustende materialer)
- Polyester og nylon (slitesterke syntetiske stoffer)
- Filt og ull (varme, lydabsorberende)
- Kunstskinn og skinn (eksklusivt uttrykk)
- Tekniske tekstiler (flammehemmende, vannavstøtende)

### Komposittmaterialer

- Laminat (dekorative overflater på plater)
- Corian (solid surface, sømløse overflater)
- Betong (rå, industriell estetikk)
- Keramikk og flis (holdbar, hygienisk)
- Naturstein (marmor, granitt, skifer)`,
    },
    {
      id: 'fb-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Materialvalg for en klesbutikk',
      problem: 'En klesbutikk med skandinavisk design skal innredes. Hvilke materialer vil du anbefale for å skape ønsket stemning?',
      solution: `**Skandinavisk stil kjennetegnes av:** Lyse farger, naturmaterialer, minimalisme og funksjonalitet.

**Anbefalt materialvalg:**
1. **Gulv:** Lys eik eller ask – gir varme og naturlig uttrykk
2. **Vegger:** Hvitmalt MDF-panel eller betong – rent, lyst
3. **Varehyller:** Kombinasjon av lys bjørk og sort metall – kontrast
4. **Klesstativer:** Børstet stål eller sort pulverlakkert metall
5. **Prøverom:** Lette, lyse bomullsgardiner med tredetaljer
6. **Kasse/disk:** Lys eik med corian-topp – sømløst og rent
7. **Belysning:** Messingarmaturer for varme aksenter

Materialkombinasjonen skaper et lyst, ryddig og innbydende butikkmiljø som fremhever klærne.`,
    },
    {
      id: 'fb-5-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Tre** gir varme og naturlighet, finnes i mange varianter
- **Metall** gir styrke og eleganse, med ulike overflatebehandlinger
- **Glass** skaper åpenhet og lysgjennomgang
- **Tekstil** tilfører myke kvaliteter og lyddemping
- **Komposittmaterialer** gir spesielle egenskaper og uttrykk

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| MDF | Middels tetthet fiberplate, glatt og lett å bearbeide |
| Pulverlakkering | Overflatebehandling av metall med farget pulver |
| Corian | Solid surface-materiale med sømløse skjøter |
| Patina | Naturlig eller kunstig aldring av metalloverflater |`,
    },
  ],
  exercises: [
    {
      id: 'fb-5-3-ex-1',
      type: 'multiple-choice',
      task: 'Hvilket materiale er best egnet for butikkhyller som skal tåle tung belastning og ha et moderne uttrykk?',
      options: [
        { id: 'a', text: 'MDF uten overflatebehandling', isCorrect: false },
        { id: 'b', text: 'Pulverlakkert stål kombinert med massiv eik', isCorrect: true },
        { id: 'c', text: 'Kreppapir og papp', isCorrect: false },
        { id: 'd', text: 'Ubehandlet sponplate', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Pulverlakkert stål gir styrke og holdbarhet, mens massiv eik tilfører varme og naturlig uttrykk. Kombinasjonen er svært populær i moderne butikkinnredning.',
    },
    {
      id: 'fb-5-3-ex-2',
      type: 'multiple-choice',
      task: 'Hva er fordelen med akrylglass fremfor vanlig glass i utstillinger?',
      options: [
        { id: 'a', text: 'Akrylglass er billigere og vakrere', isCorrect: false },
        { id: 'b', text: 'Akrylglass er lettere og mer slagfast', isCorrect: true },
        { id: 'c', text: 'Akrylglass er mer gjennomsiktig', isCorrect: false },
        { id: 'd', text: 'Akrylglass tåler høyere temperaturer', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Akrylglass (plexiglass) er mye lettere enn vanlig glass og mer slagfast, noe som gjør det tryggere og enklere å håndtere i utstillinger og butikker.',
    },
    {
      id: 'fb-5-3-ex-3',
      type: 'classic',
      task: 'Velg tre materialer som passer for en blomsterbutikk med rustikt uttrykk, og begrunn valgene dine.',
      hints: ['Tenk på materialer som gir et naturlig, varmt og håndverkspreget uttrykk'],
      solution: 'Tre gode materialvalg: 1) Ubehandlet furu eller gjenbrukstreverk – gir rustikk varme og autentisk karakter, passer godt til blomster. 2) Jernsmier eller patinert metall – gir håndverkspreget uttrykk, kan brukes til hyller, kroker og oppheng. 3) Jutestoff og naturfiber – myke, naturlige tekstiler til dekorasjon, emballasje og gardiner. Disse materialene skaper sammen et naturlig, varmt og jordnært uttrykk som harmonerer med blomstene.',
    },
    {
      id: 'fb-5-3-ex-4',
      type: 'classic',
      task: 'Forklar forskjellen mellom massivt tre og MDF. Når vil du velge det ene fremfor det andre?',
      solution: 'Massivt tre er naturlig vokst tre med synlig åremønster og naturlig variasjon. Det er sterkt, holdbart og kan slipes og overflatebehandles gjentatte ganger. MDF er en fiberplate laget av treflis som er presset med lim. Den har en jevn, glatt overflate uten åremønster. Velg massivt tre når naturlig utseende, holdbarhet og mulighet for reparasjon er viktig. Velg MDF når man trenger en jevn overflate for maling, har budsjetthensyn, eller trenger komplekse former som kan freses ut.',
    },
    {
      id: 'fb-5-3-ex-5',
      type: 'classic',
      task: 'Lag et forslag til materialvalg for et utstillingsvindu i en interiørbutikk. Begrunn valgene ut fra funksjon og estetikk.',
      solution: 'Forslag til utstillingsvindu: 1) Bakvegg: Hvitmalt MDF-panel – gir ren bakgrunn som ikke konkurrerer med varene. 2) Gulv: Lys eikeparkett – varmt, naturlig, skandinavisk. 3) Oppheng: Børstet messingrør – elegant, tidløst, gir varme aksenter. 4) Hyller: Klart herdet glass på messingbraketter – gir svevende effekt. 5) Tekstil: Lingardin i naturhvitt – myker opp og rammer inn. 6) Belysning: Spotlights med justerbar vinkel. Kombinasjonen skaper et lyst, innbydende vindu der varene er i fokus.',
    },
  ],
  keyTerms: [
    { term: 'MDF', definition: 'Middels tetthet fiberplate laget av treflis presset med lim' },
    { term: 'Pulverlakkering', definition: 'Overflatebehandling der metallgjenstander dekkes med farget pulver og herdes i ovn' },
    { term: 'Corian', definition: 'Solid surface-materiale som gir sømløse overflater uten synlige skjøter' },
    { term: 'Komposittmateriale', definition: 'Materiale satt sammen av to eller flere ulike materialer for å oppnå spesielle egenskaper' },
    { term: 'Patina', definition: 'Naturlig eller kunstig aldring av overflater, særlig metall og tre' },
    { term: 'Laminat', definition: 'Dekorativt overflatesjikt som limes på plater for å etterligne andre materialer' },
  ],
};

// ============================================================================
// Kapittel 5.4: Verktøy og maskiner i fagene
// ============================================================================

export const CHAPTER_FB_VG1_5_4: TextbookChapter = {
  id: 'frisor-blomster-vg1-5-4',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '5.4',
  title: 'Verktøy og maskiner i fagene',
  description: 'Grundig gjennomgang av verktøy og maskiner som brukes i frisør-, blomster- og interiørfagene. Elevene lærer om riktig bruk, vedlikehold og sikkerhet ved bruk av ulike verktøy.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke verktøy og maskiner på en sikker og fagmessig måte', 'vedlikeholde verktøy etter gjeldende rutiner'],
  content: [
    {
      id: 'fb-5-4-intro',
      type: 'text',
      content: `## Verktøy – fagpersonens forlengede arm

Godt vedlikeholdte verktøy er avgjørende for et profesjonelt resultat i alle håndverksfag. En frisør med sløve sakser, en blomsterdekoratør med rustne knivsekkatører eller en interiørdesigner med upresise måleverktøy vil aldri oppnå optimal kvalitet. Derfor er kunnskap om verktøy, vedlikehold og sikkerhet grunnleggende.

I dette kapittelet skal du lære:
- De viktigste verktøyene i hvert fag
- Riktig bruk og teknikk
- Vedlikehold og rengjøring
- Sikkerhet ved bruk av elektriske maskiner`,
    },
    {
      id: 'fb-5-4-text-1',
      type: 'text',
      title: 'Verktøy i frisørfaget',
      content: `### Klippeverktøy

**Sakser:**
- Klippesakser (5,5"–7" – ulike lengder for ulike teknikker)
- Filleringssakser (tynner ut håret jevnt)
- Razorsakser / effilering (gir mykere kanter)

**Kamteknikk:**
- Klippekammer (smale tenner, for presisjonsklipping)
- Tupérkammer (brede og smale tenner, for oppsetting)
- Halekkam (spiss hale for oppdeling av hår)

### Elektrisk utstyr

**Klippemaskiner:**
- Trimmer (korte lengder, konturlinje)
- Clipper (0,5–25 mm, ulike oppsatser)

**Varmeverktøy:**
- Føner (med diffuser, konsentrator)
- Rettetang / glattejern
- Krølltang i ulike diametre
- Varmruller

**Andre elektriske:**
- Fargemaskin (blander farge automatisk)
- UV-sterilisator (desinfiserer verktøy)`,
    },
    {
      id: 'fb-5-4-text-2',
      type: 'text',
      title: 'Verktøy i blomsterfaget',
      content: `### Kutteverktøy

- **Blomsterkniv:** Skarp kniv for skråkutting av stilker
- **Sekkatør:** For tykkere stilker og grener
- **Grensaks:** For større grener og tyngre plantemateriale
- **Trådkutter:** For kutting av ståltråd

### Bindeverktøy

- **Bindetang:** For bøying og kutting av tråd
- **Limpistol:** For festing av dekorasjonselementer
- **Stiftemaskin:** For festing av emballasje
- **Sprøyteflaske:** For fuktholding av arrangementer

### Måleverktøy

- **Målebånd:** For å måle lengder
- **Vinkelmåler:** For presis vinkelkutting
- **Linjal:** For rett kutting og oppmåling`,
    },
    {
      id: 'fb-5-4-text-3',
      type: 'text',
      title: 'Vedlikehold og sikkerhet',
      content: `### Vedlikeholdsrutiner

**Daglig vedlikehold:**
- Rengjør alle verktøy etter bruk
- Desinfiser verktøy som har vært i kontakt med hud
- Fjern hår, plantesaft og rester
- Sjekk at elektrisk utstyr er uskadd

**Regelmessig vedlikehold:**
- Sliping av sakser og kniver (profesjonell sliping)
- Olje bevegelige deler (sakser, sekkatører)
- Kontroller elektriske ledninger og plugger
- Kalibrering av måleverktøy

### Sikkerhet ved bruk av maskiner

**Generelle sikkerhetsregler:**
1. Les alltid bruksanvisningen før første gangs bruk
2. Bruk personlig verneutstyr (hansker, vernebriller)
3. Aldri bruk skadet utstyr
4. Hold arbeidsplassen ryddig
5. Slå av og trekk ut kontakten ved rengjøring
6. Oppbevar skarpe verktøy forsvarlig
7. Rapporter feil og mangler umiddelbart`,
    },
    {
      id: 'fb-5-4-warning-1',
      type: 'warning',
      title: 'Elektrisk sikkerhet',
      content: `Elektrisk utstyr som føner, rettetang og krølltang kan forårsake forbrenning og elektrisk støt. Bruk aldri elektrisk utstyr med våte hender eller nær vann. Kontroller alltid ledningen for skader før bruk. Bruk kun godkjente produkter med CE-merking. Legg aldri varmt utstyr direkte på brennbare overflater.`,
    },
    {
      id: 'fb-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Vedlikeholdsplan for frisørsaks',
      problem: 'Hvordan bør en frisør vedlikeholde saksene sine for optimal ytelse?',
      solution: `**Daglig:**
- Tørk av med myk klut etter hver kunde
- Fjern hår mellom bladene
- Desinfiser med egnet middel
- Oppbevar i sakseetui

**Ukentlig:**
- Påfør en dråpe sakseolje på skruen
- Kontroller bladenes tilstand
- Sjekk skruetilstramming

**Månedlig / ved behov:**
- Profesjonell sliping (vanligvis 2–4 ganger i året)
- Kontroller gummistopperen i grepet
- Vurder om saksene trenger justering

**Tegn på at saksen trenger sliping:**
- Håret brettes i stedet for å kuttes rent
- Saksen drar i håret
- Du må bruke mer kraft enn vanlig`,
    },
    {
      id: 'fb-5-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Frisørverktøy** inkluderer sakser, kammer, klippemaskiner og varmeverktøy
- **Blomsterverktøy** omfatter kniver, sekkatører, bindetang og limpistol
- **Vedlikehold** er avgjørende for verktøyets levetid og resultatets kvalitet
- **Sikkerhet** ved bruk av maskiner krever kunnskap og gode rutiner

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Filleringssakser | Sakser med tenner som tynner ut håret jevnt |
| Sekkatør | Kutteverktøy for stilker og grener |
| CE-merking | Europeisk godkjenningsmerke for elektrisk utstyr |
| UV-sterilisator | Apparat som desinfiserer verktøy med UV-lys |`,
    },
  ],
  exercises: [
    {
      id: 'fb-5-4-ex-1',
      type: 'multiple-choice',
      task: 'Hvor ofte bør en frisørsaks normalt slipes?',
      options: [
        { id: 'a', text: 'Hver dag', isCorrect: false },
        { id: 'b', text: '2–4 ganger i året', isCorrect: true },
        { id: 'c', text: 'En gang hvert femte år', isCorrect: false },
        { id: 'd', text: 'Aldri, sakser trenger ikke sliping', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'En frisørsaks bør vanligvis slipes 2–4 ganger i året, avhengig av bruksfrekvens. Tegn på at saksen trenger sliping er at håret brettes i stedet for å kuttes rent.',
    },
    {
      id: 'fb-5-4-ex-2',
      type: 'multiple-choice',
      task: 'Hva er riktig rekkefølge for sikker bruk av en limpistol?',
      options: [
        { id: 'a', text: 'Start med å lime, deretter koble til strøm', isCorrect: false },
        { id: 'b', text: 'Koble til strøm, vent til pistolen er varm, test på restmateriale, bruk på arbeidsstykke', isCorrect: true },
        { id: 'c', text: 'Koble til strøm og bruk umiddelbart', isCorrect: false },
        { id: 'd', text: 'Det spiller ingen rolle, limpistol er ufarlig', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Riktig rekkefølge: Koble til strøm, vent til pistolen er ordentlig varm (ca. 5 minutter), test limet på restmateriale for å sjekke konsistens, og bruk deretter på arbeidsstykket. Smeltlimet kan gi brannskader, så forsiktighet er viktig.',
    },
    {
      id: 'fb-5-4-ex-3',
      type: 'classic',
      task: 'Lag en daglig vedlikeholdsrutine for en blomsterdekoratørs verktøy. Inkluder minst fem punkter.',
      solution: 'Daglig vedlikeholdsrutine: 1) Rengjør blomsterkniven med en fuktig klut og tørk godt. 2) Fjern plantesaft og rester fra sekkatøren, olje leddet. 3) Rengjør og tørk limpistolen, fjern limrester. 4) Vask og desinfiser sprøyteflasken. 5) Tørk av arbeidsbordet. 6) Kontroller at alle kutteverktøy er skarpe. 7) Oppbevar verktøy på riktig plass i verktøybeltet eller -skuffen. 8) Sjekk at elektrisk utstyr er slått av og kontakten trukket ut.',
    },
    {
      id: 'fb-5-4-ex-4',
      type: 'classic',
      task: 'Forklar hvorfor det er viktig å bruke riktig saks til riktig oppgave i frisørfaget.',
      hints: ['Tenk på klippesakser, filleringssakser og razorsakser'],
      solution: 'Ulike sakser er designet for ulike oppgaver: Klippesakser gir rene, presise kutt og brukes til hovedklipping. Filleringssakser har tenner som fjerner en prosentandel av håret og brukes til å tynne ut uten å endre lengden. Razorsakser gir en mykere, mer utglidende kant som skaper bevegelse. Bruk av feil saks gir feil resultat – for eksempel vil klippesakser gi stivere linjer enn ønsket når man vil ha myke overganger, og filleringssakser kan gi ujevnt resultat hvis de brukes på veldig tynt hår.',
    },
    {
      id: 'fb-5-4-ex-5',
      type: 'classic',
      task: 'Diskuter hvilke sikkerhetstiltak som er viktigst ved bruk av varmeverktøy i frisørsalongen.',
      solution: 'Viktigste sikkerhetstiltak: 1) Kontroller alltid temperaturinnstilling – ulike hårtyper tåler ulik varme. 2) Bruk varmebeskyttende spray på kundens hår. 3) Legg aldri varmt utstyr direkte på benken – bruk varmebestandig matte. 4) Hold ledningen unna varme plater. 5) Plasser verktøy slik at kunden ikke kan ta på varme overflater. 6) Bruk aldri varmeverktøy nær vann eller med våte hender. 7) Slå av utstyret når det ikke er i bruk. 8) Sjekk ledningen for skader jevnlig. 9) Hold barn og uvedkommende borte fra varmeverktøy.',
    },
  ],
  keyTerms: [
    { term: 'Filleringssakser', definition: 'Sakser med tenner som tynner ut håret jevnt uten å endre lengden' },
    { term: 'Sekkatør', definition: 'Kraftig kutteverktøy for stilker og grener i blomsterfaget' },
    { term: 'CE-merking', definition: 'Europeisk godkjenningsmerke som viser at produktet oppfyller sikkerhetskrav' },
    { term: 'UV-sterilisator', definition: 'Apparat som bruker ultrafiolett lys til å desinfisere verktøy' },
    { term: 'Trimmer', definition: 'Elektrisk klippemaskin for korte lengder og konturlinjer' },
  ],
};

// ============================================================================
// Kapittel 5.5: Bærekraftige materialer og miljøbevisste valg
// ============================================================================

export const CHAPTER_FB_VG1_5_5: TextbookChapter = {
  id: 'frisor-blomster-vg1-5-5',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '5.5',
  title: 'Bærekraftige materialer og miljøbevisste valg',
  description: 'Hvordan fagene kan gjøre bærekraftige materialvalg gjennom bruk av miljøvennlige produkter, miljømerkeordninger, resirkulering og gjenbruk. Elevene lærer om bransjens miljøansvar.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre bærekraftige valg i eget arbeid', 'gjøre rede for miljømerkeordninger og bærekraftige materialer'],
  content: [
    {
      id: 'fb-5-5-intro',
      type: 'text',
      content: `## Bærekraft i praksis

Bærekraft er ikke bare et moteord – det er en nødvendighet. Frisør-, blomster- og interiørbransjen har alle et miljøavtrykk gjennom bruk av kjemikalier, emballasje, transport og energiforbruk. Som fagperson har du mulighet til å gjøre bevisste valg som reduserer miljøbelastningen.

I dette kapittelet skal du lære:
- Hva bærekraftige materialer er
- Viktige miljømerkeordninger
- Resirkulering og gjenbruk i fagene
- Hvordan du kan gjøre miljøbevisste valg i hverdagen`,
    },
    {
      id: 'fb-5-5-def-1',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** er utvikling som tilfredsstiller dagens behov uten å ødelegge for fremtidige generasjoners muligheter til å tilfredsstille sine behov. I fagene våre betyr det å velge materialer og metoder som minimerer miljøbelastningen, tar hensyn til arbeidernes helse og sikrer langsiktig lønnsomhet.`,
    },
    {
      id: 'fb-5-5-text-1',
      type: 'text',
      title: 'Miljømerkeordninger',
      content: `### Viktige miljømerker å kjenne til

**Svanemerket (Nordisk miljømerke):**
- Det offisielle nordiske miljømerket
- Stiller krav til hele produktets livssyklus
- Finnes på hårprodukter, rengjøringsmidler og tekstiler

**EU Ecolabel (EU-blomsten):**
- Det europeiske miljømerket
- Stiller strenge krav til miljø og helse
- Finnes på tekstiler, maling og rengjøringsmidler

**Fairtrade:**
- Sikrer rettferdige arbeidsforhold og lønn
- Finnes på blomster, bomull og andre råvarer
- Viktig for etisk handel

**FSC (Forest Stewardship Council):**
- Sertifisering av bærekraftig skogbruk
- Finnes på tre- og papirprodukter
- Sikrer at skog forvaltes ansvarlig

**GOTS (Global Organic Textile Standard):**
- Standard for økologisk tekstilproduksjon
- Sikrer miljøvennlige og sosiale krav gjennom hele verdikjeden`,
    },
    {
      id: 'fb-5-5-text-2',
      type: 'text',
      title: 'Bærekraft i hvert fag',
      content: `### Frisørfaget

- Velg produkter med miljømerking (Svanemerket, EU Ecolabel)
- Bruk energieffektive føner og varmeverktøy
- Reduser vannforbruk (spar vann under vask)
- Kildesortér avfall (folie, emballasje, kjemikalier)
- Velg refill-løsninger fremfor engangsemballasje

### Blomsterfaget

- Velg Fairtrade-sertifiserte blomster
- Bruk sesongbaserte og lokalt dyrkede blomster
- Erstatt tradisjonell oasis med bærekraftige alternativer
- Minimer plastbruk i emballasje
- Komposter planterester

### Interiør og eksponering

- Velg FSC-sertifisert tre
- Bruk gjenbruksmaterialer og vintage-elementer
- Velg lokalt produserte materialer (redusert transport)
- Unngå materialer med skadelige kjemikalier
- Tenk sirkulært – kan materialene gjenbrukes?`,
    },
    {
      id: 'fb-5-5-text-3',
      type: 'text',
      title: 'Sirkulærøkonomi og gjenbruk',
      content: `### Fra lineær til sirkulær tenkning

**Lineær økonomi:** Produser → Bruk → Kast
**Sirkulærøkonomi:** Produser → Bruk → Reparer/Gjenbruk → Materialgjenvinning

### Praktiske eksempler i fagene

- **Gjenbruk av materialer:** Gamle møbler og innredning kan restaureres
- **Upcycling:** Gi brukte materialer nytt liv i en ny form
- **Materialgjenvinning:** Sortér avfall slik at materialene kan gjenvinnes
- **Deling:** Del verktøy og utstyr mellom salonger eller verksteder
- **Reparasjon:** Reparer fremfor å kaste – forlenger levetiden`,
    },
    {
      id: 'fb-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Grønn frisørsalong',
      problem: 'Hvilke tiltak kan en frisørsalong gjennomføre for å bli mer bærekraftig?',
      solution: `**Konkrete tiltak:**

1. **Produkter:** Bytt til miljømerkede sjampoer og balsamer i refill-løsninger
2. **Energi:** Installer LED-belysning og bruk energieffektive føner
3. **Vann:** Monter vannbesparende kraner og lær ansatte vannbesparende vasketeknikk
4. **Avfall:** Kildesortér alt avfall – hår kan komposteres eller samles for oljeopprensking
5. **Folie:** Bruk gjenbrukbar folie eller bærekraftige alternativer til tradisjonell alufolie
6. **Emballasje:** Velg leverandører med minimal emballasje
7. **Transport:** Oppmuntre ansatte til å sykle eller bruke kollektivtransport
8. **Kommunikasjon:** Informer kunder om salongens miljøtiltak

Mange av tiltakene sparer også penger på sikt!`,
    },
    {
      id: 'fb-5-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Bærekraftige materialer** minimerer miljøbelastningen gjennom hele livssyklusen
- **Miljømerkeordninger** som Svanemerket, Fairtrade og FSC hjelper deg med å gjøre gode valg
- **Resirkulering og gjenbruk** reduserer avfall og sparer ressurser
- **Sirkulærøkonomi** handler om å bruke materialer lengst mulig

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Svanemerket | Det offisielle nordiske miljømerket |
| Fairtrade | Merkeordning som sikrer rettferdige arbeidsforhold |
| FSC | Sertifisering av bærekraftig skogbruk |
| Sirkulærøkonomi | Økonomisk modell der materialer brukes og gjenbrukes i kretsløp |`,
    },
  ],
  exercises: [
    {
      id: 'fb-5-5-ex-1',
      type: 'multiple-choice',
      task: 'Hvilket miljømerke sikrer at blomster er produsert under rettferdige arbeidsforhold?',
      options: [
        { id: 'a', text: 'Svanemerket', isCorrect: false },
        { id: 'b', text: 'FSC', isCorrect: false },
        { id: 'c', text: 'Fairtrade', isCorrect: true },
        { id: 'd', text: 'CE-merket', isCorrect: false },
      ],
      correctAnswer: 2,
      solution: 'Fairtrade sikrer rettferdige arbeidsforhold, anstendig lønn og bærekraftig produksjon. Merket finnes på blomster, kaffe, kakao, bomull og mange andre produkter.',
    },
    {
      id: 'fb-5-5-ex-2',
      type: 'multiple-choice',
      task: 'Hva kjennetegner sirkulærøkonomi?',
      options: [
        { id: 'a', text: 'Produser, bruk og kast', isCorrect: false },
        { id: 'b', text: 'Materialer brukes og gjenbrukes i kretsløp', isCorrect: true },
        { id: 'c', text: 'Alt produseres lokalt', isCorrect: false },
        { id: 'd', text: 'Kun bruk av naturmaterialer', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Sirkulærøkonomi handler om å holde materialer i bruk lengst mulig gjennom gjenbruk, reparasjon og materialgjenvinning, i motsetning til den lineære modellen produser-bruk-kast.',
    },
    {
      id: 'fb-5-5-ex-3',
      type: 'classic',
      task: 'Lag en plan for hvordan en blomsterbutikk kan redusere sitt plastforbruk. Nevn minst fem konkrete tiltak.',
      hints: ['Tenk på emballasje, oasis, bæreposer og leverandørvalg'],
      solution: 'Fem tiltak for å redusere plastforbruk: 1) Bruk papirbasert innpakking i stedet for cellofan. 2) Tilby gjenbrukbare bærenett fremfor plastposer. 3) Erstatt tradisjonell oasis med biologisk nedbrytbare alternativer eller chicken wire. 4) Velg leverandører som bruker minimal plastemballasje. 5) Bruk jutebånd og raffia i stedet for plastbånd. 6) Samle inn og gjenbruk potter og vaser. 7) Informer kunder om miljøvennlige alternativer.',
    },
    {
      id: 'fb-5-5-ex-4',
      type: 'classic',
      task: 'Diskuter fordeler og utfordringer med å drive en bærekraftig frisørsalong. Er det lønnsomt?',
      solution: 'Fordeler: Lavere energi- og vannkostnader over tid, tiltrekker miljøbevisste kunder, positiv merkevarebygging, bedre arbeidsmiljø med mindre kjemikalier, reduserte avfallskostnader. Utfordringer: Høyere innkjøpskost for miljømerkede produkter, kunden kan være prissensitiv, begrenset utvalg av miljøvennlige alternativer for noen produkttyper, krever opplæring og holdningsendring. Lønnsomhet: På kort sikt kan kostnadene være høyere, men på lang sikt sparer man på energi, vann og avfall. I tillegg kan miljøprofilen tiltrekke nye kunder som er villige til å betale litt mer.',
    },
  ],
  keyTerms: [
    { term: 'Svanemerket', definition: 'Det offisielle nordiske miljømerket for produkter og tjenester' },
    { term: 'Fairtrade', definition: 'Internasjonal merkeordning som sikrer rettferdige arbeidsforhold og lønn' },
    { term: 'FSC', definition: 'Forest Stewardship Council – sertifisering av bærekraftig skogbruk' },
    { term: 'Sirkulærøkonomi', definition: 'Økonomisk modell der materialer og produkter holdes i bruk lengst mulig' },
    { term: 'Upcycling', definition: 'Å gi brukte materialer nytt liv i en ny og ofte bedre form' },
  ],
};

// ============================================================================
// Kapittel 5.6: Produktkunnskap og leverandører
// ============================================================================

export const CHAPTER_FB_VG1_5_6: TextbookChapter = {
  id: 'frisor-blomster-vg1-5-6',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '5.6',
  title: 'Produktkunnskap og leverandører',
  description: 'Oversikt over produktsortiment, leverandørsamarbeid og innkjøpsprosesser i frisør-, blomster- og interiørbransjen. Elevene lærer om produktvalg, prissetting og leverandørvurdering.',
  estimatedMinutes: 35,
  competenceGoals: ['gjøre rede for produktsortiment og leverandører i bransjen', 'vurdere produkter ut fra kvalitet, pris og bærekraft'],
  content: [
    {
      id: 'fb-5-6-intro',
      type: 'text',
      content: `## Fra leverandør til kunde

Gode produkter er grunnlaget for godt håndverk. Uansett om du er frisør, blomsterdekoratør eller jobber med interiør og eksponering, må du kjenne produktsortimentet, vite hva som finnes på markedet og kunne samarbeide effektivt med leverandører.

I dette kapittelet skal du lære:
- Hvordan produktsortiment bygges opp
- Samarbeid med leverandører
- Innkjøpsprosessen og vurdering av produkter
- Trender og nyheter i markedet`,
    },
    {
      id: 'fb-5-6-def-1',
      type: 'definition',
      title: 'Produktsortiment',
      content: `**Produktsortiment** er det totale utvalget av produkter en bedrift tilbyr eller bruker. I en frisørsalong kan sortimentet omfatte sjampo, balsam, farger, stylingprodukter og tilbehør. Et godt sortiment er tilpasset kundenes behov og bedriftens profil.`,
    },
    {
      id: 'fb-5-6-text-1',
      type: 'text',
      title: 'Produktsortiment i bransjene',
      content: `### Frisørsalongens sortiment

**Profesjonelle produkter (til bruk i salongen):**
- Hårfarger og oksidanter
- Sjampo og balsam (salongtørrelser)
- Permanentvæsker og nøytraliseringsmidler
- Stylingprodukter for arbeid

**Videresalgsprodukter (til kunden):**
- Hjemmepleie-serier (sjampo, balsam, kur)
- Stylingprodukter
- Tilbehør (børster, kamteknikk, hårstrikker)
- Behandlingsprodukter

### Blomsterbutikkens sortiment

- Snittblomster (lokale og importerte)
- Potteplanter og grønne planter
- Jord, gjødsel og plantevern
- Vaser, potter og beholdere
- Dekorasjonsmaterialer og tilbehør`,
    },
    {
      id: 'fb-5-6-text-2',
      type: 'text',
      title: 'Leverandørsamarbeid',
      content: `### Valg og vurdering av leverandører

**Kriterier for leverandørvalg:**
- Produktkvalitet og sortimentsbredde
- Priser og betalingsbetingelser
- Leveringstider og leveringspålitelighet
- Service og opplæringstilbud
- Bærekraftsprofil og miljøsertifiseringer
- Garanti og returordninger

**Typer leverandører:**
- **Grossister:** Store innkjøpsvolum, lavere priser per enhet
- **Importører:** Direkte import, ofte spesialisert sortiment
- **Produsenter:** Direkte fra fabrikant, best pris, minst mellomledd
- **Auksjon (blomster):** Blomsterauksjoner i Nederland (Royal FloraHolland)
- **Nettbutikker:** Enkel bestilling, bred sammenligning

### Innkjøpsprosessen

1. Kartlegg behov og forbruk
2. Innhent tilbud fra flere leverandører
3. Sammenlign pris, kvalitet og vilkår
4. Forhandle avtale
5. Bestill og motta varer
6. Kontroller leveranse mot bestilling
7. Evaluer leverandøren jevnlig`,
    },
    {
      id: 'fb-5-6-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av leverandører',
      problem: 'En frisørsalong skal velge ny leverandør av hårfargeprodukter. Hvordan bør de gå frem?',
      solution: `**Steg 1: Kartlegg behov**
- Hvor mange fargebehandlinger gjøres per måned?
- Hvilke fargetyper trengs? (permanent, toning, fashion)
- Hva er budsjettet?

**Steg 2: Innhent tilbud fra 3–4 leverandører**
Sammenlign på følgende kriterier:

| Kriterium | Leverandør A | Leverandør B |
|-----------|-------------|-------------|
| Pris per tube | 89 kr | 95 kr |
| Fargeutvalg | 120 nyanser | 95 nyanser |
| Leveringstid | 2 dager | 1 dag |
| Opplæring | Gratis kurs | Betalt kurs |
| Miljøprofil | Svanemerket | Ikke merket |
| Returordning | Ja | Nei |

**Steg 3: Vurder helheten**
Selv om leverandør B har noe høyere pris, kan raskere levering og bedre opplæring gjøre den til et bedre valg totalt sett.`,
    },
    {
      id: 'fb-5-6-text-3',
      type: 'text',
      title: 'Trender og produktutvikling',
      content: `### Hold deg oppdatert

**Hvordan følge med på trender:**
- Messer og utstillinger (f.eks. Skandinavisk hår- og skjønnhetsmesse)
- Fagblader og nettsider
- Leverandørenes nyhetsbrev og produktlanseringer
- Sosiale medier og influencere
- Kollegaer og fagnettverk

**Viktige trender nå:**
- Naturlige og økologiske produkter
- Veganske og dyreforsøksfrie produkter
- Personaliserte løsninger (skreddersydd for den enkelte)
- Refill-ordninger og redusert emballasje
- Teknologiske løsninger (app-basert bestilling, fargematching)`,
    },
    {
      id: 'fb-5-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Produktsortiment** skal tilpasses kundenes behov og bedriftens profil
- **Leverandørvalg** krever systematisk vurdering av flere kriterier
- **Innkjøpsprosessen** følger faste steg fra behovskartlegging til evaluering
- **Trender** i bransjen går mot mer bærekraftige og personaliserte produkter

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Produktsortiment | Det totale utvalget av produkter en bedrift tilbyr |
| Grossist | Stor leverandør som selger i store volum |
| Innkjøpsprosess | Systematisk fremgangsmåte for å kjøpe inn varer |
| Betalingsbetingelser | Avtale om når og hvordan betaling skal skje |`,
    },
  ],
  exercises: [
    {
      id: 'fb-5-6-ex-1',
      type: 'multiple-choice',
      task: 'Hva er den viktigste fordelen med å kjøpe direkte fra produsenten?',
      options: [
        { id: 'a', text: 'Produktene er alltid bedre kvalitet', isCorrect: false },
        { id: 'b', text: 'Færre mellomledd gir ofte bedre pris', isCorrect: true },
        { id: 'c', text: 'Leveringen er alltid raskere', isCorrect: false },
        { id: 'd', text: 'Man slipper å betale moms', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Ved å kjøpe direkte fra produsenten kuttes mellomledd som grossist og distributør, noe som vanligvis gir en bedre pris. Ulempene kan være høyere minimumsbestillinger og lengre leveringstid.',
    },
    {
      id: 'fb-5-6-ex-2',
      type: 'classic',
      task: 'Nevn fem kriterier du vil vurdere når du skal velge leverandør til en blomsterbutikk. Ranger dem etter viktighet og begrunn.',
      hints: ['Tenk på det som er viktigst for at butikken skal fungere godt'],
      solution: '1) Leveringspålitelighet – blomster er ferskvare og forsinkelser gir direkte tap. 2) Produktkvalitet – friske blomster med lang holdbarhet er avgjørende for kundetilfredshet. 3) Pris – påvirker lønnsomheten direkte. 4) Sortimentsbredde – mulighet til å tilby kundene variert utvalg. 5) Bærekraftsprofil – Fairtrade- og miljøsertifiserte blomster etterspørres stadig mer. Leveringspålitelighet rangeres høyest fordi en dag uten blomster betyr tapt omsetning.',
    },
    {
      id: 'fb-5-6-ex-3',
      type: 'classic',
      task: 'Forklar forskjellen mellom profesjonelle produkter og videresalgsprodukter i en frisørsalong. Hvorfor er videresalg viktig?',
      solution: 'Profesjonelle produkter brukes i salongen av frisøren under behandling (farger, permanentvæsker, store sjampopumper). Videresalgsprodukter er produkter som selges til kunden for hjemmebruk (sjampo, balsam, kur, stylingprodukter i forbrukerstørrelser). Videresalg er viktig fordi: 1) Det gir ekstra inntekt utover behandlingene. 2) Det sikrer at kunden vedlikeholder resultatet hjemme. 3) Det bygger lojalitet – kunden kommer tilbake for å kjøpe mer. 4) Det styrker fagpersonens posisjon som rådgiver.',
    },
    {
      id: 'fb-5-6-ex-4',
      type: 'classic',
      task: 'Lag en sjekkliste for varemottak i en blomsterbutikk. Hva bør kontrolleres når en leveranse ankommer?',
      solution: 'Sjekkliste for varemottak: 1) Kontroller følgeseddelens innhold mot bestillingen (riktige varer og antall). 2) Sjekk blomstenes ferskhet (stilker, blader, knopper). 3) Kontroller temperatur – har kjølekjeden vært holdt? 4) Se etter skadde eller knekte blomster. 5) Sjekk at emballasjen er intakt. 6) Registrer eventuelle avvik og ta bilder. 7) Meld fra til leverandøren umiddelbart ved feil. 8) Sett blomstene på vann med blomstermat snarest mulig. 9) Arkiver følgeseddel for regnskapet.',
    },
  ],
  keyTerms: [
    { term: 'Produktsortiment', definition: 'Det totale utvalget av produkter en bedrift tilbyr eller bruker' },
    { term: 'Grossist', definition: 'Stor leverandør som selger varer i store volum til bedrifter' },
    { term: 'Innkjøpsprosess', definition: 'Systematisk fremgangsmåte for vurdering, valg og kjøp av varer' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const FRISOR_BLOMSTER_VG1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FB_VG1_5_1,
  CHAPTER_FB_VG1_5_2,
  CHAPTER_FB_VG1_5_3,
  CHAPTER_FB_VG1_5_4,
  CHAPTER_FB_VG1_5_5,
  CHAPTER_FB_VG1_5_6,
];
