/* eslint-disable */
// @ts-nocheck
/**
 * Frisør, blomster, interiør og eksponeringsdesign VG1 - Del 3: Interiørdesign
 *
 * Kapittel 3.1-3.7: Interiørdesign
 * Dekker LK20 kompetansemål for fargelære, romforståelse, stilarter, materialer,
 * lyssetting og prosjektarbeid i interiørdesign
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Grunnleggende fargelære
// ============================================================================

export const CHAPTER_FB_VG1_3_1: TextbookChapter = {
  id: 'frisor-blomster-vg1-3-1',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '3.1',
  title: 'Grunnleggende fargelære',
  description: 'Fargesirkelen, primær-, sekundær- og tertiærfarger, fargekontraster og fargeharmonier i interiørdesign.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke fargelære og komposisjonsprinsipper i eget arbeid med interiør og eksponeringsdesign',
  ],
  content: [
    {
      id: 'fb-3-1-intro',
      type: 'text',
      content: `Farger er et av de viktigste verktøyene i interiørdesign. De påvirker hvordan vi opplever rom, skaper stemning og kan endre vår oppfatning av størrelse og proporsjoner. For å bruke farger bevisst i interiørarbeid trenger du kunnskap om fargelære -- det systematiske studiet av farger, deres egenskaper og hvordan de samspiller. I dette kapittelet lærer du om fargesirkelen, ulike fargetyper, kontraster og harmonier som brukes i profesjonelt interiørdesign.`,
    },
    {
      id: 'fb-3-1-def-1',
      type: 'definition',
      title: 'Fargesirkelen',
      content: `Fargesirkelen er en visuell modell som ordner farger i en sirkel basert på deres forhold til hverandre. Den ble først utviklet av Isaac Newton på 1600-tallet og er senere videreutviklet av Johannes Itten. Fargesirkelen viser primærfarger, sekundærfarger og tertiærfarger, og er et grunnleggende verktøy for å forstå fargeharmonier og kontraster.`,
    },
    {
      id: 'fb-3-1-text-1',
      type: 'text',
      title: 'Primærfarger',
      content: `**Primærfargene** er farger som ikke kan blandes av andre farger. De danner grunnlaget for alle andre farger.

I tradisjonell fargelære (subtraktiv fargeblanding) er primærfargene:
- **Rød** -- en varm, intens farge
- **Gul** -- den lyseste primærfargen
- **Blå** -- en kald, dyp farge

Ved å blande to primærfarger får vi sekundærfarger. Ved å blande alle tre primærfargene i like deler får vi teoretisk sett en mørk, nøytral farge.

**Viktig å merke seg:** I digital fargelære (additiv fargeblanding, som på skjermer) er primærfargene rød, grønn og blå (RGB). I profesjonell trykk brukes cyan, magenta og gul (CMY). I interiørdesign forholder vi oss vanligvis til den tradisjonelle fargesirkelen.`,
    },
    {
      id: 'fb-3-1-def-2',
      type: 'definition',
      title: 'Sekundærfarger',
      content: `Sekundærfarger oppstår ved blanding av to primærfarger i like deler. De tre sekundærfargene er oransje (rød + gul), grønn (gul + blå) og fiolett (blå + rød). I fargesirkelen plasseres sekundærfargene mellom de primærfargene de er blandet av.`,
    },
    {
      id: 'fb-3-1-text-2',
      type: 'text',
      title: 'Tertiærfarger og nyanser',
      content: `**Tertiærfarger** oppstår når en primærfarge blandes med en nærliggende sekundærfarge. Dette gir oss seks tertiærfarger:

- **Rødoransje** (rød + oransje)
- **Guloransje** (gul + oransje)
- **Gulgrønn** (gul + grønn)
- **Blågrønn** (blå + grønn)
- **Blåfiolett** (blå + fiolett)
- **Rødfiolett** (rød + fiolett)

Sammen med primær- og sekundærfargene gir dette oss en fargesirkel med tolv farger.

**Fargens tre egenskaper:**

1. **Kulør** -- selve fargen (rød, blå, grønn osv.)
2. **Valør** -- hvor lys eller mørk fargen er (lyshet)
3. **Metning** -- hvor ren eller dempet fargen er (intensitet)

Ved å variere valør og metning kan vi skape uendelig mange nyanser av samme kulør.`,
    },
    {
      id: 'fb-3-1-def-3',
      type: 'definition',
      title: 'Fargekontrast',
      content: `En fargekontrast oppstår når to eller flere farger plasseres ved siden av hverandre og skaper en visuell spenning. Johannes Itten definerte syv fargekontraster som brukes i kunst og design for å skape ulike visuelle effekter.`,
    },
    {
      id: 'fb-3-1-text-3',
      type: 'text',
      title: 'De viktigste fargekontrastene i interiør',
      content: `I interiørdesign bruker vi flere typer fargekontraster for å skape visuell interesse og balanse:

**1. Komplementærkontrast**
Farger som ligger rett overfor hverandre i fargesirkelen (f.eks. rød og grønn, blå og oransje). Gir sterk visuell effekt og energi.

**2. Kald-varm-kontrast**
Kontrasten mellom varme farger (rød, oransje, gul) og kalde farger (blå, grønn, fiolett). Varme farger oppleves som nære, kalde som fjerne.

**3. Lys-mørk-kontrast (valøkontrast)**
Forskjellen mellom lyse og mørke farger. Viktig for å skape dybde og fremheve elementer i et rom.

**4. Kvantitetskontrast**
Handler om mengdeforholdet mellom farger. En liten mengde sterk farge mot en stor flate av nøytral farge kan gi effektfull kontrast.

**5. Simultankontrast**
Øyet skaper automatisk komplementærfargen til en farge det ser på. En grå flate kan virke varm ved siden av blått, og kald ved siden av oransje.`,
    },
    {
      id: 'fb-3-1-text-4',
      type: 'text',
      title: 'Fargeharmonier i interiørdesign',
      content: `Fargeharmonier er kombinasjoner av farger som oppleves som balanserte og behagelige. De vanligste harmoniene i interiørdesign er:

**Monokromatisk harmoni**
Bruker ulike nyanser, valører og metningsgrader av én og samme kulør. Gir et rolig og sofistikert uttrykk. Eksempel: et rom i ulike nyanser av blått.

**Analog harmoni**
Bruker farger som ligger ved siden av hverandre i fargesirkelen (f.eks. blå, blågrønn og grønn). Gir et harmonisk og naturlig uttrykk.

**Komplementær harmoni**
Bruker farger som ligger overfor hverandre i fargesirkelen. Gir energi og spenning, men må balanseres forsiktig.

**Splittet komplementær**
I stedet for den rene komplementærfargen brukes de to fargene på hver side av komplementærfargen. Gir variasjon med mindre spenning.

**Triadisk harmoni**
Bruker tre farger som er jevnt fordelt i fargesirkelen (120 grader fra hverandre). Gir et livlig og fargerikt uttrykk.

**60-30-10-regelen** er et praktisk verktøy i interiørdesign: 60 % av rommet i én hovedfarge, 30 % i en sekundærfarge og 10 % i en aksentfarge.`,
    },
    {
      id: 'fb-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Fargepalett for en stue',
      problem: 'Du skal lage en fargepalett for en moderne stue basert på analog harmoni. Hovedfargen er dempet blågrønn. Hvordan setter du sammen paletten?',
      solution: `**Løsning med analog harmoni:**

1. **Hovedfarge (60 %):** Dempet blågrønn på vegger og store flater. Gir rommet en rolig og naturlig base.

2. **Sekundærfarge (30 %):** Myk grønn i møbler som sofa og lenestoler. Ligger ved siden av blågrønn i fargesirkelen og skaper harmoni.

3. **Tertiær-/aksentfarge (10 %):** Detaljer i dempet blå -- puter, vaser og kunstverk. Kompletterer den analoge harmonien.

4. **Nøytrale elementer:** Hvit eller lys grå i tak, lister og noen møbler for å gi rommet luft.

5. **Tekstur og materiale:** Variasjoner i tekstur (matt vegg, blank keramikk, grov lin) gir dybde selv med begrenset fargepalett.

Resultatet er et rom som oppleves som rolig, sammenhengende og naturlig -- typisk for skandinavisk interiørdesign.`,
    },
    {
      id: 'fb-3-1-tip-1',
      type: 'tip',
      title: 'Test farger i rommet',
      content: `Farger ser forskjellige ut avhengig av lys og omgivelser. Mal alltid en fargeprøve på veggen og observer den i dagslys, kunstig lys og kveldslys før du bestemmer deg. Bruk store prøveflater (minst A3-størrelse) for å få et realistisk inntrykk.`,
    },
    {
      id: 'fb-3-1-summary',
      type: 'text',
      content: `## Oppsummering

- Fargesirkelen ordner farger i en sirkel basert på deres innbyrdes forhold og ble utviklet av Newton og videreutviklet av Itten.
- Primærfargene (rød, gul, blå) kan ikke blandes av andre farger og danner grunnlaget for alle andre farger.
- Sekundærfarger (oransje, grønn, fiolett) oppstår ved blanding av to primærfarger.
- Tertiærfarger oppstår ved blanding av en primær- og en nærliggende sekundærfarge, og gir en fargesirkel med tolv farger.
- Farge har tre egenskaper: kulør (selve fargen), valør (lyshet) og metning (intensitet).
- De viktigste fargekontrastene i interiør er komplementærkontrast, kald-varm-kontrast, valøkontrast, kvantitetskontrast og simultankontrast.
- Vanlige fargeharmonier er monokromatisk, analog, komplementær, splittet komplementær og triadisk.
- 60-30-10-regelen er et praktisk verktøy: 60 % hovedfarge, 30 % sekundærfarge, 10 % aksentfarge.`,
    },
  ],
  exercises: [
    {
      id: 'fb-3-1-ex-1',
      type: 'multiple-choice',
      task: 'Hvilke er de tre primærfargene i tradisjonell fargelære?',
      options: [
        'Rød, grønn og blå',
        'Rød, gul og blå',
        'Cyan, magenta og gul',
        'Oransje, grønn og fiolett',
      ],
      correctAnswer: 1,
      solution: 'I tradisjonell (subtraktiv) fargelære er primærfargene rød, gul og blå. Disse kan ikke blandes av andre farger og danner grunnlaget for alle andre farger i fargesirkelen.',
    },
    {
      id: 'fb-3-1-ex-2',
      type: 'multiple-choice',
      task: 'Hva er en komplementærkontrast?',
      options: [
        'Farger som ligger ved siden av hverandre i fargesirkelen',
        'Farger som ligger rett overfor hverandre i fargesirkelen',
        'Bare bruk av svart og hvitt',
        'Tre farger med lik avstand i fargesirkelen',
      ],
      correctAnswer: 1,
      solution: 'En komplementærkontrast oppstår mellom farger som ligger rett overfor hverandre i fargesirkelen, for eksempel rød og grønn, eller blå og oransje. Disse kombinasjonene gir sterk visuell spenning.',
    },
    {
      id: 'fb-3-1-ex-3',
      type: 'classic',
      task: 'Forklar forskjellen mellom monokromatisk og analog fargeharmoni. Gi et eksempel på hver som kunne brukes i et interiør.',
      hints: ['Tenk på hvordan fargene forholder seg til hverandre i fargesirkelen.'],
      solution: 'Monokromatisk harmoni bruker ulike nyanser av én og samme farge (f.eks. ulike blåtoner i et soverom). Analog harmoni bruker farger som ligger ved siden av hverandre i fargesirkelen (f.eks. gul, guloransje og oransje i en spisestue). Monokromatisk gir et rolig og enhetlig uttrykk, mens analog gir mer variasjon men fortsatt harmoni.',
    },
    {
      id: 'fb-3-1-ex-4',
      type: 'classic',
      task: 'Forklar 60-30-10-regelen og lag en fargepalett for et tenkt soverom. Beskriv hvilke farger du velger og hvor de brukes.',
      solution: '60-30-10-regelen sier at 60 % av rommet skal ha en hovedfarge, 30 % en sekundærfarge og 10 % en aksentfarge. Eksempel for et soverom: 60 % dempet grå-blå på vegger og gulv, 30 % varm hvit i sengetøy og gardiner, 10 % dyp marineblå i puter, lamper og dekor. Dette gir et rolig soverom med tilstrekkelig visuell interesse.',
    },
    {
      id: 'fb-3-1-ex-5',
      type: 'multiple-choice',
      task: 'Hva beskriver begrepet "valør" i fargelæren?',
      options: [
        'Hvor intens eller mettet fargen er',
        'Hvilken kulør fargen tilhører',
        'Hvor lys eller mørk fargen er',
        'Hvor varm eller kald fargen oppleves',
      ],
      correctAnswer: 2,
      solution: 'Valør beskriver hvor lys eller mørk en farge er. En farge med høy valør er lys (f.eks. lyseblå), mens en farge med lav valør er mørk (f.eks. marineblå). Valør er en av fargens tre grunnleggende egenskaper sammen med kulør og metning.',
    },
    {
      id: 'fb-3-1-ex-6',
      type: 'classic',
      task: 'Velg to fargekontraster (f.eks. komplementærkontrast og kald-varm-kontrast) og forklar hvordan de kan brukes bevisst i et interiør for å skape ulike stemninger.',
      solution: 'Komplementærkontrast (f.eks. blå og oransje) kan brukes i en stue der oransje aksenter i puter og kunst gir energi mot blå vegger. Kald-varm-kontrast kan brukes ved å kombinere et kjølig blågrønt fargetema med varme treelementer og messing-detaljer, noe som skaper en balanse mellom ro og varme.',
      allowsUpload: true,
    },
  ],
  keyTerms: [
    { term: 'Fargesirkelen', definition: 'Visuell modell som ordner farger i en sirkel basert på deres innbyrdes forhold' },
    { term: 'Primærfarger', definition: 'Farger som ikke kan blandes av andre farger: rød, gul og blå' },
    { term: 'Komplementærkontrast', definition: 'Kontrast mellom farger som ligger rett overfor hverandre i fargesirkelen' },
    { term: 'Valør', definition: 'Hvor lys eller mørk en farge er' },
    { term: 'Fargeharmoni', definition: 'Kombinasjoner av farger som oppleves som balanserte og behagelige' },
    { term: '60-30-10-regelen', definition: 'Fordelingsprinsipp der 60 % er hovedfarge, 30 % sekundærfarge og 10 % aksentfarge' },
  ],
};

// ============================================================================
// Kapittel 3.2: Fargenes psykologiske virkning
// ============================================================================

export const CHAPTER_FB_VG1_3_2: TextbookChapter = {
  id: 'frisor-blomster-vg1-3-2',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '3.2',
  title: 'Fargenes psykologiske virkning',
  description: 'Fargepsykologi, stemning, symbolikk og kulturell betydning av farger i interiørdesign.',
  estimatedMinutes: 40,
  competenceGoals: [
    'reflektere over korleis fargar og form verkar på menneske og bruke dette i eige arbeid',
  ],
  content: [
    {
      id: 'fb-3-2-intro',
      type: 'text',
      content: `Farger påvirker oss på et dypt psykologisk plan. De kan endre humøret vårt, påvirke appetitt og søvn, og til og med påvirke hvordan vi oppfatter temperatur i et rom. I interiørdesign er det derfor avgjørende å forstå den psykologiske virkningen av farger. I dette kapittelet utforsker vi hvordan ulike farger påvirker oss, hvilken symbolikk de bærer, og hvordan kulturelle forskjeller spiller inn i fargevalg.`,
    },
    {
      id: 'fb-3-2-def-1',
      type: 'definition',
      title: 'Fargepsykologi',
      content: `Fargepsykologi er studiet av hvordan farger påvirker menneskelig atferd, følelser og oppfatning. Forskning viser at farger kan påvirke puls, blodtrykk, appetitt og konsentrasjon. I interiørdesign brukes denne kunnskapen til å skape rom som støtter ønskede aktiviteter og stemninger.`,
    },
    {
      id: 'fb-3-2-text-1',
      type: 'text',
      title: 'Varme fargers psykologiske virkning',
      content: `**Rød**
- Øker puls og energinivå
- Symboliserer kjærlighet, lidenskap og kraft
- Stimulerer appetitt (brukes ofte i restauranter)
- Kan virke overveldende i store mengder
- Best som aksentfarge i interiør

**Oransje**
- Skaper varme og optimisme
- Fremmer sosial interaksjon og kreativitet
- Mindre intens enn rød, men fortsatt energisk
- Godt egnet for aktivitetsrom og kjøkken
- Dempede varianter (terrakotta, rust) gir en sofistikert varme

**Gul**
- Forbindes med solskinn, glede og energi
- Stimulerer mental aktivitet og konsentrasjon
- Kan gjøre mørke rom lysere og mer innbydende
- For sterke gultoner kan skape uro
- Dempet gul (sennep, honning) fungerer godt i de fleste rom`,
    },
    {
      id: 'fb-3-2-text-2',
      type: 'text',
      title: 'Kalde fargers psykologiske virkning',
      content: `**Blå**
- Senker puls og blodtrykk
- Skaper ro, tillit og trygghet
- Fremmer konsentrasjon og produktivitet
- Kan oppleves som kald i store mengder
- Svært populær i soverom og kontorer

**Grønn**
- Den mest avslappende fargen for øyet
- Forbindes med natur, balanse og fornyelse
- Skaper harmoni og reduserer stress
- Fungerer godt i nesten alle rom
- Sterke grønntoner gir friskhet, dempede gir eleganse

**Fiolett**
- Forbindes med luksus, kreativitet og spiritualitet
- Kan virke mystisk og sofistikert
- Dype lilla nyanser gir dramatikk
- Lavendel og lyse fiolette toner virker beroligende
- Best i soverom, meditasjonsrom eller kreative rom`,
    },
    {
      id: 'fb-3-2-text-3',
      type: 'text',
      title: 'Nøytrale farger og deres virkning',
      content: `**Hvit**
- Symboliserer renhet, klarhet og åpenhet
- Gjør rom lysere og tilsynelatende større
- Kan oppleves som steril i store mengder
- Viktig å velge riktig hvittone (varm eller kald)
- Grunnlag for skandinavisk interiørstil

**Grå**
- Nøytral og balansert
- Gir sofistikert og tidløst uttrykk
- Kan oppleves som trist uten fargeaksenter
- Fungerer som perfekt bakgrunn for andre farger
- Ulike gråtoner gir svært forskjellige uttrykk

**Sort**
- Skaper dybde, drama og eleganse
- Kan gjøre rom mindre og mørkere
- Effektfull som aksentfarge
- Gir kontrast og definerer rom
- Brukes med forsiktighet i interiør

**Beige og jordfargede toner**
- Varme, naturlige og innbydende
- Skaper trygghet og jordnærhet
- Går godt sammen med de fleste andre farger
- Tidløse og allsidige
- Perfekte som base i både moderne og klassisk interiør`,
    },
    {
      id: 'fb-3-2-text-4',
      type: 'text',
      title: 'Kulturelle forskjeller i fargesymbolikk',
      content: `Fargers betydning varierer mellom kulturer, og dette er viktig å ha bevissthet om i et stadig mer mangfoldig samfunn:

**Hvit:** I vestlig kultur symboliserer hvit renhet og bruktradisjonelt i bryllup. I mange asiatiske kulturer er hvit sorgfarge.

**Rød:** I Kina er rød lykkefargen og brukes ved feiringer. I vestlige kulturer forbindes den med kjærlighet og fare.

**Gul:** I Japan representerer gul mot og edelhet. I noen vestlige sammenhenger kan den signalisere forsiktighet.

**Grønn:** I islam er grønn en hellig farge. I vestlig kultur forbindes den med natur og miljø.

**Fiolett:** Historisk har fiolett vært forbeholdt kongelighet og adel i Europa, fordi fargestoffet var ekstremt dyrt å fremstille.

For interiørdesignere betyr dette at man bør ta hensyn til brukernes kulturelle bakgrunn ved fargevalg i offentlige rom, arbeidsplasser og flerbruksrom.`,
    },
    {
      id: 'fb-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Fargevalg for ulike romtyper',
      problem: 'Hvordan velger du farger for tre ulike rom: et soverom, et hjemmekontor og en entré?',
      solution: `**Soverom:**
Velg beroligende farger som fremmer søvn: dempet blå, myk lavendel eller varm grå. Unngå sterke, stimulerende farger som rød og knall oransje. Kombiner med naturlige tekstiler i nøytrale toner.

**Hjemmekontor:**
Velg farger som fremmer konsentrasjon: rolig blå eller blågrønn som basisfarger. Kan ha aksenter i dempet gul eller grønn for å stimulere kreativitet uten å forstyrre fokus.

**Entré:**
Velg innbydende farger som skaper et godt førsteinntrykk: varm hvit, lys gul eller myk grønn. Entreen bør ønske velkommen og gi en forsmak på resten av hjemmet. Mørkere aksenter kan gi dybde i et lite rom.`,
    },
    {
      id: 'fb-3-2-note-1',
      type: 'note',
      title: 'Individuelle forskjeller',
      content: `Husk at fargepsykologi beskriver generelle tendenser, ikke absolutter. Personlige erfaringer, minner og preferanser spiller også en stor rolle. En farge som er beroligende for én person kan være stressende for en annen. Gode interiørdesignere lytter alltid til klientens personlige relasjoner til farger.`,
    },
    {
      id: 'fb-3-2-summary',
      type: 'text',
      content: `## Oppsummering

- Farger har sterk psykologisk virkning og påvirker stemning, følelser og opplevelse av rom.
- Varme farger (rød, oransje, gul) oppleves som energigivende og stimulerende.
- Kalde farger (blå, grønn, fiolett) virker beroligende og rolige.
- Nøytrale farger (hvit, grå, beige, sort) danner base i interiør og lar andre farger komme til uttrykk.
- Fargers symbolikk varierer mellom kulturer og må tas hensyn til i profesjonelt arbeid.
- Riktig fargevalg i ulike rom kan støtte rommets funksjon og brukernes trivsel.
- Fargepsykologi beskriver generelle tendenser, men personlige preferanser spiller alltid en rolle.`,
    },
  ],
  exercises: [
    {
      id: 'fb-3-2-ex-1',
      type: 'multiple-choice',
      task: 'Hvilken farge senker pulsen og blodtrykket, og forbindes med ro og tillit?',
      options: [
        'Rød',
        'Gul',
        'Blå',
        'Oransje',
      ],
      correctAnswer: 2,
      solution: 'Blå er fargen som senker puls og blodtrykk, og forbindes med ro, tillit og trygghet. Den er derfor svært populær i soverom og kontorer der man ønsker et rolig og fokusert miljø.',
    },
    {
      id: 'fb-3-2-ex-2',
      type: 'classic',
      task: 'Velg et rom du kjenner godt (f.eks. ditt eget soverom eller en stue). Analyser fargene i rommet og vurder om fargevalgene støtter rommets funksjon. Foreslå eventuelle endringer med begrunnelse i fargepsykologi.',
      solution: 'Svaret bør inneholde: beskrivelse av rommets nåværende farger, vurdering av om fargene passer til rommets funksjon (f.eks. er soverommet rolig eller stimulerende?), og konkrete forslag til endringer med begrunnelse. For eksempel: et soverom med røde vegger kan gjøres mer søvnvennlig med dempet blå eller lavendel.',
      allowsUpload: true,
    },
    {
      id: 'fb-3-2-ex-3',
      type: 'multiple-choice',
      task: 'Hvilken farge brukes tradisjonelt som lykkefargen i Kina?',
      options: [
        'Gul',
        'Grønn',
        'Hvit',
        'Rød',
      ],
      correctAnswer: 3,
      solution: 'I Kina er rød lykkefargen og brukes ved feiringer, bryllup og nyttår. Dette er et godt eksempel på hvordan fargenes symbolikk varierer mellom kulturer.',
    },
    {
      id: 'fb-3-2-ex-4',
      type: 'classic',
      task: 'Forklar hvorfor et barnelegerom på et sykehus bør bruke andre farger enn et venterom for voksne. Begrunn med fargepsykologi.',
      solution: 'Et barnelegerom bør bruke lekne, glade farger som dempet gul, grønn og myk blå for å skape trygghet og positive assosiasjoner. Sterke, mørke eller kalde farger kan virke skremmende. Et venterom for voksne bør ha beroligende farger som dempet blå eller grønn for å redusere stress og uro, med varme aksenter for å unngå en steril atmosfære. Begge rom trenger farger som demper angst, men tilnærmingen må tilpasses aldersgruppen.',
    },
  ],
  keyTerms: [
    { term: 'Fargepsykologi', definition: 'Studiet av hvordan farger påvirker menneskelig atferd og følelser' },
    { term: 'Varme farger', definition: 'Rød, oransje og gul -- farger som oppleves som energiske og nære' },
    { term: 'Kalde farger', definition: 'Blå, grønn og fiolett -- farger som oppleves som rolige og fjerne' },
    { term: 'Nøytrale farger', definition: 'Hvit, grå, sort og beige -- allsidige bakgrunnsfarger' },
    { term: 'Fargesymbolikk', definition: 'Den kulturelle og psykologiske betydningen farger bærer' },
  ],
};

// ============================================================================
// Kapittel 3.3: Romforståelse og planløsning
// ============================================================================

export const CHAPTER_FB_VG1_3_3: TextbookChapter = {
  id: 'frisor-blomster-vg1-3-3',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '3.3',
  title: 'Romforståelse og planløsning',
  description: 'Romforståelse, plantegninger, møblering, skala og proporsjoner i interiørarbeid.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge, gjennomføre og presentere interiør- og eksponeringsprosjekter med utgangspunkt i rom og brukernes behov',
  ],
  content: [
    {
      id: 'fb-3-3-intro',
      type: 'text',
      content: `Et godt interiør handler ikke bare om vakre farger og flotte møbler -- det handler om å forstå rommet og bruke det optimalt. Romforståelse innebærer å analysere et roms dimensjoner, lysforhold, trafikkmønster og funksjonelle behov. Plantegninger er det viktigste verktøyet for å planlegge og kommunisere en interiørløsning. I dette kapittelet lærer du å lese og tegne plantegninger, forstå skala og proporsjoner, og planlegge møblering som fungerer i praksis.`,
    },
    {
      id: 'fb-3-3-def-1',
      type: 'definition',
      title: 'Plantegning',
      content: `En plantegning er en todimensjonal tegning som viser et rom eller en bygning sett ovenfra. Den viser vegger, dører, vinduer, innredning og møbler i riktig skala. Plantegninger tegnes vanligvis i målestokk 1:50 eller 1:100, der henholdsvis 1 cm på tegningen tilsvarer 50 cm eller 100 cm i virkeligheten.`,
    },
    {
      id: 'fb-3-3-text-1',
      type: 'text',
      title: 'Romanalyse -- forstå rommet',
      content: `Før du begynner å planlegge et interiør, må du analysere rommet grundig. En god romanalyse dekker følgende:

**Dimensjoner og form**
- Mål lengde, bredde og takhøyde
- Kartlegg rommets form (rektangulært, L-formet, åpen plan osv.)
- Merk av nisjer, søyler og andre særtrekk

**Arkitektoniske elementer**
- Dører: plassering, slagretning og bredde
- Vinduer: plassering, størrelse og type
- Stikkontakter, lysbrytere og datauttak
- Varmekilder (radiatorer, peis, gulvvarme)
- Faste installasjoner (kjøkkenbenk, baderomsutstyr)

**Lysforhold**
- Naturlig lys: hvilken retning vender vinduene?
- Dagslys gjennom dagen (morgensol, kveldssol)
- Eksisterende kunstig belysning
- Skyggeområder

**Funksjonelle behov**
- Hva skal rommet brukes til?
- Hvem skal bruke rommet?
- Trafikkmønster: hvordan beveger folk seg gjennom rommet?
- Oppbevaringsbehov`,
    },
    {
      id: 'fb-3-3-def-2',
      type: 'definition',
      title: 'Målestokk',
      content: `Målestokk angir forholdet mellom størrelsen på tegningen og den virkelige størrelsen. I målestokk 1:50 tilsvarer 1 cm på tegningen 50 cm (0,5 m) i virkeligheten. For å finne virkelig størrelse multipliserer du målet på tegningen med målestokktallet. For å tegne i målestokk deler du det virkelige målet med målestokktallet.`,
    },
    {
      id: 'fb-3-3-text-2',
      type: 'text',
      title: 'Tegne en plantegning',
      content: `**Steg for å tegne en plantegning:**

1. **Mål opp rommet** med målebånd og noter alle mål
2. **Velg målestokk** -- 1:50 er vanligst for enkeltrom
3. **Tegn ytterveggene** først, deretter innerveggene
4. **Marker dører** med en bue som viser slagretningen
5. **Marker vinduer** med tynne linjer i veggen
6. **Tegn inn faste elementer** som kjøkkenbenk og peis
7. **Legg til møbler** i riktig størrelse
8. **Legg til mål** og symboler

**Vanlige symboler i plantegninger:**
- Dør: vist med en bue (90° for vanlig dør, glidende for skyvedør)
- Vindu: parallelle linjer i veggen
- Trapp: parallelle linjer med pil som viser retning opp
- Stikkontakt: liten halvbue på veggen
- Lysbryter: punkt med linje ut fra veggen

**Vanlige møbelmål (omtrentlige):**
- Spisebord: 80 x 140 cm (4 personer)
- Spisestol: 45 x 50 cm
- Sofa 3-seter: 200 x 90 cm
- Enkeltseng: 90 x 200 cm
- Dobbeltseng: 150 x 200 cm`,
    },
    {
      id: 'fb-3-3-text-3',
      type: 'text',
      title: 'Møblering og sirkulasjon',
      content: `God møblering handler om å skape en balanse mellom estetikk, funksjon og bevegelse. Her er noen viktige prinsipper:

**Sirkulasjonssoner**
- Hovedganglinjer bør være minst 90 cm brede
- Mellom møbler og vegg: minst 60 cm for gjennomgang
- Rundt spisebord: 75 cm fra bordkant til vegg for å trekke ut stoler
- Foran garderober og skap: 90 cm for å åpne dører

**Soneinndeling**
- Del store rom inn i soner for ulike aktiviteter
- Bruk møbler, tepper og belysning til å definere soner
- Eksempel: en åpen stue kan ha sofagruppe-sone, lesesone og TV-sone

**Fokuspunkt**
- Hvert rom bør ha et fokuspunkt som trekker blikket
- Kan være en peis, et stort vindu, et kunstverk eller en møbelgruppe
- Ordne møbler rundt fokuspunktet

**Proporsjoner**
- Store møbler i store rom, mindre møbler i små rom
- Varier høyder -- ikke bare lave eller bare høye møbler
- Balanse mellom tunge og lette elementer
- Gulvtepper bør være store nok til at møblenes forben står på teppet`,
    },
    {
      id: 'fb-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Møblere en liten stue',
      problem: 'En stue er 4 x 5 meter med dør på den ene kortveggen og to vinduer på den ene langveggen. Hvordan kan du møblere rommet effektivt?',
      solution: `**Analyse:**
- Rommet er 20 m², middels lite
- Dør på kortveggen definerer ganglinjen
- Vinduer på langveggen gir naturlig lys fra én side

**Løsningsforslag:**
1. **Sofagruppe** langs veggen overfor vinduene (langveggen uten vinduer) -- en 2-seter sofa (160 x 90 cm) med en liten lenestol
2. **TV/medieseksjon** på kortveggen overfor døren, slik at ganglinje fra dør til rom er fri
3. **Sofabord** (80 x 80 cm) foran sofaen med minst 45 cm klaring
4. **Gulvlampe** ved lenestolen for lesekrok
5. **Lite sidebord** ved sofaen
6. **Ganglinjer:** Fri passasje (90 cm) fra dør langs rommet, og mellom sofa og TV

**Prinsippene som brukes:**
- Møbler plassert langs vegger for å frigjøre gulvplass
- Fokuspunkt (TV) overfor hovedsittegruppe
- Lyskilder ved funksjonssonene
- Tilstrekkelig sirkulasjonsrom`,
    },
    {
      id: 'fb-3-3-tip-1',
      type: 'tip',
      title: 'Bruk utklipte papirmøbler',
      content: `En enkel og effektiv metode er å tegne plantegningen og klippe ut møbler i riktig målestokk av papp. Da kan du flytte møblene rundt på tegningen og prøve ulike oppsett før du bestemmer deg. Digitale verktøy som RoomSketcher og Planner 5D gjør samme jobb på skjermen.`,
    },
    {
      id: 'fb-3-3-summary',
      type: 'text',
      content: `## Oppsummering

- Romforståelse handler om å analysere hvordan et rom fungerer med tanke på størrelse, form, lysforhold og bruk.
- En plantegning er en tegning sett ovenfra som viser rommets form, mål og faste elementer (vinduer, dører).
- Målestokk (vanligvis 1:50 eller 1:100) brukes for å forholde seg til virkelige mål i tegningen.
- Funksjonssoner deler rommet inn i områder med ulike bruksformål.
- Sirkulasjon (bevegelsesrom) må planlegges for å sikre god flyt og tilgjengelighet.
- Møblering bør ta hensyn til fokuspunkter, lysforhold, gangsoner og rommets proporsjoner.
- Digitale verktøy som RoomSketcher og Planner 5D kan brukes til planlegging og visualisering.`,
    },
  ],
  exercises: [
    {
      id: 'fb-3-3-ex-1',
      type: 'multiple-choice',
      task: 'I målestokk 1:50, hvor mange centimeter på tegningen tilsvarer en vegg som er 3 meter lang i virkeligheten?',
      options: [
        '3 cm',
        '6 cm',
        '15 cm',
        '30 cm',
      ],
      correctAnswer: 1,
      solution: '3 meter = 300 cm. I målestokk 1:50 deler vi virkelig størrelse med 50: 300 / 50 = 6 cm. Veggen tegnes altså 6 cm lang på tegningen.',
    },
    {
      id: 'fb-3-3-ex-2',
      type: 'classic',
      task: 'Tegn en plantegning i målestokk 1:50 av et rom du kjenner (f.eks. ditt eget soverom). Inkluder vegger, dør, vinduer og møbler med riktige mål.',
      hints: ['Mål rommet først med målebånd. Husk at 1 cm på tegningen tilsvarer 50 cm i virkeligheten.'],
      solution: 'Plantegningen bør vise rommet i riktig målestokk med alle vegger, dør med slagretning, vinduer, og møbler plassert med realistiske mål. Ganglinjer bør være minst 90 cm i virkeligheten (1,8 cm på tegningen).',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fb-3-3-ex-3',
      type: 'multiple-choice',
      task: 'Hva er minimumsbredden for en hovedganglinje i et interiør?',
      options: [
        '50 cm',
        '60 cm',
        '90 cm',
        '120 cm',
      ],
      correctAnswer: 2,
      solution: 'Hovedganglinjer bør være minst 90 cm brede for komfortabel ferdsel. Dette er bredt nok til at en person kan gå fritt, og er også et krav for universell utforming.',
    },
    {
      id: 'fb-3-3-ex-4',
      type: 'classic',
      task: 'Gjør en romanalyse av et klasserom eller et annet offentlig rom. Dokumenter dimensjoner, lysforhold, arkitektoniske elementer og funksjonelle behov. Vurder om rommet er godt tilpasset sin funksjon.',
      solution: 'Analysen bør inkludere: rommets mål og form, plassering og størrelse på dører og vinduer, lysforhold gjennom dagen, faste installasjoner, møblering og ganglinjer, og en vurdering av om rommet støtter sin tiltenkte funksjon. Eventuelle forbedringsforslag bør begrunnes.',
      allowsUpload: true,
    },
    {
      id: 'fb-3-3-ex-5',
      type: 'classic',
      task: 'Forklar hva som menes med "soneinndeling" i interiørdesign og gi et eksempel på hvordan en stor åpen stue kan deles inn i tre ulike soner.',
      solution: 'Soneinndeling betyr å dele et stort rom inn i områder for ulike aktiviteter. Eksempel for en åpen stue: 1) Underholdningssone med sofa, TV og sofabord, definert av et stort gulvteppe. 2) Spisesone med spisebord og stoler, definert av en taklampe over bordet. 3) Arbeidskrok med skrivepult og kontorstol, plassert ved vinduet for naturlig lys. Sonene kan skilles med møbelplassering, belysning, tepper og fargebruk.',
    },
  ],
  keyTerms: [
    { term: 'Plantegning', definition: 'Todimensjonal tegning av rom sett ovenfra i riktig målestokk' },
    { term: 'Målestokk', definition: 'Forholdet mellom tegningens størrelse og virkeligheten, f.eks. 1:50' },
    { term: 'Sirkulasjonssone', definition: 'Område beregnet for ferdsel og bevegelse gjennom rommet' },
    { term: 'Soneinndeling', definition: 'Oppdeling av et rom i ulike funksjonsområder' },
    { term: 'Fokuspunkt', definition: 'Element som trekker blikket og gir rommet et visuelt midtpunkt' },
  ],
};

// ============================================================================
// Kapittel 3.4: Stilarter i interiørdesign
// ============================================================================

export const CHAPTER_FB_VG1_3_4: TextbookChapter = {
  id: 'frisor-blomster-vg1-3-4',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '3.4',
  title: 'Stilarter i interiørdesign',
  description: 'Interiørstiler fra klassisk til moderne, med vekt på skandinavisk design og aktuelle trender.',
  estimatedMinutes: 50,
  competenceGoals: [
    'undersøke og bruke design, kulturuttrykk og stilhistorie som inspirasjon til eige arbeid',
  ],
  content: [
    {
      id: 'fb-3-4-intro',
      type: 'text',
      content: `Interiørdesign har utviklet seg gjennom århundrer, og ulike stilarter reflekterer sin tids estetikk, teknologi og verdier. Å kjenne stilartene gir deg et rikt referansebibliotek å trekke på i eget arbeid. I dette kapittelet utforsker vi de viktigste interiørstilene, fra klassiske europeiske stiler til moderne og skandinavisk design, og ser på hvordan de kan brukes og kombineres i dag.`,
    },
    {
      id: 'fb-3-4-def-1',
      type: 'definition',
      title: 'Interiørstil',
      content: `En interiørstil er et gjenkjennelig sett av designvalg som henger sammen -- fargepalett, møbelformer, materialer, mønstre og romorganisering. Stiler utvikler seg over tid og påvirkes av kunst, arkitektur, teknologi og samfunnsendringer. En interiørdesigner trenger ikke følge én stil slavisk, men bør forstå stilene for å kunne kombinere dem bevisst.`,
    },
    {
      id: 'fb-3-4-text-1',
      type: 'text',
      title: 'Klassiske europeiske stiler',
      content: `**Barokk (1600-1750)**
- Overdådig, symmetrisk og dramatisk
- Tunge stoffer som fløyel og brokade
- Forgylte detaljer, krumme former, marmor
- Mørke, rike farger: dyp rød, gull, mørkeblå

**Rokokko (1730-1780)**
- Lettere og mer leken enn barokk
- Asymmetriske ornamenter, pastelle farger
- Feminine kurver og skjellmotiver
- Rosa, lyseblå, elfenben og gull

**Klassisisme (1770-1850)**
- Inspirert av antikken (Hellas og Roma)
- Symmetri, rene linjer og kolonner
- Lys fargepalett, marmor og forgylling
- Enkle, elegante former

**Jugendstil / Art nouveau (1890-1910)**
- Organiske, bølgende linjer inspirert av naturen
- Stiliserte blomster og planteformer
- Farget glass, smijernsdetaljer
- Rike, myke farger

**Art deco (1920-1940)**
- Geometriske mønstre og strømlinjeformer
- Luksus: messing, marmor, lakk, speil
- Sterke kontraster: sort/gull, sort/hvit
- Stiliserte motiver fra natur og maskinalder`,
    },
    {
      id: 'fb-3-4-text-2',
      type: 'text',
      title: 'Modernisme og etterkrigstid',
      content: `**Bauhaus og funksjonalisme (1920-1960)**
- "Form følger funksjon"
- Rene linjer, ingen unødvendig dekorasjon
- Bruk av nye materialer: stål, glass, betong
- Nøytrale farger med primærfarger som aksenter
- Ikoniske møbler av Breuer, Mies van der Rohe, Le Corbusier

**Midcentury modern (1940-1970)**
- Organiske former og trefokus
- Funksjonell eleganse
- Åpne planløsninger
- Naturlige materialer kombinert med nye (plast, finér)
- Designere som Eames, Wegner, Jacobsen

**Minimalisme (1960-)**
- "Less is more"
- Færrest mulig elementer
- Rene flater, gjemte løsninger
- Nøytral fargepalett: hvit, grå, sort
- Fokus på kvalitet fremfor kvantitet
- Japansk innflytelse (wabi-sabi)`,
    },
    {
      id: 'fb-3-4-text-3',
      type: 'text',
      title: 'Skandinavisk design',
      content: `Skandinavisk design har en særstilling i interiørhistorien og er kanskje den mest innflytelsesrike nordiske eksportartikkelen.

**Kjennetegn:**
- Lys, luftig og funksjonell
- Naturlige materialer: lys tre (eik, ask, bjørk), lin, ull
- Lys fargepalett med dempede aksenter
- Enkle, tidløse former
- "Demokratisk design" -- godt design for alle
- Fokus på lys og trivsel (hygge/kos)

**Viktige skandinaviske designere:**
- **Arne Jacobsen** (Danmark): Egget, Svanen, Myren
- **Hans J. Wegner** (Danmark): Y-stolen, Peacock-stolen
- **Alvar Aalto** (Finland): Bølgevasen, Paimio-stolen
- **Marimekko** (Finland): Ikoniske tekstilmønstre
- **IKEA** (Sverige): Demokratisering av design

**Nordisk minimalisme i dag:**
Moderne skandinavisk interiør kombinerer den klassiske tradisjonen med nye impulser:
- Varmere fargepaletter enn tidlig minimalisme
- Bærekraftige materialer og gjenbruk
- Plantebruk og biofil design
- Personlige detaljer og håndverk
- Teksturer som kompenserer for nøytrale farger`,
    },
    {
      id: 'fb-3-4-text-4',
      type: 'text',
      title: 'Aktuelle interiørtrender',
      content: `**Industriell stil**
- Rå materialer: synlig murstein, betong, stål
- Åpne planløsninger, høyt under taket
- Fabrikk-estetikk: eksponerte rør og ledninger
- Mørk fargepalett med metalliske aksenter

**Bohemsk / Boho**
- Fargerikt og eklektisk
- Miks av mønstre, teksturer og kulturer
- Planter, makramé, tepper og puter
- Personlig og ukonvensjonell

**Japandi (japansk + skandinavisk)**
- Kombinerer nordisk funksjonalisme med japansk zen
- Minimalistisk med varme materialer
- Naturnære farger og teksturer
- Vektlegging av ro og harmoni

**Biofil design**
- Integrerer natur i interiøret
- Planter, naturlig lys, vanninnslag
- Naturlige materialer og organiske former
- Fokus på helse og velvære

Husk at stiler i praksis sjelden brukes rendyrket. De fleste interiører blander elementer fra ulike stiler for å skape noe personlig og funksjonelt.`,
    },
    {
      id: 'fb-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Identifisere en interiørstil',
      problem: 'Et rom har lyse trevegger, en Hans J. Wegner-stol, et enkelt sofabord i eik, ullpledd, og en stor grønn plante. Hvilken stil representerer dette, og hvorfor?',
      solution: `**Svar: Skandinavisk design**

Kjennetegnene som peker mot skandinavisk stil:
1. **Lyse trevegger** -- bruk av lyst tre er typisk nordisk
2. **Hans J. Wegner-stol** -- en ikonisk dansk designer
3. **Sofabord i eik** -- naturlig, lyst treslag
4. **Ullpledd** -- naturlig tekstil som tilfører varme
5. **Stor grønn plante** -- biofilt element, vanlig i nordisk interiør

Rommet viser de klassiske skandinaviske verdiene: funksjonalitet, naturlige materialer, lys estetikk og et fokus på trivsel. Det er tidløst, enkelt og innbydende.`,
    },
    {
      id: 'fb-3-4-summary',
      type: 'text',
      content: `## Oppsummering

- Stilhistorien i interiørdesign strekker seg fra klassisisme, via jugendstil og art deco til modernisme og samtidsdesign.
- Klassisismen preges av symmetri, søyler og elegante proporsjoner inspirert av antikken.
- Modernismen (Bauhaus) vektlegger funksjon, enkelhet og bruk av nye materialer som stål og glass.
- Skandinavisk design kombinerer funksjonalitet, naturlige materialer og lys estetikk.
- Minimalisme handler om å fjerne alt unødvendig og fokusere på det essensielle.
- Industriell stil bruker rå materialer som synlig murstein, stål og betong.
- Ulike stilarter kan kombineres i eklektisk design, men det krever bevisste valg for å skape helhet.`,
    },
  ],
  exercises: [
    {
      id: 'fb-3-4-ex-1',
      type: 'multiple-choice',
      task: 'Hvilken interiørstil kjennetegnes av mottoet "Form følger funksjon"?',
      options: [
        'Art deco',
        'Barokk',
        'Funksjonalisme / Bauhaus',
        'Rokokko',
      ],
      correctAnswer: 2,
      solution: 'Funksjonalisme og Bauhaus-bevegelsen er kjent for prinsippet "Form følger funksjon". Denne retningen la vekt på at designets utforming skulle bestemmes av bruksfunksjonen, ikke av dekorasjon.',
    },
    {
      id: 'fb-3-4-ex-2',
      type: 'classic',
      task: 'Velg to interiørstiler fra kapittelet og lag en sammenligning. Beskriv likheter og forskjeller i fargebruk, materialer og formspråk.',
      solution: 'Svaret bør sammenligne to stiler systematisk. Eksempel: Art deco vs. minimalisme. Art deco bruker geometriske mønstre, luksusmaterialer (messing, marmor) og sterke kontraster. Minimalisme fjerner all unødvendig dekorasjon, bruker nøytrale farger og fokuserer på rene flater. Likheten er at begge verdsetter rene linjer, men Art deco fyller dem med ornamentikk mens minimalisme stripper dem ned.',
      allowsUpload: true,
    },
    {
      id: 'fb-3-4-ex-3',
      type: 'multiple-choice',
      task: 'Hva er "Japandi"?',
      options: [
        'En klassisk japansk interiørstil fra 1800-tallet',
        'En kombinasjon av japansk zen og skandinavisk funksjonalisme',
        'En type japansk trebearbeidingsteknikk',
        'En fargeteknikk brukt i japansk keramikk',
      ],
      correctAnswer: 1,
      solution: 'Japandi er en moderne interiørstil som kombinerer japansk zen-estetikk med skandinavisk funksjonalisme. Den kjennetegnes av minimalisme med varme materialer, naturnære farger og en vektlegging av ro og harmoni.',
    },
    {
      id: 'fb-3-4-ex-4',
      type: 'classic',
      task: 'Nevn tre kjennetegn ved skandinavisk design og forklar hvorfor denne stilen har blitt så populær internasjonalt.',
      solution: 'Tre kjennetegn: 1) Bruk av naturlige materialer som lyst tre, lin og ull. 2) Lys, luftig fargepalett som gjør rom lyse og innbydende. 3) Funksjonelle, tidløse former uten unødvendig dekorasjon. Stilen er populær internasjonalt fordi den kombinerer estetikk med funksjon, skaper trivsel og ro, og er tilgjengelig for mange gjennom "demokratisk design" (IKEA). Den fungerer i mange ulike boliger og klimaer.',
    },
    {
      id: 'fb-3-4-ex-5',
      type: 'classic',
      task: 'Lag et moodboard (digitalt eller fysisk) som viser én valgt interiørstil. Inkluder minst 6 bilder eller elementer som illustrerer stilen, og skriv en kort begrunnelse for valgene dine.',
      solution: 'Moodboardet bør inneholde bilder/elementer som tydelig representerer den valgte stilen: farger, materialer, møbler, teksturer, tilbehør og rombilder. Begrunnelsen bør forklare hvorfor hvert element er valgt og hvordan det representerer stilen.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [
    { term: 'Funksjonalisme', definition: 'Designretning der formen bestemmes av funksjon, ikke dekorasjon' },
    { term: 'Skandinavisk design', definition: 'Nordisk designtradisjon med fokus på lys, naturlige materialer og funksjon' },
    { term: 'Minimalisme', definition: 'Stil som reduserer til det essensielle -- "less is more"' },
    { term: 'Japandi', definition: 'Fusjon av japansk zen-estetikk og skandinavisk funksjonalisme' },
    { term: 'Biofil design', definition: 'Designtilnærming som integrerer natur og naturlige elementer i interiøret' },
  ],
};

// ============================================================================
// Kapittel 3.5: Materialer og tekstiler i interiør
// ============================================================================

export const CHAPTER_FB_VG1_3_5: TextbookChapter = {
  id: 'frisor-blomster-vg1-3-5',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '3.5',
  title: 'Materialer og tekstiler i interiør',
  description: 'Tekstiler, tre, metall og andre materialer, deres egenskaper og bruk i interiørdesign.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere og velje materialar og teknikkar som er eigna for interiør- og eksponeringsdesign',
  ],
  content: [
    {
      id: 'fb-3-5-intro',
      type: 'text',
      content: `Materialer er grunnlaget for alt interiørdesign. De bestemmer ikke bare utseendet, men også hvordan et rom føles, høres og fungerer. Et velvalgt materialmiks kan forvandle et rom fra kaldt og upersonlig til varmt og innbydende. I dette kapittelet utforsker vi de viktigste materialgruppene i interiørdesign -- tekstiler, tre, metaller, stein og nye materialer -- med fokus på egenskaper, bruksområder og bærekraft.`,
    },
    {
      id: 'fb-3-5-def-1',
      type: 'definition',
      title: 'Tekstiler i interiør',
      content: `Tekstiler i interiør omfatter alle vevde, strikkede og ikke-vevde stoffer som brukes i innredning: gardiner, møbelstoffer, puter, tepper, sengetøy og duker. Tekstiler tilfører farge, mønster, tekstur og komfort, og har stor innvirkning på rommets akustikk og atmosfære.`,
    },
    {
      id: 'fb-3-5-text-1',
      type: 'text',
      title: 'Naturlige tekstilfibre',
      content: `**Bomull**
- Myk, pustende og allsidig
- Tåler vask og er enkel å vedlikeholde
- Brukes til gardiner, sengetøy, møbeltrekk og puter
- Absorberer fukt godt
- Kan krympe ved vask

**Ull**
- Varm, slitesterk og naturlig flammehemmende
- Avstøtende mot smuss og fukt
- Brukes til tepper, pledd, møbeltrekk og puter
- Regulerender -- varm om vinteren, sval om sommeren
- Krever forsiktig vedlikehold

**Lin**
- Eksklusivt, naturlig og slitesterkt
- Karakteristisk krøllete utseende
- Brukes til gardiner, duker, sengetøy og møbeltrekk
- Pustende og kjølende
- Bærekraftig -- krever lite vann og sprøytemidler

**Silke**
- Elegant, glansfullt og mykt
- Brukes til dekorative puter, gardiner og lampeskjermer
- Sensitivt for sol og fukt
- Dyrt, brukes som aksentmateriale`,
    },
    {
      id: 'fb-3-5-text-2',
      type: 'text',
      title: 'Tre i interiør',
      content: `Tre er et av de mest brukte materialene i interiørdesign og tilfører varme og naturlighet.

**Hovedtyper:**

**Bartre (bløtt tre):**
- Furu, gran, sedertre
- Lysere, mykere og billigere
- Brukes til gulv, panel, hyller og møbler
- Kan lett merkes og ripes

**Løvtre (hardt tre):**
- Eik, ask, valnøtt, kirsebær, bjørk
- Hardere, mer slitesterkt og dyrere
- Brukes til kvalitetsmøbler, gulv og benketopper
- Vakker åring og struktur

**Overflatebehandling:**
- **Lakkert:** Beskyttende film, blank eller matt finish
- **Oljet:** Trekker inn i treet, naturlig utseende
- **Beiset:** Endrer fargen, bevarer trestruktur
- **Ubehandlet:** Naturlig patina over tid
- **Voks:** Myk glans, tradisjonell behandling

**Bærekraftighet:**
Velg tre fra bærekraftig skogbruk (FSC- eller PEFC-sertifisert). Norsk tre er et godt valg med kort transportvei. Gjenbruk av gammelt treverk er både bærekraftig og gir karakter.`,
    },
    {
      id: 'fb-3-5-text-3',
      type: 'text',
      title: 'Metaller, stein og andre materialer',
      content: `**Metaller:**
- **Stål:** Moderne og industrielt, brukes i møbler, lamper og detaljer
- **Messing:** Varmt gyllent metall, populært i armaturer og detaljer
- **Kobber:** Rødlig glans, utvikler patina, brukes i lamper og dekor
- **Sort metall:** Matt sort stål, typisk for industriell stil
- **Aluminium:** Lett og korrosjonsbestandig

**Stein og mineraler:**
- **Marmor:** Eksklusivt, brukes i benkeplater, gulv og detaljer
- **Granitt:** Hardt og slitesterkt, vanlig i kjøkken
- **Skifer:** Norsk tradisjonsmateriale, brukes i gulv og veggbekledning
- **Terrazzo:** Sammensatt materiale med steinfragmenter, retro-comeback
- **Betong:** Rått og industrielt, brukes i benkeplater og dekor

**Syntetiske materialer:**
- **Laminat:** Rimelig alternativ til tre og stein
- **Akryl og plast:** Formbare, lette, brukes i møbler og belysning
- **Mikrofiber:** Syntetisk tekstil, slitesterk og enkel å vedlikeholde
- **Vinyl:** Vanntett gulv- og veggbekledning

**Gress og bambus:**
- Bærekraftige alternativer, rask fornyelse
- Brukes til gulv, persienner, møbler og dekor`,
    },
    {
      id: 'fb-3-5-text-4',
      type: 'text',
      title: 'Materialmiksing og teksturkontraster',
      content: `En viktig ferdighet i interiørdesign er å kombinere materialer som utfyller hverandre. Materialmiks skaper visuell interesse og dybde.

**Prinsipper for god materialmiksing:**

1. **Kontrast i tekstur:** Kombiner glatte og grove overflater (f.eks. glatt marmor med grovt lin)
2. **Kontrast i temperatur:** Bland varme materialer (tre, tekstil) med kjølige (metall, stein)
3. **Begrens antall:** Bruk 3-5 hovedmaterialer for å unngå kaos
4. **Gjentakelse:** La hvert materiale gå igjen minst to steder i rommet
5. **Bærekraft:** Prioriter holdbare, naturlige og resirkulerbare materialer

**Eksempler på gode kombinasjoner:**
- Eik + lin + messing + marmor (skandinavisk luksus)
- Sort metall + betong + lær + valnøtt (industriell varme)
- Bambus + bomull + keramikk + stein (naturlig zen)`,
    },
    {
      id: 'fb-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Materialvalg for et baderom',
      problem: 'Hvilke materialer er best egnet for et baderom, og hvorfor?',
      solution: `**Baderomet har spesielle krav:** høy fuktighet, vannsprut og behov for hygiene.

**Gulv:** Keramiske fliser eller naturstein med sklisikker overflate. Tåler vann og er enkle å rengjøre. Varme med gulvvarme under.

**Vegger:** Fliser i dusj- og våtsoner. Fuktbestandig maling eller våtromspanel på øvrige vegger. Noen velger mikrosement for et sømløst uttrykk.

**Benkeplater:** Kompositt, marmor (forseglet) eller keramikk. Må tåle fukt og daglig bruk.

**Tekstiler:** Bomullshåndklær (absorberer godt), baderomsmaatter i bomull eller mikrofiber. Unngå ull og silke i baderom.

**Detaljer:** Rustfritt stål eller messing (lakkert) i armaturer. Teak eller bambus i tilbehør (naturlig vannavstøtende).

**Materialene velges ut fra:** vanntålighet, slitestyrke, sklisikkerhet og enkel rengjøring.`,
    },
    {
      id: 'fb-3-5-summary',
      type: 'text',
      content: `## Oppsummering

- Tre er et varmt, naturlig materiale som finnes i mange varianter (furu, eik, ask, valnøtt) med ulike egenskaper.
- Tekstiler tilfører mykhet, farge og tekstur til interiøret og inkluderer bomull, lin, ull og syntetiske stoffer.
- Metaller som stål, messing og kobber brukes i møbler, lamper og detaljer og gir ulike estetiske uttrykk.
- Keramikk, glass og stein er slitesterke materialer som brukes i fliser, benkeplater og dekorasjon.
- Materialvalg påvirkes av funksjon, estetikk, slitestyrke, vedlikehold og bærekraft.
- Ulike materialer har ulike krav til pleie og vedlikehold, noe som bør kommuniseres til kunder.
- Bærekraftige materialer som resirkulert tre, bambus og resirkulert metall blir stadig viktigere i interiørdesign.`,
    },
  ],
  exercises: [
    {
      id: 'fb-3-5-ex-1',
      type: 'multiple-choice',
      task: 'Hvilket naturlig tekstilmateriale er kjent for å være naturlig flammehemmende og smussavstøtende?',
      options: [
        'Bomull',
        'Silke',
        'Lin',
        'Ull',
      ],
      correctAnswer: 3,
      solution: 'Ull er naturlig flammehemmende og har smuss- og fuktavstøtende egenskaper. Dette gjør den ideell for tepper og møbeltrekk i rom der sikkerhet og holdbarhet er viktig.',
    },
    {
      id: 'fb-3-5-ex-2',
      type: 'classic',
      task: 'Forklar forskjellen mellom bartre og løvtre i interiørbruk. Gi eksempler på tresorter og passende bruksområder for hver type.',
      solution: 'Bartre (furu, gran) er mykere, lysere og rimeligere, egnet for panel, hyller og enklere møbler. Løvtre (eik, valnøtt, ask) er hardere og mer slitesterkt, egnet for kvalitetsmøbler, gulv og benkeplater. Bartre kan lettere ripes og merkes, men er lettere å bearbeide. Løvtre har ofte vakrere åring og tåler mer slitasje.',
    },
    {
      id: 'fb-3-5-ex-3',
      type: 'multiple-choice',
      task: 'Hvor mange hovedmaterialer anbefales det å bruke i et rom for å unngå et rotete inntrykk?',
      options: [
        '1-2 materialer',
        '3-5 materialer',
        '6-8 materialer',
        'Så mange som mulig for variasjon',
      ],
      correctAnswer: 1,
      solution: 'Det anbefales å bruke 3-5 hovedmaterialer i et rom. Dette gir nok variasjon til å skape visuell interesse og teksturkontraster, uten at rommet oppleves som rotete eller kaotisk.',
    },
    {
      id: 'fb-3-5-ex-4',
      type: 'classic',
      task: 'Lag en materialoversikt for et tenkt kjøkken. Beskriv hvilke materialer du velger for gulv, vegger, benkeplater, skap og tekstiler, og begrunn valgene dine.',
      solution: 'Eksempel: Gulv i eikeparkett (varmt, slitesterkt). Vegger i hvitmalt panel med fliser over benk (praktisk, enkelt å rengjøre). Benkeplater i kompositt eller granitt (tåler varme og slitasje). Skap i lys eik eller hvitmalte MDF-fronter. Tekstiler i bomull (kjøkkenhåndklær) og lin (gardiner). Alle valg bør begrunnes med materialets egenskaper og rommets krav.',
      allowsUpload: true,
    },
    {
      id: 'fb-3-5-ex-5',
      type: 'classic',
      task: 'Forklar hva som menes med "teksturkontrast" i interiørdesign og gi tre eksempler på effektive teksturkombinasjoner.',
      solution: 'Teksturkontrast oppstår når materialer med ulik overflatestruktur plasseres sammen, noe som skaper visuell og taktil interesse. Eksempler: 1) Glatt marmorbord mot grovt juteteppe -- kontrast mellom polert og rått. 2) Skinnsofa mot strikket ullpledd -- kontrast mellom glatt og mykt. 3) Betongvegg mot silkegardiner -- kontrast mellom hardt/industrielt og mykt/elegant.',
    },
  ],
  keyTerms: [
    { term: 'Tekstil', definition: 'Vevd, strikket eller ikke-vevd stoff brukt i innredning' },
    { term: 'Bartre', definition: 'Myke tresorter som furu og gran, lysere og rimeligere' },
    { term: 'Løvtre', definition: 'Harde tresorter som eik og valnøtt, mer slitesterke' },
    { term: 'Teksturkontrast', definition: 'Visuell og taktil effekt av å kombinere materialer med ulik overflate' },
    { term: 'FSC-sertifisering', definition: 'Sertifisering som garanterer bærekraftig skogbruk' },
  ],
};

// ============================================================================
// Kapittel 3.6: Lyssetting og belysningsdesign
// ============================================================================

export const CHAPTER_FB_VG1_3_6: TextbookChapter = {
  id: 'frisor-blomster-vg1-3-6',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '3.6',
  title: 'Lyssetting og belysningsdesign',
  description: 'Belysningstyper, lyskilder, fargetemperatur, fargegjengavelse og lysplanlegging i interiørdesign.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke ulike verkemiddel som lys, fargar og komposisjon i interiør- og eksponeringsdesign',
  ],
  content: [
    {
      id: 'fb-3-6-intro',
      type: 'text',
      content: `Lys er et av de kraftigste verktøyene i interiørdesign. Det påvirker farger, stemning, funksjon og til og med vår helse og døgnrytme. En god lysplan kan forvandle et rom fullstendig -- det kan gjøre et lite rom luftig, et kaldt rom varmt, og et kjedelig rom dramatisk. I dette kapittelet lærer du om ulike belysningstyper, lyskilder, fargetemperatur og hvordan du planlegger belysning for ulike rom.`,
    },
    {
      id: 'fb-3-6-def-1',
      type: 'definition',
      title: 'Fargetemperatur (Kelvin)',
      content: `Fargetemperatur måles i Kelvin (K) og beskriver lysfargen. Lavere verdier gir varmt, gulaktig lys (2700-3000 K), mens høyere verdier gir kaldt, blåhvitt lys (5000-6500 K). Nøytralt hvitt lys ligger rundt 4000 K. Fargetemperaturen påvirker hvordan vi opplever farger og stemning i et rom.`,
    },
    {
      id: 'fb-3-6-text-1',
      type: 'text',
      title: 'Tre lag med belysning',
      content: `God belysning i interiør bygges opp i tre lag som sammen skaper et komplett og fleksibelt lysbilde:

**1. Generell belysning (allmennbelysning)**
- Gir jevn, overordnet belysning i rommet
- Taklamper, downlights, takspotter
- Bør gi tilstrekkelig lys for å orientere seg og bevege seg trygt
- Anbefalt lysnivå: 150-300 lux i oppholdsrom

**2. Funksjonsbelysning (arbeidsbelysning)**
- Rettet lys der det trengs for spesifikke oppgaver
- Leselampe, skrivebordslampe, kjøkkenbelysning over benk
- Sterkere enn generell belysning i arbeidssonen
- Anbefalt lysnivå: 300-500 lux for arbeidsflater

**3. Stemningsbelysning (aksentbelysning)**
- Skaper atmosfære og fremhever detaljer
- Vegglamper, gulvlamper, lysstriper, stearinlys
- Mykere og ofte varmere lys enn de andre lagene
- Kan dimmes for å tilpasse stemning
- Brukes til å fremheve kunst, arkitektur eller tekstur`,
    },
    {
      id: 'fb-3-6-def-2',
      type: 'definition',
      title: 'Fargegjengivelsesindeks (CRI/Ra)',
      content: `CRI (Color Rendering Index), også kalt Ra-verdi, angir hvor godt en lyskilde gjengir farger sammenlignet med naturlig dagslys. Skalaen går fra 0 til 100, der 100 er perfekt fargegjengivelse. For interiørbruk anbefales minimum Ra 80, og for rom der farger er viktige (f.eks. garderobe, kjøkken) bør Ra være 90 eller høyere.`,
    },
    {
      id: 'fb-3-6-text-2',
      type: 'text',
      title: 'Lyskilder og teknologi',
      content: `**LED (Light Emitting Diode)**
- Dominerende lyskilde i dag
- Svært energieffektiv (bruker 80-90 % mindre strøm enn glødelamper)
- Lang levetid (15 000-50 000 timer)
- Fås i alle fargetemperaturer
- Dimbar (med riktig driver)
- Kompakt og fleksibel -- kan bygges inn overalt

**Glødelampe / halogenlampe**
- Tradisjonell varm lyskvalitet (2700 K)
- Utmerket fargegjengivelse (CRI nær 100)
- Stort energiforbruk -- faset ut i mange land
- Halogenpærer er noe mer effektive enn tradisjonelle glødelamper

**Lysstoffrør og kompaktlysrør**
- Mer energieffektive enn glødelamper
- Bredere lysspredning
- Har ofte dårligere fargegjengivelse
- Erstattes i økende grad av LED

**Smart belysning**
- LED-baserte systemer med trådløs styring
- Kan endre fargetemperatur gjennom dagen
- Programmerbare scener og dimming
- Kan følge døgnrytmen (Human Centric Lighting)
- Styres via app, stemmestyring eller sensorer`,
    },
    {
      id: 'fb-3-6-text-3',
      type: 'text',
      title: 'Lysplanlegging for ulike rom',
      content: `**Stue:**
- Generelt: dimmbar taklampe eller downlights
- Funksjon: leselampe ved sofa
- Stemning: gulvlamper, vegglamper, lysstriper bak TV
- Fargetemperatur: 2700-3000 K for varme og hygge

**Kjøkken:**
- Generelt: kraftig takbelysning
- Funksjon: belysning under overskap rettet mot arbeidsbenk
- Stemning: dimmbar pendel over spisebord
- Fargetemperatur: 3000-4000 K for god fargegjengivelse av mat

**Soverom:**
- Generelt: dimmbar taklampe
- Funksjon: leselamper på nattbord
- Stemning: indirekte belysning, lysstriper
- Fargetemperatur: 2700 K for avslapning
- Unngå blålig lys om kvelden (forstyrrer søvn)

**Baderom:**
- Generelt: vanntett takbelysning
- Funksjon: speilbelysning fra sidene (ikke ovenfra -- unngår skygger i ansiktet)
- Stemning: indirekte belysning for avslappende bad
- Fargetemperatur: 3000-4000 K ved speil, varmere for bad

**Entré / gang:**
- Generelt: innbydende takbelysning
- Funksjon: lys ved speil og garderobe
- Stemning: vegglamper for varmt velkomstsignal`,
    },
    {
      id: 'fb-3-6-example-1',
      type: 'example',
      title: 'Eksempel: Lysplan for en stue',
      problem: 'Lag en enkel lysplan for en stue på 25 m² med sittegruppe, lesekrok og spiseplass.',
      solution: `**Lysplan:**

**Generell belysning:**
- 4-6 innfelte downlights i taket, dimmbare, 3000 K
- Gir jevn grunnbelysning i hele rommet

**Funksjonsbelysning:**
- Justerbar gulvlampe ved lesekroken (3000 K, Ra > 90)
- Pendel over spisebordet (2700-3000 K), dimbar

**Stemningsbelysning:**
- To vegglamper ved sittegruppen (2700 K)
- LED-lysstripe bak TV-møbelet for indirekte belysning
- Gulvlampe i hjørnet for mykt, indirekte lys

**Styring:**
- Dimmere på alle grupper
- Separate brytere for hver sone
- Eventuelt smartsystem med forhåndsprogrammerte scener:
  - "Hverdagskveld": downlights på 40 %, vegglamper på
  - "Film": kun LED bak TV, dempet gulvlampe
  - "Fest": alle lys, spisebordpendel dimmet ned`,
    },
    {
      id: 'fb-3-6-warning-1',
      type: 'warning',
      title: 'Lys og helse',
      content: `Blålig lys (høy fargetemperatur) om kvelden kan forstyrre kroppens produksjon av søvnhormonet melatonin. Bruk derfor varmt lys (2700 K) i soverom og oppholdsrom om kvelden. Human Centric Lighting-systemer kan automatisk justere fargetemperaturen gjennom dagen for å støtte den naturlige døgnrytmen.`,
    },
    {
      id: 'fb-3-6-summary',
      type: 'text',
      content: `## Oppsummering

- Lys er et avgjørende virkemiddel i interiørdesign som påvirker stemning, funksjonalitet og fargeopplevelse.
- Det finnes tre hovedtyper belysning: generell belysning (allment lys), arbeidsbelysning (rettet lys) og dekorativ belysning (stemningslys).
- Fargetemperatur måles i Kelvin (K): varmt lys (2700 K) skaper intimitet, kaldt lys (5000+ K) gir oppmerksomhet.
- CRI (fargegjengivelsesindeks) angir hvor godt en lyskilde gjengir farger, der 100 er best.
- LED har erstattet glødelamper som den dominerende lyskilden på grunn av lavt energiforbruk og lang levetid.
- En god belysningsplan kombinerer ulike lystyper, -nivåer og -temperaturer tilpasset rommets funksjon.
- Dimmere og smartstyring gir fleksibilitet til å tilpasse lyset etter behov og tid på dagen.`,
    },
  ],
  exercises: [
    {
      id: 'fb-3-6-ex-1',
      type: 'multiple-choice',
      task: 'Hva måler fargetemperatur (Kelvin) i forbindelse med belysning?',
      options: [
        'Hvor varmt lyskilden blir fysisk',
        'Hvor mye strøm lyskilden bruker',
        'Lysfargen -- fra varm gulaktig til kald blåhvit',
        'Hvor langt lyset rekker i rommet',
      ],
      correctAnswer: 2,
      solution: 'Fargetemperatur i Kelvin beskriver lysfargen. Lave verdier (2700-3000 K) gir varmt, gulaktig lys som fra stearinlys eller glødelamper. Høye verdier (5000-6500 K) gir kaldt, blåhvitt lys som ligner dagslys.',
    },
    {
      id: 'fb-3-6-ex-2',
      type: 'classic',
      task: 'Forklar de tre lagene med belysning (generell, funksjon, stemning) og gi et konkret eksempel fra et kjøkken på hvert lag.',
      solution: 'Generell belysning: taklampe eller downlights som lyser opp hele kjøkkenet. Funksjonsbelysning: lyslist under overskap som gir godt arbeidslys på benken for matlaging. Stemningsbelysning: dimbar pendel over spisebordet som skaper en hyggelig atmosfære under måltider. Sammen gir de tre lagene et kjøkken som er både praktisk og trivselig.',
    },
    {
      id: 'fb-3-6-ex-3',
      type: 'multiple-choice',
      task: 'Hva er CRI (Ra-verdi)?',
      options: [
        'Et mål på lysstyrke i lumen',
        'Et mål på energiforbruk i watt',
        'Et mål på hvor godt en lyskilde gjengir farger',
        'Et mål på lysets spredningsvinkel',
      ],
      correctAnswer: 2,
      solution: 'CRI (Color Rendering Index) eller Ra-verdi angir hvor godt en lyskilde gjengir farger sammenlignet med naturlig dagslys. Maksverdi er 100. For interiørbruk anbefales minimum Ra 80.',
    },
    {
      id: 'fb-3-6-ex-4',
      type: 'classic',
      task: 'Lag en enkel lysplan for ditt eget soverom (eller et tenkt soverom). Beskriv plassering av lyskilder, fargetemperatur og formålet med hvert lyspunkt.',
      hints: ['Tenk på de tre lagene med belysning og hva du gjør i soverommet (sove, lese, kle på deg).'],
      solution: 'Lysplanen bør inkludere: generell belysning (f.eks. dimmbar taklampe, 2700 K), funksjonsbelysning (leselamper på nattbord, god fargegjengivelse for garderobe), og stemningsbelysning (indirekte lys, varme toner). Alle lyskilder bør ha varm fargetemperatur for å støtte avslapning og søvn.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [
    { term: 'Fargetemperatur', definition: 'Lysfarge målt i Kelvin (K) -- fra varm (2700 K) til kald (6500 K)' },
    { term: 'CRI / Ra-verdi', definition: 'Fargegjengivelsesindeks som viser hvor godt farger gjengis av lyskilden' },
    { term: 'Funksjonsbelysning', definition: 'Rettet lys for spesifikke oppgaver som lesing eller matlaging' },
    { term: 'Stemningsbelysning', definition: 'Mykt, indirekte lys som skaper atmosfære og fremhever detaljer' },
    { term: 'Lux', definition: 'Måleenhet for belysningsstyrke -- lumen per kvadratmeter' },
    { term: 'Human Centric Lighting', definition: 'Belysning som tilpasses døgnrytmen for å støtte helse og velvære' },
  ],
};

// ============================================================================
// Kapittel 3.7: Interiørprosjekt fra idé til presentasjon
// ============================================================================

export const CHAPTER_FB_VG1_3_7: TextbookChapter = {
  id: 'frisor-blomster-vg1-3-7',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '3.7',
  title: 'Interiørprosjekt fra idé til presentasjon',
  description: 'Prosjektarbeid i interiørdesign: moodboards, konseptutvikling, skisser og profesjonell presentasjon.',
  estimatedMinutes: 70,
  competenceGoals: [
    'planlegge, gjennomføre og presentere interiør- og eksponeringsprosjekter',
    'bruke digitale verktøy i design- og presentasjonsarbeid',
  ],
  content: [
    {
      id: 'fb-3-7-intro',
      type: 'text',
      content: `Et interiørprosjekt følger en strukturert prosess fra den første ideen til den ferdige presentasjonen for kunden. Å mestre denne prosessen er like viktig som å ha god smak -- det handler om å arbeide systematisk, dokumentere valgene dine og kommunisere visjonen din tydelig. I dette kapittelet lærer du hele prosjektprosessen: fra behovsanalyse og inspirasjon, via konseptutvikling og moodboards, til ferdig presentasjon.`,
    },
    {
      id: 'fb-3-7-def-1',
      type: 'definition',
      title: 'Moodboard',
      content: `Et moodboard er et visuelt sammensatt brett (fysisk eller digitalt) som formidler stemning, stil og retning for et prosjekt. Det inneholder bilder, fargeprøver, materialprøver, teksturer og inspirasjon som til sammen kommuniserer konseptet. Moodboardet er et viktig verktøy for å sikre at designer og kunde har en felles forståelse av prosjektets retning.`,
    },
    {
      id: 'fb-3-7-text-1',
      type: 'text',
      title: 'Designprosessens faser',
      content: `Et interiørprosjekt gjennomgår typisk følgende faser:

**Fase 1: Behovsanalyse**
- Kartlegg kundens ønsker og behov
- Analyser rommet (mål, lysforhold, eksisterende elementer)
- Definer budsjettrammer
- Avklar tidsplan og praktiske begrensninger
- Still spørsmål: Hvem bruker rommet? Til hva? Hvilken stemning ønskes?

**Fase 2: Inspirasjon og research**
- Samle inspirasjon fra magasiner, nettsider, sosiale medier
- Studere relevante stilarter og trender
- Besøke utstillinger og butikker
- Undersøke materialer og produkter
- Lage et bredt inspirasjonsgrunnlag

**Fase 3: Konseptutvikling**
- Velge retning basert på analyse og inspirasjon
- Utvikle et overordnet konsept (en tydelig idé)
- Lage moodboard som kommuniserer konseptet
- Velge fargepalett, materialer og stilretning
- Bekrefte konseptet med kunden

**Fase 4: Detaljert planlegging**
- Tegne plantegning med møblering
- Velge spesifikke produkter (møbler, lamper, tekstiler)
- Lage belysningsplan
- Utarbeide material- og fargeplan
- Beregne budsjett

**Fase 5: Presentasjon**
- Sette sammen en profesjonell presentasjon
- Visualisere løsningen med skisser, 3D-tegninger eller foto
- Presentere for kunden med begrunnelse for valgene
- Få tilbakemelding og eventuelt justere`,
    },
    {
      id: 'fb-3-7-text-2',
      type: 'text',
      title: 'Lage et moodboard',
      content: `Et godt moodboard formidler konseptet ditt visuelt og intuitivt. Her er en steg-for-steg-guide:

**Steg 1: Samle materiale**
- Bilder som fanger ønsket stemning (ikke bare interiørbilder)
- Fargeprøver (maling, tekstil, papir)
- Materialprøver (trestykker, stoffprøver, fliser)
- Typografi og tekstelementer
- Inspirasjonsbilder fra natur, kunst, mote

**Steg 2: Velg ut og redigér**
- Velg 8-15 elementer som henger sammen
- Sørg for at fargepaletten er gjennomgående
- Fjern alt som ikke støtter konseptet
- Kvalitet over kvantitet

**Steg 3: Komponer**
- Plasser hovedelementet sentralt eller øverst
- La bildene flyte sammen eller overlappe lett
- Inkluder hvitrom (pusterom mellom elementene)
- Fargeprøver plasseres gjerne som en stripe
- Materialprøver grupperes sammen

**Steg 4: Ferdigstill**
- Legg til prosjekttittel og kort beskrivelse
- Inkluder fargepalett med fargekoder
- Navngi materialer og produkter
- Sørg for at moodboardet kan "stå alene"

**Digitale verktøy for moodboards:**
- Canva (gratis, brukervennlig)
- Pinterest (for inspirasjon og samling)
- Adobe InDesign (profesjonelt layout)
- Milanote (visuell prosjektplanlegging)`,
    },
    {
      id: 'fb-3-7-text-3',
      type: 'text',
      title: 'Konseptbeskrivelse og begrunnelse',
      content: `En konseptbeskrivelse setter ord på visjonen din og begrunner designvalgene. Den bør inneholde:

**Overordnet konsept:**
- Gi konseptet et navn eller en tittel (f.eks. "Nordisk ro", "Urban oase")
- Beskriv stemningen du ønsker å skape
- Forklar inspirasjonskilden

**Fargevalg:**
- Beskriv fargepaletten
- Begrunn med fargepsykologi og rommets funksjon
- Angi spesifikke fargekoder (NCS, RAL eller Pantone)

**Materialvalg:**
- Beskriv hovedmaterialene
- Begrunn med funksjon, estetikk og bærekraft
- Angi leverandører og produktnavn

**Møblering og innredning:**
- Beskriv møbelvalg og plassering
- Begrunn med funksjon og rom
- Vis hvordan møblene støtter konseptet

**Belysning:**
- Beskriv lysplanen
- Begrunn med funksjon og stemning
- Angi spesifikke armaturer og fargetemperatur

En god begrunnelse knytter alle valg tilbake til kundens behov og det overordnede konseptet.`,
    },
    {
      id: 'fb-3-7-text-4',
      type: 'text',
      title: 'Skisser og visualisering',
      content: `For å kommunisere designforslaget ditt kan du bruke flere visualiseringsmetoder:

**Håndtegnede skisser:**
- Raske perspektivskisser gir liv til plantegningen
- Trenger ikke være perfekte -- skal vise ideen
- Bruk blyant, tusj og fargeblyanter
- Øv på enkeltpunktsperspektiv for rom

**Digitale 3D-modeller:**
- Gir realistisk visning av det ferdige rommet
- Verktøy: SketchUp (gratis), RoomSketcher, Planner 5D
- Nyttig for å vise kunden nøyaktig resultat
- Kan generere bilder fra ulike vinkler

**Collage og sammensetning:**
- Klipp ut møbler og elementer fra kataloger
- Plasser dem på plantegningen
- Gir en rask visuell oversikt
- Kan gjøres digitalt i Photoshop eller Canva

**Presentasjonsteknikker:**
- Bruk A3 eller digitale presentasjoner
- Start med moodboard og konseptbeskrivelse
- Vis plantegning med møblering
- Vis materialer og farger
- Avslutt med 3D-visualisering eller perspektivskisse
- Hold presentasjonen strukturert og profesjonell`,
    },
    {
      id: 'fb-3-7-example-1',
      type: 'example',
      title: 'Eksempel: Konseptbeskrivelse for et ungdomsrom',
      problem: 'Skriv en kort konseptbeskrivelse for et ungdomsrom til en 16-åring som liker musikk og bøker.',
      solution: `**Konsept: "Kreativ hule"**

**Overordnet visjon:** Et personlig og multifunksjonelt rom som kombinerer avslapning, studier og kreativ utfoldelse. Rommet skal føles som en trygg base som reflekterer beboerens interesser.

**Fargepalett:** Mørk blågrå som hovedfarge på én fondvegg, resten i varm hvit. Aksentfarger i sennepsgul og rust gjennom tekstiler og dekor. Paletten gir dybde og personlighet uten å virke barnslig.

**Materialer:** Eik i skrivepult og hyller (varmt, slitesterkt), bomull og lin i tekstiler (behagelig, pustende), sort metall i lamper og detaljer (moderne, tøft).

**Møblering:** Seng langs fondvegg, skrivepult ved vinduet for naturlig lys, stor bokhylle som romavdeler, sittegruppe med sakkosekk og liten kaffebord for avslapning. Gitarstativ og oppheng for hodetelefoner integrert i innredningen.

**Belysning:** Dimmbar taklampe (3000 K), skrivebordslampe med god arbeidsbelysning, LED-lysstripe bak bokhyllen for stemning.

**Begrunnelse:** Alle valg støtter et rom som er funksjonelt for skolearbeid, innbydende for avslapning, og personlig nok til å reflektere beboerens identitet.`,
    },
    {
      id: 'fb-3-7-tip-1',
      type: 'tip',
      title: 'Presenter med selvtillit',
      content: `Når du presenterer et interiørforslag, vær tydelig på hvorfor du har gjort hvert valg. Knytt valgene til kundens behov og ønsker. Bruk setninger som "Jeg valgte denne fargen fordi..." og "Dette materialet passer godt fordi...". Vær åpen for tilbakemeldinger, men ha faglig begrunnelse for forslagene dine.`,
    },
    {
      id: 'fb-3-7-text-5',
      type: 'text',
      title: 'Prosjektdokumentasjon',
      content: `En komplett prosjektdokumentasjon bør inneholde:

1. **Forside** med prosjektnavn, dato og designer
2. **Behovsanalyse** med kundens ønsker og rommets forutsetninger
3. **Moodboard** med inspirasjon og stemning
4. **Konseptbeskrivelse** med begrunnelse
5. **Fargeplan** med fargekoder og anvendelse
6. **Materialplan** med prøver og leverandører
7. **Plantegning** med møblering i målestokk
8. **Lysplan** med armaturer og lysnivåer
9. **Budsjett** med kostnadsoverslag
10. **Visualisering** med skisser eller 3D-bilder

God dokumentasjon viser profesjonalitet og gjør det enkelt å gjennomføre prosjektet i praksis.`,
    },
    {
      id: 'fb-3-7-summary',
      type: 'text',
      content: `## Oppsummering

- Et interiørprosjekt følger en strukturert designprosess fra behovsanalyse til ferdig presentasjon.
- Behovsanalysen kartlegger kundens ønsker, rommets forutsetninger og praktiske krav.
- Et moodboard samler inspirasjon, farger, materialer og stemning i en visuell presentasjon.
- Konseptutvikling binder alle elementer sammen til en helhetlig idé med tydelig retning.
- Fargeplan, materialplan, plantegning og lysplan er viktige dokumenter i et interiørprosjekt.
- Digitale verktøy som Canva, Figma og 3D-programvare brukes til presentasjon og visualisering.
- God prosjektdokumentasjon viser profesjonalitet og gjør det enkelt å gjennomføre prosjektet i praksis.`,
    },
  ],
  exercises: [
    {
      id: 'fb-3-7-ex-1',
      type: 'multiple-choice',
      task: 'Hva er det første steget i designprosessen for et interiørprosjekt?',
      options: [
        'Lage moodboard',
        'Velge møbler',
        'Behovsanalyse',
        'Tegne plantegning',
      ],
      correctAnswer: 2,
      solution: 'Behovsanalysen er det første steget. Man må forstå kundens ønsker, rommets forutsetninger, budsjett og begrensninger før man begynner å designe. Uten en grundig behovsanalyse risikerer man å lage et design som ikke møter kundens faktiske behov.',
    },
    {
      id: 'fb-3-7-ex-2',
      type: 'classic',
      task: 'Lag et moodboard (fysisk eller digitalt) for et rom du velger selv. Inkluder minst 8 elementer: bilder, fargeprøver og materialforslag. Skriv en kort konseptbeskrivelse som forklarer moodboardet.',
      hints: ['Start med å bestemme stemningen du vil skape. Velg deretter bilder og farger som støtter denne stemningen.'],
      solution: 'Moodboardet vurderes på: tydelig konsept og stemning, gjennomgående fargepalett, variasjon i elementer (bilder, farger, materialer), visuell komposisjon, og en konseptbeskrivelse som forklarer valgene og knytter dem til et helhetlig uttrykk.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fb-3-7-ex-3',
      type: 'multiple-choice',
      task: 'Hvor mange elementer anbefales det å ha på et moodboard?',
      options: [
        '3-5 elementer',
        '8-15 elementer',
        '20-30 elementer',
        'Så mange som mulig',
      ],
      correctAnswer: 1,
      solution: 'Et godt moodboard inneholder typisk 8-15 elementer. For få elementer kommuniserer ikke konseptet tydelig nok, mens for mange gjør det uoversiktlig og utydelig. Kvalitet og relevans er viktigere enn kvantitet.',
    },
    {
      id: 'fb-3-7-ex-4',
      type: 'classic',
      task: 'Gjennomfør et miniprosjekt: Velg et rom (f.eks. en liten stue, et soverom eller en entré) og lag en komplett prosjektdokumentasjon med behovsanalyse, konseptbeskrivelse, fargeplan, og plantegning med møblering.',
      solution: 'Prosjektdokumentasjonen bør inneholde alle delene nevnt i oppgaven: behovsanalyse med definerte behov, konseptbeskrivelse med begrunnelse, fargeplan med minst 3-5 farger og bruksområder, og plantegning med møblering i tilnærmet målestokk. Vurderes på helhet, sammenheng mellom elementene, og faglig begrunnelse.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fb-3-7-ex-5',
      type: 'classic',
      task: 'Forklar hva en konseptbeskrivelse er og hvorfor den er viktig i et interiørprosjekt. Hva bør den inneholde?',
      solution: 'En konseptbeskrivelse er en skriftlig forklaring av den overordnede ideen og retningen for interiørprosjektet. Den er viktig fordi den sikrer at designer og kunde har samme forståelse, begrunner designvalg faglig, og fungerer som en rød tråd gjennom hele prosjektet. Den bør inneholde: konseptnavn, stemningsbeskrivelse, fargevalg med begrunnelse, materialvalg, møblering, og belysning -- alt knyttet tilbake til kundens behov.',
    },
    {
      id: 'fb-3-7-ex-6',
      type: 'classic',
      task: 'Skriv en konseptbeskrivelse for en av følgende: a) en kafé med nordisk tema, b) et venteværelse hos tannlegen, eller c) et lite hjemmekontor. Begrunn alle valg med kunnskap fra kapitlene 3.1-3.6.',
      solution: 'Konseptbeskrivelsen bør inkludere: overordnet konsept med navn, fargepalett med begrunnelse fra fargepsykologi (kap. 3.1-3.2), romplanlegging (kap. 3.3), stilreferanser (kap. 3.4), materialvalg (kap. 3.5) og lysplan (kap. 3.6). Alle valg skal knyttes til rommets funksjon og målgruppe.',
      allowsUpload: true,
    },
    {
      id: 'fb-3-7-ex-7',
      type: 'multiple-choice',
      task: 'Hvilke av følgende er IKKE en del av en komplett prosjektdokumentasjon i interiørdesign?',
      options: [
        'Moodboard og konseptbeskrivelse',
        'Plantegning med møblering',
        'Personlig dagbok fra designprosessen',
        'Budsjett og materialplan',
      ],
      correctAnswer: 2,
      solution: 'En personlig dagbok fra designprosessen er ikke en standard del av prosjektdokumentasjonen. Dokumentasjonen inneholder faglige elementer som moodboard, konseptbeskrivelse, plantegning, fargeplan, materialplan, lysplan, budsjett og visualiseringer.',
    },
  ],
  keyTerms: [
    { term: 'Moodboard', definition: 'Visuelt sammensatt brett som formidler stemning og retning for et prosjekt' },
    { term: 'Konseptbeskrivelse', definition: 'Skriftlig forklaring av den overordnede designideen med begrunnelse' },
    { term: 'Behovsanalyse', definition: 'Kartlegging av kundens ønsker, rommets forutsetninger og begrensninger' },
    { term: 'Designprosess', definition: 'Strukturert arbeidsprosess fra idé via planlegging til ferdig presentasjon' },
    { term: 'Prosjektdokumentasjon', definition: 'Samlet dokumentasjon av alle elementer i et interiørprosjekt' },
    { term: 'Visualisering', definition: 'Visuell fremstilling av designforslaget gjennom skisser, 3D-modeller eller collage' },
  ],
};

// Export alle kapitlene som en array
export const FRISOR_BLOMSTER_VG1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FB_VG1_3_1, CHAPTER_FB_VG1_3_2, CHAPTER_FB_VG1_3_3,
  CHAPTER_FB_VG1_3_4, CHAPTER_FB_VG1_3_5, CHAPTER_FB_VG1_3_6, CHAPTER_FB_VG1_3_7,
];
