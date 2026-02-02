/**
 * Biologi 1 - Kapittel 2.4: Gjæring og anaerob energiomsetning
 */
import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_2_4: TextbookChapter = {
  id: 'bio1-2-4',
  courseId: 'biologi-1',
  chapterNumber: '2.4',
  title: 'Gjæring og anaerob energiomsetning',
  description:
    'Melkesyregjæring og alkoholgjæring – hvordan celler produserer energi uten oksygen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for glykolysens rolle i anaerob energiomsetning',
    'forklare melkesyregjæring og hvor den forekommer',
    'forklare alkoholgjæring og dens biologiske og industrielle betydning',
    'sammenligne energiutbytte ved aerob og anaerob nedbrytning av glukose',
    'beskrive forskjellen mellom obligat og fakultativ anaerobe organismer',
    'gi eksempler på gjæring i naturen, kroppen og industrien',
  ],
  content: [
    // -----------------------------------------------------------------------
    // 1. Introduksjon: Hva skjer når oksygen mangler?
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-intro',
      type: 'text',
      title: 'Hva skjer når oksygen mangler?',
      content: `I de forrige kapitlene har vi sett hvordan cellen bryter ned glukose ved hjelp av oksygen gjennom celleånding. Denne prosessen – **aerob energiomsetning** – gir et stort energiutbytte i form av ATP. Men hva skjer dersom oksygentilgangen svikter?

Tenk deg at du sprinter hundre meter. Musklene dine jobber så hardt at blodet ikke klarer å levere nok oksygen. Likevel fortsetter musklene å produsere energi en stund til. Eller tenk på gjærsopp som lever dypt nede i en druekjerne, omgitt av sukker, men helt uten tilgang til luft. Begge disse organismene bruker **anaerob energiomsetning** – prosesser som produserer ATP uten oksygen.

Slike anaerobe prosesser er langt fra like effektive som celleånding, men de kan være avgjørende for å overleve i situasjoner der oksygen er en mangelvare.`,
    },

    // -----------------------------------------------------------------------
    // 2. Definisjon: Gjæring
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-def-gjaering',
      type: 'definition',
      title: 'Gjæring (fermentering)',
      content:
        '**Gjæring** (også kalt **fermentering**) er en anaerob metabolsk prosess der organiske molekyler brytes delvis ned uten bruk av oksygen. Gjæring omfatter glykolysen pluss en etterfølgende reaksjon som regenererer NAD⁺, slik at glykolysen kan fortsette. Nettoutbyttet er 2 ATP per glukosemolekyl.',
    },

    // -----------------------------------------------------------------------
    // 3. Hvorfor finnes anaerobe prosesser?
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-evolusjon',
      type: 'text',
      title: 'Evolusjonært perspektiv og nødenergi',
      content: `Anaerobe energiprosesser er sannsynligvis de eldste formene for energiomsetning i livets historie. De første cellene oppstod for ca. 3,8 milliarder år siden, i en atmosfære nesten helt uten fritt oksygen. Disse cellene måtte altså klare seg uten aerob celleånding. Gjæring var den viktigste energikilden.

Først for om lag 2,4 milliarder år siden begynte fotosyntetiserende cyanobakterier å produsere så mye oksygen at konsentrasjonen i atmosfæren steg. Da kunne aerob celleånding utvikle seg – en mye mer energieffektiv prosess.

Selv om aerob celleånding etter hvert ble dominerende, har gjæring overlevd som en viktig reserveløsning:

- **Nødenergi i muskelceller** – når oksygentilførselen ikke holder tritt med energibehovet under intens aktivitet.
- **Permanant energikilde for anaerobe organismer** – mikroorganismer som lever i oksygenfrie miljøer, for eksempel i dyp jord, sumper eller i fordøyelsessystemet til dyr.
- **Industriell utnyttelse** – mennesker har i tusenvis av år brukt gjæring til å lage brød, øl, vin, yoghurt og andre fermenterte matvarer.`,
    },

    // -----------------------------------------------------------------------
    // 4. Glykolysen fungerer fortsatt uten O₂
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-glykolyse-uten-o2',
      type: 'text',
      title: 'Glykolysen – det felles utgangspunktet',
      content: `Glykolysen er det første trinnet i nedbrytningen av glukose og foregår i **cytoplasmaet** (cellevæsken). Den krever ikke oksygen og er derfor felles for både aerob celleånding og gjæring.

I glykolysen brytes ett molekyl glukose (C₆H₁₂O₆) ned til to molekyler **pyruvat** (pyrodruesyre). Underveis skjer følgende:

- Det produseres **2 ATP** (netto).
- Det dannes **2 NADH** ved at NAD⁺ tar opp elektroner og hydrogenioner.

**Det sentrale problemet ved anaerobe forhold:**

Cellen har bare en begrenset mengde NAD⁺. Når NAD⁺ er brukt opp (omdannet til NADH), stopper glykolysen opp – det er ikke lenger noe NAD⁺ tilgjengelig som elektronakseptor. Under aerobe forhold regenereres NAD⁺ i elektrontransportkjeden i mitokondriene. Men uten oksygen er denne veien stengt.

**Gjæringens viktigste oppgave er å resirkulere NADH tilbake til NAD⁺**, slik at glykolysen kan fortsette å produsere ATP. Det er altså ikke gjæringen i seg selv som lager ATP – det er glykolysen. Gjæringen holder glykolysen i gang.`,
    },

    // -----------------------------------------------------------------------
    // 5. Note: NAD⁺-resirkulering
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-note-nad',
      type: 'note',
      title: 'Hvorfor er NAD⁺ så viktig?',
      content:
        'NAD⁺ fungerer som en elektronbærer. Når NAD⁺ tar opp to elektroner og et hydrogenion, blir det til NADH. Uten et system som omdanner NADH tilbake til NAD⁺, ville cellen raskt gå tom for NAD⁺, og glykolysen ville stoppe. Gjæring løser dette problemet ved å overføre elektroner fra NADH til pyruvat (eller et mellomprodukt av pyruvat), slik at NAD⁺ frigjøres.',
    },

    // -----------------------------------------------------------------------
    // 6. Definisjon: Melkesyregjæring
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-def-melkesyre',
      type: 'definition',
      title: 'Melkesyregjæring',
      content:
        '**Melkesyregjæring** (laktisk fermentering) er en form for gjæring der pyruvat reduseres direkte til **laktat** (melkesyre) ved hjelp av NADH. Reaksjonen regenererer NAD⁺ og gjør at glykolysen kan fortsette uten oksygen. Enzymet som katalyserer reaksjonen kalles **laktatdehydrogenase**.',
    },

    // -----------------------------------------------------------------------
    // 7. Melkesyregjæring i detalj
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-melkesyre-detalj',
      type: 'text',
      title: 'Melkesyregjæring',
      content: `Ved melkesyregjæring omdannes pyruvat direkte til laktat i én enkel reaksjon:

$$\\text{Pyruvat} + \\text{NADH} \\xrightarrow{\\text{laktatdehydrogenase}} \\text{Laktat} + \\text{NAD}^+$$

Legg merke til at reaksjonen ikke frigjør CO₂ – pyruvatmolekylets tre karbonatomer forblir intakte i laktat. Det viktige er at NADH oksideres tilbake til NAD⁺.

### Melkesyregjæring i muskelceller

Skjelettmusklene våre er normalt aerobe og bruker oksygen til å produsere ATP. Men under **intens fysisk aktivitet** – som sprint, tunge løft eller rask trappeløping – kan oksygenleveransen bli utilstrekkelig. Da trer melkesyregjæring inn som et «nødaggregat»:

1. Glykolysen bryter ned glukose til pyruvat og produserer 2 ATP.
2. Pyruvat reduseres til laktat, og NADH omdannes til NAD⁺.
3. NAD⁺ resirkuleres tilbake til glykolysen, som kan fortsette.

Resultatet er at muskelen kan produsere ATP raskt, men med lavere effektivitet. Laktat hoper seg opp i muskelen og senker pH-verdien (gjør miljøet surere). Dette bidrar til **muskeltretthet** og den brennende følelsen du kjenner når du anstrenger deg kraftig.

### Hva skjer med laktatet etterpå?

Laktat er ikke et avfallsprodukt som bare kastes. Når belastningen avtar og oksygentilførselen øker igjen, transporteres laktat via blodet til **leveren**. Der omdannes det tilbake til glukose gjennom en prosess kalt **glukoneogenese**. Denne glukosen kan sendes tilbake til musklene via blodet.

Denne sirkelen – laktat fra muskler til lever, glukose fra lever til muskler – kalles **Cori-syklusen** (oppkalt etter biokjemikerne Carl og Gerty Cori).

### Melkesyrebakterier

Melkesyregjæring skjer også i mange bakterier, for eksempel *Lactobacillus* og *Streptococcus*. Disse bakteriene bruker melkesyregjæring som sin primære energikilde. Resultatet er produksjon av melkesyre, som senker pH i miljøet rundt dem.

Denne egenskapen utnyttes i matproduksjon:
- **Yoghurt**: Melkesyrebakterier gjærer laktose i melk til melkesyre. Syren koagulerer proteiner og gir yoghurt sin tykke konsistens og syrlige smak.
- **Surkål (sauerkraut)**: Melkesyrebakterier fermenterer sukkeret i kål og produserer melkesyre som konserverer og gir smak.
- **Kimchi**: Fermenterte grønnsaker fra koreansk tradisjon, basert på melkesyregjæring.
- **Ost**: Melkesyrebakterier spiller en sentral rolle i mange osteproduksjonsprosesser.`,
    },

    // -----------------------------------------------------------------------
    // 8. Eksempel: Hvorfor brenner musklene under sprint
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-ex-muskler',
      type: 'example',
      title: 'Hvorfor brenner musklene under sprint?',
      problem:
        'Du sprinter 200 meter og kjenner en intens brennende følelse i lårmusklene mot slutten. Forklar hva som skjer på cellenivå.',
      solution: `Under en intens sprint jobber muskelcellene så hardt at oksygentilførselen fra blodet ikke klarer å holde tritt med energibehovet.

**Trinn for trinn:**

1. Muskelcellene trenger store mengder ATP raskt.
2. Oksygenleveransen er utilstrekkelig for full aerob celleånding.
3. Glykolysen fortsetter å bryte ned glukose til pyruvat (2 ATP).
4. Pyruvat kan ikke gå inn i sitronsyresyklusen (mangler oksygen i elektrontransportkjeden).
5. I stedet reduseres pyruvat til **laktat** via melkesyregjæring.
6. NADH omdannes til NAD⁺, slik at glykolysen kan fortsette.
7. Laktat hoper seg opp i muskelen og senker pH.
8. Den lave pH-en hemmer muskelenzymene og gir den brennende følelsen.
9. Etter sprinten transporteres laktat til leveren (Cori-syklusen), der det omdannes til glukose igjen.

Den brennende følelsen er altså et signal om at musklene har gått over til anaerob energiproduksjon.`,
    },

    // -----------------------------------------------------------------------
    // 9. Definisjon: Alkoholgjæring
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-def-alkoholgjaering',
      type: 'definition',
      title: 'Alkoholgjæring',
      content:
        '**Alkoholgjæring** (etanolisk fermentering) er en form for gjæring der pyruvat først dekarboksyleres til **acetaldehyd** (med frigjøring av CO₂), og deretter reduseres acetaldehyd til **etanol** ved hjelp av NADH. Prosessen regenererer NAD⁺ og forekommer blant annet i gjærceller (*Saccharomyces cerevisiae*).',
    },

    // -----------------------------------------------------------------------
    // 10. Alkoholgjæring i detalj
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-alkohol-detalj',
      type: 'text',
      title: 'Alkoholgjæring',
      content: `Alkoholgjæring er en totrinns prosess:

**Trinn 1 – Dekarboksylering:**

$$\\text{Pyruvat} \\xrightarrow{\\text{pyruvatdekarboksylase}} \\text{Acetaldehyd} + \\text{CO}_2$$

Et karbondioksidmolekyl (CO₂) spaltes av fra pyruvat. Tilbake står acetaldehyd, et tokarbonforbindelse.

**Trinn 2 – Reduksjon:**

$$\\text{Acetaldehyd} + \\text{NADH} \\xrightarrow{\\text{alkoholdehydrogenase}} \\text{Etanol} + \\text{NAD}^+$$

Acetaldehyd reduseres til etanol (alkohol) ved at NADH overfører elektroner. NAD⁺ regenereres.

### Samlet reaksjon for glykolyse + alkoholgjæring:

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 2\\,\\text{C}_2\\text{H}_5\\text{OH} + 2\\,\\text{CO}_2 + 2\\,\\text{ATP}$$

Glukose brytes altså ned til to molekyler etanol, to molekyler karbondioksid og to molekyler ATP.

### Gjærceller og *Saccharomyces cerevisiae*

Den viktigste organismen for alkoholgjæring er **bakegjær** (*Saccharomyces cerevisiae*), en encellet sopp. Denne gjærsoppen er **fakultativt anaerob** – den kan bruke både aerob celleånding (når oksygen er tilgjengelig) og alkoholgjæring (uten oksygen).

Når oksygen er tilstede, foretrekker gjærcellen aerob celleånding fordi det gir mye mer ATP. Men under anaerobe forhold skifter den til alkoholgjæring.

### Industriell og kulturell betydning

Alkoholgjæring har vært brukt av mennesker i tusenvis av år:

- **Brødbaking**: Gjærceller tilsettes deig. CO₂ som frigjøres under gjæringen, fanges i glutennettverket i deigen og får brødet til å heve. Etanolen fordamper under steking.
- **Ølbrygging**: Gjærceller fermenterer sukker fra malt (spiret korn). Etanol gir ølet alkoholinnhold, mens CO₂ gir kullsyre.
- **Vinproduksjon**: Gjærceller fermenterer fruktose og glukose i druesaft. Etanol akkumuleres til vin.
- **Bioetanol**: Gjæring av sukker- eller stivelsesholdige råvarer brukes til å produsere etanol som biodrivstoff.

### Etanol er giftig i høye konsentrasjoner

En viktig begrensning ved alkoholgjæring er at etanol er giftig for gjærcellene selv. Når etanolkonsentrasjonen når ca. **14–18 %**, dør de fleste gjærceller. Dette er grunnen til at vin sjelden har høyere alkoholprosent enn dette uten destillasjon. Prosessen er altså **selvbegrensende**.`,
    },

    // -----------------------------------------------------------------------
    // 11. Eksempel: Hvorfor hever brød seg?
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-ex-broed',
      type: 'example',
      title: 'Hvorfor hever brød seg?',
      problem:
        'Når du baker brød, tilsetter du gjær i deigen og lar den «heve» i en time. Forklar den biologiske prosessen bak hevingen.',
      solution: `Hevingen av brød skyldes **alkoholgjæring** i gjærceller:

1. Gjærcellene (*Saccharomyces cerevisiae*) bryter ned sukker i deigen via glykolysen til pyruvat.
2. Pyruvat dekarboksyleres til acetaldehyd – og **CO₂ frigjøres**.
3. Acetaldehyd reduseres til etanol (og NAD⁺ regenereres).
4. CO₂-gassen fanges i det elastiske glutennettverket i deigen.
5. Etter hvert som det dannes mer og mer CO₂, utvider gassblærene seg, og deigen hever.
6. Når brødet stekes i ovnen, fordamper etanolen og de siste CO₂-boblene utvider seg ytterligere, noe som gir brødet sin luftige struktur.

**Kort oppsummert:** Det er karbondioksidet fra alkoholgjæringen som får brødet til å heve. Etanolen er et biprodukt som fordamper under steking.`,
    },

    // -----------------------------------------------------------------------
    // 12. Energisammenligning: aerob vs. anaerob
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-energisammenligning',
      type: 'text',
      title: 'Energiutbytte: aerob vs. anaerob',
      content: `En av de viktigste forskjellene mellom aerob og anaerob energiomsetning er **energiutbyttet**:

| Prosess | ATP per glukose | Sluttprodukt(er) |
|---|---|---|
| Aerob celleånding | ca. 30–32 ATP | CO₂ + H₂O |
| Melkesyregjæring | 2 ATP | Laktat |
| Alkoholgjæring | 2 ATP | Etanol + CO₂ |

### Hvorfor er forskjellen så stor?

Ved aerob celleånding brytes glukose **fullstendig** ned til CO₂ og H₂O. All den kjemiske energien i glukose utvinnes gjennom glykolysen, sitronsyresyklusen og elektrontransportkjeden.

Ved gjæring brytes glukose bare **delvis** ned. Mesteparten av den kjemiske energien forblir lagret i sluttproduktet:

- **Laktat** inneholder nesten like mye energi som pyruvat – bare to karbon-hydrogenelektroner er forskjøvet.
- **Etanol** er et energirikt molekyl (det er derfor etanol kan brenne og brukes som drivstoff).

Gjæring er altså en «nødløsning» som bare henter ut en liten del av den potensielle energien i glukose. Men den er rask og fungerer uten oksygen – noe som kan være avgjørende for overlevelse.`,
    },

    // -----------------------------------------------------------------------
    // 13. Eksempel: Energiregnskap – aerob vs. anaerob
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-ex-energi',
      type: 'example',
      title: 'Energiregnskap: aerob vs. anaerob nedbrytning',
      problem:
        'Et glukosemolekyl inneholder ca. 2870 kJ energi. Sammenlign hvor mye av denne energien som utvinnes ved aerob celleånding og ved gjæring. Bruk at ett ATP tilsvarer ca. 30,5 kJ.',
      solution: `**Aerob celleånding:**
- Utbytte: ca. 30–32 ATP
- Energi utvunnet: 32 x 30,5 kJ = ca. **976 kJ**
- Effektivitet: 976 / 2870 = ca. **34 %**
- Resten (ca. 66 %) frigjøres som varme.

**Gjæring (melkesyre eller alkohol):**
- Utbytte: 2 ATP
- Energi utvunnet: 2 x 30,5 kJ = ca. **61 kJ**
- Effektivitet: 61 / 2870 = ca. **2,1 %**
- Resten av energien er fortsatt bundet i laktat eller etanol.

**Konklusjon:** Aerob celleånding er ca. 16 ganger mer effektiv enn gjæring. Dette forklarer hvorfor organismer med tilgang til oksygen nesten alltid foretrekker aerob energiproduksjon.`,
    },

    // -----------------------------------------------------------------------
    // 14. Definisjon: Fakultativ anaerob og obligat anaerob
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-def-fakultativ',
      type: 'definition',
      title: 'Fakultativ anaerob',
      content:
        'En **fakultativ anaerob** organisme kan veksle mellom aerob celleånding og anaerob gjæring, avhengig av om oksygen er tilgjengelig. Eksempler er gjærceller (*Saccharomyces cerevisiae*) og mange av kroppens celler (som muskelceller). Når oksygen er tilstede, brukes aerob celleånding fordi den gir mer ATP.',
    },
    {
      id: 'bio1-2-4-def-obligat',
      type: 'definition',
      title: 'Obligat anaerob',
      content:
        'En **obligat anaerob** organisme kan **bare** leve uten oksygen. Oksygen er faktisk giftig for disse organismene fordi de mangler enzymer som beskytter mot reaktive oksygenforbindelser (som superoksid og hydrogenperoksid). Eksempler er *Clostridium*-bakterier (blant annet årsak til stivkrampe og botulisme) og mange arkeer som lever i ekstreme miljøer.',
    },

    // -----------------------------------------------------------------------
    // 15. Anaerobe miljøer i naturen
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-anaerobe-miljoer',
      type: 'text',
      title: 'Anaerobe miljøer i naturen',
      content: `Selv om oksygen er rikelig i atmosfæren og i overflatevannet, finnes det mange steder i naturen der oksygenkonsentrasjonen er svært lav eller null. Her dominerer anaerobe organismer:

### Sumper og våtmarker
Når organisk materiale brytes ned under vannoverflaten, brukes oksygenet raskt opp. **Metanogene arkeer** (obligat anaerobe) bryter ned organisk materiale og produserer **metan** (CH₄) – det er derfor det bobler i myrer og sumper. Metan er en kraftig drivhusgass.

### Dyp jord og sedimenter
Dypt under overflaten er oksygennivået minimalt. Anaerobe bakterier dominerer og bryter ned organisk materiale gjennom gjæring og andre anaerobe prosesser.

### Dyphavet
Ved hydrotermale skorsteiner på havbunnen lever bakterier og arkeer som bruker kjemiske forbindelser (som hydrogensulfid) som energikilde i stedet for oksygen. Mange av disse er anaerobe.

### Fordøyelsessystemet
Tykktarmen hos mennesker og vom hos drøvtyggere er anaerobe miljøer der milliardvis av bakterier fermenterer ufordøyde plantefibre. Hos drøvtyggere produserer disse bakteriene fettsyrer som dyret bruker som energikilde – samt metan, som kuene raper ut.

### Industri: Biogassanlegg
I biogassanlegg utnyttes anaerobe prosesser bevisst. Organisk avfall (matavfall, gjødsel) brytes ned av anaerobe mikroorganismer i tanker uten oksygen. Sluttproduktet er **biogass** (hovedsakelig metan), som brukes til oppvarming eller strømproduksjon.`,
    },

    // -----------------------------------------------------------------------
    // 16. Warning: Obligat anaerobe og sykdom
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-warning-sykdom',
      type: 'warning',
      title: 'Obligat anaerobe bakterier og sykdom',
      content:
        'Noen obligat anaerobe bakterier kan forårsake alvorlige sykdommer. *Clostridium botulinum* produserer botulinumtoksin – et av de giftigste stoffene vi kjenner – og kan vokse i dårlig konservert mat (hermetikk uten nok varmebehandling). *Clostridium tetani* forårsaker stivkrampe når bakterien kommer inn i dype sår med lite oksygen. *Clostridium perfringens* kan forårsake gassgangren i infiserte sår. Felles for disse er at de trives i oksygenfrie miljøer.',
    },

    // -----------------------------------------------------------------------
    // 17. Industriell fermentering og bioteknologi
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-industri',
      type: 'text',
      title: 'Industriell fermentering og bioteknologi',
      content: `Mennesker har brukt gjæring i tusenvis av år – lenge før vi forsto den underliggende biologien. I dag er fermentering en viktig del av bioteknologien.

### Matproduksjon
- **Brød** – alkoholgjæring i gjær (CO₂ hever deigen)
- **Øl og vin** – alkoholgjæring i gjær (etanol som ønsket produkt)
- **Yoghurt, ost, rømme** – melkesyregjæring av melkesyrebakterier
- **Surkål, kimchi, tempeh** – melkesyregjæring av grønnsaker og bønner
- **Soyasaus** – fermentering med sopp og bakterier

### Biodrivstoff
Bioetanol produseres ved at gjærceller fermenterer sukker fra sukkerrør, mais eller celluloserik biomasse. Brasil og USA er verdens største produsenter av bioetanol, som blandes inn i bensin for å redusere klimautslipp.

### Medisin og farmasi
Fermentering brukes til å produsere en rekke legemidler:
- **Antibiotika** (f.eks. penicillin, produsert av soppen *Penicillium*)
- **Insulin** – genetisk modifiserte bakterier eller gjærceller fermenteres i store tanker for å produsere humant insulin
- **Vitaminer** – enkelte vitaminer (f.eks. B12) produseres industrielt ved hjelp av fermentering

### Pasteurs eksperimenter
Den franske kjemikeren **Louis Pasteur** (1822–1895) var den første som viste at gjæring er en biologisk prosess utført av levende mikroorganismer, ikke bare en kjemisk reaksjon. I sine berømte forsøk på 1850- og 1860-tallet viste han at:

1. Gjærceller er ansvarlige for alkoholgjæring.
2. Bakterier er ansvarlige for melkesyregjæring (og at disse forurenser vinproduksjon).
3. Oppvarming (pasteurisering) kan drepe uønskede mikroorganismer.

Pasteurs arbeid la grunnlaget for moderne mikrobiologi og bioteknologi.`,
    },

    // -----------------------------------------------------------------------
    // 18. Oppsummerende note
    // -----------------------------------------------------------------------
    {
      id: 'bio1-2-4-note-oppsummering',
      type: 'note',
      title: 'Oppsummering av gjæring',
      content: `De viktigste punktene å huske:

- Gjæring er en anaerob prosess som regenererer NAD⁺ slik at glykolysen kan fortsette.
- **Melkesyregjæring**: pyruvat → laktat. Forekommer i muskelceller og melkesyrebakterier.
- **Alkoholgjæring**: pyruvat → acetaldehyd + CO₂ → etanol. Forekommer i gjærceller.
- Begge gir bare **2 ATP per glukose** (mot 30–32 ATP ved aerob celleånding).
- **Fakultativ anaerobe** organismer kan veksle mellom aerob og anaerob energiomsetning.
- **Obligat anaerobe** organismer lever kun uten oksygen – oksygen er giftig for dem.
- Gjæring har stor betydning i matproduksjon, biodrivstoff og medisinsk bioteknologi.`,
    },
  ],

  // =========================================================================
  // OPPGAVER
  // =========================================================================
  exercises: [
    // ---- Oppgave 1: Flervalg – lett ----
    {
      id: 'bio1-2-4-ex1',
      number: '2.4.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er gjæringens viktigste funksjon i cellen?',
      options: [
        {
          id: 'a',
          text: 'Å produsere store mengder ATP',
          isCorrect: false,
          feedback:
            'Gjæring produserer bare 2 ATP per glukose – det er glykolysen som lager ATP, ikke gjæringen direkte.',
        },
        {
          id: 'b',
          text: 'Å regenerere NAD⁺ slik at glykolysen kan fortsette',
          isCorrect: true,
          feedback:
            'Riktig! Gjæringens hovedoppgave er å omdanne NADH tilbake til NAD⁺, slik at glykolysen ikke stopper opp.',
        },
        {
          id: 'c',
          text: 'Å bryte ned oksygen til vann',
          isCorrect: false,
          feedback:
            'Gjæring skjer nettopp fordi oksygen ikke er tilgjengelig.',
        },
        {
          id: 'd',
          text: 'Å produsere proteiner for cellen',
          isCorrect: false,
          feedback:
            'Gjæring handler om energiomsetning, ikke proteinproduksjon.',
        },
      ],
      hints: [
        'Tenk på hva som begrenser glykolysen under anaerobe forhold.',
      ],
      topic: 'gjæring',
    },

    // ---- Oppgave 2: Flervalg – lett ----
    {
      id: 'bio1-2-4-ex2',
      number: '2.4.2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er sluttproduktet ved melkesyregjæring?',
      options: [
        {
          id: 'a',
          text: 'Etanol og CO₂',
          isCorrect: false,
          feedback: 'Dette er sluttproduktene ved alkoholgjæring, ikke melkesyregjæring.',
        },
        {
          id: 'b',
          text: 'Laktat (melkesyre)',
          isCorrect: true,
          feedback:
            'Riktig! Ved melkesyregjæring reduseres pyruvat direkte til laktat.',
        },
        {
          id: 'c',
          text: 'CO₂ og H₂O',
          isCorrect: false,
          feedback: 'Dette er sluttproduktene ved aerob celleånding.',
        },
        {
          id: 'd',
          text: 'Acetaldehyd',
          isCorrect: false,
          feedback:
            'Acetaldehyd er et mellomprodukt i alkoholgjæring, ikke et sluttprodukt ved melkesyregjæring.',
        },
      ],
      hints: ['Melkesyregjæring har navnet sitt fra sluttproduktet.'],
      topic: 'melkesyregjæring',
    },

    // ---- Oppgave 3: Klassisk – lett ----
    {
      id: 'bio1-2-4-ex3',
      number: '2.4.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar kort hva som skjer med pyruvat under (a) melkesyregjæring og (b) alkoholgjæring.',
      solution:
        '**(a) Melkesyregjæring:** Pyruvat reduseres direkte til laktat (melkesyre) av enzymet laktatdehydrogenase. NADH omdannes til NAD⁺.\n\n**(b) Alkoholgjæring:** Pyruvat dekarboksyleres først til acetaldehyd (og CO₂ frigjøres). Deretter reduseres acetaldehyd til etanol av enzymet alkoholdehydrogenase. NADH omdannes til NAD⁺.',
      hints: [
        'Begge prosessene handler om å regenerere NAD⁺, men de gjør det på ulike måter.',
        'Tenk på om det frigjøres CO₂ eller ikke.',
      ],
      topic: 'gjæring',
    },

    // ---- Oppgave 4: Flervalg – medium ----
    {
      id: 'bio1-2-4-ex4',
      number: '2.4.4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mange ATP-molekyler produseres netto per glukosemolekyl ved gjæring (inkludert glykolysen)?',
      options: [
        {
          id: 'a',
          text: '0 ATP',
          isCorrect: false,
          feedback: 'Glykolysen, som er en del av gjæringen, produserer ATP.',
        },
        {
          id: 'b',
          text: '2 ATP',
          isCorrect: true,
          feedback:
            'Riktig! Glykolysen gir 2 ATP netto. Gjæringsreaksjonen i seg selv produserer ikke ekstra ATP – den regenererer bare NAD⁺.',
        },
        {
          id: 'c',
          text: '4 ATP',
          isCorrect: false,
          feedback:
            'Glykolysen produserer 4 ATP brutto, men bruker 2 ATP i investeringsfasen. Nettoutbyttet er 2 ATP.',
        },
        {
          id: 'd',
          text: '30–32 ATP',
          isCorrect: false,
          feedback: 'Dette er utbyttet ved aerob celleånding, ikke ved gjæring.',
        },
      ],
      hints: [
        'Husk at gjæringen selv ikke produserer ATP – det gjør glykolysen.',
      ],
      topic: 'energiutbytte',
    },

    // ---- Oppgave 5: Klassisk – medium ----
    {
      id: 'bio1-2-4-ex5',
      number: '2.4.5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva Cori-syklusen er, og hvorfor den er viktig under fysisk aktivitet.',
      solution:
        'Cori-syklusen er en metabolsk syklus mellom muskelceller og leveren:\n\n1. Under intens fysisk aktivitet produserer muskelcellene laktat gjennom melkesyregjæring.\n2. Laktat transporteres via blodet til leveren.\n3. I leveren omdannes laktat tilbake til glukose gjennom glukoneogenese.\n4. Den nye glukosen sendes tilbake til musklene via blodet.\n\nCori-syklusen er viktig fordi den fjerner laktat fra musklene (som ellers ville hemme muskelfunksjon) og resirkulerer karbonskjelettet tilbake til brukbart drivstoff. Prosessen krever energi (ATP) i leveren, men den foregår når leveren har tilstrekkelig oksygentilgang.',
      hints: [
        'Syklusen involverer to organer. Tenk på hva som transporteres mellom dem.',
        'Oppkalt etter Carl og Gerty Cori.',
      ],
      topic: 'melkesyregjæring',
    },

    // ---- Oppgave 6: Klassisk – medium ----
    {
      id: 'bio1-2-4-ex6',
      number: '2.4.6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En baker tilsetter gjær i brøddeig og lar den heve i en varm bolle. Etter en time har deigen doblet seg i størrelse. Forklar hvilken kjemisk prosess som har funnet sted, og identifiser de viktigste produktene.',
      solution:
        'Gjærcellene (*Saccharomyces cerevisiae*) i deigen utfører alkoholgjæring:\n\n1. **Glykolyse:** Gjærcellene bryter ned sukker (glukose) i deigen til pyruvat. Dette gir 2 ATP.\n2. **Gjæring:** Pyruvat dekarboksyleres til acetaldehyd, og CO₂ frigjøres. Deretter reduseres acetaldehyd til etanol.\n\nDe viktigste produktene er:\n- **Karbondioksid (CO₂)** – fanges i glutennettverket og danner gassbobler som får deigen til å heve.\n- **Etanol** – dannes som biprodukt, men fordamper under steking.\n- **ATP** – brukes av gjærcellene til egen energi.\n\nVarmen i bollen øker gjærcellenes stoffskifte og dermed hastigheten på gjæringen.',
      hints: [
        'Hvilken type gjæring utfører gjærceller?',
        'Tenk på hvilken gass som gjør at deigen utvider seg.',
      ],
      topic: 'alkoholgjæring',
    },

    // ---- Oppgave 7: Flervalg – medium ----
    {
      id: 'bio1-2-4-ex7',
      number: '2.4.7',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner en fakultativ anaerob organisme?',
      options: [
        {
          id: 'a',
          text: 'Den kan bare leve uten oksygen',
          isCorrect: false,
          feedback: 'Dette beskriver en obligat anaerob organisme.',
        },
        {
          id: 'b',
          text: 'Den kan bare leve med oksygen',
          isCorrect: false,
          feedback: 'Dette beskriver en obligat aerob organisme.',
        },
        {
          id: 'c',
          text: 'Den kan veksle mellom aerob og anaerob energiomsetning',
          isCorrect: true,
          feedback:
            'Riktig! Fakultativ anaerobe organismer bruker aerob celleånding når oksygen er tilgjengelig, men kan skifte til gjæring under anaerobe forhold.',
        },
        {
          id: 'd',
          text: 'Den produserer oksygen som biprodukt',
          isCorrect: false,
          feedback:
            'Det er fotosyntetiserende organismer som produserer oksygen, ikke fakultative anaerobe.',
        },
      ],
      hints: [
        'Ordet «fakultativ» betyr «valgfri» – organismen har et valg.',
      ],
      topic: 'anaerobe organismer',
    },

    // ---- Oppgave 8: Klassisk – medium ----
    {
      id: 'bio1-2-4-ex8',
      number: '2.4.8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor vin sjelden har høyere alkoholprosent enn ca. 14–18 % uten destillasjon.',
      solution:
        'Etanol (alkohol) er giftig for gjærcellene som produserer den. Etter hvert som gjærcellene fermenterer sukker i druesaften, øker etanolkonsentrasjonen gradvis. Når konsentrasjonen når ca. 14–18 %, blir miljøet så giftig at gjærcellene dør eller slutter å fungere. Gjæringen stopper da opp av seg selv.\n\nDette betyr at alkoholgjæring er **selvbegrensende** – organismen ødelegger etter hvert sitt eget levemiljø med avfallsproduktet (etanol). For å oppnå høyere alkoholkonsentrasjon må man bruke destillasjon, der alkohol skilles fra vannet ved fordamping og kondensering.',
      hints: [
        'Tenk på forholdet mellom gjærcellene og deres eget avfallsprodukt.',
      ],
      topic: 'alkoholgjæring',
    },

    // ---- Oppgave 9: Klassisk – vanskelig ----
    {
      id: 'bio1-2-4-ex9',
      number: '2.4.9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign aerob celleånding og gjæring med hensyn til (a) hvor prosessene foregår i cellen, (b) behov for oksygen, (c) sluttprodukter, (d) ATP-utbytte, og (e) hvorfor energiutbyttet er så forskjellig.',
      solution:
        '**(a) Lokalisering i cellen:**\n- Aerob celleånding: Glykolysen i cytoplasmaet, sitronsyresyklusen i mitokondriematriks, elektrontransportkjeden i indre mitokondriemembran.\n- Gjæring: Hele prosessen (glykolyse + gjæringsreaksjonen) foregår i cytoplasmaet.\n\n**(b) Behov for oksygen:**\n- Aerob celleånding: Krever oksygen som siste elektronakseptor i elektrontransportkjeden.\n- Gjæring: Krever ikke oksygen. Pyruvat (eller acetaldehyd) fungerer som elektronakseptor.\n\n**(c) Sluttprodukter:**\n- Aerob celleånding: CO₂ og H₂O.\n- Melkesyregjæring: Laktat.\n- Alkoholgjæring: Etanol og CO₂.\n\n**(d) ATP-utbytte:**\n- Aerob celleånding: ca. 30–32 ATP per glukose.\n- Gjæring: 2 ATP per glukose.\n\n**(e) Hvorfor forskjellen er så stor:**\nVed aerob celleånding brytes glukose fullstendig ned – alle seks karbonatomer ender som CO₂, og all tilgjengelig energi utvinnes gjennom sitronsyresyklusen og elektrontransportkjeden. Ved gjæring brytes glukose bare delvis ned. Mesteparten av energien forblir lagret i sluttproduktet (laktat eller etanol). NADH-molekylene som dannes i glykolysen brukes til å regenerere NAD⁺ i stedet for å donere elektroner til elektrontransportkjeden, så denne energien går tapt for ATP-produksjon.',
      hints: [
        'Bruk en tabell for å organisere sammenligningen.',
        'Tenk på hva som skjer med NADH i de to prosessene.',
      ],
      topic: 'energiutbytte',
    },

    // ---- Oppgave 10: Flervalg – vanskelig ----
    {
      id: 'bio1-2-4-ex10',
      number: '2.4.10',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er oksygen giftig for obligat anaerobe organismer?',
      options: [
        {
          id: 'a',
          text: 'Fordi oksygen ødelegger cellemembranen direkte',
          isCorrect: false,
          feedback:
            'Oksygen ødelegger ikke cellemembranen direkte, men skaper skadelige biprodukter inne i cellen.',
        },
        {
          id: 'b',
          text: 'Fordi de mangler enzymer som nøytraliserer reaktive oksygenforbindelser (f.eks. superoksid og hydrogenperoksid)',
          isCorrect: true,
          feedback:
            'Riktig! Aerobe organismer har enzymer som superoksiddismutase og katalase som nøytraliserer farlige oksygenradikaler. Obligat anaerobe mangler disse enzymene, og de reaktive oksygenforbindelsene skader DNA, proteiner og lipider.',
        },
        {
          id: 'c',
          text: 'Fordi oksygen hemmer glykolysen',
          isCorrect: false,
          feedback: 'Oksygen hemmer ikke glykolysen – glykolysen fungerer både med og uten oksygen.',
        },
        {
          id: 'd',
          text: 'Fordi oksygen forhindrer celledelingen',
          isCorrect: false,
          feedback:
            'Problemet er ikke celledelingen spesifikt, men at reaktive oksygenforbindelser skader cellens makromolekyler.',
        },
      ],
      hints: [
        'Tenk på hvilke skadelige stoffer som kan dannes når oksygen reagerer inne i cellen.',
        'Aerobe organismer har beskyttelsesmekanismer som anaerobe mangler.',
      ],
      topic: 'anaerobe organismer',
    },

    // ---- Oppgave 11: Klassisk – vanskelig ----
    {
      id: 'bio1-2-4-ex11',
      number: '2.4.11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Louis Pasteur oppdaget at gjærceller forbruker langt mer glukose under anaerobe forhold enn under aerobe forhold for å oppnå samme mengde vekst. Dette kalles Pasteur-effekten. Forklar hvorfor dette skjer, med utgangspunkt i ATP-utbyttet ved de to prosessene.',
      solution:
        'Pasteur-effekten forklares av den store forskjellen i ATP-utbytte mellom aerob celleånding og gjæring:\n\n- **Med oksygen (aerob celleånding):** Hvert glukosemolekyl gir ca. 30–32 ATP.\n- **Uten oksygen (alkoholgjæring):** Hvert glukosemolekyl gir bare 2 ATP.\n\nGjærcellene trenger en viss mengde ATP for å vokse og formere seg. For å oppnå denne mengden ATP under anaerobe forhold, må de bryte ned ca. **15–16 ganger flere glukosemolekyler** enn under aerobe forhold.\n\nEksempel: Hvis cellen trenger 320 ATP for en bestemt mengde vekst:\n- Aerob: 320 / 32 = 10 glukosemolekyler\n- Anaerob: 320 / 2 = 160 glukosemolekyler\n\nDerfor observerte Pasteur at gjærceller forbrukte mye mer sukker uten oksygen. Når oksygen ble tilført, sank glukoseforbruket drastisk fordi aerob celleånding er så mye mer effektiv.',
      hints: [
        'Sammenlign ATP-utbyttet per glukose for de to prosessene.',
        'Hvis cellen trenger like mye ATP i begge tilfeller, hvor mange glukosemolekyler trengs?',
      ],
      topic: 'energiutbytte',
    },

    // ---- Oppgave 12: Klassisk – vanskelig ----
    {
      id: 'bio1-2-4-ex12',
      number: '2.4.12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Gi tre eksempler på hvordan fermentering brukes i industrien i dag, og forklar for hvert eksempel hvilken type gjæring som er involvert og hvilken organisme som brukes.',
      solution:
        '**1. Yoghurtproduksjon – melkesyregjæring:**\nMelkesyrebakterier (f.eks. *Lactobacillus bulgaricus* og *Streptococcus thermophilus*) fermenterer laktose (melkesukker) til melkesyre. Melkesyren senker pH-en i melken, noe som får kasein (melkeprotein) til å koagulere og gir yoghurt sin tykke konsistens og syrlige smak.\n\n**2. Bioetanolproduksjon – alkoholgjæring:**\nGjærceller (*Saccharomyces cerevisiae*) fermenterer sukker fra sukkerrør eller mais til etanol og CO₂. Etanolen destilleres og brukes som biodrivstoff (blandes ofte i bensin). Brasil er verdens største produsent av sukkerrørbasert bioetanol.\n\n**3. Insulinproduksjon – fermentering med genetisk modifiserte organismer:**\nGenetisk modifiserte bakterier (*Escherichia coli*) eller gjærceller dyrkes i store fermentorer. De har fått satt inn det humane insulingenet og produserer insulin som biprodukt av sin vekst. Fermenteringsprosessen styres nøye med hensyn til temperatur, pH og næringsstoffer for å maksimere insulinproduksjonen.',
      hints: [
        'Tenk på matproduksjon, energiproduksjon og medisinsk bruk.',
        'Husk å skille mellom melkesyregjæring og alkoholgjæring.',
      ],
      topic: 'industriell fermentering',
    },
  ],
};
