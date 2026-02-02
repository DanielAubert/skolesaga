/**
 * Biologi 1 - Kapittel 2.2: Celleånding
 *
 * Glykolyse, pyruvatoksidasjon, sitronsyresyklus og elektrontransportkjeden
 * - hvordan celler bryter ned glukose til ATP.
 */
import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_2_2: TextbookChapter = {
  id: 'bio1-2-2',
  courseId: 'biologi-1',
  chapterNumber: '2.2',
  title: 'Celleånding',
  description:
    'Glykolyse, pyruvatoksidasjon, sitronsyresyklus og elektrontransportkjeden – hvordan celler bryter ned glukose til ATP.',
  estimatedMinutes: 90,
  competenceGoals: [
    'Gjøre rede for hovedtrekkene i celleånding, inkludert glykolyse, sitronsyresyklus og oksidativ fosforylering',
    'Forklare hvordan energien i glukose omdannes til ATP gjennom flere trinn',
    'Beskrive hvor i cellen de ulike trinnene i celleåndingen foregår',
    'Forklare rollen til oksygen som endelig elektronakseptor i elektrontransportkjeden',
    'Sammenligne energiutbyttet ved aerob og anaerob nedbrytning av glukose',
    'Forklare hvordan celleåndingen reguleres av tilbakekoblingsmekanismer',
    'Beskrive sammenhengen mellom nedbrytning av karbohydrater, fettsyrer og aminosyrer i cellens energiomsetning',
  ],
  keyTerms: [
    { term: 'ATP', definition: 'Adenosintrifosfat - cellens viktigste energimolekyl' },
    { term: 'NAD⁺/NADH', definition: 'Elektronbærer som frakter elektroner til elektrontransportkjeden' },
    { term: 'FAD/FADH₂', definition: 'Elektronbærer som frakter elektroner til kompleks II i elektrontransportkjeden' },
    { term: 'Acetyl-CoA', definition: 'Aktivert eddiksyre som inngår i sitronsyresyklus' },
    { term: 'Pyruvat', definition: 'Sluttprodukt av glykolysen, tremolekyl med tre karbonatomer' },
    { term: 'Kjemiosmose', definition: 'Prosessen der protongradient over en membran driver ATP-syntese' },
    { term: 'Oksidativ fosforylering', definition: 'ATP-produksjon koblet til elektrontransport og kjemiosmose' },
    { term: 'Substratfosforylering', definition: 'Direkte overføring av fosfatgruppe fra substrat til ADP' },
  ],

  content: [
    // ====================================================================
    // INNLEDNING
    // ====================================================================
    {
      id: 'bio1-2-2-intro',
      type: 'text',
      title: 'Innledning: Energi for livet',
      content:
        'Alle levende celler trenger energi for å opprettholde sine livsprosesser - fra muskelsammentrekninger og nerveimpulser til celledeling og proteinsyntese. Denne energien henter cellene primært fra **celleånding** (cellulær respirasjon), en prosess der organiske molekyler som glukose brytes ned trinnvis og energien lagres i **ATP** (adenosintrifosfat).\n\n' +
        'Celleånding er i prinsippet det motsatte av fotosyntese. Mens fotosyntesen bygger opp glukose fra karbondioksid og vann ved hjelp av lysenergi, bryter celleåndingen ned glukose og frigjør energien som ATP.\n\n' +
        'Den totale reaksjonslikningen for celleånding er:\n\n' +
        '$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi (ATP + varme)}$$\n\n' +
        'Selv om totalreaksjonen ser enkel ut, skjer celleåndingen gjennom en lang rekke enzymkatalyserte trinn fordelt på fire hovedstadier:\n\n' +
        '1. **Glykolyse** (i cytoplasma)\n' +
        '2. **Pyruvatoksidasjon** (i mitokondriens matriks)\n' +
        '3. **Sitronsyresyklus** / Krebs syklus (i mitokondriens matriks)\n' +
        '4. **Elektrontransportkjeden og oksidativ fosforylering** (i mitokondriens indre membran)\n\n' +
        'I dette kapittelet skal vi se nærmere på hvert av disse trinnene, forstå hvor de foregår i cellen, og gjøre opp et fullstendig energiregnskap for nedbrytning av ett glukosemolekyl.',
    },

    // ====================================================================
    // HVOR SKJER CELLEÅNDINGEN?
    // ====================================================================
    {
      id: 'bio1-2-2-lokalisering',
      type: 'text',
      title: 'Hvor skjer celleåndingen?',
      content:
        'Celleåndingen foregår på to ulike steder i cellen:\n\n' +
        '**Cytoplasma (cellevæsken)**\n' +
        'Det første trinnet - glykolysen - foregår fritt i cytoplasma. Dette er en gammel metabolsk prosess som finnes i nesten alle organismer, også de som lever uten oksygen. Glykolysen krever ingen membranbundne organeller.\n\n' +
        '**Mitokondriene**\n' +
        'De tre siste trinnene foregår i mitokondriene - cellens «kraftverk». Mitokondriene har en spesiell struktur med to membraner:\n\n' +
        '- **Ytre membran**: Glatt membran som omslutter hele organellen. Den er permeabel for små molekyler.\n' +
        '- **Indre membran**: Sterkt foldet membran som danner **cristae** (folder). Her sitter proteinkompleksene i elektrontransportkjeden og ATP-syntase. Foldingen øker overflatearealet enormt, noe som gir plass til flere kopier av transportkjeden.\n' +
        '- **Matriks**: Væsken innenfor den indre membranen. Her foregår pyruvatoksidasjon og sitronsyresyklus. Matriks inneholder enzymer, eget DNA og ribosomer.\n' +
        '- **Intermembranrommet**: Rommet mellom ytre og indre membran. Hit pumpes protoner (H⁺) under elektrontransporten, noe som skaper den protongradienten som driver ATP-syntese.\n\n' +
        'Denne doble membranstrukturen er helt avgjørende for at oksidativ fosforylering skal fungere, fordi den tillater oppbygging av en protongradient.',
    },

    // ====================================================================
    // DEFINISJON: GLYKOLYSE
    // ====================================================================
    {
      id: 'bio1-2-2-def-glykolyse',
      type: 'definition',
      title: 'Glykolyse',
      content:
        '**Glykolyse** (fra gresk *glykys* = søt, *lysis* = spalting) er den metabolske prosessen der ett molekyl **glukose** (C₆H₁₂O₆) spaltes til to molekyler **pyruvat** (C₃H₄O₃). Glykolysen foregår i cytoplasma og krever ikke oksygen. Nettoutbyttet er 2 ATP og 2 NADH per glukosemolekyl.',
    },

    // ====================================================================
    // TRINN 1: GLYKOLYSE
    // ====================================================================
    {
      id: 'bio1-2-2-glykolyse',
      type: 'text',
      title: 'Trinn 1: Glykolyse',
      content:
        'Glykolysen er en serie av **ti enzymkatalyserte reaksjoner** som spalter ett glukosemolekyl (6 karbon) til to pyruvatmolekyler (3 karbon hver). Prosessen kan deles inn i to faser:\n\n' +
        '### Energiinvesteringsfasen (trinn 1-5)\n\n' +
        'I denne første fasen brukes energi for å «aktivere» glukosemolekylet. To ATP-molekyler forbrukes:\n\n' +
        '1. **Heksokinase** fosforylerer glukose til glukose-6-fosfat ved å overføre en fosfatgruppe fra ATP. Dette «fanger» glukosen inne i cellen fordi fosfatgruppen gjør molekylet ladet og ute av stand til å passere cellemembranen.\n' +
        '2. Glukose-6-fosfat omdannes til fruktose-6-fosfat av isomerase.\n' +
        '3. **Fosfofruktokinase (PFK)** fosforylerer fruktose-6-fosfat til fruktose-1,6-bisfosfat ved å bruke et nytt ATP-molekyl. Dette er det **hastighetsbegrensende trinnet** i glykolysen - altså det trinnet som bestemmer hvor raskt hele glykolysen går.\n' +
        '4. Aldolase spalter fruktose-1,6-bisfosfat (6 karbon) i to triosemolekyler med 3 karbon hver.\n' +
        '5. De to triosene omdannes til glyceraldehyd-3-fosfat (G3P).\n\n' +
        'Etter investeringsfasen har vi altså brukt 2 ATP og har to molekyler G3P.\n\n' +
        '### Energiutvinningsfasen (trinn 6-10)\n\n' +
        'I denne fasen høstes energi. Hvert G3P-molekyl gjennomgår fem reaksjoner (husk at vi har to G3P, så alt skjer dobbelt):\n\n' +
        '6. G3P oksideres, og NAD⁺ reduseres til **NADH**. Samtidig tilføyes en uorganisk fosfatgruppe (Pᵢ).\n' +
        '7-10. Gjennom en serie trinn overføres fosfatgrupper direkte til ADP, noe som danner **ATP ved substratfosforylering**. I alt produseres 4 ATP (2 per G3P).\n\n' +
        '### Nettoutbytte av glykolysen (per glukosemolekyl)\n\n' +
        '| Produsert | Forbrukt | Netto |\n' +
        '|---|---|---|\n' +
        '| 4 ATP | 2 ATP | **2 ATP** |\n' +
        '| 2 NADH | - | **2 NADH** |\n' +
        '| 2 pyruvat | - | **2 pyruvat** |\n\n' +
        'Glykolysen er en **anaerob** prosess - den krever ikke oksygen. Men de etterfølgende trinnene (pyruvatoksidasjon, sitronsyresyklus og oksidativ fosforylering) er **aerobe** og krever oksygen.',
    },

    // ====================================================================
    // NOTAT: REGULERING AV GLYKOLYSEN
    // ====================================================================
    {
      id: 'bio1-2-2-note-glykolyse-regulering',
      type: 'note',
      title: 'Regulering av glykolysen',
      content:
        'Glykolysen reguleres hovedsakelig gjennom enzymet **fosfofruktokinase (PFK)**, som katalyserer trinn 3 (det hastighetsbegrensende trinnet).\n\n' +
        '- **Hemmes av**: Høy konsentrasjon av ATP og sitrat. Når cellen har nok energi, bremses glykolysen.\n' +
        '- **Stimuleres av**: Høy konsentrasjon av AMP og ADP. Når cellen trenger energi, økes hastigheten.\n\n' +
        'Dette er et eksempel på **allosterisk regulering** - molekyler binder seg til enzymet på et annet sted enn det aktive setet og endrer enzymets form og aktivitet. Denne negative tilbakekoblingen sørger for at cellen ikke produserer mer ATP enn den trenger.',
    },

    // ====================================================================
    // DEFINISJON: PYRUVAT
    // ====================================================================
    {
      id: 'bio1-2-2-def-pyruvat',
      type: 'definition',
      title: 'Pyruvat',
      content:
        '**Pyruvat** (pyrodruesyre, C₃H₄O₃) er et organisk molekyl med tre karbonatomer som dannes som sluttprodukt av glykolysen. Pyruvat er et sentralt knutepunkt i stoffskiftet: ved tilgang på oksygen transporteres det inn i mitokondriene for videre aerob nedbrytning, mens det ved oksygenmangel kan omdannes til laktat (melkesyre) eller etanol gjennom gjæring.',
    },

    // ====================================================================
    // TRINN 2: PYRUVATOKSIDASJON
    // ====================================================================
    {
      id: 'bio1-2-2-pyruvatoksidasjon',
      type: 'text',
      title: 'Trinn 2: Pyruvatoksidasjon',
      content:
        'Når oksygen er tilgjengelig, transporteres pyruvat fra cytoplasma inn i **mitokondriens matriks** gjennom spesielle transportproteiner i mitokondriens membraner. Her gjennomgår pyruvat en viktig omdannelse som kobler glykolysen til sitronsyresyklus.\n\n' +
        '### Reaksjonen\n\n' +
        'Pyruvatoksidasjonen katalyseres av et stort **enzymkompleks** kalt **pyruvatdehydrogenase-komplekset**. Reaksjonen kan oppsummeres slik:\n\n' +
        '$$\\text{Pyruvat} + \\text{CoA} + \\text{NAD}^+ \\longrightarrow \\text{Acetyl-CoA} + \\text{CO}_2 + \\text{NADH}$$\n\n' +
        'I denne reaksjonen skjer tre ting:\n\n' +
        '1. **Dekarboksylering**: En karboksylgruppe fjernes fra pyruvat (3C) som CO₂. Det gjenstående fragmentet har to karbonatomer.\n' +
        '2. **Oksidasjon**: De to gjenværende karbonatomene oksideres, og NAD⁺ reduseres til NADH.\n' +
        '3. **Kobling til koenzym A**: Det oksiderte to-karbonfragmentet (acetylgruppe) bindes til koenzym A (CoA) og danner **acetyl-CoA**.\n\n' +
        '### Utbytte per glukose\n\n' +
        'Siden ett glukosemolekyl gir to pyruvatmolekyler, gjennomgår pyruvatoksidasjonen to ganger per glukose:\n\n' +
        '- 2 Acetyl-CoA produsert\n' +
        '- 2 CO₂ frigjort\n' +
        '- 2 NADH produsert\n\n' +
        'De to CO₂-molekylene som frigjøres her er de første av totalt seks karbondioksidmolekyler som frigjøres når glukose (6 karbon) brytes fullstendig ned.',
    },

    // ====================================================================
    // DEFINISJON: ACETYL-CoA
    // ====================================================================
    {
      id: 'bio1-2-2-def-acetyl-coa',
      type: 'definition',
      title: 'Acetyl-CoA',
      content:
        '**Acetyl-CoA** (acetyl-koenzym A) er et sentralt metabolsk molekyl der en acetylgruppe (to karbon) er bundet til koenzym A via en energirik tioestar-binding. Acetyl-CoA er inngangsporten til sitronsyresyklus og dannes fra nedbrytning av karbohydrater (via pyruvat), fettsyrer (via beta-oksidasjon) og visse aminosyrer. Det er et viktig knutepunkt der flere nedbrytningsveier møtes.',
    },

    // ====================================================================
    // DEFINISJON: SITRONSYRESYKLUS
    // ====================================================================
    {
      id: 'bio1-2-2-def-sitronsyresyklus',
      type: 'definition',
      title: 'Sitronsyresyklus (Krebs syklus)',
      content:
        '**Sitronsyresyklus** (også kalt Krebs syklus eller TCA-syklusen) er en syklisk serie av åtte enzymkatalyserte reaksjoner i mitokondriens matriks. Syklusen oksiderer acetylgruppen fra acetyl-CoA fullstendig til CO₂, og den høster energi i form av NADH, FADH₂ og GTP (som tilsvarer ATP). Syklusen er oppkalt etter det første produktet, sitrat (sitronsyre), som dannes når acetyl-CoA reagerer med oksaloacetat.',
    },

    // ====================================================================
    // TRINN 3: SITRONSYRESYKLUS
    // ====================================================================
    {
      id: 'bio1-2-2-sitronsyresyklus',
      type: 'text',
      title: 'Trinn 3: Sitronsyresyklus',
      content:
        'Sitronsyresyklusen foregår i **mitokondriens matriks** og fullføres én gang per acetyl-CoA. Siden hvert glukosemolekyl gir to acetyl-CoA, går syklusen **to ganger per glukose**.\n\n' +
        '### Hovedtrinnene i syklusen\n\n' +
        '**1. Kondensasjon**: Acetyl-CoA (2C) reagerer med **oksaloacetat** (4C) og danner **sitrat** (6C). Denne reaksjonen katalyseres av enzymet **sitratsyntase**. CoA frigjøres og kan brukes på nytt.\n\n' +
        '**2. Isomerisering**: Sitrat omdannes til isositrat ved at en hydroksylgruppe flyttes.\n\n' +
        '**3. Første oksidasjon og dekarboksylering**: Isositrat (6C) oksideres til alfa-ketoglutarat (5C). Ett CO₂ frigjøres og NAD⁺ reduseres til **NADH**. Enzymet **isositratdehydrogenase** katalyserer reaksjonen.\n\n' +
        '**4. Andre oksidasjon og dekarboksylering**: Alfa-ketoglutarat (5C) oksideres til suksinyl-CoA (4C). Enda ett CO₂ frigjøres og ett NADH produseres. Enzymet alfa-ketoglutarat-dehydrogenase katalyserer reaksjonen.\n\n' +
        '**5. Substratfosforylering**: Suksinyl-CoA omdannes til suksinat, og energien i CoA-bindingen brukes til å danne **GTP** (som raskt omdannes til ATP).\n\n' +
        '**6-8. Regenerering av oksaloacetat**: Suksinat oksideres trinnvis tilbake til oksaloacetat gjennom tre reaksjoner. I denne prosessen produseres **ett FADH₂** (trinn 6) og **ett NADH** (trinn 8). Oksaloacetat er nå klar for en ny runde.\n\n' +
        '### Utbytte per omgang av sitronsyresyklus\n\n' +
        '| Produkt | Antall per acetyl-CoA |\n' +
        '|---|---|\n' +
        '| CO₂ | 2 |\n' +
        '| NADH | 3 |\n' +
        '| FADH₂ | 1 |\n' +
        '| GTP (≈ ATP) | 1 |\n\n' +
        '### Utbytte per glukosemolekyl (2 omganger)\n\n' +
        '| Produkt | Antall per glukose |\n' +
        '|---|---|\n' +
        '| CO₂ | 4 |\n' +
        '| NADH | 6 |\n' +
        '| FADH₂ | 2 |\n' +
        '| GTP (≈ ATP) | 2 |\n\n' +
        'De fire CO₂-molekylene fra sitronsyresyklusen, sammen med de to fra pyruvatoksidasjonen, gir totalt **6 CO₂ per glukose** - nøyaktig de seks karbonatomene i det opprinnelige glukosemolekylet.\n\n' +
        'Legg merke til at syklusen ikke produserer mye ATP direkte. Den viktigste funksjonen er å **generere elektronbærerne NADH og FADH₂**, som bærer høyenergetiske elektroner videre til elektrontransportkjeden.',
    },

    // ====================================================================
    // NOTAT: AMFIBOL NATUR
    // ====================================================================
    {
      id: 'bio1-2-2-note-amfibol',
      type: 'note',
      title: 'Sitronsyresyklusens amfibole natur',
      content:
        'Sitronsyresyklusen er **amfibol** - det betyr at den har rolle i både nedbrytning (katabolisme) og oppbygging (anabolisme) av molekyler.\n\n' +
        '**Katabolsk rolle**: Syklusen bryter ned acetylgrupper og frigjør energi som NADH, FADH₂ og GTP.\n\n' +
        '**Anabolsk rolle**: Mellomprodukter i syklusen fungerer som utgangsmaterialer for biosyntese. For eksempel:\n' +
        '- **Oksaloacetat** kan omdannes til glukose (glukoneogenese) eller aminosyren aspartat.\n' +
        '- **Alfa-ketoglutarat** kan omdannes til aminosyren glutamat.\n' +
        '- **Suksinyl-CoA** brukes i syntesen av hem (en del av hemoglobin).\n' +
        '- **Sitrat** kan transporteres ut av mitokondriene og brukes til fettsyresyntese.\n\n' +
        'Når mellomprodukter trekkes ut til biosyntese, må de erstattes for at syklusen skal fortsette. Slike påfyllingsreaksjoner kalles **anaplerotiske reaksjoner**. Den viktigste er omdannelsen av pyruvat til oksaloacetat, katalysert av pyruvatkarboxylase.',
    },

    // ====================================================================
    // DEFINISJON: OKSIDATIV FOSFORYLERING
    // ====================================================================
    {
      id: 'bio1-2-2-def-oksidativ-fosforylering',
      type: 'definition',
      title: 'Oksidativ fosforylering',
      content:
        '**Oksidativ fosforylering** er prosessen der ATP dannes ved hjelp av energi frigjort fra elektrontransport gjennom proteinkomplekser i mitokondriens indre membran. Elektronene stammer fra NADH og FADH₂ og overføres til oksygen (O₂), som reduseres til vann (H₂O). Elektrontransporten driver pumping av protoner (H⁺) over den indre membranen, og den resulterende protongradienten utnyttes av ATP-syntase til å fosforylere ADP til ATP.',
    },

    // ====================================================================
    // DEFINISJON: ELEKTRONTRANSPORTKJEDEN
    // ====================================================================
    {
      id: 'bio1-2-2-def-elektrontransportkjeden',
      type: 'definition',
      title: 'Elektrontransportkjeden',
      content:
        '**Elektrontransportkjeden** (ETC, fra engelsk *Electron Transport Chain*) er en serie proteinkomplekser og mobile elektronbærere som sitter i mitokondriens indre membran. Kjeden overfører elektroner fra NADH og FADH₂ trinnvis til oksygen, og frigjør energi som brukes til å pumpe protoner fra matriks til intermembranrommet. Elektrontransportkjeden består av fire store proteinkomplekser (I-IV) samt de mobile bærerne ubikinon (koenzym Q) og cytokrom c.',
    },

    // ====================================================================
    // TRINN 4: ELEKTRONTRANSPORTKJEDEN OG OKSIDATIV FOSFORYLERING
    // ====================================================================
    {
      id: 'bio1-2-2-elektrontransport',
      type: 'text',
      title: 'Trinn 4: Elektrontransportkjeden og oksidativ fosforylering',
      content:
        'Elektrontransportkjeden og oksidativ fosforylering er det siste og mest energigivende trinnet i celleåndingen. Her foregår i mitokondriens indre membran. De 10 NADH- og 2 FADH₂-molekylene som er samlet fra glykolyse, pyruvatoksidasjon og sitronsyresyklus leverer sine elektroner til transportkjeden.\n\n' +
        '### Proteinkompleksene\n\n' +
        '**Kompleks I (NADH-dehydrogenase)**\n' +
        'Mottar elektroner fra NADH. NAD⁺ gjendannes og kan brukes igjen i metabolismen. Energien som frigjøres brukes til å pumpe **4 H⁺** fra matriks til intermembranrommet.\n\n' +
        '**Kompleks II (Suksinatdehydrogenase)**\n' +
        'Mottar elektroner fra FADH₂ (dette er det samme enzymet som trinn 6 i sitronsyresyklusen). Kompleks II pumper **ingen protoner** - derfor gir FADH₂ litt mindre ATP enn NADH.\n\n' +
        'Elektronene fra både kompleks I og kompleks II overføres til den mobile bæreren **ubikinon** (koenzym Q, forkortet Q), som frakter dem videre til kompleks III.\n\n' +
        '**Kompleks III (Cytokrom bc₁-komplekset)**\n' +
        'Mottar elektroner fra ubikinon og overfører dem til den mobile bæreren **cytokrom c**. Energien brukes til å pumpe **4 H⁺** til intermembranrommet.\n\n' +
        '**Kompleks IV (Cytokrom c-oksidase)**\n' +
        'Det siste komplekset mottar elektroner fra cytokrom c og overfører dem til **oksygen** (O₂), som er den endelige elektronakseptoren. Oksygen reduseres til **vann** (H₂O). Energien brukes til å pumpe **2 H⁺** til intermembranrommet.\n\n' +
        '$$\\text{O}_2 + 4\\text{H}^+ + 4e^- \\longrightarrow 2\\text{H}_2\\text{O}$$\n\n' +
        'Dette er grunnen til at vi trenger oksygen for å leve - uten O₂ stopper elektrontransportkjeden, og dermed stopper nesten all ATP-produksjon.\n\n' +
        '### Elektronstrømmen oppsummert\n\n' +
        'NADH → Kompleks I → Ubikinon → Kompleks III → Cytokrom c → Kompleks IV → O₂ → H₂O\n\n' +
        'FADH₂ → Kompleks II → Ubikinon → Kompleks III → Cytokrom c → Kompleks IV → O₂ → H₂O',
    },

    // ====================================================================
    // DEFINISJON: KJEMIOSMOSE
    // ====================================================================
    {
      id: 'bio1-2-2-def-kjemiosmose',
      type: 'definition',
      title: 'Kjemiosmose',
      content:
        '**Kjemiosmose** er prosessen der en protongradient (H⁺-konsentrasjonsforskjell) over en membran brukes til å drive ATP-syntese. Begrepet ble først foreslått av den britiske biokjemikeren Peter Mitchell i 1961, en teori som var kontroversiell i mange år, men som til slutt ga ham Nobelprisen i kjemi i 1978. Kjemiosmose koblet til elektrontransport er den dominerende mekanismen for ATP-produksjon i alle aerobe organismer.',
    },

    // ====================================================================
    // KJEMIOSMOSE OG ATP-SYNTASE
    // ====================================================================
    {
      id: 'bio1-2-2-kjemiosmose',
      type: 'text',
      title: 'Kjemiosmose og ATP-syntase',
      content:
        '### Protongradienten\n\n' +
        'Når elektrontransporten kjører, pumpes protoner (H⁺) aktivt fra matriks til intermembranrommet. Siden den indre membranen er nesten ugjennomtrengelig for protoner, bygges det opp en **protongradient** - en konsentrasjonsforskjell av H⁺ på tvers av membranen.\n\n' +
        'Denne gradienten har to komponenter:\n' +
        '- **Kjemisk gradient**: Høyere H⁺-konsentrasjon i intermembranrommet enn i matriks (pH-forskjell på ca. 1,4 enheter).\n' +
        '- **Elektrisk gradient**: Intermembranrommet er positivt ladet relativt til matriks.\n\n' +
        'Til sammen utgjør disse den **protonmotoriske kraften** (PMF), som lagrer energi omtrent som vann oppdemmet i en demning.\n\n' +
        '### ATP-syntase: cellens turbinmotor\n\n' +
        '**ATP-syntase** (også kalt kompleks V) er et stort enzymkompleks som sitter i mitokondriens indre membran. Det er en av naturens mest fascinerende molekylære maskiner - det fungerer bokstavelig talt som en rotasjonsmotor.\n\n' +
        'ATP-syntase har to hoveddeler:\n\n' +
        '- **F₀-delen**: Sitter i membranen og danner en kanal for protoner. Når H⁺ strømmer gjennom F₀, roterer en del av komplekset - som en vannturbin.\n' +
        '- **F₁-delen**: Stikker ut i matriks og inneholder de katalytiske setene der ATP dannes. Rotasjonen fra F₀ overfører mekanisk energi til F₁, som bruker denne energien til å presse ADP og Pᵢ (uorganisk fosfat) sammen til ATP.\n\n' +
        'For hvert ATP-molekyl som dannes, strømmer omtrent **3-4 protoner** gjennom ATP-syntase. Enzymet roterer med hastigheter på over 100 omdreininger per sekund og kan produsere opptil 600 ATP-molekyler per sekund.\n\n' +
        '$$\\text{ADP} + \\text{P}_i + \\text{H}^+_{\\text{intermembranrom}} \\xrightarrow{\\text{ATP-syntase}} \\text{ATP} + \\text{H}_2\\text{O} + \\text{H}^+_{\\text{matriks}}$$',
    },

    // ====================================================================
    // ADVARSEL: OKSYGENETS ROLLE
    // ====================================================================
    {
      id: 'bio1-2-2-warning-oksygen',
      type: 'warning',
      title: 'Oksygenets kritiske rolle',
      content:
        'Oksygen (O₂) fungerer som **endelig elektronakseptor** i elektrontransportkjeden. Uten oksygen har elektronene ingen «sluttdestinasjon», og hele kjeden stopper opp.\n\n' +
        'Når elektrontransportkjeden stopper:\n' +
        '- NADH og FADH₂ kan ikke reoksideres (levere sine elektroner)\n' +
        '- NAD⁺ og FAD gjendannes ikke\n' +
        '- Sitronsyresyklusen stopper (mangel på NAD⁺ og FAD)\n' +
        '- Pyruvatoksidasjon stopper\n' +
        '- Bare glykolysen kan fortsette (hvis pyruvat omdannes anaerobt til laktat eller etanol)\n\n' +
        'Dette er grunnen til at cyanid er dødelig: det blokkerer kompleks IV og forhindrer oksygen fra å motta elektroner, noe som effektivt stanser all aerob energiproduksjon.',
    },

    // ====================================================================
    // DEFINISJON: NADH
    // ====================================================================
    {
      id: 'bio1-2-2-def-nadh',
      type: 'definition',
      title: 'NADH',
      content:
        '**NADH** (nikotinamid-adenin-dinukleotid, redusert form) er en sentral **elektronbærer** i cellens energiomsetning. NADH dannes når NAD⁺ tar opp to elektroner og ett proton (H⁺) fra substrater i glykolyse, pyruvatoksidasjon og sitronsyresyklus. I elektrontransportkjeden leverer NADH sine elektroner til kompleks I, noe som frigjør energi til ATP-produksjon. Hvert NADH-molekyl bidrar til dannelsen av omtrent **2,5 ATP**.',
    },

    // ====================================================================
    // EKSEMPEL: ATP-REGNSKAP
    // ====================================================================
    {
      id: 'bio1-2-2-example-atp-regnskap',
      type: 'example',
      title: 'Komplett ATP-regnskap for ett glukosemolekyl',
      content:
        'La oss gjøre opp det fullstendige energiregnskapet for aerob nedbrytning av ett glukosemolekyl:\n\n' +
        '### Direkte ATP-produksjon (substratfosforylering)\n\n' +
        '| Trinn | ATP produsert |\n' +
        '|---|---|\n' +
        '| Glykolyse | 2 ATP (netto) |\n' +
        '| Sitronsyresyklus | 2 GTP ≈ 2 ATP |\n' +
        '| **Sum direkte** | **4 ATP** |\n\n' +
        '### Elektronbærere produsert\n\n' +
        '| Trinn | NADH | FADH₂ |\n' +
        '|---|---|---|\n' +
        '| Glykolyse | 2 | 0 |\n' +
        '| Pyruvatoksidasjon | 2 | 0 |\n' +
        '| Sitronsyresyklus | 6 | 2 |\n' +
        '| **Sum** | **10 NADH** | **2 FADH₂** |\n\n' +
        '### ATP fra oksidativ fosforylering\n\n' +
        '| Elektronbærer | Antall | ATP per molekyl | ATP totalt |\n' +
        '|---|---|---|---|\n' +
        '| NADH (fra mitokondrie) | 8 | ~2,5 | ~20 |\n' +
        '| NADH (fra glykolyse)* | 2 | ~1,5-2,5 | ~3-5 |\n' +
        '| FADH₂ | 2 | ~1,5 | ~3 |\n' +
        '| **Sum oksidativ fosfory.** | | | **~26-28 ATP** |\n\n' +
        '*De 2 NADH fra glykolysen dannes i cytoplasma og må transporteres inn i mitokondriene via skyttelsystemer, noe som koster litt energi.\n\n' +
        '### Totalt ATP-utbytte\n\n' +
        '$$\\text{Totalt} = 4 \\text{ ATP (substratfosforylering)} + 26\\text{-}28 \\text{ ATP (oksidativ fosforylering)} \\approx \\textbf{30-32 ATP}$$\n\n' +
        'Det teoretiske maksimale utbyttet er altså **30-32 ATP per glukosemolekyl**. Den eksakte verdien varierer noe mellom ulike celletyper og organismer, avhengig av hvilke skyttelsystemer som brukes for å transportere NADH-elektroner inn i mitokondriene.',
    },

    // ====================================================================
    // EKSEMPEL: UTEN OKSYGEN
    // ====================================================================
    {
      id: 'bio1-2-2-example-uten-oksygen',
      type: 'example',
      title: 'Hva skjer når oksygen mangler? Gjæring',
      problem:
        'Under intens fysisk aktivitet kan muskelcellene mangle oksygen. Hva skjer med glukosemetabolismen da?',
      solution:
        'Når oksygen mangler, kan ikke elektrontransportkjeden fungere. NADH hoper seg opp, og NAD⁺ brukes opp. Uten NAD⁺ stopper også glykolysen - med mindre NADH kan reoksideres på en annen måte.\n\n' +
        'Løsningen er **gjæring** (fermentering), som regenererer NAD⁺ uten elektrontransportkjeden:\n\n' +
        '**Melkesyregjæring** (i muskelceller):\n' +
        '$$\\text{Pyruvat} + \\text{NADH} \\longrightarrow \\text{Laktat} + \\text{NAD}^+$$\n' +
        'Pyruvat reduseres til laktat, og NADH reoksideres til NAD⁺. Laktat transporteres ut av muskelcellene og til leveren, der det kan omdannes tilbake til pyruvat eller glukose.\n\n' +
        '**Alkoholgjæring** (i gjærceller):\n' +
        '$$\\text{Pyruvat} \\longrightarrow \\text{Acetaldehyd} + \\text{CO}_2$$\n' +
        '$$\\text{Acetaldehyd} + \\text{NADH} \\longrightarrow \\text{Etanol} + \\text{NAD}^+$$\n' +
        'Pyruvat dekarboksyleres til acetaldehyd, som deretter reduseres til etanol. Denne prosessen brukes i ølbrygging, vinproduksjon og brødbaking.\n\n' +
        '**Viktig:** Ved gjæring produseres kun **2 ATP per glukose** (fra glykolysen alene) - dramatisk mindre enn de 30-32 ATP fra fullstendig aerob nedbrytning.',
    },

    // ====================================================================
    // EKSEMPEL: SAMMENLIGNING AEROB VS ANAEROB
    // ====================================================================
    {
      id: 'bio1-2-2-example-sammenligning',
      type: 'example',
      title: 'Sammenligning: aerob versus anaerob nedbrytning',
      problem: 'Sammenlign energiutbyttet og sluttproduktene ved aerob og anaerob nedbrytning av glukose.',
      solution:
        '| Egenskap | Aerob celleånding | Anaerob gjæring |\n' +
        '|---|---|---|\n' +
        '| **Krever O₂** | Ja | Nei |\n' +
        '| **Trinn** | Glykolyse + pyruvatoksidasjon + sitronsyresyklus + elektrontransportkjede | Glykolyse + gjæring |\n' +
        '| **ATP-utbytte** | 30-32 ATP per glukose | 2 ATP per glukose |\n' +
        '| **Sluttprodukter** | CO₂ + H₂O | Laktat eller etanol + CO₂ |\n' +
        '| **Energieffektivitet** | ~34 % av glukosens energi | ~2 % av glukosens energi |\n' +
        '| **Hvor** | Cytoplasma + mitokondrier | Bare cytoplasma |\n' +
        '| **Hastighet** | Langsommere | Raskere |\n\n' +
        'Aerob celleånding er altså omtrent **15-16 ganger mer effektiv** enn anaerob gjæring. Gjæring er likevel viktig fordi den er rask og fungerer uten oksygen - noe som kan være avgjørende i situasjoner med oksygenmangel.',
    },

    // ====================================================================
    // FULLSTENDIG ENERGIREGNSKAP
    // ====================================================================
    {
      id: 'bio1-2-2-energiregnskap',
      type: 'text',
      title: 'Fullstendig energiregnskap',
      content:
        'La oss oppsummere hva som skjer med de seks karbonatomene, tolv hydrogenatomene og seks oksygenatomene i ett glukosemolekyl (C₆H₁₂O₆) gjennom hele celleåndingen:\n\n' +
        '### Karbonatomene\n' +
        'De seks karbonatomene i glukose frigjøres som **6 CO₂**:\n' +
        '- 2 CO₂ fra pyruvatoksidasjon\n' +
        '- 4 CO₂ fra sitronsyresyklusen\n\n' +
        '### Hydrogenatomene\n' +
        'De tolv hydrogenatomene (pluss ytterligere hydrogen fra vann som deltar i reaksjonene) ender opp i **NADH og FADH₂**, som til slutt leverer elektronene til O₂ i elektrontransportkjeden. H⁺ og elektroner kombineres med O₂ til **H₂O**.\n\n' +
        '### Oksygenatomene\n' +
        'Glukosens oksygenatomer ender opp i CO₂. De 6 O₂-molekylene vi puster inn brukes som elektronakseptor i elektrontransportkjeden og danner 6 H₂O.\n\n' +
        '### Samlet energioversikt per glukose\n\n' +
        '| Trinn | Lokalisering | ATP | NADH | FADH₂ | CO₂ |\n' +
        '|---|---|---|---|---|---|\n' +
        '| Glykolyse | Cytoplasma | 2 | 2 | 0 | 0 |\n' +
        '| Pyruvatoksidasjon | Matriks | 0 | 2 | 0 | 2 |\n' +
        '| Sitronsyresyklus | Matriks | 2 | 6 | 2 | 4 |\n' +
        '| Oks. fosforylering | Indre membran | ~26-28 | -10 | -2 | 0 |\n' +
        '| **Totalt** | | **~30-32** | **0** | **0** | **6** |\n\n' +
        'I den siste raden ser vi at alle NADH og FADH₂ er «brukt opp» - de har levert elektronene sine til elektrontransportkjeden. Nettoresultatet er:\n\n' +
        '$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{30-32 ATP}$$',
    },

    // ====================================================================
    // REGULERING AV CELLEÅNDING
    // ====================================================================
    {
      id: 'bio1-2-2-regulering',
      type: 'text',
      title: 'Regulering av celleåndingen',
      content:
        'Celleåndingen reguleres nøye for å matche cellens energibehov. Det viktigste prinsippet er **negativ tilbakekobling**: når cellen har nok ATP, bremses nedbrytningen; når ATP brukes opp, øker hastigheten.\n\n' +
        '### Viktige reguleringsmekanismer\n\n' +
        '**1. ATP/ADP-forholdet**\n' +
        'ATP er en allosterisk hemmer av flere nøkkelenzymer, mens ADP (og AMP) er aktivatorer. Når cellen bruker mye energi, synker ATP-nivået og ADP-nivået stiger, noe som stimulerer celleåndingen.\n\n' +
        '**2. Regulering ved nøkkelenzymer**\n\n' +
        '- **Fosfofruktokinase (PFK)** i glykolysen: Hemmes av ATP og sitrat, stimuleres av AMP og ADP. Dette er det viktigste kontrollpunktet.\n' +
        '- **Pyruvatdehydrogenase-komplekset**: Hemmes av ATP, NADH og acetyl-CoA, stimuleres av ADP og NAD⁺.\n' +
        '- **Isositratdehydrogenase** i sitronsyresyklusen: Hemmes av ATP og NADH, stimuleres av ADP.\n' +
        '- **Alfa-ketoglutarat-dehydrogenase**: Hemmes av NADH og suksinyl-CoA.\n\n' +
        '**3. Tilgjengelighet av oksygen**\n' +
        'Oksygenkonsentrasjonen påvirker direkte hastigheten på elektrontransportkjeden. Ved lavt oksygennivå bremses hele systemet, og cellene må ty til anaerob gjæring.\n\n' +
        '**4. NADH/NAD⁺-forholdet**\n' +
        'Et høyt NADH/NAD⁺-forhold signaliserer at cellen har rikeleg med reduksjonskraft og bremser oksidasjonsreaksjonene.\n\n' +
        'Denne finjusterte reguleringen sikrer at cellen alltid har tilstrekkelig med ATP uten å kaste bort ressurser på overproduksjon.',
    },

    // ====================================================================
    // KOBLING TIL FETT- OG PROTEINMETABOLISME
    // ====================================================================
    {
      id: 'bio1-2-2-fett-protein',
      type: 'text',
      title: 'Kobling til fett- og proteinmetabolisme',
      content:
        'Celleåndingen handler ikke bare om glukose. Cellen kan også hente energi fra **fettsyrer** og **aminosyrer**, og alle disse veiene møtes i de samme prosessene.\n\n' +
        '### Fettsyrenedbrytning (beta-oksidasjon)\n\n' +
        'Fettsyrer brytes ned i mitokondriene gjennom en prosess kalt **beta-oksidasjon**. Her kløyves fettsyrekjeden to karbonatomer om gangen, og hvert fragment kobles til koenzym A for å danne **acetyl-CoA** - det samme molekylet som dannes fra pyruvat.\n\n' +
        'Acetyl-CoA fra fettsyrer går rett inn i sitronsyresyklusen, på nøyaktig samme måte som acetyl-CoA fra karbohydrater.\n\n' +
        'I tillegg produseres NADH og FADH₂ for hvert «klipp» i beta-oksidasjonen, og disse leverer elektroner direkte til elektrontransportkjeden.\n\n' +
        'Fett er en svært energirik energikilde. Ett gram fett gir omtrent **9 kcal** energi, mot bare **4 kcal** per gram karbohydrat. En typisk fettsyre med 16 karbonatomer (palmitinsyre) gir hele **106 ATP** - mer enn tre ganger så mye som ett glukosemolekyl.\n\n' +
        '### Aminosyrenedbrytning\n\n' +
        'Aminosyrer (fra proteiner) kan også brukes som energikilde, selv om dette vanligvis bare skjer når karbohydrat- og fettreservene er lave. Først fjernes aminogruppen (–NH₂) i en prosess kalt **deaminering** (aminogruppen omdannes til urea og skilles ut via nyrene).\n\n' +
        'Det gjenværende karbonkjelettet kan deretter omdannes til ulike mellomprodukter:\n' +
        '- Noen aminosyrer omdannes til **pyruvat**\n' +
        '- Noen omdannes til **acetyl-CoA**\n' +
        '- Andre omdannes til mellomprodukter i sitronsyresyklusen (alfa-ketoglutarat, suksinyl-CoA, fumarat, oksaloacetat)\n\n' +
        'Slik ser vi at glykolysen, sitronsyresyklusen og elektrontransportkjeden er **sentrale metabolske motorveier** der nedbrytning av karbohydrater, fettsyrer og aminosyrer alle møtes.',
    },

    // ====================================================================
    // EKSEMPEL: FETTFORBRENNING
    // ====================================================================
    {
      id: 'bio1-2-2-example-fett',
      type: 'example',
      title: 'Hvorfor gir fett mer energi enn karbohydrater?',
      problem: 'Forklar hvorfor ett gram fett gir mer enn dobbelt så mye energi som ett gram karbohydrat.',
      solution:
        'Forskjellen skyldes **graden av oksidasjon** i molekylstrukturene:\n\n' +
        '**Fettsyrer** har lange karbonkjeder med nesten bare C-H-bindinger. Disse er i en svært redusert tilstand - det vil si at de har mange elektroner tilgjengelig for elektrontransporten.\n\n' +
        '**Karbohydrater** (som glukose) har allerede mange C-O-bindinger og er dermed delvis oksidert. De har færre elektroner tilgjengelig for energiproduksjon.\n\n' +
        'Sammenligning per gram:\n' +
        '| Næringsstoff | Energi per gram | Forklaring |\n' +
        '|---|---|---|\n' +
        '| Fett | ~9 kcal (~37 kJ) | Svært redusert, mange C-H-bindinger |\n' +
        '| Karbohydrat | ~4 kcal (~17 kJ) | Delvis oksidert, mange C-O-bindinger |\n' +
        '| Protein | ~4 kcal (~17 kJ) | Variabelt, men nitrogen kan ikke oksideres |\n\n' +
        'I tillegg lagres fett uten vann (hydrofob), mens karbohydrater (som glykogen) binder mye vann. Derfor er fett en spesielt kompakt og effektiv energilagringsform - noe som er viktig for organismer som trenger å lagre mye energi uten å bli for tunge.',
    },

    // ====================================================================
    // OPPSUMMERING
    // ====================================================================
    {
      id: 'bio1-2-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Celleånding er prosessen der celler bryter ned organiske molekyler (primært glukose) for å produsere ATP - cellens energivaluta. Prosessen foregår i fire hovedtrinn:\n\n' +
        '**1. Glykolyse** (cytoplasma): Glukose (6C) spaltes til 2 pyruvat (3C). Netto: 2 ATP + 2 NADH. Krever ikke oksygen.\n\n' +
        '**2. Pyruvatoksidasjon** (matriks): Pyruvat omdannes til acetyl-CoA. Produserer 2 CO₂ + 2 NADH per glukose.\n\n' +
        '**3. Sitronsyresyklus** (matriks): Acetyl-CoA oksideres fullstendig. Produserer 4 CO₂ + 6 NADH + 2 FADH₂ + 2 ATP per glukose.\n\n' +
        '**4. Elektrontransportkjeden og oksidativ fosforylering** (indre membran): NADH og FADH₂ leverer elektroner som driver protonpumping. Protongradienten driver ATP-syntase. O₂ er endelig elektronakseptor. Produserer ~26-28 ATP per glukose.\n\n' +
        '**Totalt**: ~30-32 ATP per glukosemolekyl.\n\n' +
        'Uten oksygen kan bare glykolysen kjøre (med gjæring for å regenerere NAD⁺), noe som gir bare 2 ATP per glukose.\n\n' +
        'Celleåndingen er koblet til nedbrytning av fett (via beta-oksidasjon → acetyl-CoA) og proteiner (via deaminering → ulike mellomprodukter), og reguleres nøye gjennom allosterisk kontroll av nøkkelenzymer, styrt av cellens ATP/ADP-nivå.',
    },
  ],

  // ======================================================================
  // OPPGAVER
  // ======================================================================
  exercises: [
    // ------------------------------------------------------------------
    // OPPGAVE 1 - LETT
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-1',
      number: '1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er totalreaksjonen for celleånding?',
      options: [
        {
          id: 'a',
          text: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',
          isCorrect: true,
        },
        {
          id: 'b',
          text: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
          isCorrect: false,
          feedback: 'Dette er totalreaksjonen for fotosyntese, ikke celleånding.',
        },
        {
          id: 'c',
          text: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + ATP',
          isCorrect: false,
          feedback: 'Dette er reaksjonen for alkoholgjæring, ikke aerob celleånding.',
        },
        {
          id: 'd',
          text: '2H₂O → 2H₂ + O₂ + ATP',
          isCorrect: false,
          feedback: 'Dette er elektrolyse av vann, som ikke er en biologisk prosess.',
        },
      ],
      hints: ['Tenk på hva som brytes ned, hva som forbrukes, og hva som produseres.'],
      topic: 'celleånding-oversikt',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 2 - LETT
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-2',
      number: '2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor i cellen foregår glykolysen?',
      options: [
        {
          id: 'a',
          text: 'I mitokondriens matriks',
          isCorrect: false,
          feedback: 'Matriks er stedet for pyruvatoksidasjon og sitronsyresyklus.',
        },
        {
          id: 'b',
          text: 'I cytoplasma (cellevæsken)',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'I mitokondriens indre membran',
          isCorrect: false,
          feedback: 'Indre membran er stedet for elektrontransportkjeden.',
        },
        {
          id: 'd',
          text: 'I cellekjernen',
          isCorrect: false,
          feedback: 'Cellekjernen inneholder DNA og styrer genekspresjon, men deltar ikke direkte i celleåndingen.',
        },
      ],
      hints: ['Glykolysen er en svært gammel prosess som ikke krever noen membranorganelle.'],
      topic: 'glykolyse',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 3 - LETT
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Nevn de fire hovedtrinnene i celleåndingen og angi hvor i cellen hvert trinn foregår.',
      solution:
        'De fire hovedtrinnene i celleåndingen er:\n\n' +
        '1. **Glykolyse** - foregår i cytoplasma (cellevæsken)\n' +
        '2. **Pyruvatoksidasjon** - foregår i mitokondriens matriks\n' +
        '3. **Sitronsyresyklus** (Krebs syklus) - foregår i mitokondriens matriks\n' +
        '4. **Elektrontransportkjeden og oksidativ fosforylering** - foregår i mitokondriens indre membran',
      hints: ['Det første trinnet skjer utenfor mitokondriene, mens de tre siste skjer inni mitokondriene.'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'celleånding-oversikt',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 4 - LETT
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar kort hva NADH og FADH₂ er, og hva som er deres rolle i celleåndingen.',
      solution:
        'NADH og FADH₂ er **elektronbærere** - molekyler som frakter høyenergetiske elektroner fra reaksjonene i glykolyse, pyruvatoksidasjon og sitronsyresyklus til elektrontransportkjeden.\n\n' +
        '- **NADH** dannes når NAD⁺ tar opp to elektroner og ett proton fra substrater. NADH leverer elektronene til kompleks I i elektrontransportkjeden.\n' +
        '- **FADH₂** dannes når FAD tar opp to elektroner og to protoner. FADH₂ leverer elektronene til kompleks II.\n\n' +
        'Ved å frakte elektroner til elektrontransportkjeden bidrar de indirekte til å bygge opp protongradienten som driver ATP-syntase og dermed ATP-produksjonen.',
      hints: [
        'Tenk på NADH og FADH₂ som «energi-bud» som frakter noe viktig fra de tidlige trinnene til det siste trinnet.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'elektronbærere',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 5 - MEDIUM
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv energiinvesteringsfasen og energiutvinningsfasen i glykolysen. Hva er nettoutbyttet?',
      solution:
        '**Energiinvesteringsfasen (trinn 1-5)**:\n' +
        'I denne fasen brukes 2 ATP for å fosforylere glukose. Først fosforyleres glukose til glukose-6-fosfat av heksokinase (1 ATP). Deretter fosforyleres fruktose-6-fosfat til fruktose-1,6-bisfosfat av fosfofruktokinase (1 ATP). Til slutt spaltes sekskarbon-molekylet til to trekarbonmolekyler (glyceraldehyd-3-fosfat, G3P).\n\n' +
        '**Energiutvinningsfasen (trinn 6-10)**:\n' +
        'Hvert av de to G3P-molekylene oksideres og gjennomgår substratfosforylering. Det produseres totalt 4 ATP (2 per G3P) og 2 NADH (1 per G3P). De to G3P-molekylene omdannes til 2 pyruvatmolekyler.\n\n' +
        '**Nettoutbytte per glukose**: 4 ATP − 2 ATP = **2 ATP** (netto), + **2 NADH** + **2 pyruvat**.',
      hints: [
        'Tenk på det som en investering: du bruker litt energi i starten for å tjene mer energi i slutten.',
        'Husk at alt som skjer med G3P skjer to ganger fordi glukose spaltes til to G3P.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'glykolyse',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 6 - MEDIUM
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for hva som skjer i pyruvatoksidasjon. Inkluder reaktanter, produkter og hvor prosessen foregår.',
      solution:
        'Pyruvatoksidasjon foregår i **mitokondriens matriks** og er koblingen mellom glykolyse og sitronsyresyklus.\n\n' +
        'Pyruvat transporteres fra cytoplasma inn i mitokondriens matriks via transportproteiner i membranene.\n\n' +
        'Inne i matriks katalyserer **pyruvatdehydrogenase-komplekset** følgende omdannelse:\n\n' +
        'Pyruvat (3C) + CoA + NAD⁺ → Acetyl-CoA (2C) + CO₂ + NADH\n\n' +
        'Tre ting skjer:\n' +
        '1. **Dekarboksylering**: En karboksylgruppe (COO⁻) fjernes som CO₂, slik at pyruvat (3C) reduseres til et to-karbonfragment.\n' +
        '2. **Oksidasjon**: Fragmentet oksideres, og NAD⁺ reduseres til NADH.\n' +
        '3. **Binding til CoA**: Det oksiderte to-karbonfragmentet (acetylgruppen) kobles til koenzym A og danner acetyl-CoA.\n\n' +
        'Per glukose (2 pyruvat): 2 acetyl-CoA + 2 CO₂ + 2 NADH.',
      hints: [
        'Husk at pyruvat har tre karbonatomer, mens acetyl-CoA bare har to. Hva skjer med det tredje?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'pyruvatoksidasjon',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 7 - MEDIUM
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med kjemiosmose, og beskriv hvordan ATP-syntase fungerer.',
      solution:
        '**Kjemiosmose** er prosessen der en konsentrasjonsforskjell av protoner (H⁺) over en membran brukes til å drive ATP-syntese.\n\n' +
        'I mitokondriene pumper elektrontransportkjeden protoner fra matriks til intermembranrommet. Siden den indre membranen er nesten ugjennomtrengelig for H⁺, bygges det opp en **protongradient** (protonmotorisk kraft) med høy H⁺-konsentrasjon i intermembranrommet og lav i matriks.\n\n' +
        '**ATP-syntase** er enzymet som utnytter denne gradienten. Det fungerer som en molekylær rotasjonsmotor:\n\n' +
        '- **F₀-delen** sitter i membranen og danner en kanal der H⁺ kan strømme tilbake til matriks ned konsentrasjonsgradienten. Strømmen av protoner får F₀ til å rotere.\n' +
        '- **F₁-delen** stikker ut i matriks og inneholder katalytiske seter. Rotasjonen fra F₀ endrer formen på F₁ slik at ADP og uorganisk fosfat (Pᵢ) presses sammen til ATP.\n\n' +
        'Ca. 3-4 protoner må strømme gjennom ATP-syntase for å danne ett ATP-molekyl.',
      hints: [
        'Tenk på kjemiosmose som en vannturbin: vann (protoner) strømmer ned fra høy til lav konsentrasjon og driver en turbin (ATP-syntase).',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'oksidativ-fosforylering',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 8 - MEDIUM
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-8',
      number: '8',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er rollen til oksygen (O₂) i celleåndingen?',
      options: [
        {
          id: 'a',
          text: 'O₂ bryter ned glukose i glykolysen',
          isCorrect: false,
          feedback: 'Glykolysen er anaerob og krever ikke oksygen.',
        },
        {
          id: 'b',
          text: 'O₂ er endelig elektronakseptor i elektrontransportkjeden og reduseres til H₂O',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'O₂ aktiverer ATP-syntase direkte',
          isCorrect: false,
          feedback: 'ATP-syntase drives av protongradienten, ikke direkte av oksygen.',
        },
        {
          id: 'd',
          text: 'O₂ produseres som biprodukt i sitronsyresyklusen',
          isCorrect: false,
          feedback: 'O₂ produseres i fotosyntese, ikke i celleånding. I celleåndingen forbrukes O₂.',
        },
      ],
      hints: ['Tenk på hva som skjer med elektronene på slutten av elektrontransportkjeden.'],
      topic: 'oksidativ-fosforylering',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 9 - MEDIUM
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom substratfosforylering og oksidativ fosforylering? Gi et eksempel på hver.',
      solution:
        '**Substratfosforylering**:\n' +
        'ATP dannes ved direkte overføring av en fosfatgruppe fra et substratmolekyl til ADP. Det krever ikke oksygen eller en membran.\n' +
        '- Eksempel: I glykolysen overføres en fosfatgruppe fra fosfoenolpyruvat til ADP, og det dannes ATP og pyruvat.\n\n' +
        '**Oksidativ fosforylering**:\n' +
        'ATP dannes indirekte via elektrontransport og kjemiosmose. Elektroner fra NADH og FADH₂ transporteres gjennom proteinkomplekser i mitokondriens indre membran, noe som driver pumping av H⁺. Den resulterende protongradienten brukes av ATP-syntase til å lage ATP.\n' +
        '- Eksempel: NADH leverer elektroner til kompleks I, som pumper protoner. Protonene strømmer tilbake gjennom ATP-syntase og driver ATP-produksjon.\n\n' +
        'Hoveddelen av ATP-produksjonen (~26-28 av ~30-32 ATP per glukose) skjer via oksidativ fosforylering.',
      hints: [
        'Substrat = direkte overføring fra et molekyl. Oksidativ = via elektrontransport og protonpumping.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'oksidativ-fosforylering',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 10 - VANSKELIG
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sett opp et fullstendig ATP-regnskap for aerob nedbrytning av ett glukosemolekyl. Vis hvor mange ATP, NADH og FADH₂ som produseres i hvert trinn, og regn ut det totale antallet ATP.',
      solution:
        '**Trinn-for-trinn ATP-regnskap:**\n\n' +
        '**Glykolyse (cytoplasma):**\n' +
        '- 2 ATP (netto, etter fratrekk av 2 ATP investert)\n' +
        '- 2 NADH\n\n' +
        '**Pyruvatoksidasjon (matriks, ×2):**\n' +
        '- 2 NADH\n\n' +
        '**Sitronsyresyklus (matriks, ×2):**\n' +
        '- 2 GTP ≈ 2 ATP\n' +
        '- 6 NADH\n' +
        '- 2 FADH₂\n\n' +
        '**Sum elektronbærere:** 10 NADH + 2 FADH₂\n\n' +
        '**Oksidativ fosforylering:**\n' +
        '- 8 NADH (fra mitokondrier) × 2,5 = 20 ATP\n' +
        '- 2 NADH (fra glykolyse) × 1,5-2,5 = 3-5 ATP*\n' +
        '- 2 FADH₂ × 1,5 = 3 ATP\n' +
        '- Sum: 26-28 ATP\n\n' +
        '*NADH fra glykolysen dannes i cytoplasma og må fraktes inn via skyttelsystemer (malat-aspartat-skyttel gir 2,5 ATP; glycerol-3-fosfat-skyttel gir 1,5 ATP).\n\n' +
        '**Totalt: 4 (substratfosf.) + 26-28 (oks. fosf.) = ca. 30-32 ATP per glukose.**',
      hints: [
        'Husk at hvert NADH fra mitokondriene gir ca. 2,5 ATP, mens hvert FADH₂ gir ca. 1,5 ATP.',
        'Ikke glem at NADH fra glykolysen må transporteres inn i mitokondriene, noe som koster energi.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'energiregnskap',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 11 - VANSKELIG
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-11',
      number: '11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan celleåndingen reguleres. Ta med minst tre eksempler på enzymer som reguleres, og forklar hva som hemmer og stimulerer dem.',
      solution:
        'Celleåndingen reguleres hovedsakelig gjennom **allosterisk regulering** av nøkkelenzymer, med **negativ tilbakekobling** som overordnet prinsipp.\n\n' +
        '**1. Fosfofruktokinase (PFK)** - det viktigste kontrollpunktet:\n' +
        '- Hemmes av: ATP (signaliserer at cellen har nok energi) og sitrat (signaliserer at sitronsyresyklusen er «full»)\n' +
        '- Stimuleres av: AMP og ADP (signaliserer at cellen trenger energi)\n\n' +
        '**2. Pyruvatdehydrogenase-komplekset:**\n' +
        '- Hemmes av: ATP, NADH og acetyl-CoA (produkthemming)\n' +
        '- Stimuleres av: ADP, NAD⁺ og CoA (substrater og energimangel-signaler)\n\n' +
        '**3. Isositratdehydrogenase** (i sitronsyresyklusen):\n' +
        '- Hemmes av: ATP og NADH\n' +
        '- Stimuleres av: ADP og NAD⁺\n\n' +
        'I tillegg reguleres hastigheten av tilgangen på O₂ (påvirker elektrontransportkjeden direkte) og NADH/NAD⁺-forholdet (et høyt forhold bremser oksidasjonsreaksjonene).\n\n' +
        'Det overordnede mønsteret er at høy energistatus (mye ATP, NADH) bremser, mens lav energistatus (mye ADP, AMP, NAD⁺) stimulerer celleåndingen.',
      hints: [
        'Tenk på hva som skjer når cellen har overskudd av ATP kontra underskudd.',
        'Hva er poenget med negativ tilbakekobling?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'regulering',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 12 - VANSKELIG
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva som menes med at sitronsyresyklusen er «amfibol». Gi minst to eksempler på anabole funksjoner og forklar hva anaplerotiske reaksjoner er.',
      solution:
        '**Amfibol** betyr at sitronsyresyklusen har rolle i både **katabolisme** (nedbrytning) og **anabolisme** (oppbygging).\n\n' +
        '**Katabolsk rolle:**\n' +
        'Syklusen bryter ned acetylgrupper fra acetyl-CoA fullstendig til CO₂ og høster energi som NADH, FADH₂ og GTP.\n\n' +
        '**Anabole funksjoner (eksempler):**\n\n' +
        '1. **Oksaloacetat** kan brukes til glukoneogenese (syntese av ny glukose) eller omdannes til aminosyren aspartat via transaminering.\n\n' +
        '2. **Alfa-ketoglutarat** kan omdannes til aminosyren glutamat, som igjen er utgangspunkt for flere andre aminosyrer.\n\n' +
        '3. **Sitrat** kan transporteres ut av mitokondriene og kløyves for å gi acetyl-CoA i cytoplasma, som brukes til fettsyresyntese.\n\n' +
        '4. **Suksinyl-CoA** brukes i syntesen av porfyriner, inkludert hem i hemoglobin.\n\n' +
        '**Anaplerotiske reaksjoner** er «påfyllingsreaksjoner» som erstatter mellomprodukter som trekkes ut til biosyntese. Den viktigste er:\n' +
        '$$\\text{Pyruvat} + \\text{CO}_2 + \\text{ATP} \\xrightarrow{\\text{pyruvatkarboxylase}} \\text{Oksaloacetat} + \\text{ADP} + \\text{P}_i$$\n' +
        'Uten anaplerotiske reaksjoner ville syklusen gå tom for mellomprodukter og stoppe.',
      hints: [
        '«Amfi» betyr begge/dobbelt - tenk på amfibier som lever både på land og i vann.',
        'Hva skjer hvis mellomprodukter trekkes ut av syklusen uten å bli erstattet?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'sitronsyresyklus',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 13 - VANSKELIG
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-13',
      number: '13',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv de fire proteinkompleksene (I-IV) i elektrontransportkjeden. For hvert kompleks, angi: hvilke elektroner det mottar, om det pumper protoner, og hvor mange H⁺ det pumper.',
      solution:
        '**Kompleks I (NADH-dehydrogenase):**\n' +
        '- Mottar elektroner fra: NADH\n' +
        '- Pumper protoner: Ja, **4 H⁺** per NADH\n' +
        '- Leverer elektroner videre til: Ubikinon (koenzym Q)\n\n' +
        '**Kompleks II (Suksinatdehydrogenase):**\n' +
        '- Mottar elektroner fra: FADH₂ (dannes i trinn 6 av sitronsyresyklusen - dette er faktisk det samme enzymet)\n' +
        '- Pumper protoner: **Nei, pumper ingen H⁺** (dette er grunnen til at FADH₂ gir færre ATP enn NADH)\n' +
        '- Leverer elektroner videre til: Ubikinon (koenzym Q)\n\n' +
        '**Kompleks III (Cytokrom bc₁-komplekset):**\n' +
        '- Mottar elektroner fra: Ubikinon (som har fått elektroner fra både kompleks I og II)\n' +
        '- Pumper protoner: Ja, **4 H⁺** per elektronpar\n' +
        '- Leverer elektroner videre til: Cytokrom c (mobil bærer)\n\n' +
        '**Kompleks IV (Cytokrom c-oksidase):**\n' +
        '- Mottar elektroner fra: Cytokrom c\n' +
        '- Pumper protoner: Ja, **2 H⁺** per elektronpar\n' +
        '- Overfører elektronene til: **O₂** (endelig elektronakseptor), som reduseres til H₂O\n\n' +
        'Totalt pumpes per NADH: 4 + 4 + 2 = **10 H⁺**\n' +
        'Totalt pumpes per FADH₂: 0 + 4 + 2 = **6 H⁺** (fordi FADH₂ hopper over kompleks I)',
      hints: [
        'Husk at FADH₂ leverer elektronene til kompleks II, som ikke pumper protoner. Derfor gir FADH₂ færre ATP.',
        'De mobile bærerne ubikinon og cytokrom c frakter elektroner mellom kompleksene.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'elektrontransportkjeden',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 14 - MEDIUM
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-14',
      number: '14',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan fett brytes ned og kobles til celleåndingen. Hvorfor gir fett mer energi per gram enn karbohydrater?',
      solution:
        '**Fettnedbrytning:**\n' +
        'Fettsyrer brytes ned gjennom **beta-oksidasjon** i mitokondriene. I denne prosessen kløyves fettsyrekjeden to karbonatomer om gangen. Hvert to-karbonfragment kobles til koenzym A og danner **acetyl-CoA**.\n\n' +
        'Acetyl-CoA fra beta-oksidasjon går inn i **sitronsyresyklusen**, akkurat som acetyl-CoA fra karbohydratmetabolisme. I tillegg produseres NADH og FADH₂ for hvert klipp, som går direkte til elektrontransportkjeden.\n\n' +
        '**Hvorfor mer energi per gram:**\n' +
        'Fettsyrer er i en svært **redusert tilstand** med mange C-H-bindinger og få C-O-bindinger. De har dermed mange elektroner tilgjengelig for energiutvinning.\n\n' +
        'Karbohydrater er allerede **delvis oksidert** med mange C-O-bindinger, og har dermed færre elektroner tilgjengelig.\n\n' +
        'Resultatet er at fett gir ca. 9 kcal/g, mens karbohydrat gir ca. 4 kcal/g. En 16-karbons fettsyre (palmitinsyre) gir hele 106 ATP, sammenlignet med 30-32 ATP per glukose.',
      hints: [
        'Hva betyr det at et molekyl er «redusert» versus «oksidert» i denne sammenhengen?',
        'Tenk på hvor acetyl-CoA fra fett ender opp.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'fettmetabolisme',
    },

    // ------------------------------------------------------------------
    // OPPGAVE 15 - VANSKELIG
    // ------------------------------------------------------------------
    {
      id: 'bio1-2-2-ex-15',
      number: '15',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En person trener intensivt og bruker mye glukose. Etter en stund begynner musklene å produsere melkesyre (laktat).\n\na) Forklar hvorfor muskelcellene begynner å produsere laktat.\nb) Skriv reaksjonen for melkesyregjæring.\nc) Sammenlign energiutbyttet ved aerob nedbrytning og melkesyregjæring.\nd) Hva skjer med laktatet etter at treningsøkten er over?',
      subTasks: [
        {
          label: 'a',
          task: 'Forklar hvorfor muskelcellene begynner å produsere laktat.',
          solution:
            'Under intens trening øker muskelcellenes energibehov kraftig. Når oksygentilførselen ikke holder tritt med forbruket, kan ikke elektrontransportkjeden kjøre raskt nok. NADH hoper seg opp, og NAD⁺ brukes opp. Uten NAD⁺ stopper glykolysen. For å fortsette å produsere ATP via glykolysen, må NAD⁺ regenereres. Cellen gjør dette ved å omdanne pyruvat til laktat - melkesyregjæring - som regenererer NAD⁺ fra NADH.',
        },
        {
          label: 'b',
          task: 'Skriv reaksjonen for melkesyregjæring.',
          solution: 'Pyruvat + NADH → Laktat + NAD⁺\n\n(Enzymet laktatdehydrogenase katalyserer reaksjonen.)',
        },
        {
          label: 'c',
          task: 'Sammenlign energiutbyttet ved aerob nedbrytning og melkesyregjæring.',
          solution:
            'Aerob nedbrytning: ca. 30-32 ATP per glukose (glykolyse + pyruvatoksidasjon + sitronsyresyklus + oksidativ fosforylering).\n\nMelkesyregjæring: kun 2 ATP per glukose (bare glykolysen). Dette er omtrent 15-16 ganger mindre effektivt enn aerob nedbrytning.',
        },
        {
          label: 'd',
          task: 'Hva skjer med laktatet etter at treningsøkten er over?',
          solution:
            'Etter trening transporteres laktat via blodet til leveren. Der omdannes laktat tilbake til pyruvat og videre til glukose via glukoneogenese (Cori-syklus). Denne glukosen kan transporteres tilbake til musklene og brukes som energikilde igjen. Noe laktat kan også tas opp av hjertemuskelceller og andre vev og oksideres direkte til CO₂ og H₂O for energiproduksjon.',
        },
      ],
      hints: [
        'Tenk på hva som skjer med NAD⁺/NADH-balansen når elektrontransportkjeden bremser ned.',
        'Gjæring er en nødløsning for å holde glykolysen i gang.',
        'Laktat er ikke bare et avfallsprodukt - det kan brukes videre.',
      ],
      solution:
        'Se deloppgavene over for fullstendig løsning.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
      topic: 'gjæring',
    },
  ],
};
