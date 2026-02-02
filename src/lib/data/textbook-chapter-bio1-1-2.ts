/**
 * Biologi 1 - Kapittel 1.2: Cellemembranen og transport
 *
 * Dekker LK20-kompetansemaal for biologi 1 (BIO01-02):
 * - Cellemembranes oppbygging (flytende mosaikk-modellen)
 * - Passiv og aktiv transport over cellemembranen
 * - Osmose, diffusjon og fasilitert diffusjon
 * - Bulktransport (endocytose og eksocytose)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_1_2: TextbookChapter = {
  id: 'bio1-1-2',
  courseId: 'biologi-1',
  chapterNumber: '1.2',
  title: 'Cellemembranen og transport',
  description:
    'Cellemembranes oppbygging etter den flytende mosaikk-modellen, membranproteiner og deres funksjoner, samt passiv transport (diffusjon, osmose, fasilitert diffusjon), aktiv transport (Na+/K+-pumpen, kotransport) og bulktransport (endocytose, eksocytose). Osmotiske effekter i plante- og dyreceller.',
  estimatedMinutes: 70,
  competenceGoals: [
    'beskrive oppbygging av cellemembranen ut fra den flytende mosaikk-modellen',
    'forklare hva selektiv permeabilitet betyr og hvorfor det er viktig for cellen',
    'gjore rede for passiv transport: enkel diffusjon, osmose og fasilitert diffusjon',
    'forklare aktiv transport og gi eksempler, blant annet Na+/K+-pumpen',
    'beskrive bulktransport: endocytose (fagocytose, pinocytose, reseptormediert) og eksocytose',
    'anvende begrepene hypertonisk, hypotonisk og isotonisk losning pa dyre- og planteceller',
    'forklare hvordan turgortrykk og plasmolysering pavirker planteceller',
  ],
  content: [
    // =========================================================================
    // 1. Introduksjon
    // =========================================================================
    {
      id: 'bio1-1-2-intro',
      type: 'text',
      content: `# Cellemembranen og transport

Alle celler er omgitt av en **cellemembran** (plasmamembran). Denne tynne, men avgjorende strukturen er bare 7-8 nanometer tykk -- omtrent 10 000 ganger tynnere enn et haarstraad. Likevel er den helt sentral for at cellen skal overleve.

Cellemembranen har tre hovedoppgaver:

1. **Avgrensning** -- Den definerer cellens grenser og skiller cellens indre miljo fra omgivelsene.
2. **Selektiv transport** -- Den kontrollerer hvilke stoffer som slipper inn og ut av cellen.
3. **Kommunikasjon** -- Den mottar signaler fra omgivelsene gjennom reseptorproteiner.

Uten en funksjonell cellemembran ville cellens innhold lekke ut, giftstoffer kunne stremme inn ukontrollert, og cellen ville miste evnen til aa opprettholde det stabile indre miljoet (**homeostase**) den trenger for aa fungere.

I dette kapittelet skal vi forst se pa hvordan membranen er bygd opp, og deretter studere de ulike transportmekanismene som frakter stoffer over den.`,
    },

    // =========================================================================
    // 2. Definisjon: Cellemembranen
    // =========================================================================
    {
      id: 'bio1-1-2-def-cellemembran',
      type: 'definition',
      title: 'Cellemembranen (plasmamembranen)',
      content:
        '**Cellemembranen** er en selektivt permeabel membran som omgir alle levende celler. Den bestaar av et dobbeltlag av fosfolipider med innleirede proteiner, kolesterol og karbohydrater. Membranen regulerer transport av stoffer inn og ut av cellen, mottar signaler fra omgivelsene, og gir cellen strukturell integritet.',
    },

    // =========================================================================
    // 3. Flytende mosaikk-modellen
    // =========================================================================
    {
      id: 'bio1-1-2-fluid-mosaic',
      type: 'text',
      content: `## Den flytende mosaikk-modellen

I 1972 foreslo biologene **S. Jonathan Singer** og **Garth L. Nicolson** den **flytende mosaikk-modellen** for cellemembranes struktur. Denne modellen er fortsatt den aksepterte beskrivelsen av biologiske membraner.

Modellen forklarer to viktige egenskaper:

- **Flytende**: Fosfolipidmolekylene er ikke fastlaaste, men beveger seg fritt sidelengs i membranlaget. Membranen oppforer seg som en tyktflytende (viskos) vaeske -- omtrent som konsistensen av olivenolje.
- **Mosaikk**: Membranen inneholder et mangfold av ulike proteiner, kolesterolmolekyler og karbohydrater som er innleiret i fosfolipidlaget og danner et mosaikk-lignende monster.

### Fosfolipid-dobbeltlaget

Grunnstrukturen i membranen er et **dobbeltlag av fosfolipider**. Hvert fosfolipidmolekyl har to distinkte deler:

- **Hode (hydrofilt)**: Den ene enden inneholder en fosfatgruppe som er **vannloselig** (hydrofil). Hodet vender ut mot vannet -- baade pa utsiden og innsiden av cellen.
- **Haler (hydrofobe)**: Den andre enden bestaar av to fettsyrekjeder som er **vannuloselige** (hydrofobe). Halene vender innover i membranen, bort fra vannet.

Denne ordningen er **termodynamisk gunstig**: De hydrofobe halene gjemmer seg fra vannet ved aa samle seg i midten av dobbeltlaget, mens de hydrofile hodene eksponeres mot de vannholdige miljoene pa begge sider.

**Resultat**: Et stabilt dobbeltlag dannes spontant -- uten at cellen trenger aa bruke energi paa aa opprettholde det.

### Kolesterolets rolle

Innleiret mellom fosfolipidene finner vi **kolesterol**. Kolesterol utgjor omtrent 20-25 % av membranens lipider i dyreceller og har to viktige funksjoner:

- **Ved hoy temperatur**: Kolesterol reduserer membranens fluiditet ved aa hindre fosfolipidene i aa bevege seg for mye. Dette forhindrer at membranen blir for flytende.
- **Ved lav temperatur**: Kolesterol forhindrer fosfolipidhalene i aa pakke seg for taett, noe som ville gjort membranen stiv og sproerig.

Kolesterol fungerer dermed som en **fluiditets-buffer** som holder membranen i optimal tilstand over et bredt temperaturomraade.

### Membranproteiner

Membranen inneholder to hovedtyper proteiner:

**Integrale proteiner (transmembranproteiner)**:
- Strekker seg gjennom hele fosfolipiddobbeltlaget
- Har hydrofobe omraader som forankrer dem i membranen
- Fungerer som kanaler, baerere, reseptorer og enzymer
- Kan bare fjernes ved aa odelegge membranen

**Perifere proteiner**:
- Sitter paa overflaten av membranen (enten utside eller innside)
- Er losere bundet, ofte til integrale proteiner eller fosfolipidhodene
- Har roller i signaloverfoering og cellestruktur
- Kan fjernes uten aa odelegge membranen

### Glykoproteiner og glykolipider -- glykocalyx

Paa **utsiden** av cellemembranen er mange proteiner og lipider festet til korte karbohydratkjeder:

- **Glykoproteiner**: Proteiner med karbohydratkjeder
- **Glykolipider**: Lipider med karbohydratkjeder

Til sammen danner disse et sukkerholdig lag paa celleoverflaten kalt **glykocalyx** (sukkerkappe). Glykocalyx har flere funksjoner:

- **Cellegjenkjenning**: Immunsystemet bruker glykocalyx til aa skille kroppens egne celler fra fremmede celler
- **Celleadhesjon**: Hjelper celler med aa feste seg til hverandre
- **Beskyttelse**: Beskytter celleoverflaten mot mekanisk og kjemisk skade`,
    },

    // =========================================================================
    // 4. Membranproteiner og deres funksjoner
    // =========================================================================
    {
      id: 'bio1-1-2-membranproteiner',
      type: 'text',
      content: `## Membranproteiner og deres funksjoner

Membranproteinene er avgjorende for cellens funksjon. De utgjor opptil 50 % av membranens masse og kan deles inn i fire hovedgrupper etter funksjon:

### 1. Transportproteiner

Transportproteiner frakter stoffer over membranen som ellers ikke kan passere fosfolipiddobbeltlaget.

**Kanalproteiner**:
- Danner vannfylte porer (kanaler) gjennom membranen
- Sveart selektive: Hver kanal slipper bare gjennom bestemte ioner eller molekyler
- Noen er alltid aapne, andre er **regulerte** (aapnes/lukkes av signaler)
- Eksempel: Akvaporiner (vannkanaler), ionkanaler for Na$^+$, K$^+$, Ca$^{2+}$

**Baererproteiner (transportorer)**:
- Binder seg til stoffet som skal fraktes
- Endrer form for aa flytte stoffet til den andre siden av membranen
- Langsommere enn kanaler, men kan frakte storre molekyler
- Eksempel: Glukosetransportor (GLUT)

### 2. Reseptorproteiner

- Binder spesifikke signalmolekyler (ligander) paa utsiden av cellen
- Utloser en rekke reaksjoner inne i cellen (signalkaskade)
- Avgjorende for hormonrespons, nervesignaler og immunforsvar
- Eksempel: Insulinreseptoren

### 3. Enzymatiske proteiner

- Katalyserer kjemiske reaksjoner paa membranoverflaten
- Kan sitte enkeltvis eller i rekke (enzymatisk samlebånd)
- Eksempel: Enzymer i mitokondrienes indre membran (elektrontransportkjeden)

### 4. Cellegjenkjenningsproteiner

- Identifiserer cellen overfor andre celler
- Viktige for immunforsvaret (MHC-proteiner)
- Ofte glykoproteiner med unike karbohydratkjeder
- Eksempel: ABO-blodtypeantigener paa rode blodceller`,
    },

    // =========================================================================
    // 5. Definisjon: Selektiv permeabilitet
    // =========================================================================
    {
      id: 'bio1-1-2-def-selektiv-permeabilitet',
      type: 'definition',
      title: 'Selektiv permeabilitet',
      content:
        '**Selektiv permeabilitet** betyr at cellemembranen slipper noen stoffer gjennom, men ikke andre. Smaa, upolaaare molekyler (som O$_2$ og CO$_2$) og smaa, uladde polaaare molekyler (som vann) kan diffundere direkte gjennom fosfolipiddobbeltlaget. Store molekyler, ioner og ladde molekyler trenger hjelp av transportproteiner. Denne selektiviteten gir cellen kontroll over sitt indre miljo.',
    },

    // =========================================================================
    // 6. Selektiv permeabilitet utdypet
    // =========================================================================
    {
      id: 'bio1-1-2-selektiv-perm',
      type: 'text',
      content: `## Selektiv permeabilitet

Cellemembranes selektive permeabilitet skyldes fosfolipiddobbeltlagets hydrofobe kjerne. Stoffer som vil passere membranen maa enten vaere kompatible med dette hydrofobe miljoet eller faa hjelp av proteiner.

**Passerer membranen lett (uten proteinene)**:
- Smaa, upolaaare (hydrofobe) molekyler: O$_2$, CO$_2$, N$_2$
- Sveart smaa, uladde polaaare molekyler: H$_2$O (delvis), etanol

**Passerer membranen vanskelig eller ikke i det hele tatt (trenger proteinene)**:
- Store, polaaare molekyler: Glukose, aminosyrer
- Ioner: Na$^+$, K$^+$, Ca$^{2+}$, Cl$^-$
- Ladde molekyler: ATP

Denne selektiviteten er grunnlaget for at cellen kan opprettholde konsentrasjonsforskjeller mellom innsiden og utsiden. For eksempel er konsentrasjonen av K$^+$ mye hoyere inne i cellen enn utenfor, mens Na$^+$ er mest konsentrert utenfor.`,
    },

    // =========================================================================
    // 7. Definisjon: Diffusjon
    // =========================================================================
    {
      id: 'bio1-1-2-def-diffusjon',
      type: 'definition',
      title: 'Diffusjon',
      content:
        '**Diffusjon** er nettobevegelsen av molekyler eller ioner fra et omraade med **hoy konsentrasjon** til et omraade med **lav konsentrasjon**, det vil si **med konsentrasjonsgradienten**. Diffusjon er en passiv prosess som drives av molekylenes tilfeldige (termiske) bevegelser og krever ingen energitilforsel fra cellen. Diffusjonen fortsetter inntil konsentrasjonen er lik overalt (likevekt).',
    },

    // =========================================================================
    // 8. Passiv transport
    // =========================================================================
    {
      id: 'bio1-1-2-passiv-transport',
      type: 'text',
      content: `## Passiv transport -- uten energiforbruk

Passiv transport er bevegelsen av stoffer over cellemembranen **uten** at cellen bruker energi (ATP). Drivkraften er **konsentrasjonsgradienten** -- stoffene beveger seg fra hoy til lav konsentrasjon.

Det finnes tre former for passiv transport:

### 1. Enkel diffusjon

Smaa, upolaaare molekyler kan diffundere direkte gjennom fosfolipiddobbeltlaget. De trenger ingen hjelp av proteiner.

**Eksempler**:
- **Oksygen (O$_2$)**: Diffunderer fra lungene (hoy konsentrasjon) inn i blodet (lav konsentrasjon), og videre inn i cellene
- **Karbondioksid (CO$_2$)**: Diffunderer i motsatt retning -- fra cellene (hoy konsentrasjon) ut i blodet og til lungene
- **Steroidhormoner**: Er fettloselige og kan passere direkte gjennom membranen

**Faktorer som pavirker diffusjonshastigheten**:
- **Konsentrasjonsgradient**: Jo storre forskjell, desto raskere diffusjon
- **Temperatur**: Hoyere temperatur gir raskere diffusjon (molekylene beveger seg fortere)
- **Molekylstorrelse**: Smaa molekyler diffunderer raskere enn store
- **Membranens tykkelse**: Tynnere membran gir raskere diffusjon

### 2. Osmose

**Osmose** er diffusjon av **vann** gjennom en selektivt permeabel membran. Vannet beveger seg fra omraadet med **lavest** losestoffkonsentrasjon (mest vann) til omraadet med **hoyest** losestoffkonsentrasjon (minst fritt vann).

Vi kan ogsaa si det slik: Vannet beveger seg fra omraadet med **hoyest vannpotensial** til omraadet med **lavest vannpotensial**.

For aa beskrive osmotiske forhold bruker vi tre begreper:

- **Hypertonisk losning**: Har hoyere losestoffkonsentrasjon enn cellen. Vann stremmer **ut** av cellen.
- **Hypotonisk losning**: Har lavere losestoffkonsentrasjon enn cellen. Vann stremmer **inn** i cellen.
- **Isotonisk losning**: Har samme losestoffkonsentrasjon som cellen. Ingen netto vannbevegelse.

### 3. Fasilitert diffusjon

Stoffer som ikke kan passere fosfolipiddobbeltlaget paa egen haand, kan faa hjelp av **transportproteiner**. Dette kalles fasilitert (hjulpet) diffusjon.

**Via kanalproteiner**:
- Ioner (Na$^+$, K$^+$, Cl$^-$) passerer gjennom spesifikke ionkanaler
- Vann passerer gjennom **akvaporiner** (vannkanaler)
- Kanalene er selektive -- en natriumkanal slipper ikke gjennom kalium

**Via baererproteiner**:
- Glukose fraktes inn i cellen via glukosetransportorer (GLUT)
- Baererproteinet binder seg til molekylet, endrer form og frigir det paa andre siden
- Prosessen er langsommere enn diffusjon gjennom kanaler og kan bli **mettet** (alle baererne er opptatt)`,
    },

    // =========================================================================
    // 9. Note: Fasilitert diffusjon er passiv
    // =========================================================================
    {
      id: 'bio1-1-2-note-fasilitert',
      type: 'note',
      title: 'Fasilitert diffusjon er fortsatt passiv transport',
      content:
        'Selv om fasilitert diffusjon bruker proteiner, er det fremdeles en form for **passiv transport**. Grunnen er at drivkraften er konsentrasjonsgradienten -- stoffet beveger seg fra hoy til lav konsentrasjon. Proteinene gir bare stoffet en vei gjennom membranen; de tilforer ikke energi. Fasilitert diffusjon stopper naar konsentrasjonen er lik paa begge sider, akkurat som enkel diffusjon.',
    },

    // =========================================================================
    // 10. Definisjon: Osmose
    // =========================================================================
    {
      id: 'bio1-1-2-def-osmose',
      type: 'definition',
      title: 'Osmose',
      content:
        '**Osmose** er nettotransporten av vann gjennom en selektivt permeabel membran fra et omraade med lav losestoffkonsentrasjon (hoyt vannpotensial) til et omraade med hoy losestoffkonsentrasjon (lavt vannpotensial). Osmose er en passiv prosess som ikke krever energi fra cellen. Det osmotiske trykket er det trykket som maa paafoeres for aa stanse den osmotiske vannstremmen.',
    },

    // =========================================================================
    // 11. Eksempel: Rode blodceller i ulike losninger
    // =========================================================================
    {
      id: 'bio1-1-2-ex-rode-blodceller',
      type: 'example',
      title: 'Rode blodceller i ulike losninger',
      problem:
        'Forklar hva som skjer med rode blodceller naar de plasseres i (a) en isotonisk losning (0,9 % NaCl), (b) en hypotonisk losning (destillert vann), og (c) en hypertonisk losning (3 % NaCl).',
      solution: `**a) Isotonisk losning (0,9 % NaCl -- fysiologisk saltvann)**

Losestoffkonsentrasjonen er lik inne i og utenfor cellen. Det er ingen netto vannbevegelse over membranen -- like mye vann stremmer inn som ut.

**Resultat**: Blodcellene beholder sin normale, bikonkave form. Cellene fungerer normalt. Derfor brukes fysiologisk saltvann (0,9 % NaCl) i intravenose drypp.

---

**b) Hypotonisk losning (destillert vann)**

Losestoffkonsentrasjonen er lavere utenfor cellen enn innenfor. Vann stremmer inn i cellen ved osmose (fra lav losestoffkonsentrasjon til hoy).

**Resultat**: Blodcellene svulmer opp som ballonger. Fordi dyreceller mangler cellevegg, har de ingen motstandskraft mot det okende trykket. Til slutt sprekker cellene -- dette kalles **lysis** (eller hemolyse for rode blodceller). Cellens innhold lekker ut, og cellen dor.

---

**c) Hypertonisk losning (3 % NaCl)**

Losestoffkonsentrasjonen er hoyere utenfor cellen enn innenfor. Vann stremmer ut av cellen ved osmose.

**Resultat**: Blodcellene krymper og faar en skrukket, taggete overflate. Denne prosessen kalles **krenering**. Cellene kan ikke lenger fungere normalt.

---

**Oppsummering**:
- Isotonisk: Ingen forandring -- cellene trives
- Hypotonisk: Cellen svulmer og kan lysere (sprekke)
- Hypertonisk: Cellen krymper (krenering)

Dette er grunnen til at det er viktig at blod og infusjonsvaesker har riktig osmotisk konsentrasjon.`,
    },

    // =========================================================================
    // 12. Definisjon: Aktiv transport
    // =========================================================================
    {
      id: 'bio1-1-2-def-aktiv-transport',
      type: 'definition',
      title: 'Aktiv transport',
      content:
        '**Aktiv transport** er forflytning av stoffer over cellemembranen **mot konsentrasjonsgradienten** -- det vil si fra et omraade med lav konsentrasjon til et omraade med hoy konsentrasjon. Fordi dette gaar mot den naturlige retningen, krever aktiv transport tilforsel av energi, vanligvis i form av ATP. Uten aktiv transport ville cellen ikke kunnet opprettholde de konsentrasjonsforskjellene den trenger for aa fungere.',
    },

    // =========================================================================
    // 13. Aktiv transport
    // =========================================================================
    {
      id: 'bio1-1-2-aktiv-transport',
      type: 'text',
      content: `## Aktiv transport -- krever energi (ATP)

Mange stoffer maa fraktes **mot** konsentrasjonsgradienten -- fra lav konsentrasjon til hoy konsentrasjon. Dette er som aa rulle en ball oppover en bakke: det krever energi. Cellen bruker **ATP** (adenosintrifosfat) som energikilde.

### Primaer aktiv transport

I primaer aktiv transport bruker transportproteinet energi direkte fra ATP-hydrolyse.

Det viktigste eksempelet er **Na$^+$/K$^+$-pumpen** (natrium-kaliumpumpen), som finnes i membranen til nesten alle dyreceller. Denne pumpen:

- Pumper **3 Na$^+$** ut av cellen
- Pumper **2 K$^+$** inn i cellen
- Bruker **1 ATP** per syklus

Resultatet er at cellen opprettholder:
- Hoy K$^+$-konsentrasjon inne i cellen (ca. 140 mM inne vs. 5 mM ute)
- Hoy Na$^+$-konsentrasjon utenfor cellen (ca. 145 mM ute vs. 12 mM inne)

Na$^+$/K$^+$-pumpen forbruker omtrent **25-30 % av cellens totale ATP-produksjon** -- dette viser hvor viktig den er.

### Sekundaer aktiv transport (kotransport)

I sekundaer aktiv transport brukes ikke ATP direkte. I stedet utnytter transportproteinet den konsentrasjonsgradienten som ble skapt av primaer aktiv transport.

**Symport (sam-transport)**:
- To stoffer fraktes i **samme retning**
- Eksempel: Na$^+$-glukose-symporteren i tynntarmen. Na$^+$ stremmer inn i cellen med konsentrasjonsgradienten, og denne energien brukes til aa dra glukose med inn

**Antiport (mot-transport)**:
- To stoffer fraktes i **motsatt retning**
- Eksempel: Na$^+$/H$^+$-antiporteren. Na$^+$ stremmer inn, mens H$^+$ pumpes ut

Sekundaer aktiv transport er indirekte avhengig av ATP, fordi det er Na$^+$/K$^+$-pumpen (primaer aktiv transport) som opprettholder Na$^+$-gradienten som drives av.`,
    },

    // =========================================================================
    // 14. Warning: Hvorfor aktiv transport er noedvendig
    // =========================================================================
    {
      id: 'bio1-1-2-warning-aktiv',
      type: 'warning',
      title: 'Hvorfor trenger cellen aktiv transport?',
      content:
        'Aktiv transport koster cellen mye energi. Likevel er det helt noedvendig. Uten aktiv transport ville konsentrasjonsforskjellene som passiv transport er avhengig av, gradvis forsvinne. Na$^+$/K$^+$-pumpen opprettholder den elektriske spenningsforskjellen (membranpotensialet) som er noedvendig for nervesignaler, muskelbevegelse og opptak av naeringsstoffer. Dersom pumpen stopper -- for eksempel ved forgiftning eller energimangel -- vil cellen raskt miste sine vitale funksjoner og do.',
    },

    // =========================================================================
    // 15. Eksempel: Na+/K+-pumpen steg for steg
    // =========================================================================
    {
      id: 'bio1-1-2-ex-nak-pumpe',
      type: 'example',
      title: 'Na+/K+-pumpen steg for steg',
      problem:
        'Beskriv steg for steg hvordan Na$^+$/K$^+$-pumpen fungerer, og forklar hvorfor den er saa viktig for cellen.',
      solution: `**Slik fungerer Na$^+$/K$^+$-pumpen:**

**Steg 1**: Pumpen starter med aa vaere aapen mot cellens innside. Tre Na$^+$-ioner fra cytoplasma binder seg til spesifikke bindingsseter paa proteinet.

**Steg 2**: Bindingen av Na$^+$ stimulerer pumpen til aa hydrolysere (spalte) ett ATP-molekyl. En fosfatgruppe overfoeres til pumpen. Dette kalles fosforylering.

$$\\text{ATP} \\rightarrow \\text{ADP} + \\text{P}_i + \\text{energi}$$

**Steg 3**: Fosforyleringen faar pumpen til aa endre form (konformasjonsendring). Pumpen lukkes mot innsiden og aapnes mot utsiden. De tre Na$^+$-ionene frigieres utenfor cellen.

**Steg 4**: I den nye formen binder to K$^+$-ioner seg fra utsiden av cellen til pumpens bindingsseter.

**Steg 5**: Bindingen av K$^+$ faar fosfatgruppen til aa losne fra pumpen (defosforylering). Pumpen endrer tilbake til sin opprinnelige form -- aapen mot innsiden.

**Steg 6**: De to K$^+$-ionene frigieres inne i cellen. Pumpen er klar for en ny syklus.

**Per syklus**: 3 Na$^+$ ut, 2 K$^+$ inn, 1 ATP forbrukt.

---

**Hvorfor er Na$^+$/K$^+$-pumpen saa viktig?**

1. **Membranpotensial**: Fordi det flyttes 3 positive ladninger ut men bare 2 inn, skapes et netto negativt potensial inni cellen (ca. -70 mV i nerveceller). Dette kalles membranpotensialet og er essensielt for nervesignaler og muskelkontraksjoner.

2. **Regulering av cellevolum**: Pumpen hindrer at for mye vann stremmer inn i cellen ved osmose, noe som kunne ført til at cellen sprakk.

3. **Drivkraft for sekundaer transport**: Na$^+$-gradienten som pumpen skaper brukes til aa drive opptak av glukose, aminosyrer og andre naeringsstoffer via kotransport.

4. **Signaloverfoering**: Konsentrasjonsforskjellene er grunnlaget for at nerveceller kan sende elektriske signaler (aksjonspotensial).`,
    },

    // =========================================================================
    // 16. Bulktransport
    // =========================================================================
    {
      id: 'bio1-1-2-bulktransport',
      type: 'text',
      content: `## Bulktransport -- transport av store mengder

Noen stoffer er for store til aa passere membranen gjennom proteiner. Store molekyler, partikler og til og med hele celler maa fraktes i membrankledde vesikler (blaerer). Denne typen transport kalles **bulktransport** og krever energi (ATP).

### Endocytose -- transport inn i cellen

Ved endocytose folder cellemembranen seg innover og omslutter materiale fra utsiden. Det dannes en vesikkel (membranblare) inne i cellen.

Det finnes tre hovedformer:

**1. Fagocytose (celleaeting)**
- Cellen omslutter store partikler, bakterier eller cellerester
- Cellemembranen strekker ut pseudopodier (falske foetter) som omslutter partikkelen
- Vesikkelen som dannes kalles et **fagosom**
- Viktig for immunforsvaret: Hvite blodceller (makrofager) fagocyterer bakterier
- Betyr bokstavelig talt \"celle-aeting\"

**2. Pinocytose (celledrikking)**
- Cellen tar opp smaa draaper av vaeske med opploste stoffer
- Cellemembranen folder seg innover og danner smaa vesikler
- Mindre spesifikk enn fagocytose -- alt som er opplosst i vaesken tas opp
- Foregaar naermest kontinuerlig i de fleste celler
- Betyr bokstavelig talt \"celle-drikking\"

**3. Reseptormediert endocytose**
- Den mest selektive formen for endocytose
- Spesifikke reseptorer paa celleoverflaten binder seg til bestemte molekyler (ligander)
- Reseptorene samles i **klatrinlekledde groper** i membranen
- Gropen folder seg innover og danner en klatrinlekledt vesikkel
- Eksempel: Opptak av LDL-kolesterol i leverceller

### Eksocytose -- transport ut av cellen

Eksocytose er det motsatte av endocytose. En vesikkel inne i cellen smelter sammen med cellemembranen og tommes innholdet sitt utenfor cellen.

**Eksempler paa eksocytose**:
- **Sekresjon av hormoner**: Insulinproduserende celler i bukspyttkjertelen frigir insulin via eksocytose
- **Nevrotransmittere**: Nerveceller frigir signalstoffer i synapsen
- **Avfallsstoffer**: Cellen kvitter seg med ufordoyd materiale
- **Membranreparasjon**: Nye membrankomponenter tilfoeres ved at vesikler smelter inn i cellemembranen`,
    },

    // =========================================================================
    // 17. Osmose i plante- vs. dyreceller
    // =========================================================================
    {
      id: 'bio1-1-2-osmose-plante-dyr',
      type: 'text',
      content: `## Osmose i planteceller vs. dyreceller

Planteceller og dyreceller reagerer sveart forskjellig paa osmotiske forandringer. Forskjellen skyldes at planteceller har en **cellevegg** utenfor cellemembranen, mens dyreceller ikke har det.

### Dyreceller

- **Isotonisk**: Cellen beholder sin normale form.
- **Hypotonisk**: Vann stremmer inn. Cellen svulmer opp og kan til slutt sprekke (**lysis**). Dyreceller mangler cellevegg og har ingen motstandskraft mot det indre trykket.
- **Hypertonisk**: Vann stremmer ut. Cellen krymper (**krenering**).

Dyreceller er derfor avhengige av at kroppens vaesker holder en stabil, isotonisk konsentrasjon. Dette reguleres av nyrene og hormoner som ADH (antidiuretisk hormon).

### Planteceller

Planteceller har en stiv **cellevegg** av cellulose utenfor cellemembranen. Denne gir plantecellen en helt annen respons:

- **Hypotonisk** (cellen i rent vann): Vann stremmer inn i cellen. Cellen svulmer, men celleveggen forhindrer at den sprekker. Det indre trykket som bygges opp kalles **turgortrykk**. Turgortykket er essensielt for planten -- det gir stivhet til blaer og stengler. En plante med godt turgortrykk staar rett og er fast.

- **Isotonisk**: Begrenset vannbevegelse. Cellen har lavt turgortrykk, og planten begynner aa bli slapp.

- **Hypertonisk**: Vann stremmer ut av cellen. Cellemembranen losner fra celleveggen i en prosess som kalles **plasmolysering**. Cellen kollapser inne i celleveggen. Planten visner. Ved alvorlig plasmolysering kan cellen doe.

Planteceller trives best i **hypotonisk miljo** -- i motsetning til dyreceller som trives i isotonisk miljo.`,
    },

    // =========================================================================
    // 18. Definisjoner: Turgor og plasmolysering
    // =========================================================================
    {
      id: 'bio1-1-2-def-turgor',
      type: 'definition',
      title: 'Turgortrykk',
      content:
        '**Turgortrykk** er det hydrostatiske trykket som oppstaar naar vann stremmer inn i en plantecelle ved osmose og presser cellemembranen mot celleveggen. Celleveggen motstaar dette trykket og forhindrer at cellen sprekker. Turgortrykk gir planten stivhet og er avgjorende for at stengel og blaer holder seg oppreist. Naar turgortrykket synker (for eksempel ved vannmangel), visner planten.',
    },
    {
      id: 'bio1-1-2-def-plasmolysering',
      type: 'definition',
      title: 'Plasmolysering',
      content:
        '**Plasmolysering** er prosessen der cellemembranen losner fra celleveggen i en plantecelle fordi vann stremmer ut av cellen ved osmose (naar cellen er i en hypertonisk losning). Cellens cytoplasma trekker seg sammen, og det dannes et gap mellom cellemembranen og celleveggen. Plasmolysering forer til at planten visner, og kan vaere reversibel dersom cellen plasseres tilbake i en hypotonisk losning.',
    },

    // =========================================================================
    // 19. Eksempel: Osmose i plantevanning
    // =========================================================================
    {
      id: 'bio1-1-2-ex-plantevanning',
      type: 'example',
      title: 'Osmose naar vi vanner planter',
      problem:
        'En elev glemmer aa vanne en potteplante i to uker. Planten visner. Eleven vanner planten grundig. Etter noen timer staar planten rett igjen. Forklar dette ved hjelp av osmose og turgortrykk.',
      solution: `**Hva skjedde da planten ikke fikk vann (uttorking)?**

Naar jorden torker ut, oker losestoffkonsentrasjonen i jordvannet (det lille som er igjen). Plantecellene befinner seg i et stadig mer **hypertonisk** miljo.

Vann stremmer ut av cellene ved osmose -- fra lav losestoffkonsentrasjon (inne i cellen) til hoy losestoffkonsentrasjon (i den torre jorden).

Cellemembranen losner fra celleveggen (**plasmolysering**). Turgortrykket synker dramatisk. Uten turgortrykk mister planten sin stivhet og visner.

---

**Hva skjedde da planten ble vannet?**

Vann tilfoeres jorden. Jordvannet blir naaa sveart fortynnet -- det er en **hypotonisk** losning sammenlignet med plantecellens innhold.

Vann stremmer inn i rotcellene ved osmose -- fra lav losestoffkonsentrasjon (jordvannet) til hoy losestoffkonsentrasjon (cellenes cytoplasma).

Cellene svulmer opp. Cellemembranen presses mot celleveggen igjen. **Turgortrykket** bygges opp. Celleveggen hindrer at cellene sprekker.

Det okte turgortrykket gir planten tilbake sin stivhet, og planten reiser seg igjen.

---

**Viktige poenger**:
- Plasmolysering kan vaere reversibel: Cellen kan gjenopprettes ved aa tilfoere vann
- Dersom planten ikke vannes over sveart lang tid, kan cellene doe permanent (irreversibel skade)
- Turgortrykk er drivkraften bak plantens evne til aa staa oppreist
- Vannopptak i roetter drives av osmose`,
    },

    // =========================================================================
    // 20. Cellesignalering og membranpotensial
    // =========================================================================
    {
      id: 'bio1-1-2-signalering-potensial',
      type: 'text',
      content: `## Cellesignalering og membranpotensial

Cellemembranen spiller en sentral rolle i cellekommunikasjon og elektrisk signalering.

### Cellesignalering

Celler kommuniserer med hverandre ved hjelp av **signalmolekyler** (ligander). Typiske ligander er hormoner, nevrotransmittere og vekstfaktorer.

Signaleringsveien er:

1. **Liganden** (signalmolekylet) frigires av en sendercelle
2. Liganden binder seg til en **reseptor** paa mottakercellens membran
3. Bindingen utloser en **intracellular signalkaskade** -- en kjede av reaksjoner inne i cellen
4. Cellen responderer: endrer genuttrykk, deler seg, produserer stoffer, etc.

Reseptorene er typisk **glykoproteiner** i membranen. De er sveart spesifikke -- akkurat som en nokkel i en laas. Bare den riktige liganden kan aktivere reseptoren.

### Membranpotensial

Fordi Na$^+$/K$^+$-pumpen transporterer flere positive ladninger ut enn inn (3 Na$^+$ ut, 2 K$^+$ inn), oppstaar en **elektrisk spenningsforskjell** over membranen. Innsiden av cellen er negativt ladd i forhold til utsiden.

Denne spenningsforskjellen kalles **membranpotensialet** og er typisk rundt **-70 mV** i en nervecelle i hvile (hvilepotensialet).

Membranpotensialet er viktig for:
- **Nervesignaler**: Naar ionkanaler aapnes, endres membranpotensialet raskt, og et elektrisk signal (aksjonspotensial) sendes langs nervecellen
- **Muskelkontraksjon**: Endring i membranpotensialet utloser muskelsammentrekning
- **Naeringstransport**: Den elektriske gradienten driver sekundaer aktiv transport

Membranpotensialet er mulig bare fordi membranen er **selektivt permeabel** -- den tillater ikke ioner aa flyte fritt, men kontrollerer ionestremmen gjennom spesifikke kanaler og pumper.`,
    },

    // =========================================================================
    // 21. Note: Oppsummering av transportformene
    // =========================================================================
    {
      id: 'bio1-1-2-note-oppsummering',
      type: 'note',
      title: 'Oversikt over transportformer',
      content:
        '**Passiv transport** (krever ikke ATP, med gradienten):\n- Enkel diffusjon: Smaa, upolaaare molekyler direkte gjennom dobbeltlaget\n- Osmose: Vann gjennom membranen\n- Fasilitert diffusjon: Via kanalproteiner eller baererproteiner\n\n**Aktiv transport** (krever ATP, mot gradienten):\n- Primaer: Energi direkte fra ATP (f.eks. Na$^+$/K$^+$-pumpen)\n- Sekundaer: Utnytter gradient skapt av primaer aktiv transport (kotransport)\n\n**Bulktransport** (krever ATP, for store mengder):\n- Endocytose: Inn i cellen (fagocytose, pinocytose, reseptormediert)\n- Eksocytose: Ut av cellen',
    },

    // =========================================================================
    // 22. Eksempel: Osmose i hverdagen
    // =========================================================================
    {
      id: 'bio1-1-2-ex-osmose-hverdag',
      type: 'example',
      title: 'Osmose naar du salter en agurk',
      problem:
        'Naar du legger agurkskiver i en skaal med salt, trekker de seg sammen og det samler seg vann i skaalen. Forklar dette fenomenet ved hjelp av osmose.',
      solution: `**Hva skjer naar du salter agurkskiver?**

**Utgangssituasjonen**: Agurkskivene inneholder celler fylt med vaeske (cytoplasma med lav losestoffkonsentrasjon). Paa utsiden er det et tykt lag med salt (sveart hoy losestoffkonsentrasjon).

**Osmotisk analyse**: Omgivelsene rundt agurkskivene er **hypertoniske** i forhold til cellene inne i agurken. Det er en stor konsentrasjonsgradient.

**Hva skjer**: Vann stremmer ut av agurkcellene ved osmose -- fra det hypotoniske miljoet (inne i cellen) til det hypertoniske miljoet (salt paa utsiden). Dette fortsetter helt til det oppnaas en slags likevekt.

**Resultat**:
- Cellene mister vann og krymper (plasmolysering i plantecellene)
- Agurkskivene blir slappe og trekker seg sammen
- Vannet samler seg i skaalen, blandet med salt

**Samme prinsipp brukes til**:
- Salting og sylting av mat (konservering) -- hoyt saltinnhold dreper bakterier ved osmose
- Sukring av baer til syltetoy
- Torkefisk -- saltet trekker ut vannet

Bakterier som havner paa det saltede kjottet mister ogsaa vann gjennom osmose og dor. Derfor er salting en effektiv konserveringsmetode som har vaert brukt i tusenvis av aar.`,
    },
  ],

  // ===========================================================================
  // Oppgaver
  // ===========================================================================
  exercises: [
    // Oppgave 1 -- Lett, flervalg
    {
      id: 'bio1-1-2-ex-1',
      number: '1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den grunnleggende strukturen i cellemembranen?',
      options: [
        { id: 'a', text: 'Et enkeltlag av fosfolipider med proteiner', isCorrect: false },
        { id: 'b', text: 'Et dobbeltlag av fosfolipider med innleirede proteiner, kolesterol og karbohydrater', isCorrect: true },
        { id: 'c', text: 'Et dobbeltlag av kolesterol med innleirede fosfolipider', isCorrect: false },
        { id: 'd', text: 'Et proteinnettverk med noen spredte fosfolipider', isCorrect: false },
      ],
      hints: ['Tenk paa den flytende mosaikk-modellen.'],
      solution:
        'Cellemembranen bestaar av et **dobbeltlag av fosfolipider** med innleirede proteiner, kolesterol og karbohydrater. Fosfolipidene danner grunnstrukturen, mens proteinene og de andre komponentene gir membranen sine funksjonelle egenskaper. Dette beskrives av den flytende mosaikk-modellen (Singer og Nicolson, 1972).',
    },

    // Oppgave 2 -- Lett, klassisk
    {
      id: 'bio1-1-2-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar hva det betyr at cellemembranen er \"selektivt permeabel\".',
      solution:
        'At cellemembranen er selektivt permeabel betyr at den slipper noen stoffer gjennom, men ikke andre. Smaa, upolaaare molekyler (som O$_2$ og CO$_2$) kan passere fritt gjennom fosfolipiddobbeltlaget, mens store polaaare molekyler og ioner maa fraktes gjennom spesifikke transportproteiner. Denne egenskapen gir cellen kontroll over hvilke stoffer som slipper inn og ut, slik at den kan opprettholde et stabilt indre miljo.',
      hints: ['Hvilke stoffer passerer lett? Hvilke trenger hjelp?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // Oppgave 3 -- Lett, flervalg
    {
      id: 'bio1-1-2-ex-3',
      number: '3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er rollen til kolesterol i cellemembranen?',
      options: [
        { id: 'a', text: 'Det gir energi til transportproteinene', isCorrect: false },
        { id: 'b', text: 'Det fungerer som en reseptor for signalmolekyler', isCorrect: false },
        { id: 'c', text: 'Det regulerer membranens fluiditet ved ulike temperaturer', isCorrect: true },
        { id: 'd', text: 'Det danner porer for vanntransport', isCorrect: false },
      ],
      hints: ['Tenk paa hva som skjer med membranen ved hoye og lave temperaturer.'],
      solution:
        'Kolesterol regulerer membranens fluiditet. Ved hoye temperaturer hindrer kolesterol at fosfolipidene beveger seg for mye, slik at membranen ikke blir for flytende. Ved lave temperaturer forhindrer det at fosfolipidhalene pakker seg for taett, noe som ville gjort membranen stiv. Kolesterol fungerer derfor som en fluiditets-buffer.',
    },

    // Oppgave 4 -- Lett, klassisk
    {
      id: 'bio1-1-2-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom enkel diffusjon og fasilitert diffusjon?',
      solution:
        'Baade enkel og fasilitert diffusjon er former for passiv transport (krever ikke energi) der stoffer beveger seg med konsentrasjonsgradienten.\n\n**Enkel diffusjon**: Smaa, upolaaare molekyler (O$_2$, CO$_2$) passerer direkte gjennom fosfolipiddobbeltlaget uten hjelp av proteiner.\n\n**Fasilitert diffusjon**: Stoffer som ikke kan passere dobbeltlaget paa egen haand (ioner, glukose) faar hjelp av transportproteiner -- enten kanalproteiner eller baererproteiner. Fasilitert diffusjon kan bli mettet (alle proteinene er opptatt), mens enkel diffusjon ikke kan det.',
      hints: ['Begge er passive, men det er en viktig forskjell i hvordan stoffene passerer membranen.'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // Oppgave 5 -- Medium, flervalg
    {
      id: 'bio1-1-2-ex-5',
      number: '5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En dyrecelle plasseres i en hypotonisk losning. Hva vil skje?',
      options: [
        { id: 'a', text: 'Cellen krymper fordi vann stremmer ut', isCorrect: false },
        { id: 'b', text: 'Cellen svulmer opp og kan sprekke (lysis) fordi vann stremmer inn', isCorrect: true },
        { id: 'c', text: 'Ingenting -- cellen opprettholder likevekt', isCorrect: false },
        { id: 'd', text: 'Cellen utvikler turgortrykk og holder seg stabil', isCorrect: false },
      ],
      hints: ['Hypotonisk betyr lavere losestoffkonsentrasjon utenfor cellen. Hvilken vei stremmer vannet?'],
      solution:
        'I en hypotonisk losning er losestoffkonsentrasjonen lavere utenfor cellen enn innenfor. Vann stremmer inn i cellen ved osmose (fra lav til hoy losestoffkonsentrasjon). Dyreceller mangler cellevegg, saa de har ingen motstandskraft mot det okende trykket. Cellen svulmer opp og kan til slutt sprekke -- dette kalles lysis (eller hemolyse for rode blodceller). Merk at en plantecelle i same situasjon ville utviklet turgortrykk takket vaere celleveggen.',
    },

    // Oppgave 6 -- Medium, klassisk
    {
      id: 'bio1-1-2-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre hovedformene for endocytose og gi et eksempel paa hver.',
      solution:
        '**1. Fagocytose (\"celleaeting\")**: Cellen omslutter store partikler eller hele celler ved aa strekke ut pseudopodier. Eksempel: Makrofager (hvite blodceller) som spiser bakterier i immunforsvaret.\n\n**2. Pinocytose (\"celledrikking\")**: Cellen tar opp smaa draaper av vaeske med opploste stoffer ved at membranen folder seg innover. Eksempel: Celler langs blodaaarer som tar opp vaesker fra blodet.\n\n**3. Reseptormediert endocytose**: Den mest spesifikke formen. Reseptorer paa celleoverflaten binder bestemte molekyler (ligander), og omraadet folder seg innover og danner en vesikkel. Eksempel: Leverceller som tar opp LDL-kolesterol fra blodet via LDL-reseptorer.',
      hints: ['Tenk: aeting, drikking, og spesifikt opptak.'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // Oppgave 7 -- Medium, flervalg
    {
      id: 'bio1-1-2-ex-7',
      number: '7',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Na$^+$/K$^+$-pumpen transporterer per syklus:',
      options: [
        { id: 'a', text: '2 Na$^+$ ut og 3 K$^+$ inn', isCorrect: false },
        { id: 'b', text: '3 Na$^+$ ut og 2 K$^+$ inn', isCorrect: true },
        { id: 'c', text: '3 Na$^+$ inn og 2 K$^+$ ut', isCorrect: false },
        { id: 'd', text: '2 Na$^+$ inn og 3 K$^+$ ut', isCorrect: false },
      ],
      hints: ['Pumpen pumper natrium UT og kalium INN. Huskeregelen: 3 ut, 2 inn.'],
      solution:
        'Na$^+$/K$^+$-pumpen transporterer **3 Na$^+$ ut** av cellen og **2 K$^+$ inn** i cellen per syklus, og forbruker 1 ATP. Fordi det flyttes flere positive ladninger ut enn inn (netto 1 positiv ladning ut), bidrar pumpen til det negative membranpotensialet inne i cellen.',
    },

    // Oppgave 8 -- Medium, klassisk
    {
      id: 'bio1-1-2-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom primaer aktiv transport og sekundaer aktiv transport (kotransport). Gi et eksempel paa hver.',
      solution:
        '**Primaer aktiv transport**: Transportproteinet bruker energi **direkte** fra ATP-hydrolyse til aa pumpe stoffer mot konsentrasjonsgradienten. Eksempel: Na$^+$/K$^+$-pumpen, som hydrolyserer ATP for aa pumpe 3 Na$^+$ ut og 2 K$^+$ inn.\n\n**Sekundaer aktiv transport (kotransport)**: Transportproteinet bruker **ikke** ATP direkte. I stedet utnytter det konsentrasjonsgradienten til et annet stoff (vanligvis Na$^+$) som ble opprettet av primaer aktiv transport. Eksempel: Na$^+$-glukose-symporteren i tynntarmen, der Na$^+$ som stremmer inn med sin gradient trekker glukose med seg inn i cellen.\n\nSekundaer aktiv transport er indirekte avhengig av ATP, fordi Na$^+$-gradienten som driver den opprettholdes av Na$^+$/K$^+$-pumpen.',
      hints: ['Tenk paa forskjellen i energikilde: direkte ATP vs. utnyttelse av en gradient.'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // Oppgave 9 -- Medium, klassisk
    {
      id: 'bio1-1-2-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med turgortrykk og plasmolysering. Hvorfor er turgortrykk viktig for planter?',
      solution:
        '**Turgortrykk** er det trykket som oppstaar naar vann stremmer inn i en plantecelle ved osmose og presser cellemembranen mot celleveggen. Celleveggen gir motstand og forhindrer at cellen sprekker. Turgortrykk gir planten stivhet og er grunnen til at blaer og stengel holder seg oppreist. Uten tilstrekkelig turgortrykk visner planten.\n\n**Plasmolysering** er det motsatte: Naar en plantecelle plasseres i en hypertonisk losning, stremmer vann ut av cellen. Cellemembranen losner fra celleveggen, og cytoplasma trekker seg sammen. Cellen mister sitt turgortrykk, og planten visner.\n\nTurgortrykk er viktig fordi planter mangler skjelett. Det er turgortrykket i cellene som gir plantevev mekanisk stotte. Planter regulerer turgortrykket ved aa kontrollere losestoffkonsentrasjonen inne i cellene, noe som igjen styrer vattenopptaket.',
      hints: ['Tenk paa forskjellen mellom en frisk og en visnet plante.'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // Oppgave 10 -- Vanskelig, flervalg
    {
      id: 'bio1-1-2-ex-10',
      number: '10',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken av foelgende paastander om fasilitert diffusjon er **feil**?',
      options: [
        { id: 'a', text: 'Den krever transportproteiner i membranen', isCorrect: false },
        { id: 'b', text: 'Den gaar fra hoy til lav konsentrasjon', isCorrect: false },
        { id: 'c', text: 'Den krever energi i form av ATP', isCorrect: true },
        { id: 'd', text: 'Den kan bli mettet naar alle transportproteinene er opptatt', isCorrect: false },
      ],
      hints: ['Fasilitert diffusjon er en form for passiv transport. Hva betyr det for energiforbruket?'],
      solution:
        'Alternativ C er feil. Fasilitert diffusjon er en form for **passiv transport** og krever **ikke** ATP. Drivkraften er konsentrasjonsgradienten -- stoffet beveger seg fra hoy til lav konsentrasjon. Proteinene gir kun en vei gjennom membranen, men tilforer ikke energi. De andre alternativene er alle korrekte: fasilitert diffusjon krever transportproteiner (A), gaar med gradienten (B), og kan bli mettet (D).',
    },

    // Oppgave 11 -- Vanskelig, klassisk
    {
      id: 'bio1-1-2-ex-11',
      number: '11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En legemiddelprodusent vil lage et medikament som skal virke inne i cellen, men molekylet er stort og polaaart og kan ikke passere cellemembranen. Foresla minst to strategier for aa faa medikamentet inn i cellen, og forklar den biologiske mekanismen bak hver strategi.',
      solution:
        '**Strategi 1: Utnyttelse av reseptormediert endocytose**\nMan kan koble medikamentet til et molekyl (ligand) som cellen gjenkjenner og tar opp via reseptormediert endocytose. For eksempel kan medikamentet festes til transferrin (jernbaererprotein) eller et antistoff som binder seg til en reseptor paa maalcellen. Naar liganden binder reseptoren, tas hele komplekset opp i en vesikkel. Inne i cellen frigieres medikamentet.\n\n**Strategi 2: Innkapsling i liposomer**\nMan kan pakke medikamentet inn i kunstige fosfolipidvesikler (liposomer). Siden liposomenes membran har samme oppbygging som cellemembranen, kan de smelte sammen med cellemembranen ved en prosess som ligner endocytose/membranfusjon. Innholdet (medikamentet) frigis inne i cellen.\n\n**Strategi 3: Koble til en cellepenetrerende peptidsekvens**\nVisse korte aminosyresekvenser (cellepenetrerende peptider) har evnen til aa transportere store molekyler gjennom cellemembranen. Medikamentet kan kobles til et slikt peptid for aa faa det forbi den hydrofobe barrieren.\n\nAlle strategiene utnytter cellens egne transportmekanismer eller membranens lipidegenskap for aa omgaa den selektive permeabiliteten.',
      hints: [
        'Tenk paa hvilke transportmekanismer cellen allerede bruker for store molekyler.',
        'Kan du utnytte cellens egne prosesser?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // Oppgave 12 -- Vanskelig, klassisk
    {
      id: 'bio1-1-2-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor en plantecelle trives best i en hypotonisk losning, mens en dyrecelle trives best i en isotonisk losning. Hva er den strukturelle forskjellen som forklarer dette?',
      solution:
        'Den avgjorende strukturelle forskjellen er at planteceller har en **cellevegg** av cellulose utenfor cellemembranen, mens dyreceller ikke har det.\n\n**Planteceller i hypotonisk losning**: Vann stremmer inn ved osmose. Cellen svulmer, men celleveggen gir motstand og forhindrer at cellen sprekker. Det oppstaar et **turgortrykk** som gir cellen og planten stivhet. Planteceller \"liker\" dette trykket -- det er slik de opprettholder sin struktur. I en isotonisk losning ville turgortrykket vaere lavt, og planten ville vaere slapp.\n\n**Dyreceller i isotonisk losning**: Dyreceller mangler cellevegg. I en hypotonisk losning ville vann stremme inn ukontrollert, og cellen ville svulme opp og sprekke (lysis). I en isotonisk losning er det ingen netto vannbevegelse, og cellen beholder sin normale form.\n\nCelleveggen er altsaa noekkelen. Den gir plantecellen en \"sikkerhetsbuffer\" som tillater den aa ta opp vann under trykk uten aa odelegges, mens dyrecellen mangler denne beskyttelsen og er avhengig av at miljoet rundt har riktig osmotisk konsentrasjon.',
      hints: [
        'Hva har plantecellen som dyrecellen mangler?',
        'Hva skjer med vannet i de to tilfellene?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // Oppgave 13 -- Medium, flervalg
    {
      id: 'bio1-1-2-ex-13',
      number: '13',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket av foelgende stoffer kan passere cellemembranen ved enkel diffusjon uten hjelp av proteiner?',
      options: [
        { id: 'a', text: 'Glukose', isCorrect: false },
        { id: 'b', text: 'Na$^+$-ioner', isCorrect: false },
        { id: 'c', text: 'Oksygen (O$_2$)', isCorrect: true },
        { id: 'd', text: 'Aminosyrer', isCorrect: false },
      ],
      hints: ['Tenk paa molekylenes storrelse og polaritet. Hva slags molekyler slipper gjennom det hydrofobe dobbeltlaget?'],
      solution:
        'Oksygen (O$_2$) er et lite, upolaaart (hydrofobt) molekyl som kan passere direkte gjennom fosfolipiddobbeltlaget uten hjelp av proteiner. Glukose er for stor og polaar, Na$^+$ er et ladd ion, og aminosyrer er polaaare -- alle disse trenger transportproteiner (fasilitert diffusjon eller aktiv transport).',
    },

    // Oppgave 14 -- Vanskelig, klassisk
    {
      id: 'bio1-1-2-ex-14',
      number: '14',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et giftstoff blokkerer Na$^+$/K$^+$-pumpen i en celle. Beskriv minst tre konsekvenser dette vil ha for cellen og forklar mekanismen bak hver konsekvens.',
      solution:
        '**Konsekvens 1: Tap av konsentrasjonsgradient**\nNaar pumpen stopper, vil Na$^+$ gradvis lekke inn i cellen og K$^+$ lekke ut gjennom aapne ionkanaler (passiv transport). Over tid utjevnes konsentrasjonsforskjellene for Na$^+$ og K$^+$ mellom innsiden og utsiden av cellen.\n\n**Konsekvens 2: Tap av membranpotensial**\nNaar konsentrasjonsgradientene for Na$^+$ og K$^+$ forsvinner, vil membranpotensialet (normalt ca. -70 mV) gaa mot null (depolarisering). Nerveceller kan ikke lenger sende signaler, og muskelceller kan ikke kontrahere normalt.\n\n**Konsekvens 3: Cellen svulmer opp (osmotisk problem)**\nNaar Na$^+$ hoper seg opp inne i cellen, oker den intracellulare losestoffkonsentrasjonen. Cellen blir hypertonisk i forhold til miljoet. Vann stremmer inn ved osmose. Uten pumpens regulering av ionbalansen vil cellen svulme og kan til slutt sprekke (lysis).\n\n**Konsekvens 4: Sekundaer aktiv transport stopper**\nNaar Na$^+$-gradienten forsvinner, kan ikke kotransportorer (som Na$^+$-glukose-symporteren) lenger fungere. Cellen mister evnen til aa ta opp glukose og aminosyrer via sekundaer aktiv transport.\n\n**Konsekvens 5: Celledod**\nSummen av disse effektene -- tap av iongradienter, osmotisk stress, manglende naeringsopptak og tap av signalering -- forer til at cellen dor.',
      hints: [
        'Tenk paa alt Na$^+$/K$^+$-pumpen er ansvarlig for.',
        'Hva skjer naar konsentrasjonsgradientene forsvinner?',
        'Tenk paa osmotiske effekter.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // Oppgave 15 -- Lett, klassisk
    {
      id: 'bio1-1-2-ex-15',
      number: '15',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom endocytose og eksocytose?',
      solution:
        '**Endocytose** er transport av stoffer **inn** i cellen. Cellemembranen folder seg innover og omslutter materiale fra utsiden, som deretter befinner seg i en vesikkel inne i cellen. De tre typene er fagocytose (celleaeting), pinocytose (celledrikking) og reseptormediert endocytose.\n\n**Eksocytose** er transport av stoffer **ut** av cellen. En vesikkel inne i cellen beveger seg mot cellemembranen, smelter sammen med den, og frigir innholdet utenfor cellen.\n\nBegge prosessene krever energi (ATP) og involverer vesikler som dannes av eller smelter med cellemembranen.',
      hints: ['Endo = inn, ekso = ut. Begge involverer vesikler.'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
